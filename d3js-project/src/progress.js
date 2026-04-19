(function () {
  const STORAGE_KEY = "d3js-day-progress-v1";
  const BADGE_SEEN_KEY = "d3js-badge-seen-v1";
  const TRAINING_STORAGE_KEY = "english-trainer-trainings-v1";
  const TOTAL_DAYS = 7;
  const BADGES = [
    {
      id: "starter",
      minDays: 1,
      title: "Starter",
      description: "Du hast mit Tag 1 losgelegt."
    },
    {
      id: "dranbleiber",
      minDays: 3,
      title: "Dranbleiber",
      description: "3 Tage geschafft. Du bleibst dran."
    },
    {
      id: "halbzeit",
      minDays: 4,
      title: "Halbzeit",
      description: "Mehr als die Haelfte ist erledigt."
    },
    {
      id: "finisher",
      minDays: 7,
      title: "Finisher",
      description: "Alle 7 Tage abgeschlossen. Stark!"
    }
  ];

  function ensureBadgeUi(widget) {
    let badgePanel = document.getElementById("d3BadgePanel");
    let badgeList = document.getElementById("d3BadgeList");
    let nextBadge = document.getElementById("d3NextBadge");

    if (!badgePanel) {
      badgePanel = document.createElement("section");
      badgePanel.id = "d3BadgePanel";
      badgePanel.className = "progress-badge-panel";

      const heading = document.createElement("strong");
      heading.textContent = "Badges";

      badgeList = document.createElement("div");
      badgeList.id = "d3BadgeList";
      badgeList.className = "progress-badge-list";

      nextBadge = document.createElement("p");
      nextBadge.id = "d3NextBadge";
      nextBadge.className = "progress-next-badge";

      badgePanel.appendChild(heading);
      badgePanel.appendChild(badgeList);
      badgePanel.appendChild(nextBadge);

      const pillsNode = document.getElementById("d3ProgressPills");
      if (pillsNode && pillsNode.parentElement === widget) {
        widget.insertBefore(badgePanel, pillsNode);
      } else {
        widget.appendChild(badgePanel);
      }
    }

    return { badgeList, nextBadge };
  }

  function loadProgressSet() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return new Set();
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return new Set();
      }
      return new Set(
        parsed
          .map((value) => Number(value))
          .filter((value) => Number.isInteger(value) && value >= 1 && value <= TOTAL_DAYS)
      );
    } catch (error) {
      return new Set();
    }
  }

  function saveProgressSet(progressSet) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...progressSet].sort((a, b) => a - b)));
  }

  function loadSeenBadges() {
    try {
      const raw = localStorage.getItem(BADGE_SEEN_KEY);
      if (!raw) {
        return new Set();
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return new Set();
      }
      return new Set(parsed.map((value) => String(value)));
    } catch (error) {
      return new Set();
    }
  }

  function saveSeenBadges(seenSet) {
    localStorage.setItem(BADGE_SEEN_KEY, JSON.stringify([...seenSet]));
  }

  function createBadgeToastHost() {
    let host = document.getElementById("d3BadgeToastHost");
    if (!host) {
      host = document.createElement("div");
      host.id = "d3BadgeToastHost";
      host.className = "badge-toast-host";
      document.body.appendChild(host);
    }
    return host;
  }

  function showBadgeToast(badge) {
    const host = createBadgeToastHost();
    const toast = document.createElement("div");
    toast.className = "badge-toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = `<strong>Neues Badge: ${badge.title}</strong><p>${badge.description}</p>`;
    host.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("visible");
    });

    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 280);
    }, 2600);
  }

  function getDayFromPath() {
    const match = window.location.pathname.match(/Lernpfad_Tag(\d+)\.html/i);
    if (!match) {
      return null;
    }
    const day = Number(match[1]);
    if (!Number.isInteger(day) || day < 1 || day > TOTAL_DAYS) {
      return null;
    }
    return day;
  }

  function markCurrentDayAsVisited() {
    const day = getDayFromPath();
    if (!day) {
      return;
    }
    const progressSet = loadProgressSet();
    if (!progressSet.has(day)) {
      progressSet.add(day);
      saveProgressSet(progressSet);
    }
  }

  function initCourseraShortcut() {
    const link = document.getElementById("courseraDirectLink");
    if (!link) {
      return;
    }

    let entries = [];
    try {
      const raw = localStorage.getItem(TRAINING_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) {
        entries = parsed;
      }
    } catch (error) {
      entries = [];
    }

    const courseraEntry = entries.find((entry) => {
      const provider = String(entry?.provider || "").toLowerCase();
      const description = String(entry?.description || "").toLowerCase();
      const trainingLink = String(entry?.link || "").toLowerCase();
      return provider.includes("coursera") || description.includes("coursera") || trainingLink.includes("coursera");
    });

    const targetUrl = courseraEntry && typeof courseraEntry.link === "string" ? courseraEntry.link.trim() : "";
    const validUrl = /^https?:\/\//i.test(targetUrl);

    if (validUrl) {
      link.href = targetUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Coursera direkt oeffnen";
    } else {
      link.href = "../src/schulungen.html";
      link.removeAttribute("target");
      link.removeAttribute("rel");
      link.textContent = "Coursera in Schulungen";
    }
  }

  function renderWidget() {
    const widget = document.getElementById("d3ProgressWidget");
    if (!widget) {
      return;
    }

    const countNode = document.getElementById("d3ProgressCount");
    const percentNode = document.getElementById("d3ProgressPercent");
    const fillNode = document.getElementById("d3ProgressFill");
    const pillsNode = document.getElementById("d3ProgressPills");
    const resetButton = document.getElementById("d3ProgressReset");
    const badgeUi = ensureBadgeUi(widget);

    const progressSet = loadProgressSet();
    const seenBadges = loadSeenBadges();

    function update() {
      const completed = progressSet.size;
      const percent = Math.round((completed / TOTAL_DAYS) * 100);

      if (countNode) {
        countNode.textContent = `${completed}/${TOTAL_DAYS} Tage abgeschlossen`;
      }
      if (percentNode) {
        percentNode.textContent = `${percent}%`;
      }
      if (fillNode) {
        fillNode.style.width = `${percent}%`;
      }

      if (badgeUi.badgeList) {
        const unlockedBadges = BADGES.filter((badge) => completed >= badge.minDays);
        badgeUi.badgeList.innerHTML = "";

        if (unlockedBadges.length === 0) {
          const emptyBadge = document.createElement("span");
          emptyBadge.className = "progress-badge-chip muted";
          emptyBadge.textContent = "Noch kein Badge";
          badgeUi.badgeList.appendChild(emptyBadge);
        } else {
          unlockedBadges.forEach((badge) => {
            const chip = document.createElement("span");
            chip.className = "progress-badge-chip";
            chip.title = badge.description;
            chip.textContent = badge.title;
            badgeUi.badgeList.appendChild(chip);
          });

          const newlyUnlocked = unlockedBadges.filter((badge) => !seenBadges.has(badge.id));
          if (newlyUnlocked.length > 0) {
            newlyUnlocked.forEach((badge) => {
              showBadgeToast(badge);
              seenBadges.add(badge.id);
            });
            saveSeenBadges(seenBadges);
          }
        }
      }

      if (badgeUi.nextBadge) {
        const next = BADGES.find((badge) => completed < badge.minDays);
        if (!next) {
          badgeUi.nextBadge.textContent = "Alle Badges freigeschaltet.";
        } else {
          const missing = next.minDays - completed;
          badgeUi.nextBadge.textContent = `Naechstes Badge: ${next.title} (noch ${missing} Tag${missing === 1 ? "" : "e"})`;
        }
      }

      if (pillsNode) {
        pillsNode.innerHTML = "";
        for (let day = 1; day <= TOTAL_DAYS; day += 1) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "progress-pill";
          if (progressSet.has(day)) {
            button.classList.add("done");
          }
          button.textContent = `Tag ${day}`;
          button.setAttribute("aria-pressed", String(progressSet.has(day)));
          button.addEventListener("click", () => {
            if (progressSet.has(day)) {
              progressSet.delete(day);
            } else {
              progressSet.add(day);
            }
            saveProgressSet(progressSet);
            update();
          });
          pillsNode.appendChild(button);
        }
      }
    }

    if (resetButton) {
      resetButton.addEventListener("click", () => {
        progressSet.clear();
        saveProgressSet(progressSet);
        seenBadges.clear();
        saveSeenBadges(seenBadges);
        update();
      });
    }

    update();
  }

  document.addEventListener("DOMContentLoaded", () => {
    markCurrentDayAsVisited();
    initCourseraShortcut();
    renderWidget();
  });
})();