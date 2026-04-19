window.learningContent = {
    title: 'Englisch von A3 nach B1',
    intro: 'Du trainierst genau die Themen, die im Berufsalltag schnell sichtbar werden: Grammatik, Vokabeln, arbeitsnahe Situationen und typische Formulierungsfehler.',
    roadmap: [
        {
            phase: 'Woche 1',
            focus: 'Grundstruktur stabilisieren',
            goals: [
                'Present Simple und Present Continuous sauber trennen',
                'Fragen mit do, does, is und are richtig bilden',
                'Jeden Tag 10 Minuten laut lesen und nachsprechen'
            ]
        },
        {
            phase: 'Woche 2',
            focus: 'Wortschatz für den Job erweitern',
            goals: [
                'Meeting-Vokabeln und Status-Updates lernen',
                'Verben für Termine, Aufgaben und Abstimmungen festigen',
                'Kurze E-Mails mit klaren Bitten formulieren'
            ]
        },
        {
            phase: 'Woche 3',
            focus: 'Fehler bewusst abbauen',
            goals: [
                'Deutsche Satzmuster nicht 1:1 uebertragen',
                'Praepositionen und feste Wendungen wiederholen',
                'Falsche Antworten aus dem Journal erneut trainieren'
            ]
        },
        {
            phase: 'Woche 4',
            focus: 'B1-Anwendung im Alltag',
            goals: [
                'Konsequenzen und Bedingungen mit if-Sätzen ausdrücken',
                'Rückfragen höflich und sicher stellen',
                'Eigene kurze Arbeitsberichte auf Englisch formulieren'
            ]
        }
    ],
    workTopics: [
        {
            title: 'Meetings und Status-Updates',
            level: 'Sofort relevant',
            summary: 'Du lernst, Fortschritte, Probleme und nächste Schritte kurz und klar auszudrücken.',
            focus: [
                'Kurze Updates geben',
                'Nachfragen stellen',
                'Risiken oder Blocker benennen'
            ]
        },
        {
            title: 'E-Mails und Rückfragen',
            level: 'Taeglicher Einsatz',
            summary: 'Du formulierst höfliche Bitten, Nachfassfragen und kleine Korrekturen sicherer.',
            focus: [
                'Dateien und Freigaben anfragen',
                'Verstaendlich nachfassen',
                'Klare Betreff- und Abschlussformeln nutzen'
            ]
        },
        {
            title: 'Telefon, Teams und spontane Fragen',
            level: 'Mehr Sicherheit',
            summary: 'Du reagierst besser, wenn du etwas akustisch nicht verstanden hast oder direkt antworten musst.',
            focus: [
                'Um Wiederholung bitten',
                'Zeit gewinnen mit guten Standardsätzen',
                'Antworten höflich strukturieren'
            ]
        },
        {
            title: 'SAP, Prozesse und Aufgaben',
            level: 'Fachsprache',
            summary: 'Du verbindest allgemeines Englisch mit typischen Arbeitsablaeufen, Tickets, Reports und Systemschritten.',
            focus: [
                'Fehler oder Abweichungen beschreiben',
                'Bearbeitungsstand melden',
                'Nächste Schritte im Prozess erklaeren'
            ]
        }
    ],
    roleProfiles: [
        {
            id: 'general-office',
            label: 'Office und Abstimmung',
            chip: 'Allgemein',
            summary: 'Gut geeignet, wenn du viele E-Mails, Rückfragen und kurze Abstimmungen im Arbeitsalltag hast.',
            focus: [
                'Höfliche Bitten und Nachfragen',
                'Kurze Statussätze',
                'Sichere Standardformulierungen'
            ],
            recommendedModules: ['workday', 'usage', 'writing'],
            topicPriority: ['E-Mails und Rückfragen', 'Telefon, Teams und spontane Fragen', 'Meetings und Status-Updates']
        },
        {
            id: 'ssc-reporting',
            label: 'SSC und Reporting',
            chip: 'Reporting',
            summary: 'Passend für Shared Service, Reporting, Rückfragen zu Zahlen und kurze Ergebnisberichte.',
            focus: [
                'Reports und Abweichungen beschreiben',
                'Deadlines und Freigaben benennen',
                'Status und Genauigkeit sauber formulieren'
            ],
            recommendedModules: ['grammar', 'workday', 'vocabulary'],
            topicPriority: ['SAP, Prozesse und Aufgaben', 'Meetings und Status-Updates', 'E-Mails und Rückfragen']
        },
        {
            id: 'sap-process',
            label: 'SAP und Prozesse',
            chip: 'Systeme',
            summary: 'Geeignet für Rollen mit Tickets, Systemschritten, Freigaben und Prozesskommunikation.',
            focus: [
                'Fehler und offene Punkte beschreiben',
                'Nächste Schritte im Prozess erklaeren',
                'Systembegriffe sicher verwenden'
            ],
            recommendedModules: ['workday', 'vocabulary', 'writing'],
            topicPriority: ['SAP, Prozesse und Aufgaben', 'E-Mails und Rückfragen', 'Telefon, Teams und spontane Fragen']
        },
        {
            id: 'meetings-communication',
            label: 'Meetings und Kommunikation',
            chip: 'Calls',
            summary: 'Ideal, wenn du haeufig in Calls, Meetings oder spontanen Abstimmungen Englisch brauchst.',
            focus: [
                'Rückfragen im Call',
                'Spontan antworten',
                'Updates klar und ruhig formulieren'
            ],
            recommendedModules: ['usage', 'workday', 'writing'],
            topicPriority: ['Telefon, Teams und spontane Fragen', 'Meetings und Status-Updates', 'E-Mails und Rückfragen']
        },
        {
            id: 'custom-role',
            label: 'Eigenes Profil',
            chip: 'Custom',
            summary: 'Dieses Profil kannst du unten mit deinen Aufgaben personalisieren.',
            focus: [
                'Persönliche Arbeitsmuster beschreiben',
                'Eigene Standardsätze trainieren',
                'Relevante Themen priorisieren'
            ],
            recommendedModules: ['workday', 'writing', 'usage'],
            topicPriority: ['Meetings und Status-Updates', 'E-Mails und Rückfragen', 'SAP, Prozesse und Aufgaben']
        }
    ],
    placementTest: [
        {
            id: 'core-waiting-feedback',
            prompt: 'Welche Variante ist korrekt?',
            context: 'Du willst sagen: Ich warte noch auf Feedback.',
            choices: [
                'I wait still on feedback.',
                'I am still waiting for feedback.',
                'I still wait for feedback since now.',
                'I am waiting on a feedback still.'
            ],
            correctIndex: 1,
            explanation: 'Für eine laufende Handlung nutzt du am natürlichsten Present Continuous mit still: I am still waiting ...'
        },
        {
            id: 'core-latest-version',
            prompt: 'Welche Bitte klingt natürlich?',
            context: 'Du brauchst die aktuelle Datei.',
            choices: [
                'Please send me the latest version.',
                'Send me the actual file.',
                'Give me the current state file.',
                'Can you sending me the newest file?'
            ],
            correctIndex: 0,
            explanation: 'Actual bedeutet meist tatsächlich. Für aktuell passt current oder latest, hier am besten latest version.'
        },
        {
            id: 'core-question-order',
            prompt: 'Welche Frage ist richtig?',
            context: 'Du willst nach dem Termin fragen.',
            choices: [
                'When starts the meeting?',
                'When the meeting starts?',
                'When does the meeting start?',
                'When is start the meeting?'
            ],
            correctIndex: 2,
            explanation: 'Im Present Simple braucht eine Frage does plus Grundform: When does the meeting start?'
        },
        {
            id: 'core-next-step',
            prompt: 'Welche Aussage passt?',
            context: 'Du willst einen nächsten Schritt nennen.',
            choices: [
                'The next step is to review the open items.',
                'The next step is that we review open items maybe.',
                'We make next step with the open items.',
                'The next step becomes the review.'
            ],
            correctIndex: 0,
            explanation: 'To review ... ist die saubere und natürliche Struktur, um den nächsten Schritt zu formulieren.'
        },
        {
            id: 'core-status-update-wording',
            prompt: 'Welcher Ausdruck passt zu Zwischenstand?',
            context: 'Du gibst ein kurzes Update im Meeting.',
            choices: [
                'Current state note',
                'Middle result',
                'Status update',
                'Temporary report'
            ],
            correctIndex: 2,
            explanation: 'Status update ist die übliche und idiomatische Formulierung im Arbeitskontext.'
        },
        {
            id: 'core-email-closing',
            prompt: 'Welche Schlussformel ist korrekt?',
            context: 'Du beendest eine E-Mail.',
            choices: [
                'I look forward to hear from you.',
                'I am looking forward hearing from you.',
                'I look forward to hearing from you.',
                'I look forward hear from you.'
            ],
            correctIndex: 2,
            explanation: 'Nach look forward to steht ein Verb auf -ing: look forward to hearing ...'
        },
        {
            id: 'core-deadline-by',
            prompt: 'Welche Aussage passt bei einem Termin?',
            context: 'Du willst eine Frist bis morgen Mittag nennen.',
            choices: [
                'We need the file until tomorrow noon.',
                'We need the file by tomorrow noon.',
                'We need the file to tomorrow noon.',
                'We need the file for tomorrow noon.'
            ],
            correctIndex: 1,
            explanation: 'Für eine Deadline verwendest du by: by tomorrow noon.'
        },
        {
            id: 'core-present-perfect-result',
            prompt: 'Welche Form passt am besten?',
            context: 'Du meldest ein erledigtes Ergebnis für heute.',
            choices: [
                'I finish the update already.',
                'I already finished the update.',
                'I have already finished the update.',
                'I am already finish the update.'
            ],
            correctIndex: 2,
            explanation: 'Mit already bei einem aktuellen Ergebnis ist Present Perfect meist die beste Wahl.'
        },
        {
            id: 'core-polite-request',
            prompt: 'Welche Bitte ist höflich und korrekt?',
            context: 'Du brauchst eine Rückmeldung vor dem Call.',
            choices: [
                'Can you please to confirm before the call?',
                'Could you please confirm before the call?',
                'Please could you to confirm before the call?',
                'Could you please confirming before the call?'
            ],
            correctIndex: 1,
            explanation: 'Could you please plus Grundform klingt höflich und ist grammatisch sauber.'
        },
        {
            id: 'core-there-are',
            prompt: 'Welche Variante ist grammatisch richtig?',
            context: 'Du beschreibst mehrere offene Punkte.',
            choices: [
                'There is three open items.',
                'There are three open items.',
                'There have three open items.',
                'There are three opens items.'
            ],
            correctIndex: 1,
            explanation: 'Bei Mehrzahl brauchst du there are plus Plural: three open items.'
        }
    ],
    placementWriting: {
        prompt: 'Schreibe ein kurzes Update mit Problem und nächstem Schritt.',
        context: 'Situation: Ein Report ist fast fertig, aber es fehlt noch eine Freigabe. Formuliere 2 bis 3 klare Sätze.',
        hint: 'Nutze moeglichst Formulierungen wie status update, still waiting, next step oder by tomorrow.',
        requiredPhrases: ['still waiting', 'next step', 'by tomorrow', 'status update']
    },
    placementListening: [
        {
            id: 'listening-deadline-confirmation',
            prompt: 'Was ist der nächste Schritt laut Audio?',
            context: 'Klicke auf Audio und wähle die beste Antwort.',
            audioScript: 'Quick status update. The report is almost complete, but we are still waiting for final approval. The next step is to confirm the deadline by tomorrow noon.',
            choices: [
                'The team will cancel the report.',
                'They will confirm the deadline by tomorrow noon.',
                'They need to start the report from zero.',
                'They already received final approval.'
            ],
            correctIndex: 1,
            explanation: 'Im Audio wird explizit gesagt, dass als nächster Schritt die Frist bis morgen Mittag bestätigt wird.'
        },
        {
            id: 'listening-send-export',
            prompt: 'Welche Bitte wird im Audio gestellt?',
            context: 'Hoere genau auf die konkrete Bitte.',
            audioScript: 'Could you please send me the latest SAP export before three p.m.? I need it for the update call with finance.',
            choices: [
                'Please organize a new training session.',
                'Please review the yearly budget.',
                'Please send the latest SAP export before three p.m.',
                'Please move the call to next week.'
            ],
            correctIndex: 2,
            explanation: 'Die Bitte im Audio ist eindeutig: latest SAP export senden, und zwar vor 15 Uhr.'
        },
        {
            id: 'listening-follow-up-question',
            prompt: 'Worum bittet die Person im Audio zusätzlich?',
            context: 'Achte auf den zweiten Satz.',
            audioScript: 'Thanks for the quick update. Could you also confirm whether the approval email has been sent today?',
            choices: [
                'Sie bittet um eine neue Präsentation.',
                'Sie bittet um Bestätigung, ob die Freigabe-Mail heute gesendet wurde.',
                'Sie bittet darum, den Termin zu verschieben.',
                'Sie bittet um ein neues Budget.'
            ],
            correctIndex: 1,
            explanation: 'Der zweite Satz fragt nach einer Bestätigung zur bereits versendeten Freigabe-Mail.'
        },
        {
            id: 'listening-status-blocker',
            prompt: 'Was blockiert laut Audio den Abschluss?',
            context: 'Höre auf das Wort blocker.',
            audioScript: 'The dashboard update is almost done. The only blocker is missing access to one finance folder.',
            choices: [
                'Es fehlen neue Teammitglieder.',
                'Das Budget wurde gestrichen.',
                'Der Zugriff auf einen Finance-Ordner fehlt.',
                'Die Präsentation ist zu lang.'
            ],
            correctIndex: 2,
            explanation: 'Im Audio heißt es direkt: The only blocker is missing access to one finance folder.'
        }
    ],
    modules: {
        grammar: {
            label: 'Grammatik',
            description: 'Hier trainierst du die Strukturen, die im Alltag am haeufigsten auffallen: Zeitformen, Fragen und Satzlogik.',
            questions: [
                {
                    prompt: 'Welche Form passt am besten?',
                    context: 'Ich arbeite seit 2021 in diesem Team.',
                    choices: [
                        'I work in this team since 2021.',
                        'I have worked in this team since 2021.',
                        'I am working in this team since 2021.',
                        'I worked in this team from 2021.'
                    ],
                    correctIndex: 1,
                    explanation: 'Mit since und einem Startpunkt nutzt du im Englischen normalerweise Present Perfect.',
                    coachTip: 'Du erkennst Zeitlinien mit since schon gut. Achte weiter auf Present Perfect bei begonnenen und noch laufenden Situationen.'
                },
                {
                    prompt: 'Welche Frage ist grammatisch richtig?',
                    context: 'Du willst einen Kollegen nach seinem Terminplan fragen.',
                    choices: [
                        'When starts your next meeting?',
                        'When does your next meeting start?',
                        'When your next meeting starts?',
                        'When is start your next meeting?'
                    ],
                    correctIndex: 1,
                    explanation: 'Im Present Simple braucht eine Frage das Hilfsverb does und das Hauptverb bleibt in der Grundform.',
                    coachTip: 'Fragen mit does werden stabiler. Behalte die Grundform des Verbs nach does im Blick.'
                },
                {
                    prompt: 'Welche Aussage passt zu einer aktuellen Situation?',
                    context: 'Gerade im Moment pruefe ich die Zahlen für den Monatsbericht.',
                    choices: [
                        'I check the numbers for the monthly report.',
                        'I am checking the numbers for the monthly report.',
                        'I have checked the numbers for the monthly report.',
                        'I checking the numbers for the monthly report.'
                    ],
                    correctIndex: 1,
                    explanation: 'Für Handlungen im Moment des Sprechens nutzt du Present Continuous.',
                    coachTip: 'Du trennst Routine und aktuelle Handlung besser, wenn du gezielt auf Signalwörter wie right now oder at the moment achtest.'
                },
                {
                    prompt: 'Welche Option ist korrekt?',
                    context: 'Wenn ich morgen genug Zeit habe, rufe ich dich an.',
                    choices: [
                        'If I will have enough time tomorrow, I call you.',
                        'If I have enough time tomorrow, I will call you.',
                        'If I have enough time tomorrow, I call you.',
                        'If I had enough time tomorrow, I will call you.'
                    ],
                    correctIndex: 1,
                    explanation: 'Im First Conditional steht im if-Satz Present Simple und im Hauptsatz will.',
                    coachTip: 'Bedingungssätze werden klarer, wenn du dir die feste Struktur für echte Zukunftsbedingungen merkst.'
                },
                {
                    prompt: 'Welche Variante ist richtig?',
                    context: 'Dieser Bericht ist genauer als der letzte.',
                    choices: [
                        'This report is more accurate then the last one.',
                        'This report is accurate than the last one.',
                        'This report is more accurate than the last one.',
                        'This report is most accurate than the last one.'
                    ],
                    correctIndex: 2,
                    explanation: 'Beim Vergleich nutzt du more plus Adjektiv und than.',
                    coachTip: 'Vergleiche mit more ... than sind ein wichtiger B1-Baustein für Berichte und Vergleiche.'
                },
                {
                    prompt: 'Welche Formulierung ist korrekt?',
                    context: 'Es gibt heute weniger Fehler im Dokument.',
                    choices: [
                        'There are less mistakes in the document today.',
                        'There are fewer mistakes in the document today.',
                        'There is fewer mistakes in the document today.',
                        'There are few mistakes less in the document today.'
                    ],
                    correctIndex: 1,
                    explanation: 'Zaehhlbare Dinge wie mistakes bekommen fewer, nicht less.',
                    coachTip: 'Zaehhlbar oder nicht zaehlbar ist ein typischer Unterschied, der in Business-Englisch haeufig vorkommt.'
                },
                {
                    type: 'text',
                    prompt: 'Formuliere den Satz korrekt auf Englisch.',
                    context: 'Ich bin seit drei Jahren für dieses Reporting verantwortlich.',
                    acceptedAnswers: [
                        'I have been responsible for this reporting for three years.',
                        'I have been responsible for this report for three years.'
                    ],
                    placeholder: 'Schreibe einen vollstaendigen Satz auf Englisch.',
                    answerHelp: 'Achte auf since oder for, Present Perfect und responsible for.',
                    modelAnswer: 'I have been responsible for this reporting for three years.',
                    explanation: 'Bei einer begonnenen und weiterhin laufenden Verantwortung passt Present Perfect besonders gut.',
                    coachTip: 'Du verknuepfst Dauer und Verantwortung zunehmend sicherer. Das hilft in Selbstbeschreibungen und Statusgespraechen.'
                }
            ]
        },
        vocabulary: {
            label: 'Vokabeln',
            description: 'Hier sammelst du Wortschatz, der in Meetings, Rückfragen, E-Mails und Status-Updates wirklich nuetzlich ist.',
            questions: [
                {
                    prompt: 'Was ist die beste Übersetzung für Protokoll in einem Meeting?',
                    context: 'Du willst nach dem Meeting das Protokoll verschicken.',
                    choices: ['Minutes', 'Protocol', 'Meeting paper', 'Notice'],
                    correctIndex: 0,
                    explanation: 'Minutes ist die uebliche Bezeichnung für ein Meeting-Protokoll.',
                    coachTip: 'Minutes gehört zu den wichtigsten Standardwörtern rund um Meetings.'
                },
                {
                    prompt: 'Welches Verb passt zu einen Termin verschieben?',
                    context: 'Der Termin muss auf nächste Woche verschoben werden.',
                    choices: ['Delay', 'Move out', 'Reschedule', 'Replace'],
                    correctIndex: 2,
                    explanation: 'Reschedule ist im Arbeitskontext die präzise und neutrale Formulierung.',
                    coachTip: 'Typische Arbeitsverben wie reschedule sparen dir spaeter viel Sucherei in E-Mails.'
                },
                {
                    prompt: 'Welcher Ausdruck passt am besten zu Frist?',
                    context: 'Wir muessen die Frist einhalten.',
                    choices: ['Finish line', 'Deadline', 'Target day', 'Closing point'],
                    correctIndex: 1,
                    explanation: 'Deadline ist das Standardwort für eine verbindliche zeitliche Grenze.',
                    coachTip: 'Deadline ist ein Kernwort für Projekt- und Aufgabenkommunikation.'
                },
                {
                    prompt: 'Welche Formulierung bedeutet um Klaerung bitten?',
                    context: 'Ich brauche mehr Details zu einer Anforderung.',
                    choices: ['Ask for clarification', 'Make a clarification', 'Demand a detail', 'Call the explanation'],
                    correctIndex: 0,
                    explanation: 'Ask for clarification ist eine natürliche und höfliche Standardformulierung.',
                    coachTip: 'Mit ask for clarification wirkst du präzise und höflich zugleich.'
                },
                {
                    prompt: 'Wie nennt man eine Person, die neue Kolleginnen und Kollegen begleitet?',
                    context: 'Im Onboarding hilft dir eine erfahrene Person.',
                    choices: ['Mentor', 'Controller', 'Speaker', 'Deputy'],
                    correctIndex: 0,
                    explanation: 'Mentor passt gut zu fachlicher und persönlicher Begleitung.',
                    coachTip: 'Solche Rollenbegriffe machen deine Arbeitswelt auf Englisch deutlich konkreter.'
                },
                {
                    prompt: 'Welcher Ausdruck passt am besten zu Zwischenstand?',
                    context: 'Du gibst im Meeting einen kurzen Zwischenstand ab.',
                    choices: ['Middle result', 'Status update', 'Work message', 'Current note'],
                    correctIndex: 1,
                    explanation: 'Status update ist die gaengige Formulierung für einen kurzen Sachstand.',
                    coachTip: 'Status update ist ein Schluesselbegriff für Meetings und Team-Abstimmungen.'
                },
                {
                    type: 'text',
                    prompt: 'Wie wuerdest du Zwischenstand auf Englisch in einem Meeting sagen?',
                    context: 'Du gibst einem internationalen Team einen kurzen Bericht zum aktuellen Stand.',
                    acceptedAnswers: [
                        'status update',
                        'a status update'
                    ],
                    placeholder: 'Gib den passenden Begriff oder eine kurze Phrase ein.',
                    answerHelp: 'Gesucht ist ein sehr haeufiger Ausdruck aus Meetings.',
                    modelAnswer: 'status update',
                    explanation: 'Status update ist die natürliche Standardformulierung für einen kurzen aktuellen Bericht.',
                    coachTip: 'Solche Kernbegriffe solltest du direkt abrufen koennen, ohne innerlich zu uebersetzen.'
                }
            ]
        },
        usage: {
            label: 'Richtig oder falsch?',
            description: 'Hier lernst du, welche Formulierungen natürlich klingen und welche direkte Übersetzungen aus dem Deutschen besser vermieden werden.',
            questions: [
                {
                    prompt: 'Welche Variante klingt natürlich?',
                    context: 'Du erklaerst deinen Aufgabenbereich.',
                    choices: [
                        'I am responsible for the monthly report.',
                        'I am responsible on the monthly report.',
                        'I am responsible to the monthly report.',
                        'I responsible for the monthly report.'
                    ],
                    correctIndex: 0,
                    explanation: 'Responsible wird mit for verwendet.',
                    coachTip: 'Feste Verbindungen wie responsible for lohnen sich zum Auswendiglernen.'
                },
                {
                    prompt: 'Welche Bitte klingt besser in einer E-Mail?',
                    context: 'Du brauchst die aktuelle Datei von einer Kollegin.',
                    choices: [
                        'Could you please send me the latest version?',
                        'Can you send me the actual version?',
                        'Please send me the topical file.',
                        'Give me the newest state of the file.'
                    ],
                    correctIndex: 0,
                    explanation: 'Latest version ist im Arbeitskontext natürlich. Actual bedeutet meistens tatsächlich, nicht aktuell.',
                    coachTip: 'Achte besonders auf false friends wie actual und eventually.'
                },
                {
                    prompt: 'Welche Aussage ist korrekt?',
                    context: 'Du willst Zustimmung ausdrücken.',
                    choices: ['I am agree with you.', 'I agree with you.', 'I am agreeing you.', 'I agree to you.'],
                    correctIndex: 1,
                    explanation: 'Agree ist ein Verb und braucht kein am in dieser Aussage.',
                    coachTip: 'Kurze Standardsätze wie I agree with you sollten schnell und automatisch kommen.'
                },
                {
                    prompt: 'Welche Formulierung ist richtig?',
                    context: 'Ihr habt das Problem bereits besprochen.',
                    choices: [
                        'We discussed about the problem.',
                        'We have discussed the problem.',
                        'We have discussed about the problem.',
                        'We discussed over the problem.'
                    ],
                    correctIndex: 1,
                    explanation: 'Discuss braucht kein about. Das Objekt folgt direkt.',
                    coachTip: 'Manche englischen Verben sind direkter als ihre deutschen Entsprechungen.'
                },
                {
                    prompt: 'Welche Schlussformel passt?',
                    context: 'Du beendest eine freundliche E-Mail.',
                    choices: [
                        'I look forward to hear from you.',
                        'I am looking forward to hearing from you.',
                        'I look forward hearing from you.',
                        'I looking forward to hear from you.'
                    ],
                    correctIndex: 1,
                    explanation: 'Nach look forward to steht ein Verb mit -ing.',
                    coachTip: 'Feste E-Mail-Formeln solltest du komplett lernen, nicht Wort für Wort.'
                },
                {
                    prompt: 'Welche Rückfrage ist idiomatisch?',
                    context: 'Du hast einen Punkt akustisch nicht verstanden.',
                    choices: [
                        'Can you repeat please that?',
                        'Could you please repeat that?',
                        'Please can repeat that?',
                        'Repeat that please can you?'
                    ],
                    correctIndex: 1,
                    explanation: 'Could you please repeat that? ist höflich, klar und natürlich.',
                    coachTip: 'Solche Rückfragen solltest du fast reflexartig abrufen koennen.'
                }
            ]
        },
        workday: {
            label: 'Arbeitsalltag',
            description: 'Hier trainierst du genau die Situationen, die im Job passieren: Meetings, E-Mails, SAP-Kontexte und spontane Rückfragen.',
            questions: [
                {
                    prompt: 'Welche Formulierung passt im Meeting?',
                    context: 'Du willst sagen, dass du durch eine offene Rückmeldung blockiert bist.',
                    choices: [
                        'I am blocked because I still need feedback from the team.',
                        'I am stoped because feedback is missing.',
                        'I am hanging on the feedback.',
                        'I cannot go on because the team says nothing until now.'
                    ],
                    correctIndex: 0,
                    explanation: 'Blocked ist in Projekten eine gaengige und klare Formulierung für ein Hindernis.',
                    coachTip: 'Mit kurzen, klaren Statussätzen wirkst du in Meetings ruhiger und professioneller.'
                },
                {
                    type: 'text',
                    prompt: 'Schreibe eine kurze höfliche Bitte auf Englisch.',
                    context: 'Du brauchst die aktuelle SAP-Auswertung bis heute Nachmittag.',
                    acceptedAnswers: [
                        'Could you please send me the latest SAP report by this afternoon?',
                        'Could you please send me the latest SAP evaluation by this afternoon?',
                        'Please send me the latest SAP report by this afternoon.'
                    ],
                    placeholder: 'Formuliere eine kurze E-Mail-Bitte.',
                    answerHelp: 'Nutze bitte, latest und by this afternoon.',
                    modelAnswer: 'Could you please send me the latest SAP report by this afternoon?',
                    explanation: 'Die Formulierung ist höflich, direkt und klar. Genau so sollten kurze Arbeitsbitten klingen.',
                    coachTip: 'Kurze Standardbitten für E-Mails sparen dir im Alltag viel Energie.'
                },
                {
                    prompt: 'Welche Antwort passt bei einer spontanen Rückfrage?',
                    context: 'Jemand fragt dich im Call nach dem nächsten Schritt.',
                    choices: [
                        'The next step is to review the open items and confirm the deadline.',
                        'The next step is that we make a controlling about the open points.',
                        'We will do the next step after that maybe.',
                        'The next step becomes from the open points.'
                    ],
                    correctIndex: 0,
                    explanation: 'Review the open items und confirm the deadline sind natürliche Business-Formulierungen.',
                    coachTip: 'Nächste Schritte klar benennen ist eine der wichtigsten B1-Fähigkeiten im Job.'
                },
                {
                    type: 'text',
                    prompt: 'Formuliere eine kurze Rückfrage.',
                    context: 'Im Teams-Call hast du einen Punkt akustisch nicht verstanden und willst um Wiederholung bitten.',
                    acceptedAnswers: [
                        'Could you please repeat the last point?',
                        'Could you please repeat that last point?',
                        'Could you repeat the last point, please?'
                    ],
                    placeholder: 'Schreibe eine kurze rückfragende Bitte.',
                    answerHelp: 'Halte den Satz kurz, höflich und direkt.',
                    modelAnswer: 'Could you please repeat the last point?',
                    explanation: 'Im Arbeitsalltag sind einfache, höfliche Rückfragen fast immer besser als komplizierte Sätze.',
                    coachTip: 'Wenn diese Rückfrage automatisiert sitzt, reagierst du in Calls deutlich entspannter.'
                }
            ]
        },
        writing: {
            label: 'Freitext',
            description: 'Hier produzierst du selbst Sprache: kurze Sätze, Mini-E-Mails und sichere Antworten für den Beruf.',
            questions: [
                {
                    type: 'text',
                    prompt: 'Schreibe einen kurzen Statussatz.',
                    context: 'Du bist fast fertig, brauchst aber noch eine finale Freigabe.',
                    acceptedAnswers: [
                        'The task is almost finished, but I still need final approval.',
                        'The task is almost complete, but I still need final approval.'
                    ],
                    placeholder: 'Schreibe einen klaren Statussatz.',
                    answerHelp: 'Nutze almost finished oder almost complete und final approval.',
                    modelAnswer: 'The task is almost finished, but I still need final approval.',
                    explanation: 'Der Satz ist kurz, natürlich und für Updates im Job gut geeignet.',
                    coachTip: 'Je oefter du solche Mini-Sätze schreibst, desto schneller findest du sie auch mündlich.'
                },
                {
                    type: 'text',
                    prompt: 'Schreibe eine kurze freundliche Abschlussformel.',
                    context: 'Du wartest noch auf eine Rückmeldung zu deinem Anliegen.',
                    acceptedAnswers: [
                        'I look forward to hearing from you.',
                        'I am looking forward to hearing from you.'
                    ],
                    placeholder: 'Formuliere einen kurzen E-Mail-Abschluss.',
                    answerHelp: 'Achte auf look forward to plus -ing.',
                    modelAnswer: 'I look forward to hearing from you.',
                    explanation: 'Diese Formulierung gehört zu den wichtigsten Standardsätzen für E-Mails.',
                    coachTip: 'Feste Formeln für Anfang und Ende von E-Mails geben dir schnell mehr Sicherheit.'
                },
                {
                    type: 'text',
                    prompt: 'Formuliere eine kurze Zusage.',
                    context: 'Du willst bestätigen, dass du das bis morgen pruefst.',
                    acceptedAnswers: [
                        'I will check it by tomorrow.',
                        'I will review it by tomorrow.',
                        'I will check this by tomorrow.'
                    ],
                    placeholder: 'Schreibe einen kurzen klaren Zusagesatz.',
                    answerHelp: 'Kurz, verbindlich und ohne unnoetige Wörter.',
                    modelAnswer: 'I will check it by tomorrow.',
                    explanation: 'Kurze Zusagen wirken im Arbeitskontext oft sicherer als lange Erklärungen.',
                    coachTip: 'Klare Verbindlichkeit ist im Job wichtiger als komplizierte Sprache.'
                }
            ]
        }
    },
    vocabularyDecks: [
        {
            id: 'meetings-core',
            title: 'Meetings und Updates',
            level: 'Bueroalltag',
            items: [
                { term: 'status update', translation: 'Zwischenstand', example: 'I will give a short status update in the meeting.' },
                { term: 'open items', translation: 'offene Punkte', example: 'Let us review the open items first.' },
                { term: 'deadline', translation: 'Frist', example: 'The deadline is next Friday.' },
                { term: 'follow-up', translation: 'Nachverfolgung', example: 'I will send a follow-up email this afternoon.' }
            ]
        },
        {
            id: 'email-core',
            title: 'E-Mail und Rückfragen',
            level: 'Taeglich',
            items: [
                { term: 'latest version', translation: 'aktuellste Version', example: 'Could you send me the latest version?' },
                { term: 'clarification', translation: 'Klaerung', example: 'I need clarification on this requirement.' },
                { term: 'attachment', translation: 'Anhang', example: 'Please find the attachment below.' },
                { term: 'by tomorrow', translation: 'bis morgen', example: 'Can you share this by tomorrow?' }
            ]
        },
        {
            id: 'sap-core',
            title: 'SAP und Prozesse',
            level: 'Fachsprache',
            items: [
                { term: 'approval', translation: 'Freigabe', example: 'The document is waiting for final approval.' },
                { term: 'mismatch', translation: 'Abweichung', example: 'There is a mismatch in the account data.' },
                { term: 'ticket', translation: 'Ticket', example: 'I opened a ticket for this issue.' },
                { term: 'process step', translation: 'Prozessschritt', example: 'This process step is still pending.' }
            ]
        }
    ],
    thirtyDayPlan: [
        { day: 1, focus: 'Grammatikstart', task: 'Lies 5 Minuten laut Present Simple und Present Continuous Beispiele.', output: 'Sprich drei eigene Beispielsatze laut aus.' },
        { day: 2, focus: 'Meeting-Vokabeln', task: 'Lerne 8 Begriffe zu Meeting, agenda, minutes, deadline und update.', output: 'Bilde drei kurze Statussätze.' },
        { day: 3, focus: 'Rückfragen', task: 'Uebe vier Standardfragen für Calls und Meetings.', output: 'Sprich Could you please repeat that? mehrfach laut.' },
        { day: 4, focus: 'E-Mail-Bitten', task: 'Schreibe drei kurze höfliche Bitten auf Englisch.', output: 'Nutze please, latest version und by today.' },
        { day: 5, focus: 'Present Perfect', task: 'Wiederhole since und for mit vier Beispielen.', output: 'Schreibe zwei Sätze ueber deine Arbeitserfahrung.' },
        { day: 6, focus: 'SAP-Sprache', task: 'Lerne 6 Wörter für report, issue, approval, process, ticket und error.', output: 'Bilde drei kurze Systemsätze.' },
        { day: 7, focus: 'Wiederholung 1', task: 'Gehe dein Fehlerjournal durch und wiederhole alle Einträge.', output: 'Schreibe zwei verbesserte Beispielsatze.' },
        { day: 8, focus: 'Fragen bilden', task: 'Uebe Fragen mit do, does, is und are.', output: 'Formuliere vier Arbeitsfragen.' },
        { day: 9, focus: 'Status-Updates', task: 'Uebe Sätze wie I am blocked und The next step is...', output: 'Sprich ein 30-Sekunden-Update laut.' },
        { day: 10, focus: 'False Friends', task: 'Wiederhole actual, eventually, sensible und become.', output: 'Schreibe vier korrekte Beispielsatze.' },
        { day: 11, focus: 'Telefon und Teams', task: 'Uebe Standardreaktionen für schlechte Audioqualitaet.', output: 'Schreibe drei Rückfragen für Calls.' },
        { day: 12, focus: 'Vergleiche', task: 'Wiederhole more ... than, better than und fewer.', output: 'Vergleiche zwei Reports in drei Sätzen.' },
        { day: 13, focus: 'Mail-Abschluss', task: 'Trainiere look forward to hearing from you.', output: 'Schreibe zwei E-Mail-Abschluesse.' },
        { day: 14, focus: 'Wiederholung 2', task: 'Trainiere nur die Aufgaben, die du zuletzt falsch hattest.', output: 'Verbessere drei Fehler gezielt.' },
        { day: 15, focus: 'Bedingungssätze', task: 'Uebe If I have enough time, I will... in vier Varianten.', output: 'Schreibe vier Zukunftssätze für die Arbeit.' },
        { day: 16, focus: 'Freigaben und Deadlines', task: 'Lerne Formulierungen für approval, deadline und follow-up.', output: 'Bilde drei verbindliche Sätze.' },
        { day: 17, focus: 'Verantwortung beschreiben', task: 'Trainiere responsible for und in charge of.', output: 'Schreibe zwei Sätze ueber deinen Aufgabenbereich.' },
        { day: 18, focus: 'Meeting-Beitraege', task: 'Uebe I agree, I suggest, I think we should.', output: 'Sprich vier kurze Meeting-Beitraege.' },
        { day: 19, focus: 'Berichtsenglisch', task: 'Wiederhole report, issue, update, review und summary.', output: 'Schreibe einen Mini-Bericht mit drei Sätzen.' },
        { day: 20, focus: 'Höflich nachfassen', task: 'Schreibe drei Nachfasssätze für offene Anfragen.', output: 'Nutze polite follow-up language.' },
        { day: 21, focus: 'Wiederholung 3', task: 'Lies deine bisherigen Starken und Fehler durch.', output: 'Markiere zwei Muster, die du jetzt besser kannst.' },
        { day: 22, focus: 'Zeiten im Job', task: 'Trainiere gestern, heute, seit letzter Woche und bis morgen.', output: 'Schreibe vier Zeitsätze für den Arbeitsalltag.' },
        { day: 23, focus: 'Klare Zusagen', task: 'Uebe I will check it by tomorrow und aehnliche Zusagen.', output: 'Formuliere drei kurze verbindliche Antworten.' },
        { day: 24, focus: 'Problem beschreiben', task: 'Lerne Formulierungen für issue, mismatch, missing data und delay.', output: 'Schreibe drei Problemsätze.' },
        { day: 25, focus: 'Klaerung anfordern', task: 'Trainiere ask for clarification in E-Mail und Meeting.', output: 'Formuliere zwei kurze Bitten um Klaerung.' },
        { day: 26, focus: 'Kurzpraesentation', task: 'Halte ein einminuetiges Status-Update laut.', output: 'Nutze opening, issue und next step.' },
        { day: 27, focus: 'Genauigkeit', task: 'Wiederhole accurate, current, latest, complete und available.', output: 'Bilde fuenf saubere Beispielsatze.' },
        { day: 28, focus: 'Wiederholung 4', task: 'Arbeite nur an deinen haeufigsten Fehlern.', output: 'Schreibe die drei schwaechsten Muster neu.' },
        { day: 29, focus: 'B1-Simulation', task: 'Schreibe eine Mini-Mail mit Bitte, Status und Abschluss.', output: 'Mindestens vier saubere Sätze.' },
        { day: 30, focus: 'Abschlusscheck', task: 'Wiederhole alle Module kurz und notiere deinen Fortschritt.', output: 'Schreibe drei Sätze: Was kann ich besser als vor 30 Tagen?' }
    ],
    commonMistakes: [
        {
            title: 'Routinen und aktuelle Handlungen verwechseln',
            wrong: 'I am checking customer emails every morning.',
            correct: 'I check customer emails every morning.',
            reason: 'Für feste Gewohnheiten nutzt du Present Simple, nicht Present Continuous.'
        },
        {
            title: 'Deutsche Praepositionen direkt uebertragen',
            wrong: 'I am responsible on this task.',
            correct: 'I am responsible for this task.',
            reason: 'Viele Verben und Adjektive haben im Englischen feste Praepositionen, die man gezielt lernen muss.'
        },
        {
            title: 'False Friends benutzen',
            wrong: 'Please send me the actual document.',
            correct: 'Please send me the current document or the latest version.',
            reason: 'Actual heisst meistens tatsächlich. Für aktuell brauchst du current oder latest.'
        },
        {
            title: 'Hilfsverben in Fragen vergessen',
            wrong: 'When starts the meeting?',
            correct: 'When does the meeting start?',
            reason: 'Im Present Simple brauchst du in Fragen meist do oder does.'
        }
    ]
};
