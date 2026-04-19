(function () {
    const TASK_BOARD_KEY = 'ki-lernzentrum-themenboard-v2';
    const TOPIC_PROGRESS_KEY = 'ki-lernzentrum-topic-progress-v1';
    const TOPIC_FAVORITES_KEY = 'ki-lernzentrum-topic-favorites-v1';
    const TOPIC_LEVELS = ['basis', 'praxis', 'profi'];

    const TOPIC_CARDS = [
        {
            id: 'prompt-engineering',
            title: 'Prompt Engineering',
            description: 'Lerne die Grundlagen von Prompts.',
            link: 'ki-thema-mcp.html'
        },
        {
            id: 'mcp',
            title: 'MCP',
            description: 'Model Context Protocol und Agent-Prompts.',
            link: 'ki-thema-mcp.html'
        },
        {
            id: 'ml',
            title: 'ML',
            description: 'Machine Learning Konzepte und Prompts.',
            link: 'ki-thema-ml.html'
        },
        {
            id: 'dl',
            title: 'DL',
            description: 'Deep Learning Techniken und Anwendungen.',
            link: 'ki-thema-dl.html'
        },
        {
            id: 'quiz',
            title: 'Quiz',
            description: 'Teste und vertiefe dein Wissen über alle Themen.',
            link: 'ki-thema-quiz.html'
        },
        {
            id: 'schulungen',
            title: 'Schulungen',
            description: 'Wende alles in echten Projekten an.',
            link: 'schulungen.html'
        }
    ];

    const boardRoot = document.getElementById('taskBoardGrid');
    const statusText = document.getElementById('taskBoardStatus');
    const exportButton = document.getElementById('exportTaskBoardButton');
    const resetButton = document.getElementById('resetTaskBoardButton');
    const topicCards = document.querySelectorAll('[data-topic-key]');
    const overallProgressText = document.getElementById('overallProgressText');
    const overallProgressFill = document.getElementById('overallProgressFill');
    const weeklyTopText = document.getElementById('weeklyTopText');
    const topicCompletionFilter = document.getElementById('topicCompletionFilter');
    const filterStatusText = document.getElementById('filterStatusText');
    const resetTopicProgressButton = document.getElementById('resetTopicProgressButton');

    if (!boardRoot) {
        return;
    }

    const todayIso = getTodayIsoLocal();
    let boardState = loadState();
    let topicProgress = loadTopicProgress();
    let topicFavorites = loadTopicFavorites();
    const topicCardRefreshers = [];

    renderBoard();
    initTopicCardNavigation();
    refreshTopicCardsState();

    if (exportButton) {
        exportButton.addEventListener('click', exportBoard);
    }

    if (resetButton) {
        resetButton.addEventListener('click', resetBoard);
    }

    if (topicCompletionFilter) {
        topicCompletionFilter.addEventListener('change', function () {
            applyTopicFilter();
        });
    }

    if (resetTopicProgressButton) {
        resetTopicProgressButton.addEventListener('click', resetTopicProgress);
    }

    window.addEventListener('focus', function () {
        refreshTopicCardsState();
    });

    function getTodayIsoLocal() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return year + '-' + month + '-' + day;
    }

    function formatIsoDate(iso) {
        if (!iso) {
            return '-';
        }
        const date = new Date(iso + 'T00:00:00');
        return date.toLocaleDateString('de-DE');
    }

    function createEmptyState() {
        const state = {};
        TOPIC_CARDS.forEach((topic) => {
            state[topic.id] = [];
        });
        return state;
    }

    function normalizeEntry(entry) {
        if (!entry || typeof entry !== 'object') {
            return null;
        }

        const note = typeof entry.note === 'string' ? entry.note.trim() : '';
        const date = typeof entry.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) ? entry.date : todayIso;
        const createdAt = typeof entry.createdAt === 'string' ? entry.createdAt : new Date().toISOString();

        if (!note) {
            return null;
        }

        return {
            note: note,
            date: date,
            createdAt: createdAt
        };
    }

    function loadState() {
        const empty = createEmptyState();
        try {
            const raw = localStorage.getItem(TASK_BOARD_KEY);
            if (!raw) {
                return empty;
            }
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') {
                return empty;
            }

            TOPIC_CARDS.forEach((topic) => {
                const list = Array.isArray(parsed[topic.id]) ? parsed[topic.id] : [];
                empty[topic.id] = list.map(normalizeEntry).filter(Boolean);
            });

            return empty;
        } catch (error) {
            return empty;
        }
    }

    function saveState() {
        try {
            localStorage.setItem(TASK_BOARD_KEY, JSON.stringify(boardState));
        } catch (error) {
            setStatus('Speichern im Browser war nicht möglich.');
        }
    }

    function loadTopicProgress() {
        const fallback = {};
        try {
            const raw = localStorage.getItem(TOPIC_PROGRESS_KEY);
            if (!raw) {
                return fallback;
            }
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') {
                return fallback;
            }

            Object.keys(parsed).forEach((topicKey) => {
                const entries = Array.isArray(parsed[topicKey]) ? parsed[topicKey] : [];
                fallback[topicKey] = sanitizeProgressList(entries);
            });

            return fallback;
        } catch (error) {
            return fallback;
        }
    }

    function saveTopicProgress() {
        try {
            localStorage.setItem(TOPIC_PROGRESS_KEY, JSON.stringify(topicProgress));
        } catch (error) {
            // Ignore localStorage errors.
        }
    }

    function sanitizeProgressList(entries) {
        const byKey = new Map();
        entries.forEach((entry) => {
            if (typeof entry === 'string') {
                byKey.set(entry, {
                    key: entry,
                    completedAt: null
                });
                return;
            }

            if (!entry || typeof entry !== 'object' || typeof entry.key !== 'string') {
                return;
            }

            const completedAt = typeof entry.completedAt === 'string' ? entry.completedAt : null;
            const existing = byKey.get(entry.key);
            if (!existing) {
                byKey.set(entry.key, {
                    key: entry.key,
                    completedAt: completedAt
                });
                return;
            }

            if (!existing.completedAt && completedAt) {
                byKey.set(entry.key, {
                    key: entry.key,
                    completedAt: completedAt
                });
            }
        });

        return Array.from(byKey.values());
    }

    function loadTopicFavorites() {
        const fallback = {};
        try {
            const raw = localStorage.getItem(TOPIC_FAVORITES_KEY);
            if (!raw) {
                return fallback;
            }
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') {
                return fallback;
            }

            Object.keys(parsed).forEach((topicKey) => {
                const value = parsed[topicKey];
                if (!value || typeof value !== 'object') {
                    return;
                }
                if (typeof value.level !== 'string' || typeof value.module !== 'string') {
                    return;
                }
                fallback[topicKey] = {
                    level: value.level,
                    module: value.module,
                    savedAt: typeof value.savedAt === 'string' ? value.savedAt : new Date().toISOString()
                };
            });

            return fallback;
        } catch (error) {
            return fallback;
        }
    }

    function saveTopicFavorites() {
        try {
            localStorage.setItem(TOPIC_FAVORITES_KEY, JSON.stringify(topicFavorites));
        } catch (error) {
            // Ignore localStorage errors.
        }
    }

    function setStatus(message) {
        if (statusText) {
            statusText.textContent = message;
        }
    }

    function renderBoard() {
        boardRoot.innerHTML = '';

        TOPIC_CARDS.forEach((topic) => {
            const card = document.createElement('article');
            card.className = 'task-card';

            const heading = document.createElement('h3');
            heading.textContent = topic.title;

            const description = document.createElement('p');
            description.textContent = topic.description;

            const topicLink = document.createElement('a');
            topicLink.className = 'ghost-button';
            topicLink.href = topic.link;
            topicLink.textContent = 'Unterseite öffnen';

            const form = document.createElement('form');
            form.className = 'task-form';

            const dateInput = document.createElement('input');
            dateInput.type = 'date';
            dateInput.value = todayIso;
            dateInput.required = true;

            const noteInput = document.createElement('textarea');
            noteInput.placeholder = 'Aufgabe, Notiz oder Lernziel für dieses Datum...';
            noteInput.required = true;

            const submit = document.createElement('button');
            submit.type = 'submit';
            submit.className = 'primary-button';
            submit.textContent = 'Aufgabe notieren';

            form.appendChild(dateInput);
            form.appendChild(noteInput);
            form.appendChild(submit);

            const list = document.createElement('ul');
            list.className = 'task-list';
            renderEntries(list, topic.id);

            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const note = noteInput.value.trim();
                if (!note) {
                    setStatus('Bitte zuerst eine Notiz eingeben.');
                    return;
                }

                const dateValue = dateInput.value || todayIso;
                const entry = {
                    note: note,
                    date: dateValue,
                    createdAt: new Date().toISOString()
                };

                boardState[topic.id].unshift(entry);
                boardState[topic.id] = boardState[topic.id].slice(0, 12);
                saveState();
                renderEntries(list, topic.id);
                noteInput.value = '';
                setStatus('Gespeichert: ' + topic.title + ' am ' + formatIsoDate(dateValue) + '.');
            });

            card.appendChild(heading);
            card.appendChild(description);
            card.appendChild(topicLink);
            card.appendChild(form);
            card.appendChild(list);
            boardRoot.appendChild(card);
        });
    }

    function initTopicCardNavigation() {
        topicCards.forEach((card) => {
            const topicKey = card.getAttribute('data-topic-key');
            const levelSelect = card.querySelector('[data-level-select]');
            const moduleSelect = card.querySelector('[data-module-select]');
            const openButton = card.querySelector('[data-open-topic]');
            if (!topicKey || !levelSelect || !moduleSelect || !openButton) {
                return;
            }

            const controlsRoot = openButton.parentElement;
            const metaRow = document.createElement('div');
            metaRow.className = 'topic-meta-row';

            const favoriteButton = document.createElement('button');
            favoriteButton.type = 'button';
            favoriteButton.className = 'ghost-button';
            favoriteButton.textContent = 'Favorit speichern';

            const progressText = document.createElement('p');
            progressText.className = 'topic-progress-text';

            const progressTrack = document.createElement('div');
            progressTrack.className = 'topic-progress-track';
            const progressFill = document.createElement('div');
            progressFill.className = 'topic-progress-fill';
            progressTrack.appendChild(progressFill);

            const favoriteText = document.createElement('p');
            favoriteText.className = 'topic-favorite-text';

            metaRow.appendChild(favoriteButton);
            metaRow.appendChild(progressText);
            metaRow.appendChild(progressTrack);
            metaRow.appendChild(favoriteText);
            controlsRoot.appendChild(metaRow);

            function refreshCardMeta() {
                const selectedLevel = levelSelect.value || 'basis';
                const selectedModule = moduleSelect.value || '';
                const modules = Array.from(moduleSelect.options).map((option) => option.value);
                const totalModules = modules.length;
                const doneModules = modules.filter((moduleValue) => isModuleCompleted(topicKey, selectedLevel, moduleValue)).length;
                const percent = totalModules ? Math.round((doneModules / totalModules) * 100) : 0;
                const currentDone = isModuleCompleted(topicKey, selectedLevel, selectedModule);

                progressText.textContent = 'Fortschritt (' + toLevelLabel(selectedLevel) + '): ' + doneModules + '/' + totalModules + ' Module';
                progressFill.style.width = percent + '%';

                if (currentDone) {
                    progressText.textContent += ' - aktuelles Modul erledigt';
                }

                card.dataset.currentDone = currentDone ? 'true' : 'false';
                card.dataset.hasProgress = doneModules > 0 ? 'true' : 'false';

                const favorite = topicFavorites[topicKey];
                if (!favorite) {
                    favoriteButton.textContent = 'Favorit speichern';
                    favoriteText.textContent = 'Kein Favorit für dieses Thema gespeichert.';
                    return;
                }

                const isCurrentFavorite = favorite.level === selectedLevel && favorite.module === selectedModule;
                favoriteButton.textContent = isCurrentFavorite ? 'Favorit aktiv' : 'Favorit aktualisieren';
                favoriteText.textContent = 'Favorit: ' + toLevelLabel(favorite.level) + ' | ' + favorite.module;
            }

            levelSelect.addEventListener('change', function () {
                refreshCardMeta();
                applyTopicFilter();
            });

            moduleSelect.addEventListener('change', function () {
                refreshCardMeta();
                applyTopicFilter();
            });

            favoriteButton.addEventListener('click', function () {
                const selectedLevel = levelSelect.value || 'basis';
                const selectedModule = moduleSelect.value || '';
                topicFavorites[topicKey] = {
                    level: selectedLevel,
                    module: selectedModule,
                    savedAt: new Date().toISOString()
                };
                saveTopicFavorites();
                refreshTopicCardsState();
                setStatus('Favorit gespeichert: ' + topicKey + ' (' + toLevelLabel(selectedLevel) + ' | ' + selectedModule + ').');
            });

            function goToTopic() {
                const level = levelSelect.value || 'basis';
                const module = moduleSelect.value || '';
                const target = buildTopicUrl(topicKey, level, module);
                window.location.href = target;
            }

            openButton.addEventListener('click', function () {
                goToTopic();
            });

            card.addEventListener('click', function (event) {
                if (event.target.closest('a, button, input, textarea, select, form')) {
                    return;
                }
                goToTopic();
            });

            topicCardRefreshers.push(refreshCardMeta);
        });
    }

    function buildTopicUrl(topic, level, module) {
        const query = new URLSearchParams({
            topic: topic,
            level: level,
            module: module
        });
        return 'ki-thema-dynamisch.html?' + query.toString();
    }

    function refreshTopicCardsState() {
        topicProgress = loadTopicProgress();
        topicFavorites = loadTopicFavorites();
        topicCardRefreshers.forEach((refreshFn) => {
            refreshFn();
        });
        updateOverallProgress();
        updateWeeklyTopTopic();
        applyTopicFilter();
    }

    function updateOverallProgress() {
        if (!overallProgressText || !overallProgressFill) {
            return;
        }

        const aggregate = calculateOverallProgress();
        overallProgressText.textContent = 'Gesamtfortschritt: ' + aggregate.done + '/' + aggregate.total + ' Modul-Stufen (' + aggregate.percent + '%).';
        overallProgressFill.style.width = aggregate.percent + '%';
    }

    function updateWeeklyTopTopic() {
        if (!weeklyTopText) {
            return;
        }

        const cutoff = Date.now() - (7 * 24 * 60 * 60 * 1000);
        let topTopicKey = null;
        let topTopicLabel = '';
        let topCount = 0;

        topicCards.forEach((card) => {
            const topicKey = card.getAttribute('data-topic-key');
            const topicLabel = card.querySelector('h2') ? card.querySelector('h2').textContent : topicKey;
            if (!topicKey) {
                return;
            }

            const entries = Array.isArray(topicProgress[topicKey]) ? topicProgress[topicKey] : [];
            const weeklyCount = entries.filter((entry) => {
                if (!entry || typeof entry !== 'object' || typeof entry.completedAt !== 'string') {
                    return false;
                }
                const timestamp = Date.parse(entry.completedAt);
                return Number.isFinite(timestamp) && timestamp >= cutoff;
            }).length;

            if (weeklyCount > topCount) {
                topCount = weeklyCount;
                topTopicKey = topicKey;
                topTopicLabel = topicLabel;
            }
        });

        if (!topTopicKey || topCount === 0) {
            weeklyTopText.textContent = 'Top-Thema diese Woche: noch keine erledigten Module mit Zeitstempel.';
            return;
        }

        weeklyTopText.textContent = 'Top-Thema diese Woche: ' + topTopicLabel + ' (' + topCount + ' erledigte Module).';
    }

    function calculateOverallProgress() {
        let total = 0;
        let done = 0;

        topicCards.forEach((card) => {
            const topicKey = card.getAttribute('data-topic-key');
            const moduleSelect = card.querySelector('[data-module-select]');
            if (!topicKey || !moduleSelect) {
                return;
            }

            const modules = Array.from(moduleSelect.options).map((option) => option.value);
            modules.forEach((moduleValue) => {
                TOPIC_LEVELS.forEach((levelValue) => {
                    total += 1;
                    if (isModuleCompleted(topicKey, levelValue, moduleValue)) {
                        done += 1;
                    }
                });
            });
        });

        return {
            done: done,
            total: total,
            percent: total ? Math.round((done / total) * 100) : 0
        };
    }

    function applyTopicFilter() {
        if (!topicCompletionFilter) {
            return;
        }

        const mode = topicCompletionFilter.value || 'all';
        let visibleCount = 0;

        topicCards.forEach((card) => {
            let show = true;
            if (mode === 'open') {
                show = card.dataset.currentDone !== 'true';
            } else if (mode === 'done') {
                show = card.dataset.currentDone === 'true';
            } else if (mode === 'progress') {
                show = card.dataset.hasProgress === 'true';
            }

            card.hidden = !show;
            if (show) {
                visibleCount += 1;
            }
        });

        if (filterStatusText) {
            filterStatusText.textContent = 'Sichtbar: ' + visibleCount + '/' + topicCards.length + ' Themen (' + toFilterLabel(mode) + ').';
        }
    }

    function toFilterLabel(mode) {
        if (mode === 'open') {
            return 'nur offene Auswahl';
        }
        if (mode === 'done') {
            return 'nur erledigte Auswahl';
        }
        if (mode === 'progress') {
            return 'nur Themen mit Fortschritt';
        }
        return 'alle Themen';
    }

    function resetTopicProgress() {
        if (!confirm('Fortschritt und Favoriten im Themenhub wirklich zurücksetzen?')) {
            return;
        }

        topicProgress = {};
        topicFavorites = {};
        saveTopicProgress();
        saveTopicFavorites();
        refreshTopicCardsState();
        setStatus('Fortschritt und Favoriten wurden zurückgesetzt.');
    }

    function isModuleCompleted(topicKey, level, module) {
        const key = buildProgressKey(level, module);
        const entries = Array.isArray(topicProgress[topicKey]) ? topicProgress[topicKey] : [];
        return entries.some((entry) => entry && typeof entry === 'object' && entry.key === key);
    }

    function buildProgressKey(level, module) {
        return level + '::' + module;
    }

    function toLevelLabel(levelKey) {
        if (levelKey === 'basis') {
            return 'Basis';
        }
        if (levelKey === 'praxis') {
            return 'Praxis';
        }
        return 'Profi';
    }

    function renderEntries(listNode, topicId) {
        listNode.innerHTML = '';
        const entries = Array.isArray(boardState[topicId]) ? boardState[topicId] : [];

        if (!entries.length) {
            const empty = document.createElement('li');
            empty.className = 'task-item';
            empty.innerHTML = '<strong>Noch keine Notizen</strong><span>Lege die erste Aufgabe für dieses Thema an.</span>';
            listNode.appendChild(empty);
            return;
        }

        entries.forEach((entry, index) => {
            const item = document.createElement('li');
            item.className = 'task-item';

            const title = document.createElement('strong');
            title.textContent = formatIsoDate(entry.date);

            const note = document.createElement('span');
            note.textContent = entry.note;

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'ghost-button';
            deleteButton.style.marginTop = '8px';
            deleteButton.textContent = 'Eintrag entfernen';
            deleteButton.addEventListener('click', function () {
                boardState[topicId].splice(index, 1);
                saveState();
                renderEntries(listNode, topicId);
                setStatus('Eintrag entfernt.');
            });

            item.appendChild(title);
            item.appendChild(note);
            item.appendChild(deleteButton);
            listNode.appendChild(item);
        });
    }

    function resetBoard() {
        if (!confirm('Alle Notizen im Aufgabenboard löschen?')) {
            return;
        }
        boardState = createEmptyState();
        saveState();
        renderBoard();
        setStatus('Das Aufgabenboard wurde geleert.');
    }

    function exportBoard() {
        const payload = {
            exportedAt: new Date().toISOString(),
            topics: TOPIC_CARDS,
            entries: boardState
        };

        const json = JSON.stringify(payload, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const datePart = todayIso.replace(/-/g, '');
        link.href = url;
        link.download = 'ki-themenboard-' + datePart + '.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setStatus('Board-Export heruntergeladen.');
    }
})();
