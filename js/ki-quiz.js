(function () {
    const answerKey = {
        ml: { q1: 'a', q2: 'a', q3: 'b', q4: 'c', q5: 'b', q6: 'a', q7: 'c', q8: 'a' },
        dl: { q1: 'a', q2: 'a', q3: 'b', q4: 'c', q5: 'a', q6: 'b', q7: 'c', q8: 'a' },
        ds: { q1: 'a', q2: 'a', q3: 'c', q4: 'b', q5: 'a', q6: 'c', q7: 'b', q8: 'a' },
        python: { q1: 'a', q2: 'a', q3: 'b', q4: 'c', q5: 'a', q6: 'b', q7: 'c', q8: 'a' },
        mcp: { q1: 'a', q2: 'a', q3: 'b', q4: 'c', q5: 'b', q6: 'a', q7: 'c', q8: 'a' }
    };

    const cards = document.querySelectorAll('[data-quiz]');
    if (!cards.length) {
        return;
    }

    cards.forEach((card) => {
        const quizType = card.getAttribute('data-quiz');
        const form = card.querySelector('form');
        const result = card.querySelector('.result');
        if (!quizType || !form || !result || !answerKey[quizType]) {
            return;
        }

        const key = answerKey[quizType];
        const allFieldsets = Array.from(form.querySelectorAll('fieldset'));
        const allQuestionNames = Object.keys(key);

        setupQuestionControls();
        setupInstantFeedback();
        setupVocabFlip();

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const data = new FormData(form);
            let points = 0;
            let total = 0;
            const missed = [];

            const activeQuestionNames = getActiveQuestionNames();

            activeQuestionNames.forEach((question) => {
                total += 1;
                const selected = data.get(question);
                if (selected === key[question]) {
                    points += 1;
                } else {
                    missed.push(question.toUpperCase());
                }
            });

            if (points === total) {
                result.textContent = points + '/' + total + ' richtig. Stark gemacht.';
                return;
            }

            result.textContent = points + '/' + total + ' richtig. Prüfe nochmal: ' + missed.join(', ') + '.';
        });

        function setupQuestionControls() {
            const controls = document.createElement('div');
            controls.className = 'quiz-controls';

            const randomButton = document.createElement('button');
            randomButton.type = 'button';
            randomButton.className = 'btn';
            randomButton.textContent = 'Zufallsmodus: 5 Fragen';

            const showAllButton = document.createElement('button');
            showAllButton.type = 'button';
            showAllButton.className = 'btn';
            showAllButton.textContent = 'Alle 8 Fragen';

            const hint = document.createElement('p');
            hint.className = 'quiz-hint';
            hint.textContent = 'Sofortfeedback aktiv: Gruen = richtig, Rot = falsch.';

            controls.appendChild(randomButton);
            controls.appendChild(showAllButton);

            form.appendChild(controls);
            form.appendChild(hint);

            randomButton.addEventListener('click', function () {
                const selected = pickRandomQuestions(allQuestionNames, 5);
                setVisibleQuestions(selected);
                resetQuizState('Zufallsmodus aktiv: 5 Fragen ausgewaehlt.');
            });

            showAllButton.addEventListener('click', function () {
                setVisibleQuestions(allQuestionNames);
                resetQuizState('Alle 8 Fragen sind wieder sichtbar.');
            });
        }

        function setupInstantFeedback() {
            form.addEventListener('change', function (event) {
                const target = event.target;
                if (!target || target.type !== 'radio') {
                    return;
                }

                const questionName = target.name;
                if (!key[questionName]) {
                    return;
                }

                const fieldset = target.closest('fieldset');
                if (!fieldset) {
                    return;
                }

                fieldset.classList.remove('question-correct', 'question-incorrect');
                if (target.value === key[questionName]) {
                    fieldset.classList.add('question-correct');
                } else {
                    fieldset.classList.add('question-incorrect');
                }
            });
        }

        function setupVocabFlip() {
            const chips = card.querySelectorAll('.vocab-chip');
            chips.forEach((chip) => {
                const front = (chip.querySelector('strong') && chip.querySelector('strong').textContent || '').trim();
                const full = chip.textContent || '';
                const parts = full.split(' - ');
                const back = parts.length > 1 ? parts.slice(1).join(' - ').trim() : '';

                if (!front || !back) {
                    return;
                }

                chip.dataset.front = front;
                chip.dataset.back = back;
                chip.dataset.side = 'front';
                chip.setAttribute('role', 'button');
                chip.setAttribute('tabindex', '0');
                chip.setAttribute('aria-label', 'Vokabelkarte drehen');

                chip.addEventListener('click', function () {
                    flipChip(chip);
                });

                chip.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        flipChip(chip);
                    }
                });
            });
        }

        function flipChip(chip) {
            const isFront = chip.dataset.side === 'front';
            if (isFront) {
                chip.dataset.side = 'back';
                chip.classList.add('flipped');
                chip.innerHTML = '<strong>' + chip.dataset.back + '</strong> - ' + chip.dataset.front;
                return;
            }

            chip.dataset.side = 'front';
            chip.classList.remove('flipped');
            chip.innerHTML = '<strong>' + chip.dataset.front + '</strong> - ' + chip.dataset.back;
        }

        function setVisibleQuestions(visibleQuestionNames) {
            const visibleSet = new Set(visibleQuestionNames);
            allFieldsets.forEach((fieldset) => {
                const firstInput = fieldset.querySelector('input[type="radio"]');
                if (!firstInput) {
                    return;
                }
                const shouldShow = visibleSet.has(firstInput.name);
                fieldset.style.display = shouldShow ? '' : 'none';
                if (!shouldShow) {
                    fieldset.querySelectorAll('input[type="radio"]').forEach((radio) => {
                        radio.checked = false;
                    });
                    fieldset.classList.remove('question-correct', 'question-incorrect');
                }
            });
        }

        function getActiveQuestionNames() {
            const active = [];
            allFieldsets.forEach((fieldset) => {
                if (fieldset.style.display === 'none') {
                    return;
                }
                const firstInput = fieldset.querySelector('input[type="radio"]');
                if (firstInput && key[firstInput.name]) {
                    active.push(firstInput.name);
                }
            });
            return active;
        }

        function resetQuizState(message) {
            form.querySelectorAll('fieldset').forEach((fieldset) => {
                fieldset.classList.remove('question-correct', 'question-incorrect');
            });
            result.textContent = message;
        }

        function pickRandomQuestions(questionNames, count) {
            const copy = questionNames.slice();
            for (let i = copy.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
            }
            return copy.slice(0, Math.min(count, copy.length));
        }
    });
})();
