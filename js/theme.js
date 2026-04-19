(function () {
    const THEME_KEY = 'english-trainer-theme';
    const root = document.documentElement;

    function getStoredTheme() {
        try {
            const value = localStorage.getItem(THEME_KEY);
            if (value === 'dark' || value === 'light') {
                return value;
            }
        } catch (error) {
            return null;
        }
        return null;
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            // Ignore storage errors (private mode or blocked storage).
        }
    }

    function resolveInitialTheme() {
        return getStoredTheme() || 'light';
    }

    function updateToggleButton(button, theme) {
        if (!button) {
            return;
        }
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        button.textContent = nextTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
        button.setAttribute('aria-label', `Zu ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode wechseln`);
    }

    function initToggleButton() {
        const toggleButton = document.getElementById('themeToggleButton');
        if (!toggleButton) {
            return;
        }

        updateToggleButton(toggleButton, root.getAttribute('data-theme') || 'light');

        toggleButton.addEventListener('click', () => {
            const current = root.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            saveTheme(next);
            updateToggleButton(toggleButton, next);
        });
    }

    function initNavigationShortcuts() {
        const nav = document.querySelector('.global-switcher');
        if (!nav) {
            return;
        }

        if (nav.querySelector('.switch-link-shortcut')) {
            return;
        }

        const shortcutLinks = document.querySelectorAll('.shortcut-features .shortcut-item[href]');
        if (!shortcutLinks.length) {
            return;
        }

        const existingHrefs = new Set(
            Array.from(nav.querySelectorAll('a[href]')).map((link) => link.getAttribute('href'))
        );

        shortcutLinks.forEach((shortcut) => {
            const href = shortcut.getAttribute('href');
            if (!href || existingHrefs.has(href)) {
                return;
            }

            const navLink = document.createElement('a');
            navLink.className = 'switch-link switch-link-shortcut';
            navLink.href = href;

            const ariaLabel = shortcut.getAttribute('aria-label');
            if (ariaLabel) {
                navLink.setAttribute('aria-label', ariaLabel);
            }

            const iconText = shortcut.querySelector('.shortcut-icon')?.textContent?.trim() || '';
            const labelText = shortcut.querySelector('.shortcut-label')?.textContent?.trim() || shortcut.textContent.trim();

            if (/zeiten/i.test(labelText)) {
                navLink.classList.add('switch-link-shortcut-wide');
            }

            navLink.textContent = iconText ? `${iconText} ${labelText}` : labelText;

            nav.appendChild(navLink);
            existingHrefs.add(href);
        });

        const shortcutBlocks = document.querySelectorAll('.shortcut-features');
        shortcutBlocks.forEach((block) => {
            const panelCard = block.closest('.panel-card');
            if (panelCard) {
                panelCard.style.display = 'none';
            }
        });
    }

    applyTheme(resolveInitialTheme());
    document.addEventListener('DOMContentLoaded', initToggleButton);
    document.addEventListener('DOMContentLoaded', initNavigationShortcuts);
})();