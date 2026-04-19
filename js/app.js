const STORAGE_KEY = 'english-trainer-progress-v4';
const D3JS_ENTRY_CANDIDATES = [
    '../d3js-project/index.html',
    'd3js-project/index.html',
    './d3js-project/index.html',
    '/english-trainer/d3js-project/index.html'
];
const MODE_PREFERENCE_KEY = 'english-trainer-mode-preference-v1';
const PROJECT_STATUS_STORAGE_KEY = 'english-trainer-project-status-v1';
const PLANNER_STORAGE_KEY = 'english-trainer-appointments-v1';
const TRAINING_STORAGE_KEY = 'english-trainer-trainings-v1';
const PLACEMENT_CORE_COUNT = 6;
const PLACEMENT_LISTENING_COUNT = 2;
const PLAN_DAY_TASK_TARGETS = {
    1: { categoryKey: 'grammar', questionIndex: 0 },
    2: { categoryKey: 'vocabulary', questionIndex: 1 },
    3: { categoryKey: 'workday', questionIndex: 3 },
    4: { categoryKey: 'writing', questionIndex: 2 },
    5: { categoryKey: 'grammar', questionIndex: 0 },
    6: { categoryKey: 'vocabulary', questionIndex: 4 },
    7: { categoryKey: 'usage', questionIndex: 0 },
    8: { categoryKey: 'grammar', questionIndex: 1 },
    9: { categoryKey: 'workday', questionIndex: 0 },
    10: { categoryKey: 'usage', questionIndex: 1 },
    11: { categoryKey: 'workday', questionIndex: 3 },
    12: { categoryKey: 'grammar', questionIndex: 4 },
    13: { categoryKey: 'writing', questionIndex: 1 },
    14: { categoryKey: 'usage', questionIndex: 5 },
    15: { categoryKey: 'grammar', questionIndex: 3 },
    16: { categoryKey: 'workday', questionIndex: 1 },
    17: { categoryKey: 'usage', questionIndex: 0 },
    18: { categoryKey: 'workday', questionIndex: 2 },
    19: { categoryKey: 'writing', questionIndex: 0 },
    20: { categoryKey: 'writing', questionIndex: 1 },
    21: { categoryKey: 'usage', questionIndex: 2 },
    22: { categoryKey: 'grammar', questionIndex: 2 },
    23: { categoryKey: 'writing', questionIndex: 2 },
    24: { categoryKey: 'workday', questionIndex: 0 },
    25: { categoryKey: 'vocabulary', questionIndex: 3 },
    26: { categoryKey: 'workday', questionIndex: 2 },
    27: { categoryKey: 'vocabulary', questionIndex: 6 },
    28: { categoryKey: 'usage', questionIndex: 3 },
    29: { categoryKey: 'writing', questionIndex: 1 },
    30: { categoryKey: 'workday', questionIndex: 0 }
};

const modeSelectionScreen = document.getElementById('modeSelectionScreen');
const chooseEnglishMode = document.getElementById('chooseEnglishMode');
const chooseD3Mode = document.getElementById('chooseD3Mode');
const chooseAbnehmMode = document.getElementById('chooseAbnehmMode');
const modeSelectionHint = document.getElementById('modeSelectionHint');
const continueLastModeButton = document.getElementById('continueLastMode');

const pageTitle = document.getElementById('pageTitle');
const pageIntro = document.getElementById('pageIntro');
const roleProfileGrid = document.getElementById('roleProfileGrid');
const selectedRoleName = document.getElementById('selectedRoleName');
const selectedRoleSummary = document.getElementById('selectedRoleSummary');
const selectedRoleFocus = document.getElementById('selectedRoleFocus');
const selectedRoleModules = document.getElementById('selectedRoleModules');
const customRoleTitle = document.getElementById('customRoleTitle');
const customRoleContext = document.getElementById('customRoleContext');
const saveCustomRoleButton = document.getElementById('saveCustomRole');
const placementQuestionList = document.getElementById('placementQuestionList');
const placementListeningList = document.getElementById('placementListeningList');
const placementWritingPrompt = document.getElementById('placementWritingPrompt');
const placementWritingContext = document.getElementById('placementWritingContext');
const placementWritingAnswer = document.getElementById('placementWritingAnswer');
const placementWritingHint = document.getElementById('placementWritingHint');
const submitPlacementTestButton = document.getElementById('submitPlacementTest');
const resetPlacementTestButton = document.getElementById('resetPlacementTest');
const placementResultBox = document.getElementById('placementResultBox');
const roadmapGrid = document.getElementById('roadmapGrid');
const workTopicsGrid = document.getElementById('workTopicsGrid');
const vocabularyListGrid = document.getElementById('vocabularyListGrid');
const flashcardProgress = document.getElementById('flashcardProgress');
const flashcardTerm = document.getElementById('flashcardTerm');
const flashcardMeta = document.getElementById('flashcardMeta');
const flashcardBack = document.getElementById('flashcardBack');
const flashcardTranslation = document.getElementById('flashcardTranslation');
const flashcardExample = document.getElementById('flashcardExample');
const flashcardPlay = document.getElementById('flashcardPlay');
const flashcardReveal = document.getElementById('flashcardReveal');
const flashcardKnown = document.getElementById('flashcardKnown');
const flashcardAgain = document.getElementById('flashcardAgain');
const flashcardNext = document.getElementById('flashcardNext');
const flashcardStats = document.getElementById('flashcardStats');
const mistakesGrid = document.getElementById('mistakesGrid');
const thirtyDayPlanGrid = document.getElementById('thirtyDayPlanGrid');
const completedDaysValue = document.getElementById('completedDaysValue');
const openDaysValue = document.getElementById('openDaysValue');
const adaptiveRecommendation = document.getElementById('adaptiveRecommendation');
const activePlanBanner = document.getElementById('activePlanBanner');
const categoryTabs = document.getElementById('categoryTabs');
const categoryDescription = document.getElementById('categoryDescription');
const accuracyValue = document.getElementById('accuracyValue');
const streakValue = document.getElementById('streakValue');
const bestStreakValue = document.getElementById('bestStreakValue');
const answeredValue = document.getElementById('answeredValue');
const questionBadge = document.getElementById('questionBadge');
const questionProgress = document.getElementById('questionProgress');
const questionPrompt = document.getElementById('questionPrompt');
const questionHint = document.getElementById('questionHint');
const answerModeLabel = document.getElementById('answerModeLabel');
const choiceList = document.getElementById('choiceList');
const textAnswerWrapper = document.getElementById('textAnswerWrapper');
const textAnswer = document.getElementById('textAnswer');
const textAnswerHelp = document.getElementById('textAnswerHelp');
const readQuestionButton = document.getElementById('readQuestionButton');
const readFeedbackButton = document.getElementById('readFeedbackButton');
const stopAudioButton = document.getElementById('stopAudioButton');
const audioVoiceSelect = document.getElementById('audioVoiceSelect');
const audioRateRange = document.getElementById('audioRateRange');
const audioRateValue = document.getElementById('audioRateValue');
const feedbackBox = document.getElementById('feedbackBox');
const nextQuestionButton = document.getElementById('nextQuestion');
const checkAnswerButton = document.getElementById('checkAnswer');
const strengthList = document.getElementById('strengthList');
const journalList = document.getElementById('journalList');
const skillSummaryText = document.getElementById('skillSummaryText');
const skillMatrixList = document.getElementById('skillMatrixList');
const exportJsonButton = document.getElementById('exportJsonButton');
const exportPdfButton = document.getElementById('exportPdfButton');
const autoExportReminderToggle = document.getElementById('autoExportReminderToggle');
const autoExportReminderInterval = document.getElementById('autoExportReminderInterval');
const lastExportInfo = document.getElementById('lastExportInfo');
const resetProgressButton = document.getElementById('resetProgress');
const jumpToTrainerButton = document.getElementById('jumpToTrainer');
const jumpToPlanButton = document.getElementById('jumpToPlan');
const jumpToJournalButton = document.getElementById('jumpToJournal');
const jumpToPlanFromTestButton = document.getElementById('jumpToPlanFromTest');
const jumpToActivePlanDayButton = document.getElementById('jumpToActivePlanDay');
const openModeSelectionButton = document.getElementById('openModeSelection');
const floatingModeSelectionButton = document.getElementById('floatingModeSelectionButton');
const trainerSection = document.getElementById('trainerSection');
const journalSection = document.getElementById('journalSection');
const thirtyDayPlanHeading = document.getElementById('thirtyDayPlanHeading');
const liveClockTime = document.getElementById('liveClockTime');
const liveClockDate = document.getElementById('liveClockDate');
const projectStatusPreviewList = document.getElementById('projectStatusPreviewList');
const plannerPreviewList = document.getElementById('plannerPreviewList');
const modeLiveClockTime = document.getElementById('modeLiveClockTime');
const modeLiveClockDate = document.getElementById('modeLiveClockDate');
const modeProjectStatusPreviewList = document.getElementById('modeProjectStatusPreviewList');
const modePlannerPreviewList = document.getElementById('modePlannerPreviewList');
const modeTrainingTableBody = document.getElementById('modeTrainingTableBody');

const learningContent = window.learningContent;
const categoryKeys = Object.keys(learningContent.modules);
const speechSynthesisApi = window.speechSynthesis || null;

let selectedChoiceIndex = null;
let answerLocked = false;
let flashcardDeckIndex = 0;
let flashcardItemIndex = 0;
let flashcardKnownCount = 0;
let flashcardShownCount = 0;
let availableVoices = [];
let exportReminderTimer = null;
let state = loadState();

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    initializeModeSelection();
    initializeStartSidebar();

    if (!learningContent || categoryKeys.length === 0) {
        feedbackBox.textContent = 'Die Lerndaten konnten nicht geladen werden.';
        feedbackBox.className = 'feedback-box error';
        return;
    }

    pageTitle.textContent = learningContent.title;

    renderRoleProfiles();
    hydrateCustomRoleInputs();
    ensurePlacementQuestionSet();
    renderPlacementTest();
    applyPersonalization();
    renderRoadmap();
    renderWorkTopics();
    renderVocabularyLab();
    renderFlashcard();
    renderThirtyDayPlan();
    renderMistakesGuide();
    renderCategoryTabs();
    updateStats();
    renderLists();
    renderSkillInsights();
    renderQuestion();
    initializeAudioSettings();
    initializeExportReminderSettings();

    checkAnswerButton.addEventListener('click', evaluateCurrentAnswer);
    nextQuestionButton.addEventListener('click', goToNextQuestion);
    resetProgressButton.addEventListener('click', resetProgress);
    submitPlacementTestButton.addEventListener('click', evaluatePlacementTest);
    resetPlacementTestButton.addEventListener('click', resetPlacementTest);
    saveCustomRoleButton.addEventListener('click', saveCustomRoleProfile);
    readQuestionButton.addEventListener('click', () => speakQuestionEnglish());
    readFeedbackButton.addEventListener('click', () => speakModelAnswer());
    stopAudioButton.addEventListener('click', stopAudio);
    flashcardPlay.addEventListener('click', speakFlashcardTerm);
    flashcardReveal.addEventListener('click', toggleFlashcardBack);
    flashcardKnown.addEventListener('click', markFlashcardKnown);
    flashcardAgain.addEventListener('click', markFlashcardAgain);
    flashcardNext.addEventListener('click', goToNextFlashcard);
    audioVoiceSelect.addEventListener('change', onAudioVoiceChange);
    audioRateRange.addEventListener('input', onAudioRateInput);
    exportJsonButton.addEventListener('click', exportProgressAsJson);
    exportPdfButton.addEventListener('click', exportProgressAsPdf);
    autoExportReminderToggle.addEventListener('change', onAutoExportReminderToggle);
    autoExportReminderInterval.addEventListener('change', onAutoExportReminderIntervalChange);
    placementWritingAnswer.addEventListener('input', () => {
        state.placementWritingAnswer = placementWritingAnswer.value;
        saveState();
    });
    jumpToTrainerButton.addEventListener('click', () => trainerSection.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    if (jumpToPlanButton) {
        jumpToPlanButton.addEventListener('click', () => scrollToPlanSection());
    }
    jumpToJournalButton.addEventListener('click', () => journalSection.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    if (jumpToPlanFromTestButton) {
        jumpToPlanFromTestButton.addEventListener('click', () => scrollToPlanSection());
    }
    if (jumpToActivePlanDayButton) {
        jumpToActivePlanDayButton.addEventListener('click', () => scrollToPlanSection());
    }
    if (openModeSelectionButton) {
        openModeSelectionButton.addEventListener('click', reopenModeSelection);
    }
    if (floatingModeSelectionButton) {
        floatingModeSelectionButton.addEventListener('click', reopenModeSelection);
    }

    if (!speechSynthesisApi) {
        readQuestionButton.disabled = true;
        readFeedbackButton.disabled = true;
        stopAudioButton.disabled = true;
        flashcardPlay.disabled = true;
        audioVoiceSelect.disabled = true;
        audioRateRange.disabled = true;
    }
}

function initializeModeSelection() {
    if (!modeSelectionScreen || !chooseEnglishMode || !chooseD3Mode) {
        return;
    }

    const openEnglishDirectly = window.location.hash.toLowerCase() === '#english';
    if (openEnglishDirectly) {
        showEnglishTrainer();
    }

    chooseEnglishMode.addEventListener('click', showEnglishTrainer);
    chooseD3Mode.addEventListener('click', openD3JsArea);
    if (chooseAbnehmMode) {
        chooseAbnehmMode.addEventListener('click', openAbnehmApp);
    }
    if (continueLastModeButton) {
        continueLastModeButton.addEventListener('click', continueWithPreferredMode);
    }
    applyModePreference();
}

function openAbnehmApp() {
    saveModePreference('abnehm');
    window.location.href = 'abnehmtagebuch.html';
}

function showEnglishTrainer() {
    saveModePreference('english');
    document.body.classList.remove('mode-selection-open');
    modeSelectionScreen.setAttribute('hidden', 'hidden');
}

function reopenModeSelection() {
    stopAudio();
    modeSelectionScreen.removeAttribute('hidden');
    document.body.classList.add('mode-selection-open');
    applyModePreference();
}

async function openD3JsArea() {
    saveModePreference('d3js');
    const reachableUrl = await findReachableD3Url();

    if (!reachableUrl) {
        if (modeSelectionHint) {
            modeSelectionHint.textContent = 'D3.js konnte nicht geladen werden. Starte den Server im Projekt-Root (nicht nur im Unterordner src).';
        }
        alert('D3.js ist unter diesem Server-Root nicht erreichbar. Bitte starte den lokalen Server im Ordner english-trainer (Projekt-Root) und versuche es danach erneut.');
        return;
    }

    window.location.href = reachableUrl;
}

function applyModePreference() {
    const preferredMode = readModePreference();
    chooseEnglishMode.classList.toggle('preferred', preferredMode === 'english');
    chooseD3Mode.classList.toggle('preferred', preferredMode === 'd3js');
    if (chooseAbnehmMode) {
        chooseAbnehmMode.classList.toggle('preferred', preferredMode === 'abnehm');
    }

    if (modeSelectionHint) {
        if (preferredMode === 'english') {
            modeSelectionHint.textContent = 'Zuletzt gewählt: Englisch';
        } else if (preferredMode === 'd3js') {
            modeSelectionHint.textContent = 'Zuletzt gewählt: D3.js';
        } else if (preferredMode === 'abnehm') {
            modeSelectionHint.textContent = 'Zuletzt gewählt: Abnehmtagebuch';
        } else {
            modeSelectionHint.textContent = 'Noch keine Auswahl gespeichert.';
        }
    }

    if (continueLastModeButton) {
        continueLastModeButton.disabled = !preferredMode;
    }
}

async function continueWithPreferredMode() {
    const preferredMode = readModePreference();
    if (preferredMode === 'english') {
        showEnglishTrainer();
        return;
    }
    if (preferredMode === 'd3js') {
        await openD3JsArea();
        return;
    }
    if (preferredMode === 'abnehm') {
        openAbnehmApp();
    }
}

async function findReachableD3Url() {
    for (const candidate of D3JS_ENTRY_CANDIDATES) {
        const absoluteUrl = new URL(candidate, window.location.href).toString();
        const ok = await canReachUrl(absoluteUrl);
        if (ok) {
            return absoluteUrl;
        }
    }

    return '';
}

async function canReachUrl(url) {
    try {
        const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
        if (response.ok) {
            return true;
        }
    } catch (error) {
        // Ignore and retry with GET below.
    }

    try {
        const response = await fetch(url, { method: 'GET', cache: 'no-store' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

function saveModePreference(mode) {
    try {
        localStorage.setItem(MODE_PREFERENCE_KEY, mode);
    } catch (error) {
        console.warn('Modus-Präferenz konnte nicht gespeichert werden.', error);
    }
}

function readModePreference() {
    try {
        const value = localStorage.getItem(MODE_PREFERENCE_KEY);
        if (value === 'english' || value === 'd3js' || value === 'abnehm') {
            return value;
        }
        return '';
    } catch (error) {
        console.warn('Modus-Präferenz konnte nicht gelesen werden.', error);
        return '';
    }
}

function initializeStartSidebar() {
    const hasSidebarWidgets =
        liveClockTime || liveClockDate || projectStatusPreviewList || plannerPreviewList ||
        modeLiveClockTime || modeLiveClockDate || modeProjectStatusPreviewList || modePlannerPreviewList || modeTrainingTableBody;
    if (!hasSidebarWidgets) {
        return;
    }

    updateLiveClock();
    window.setInterval(updateLiveClock, 1000);
    renderProjectStatusPreview();
    renderPlannerPreview();
    renderTrainingOverviewTable();
}

function updateLiveClock() {
    const hasClockTargets = liveClockTime || liveClockDate || modeLiveClockTime || modeLiveClockDate;
    if (!hasClockTargets) {
        return;
    }

    const now = new Date();

    if (liveClockTime) {
        liveClockTime.textContent = now.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    if (modeLiveClockTime) {
        modeLiveClockTime.textContent = now.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    if (liveClockDate) {
        liveClockDate.textContent = now.toLocaleDateString('de-DE', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    if (modeLiveClockDate) {
        modeLiveClockDate.textContent = now.toLocaleDateString('de-DE', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
}

function renderProjectStatusPreview() {
    const previewTargets = [projectStatusPreviewList, modeProjectStatusPreviewList]
        .filter(Boolean);
    if (!previewTargets.length) {
        return;
    }

    const entries = readLocalStorageArray(PROJECT_STATUS_STORAGE_KEY)
        .slice(0, 4);

    previewTargets.forEach((target) => {
        target.innerHTML = '';
        if (entries.length === 0) {
            target.innerHTML = '<li>Noch keine Projekte erfasst.</li>';
            return;
        }

        entries.forEach((entry) => {
            const item = document.createElement('li');
            const title = escapeHtml(entry.name || 'Projekt ohne Titel');
            const status = escapeHtml(entry.status || 'Kein Status');
            item.innerHTML = `<span class="entry-title">${title}</span><span>${status}</span>`;
            target.appendChild(item);
        });
    });
}

function renderPlannerPreview() {
    const previewTargets = [plannerPreviewList, modePlannerPreviewList]
        .filter(Boolean);
    if (!previewTargets.length) {
        return;
    }

    const appointments = readLocalStorageArray(PLANNER_STORAGE_KEY)
        .sort((a, b) => buildAppointmentTimestamp(a) - buildAppointmentTimestamp(b))
        .slice(0, 4);

    previewTargets.forEach((target) => {
        target.innerHTML = '';
        if (appointments.length === 0) {
            target.innerHTML = '<li>Noch keine Termine geplant.</li>';
            return;
        }

        appointments.forEach((entry) => {
            const item = document.createElement('li');
            const title = escapeHtml(entry.title || 'Termin ohne Titel');
            const dateText = formatDateAndTime(entry.date, entry.time);
            item.innerHTML = `<span class="entry-title">${title}</span><span>${dateText}</span>`;
            target.appendChild(item);
        });
    });
}

function renderTrainingOverviewTable() {
    if (!modeTrainingTableBody) {
        return;
    }

    const entries = readLocalStorageArray(TRAINING_STORAGE_KEY)
        .filter((entry) => (entry.status || 'Nicht gestartet') !== 'Abgeschlossen')
        .sort((a, b) => {
            const aTime = new Date(`${a.targetEndDate || '9999-12-31'}T00:00:00`).getTime();
            const bTime = new Date(`${b.targetEndDate || '9999-12-31'}T00:00:00`).getTime();
            return aTime - bTime;
        });

    modeTrainingTableBody.innerHTML = '';

    if (!entries.length) {
        modeTrainingTableBody.innerHTML = '<tr><td colspan="4">Keine offenen Schulungen vorhanden.</td></tr>';
        return;
    }

    entries.forEach((entry) => {
        const row = document.createElement('tr');
        const descriptionText = escapeHtml(entry.description || 'Ohne Titel');
        const providerText = escapeHtml(entry.provider || '-');
        const status = escapeHtml(entry.status || 'Nicht gestartet');
        const targetEnd = entry.targetEndDate
            ? new Date(`${entry.targetEndDate}T00:00:00`).toLocaleDateString('de-DE')
            : '-';

        let trainingUrl = '';
        if (typeof entry.link === 'string') {
            const trimmed = entry.link.trim();
            if (/^https?:\/\//i.test(trimmed)) {
                trainingUrl = trimmed;
            }
        }

        const linkedDescription = trainingUrl
            ? `<a href="${escapeHtml(trainingUrl)}" target="_blank" rel="noopener">${descriptionText}</a>`
            : descriptionText;
        const linkedProvider = trainingUrl
            ? `<a href="${escapeHtml(trainingUrl)}" target="_blank" rel="noopener">${providerText}</a>`
            : providerText;

        row.innerHTML = `
            <td>${linkedDescription}</td>
            <td>${linkedProvider}</td>
            <td>${status}</td>
            <td>${escapeHtml(targetEnd)}</td>
        `;
        modeTrainingTableBody.appendChild(row);
    });
}

function readLocalStorageArray(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function buildAppointmentTimestamp(entry) {
    if (!entry || !entry.date) {
        return Number.MAX_SAFE_INTEGER;
    }
    const timestamp = new Date(`${entry.date}T${entry.time || '00:00'}`).getTime();
    return Number.isFinite(timestamp) ? timestamp : Number.MAX_SAFE_INTEGER;
}

function formatDateAndTime(dateValue, timeValue) {
    if (!dateValue) {
        return 'Kein Datum';
    }

    const dateObj = new Date(`${dateValue}T${timeValue || '00:00'}`);
    if (!Number.isFinite(dateObj.getTime())) {
        return 'Ungültiges Datum';
    }

    const datePart = dateObj.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    if (!timeValue) {
        return datePart;
    }
    return `${datePart}, ${timeValue} Uhr`;
}

function createInitialModuleStats() {
    return categoryKeys.reduce((collection, key) => {
        collection[key] = {
            answered: 0,
            correct: 0
        };
        return collection;
    }, {});
}

function createInitialState() {
    return {
        currentCategory: categoryKeys[0],
        currentRoleId: learningContent.roleProfiles[0].id,
        customRole: {
            title: '',
            context: ''
        },
        indices: categoryKeys.reduce((collection, key) => {
            collection[key] = 0;
            return collection;
        }, {}),
        totalAnswered: 0,
        totalCorrect: 0,
        streak: 0,
        bestStreak: 0,
        strengths: [],
        journal: [],
        completedPlanDays: [],
        unlockedPlanDays: [],
        pendingPlanDay: null,
        placementAnswers: {},
        placementListeningAnswers: {},
        activePlacementCoreIndices: [],
        activePlacementListeningIndices: [],
        placementReview: [],
        placementWritingAnswer: '',
        placementBand: 'stabilisieren',
        placementScore: null,
        audioSettings: {
            voiceUri: '',
            rate: 1
        },
        moduleStats: createInitialModuleStats(),
        exportSettings: {
            enabled: false,
            intervalMinutes: 30,
            lastExportAt: null,
            lastExportType: '',
            lastReminderAt: null
        },
        placementBreakdown: {
            core: 0,
            writing: 0,
            listening: 0
        }
    };
}

function loadState() {
    try {
        const rawState = localStorage.getItem(STORAGE_KEY);
        if (!rawState) {
            return createInitialState();
        }

        const parsedState = JSON.parse(rawState);
        return {
            ...createInitialState(),
            ...parsedState,
            customRole: {
                ...createInitialState().customRole,
                ...(parsedState.customRole || {})
            },
            indices: {
                ...createInitialState().indices,
                ...(parsedState.indices || {})
            },
            strengths: Array.isArray(parsedState.strengths) ? parsedState.strengths.slice(0, 6) : [],
            journal: Array.isArray(parsedState.journal) ? parsedState.journal.slice(0, 6) : [],
            completedPlanDays: Array.isArray(parsedState.completedPlanDays) ? parsedState.completedPlanDays : [],
            unlockedPlanDays: Array.isArray(parsedState.unlockedPlanDays) ? parsedState.unlockedPlanDays : [],
            pendingPlanDay: Number.isInteger(parsedState.pendingPlanDay) ? parsedState.pendingPlanDay : null,
            placementAnswers: typeof parsedState.placementAnswers === 'object' && parsedState.placementAnswers !== null ? parsedState.placementAnswers : {},
            placementListeningAnswers: typeof parsedState.placementListeningAnswers === 'object' && parsedState.placementListeningAnswers !== null ? parsedState.placementListeningAnswers : {},
            activePlacementCoreIndices: Array.isArray(parsedState.activePlacementCoreIndices) ? parsedState.activePlacementCoreIndices : [],
            activePlacementListeningIndices: Array.isArray(parsedState.activePlacementListeningIndices) ? parsedState.activePlacementListeningIndices : [],
            placementReview: Array.isArray(parsedState.placementReview) ? parsedState.placementReview : [],
            audioSettings: {
                ...createInitialState().audioSettings,
                ...(parsedState.audioSettings || {})
            },
            moduleStats: {
                ...createInitialModuleStats(),
                ...(parsedState.moduleStats || {})
            },
            exportSettings: {
                ...createInitialState().exportSettings,
                ...(parsedState.exportSettings || {})
            },
            placementBreakdown: {
                ...createInitialState().placementBreakdown,
                ...(parsedState.placementBreakdown || {})
            }
        };
    } catch (error) {
        console.warn('State could not be restored.', error);
        return createInitialState();
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function hydrateCustomRoleInputs() {
    customRoleTitle.value = state.customRole.title || '';
    customRoleContext.value = state.customRole.context || '';
}

function getCurrentRole() {
    const profile = learningContent.roleProfiles.find((entry) => entry.id === state.currentRoleId) || learningContent.roleProfiles[0];

    if (profile.id !== 'custom-role') {
        return profile;
    }

    const customData = state.customRole;
    const contextText = `${customData.title} ${customData.context}`.toLowerCase();
    const dynamicFocus = buildCustomFocus(contextText);
    const dynamicModules = buildCustomModules(contextText);

    return {
        ...profile,
        label: customData.title ? `Eigenes Profil: ${customData.title}` : profile.label,
        summary: customData.context
            ? `Dein individuelles Profil basiert auf diesen Aufgaben: ${customData.context}`
            : profile.summary,
        focus: dynamicFocus,
        recommendedModules: dynamicModules,
        topicPriority: buildCustomTopicPriority(contextText)
    };
}

function buildCustomFocus(contextText) {
    const focus = [];
    if (contextText.includes('report') || contextText.includes('analyse') || contextText.includes('finance')) {
        focus.push('Klare Report- und Zahlensprache');
    }
    if (contextText.includes('call') || contextText.includes('meeting') || contextText.includes('teams')) {
        focus.push('Sichere Formulierungen in Calls und Meetings');
    }
    if (contextText.includes('mail') || contextText.includes('email') || contextText.includes('rückfrage')) {
        focus.push('Höfliche und präzise E-Mail-Kommunikation');
    }
    if (contextText.includes('sap') || contextText.includes('prozess') || contextText.includes('ticket')) {
        focus.push('Präzise Sprache für Systeme und Prozesse');
    }

    return focus.length ? focus.slice(0, 3) : ['Eigene Kernaufgaben sprachlich sicher beschreiben', 'Typische Rückfragen souverän beantworten', 'Arbeitsablauf klar auf Englisch darstellen'];
}

function buildCustomModules(contextText) {
    const modules = ['workday'];
    if (contextText.includes('mail') || contextText.includes('email') || contextText.includes('text')) {
        modules.push('writing');
    }
    if (contextText.includes('meeting') || contextText.includes('call') || contextText.includes('teams')) {
        modules.push('usage');
    }
    if (contextText.includes('report') || contextText.includes('zahl') || contextText.includes('daten')) {
        modules.push('grammar');
    }
    if (!modules.includes('vocabulary')) {
        modules.push('vocabulary');
    }

    return modules.filter((value, index, list) => list.indexOf(value) === index);
}

function buildCustomTopicPriority(contextText) {
    const priorities = [];
    if (contextText.includes('sap') || contextText.includes('prozess')) {
        priorities.push('SAP, Prozesse und Aufgaben');
    }
    if (contextText.includes('mail') || contextText.includes('email')) {
        priorities.push('E-Mails und Rückfragen');
    }
    if (contextText.includes('meeting') || contextText.includes('call') || contextText.includes('teams')) {
        priorities.push('Meetings und Status-Updates', 'Telefon, Teams und spontane Fragen');
    }

    const defaults = ['Meetings und Status-Updates', 'E-Mails und Rückfragen', 'Telefon, Teams und spontane Fragen', 'SAP, Prozesse und Aufgaben'];
    return [...priorities, ...defaults].filter((value, index, list) => list.indexOf(value) === index);
}

function saveCustomRoleProfile() {
    state.customRole.title = customRoleTitle.value.trim();
    state.customRole.context = customRoleContext.value.trim();
    state.currentRoleId = 'custom-role';
    const role = getCurrentRole();
    state.currentCategory = role.recommendedModules[0] || state.currentCategory;

    renderRoleProfiles();
    applyPersonalization();
    renderWorkTopics();
    renderCategoryTabs();
    renderQuestion();
    saveState();
}

function renderRoleProfiles() {
    roleProfileGrid.innerHTML = '';
    learningContent.roleProfiles.forEach((profile) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `role-profile-card secondary-button${state.currentRoleId === profile.id ? ' active' : ''}`;
        button.addEventListener('click', () => selectRole(profile.id));

        const chip = document.createElement('span');
        chip.className = 'profile-chip';
        chip.textContent = profile.chip;

        const heading = document.createElement('h3');
        heading.textContent = profile.label;

        const summary = document.createElement('p');
        summary.textContent = profile.summary;

        button.append(chip, heading, summary);
        roleProfileGrid.appendChild(button);
    });
}

function selectRole(roleId) {
    state.currentRoleId = roleId;
    const role = getCurrentRole();
    state.currentCategory = role.recommendedModules[0] || state.currentCategory;
    renderRoleProfiles();
    applyPersonalization();
    renderWorkTopics();
    renderThirtyDayPlan();
    renderCategoryTabs();
    renderQuestion();
    saveState();
}

function applyPersonalization() {
    const role = getCurrentRole();
    const placementText = getPlacementSummaryText();

    pageIntro.textContent = `${role.summary} ${placementText}`;
    selectedRoleName.textContent = role.label;
    selectedRoleSummary.textContent = role.summary;
    selectedRoleFocus.innerHTML = '';
    role.focus.forEach((focusItem) => {
        const item = document.createElement('li');
        item.textContent = focusItem;
        selectedRoleFocus.appendChild(item);
    });
    selectedRoleModules.textContent = `Empfohlene Module: ${role.recommendedModules.map((moduleKey) => learningContent.modules[moduleKey].label).join(', ')}.`;
    updateAdaptiveRecommendation();
    renderPlacementResult();
}

function renderPlacementTest() {
    ensurePlacementQuestionSet();
    renderPlacementCoreQuestions();
    renderPlacementWriting();
    renderPlacementListening();
    renderPlacementResult();
}

function renderPlacementCoreQuestions() {
    placementQuestionList.innerHTML = '';
    const activeCoreQuestions = getActivePlacementCoreQuestions();
    activeCoreQuestions.forEach((question, index) => {
        const card = buildPlacementChoiceCard(question, `placement-question-${index}`, Number(state.placementAnswers[index]), (choiceIndex) => {
            state.placementAnswers[index] = choiceIndex;
            saveState();
        });

        placementQuestionList.appendChild(card);
    });
}

function renderPlacementWriting() {
    const writing = learningContent.placementWriting;
    placementWritingPrompt.textContent = writing.prompt;
    placementWritingContext.textContent = writing.context;
    placementWritingHint.textContent = writing.hint;
    placementWritingAnswer.value = state.placementWritingAnswer || '';
}

function renderPlacementListening() {
    placementListeningList.innerHTML = '';
    const activeListeningQuestions = getActivePlacementListeningQuestions();
    activeListeningQuestions.forEach((question, index) => {
        const card = buildPlacementChoiceCard(question, `placement-listening-${index}`, Number(state.placementListeningAnswers[index]), (choiceIndex) => {
            state.placementListeningAnswers[index] = choiceIndex;
            saveState();
        });

        const playButton = document.createElement('button');
        playButton.type = 'button';
        playButton.className = 'secondary-button';
        playButton.textContent = 'Audio abspielen';
        playButton.addEventListener('click', () => speakText(question.audioScript, 'en-GB'));

        if (!speechSynthesisApi) {
            playButton.disabled = true;
        }

        card.appendChild(playButton);
        placementListeningList.appendChild(card);
    });
}

function buildPlacementChoiceCard(question, inputName, selectedChoice, onChange) {
    const card = document.createElement('article');
    card.className = 'placement-question-card';

    const heading = document.createElement('h3');
    heading.textContent = question.prompt;

    const context = document.createElement('p');
    context.className = 'section-text';
    context.textContent = question.context;

    const options = document.createElement('div');
    options.className = 'placement-choice-list';

    question.choices.forEach((choice, choiceIndex) => {
        const optionLabel = document.createElement('label');
        optionLabel.className = 'placement-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = inputName;
        input.value = String(choiceIndex);
        input.checked = selectedChoice === choiceIndex;
        input.addEventListener('change', () => onChange(choiceIndex));

        const text = document.createElement('span');
        text.textContent = choice;

        optionLabel.append(input, text);
        options.appendChild(optionLabel);
    });

    card.append(heading, context, options);
    return card;
}

function evaluatePlacementTest() {
    const activeCoreQuestions = getActivePlacementCoreQuestions();
    const activeListeningQuestions = getActivePlacementListeningQuestions();
    const hasAllCore = activeCoreQuestions.every((question, index) => Number.isInteger(Number(state.placementAnswers[index])) && question);
    const hasAllListening = activeListeningQuestions.every((question, index) => Number.isInteger(Number(state.placementListeningAnswers[index])) && question);
    const writingText = placementWritingAnswer.value.trim();

    if (!hasAllCore || !hasAllListening || !writingText) {
        placementResultBox.className = 'feedback-box error';
        placementResultBox.textContent = 'Bitte bearbeite alle Kernfragen, den Schreibteil und beide Hörfragen.';
        return;
    }

    state.placementWritingAnswer = writingText;

    const coreScore = activeCoreQuestions.reduce((count, question, index) => {
        return count + (Number(state.placementAnswers[index]) === question.correctIndex ? 1 : 0);
    }, 0);

    const listeningScore = activeListeningQuestions.reduce((count, question, index) => {
        return count + (Number(state.placementListeningAnswers[index]) === question.correctIndex ? 1 : 0);
    }, 0);

    const writingScore = evaluatePlacementWriting(writingText);
    const totalScore = coreScore + listeningScore + writingScore;

    state.placementBreakdown = {
        core: coreScore,
        writing: writingScore,
        listening: listeningScore
    };
    state.placementScore = totalScore;
    state.placementBand = getPlacementBand(totalScore);
    state.placementReview = collectPlacementReview(activeCoreQuestions, activeListeningQuestions);

    const role = getCurrentRole();
    state.currentCategory = getRecommendedCategoryOrder(role)[0] || state.currentCategory;

    applyPersonalization();
    renderThirtyDayPlan();
    renderCategoryTabs();
    renderQuestion();
    renderSkillInsights();
    saveState();
}

function evaluatePlacementWriting(text) {
    const writingSpec = learningContent.placementWriting;
    const normalizedText = normalizeText(text);
    const wordCount = normalizedText ? normalizedText.split(' ').length : 0;

    let score = 0;
    if (wordCount >= 10) {
        score += 1;
    }

    const hasPhrase = writingSpec.requiredPhrases.some((phrase) => normalizedText.includes(phrase));
    if (hasPhrase) {
        score += 1;
    }

    return score;
}

function resetPlacementTest() {
    const previousWrongCoreIndices = state.placementReview
        .filter((entry) => entry.type === 'core')
        .map((entry) => entry.poolIndex);
    const previousWrongListeningIndices = state.placementReview
        .filter((entry) => entry.type === 'listening')
        .map((entry) => entry.poolIndex);

    state.placementAnswers = {};
    state.placementListeningAnswers = {};
    state.placementWritingAnswer = '';
    state.placementScore = null;
    state.placementBand = 'stabilisieren';
    state.placementBreakdown = {
        core: 0,
        writing: 0,
        listening: 0
    };
    state.activePlacementCoreIndices = buildPlacementQuestionSet(learningContent.placementTest, PLACEMENT_CORE_COUNT, previousWrongCoreIndices);
    state.activePlacementListeningIndices = buildPlacementQuestionSet(learningContent.placementListening, PLACEMENT_LISTENING_COUNT, previousWrongListeningIndices);
    renderPlacementTest();
    applyPersonalization();
    renderThirtyDayPlan();
    renderSkillInsights();
    saveState();
}

function renderPlacementResult() {
    if (state.placementScore === null) {
        placementResultBox.className = 'feedback-box info';
        if (!state.placementReview.length) {
            placementResultBox.textContent = 'Noch keine Auswertung vorhanden. Bearbeite alle Testteile für eine genaue Einstufung.';
            return;
        }

        placementResultBox.innerHTML = `<p>Neue Fragerunde ist bereit. Deine letzten falschen Antworten wurden wieder eingemischt.</p>${buildPlacementReviewHtml(state.placementReview)}`;
        return;
    }

    const role = getCurrentRole();
    const recommendedModules = getRecommendedCategoryOrder(role)
        .slice(0, 3)
        .map((moduleKey) => learningContent.modules[moduleKey].label)
        .join(', ');

    placementResultBox.className = 'feedback-box success';
    const summary = `Ergebnis: ${state.placementScore} von 10. Kernfragen: ${state.placementBreakdown.core}/6, Schreiben: ${state.placementBreakdown.writing}/2, Hören: ${state.placementBreakdown.listening}/2. Modus: ${state.placementBand}. Starte am besten mit: ${recommendedModules}.`;
    const review = state.placementReview.length
        ? `<p>Diese Antworten waren noch falsch:</p>${buildPlacementReviewHtml(state.placementReview)}`
        : '<p>Stark. In dieser Runde waren alle Auswahlfragen korrekt.</p>';
    placementResultBox.innerHTML = `<p>${escapeHtml(summary)}</p>${review}`;
}

function ensurePlacementQuestionSet() {
    const hasValidCoreSet = Array.isArray(state.activePlacementCoreIndices)
        && state.activePlacementCoreIndices.length === PLACEMENT_CORE_COUNT
        && state.activePlacementCoreIndices.every((index) => Number.isInteger(index) && index >= 0 && index < learningContent.placementTest.length);
    const hasValidListeningSet = Array.isArray(state.activePlacementListeningIndices)
        && state.activePlacementListeningIndices.length === PLACEMENT_LISTENING_COUNT
        && state.activePlacementListeningIndices.every((index) => Number.isInteger(index) && index >= 0 && index < learningContent.placementListening.length);

    if (!hasValidCoreSet) {
        state.activePlacementCoreIndices = buildPlacementQuestionSet(learningContent.placementTest, PLACEMENT_CORE_COUNT);
        state.placementAnswers = {};
    }

    if (!hasValidListeningSet) {
        state.activePlacementListeningIndices = buildPlacementQuestionSet(learningContent.placementListening, PLACEMENT_LISTENING_COUNT);
        state.placementListeningAnswers = {};
    }
}

function getActivePlacementCoreQuestions() {
    ensurePlacementQuestionSet();
    return state.activePlacementCoreIndices.map((index) => learningContent.placementTest[index]).filter(Boolean);
}

function getActivePlacementListeningQuestions() {
    ensurePlacementQuestionSet();
    return state.activePlacementListeningIndices.map((index) => learningContent.placementListening[index]).filter(Boolean);
}

function buildPlacementQuestionSet(pool, count, preferredIndices = []) {
    const maxCount = Math.min(count, pool.length);
    const preferred = preferredIndices
        .filter((index) => Number.isInteger(index) && index >= 0 && index < pool.length)
        .filter((index, position, list) => list.indexOf(index) === position)
        .slice(0, maxCount);

    const candidates = [];
    for (let index = 0; index < pool.length; index += 1) {
        if (!preferred.includes(index)) {
            candidates.push(index);
        }
    }

    shuffleArray(candidates);
    return [...preferred, ...candidates.slice(0, maxCount - preferred.length)];
}

function shuffleArray(values) {
    for (let index = values.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
}

function collectPlacementReview(activeCoreQuestions, activeListeningQuestions) {
    const review = [];

    activeCoreQuestions.forEach((question, index) => {
        const selectedChoice = Number(state.placementAnswers[index]);
        if (selectedChoice !== question.correctIndex) {
            review.push({
                type: 'core',
                poolIndex: state.activePlacementCoreIndices[index],
                prompt: question.prompt,
                context: question.context,
                reason: question.explanation || 'Diese Option passt sprachlich noch nicht zur Frage.'
            });
        }
    });

    activeListeningQuestions.forEach((question, index) => {
        const selectedChoice = Number(state.placementListeningAnswers[index]);
        if (selectedChoice !== question.correctIndex) {
            review.push({
                type: 'listening',
                poolIndex: state.activePlacementListeningIndices[index],
                prompt: question.prompt,
                context: question.context,
                reason: question.explanation || 'Im Audio steckt ein anderes Schlüsseldetail als in deiner Auswahl.'
            });
        }
    });

    return review;
}

function buildPlacementReviewHtml(reviewEntries) {
    const items = reviewEntries.map((entry, index) => {
        const typeLabel = entry.type === 'listening' ? 'Hören' : 'Kernfrage';
        return `<li><strong>${index + 1}. ${escapeHtml(typeLabel)}:</strong> ${escapeHtml(entry.prompt)}<br><span>${escapeHtml(entry.context)}</span><br><span>Warum falsch: ${escapeHtml(entry.reason)}</span></li>`;
    });

    return `<ul class="topic-list">${items.join('')}</ul>`;
}

function scrollToPlanSection() {
    if (!thirtyDayPlanHeading) {
        return;
    }
    thirtyDayPlanHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
        scrollPendingPlanDayIntoView();
    }, 260);
}

function scrollPendingPlanDayIntoView() {
    if (!thirtyDayPlanGrid) {
        return;
    }

    const pendingDayNumber = Number(state.pendingPlanDay);
    if (!Number.isInteger(pendingDayNumber) || pendingDayNumber < 1) {
        return;
    }

    const pendingCard = thirtyDayPlanGrid.querySelector(`.day-card[data-plan-day="${pendingDayNumber}"]`);
    if (!pendingCard || !pendingCard.classList.contains('pending')) {
        return;
    }

    pendingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    pendingCard.classList.remove('pending-pulse');
    window.requestAnimationFrame(() => {
        pendingCard.classList.add('pending-pulse');
    });
}

function getPlacementBand(score) {
    if (score <= 4) {
        return 'aufbauen';
    }
    if (score <= 7) {
        return 'stabilisieren';
    }
    return 'ausbauen';
}

function getPlacementSummaryText() {
    if (state.placementScore === null) {
        return 'Wenn du den Starttest machst, werden Kernwissen, Schreiben und Hörverstehen getrennt ausgewertet.';
    }

    if (state.placementBand === 'aufbauen') {
        return 'Dein Plan bleibt kompakt und grundlagenorientiert, damit du schnell Sicherheit aufbaust.';
    }

    if (state.placementBand === 'ausbauen') {
        return 'Dein Plan ist auf Ausbau und aktives Anwenden ausgelegt, damit du schneller in Richtung B1 kommst.';
    }

    return 'Dein Plan ist auf Stabilisieren und gezielte Lückenschließung ausgerichtet.';
}

function getRecommendedCategoryOrder(role = getCurrentRole()) {
    const recommended = role.recommendedModules || [];
    const remaining = categoryKeys.filter((key) => !recommended.includes(key));

    if (state.placementBand === 'aufbauen') {
        return [...recommended, ...remaining].sort((first, second) => {
            const lowLevelPriority = ['grammar', 'usage', 'vocabulary', 'workday', 'writing'];
            return lowLevelPriority.indexOf(first) - lowLevelPriority.indexOf(second);
        });
    }

    if (state.placementBand === 'ausbauen') {
        const highLevelPriority = ['workday', 'writing', 'usage', 'vocabulary', 'grammar'];
        return [...recommended, ...remaining].sort((first, second) => highLevelPriority.indexOf(first) - highLevelPriority.indexOf(second));
    }

    return [...recommended, ...remaining].filter((value, index, list) => list.indexOf(value) === index);
}

function renderRoadmap() {
    roadmapGrid.innerHTML = '';
    learningContent.roadmap.forEach((step) => {
        const card = document.createElement('article');
        card.className = 'roadmap-card';

        const heading = document.createElement('h3');
        heading.textContent = step.phase;

        const focus = document.createElement('p');
        focus.innerHTML = `<strong>${step.focus}</strong>`;

        const goalList = document.createElement('ul');
        goalList.className = 'hero-list';
        step.goals.forEach((goal) => {
            const item = document.createElement('li');
            item.textContent = goal;
            goalList.appendChild(item);
        });

        card.append(heading, focus, goalList);
        roadmapGrid.appendChild(card);
    });
}

function renderWorkTopics() {
    workTopicsGrid.innerHTML = '';
    const role = getCurrentRole();
    const sortedTopics = [...learningContent.workTopics].sort((firstTopic, secondTopic) => {
        const firstPriority = role.topicPriority.indexOf(firstTopic.title);
        const secondPriority = role.topicPriority.indexOf(secondTopic.title);
        const normalizedFirst = firstPriority === -1 ? Number.MAX_SAFE_INTEGER : firstPriority;
        const normalizedSecond = secondPriority === -1 ? Number.MAX_SAFE_INTEGER : secondPriority;
        return normalizedFirst - normalizedSecond;
    });

    sortedTopics.forEach((topic) => {
        const card = document.createElement('article');
        card.className = 'work-topic-card';

        const meta = document.createElement('span');
        meta.className = 'topic-meta';
        meta.textContent = topic.level;

        const heading = document.createElement('h3');
        heading.textContent = topic.title;

        const summary = document.createElement('p');
        summary.textContent = topic.summary;

        const focusList = document.createElement('ul');
        focusList.className = 'topic-list';
        topic.focus.forEach((itemText) => {
            const item = document.createElement('li');
            item.textContent = itemText;
            focusList.appendChild(item);
        });

        card.append(meta, heading, summary, focusList);
        workTopicsGrid.appendChild(card);
    });
}

function renderVocabularyLab() {
    vocabularyListGrid.innerHTML = '';
    learningContent.vocabularyDecks.forEach((deck, index) => {
        const card = document.createElement('article');
        card.className = 'vocabulary-card';

        const meta = document.createElement('span');
        meta.className = 'topic-meta';
        meta.textContent = deck.level;

        const heading = document.createElement('h3');
        heading.textContent = deck.title;

        const activateButton = document.createElement('button');
        activateButton.type = 'button';
        activateButton.className = `secondary-button${flashcardDeckIndex === index ? ' active' : ''}`;
        activateButton.textContent = 'Als Karteikarten starten';
        activateButton.addEventListener('click', () => activateFlashcardDeck(index));

        const fragment = document.createDocumentFragment();
        deck.items.forEach((item) => {
            const pair = document.createElement('div');
            pair.className = 'vocabulary-pair';

            const left = document.createElement('div');
            const term = document.createElement('strong');
            term.textContent = item.term;
            const example = document.createElement('p');
            example.className = 'section-text';
            example.textContent = item.example;
            left.append(term, example);

            const right = document.createElement('button');
            right.type = 'button';
            right.className = 'secondary-button';
            right.textContent = 'Audio';
            right.addEventListener('click', () => speakText(item.term, 'en-GB'));
            if (!speechSynthesisApi) {
                right.disabled = true;
            }

            pair.append(left, right);
            fragment.appendChild(pair);
        });

        card.append(meta, heading, activateButton, fragment);
        vocabularyListGrid.appendChild(card);
    });
}

function activateFlashcardDeck(deckIndex) {
    flashcardDeckIndex = deckIndex;
    flashcardItemIndex = 0;
    flashcardKnownCount = 0;
    flashcardShownCount = 0;
    renderVocabularyLab();
    renderFlashcard();
}

function renderFlashcard() {
    const deck = learningContent.vocabularyDecks[flashcardDeckIndex];
    if (!deck || !deck.items.length) {
        flashcardProgress.textContent = 'Keine Karten';
        flashcardTerm.textContent = '';
        flashcardMeta.textContent = '';
        flashcardBack.classList.remove('visible');
        flashcardStats.textContent = '';
        return;
    }

    const item = deck.items[flashcardItemIndex % deck.items.length];
    flashcardProgress.textContent = `${flashcardItemIndex + 1} / ${deck.items.length}`;
    flashcardTerm.textContent = item.term;
    flashcardMeta.textContent = `${deck.title} | ${deck.level}`;
    flashcardTranslation.textContent = `Deutsch: ${item.translation}`;
    flashcardExample.textContent = `Beispiel: ${item.example}`;
    flashcardBack.classList.remove('visible');

    const knownRate = flashcardShownCount === 0 ? 0 : Math.round((flashcardKnownCount / flashcardShownCount) * 100);
    flashcardStats.textContent = `Karten gesehen: ${flashcardShownCount}. Kannte ich: ${flashcardKnownCount}. Treffer: ${knownRate}%.`;
}

function toggleFlashcardBack() {
    flashcardBack.classList.toggle('visible');
}

function markFlashcardKnown() {
    flashcardKnownCount += 1;
    flashcardShownCount += 1;
    goToNextFlashcard();
}

function markFlashcardAgain() {
    flashcardShownCount += 1;
    goToNextFlashcard();
}

function goToNextFlashcard() {
    const deck = learningContent.vocabularyDecks[flashcardDeckIndex];
    flashcardItemIndex = (flashcardItemIndex + 1) % deck.items.length;
    renderFlashcard();
}

function speakFlashcardTerm() {
    const deck = learningContent.vocabularyDecks[flashcardDeckIndex];
    const item = deck.items[flashcardItemIndex % deck.items.length];
    speakText(item.term, 'en-GB');
}

function renderThirtyDayPlan() {
    thirtyDayPlanGrid.innerHTML = '';
    const completedDays = new Set(state.completedPlanDays);
    const unlockedDays = new Set(state.unlockedPlanDays || []);
    const pendingDayNumber = Number(state.pendingPlanDay);
    const role = getCurrentRole();

    learningContent.thirtyDayPlan.forEach((entry) => {
        const isCompleted = completedDays.has(entry.day);
        const isUnlocked = isCompleted || unlockedDays.has(entry.day);
        const isPending = Number.isInteger(pendingDayNumber) && pendingDayNumber === entry.day && !isCompleted && !isUnlocked;
        const card = document.createElement('article');
        card.className = `day-card${isCompleted ? ' completed' : ''}${isPending ? ' pending' : ''}`;
        card.dataset.planDay = String(entry.day);

        const meta = document.createElement('span');
        meta.className = 'day-meta';
        meta.textContent = `Tag ${entry.day}`;

        const heading = document.createElement('h3');
        heading.textContent = entry.focus;

        if (isPending) {
            const pendingBadge = document.createElement('span');
            pendingBadge.className = 'day-meta day-meta-pending';
            pendingBadge.textContent = 'Aktive Pflichtaufgabe';
            heading.after(pendingBadge);
        }

        const task = document.createElement('p');
        task.className = 'day-task';
        task.textContent = entry.task;

        const output = document.createElement('p');
        output.className = 'day-output';
        output.textContent = `Ziel: ${entry.output}`;

        const adaptiveNote = document.createElement('p');
        adaptiveNote.className = 'day-output';
        adaptiveNote.textContent = buildAdaptivePlanNote(entry, role);

        const requirementNote = document.createElement('p');
        requirementNote.className = 'day-output';
        requirementNote.textContent = buildPlanDayRequirementText(entry.day, isCompleted, isUnlocked);

        const taskJumpButton = document.createElement('button');
        taskJumpButton.type = 'button';
        taskJumpButton.className = 'primary-button day-open-task';
        taskJumpButton.textContent = 'Zu passenden Aufgaben';
        taskJumpButton.addEventListener('click', () => openPlanDayTask(entry));

        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.className = `secondary-button day-toggle${isCompleted ? ' completed' : ''}`;
        toggleButton.textContent = isCompleted ? 'Als erledigt markiert' : (isUnlocked ? 'Tag abhaken' : 'Erst Aufgabe lösen');
        toggleButton.disabled = !isCompleted && !isUnlocked;
        toggleButton.addEventListener('click', () => togglePlanDay(entry.day));

        card.append(meta, heading, task, output, adaptiveNote, requirementNote, taskJumpButton, toggleButton);
        thirtyDayPlanGrid.appendChild(card);
    });

    completedDaysValue.textContent = String(state.completedPlanDays.length);
    openDaysValue.textContent = String(learningContent.thirtyDayPlan.length - state.completedPlanDays.length);
    updateActivePlanDayButton();
    renderActivePlanBanner();
}

function updateActivePlanDayButton() {
    if (!jumpToActivePlanDayButton) {
        return;
    }

    const pendingDayNumber = Number(state.pendingPlanDay);
    const hasPendingDay = Number.isInteger(pendingDayNumber) && pendingDayNumber > 0;

    jumpToActivePlanDayButton.disabled = !hasPendingDay;
    jumpToActivePlanDayButton.textContent = hasPendingDay
        ? `Zum aktiven Tag ${pendingDayNumber}`
        : 'Kein aktiver Tag';
}

function renderActivePlanBanner() {
    if (!activePlanBanner) {
        return;
    }

    const pendingDayNumber = Number(state.pendingPlanDay);
    const hasPendingDay = Number.isInteger(pendingDayNumber) && pendingDayNumber > 0;

    if (!hasPendingDay) {
        activePlanBanner.hidden = true;
        activePlanBanner.textContent = '';
        return;
    }

    const mappedTarget = PLAN_DAY_TASK_TARGETS[pendingDayNumber];
    const module = mappedTarget ? learningContent.modules[mappedTarget.categoryKey] : null;
    const moduleLabel = module ? module.label : 'Praxisbereich';
    activePlanBanner.hidden = false;
    activePlanBanner.textContent = `Aktiver Plan: Tag ${pendingDayNumber}. Pflichtaufgabe jetzt im Bereich ${moduleLabel} loesen und danach im Lernplan abhaken.`;
}

function buildAdaptivePlanNote(entry, role) {
    if (state.placementBand === 'aufbauen') {
        return `Modus Aufbau: Halte diese Aufgabe kurz und klar. Schon ein sauberer Beispielsatz reicht. Berufsbezug: ${role.focus[0]}.`;
    }

    if (state.placementBand === 'ausbauen') {
        return `Modus Ausbau: Erweitere die Aufgabe um einen zweiten Satz oder ein kleines Mini-Beispiel. Berufsbezug: ${role.focus[1]}.`;
    }

    return `Modus Stabilisieren: Arbeite die Aufgabe ruhig und sauber durch. Berufsbezug: ${role.focus[2]}.`;
}

function togglePlanDay(dayNumber) {
    const completedDays = new Set(state.completedPlanDays);
    const unlockedDays = new Set(state.unlockedPlanDays || []);
    const isCompleted = completedDays.has(dayNumber);

    if (!isCompleted && !unlockedDays.has(dayNumber)) {
        feedbackBox.className = 'feedback-box info';
        feedbackBox.textContent = `Tag ${dayNumber} ist noch gesperrt. Oeffne zuerst \"Zu passenden Aufgaben\" und beantworte die Aufgabe korrekt.`;
        return;
    }

    if (completedDays.has(dayNumber)) {
        completedDays.delete(dayNumber);
    } else {
        completedDays.add(dayNumber);
    }

    state.completedPlanDays = Array.from(completedDays).sort((first, second) => first - second);
    renderThirtyDayPlan();
    saveState();
}

function openPlanDayTask(dayEntry) {
    const target = getPlanDayTaskTarget(dayEntry);
    const questionCount = learningContent.modules[target.categoryKey].questions.length;
    const safeIndex = Math.max(0, Math.min(target.questionIndex, questionCount - 1));

    state.pendingPlanDay = Number(dayEntry.day) || null;
    state.currentCategory = target.categoryKey;
    state.indices[target.categoryKey] = safeIndex;
    selectedChoiceIndex = null;
    answerLocked = false;
    stopAudio();
    renderThirtyDayPlan();
    renderCategoryTabs();
    renderQuestion();
    feedbackBox.className = 'feedback-box info';
    feedbackBox.textContent = `Pflichtaufgabe fuer Tag ${dayEntry.day}: Loese diese Aufgabe korrekt, danach kannst du den Tag abhaken.`;
    if (trainerSection) {
        trainerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    saveState();
}

function getPlanDayTaskTarget(dayEntry) {
    const dayNumber = Math.max(1, Number(dayEntry.day) || 1);
    const mappedTarget = PLAN_DAY_TASK_TARGETS[dayNumber];

    if (mappedTarget && learningContent.modules[mappedTarget.categoryKey]) {
        return mappedTarget;
    }

    return {
        categoryKey: 'workday',
        questionIndex: 0
    };
}

function buildPlanDayRequirementText(dayNumber, isCompleted, isUnlocked) {
    if (isCompleted) {
        return 'Status: Tag abgehakt.';
    }

    if (isUnlocked) {
        return 'Status: Pflichtaufgabe erledigt. Du kannst den Tag jetzt abhaken.';
    }

    if (Number(state.pendingPlanDay) === dayNumber) {
        return 'Status: Pflichtaufgabe aktiv. Loese sie korrekt, um den Tag freizuschalten.';
    }

    return 'Status: Gesperrt bis die passende Pflichtaufgabe korrekt geloest wurde.';
}

function isQuestionMatchingPlanTarget(dayNumber, categoryKey, questionIndex) {
    const mappedTarget = PLAN_DAY_TASK_TARGETS[dayNumber];
    if (!mappedTarget) {
        return false;
    }

    const module = learningContent.modules[mappedTarget.categoryKey];
    if (!module || !module.questions.length) {
        return false;
    }

    const safeIndex = Math.max(0, Math.min(mappedTarget.questionIndex, module.questions.length - 1));
    return mappedTarget.categoryKey === categoryKey && safeIndex === questionIndex;
}

function tryUnlockPendingPlanDay(result, categoryKey, questionIndex) {
    const pendingDay = Number(state.pendingPlanDay);
    if (!Number.isInteger(pendingDay) || pendingDay < 1) {
        return;
    }

    if (!result.isCorrect) {
        return;
    }

    if (!isQuestionMatchingPlanTarget(pendingDay, categoryKey, questionIndex)) {
        return;
    }

    const unlockedDays = new Set(state.unlockedPlanDays || []);
    unlockedDays.add(pendingDay);
    state.unlockedPlanDays = Array.from(unlockedDays).sort((first, second) => first - second);
    state.pendingPlanDay = null;
    feedbackBox.textContent = `${feedbackBox.textContent} Tag ${pendingDay} ist jetzt freigeschaltet und kann im Lernplan abgehakt werden.`;
    renderThirtyDayPlan();
}

function renderMistakesGuide() {
    mistakesGrid.innerHTML = '';
    learningContent.commonMistakes.forEach((entry) => {
        const card = document.createElement('article');
        card.className = 'mistake-card';

        const heading = document.createElement('h3');
        heading.textContent = entry.title;

        const description = document.createElement('p');
        description.textContent = entry.reason;

        const wrongLabel = document.createElement('span');
        wrongLabel.className = 'example-label';
        wrongLabel.textContent = 'Falsch';

        const wrongExample = document.createElement('p');
        wrongExample.textContent = entry.wrong;

        const correctLabel = document.createElement('span');
        correctLabel.className = 'example-label';
        correctLabel.textContent = 'Besser';

        const correctExample = document.createElement('p');
        correctExample.textContent = entry.correct;

        card.append(heading, description, wrongLabel, wrongExample, correctLabel, correctExample);
        mistakesGrid.appendChild(card);
    });
}

function renderCategoryTabs() {
    categoryTabs.innerHTML = '';
    getRecommendedCategoryOrder().forEach((key) => {
        const module = learningContent.modules[key];
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `category-button${state.currentCategory === key ? ' active' : ''}`;
        button.textContent = module.label;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', String(state.currentCategory === key));
        button.addEventListener('click', () => switchCategory(key));
        categoryTabs.appendChild(button);
    });
}

function switchCategory(categoryKey) {
    state.currentCategory = categoryKey;
    selectedChoiceIndex = null;
    answerLocked = false;
    stopAudio();
    feedbackBox.className = 'feedback-box';
    feedbackBox.textContent = 'Wähle eine Antwort oder schreibe einen Satz und pruefe dann dein Ergebnis.';
    renderCategoryTabs();
    renderQuestion();
    saveState();
}

function getCurrentModule() {
    return learningContent.modules[state.currentCategory];
}

function getCurrentQuestion() {
    const module = getCurrentModule();
    const currentIndex = state.indices[state.currentCategory] % module.questions.length;
    return {
        question: module.questions[currentIndex],
        index: currentIndex,
        total: module.questions.length
    };
}

function isTextQuestion(question) {
    return question.type === 'text';
}

function renderQuestion() {
    const module = getCurrentModule();
    const { question, index, total } = getCurrentQuestion();
    const textMode = isTextQuestion(question);

    stopAudio();
    categoryDescription.textContent = module.description;
    questionBadge.textContent = module.label;
    questionProgress.textContent = `Aufgabe ${index + 1} von ${total}`;
    questionPrompt.textContent = question.prompt;
    questionHint.textContent = question.context;
    answerModeLabel.textContent = textMode ? 'Freitext' : 'Auswahl';

    choiceList.innerHTML = '';
    choiceList.style.display = textMode ? 'none' : 'grid';
    textAnswerWrapper.classList.toggle('visible', textMode);

    if (textMode) {
        textAnswer.value = '';
        textAnswer.placeholder = question.placeholder || 'Schreibe deine Antwort auf Englisch.';
        textAnswerHelp.textContent = question.answerHelp || 'Schreibe einen kurzen klaren Satz.';
    } else {
        question.choices.forEach((choice, indexOfChoice) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'choice-button';
            button.textContent = choice;
            button.setAttribute('aria-pressed', 'false');
            button.addEventListener('click', () => selectChoice(indexOfChoice));
            choiceList.appendChild(button);
        });
        textAnswerHelp.textContent = '';
    }

    selectedChoiceIndex = null;
    answerLocked = false;
    nextQuestionButton.disabled = true;
    feedbackBox.className = 'feedback-box';
    feedbackBox.textContent = textMode
        ? 'Schreibe deine Antwort auf Englisch. Danach bekommst du eine direkte Rückmeldung mit Modellantwort.'
        : 'Wähle die beste Antwort. Danach bekommst du direkt eine kurze Erklärung.';
    updateAdaptiveRecommendation();
}

function selectChoice(indexOfChoice) {
    if (answerLocked) {
        return;
    }

    selectedChoiceIndex = indexOfChoice;
    Array.from(choiceList.children).forEach((button, buttonIndex) => {
        button.classList.toggle('selected', buttonIndex === indexOfChoice);
        button.setAttribute('aria-pressed', String(buttonIndex === indexOfChoice));
    });
}

function evaluateCurrentAnswer() {
    if (answerLocked) {
        return;
    }

    const module = getCurrentModule();
    const { question, index: questionIndex } = getCurrentQuestion();
    const result = isTextQuestion(question) ? evaluateTextQuestion(question) : evaluateChoiceQuestion(question);

    if (!result) {
        return;
    }

    answerLocked = true;
    state.totalAnswered += 1;
    const moduleStats = state.moduleStats[state.currentCategory] || { answered: 0, correct: 0 };
    moduleStats.answered += 1;

    if (result.isCorrect) {
        state.totalCorrect += 1;
        moduleStats.correct += 1;
        state.streak += 1;
        state.bestStreak = Math.max(state.bestStreak, state.streak);
        state.strengths = [
            {
                title: module.label,
                detail: question.coachTip
            },
            ...state.strengths
        ].slice(0, 6);
        feedbackBox.className = 'feedback-box success';
        feedbackBox.textContent = result.feedback;
    } else {
        state.streak = 0;
        state.journal = [
            {
                title: question.prompt,
                detail: result.journalDetail
            },
            ...state.journal
        ].slice(0, 6);
        feedbackBox.className = 'feedback-box error';
        feedbackBox.textContent = result.feedback;
    }

    if (!isTextQuestion(question)) {
        Array.from(choiceList.children).forEach((button, buttonIndex) => {
            button.classList.remove('selected');
            button.setAttribute('aria-pressed', 'false');
            if (buttonIndex === question.correctIndex) {
                button.classList.add('correct');
            } else if (buttonIndex === selectedChoiceIndex && !result.isCorrect) {
                button.classList.add('wrong');
            }
        });
    } else {
        textAnswer.disabled = true;
    }

    nextQuestionButton.disabled = false;
    state.moduleStats[state.currentCategory] = moduleStats;
    tryUnlockPendingPlanDay(result, state.currentCategory, questionIndex);
    updateStats();
    renderLists();
    renderSkillInsights();
    saveState();
}

function evaluateChoiceQuestion(question) {
    if (selectedChoiceIndex === null) {
        feedbackBox.className = 'feedback-box error';
        feedbackBox.textContent = 'Bitte wähle zuerst eine Antwort aus.';
        return null;
    }

    const isCorrect = selectedChoiceIndex === question.correctIndex;
    return {
        isCorrect,
        feedback: isCorrect ? `Richtig. ${question.explanation}` : `Noch nicht. ${question.explanation}`,
        journalDetail: `Richtig waere: ${question.choices[question.correctIndex]}. ${question.explanation}`
    };
}

function evaluateTextQuestion(question) {
    const userText = textAnswer.value.trim();
    if (!userText) {
        feedbackBox.className = 'feedback-box error';
        feedbackBox.textContent = 'Bitte schreibe zuerst eine Antwort.';
        return null;
    }

    const normalizedUserText = normalizeText(userText);
    const isCorrect = question.acceptedAnswers.some((answer) => normalizeText(answer) === normalizedUserText);
    const modelAnswer = question.modelAnswer || question.acceptedAnswers[0];

    return {
        isCorrect,
        feedback: isCorrect
            ? `Stimmt gut. ${question.explanation}`
            : `Noch nicht ganz. Modellantwort: ${modelAnswer}. ${question.explanation}`,
        journalDetail: `Deine Antwort: ${userText}. Modellantwort: ${modelAnswer}. ${question.explanation}`
    };
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function goToNextQuestion() {
    state.indices[state.currentCategory] = (state.indices[state.currentCategory] + 1) % getCurrentModule().questions.length;
    textAnswer.disabled = false;
    renderQuestion();
    saveState();
}

function updateAdaptiveRecommendation() {
    const role = getCurrentRole();
    const starterModule = learningContent.modules[getRecommendedCategoryOrder(role)[0]].label;
    adaptiveRecommendation.textContent = `Profil ${role.label}. Aktueller Modus: ${state.placementBand}. Empfohlener Einstieg: ${starterModule}. Fokus heute: ${role.focus.join(', ')}.`;
}

function updateStats() {
    const accuracy = state.totalAnswered === 0 ? 0 : Math.round((state.totalCorrect / state.totalAnswered) * 100);
    accuracyValue.textContent = `${accuracy}%`;
    streakValue.textContent = String(state.streak);
    bestStreakValue.textContent = String(state.bestStreak);
    answeredValue.textContent = String(state.totalAnswered);
}

function renderLists() {
    renderFeedbackList(strengthList, state.strengths, 'Richtige Antworten erscheinen hier mit einem Lernhinweis.');
    renderFeedbackList(journalList, state.journal, 'Deine falschen Antworten erscheinen hier als persönliche Wiederholungsliste.');
}

function renderSkillInsights() {
    skillMatrixList.innerHTML = '';
    const moduleEntries = getRecommendedCategoryOrder().map((moduleKey) => {
        const module = learningContent.modules[moduleKey];
        const stats = state.moduleStats[moduleKey] || { answered: 0, correct: 0 };
        const rate = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
        return { moduleKey, label: module.label, answered: stats.answered, rate };
    });

    moduleEntries.forEach((entry) => {
        const item = document.createElement('li');
        const row = document.createElement('div');
        row.className = 'skill-row';

        const label = document.createElement('strong');
        label.textContent = `${entry.label} (${entry.answered} Antworten)`;

        const bar = document.createElement('div');
        bar.className = 'skill-bar';
        const fill = document.createElement('div');
        fill.className = 'skill-fill';
        fill.style.width = `${entry.rate}%`;
        bar.appendChild(fill);

        const percent = document.createElement('span');
        percent.textContent = `${entry.rate}%`;

        row.append(label, bar, percent);
        item.appendChild(row);
        skillMatrixList.appendChild(item);
    });

    if (state.placementScore === null) {
        skillSummaryText.textContent = 'Für eine genaue Skill-Sicht starte zuerst den Einstufungstest.';
        return;
    }

    skillSummaryText.textContent = `Einstufung im Detail: Kernfragen ${state.placementBreakdown.core}/6, Schreiben ${state.placementBreakdown.writing}/2, Hören ${state.placementBreakdown.listening}/2.`;
}

function initializeAudioSettings() {
    if (!speechSynthesisApi) {
        audioRateValue.textContent = 'Aus';
        return;
    }

    audioRateRange.value = String(state.audioSettings.rate || 1);
    updateAudioRateLabel();

    const populateVoices = () => {
        const voices = speechSynthesisApi.getVoices();
        availableVoices = voices;
        audioVoiceSelect.innerHTML = '';

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Standardstimme';
        audioVoiceSelect.appendChild(defaultOption);

        voices
            .filter((voice) => voice.lang.toLowerCase().startsWith('en') || voice.lang.toLowerCase().startsWith('de'))
            .forEach((voice) => {
                const option = document.createElement('option');
                option.value = voice.voiceURI;
                option.textContent = `${voice.name} (${voice.lang})`;
                audioVoiceSelect.appendChild(option);
            });

        audioVoiceSelect.value = state.audioSettings.voiceUri || '';
    };

    populateVoices();
    speechSynthesisApi.addEventListener('voiceschanged', populateVoices);
}

function onAudioVoiceChange() {
    state.audioSettings.voiceUri = audioVoiceSelect.value;
    saveState();
}

function onAudioRateInput() {
    state.audioSettings.rate = Number(audioRateRange.value);
    updateAudioRateLabel();
    saveState();
}

function updateAudioRateLabel() {
    audioRateValue.textContent = `${Number(state.audioSettings.rate || 1).toFixed(2)}x`;
}

function initializeExportReminderSettings() {
    const settings = state.exportSettings;
    autoExportReminderToggle.checked = Boolean(settings.enabled);
    autoExportReminderInterval.value = String(settings.intervalMinutes || 30);
    updateLastExportInfo();
    updateExportWarningState();
    syncExportReminderTimer();
}

function onAutoExportReminderToggle() {
    state.exportSettings.enabled = autoExportReminderToggle.checked;
    if (state.exportSettings.enabled && !state.exportSettings.lastExportAt) {
        state.exportSettings.lastExportAt = Date.now();
    }
    syncExportReminderTimer();
    updateLastExportInfo();
    updateExportWarningState();
    saveState();
}

function onAutoExportReminderIntervalChange() {
    state.exportSettings.intervalMinutes = Number(autoExportReminderInterval.value);
    syncExportReminderTimer();
    updateLastExportInfo();
    updateExportWarningState();
    saveState();
}

function syncExportReminderTimer() {
    if (exportReminderTimer) {
        window.clearInterval(exportReminderTimer);
        exportReminderTimer = null;
    }

    if (!state.exportSettings.enabled) {
        updateExportWarningState();
        return;
    }

    exportReminderTimer = window.setInterval(() => {
        const now = Date.now();
        const intervalMs = Number(state.exportSettings.intervalMinutes || 30) * 60 * 1000;
        const lastExportAt = Number(state.exportSettings.lastExportAt || now);
        const lastReminderAt = Number(state.exportSettings.lastReminderAt || 0);
        const exportIsOverdue = now - lastExportAt >= intervalMs;
        const reminderRecentlyShown = now - lastReminderAt < intervalMs;

        if (exportIsOverdue && !reminderRecentlyShown) {
            feedbackBox.className = 'feedback-box info';
            feedbackBox.textContent = 'Backup-Erinnerung: Exportiere jetzt deinen Lernstand (JSON oder PDF).';
            state.exportSettings.lastReminderAt = now;
            updateLastExportInfo();
            updateExportWarningState();
            saveState();
        }

        if (!exportIsOverdue) {
            updateExportWarningState();
        }
    }, 60000);
}

function isExportReminderOverdue() {
    if (!state.exportSettings.enabled || !state.exportSettings.lastExportAt) {
        return false;
    }

    const now = Date.now();
    const intervalMs = Number(state.exportSettings.intervalMinutes || 30) * 60 * 1000;
    return now - Number(state.exportSettings.lastExportAt) >= intervalMs;
}

function updateExportWarningState() {
    const showWarning = isExportReminderOverdue();
    exportJsonButton.classList.toggle('export-warning', showWarning);
    exportPdfButton.classList.toggle('export-warning', showWarning);
}

function updateLastExportInfo() {
    const settings = state.exportSettings;

    if (!settings.lastExportAt) {
        lastExportInfo.textContent = settings.enabled
            ? `Erinnerung aktiv: alle ${settings.intervalMinutes} Minuten.`
            : 'Noch kein Export in dieser Sitzung.';
        return;
    }

    const formatted = new Date(settings.lastExportAt).toLocaleString('de-DE');
    const exportType = settings.lastExportType ? settings.lastExportType : 'Export';
    const reminderText = settings.enabled ? ` Erinnerung: alle ${settings.intervalMinutes} Minuten.` : '';
    lastExportInfo.textContent = `Letzter ${exportType}-Export: ${formatted}.${reminderText}`;
}

function markExportCompleted(exportType) {
    state.exportSettings.lastExportAt = Date.now();
    state.exportSettings.lastExportType = exportType;
    state.exportSettings.lastReminderAt = null;
    updateLastExportInfo();
    updateExportWarningState();
    saveState();
}

function exportProgressAsJson() {
    const payload = {
        exportedAt: new Date().toISOString(),
        profile: getCurrentRole().label,
        placementBand: state.placementBand,
        placementBreakdown: state.placementBreakdown,
        stats: {
            totalAnswered: state.totalAnswered,
            totalCorrect: state.totalCorrect,
            streak: state.streak,
            bestStreak: state.bestStreak
        },
        moduleStats: state.moduleStats,
        completedPlanDays: state.completedPlanDays,
        strengths: state.strengths,
        journal: state.journal
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `english-trainer-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    markExportCompleted('JSON');
}

function exportProgressAsPdf() {
    const role = getCurrentRole();
    const accuracy = state.totalAnswered === 0 ? 0 : Math.round((state.totalCorrect / state.totalAnswered) * 100);
    const completionRate = Math.round((state.completedPlanDays.length / learningContent.thirtyDayPlan.length) * 100);
    const moduleRows = getRecommendedCategoryOrder().map((moduleKey) => {
        const module = learningContent.modules[moduleKey];
        const stats = state.moduleStats[moduleKey] || { answered: 0, correct: 0 };
        const rate = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
        return `<tr><td>${escapeHtml(module.label)}</td><td>${stats.answered}</td><td>${rate}%</td><td><div class="bar"><div class="fill" style="width:${rate}%"></div></div></td></tr>`;
    }).join('');

    const strengthsRows = state.strengths.length
        ? state.strengths.map((entry) => `<tr><td>${escapeHtml(entry.title)}</td><td>${escapeHtml(entry.detail)}</td></tr>`).join('')
        : '<tr><td colspan="2">Noch keine Stärken-Einträge vorhanden.</td></tr>';

    const journalRows = state.journal.length
        ? state.journal.map((entry) => `<tr><td>${escapeHtml(entry.title)}</td><td>${escapeHtml(entry.detail)}</td></tr>`).join('')
        : '<tr><td colspan="2">Noch keine Fehler-Einträge vorhanden.</td></tr>';

    const weakestModules = getRecommendedCategoryOrder()
        .map((moduleKey) => {
            const module = learningContent.modules[moduleKey];
            const stats = state.moduleStats[moduleKey] || { answered: 0, correct: 0 };
            const rate = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
            return { label: module.label, answered: stats.answered, rate };
        })
        .sort((first, second) => first.rate - second.rate)
        .slice(0, 2)
        .map((entry) => `<li>${escapeHtml(entry.label)} (${entry.rate}% bei ${entry.answered} Antworten)</li>`)
        .join('');

    const nextSteps = weakestModules || '<li>Noch zu wenig Daten: zuerst 10 bis 15 Aufgaben trainieren.</li>';
    const exportedAtText = new Date().toLocaleString('de-DE');

    const reportStyles = 'body{font-family:Segoe UI,Arial,sans-serif;padding:26px;color:#1f2430}h1{margin:0 0 8px}h2{margin:24px 0 10px}p{line-height:1.5}.muted{color:#586174}.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:14px}.stat{border:1px solid #d3d7df;border-radius:10px;padding:10px}.stat strong{display:block;font-size:1.4rem;margin-top:4px}.chips{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}.chip{padding:6px 10px;border-radius:999px;background:#eef4f3;color:#0a5a54;border:1px solid #d3e6e4}table{width:100%;border-collapse:collapse;margin-top:8px}th,td{border:1px solid #d3d7df;padding:8px;text-align:left;vertical-align:top}th{background:#f6f8fa}.bar{height:8px;border-radius:999px;background:#e7eded;min-width:120px;overflow:hidden}.fill{height:100%;background:linear-gradient(90deg,#0f766e,#c96f3b)}ul{margin-top:8px}';

    const report = window.open('', '_blank', 'width=900,height=700');
    if (!report) {
        feedbackBox.className = 'feedback-box error';
        feedbackBox.textContent = 'Popup blockiert. Bitte erlaube Popups, um den PDF-Report zu drucken.';
        return;
    }

    report.document.write(`<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><title>Lernreport</title><style>${reportStyles}</style></head><body><h1>Englisch-Trainer Report</h1><p class="muted">Exportdatum: ${exportedAtText}</p><p><strong>Profil:</strong> ${escapeHtml(role.label)}<br><strong>Modus:</strong> ${escapeHtml(state.placementBand)}</p><div class="stats"><div class="stat"><span>Trefferquote</span><strong>${accuracy}%</strong></div><div class="stat"><span>Beantwortet</span><strong>${state.totalAnswered}</strong></div><div class="stat"><span>Beste Serie</span><strong>${state.bestStreak}</strong></div><div class="stat"><span>Planfortschritt</span><strong>${completionRate}%</strong></div></div><h2>Einstufung im Detail</h2><div class="chips"><span class="chip">Kernfragen: ${state.placementBreakdown.core}/6</span><span class="chip">Schreiben: ${state.placementBreakdown.writing}/2</span><span class="chip">Hören: ${state.placementBreakdown.listening}/2</span></div><h2>Skill-Matrix</h2><table><thead><tr><th>Modul</th><th>Antworten</th><th>Treffer</th><th>Trend</th></tr></thead><tbody>${moduleRows}</tbody></table><h2>Stärken</h2><table><thead><tr><th>Bereich</th><th>Hinweis</th></tr></thead><tbody>${strengthsRows}</tbody></table><h2>Fehlerjournal (Top)</h2><table><thead><tr><th>Frage</th><th>Wiederholung</th></tr></thead><tbody>${journalRows}</tbody></table><h2>Empfohlene nächste Schritte</h2><ul>${nextSteps}</ul><p><strong>Erledigte Tage:</strong> ${state.completedPlanDays.length} von ${learningContent.thirtyDayPlan.length}</p></body></html>`);
    report.document.close();
    report.focus();
    report.print();
    markExportCompleted('PDF');
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderFeedbackList(target, entries, emptyText) {
    target.innerHTML = '';
    if (!entries.length) {
        const item = document.createElement('li');
        item.className = 'empty-state';
        item.textContent = emptyText;
        target.appendChild(item);
        return;
    }

    entries.forEach((entry) => {
        const item = document.createElement('li');
        const title = document.createElement('strong');
        title.textContent = entry.title;
        const detail = document.createElement('span');
        detail.textContent = entry.detail;
        item.append(title, detail);
        target.appendChild(item);
    });
}

function resetProgress() {
    stopAudio();
    state = createInitialState();
    selectedChoiceIndex = null;
    answerLocked = false;
    textAnswer.disabled = false;
    flashcardDeckIndex = 0;
    flashcardItemIndex = 0;
    flashcardKnownCount = 0;
    flashcardShownCount = 0;
    localStorage.removeItem(STORAGE_KEY);
    renderRoleProfiles();
    hydrateCustomRoleInputs();
    ensurePlacementQuestionSet();
    renderPlacementTest();
    applyPersonalization();
    renderCategoryTabs();
    renderWorkTopics();
    renderVocabularyLab();
    renderFlashcard();
    renderThirtyDayPlan();
    updateStats();
    renderLists();
    renderSkillInsights();
    initializeExportReminderSettings();
    renderQuestion();
}

function speakQuestionEnglish() {
    const { question } = getCurrentQuestion();
    const audioText = buildQuestionAudioText(question);
    if (!audioText) {
        return;
    }
    speakText(audioText, 'en-GB');
}

function speakModelAnswer() {
    const { question } = getCurrentQuestion();
    const audioText = buildModelAnswerAudioText(question);
    if (!audioText) {
        return;
    }
    speakText(audioText, 'en-GB');
}

function buildQuestionAudioText(question) {
    if (isTextQuestion(question)) {
        return question.modelAnswer || question.acceptedAnswers[0] || '';
    }

    return question.choices.join('. ');
}

function buildModelAnswerAudioText(question) {
    if (isTextQuestion(question)) {
        return question.modelAnswer || question.acceptedAnswers[0] || '';
    }

    return question.choices[question.correctIndex] || '';
}

function speakText(text, lang) {
    if (!speechSynthesisApi || !text) {
        return;
    }

    speechSynthesisApi.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = Number(state.audioSettings.rate || 1);

    const preferredVoice = availableVoices.find((availableVoice) => availableVoice.voiceURI === state.audioSettings.voiceUri);
    const voice = preferredVoice || speechSynthesisApi.getVoices().find((availableVoice) => availableVoice.lang.toLowerCase().startsWith(lang.toLowerCase().slice(0, 2)));
    if (voice) {
        utterance.voice = voice;
    }

    speechSynthesisApi.speak(utterance);
}

function stopAudio() {
    if (speechSynthesisApi) {
        speechSynthesisApi.cancel();
    }
}



