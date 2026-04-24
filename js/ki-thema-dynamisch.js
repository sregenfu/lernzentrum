(function () {
    const TOPIC_PROGRESS_KEY = 'ki-lernzentrum-topic-progress-v1';

    const TOPIC_DATA = {
        mcp: {
            label: 'Model Context Protocol (MCP)',
            intro: 'MCP hilft dir, Agenten mit klaren Kontext- und Tool-Regeln stabil aufzubauen.',
            modules: {
                grundlagen: {
                    label: 'Grundlagen',
                    levels: {
                        basis: {
                            points: ['MCP als Vertrag zwischen Aufgabe, Kontext und Tools verstehen.', 'Rollen und erlaubte Aktionen explizit benennen.', 'Erwartetes Ausgabeformat als feste Struktur definieren.'],
                            prompt: 'Formuliere einen MCP-Prompt mit Rolle, 2 Tools und Ausgabeformat.',
                            note: 'Ziel: reproduzierbare Antworten statt Zufall.'
                        },
                        praxis: {
                            points: ['Kontext in Pflicht- und Optionalfelder aufteilen.', 'Tool-Aufrufe mit Eingrenzen versehen.', 'Fehlermeldungen und Handovers eindeutig machen.'],
                            prompt: 'Erstelle ein MCP-Schema fÃ¼r einen Support-Agenten mit Eskalationsregel.',
                            note: 'Praxisfokus: gute Defaults und klare Grenzen.'
                        },
                        profi: {
                            points: ['Mehrstufige Agent-Workflows mit Zustandswechsel modellieren.', 'Tool-Entscheidungen mit Confidence-Schwellen koppeln.', 'Auditierbare Output- und Logging-Regeln definieren.'],
                            prompt: 'Designe einen MCP-Workflow fÃ¼r Incident-Analyse mit 3 Toolphasen.',
                            note: 'Profi: Robustheit, Nachvollziehbarkeit, Governance.'
                        }
                    }
                },
                'agent-prompts': {
                    label: 'Agent-Prompts',
                    levels: {
                        basis: { points: ['Promptaufbau: Ziel, Kontext, Grenzen.', 'Knappe Sprache und klare Verben.', 'Keine versteckten Annahmen.'], prompt: 'Schreibe einen Agent-Prompt fÃ¼r Ticket-Klassifikation.', note: 'Halte die Struktur in 5 Zeilen.' },
                        praxis: { points: ['Prompt mit Toolwahl-Heuristik anreichern.', 'Fallback fÃ¼r fehlende Daten integrieren.', 'Output in JSON strukturieren.'], prompt: 'Erzeuge einen Agent-Prompt inkl. JSON-Antwortschema.', note: 'Praxismodell fÃ¼r Integrationen.' },
                        profi: { points: ['Prompt in Steuerungsteil und Reasoning-Teil splitten.', 'Konfliktregeln bei widersprechlichen Quellen.', 'AntwortqualitÃ¤t durch Selbstcheck sichern.'], prompt: 'Baue einen Prompt mit SelbstprÃ¼fung vor finaler Ausgabe.', note: 'Profi: hohe QualitÃ¤t bei komplexen Inputs.' }
                    }
                },
                'tool-scopes': {
                    label: 'Tool-Scopes',
                    levels: {
                        basis: { points: ['Tools mit Zweck und Inputtyp dokumentieren.', 'Erlaubte/unerlaubte Aufrufe trennen.', 'Maximalen Umfang pro Antwort begrenzen.'], prompt: 'Liste 3 erlaubte Tools mit jeweils einem sicheren Einsatzfall.', note: 'Scope verhindert Missbrauch.' },
                        praxis: { points: ['Tool-Scopes je Nutzerrolle differenzieren.', 'Rate-Limits und Timeout-Regeln einbauen.', 'Output-Validierung nach Tool-Aufruf.'], prompt: 'Definiere Tool-Scopes fÃ¼r Analyst vs. Admin.', note: 'Praxis: Rollenbasiert denken.' },
                        profi: { points: ['RisikoabhÃ¤ngige Toolfreigaben dynamisch steuern.', 'Policy-Engine und Audit-Events koppeln.', 'RechteÃ¤nderungen versionieren.'], prompt: 'Entwirf eine Scope-Policy mit Risiko-Levels.', note: 'Profi: Security by Design.' }
                    }
                },
                fallbacks: {
                    label: 'Fallbacks',
                    levels: {
                        basis: { points: ['Fallback bei Toolfehler: erklÃ¤ren statt halluzinieren.', 'Nutzer nach fehlenden Daten fragen.', 'Alternativpfad anbieten.'], prompt: 'Schreibe einen Fallback-Block fÃ¼r nicht erreichbare API.', note: 'NutzerfÃ¼hrung bleibt klar.' },
                        praxis: { points: ['Fallback in Stufen: Retry, Alternative, Hand-off.', 'PrioritÃ¤t nach KritikalitÃ¤t.', 'Zeitmarken in Fehlermeldung.'], prompt: 'Baue eine 3-stufige Retry/Fallback-Strategie.', note: 'Praxis: SLA-konforme Fehlerbehandlung.' },
                        profi: { points: ['Fallback-Metriken erfassen und bewerten.', 'Automatische Root-Cause-Hinweise ausgeben.', 'Postmortem-Daten maschinenlesbar speichern.'], prompt: 'Definiere Fallback + Telemetrie fÃ¼r produktive Agenten.', note: 'Profi: kontinuierliche Verbesserung.' }
                    }
                }
            }
        },
        ml: {
            label: 'Machine Learning',
            intro: 'Wichtige Konzepte von DatenQualität bis Modellbewertung in einem modularen Lernfluss.',
            modules: {
                daten: {
                    label: 'Datenbasis',
                    levels: {
                        basis: { points: ['Datentypen und fehlende Werte erkennen.', 'Train/Test sauber trennen.', 'Leichte Data-Checks vor Modellstart.'], prompt: 'Analysiere einen Datensatz und liste 5 Qualitätsrisiken.', note: 'DatenQualität bestimmt ModellQualität.' },
                        praxis: { points: ['Klassenverteilung und Sampling reflektieren.', 'Leakage-Quellen gezielt vermeiden.', 'Validierungsstrategie passend Wählen.'], prompt: 'Erstelle einen Datenprüfplan für ein Klassifikationsprojekt.', note: 'Praxis: valide Evaluation sichern.' },
                        profi: { points: ['Datenversionierung und Drift-Monitoring aufsetzen.', 'Feature-Store Governance definieren.', 'Bias-Analyse in Pipeline integrieren.'], prompt: 'Entwirf ein Monitoring für Data Drift und Label Shift.', note: 'Profi: skalierbarer Datenbetrieb.' }
                    }
                },
                features: {
                    label: 'Feature Engineering',
                    levels: {
                        basis: { points: ['Kategorien kodieren.', 'Skalierung sinnvoll einsetzen.', 'Feature-Relevanz erkläreen.'], prompt: 'Nenne 8 mögliche Features für Churn-Prognose.', note: 'Features transportieren Signal.' },
                        praxis: { points: ['Interaktionen und Aggregationen erzeugen.', 'Zeitliche Features robust bauen.', 'Leakage bei Features verhindern.'], prompt: 'Plane Feature Engineering für Zeitreihendaten.', note: 'Praxis: Domänenwissen konkret nutzen.' },
                        profi: { points: ['Automated Feature Search kritisch bewerten.', 'Feature Importance mit SHAP vergleichen.', 'Stabilität über Zeitfenster prüfen.'], prompt: 'Definiere eine Feature-Validierung über 3 Releases.', note: 'Profi: nachhaltige Featuresets.' }
                    }
                },
                metriken: {
                    label: 'Metriken',
                    levels: {
                        basis: { points: ['Accuracy, Precision, Recall unterscheiden.', 'Confusion Matrix lesen.', 'Metrik zum Businessziel zuordnen.'], prompt: 'Wähle eine Metrik für Betrugserkennung und begründe.', note: 'Nicht jede hohe Accuracy ist gut.' },
                        praxis: { points: ['Threshold-Tuning nachvollziehbar dokumentieren.', 'ROC-AUC und PR-AUC sinnvoll einsetzen.', 'Kostenmatrix in die Bewertung aufnehmen.'], prompt: 'Erstelle ein Bewertungsraster für unausgewogene Klassen.', note: 'Praxis: Wirkung statt nur Zahlen.' },
                        profi: { points: ['Online- und Offline-Metriken verbinden.', 'Kalibrierung und Unsicherheit messen.', 'KPI-Drift nach Deployment beobachten.'], prompt: 'Entwirf ein Monitoring für ModellQualität im Betrieb.', note: 'Profi: echte Produktmetriken.' }
                    }
                },
                pipelines: {
                    label: 'Pipelines',
                    levels: {
                        basis: { points: ['Pipeline-Schritte klar benennen.', 'Reproduzierbare Reihenfolge sichern.', 'Baselines dokumentieren.'], prompt: 'Skizziere eine 5-Schritt-ML-Pipeline für Einsteiger.', note: 'Struktur schafft Wiederholbarkeit.' },
                        praxis: { points: ['Feature/Train/Validate als Module trennen.', 'Artefakte versionieren.', 'Fehlerfälle mit Abbruchregeln versehen.'], prompt: 'Plane CI/CD für ein ML-Modell mit Validierungsstopp.', note: 'Praxis: Teamfaehige Workflows.' },
                        profi: { points: ['Multi-Stage-Pipelines für mehrere Modelle aufsetzen.', 'Canary-Rollout für Modellupdates.', 'Automatisierte Rollbacks mit Triggern.'], prompt: 'Entwerfe eine produktive ML-Ops-Pipeline mit Rollback.', note: 'Profi: verlässlich im Betrieb.' }
                    }
                }
            }
        },
        dl: {
            label: 'Deep Learning',
            intro: 'Von neuralen Netzen bis Framework-Wahl mit lernstufengerechten Inhalten.',
            modules: {
                'neurale-netzwerke': {
                    label: 'Neurale Networks',
                    levels: {
                        basis: { points: ['Layer, Gewichte und Aktivierung verstehen.', 'Forward und Backward Pass einordnen.', 'überfitting früh erkennen.'], prompt: 'erkläree ein einfaches neuronales Netz für Bilderkennung.', note: 'Grundprinzipien zuerst stabil machen.' },
                        praxis: { points: ['Batch Size und Learning Rate abstimmen.', 'Regularisierung gezielt einsetzen.', 'Fehlerbilder analysieren.'], prompt: 'Beschreibe ein Training-Setup für robustes CNN-Training.', note: 'Praxis: reproduzierbares Training.' },
                        profi: { points: ['Architekturablationen planen.', 'Gradientenfluss und InStabilität diagnostizieren.', 'Aktivierungs-/Normierungsstrategien vergleichen.'], prompt: 'Entwerfe einen Diagnoseplan für instabiles Netztraining.', note: 'Profi: tiefe Ursachenanalyse.' }
                    }
                },
                optimierung: {
                    label: 'Optimierung',
                    levels: {
                        basis: { points: ['Optimizer-Grundlagen (SGD, Adam).', 'Learning Rate als zentralen Hebel nutzen.', 'Train/Val-Loss korrekt lesen.'], prompt: 'Wann wählt man Adam statt SGD?', note: 'Basis: sauberes Lernverhalten.' },
                        praxis: { points: ['Warmup und Scheduler einsetzen.', 'Gradient Clipping definieren.', 'Checkpointing für Experimente nutzen.'], prompt: 'Baue eine Optimierungsstrategie für 30 Epochen.', note: 'Praxis: stabile Konvergenz.' },
                        profi: { points: ['Hyperparameter-Sweeps mit Budget planen.', 'Optimizer je Modelltyp vergleichen.', 'Konvergenzprobleme systematisch beheben.'], prompt: 'Definiere einen Plan für effizientes Hyperparameter-Tuning.', note: 'Profi: maximaler Output bei begrenzter Zeit.' }
                    }
                },
                architekturen: {
                    label: 'Architekturen',
                    levels: {
                        basis: { points: ['CNN für Bilder, RNN für Sequenzen, Transformer für Kontext.', 'Passende Architektur zum Problem Wählen.', 'Modellkomplexitaet bewusst begrenzen.'], prompt: 'Wähle eine Architektur für Textklassifikation und begründe.', note: 'Architektur folgt dem Datentyp.' },
                        praxis: { points: ['Encoder-Decoder Konzepte einsetzen.', 'Transfer Learning sinnvoll nutzen.', 'Ablationen für Architekturentscheidungen.'], prompt: 'Skizziere einen Transfer-Learning-Plan für kleine Datensätze.', note: 'Praxis: schneller zu guten Ergebnissen.' },
                        profi: { points: ['Hybridarchitekturen evaluieren.', 'Latency/Qualität Trade-off messen.', 'Architekturentscheidungen dokumentieren.'], prompt: 'Erstelle eine Entscheidungs-Matrix für 3 Architekturvarianten.', note: 'Profi: fundierte Architekturwahl.' }
                    }
                },
                frameworks: {
                    label: 'Frameworks',
                    levels: {
                        basis: { points: ['PyTorch/TensorFlow/JAX Grundideen unterscheiden.', 'Entwicklungsworkflow je Framework kennen.', 'Einfaches Training ausführen.'], prompt: 'Vergleiche PyTorch und TensorFlow für ein Lernprojekt.', note: 'Starte mit dem Framework, das dein Team versteht.' },
                        praxis: { points: ['Frameworkwahl an Deployment koppeln.', 'Experimenttracking einheitlich halten.', 'Code-Template für Wiederverwendung bauen.'], prompt: 'Lege Auswahlkriterien für ein Team-Framework fest.', note: 'Praxis: wartbarer Code.' },
                        profi: { points: ['Compiler/Runtime Unterschiede nutzen.', 'Framework-Mix strategisch minimieren.', 'Betriebskosten in Entscheidung einbeziehen.'], prompt: 'Entwirf eine Framework-Strategie für produktive KI-Teams.', note: 'Profi: technische und wirtschaftliche Balance.' }
                    }
                }
            }
        },
        'modelle-tools': {
            label: 'Modelle und Tools',
            intro: 'Tool- und Modellwissen mit klaren Praxispfaden für den Alltag.',
            modules: {
                tools: {
                    label: 'Tools',
                    levels: {
                        basis: { points: ['Toolklassen verstehen: Recherche, Code, Daten.', 'Ein Tool pro Aufgabe statt Tool-Overload.', 'Ergebnis prüfen und belegen.'], prompt: 'Wähle 3 Tools für einen Support-Use-Case und begründe.', note: 'Klarer Tool-Fit vor Geschwindigkeit.' },
                        praxis: { points: ['Toolchains für wiederkehrende Aufgaben bauen.', 'Kosten und Laufzeiten vergleichen.', 'Schnittstellen robust absichern.'], prompt: 'Baue eine Toolkette für Analyse -> Bericht -> Review.', note: 'Praxis: durchgängige Workflows.' },
                        profi: { points: ['Tool-Policies je Risikoebene.', 'Messbare Tool-Qualität via KPIs.', 'Upgrade-Strategie ohne Ausfallzeiten.'], prompt: 'Definiere Governance für produktive Toolchains.', note: 'Profi: skalierbare Tool-Landschaft.' }
                    }
                },
                konzept: {
                    label: 'Konzept',
                    levels: {
                        basis: { points: ['Von Anforderung zu Toolwahl in 3 Schritten.', 'Saubere Rollenverteilung Mensch/Agent.', 'Erwartete Ausgabequalität definieren.'], prompt: 'Skizziere ein Tool-Konzept für Wissensarbeit im Team.', note: 'Konzept vor Implementierung.' },
                        praxis: { points: ['Prozessschnittstellen exakt beschreiben.', 'übergaben zwischen Tools standardisieren.', 'Fehlerfälle früh modellieren.'], prompt: 'Beschreibe ein Betriebsmodell für 4 gekoppelte Tools.', note: 'Praxis: robuste Schnittstellen.' },
                        profi: { points: ['Enterprise-Architektur und Security abstimmen.', 'Toolentscheidungen mit TCO bewerten.', 'Lebenszyklus inkl. Migration planen.'], prompt: 'Erstelle ein Zielbild für eine KI-Toolplattform.', note: 'Profi: strategische Plattformsicht.' }
                    }
                },
                praxistipps: {
                    label: 'Praxistipps',
                    levels: {
                        basis: { points: ['Kurzprompts mit klaren Zielen.', 'Immer mit kleinem Testfall starten.', 'Ergebnisse versionieren.'], prompt: 'Formuliere 3 alltagstaugliche Prompt-Regeln.', note: 'Kleine Routinen schaffen Stabilität.' },
                        praxis: { points: ['Review-Checklisten für Ausgaben nutzen.', 'Teamweite Templates einführen.', 'Fehler als Lernfaelle sammeln.'], prompt: 'Erstelle eine Team-Checkliste für Prompt-Reviews.', note: 'Praxis: Qualität skaliert über Standards.' },
                        profi: { points: ['Metriken für Prompt- und ToolQualität.', 'Automatisierte Regressionstests für Agenten.', 'Wissensmanagement für Lösungsmuster.'], prompt: 'Definiere ein QA-Set für produktive Agent-Antworten.', note: 'Profi: lernendes System statt Einzelloesung.' }
                    }
                }
            }
        },
        chatbot: {
            label: 'Chatbot-Aufbau',
            intro: 'Schrittweise vom Scope bis Monitoring, abgestimmt auf dein gewähltes Modul.',
            modules: {
                ziele: {
                    label: 'Ziele und Scope',
                    levels: {
                        basis: { points: ['Zielgruppe und Nutzen klar formulieren.', 'Top-5 Userfragen sammeln.', 'Erfolgskriterium je Frage definieren.'], prompt: 'Definiere Scope und KPIs für einen internen Helpdesk-Bot.', note: 'Klares Ziel verhindert Funktionswucher.' },
                        praxis: { points: ['Intent-Grenzen und Nicht-Zuständigkeiten festlegen.', 'übergabe an Mensch vorsehen.', 'Risiko-Use-Cases priorisieren.'], prompt: 'Skizziere Scope + Eskalationsgrenzen für Kundenservice.', note: 'Praxis: realistische Verantwortung.' },
                        profi: { points: ['Mehrkanal-Strategie abgestimmt planen.', 'Business-KPIs direkt an Botziele koppeln.', 'Governance für Scope-Aenderungen festlegen.'], prompt: 'Erstelle ein Scope-Governance-Modell für mehrere Teams.', note: 'Profi: strategische Steuerung.' }
                    }
                },
                datenbasis: {
                    label: 'Datenbasis',
                    levels: {
                        basis: { points: ['Quelleninventar erstellen.', 'Aktualisierungsrhythmus planen.', 'Sichtbarkeit je Quelle definieren.'], prompt: 'Plane die Wissensbasis für einen FAQ-Chatbot.', note: 'Ohne gute Daten kein guter Bot.' },
                        praxis: { points: ['Chunking-Strategie für Retrieval bestimmen.', 'QuellenQualität regelmäßig prüfen.', 'Versionen und Freigaben dokumentieren.'], prompt: 'Definiere ein Datenpflegekonzept für Bot-Wissen.', note: 'Praxis: Inhalt bleibt verlässlich.' },
                        profi: { points: ['Semantische SuchQualität messen.', 'Domain-Adaptionen strukturieren.', 'Data-Governance inkl. Compliance.'], prompt: 'Entwirf ein Governance-Modell für Bot-Wissensquellen.', note: 'Profi: nachhaltige Wissensarchitektur.' }
                    }
                },
                dialogdesign: {
                    label: 'Dialogdesign',
                    levels: {
                        basis: { points: ['Begrüßung, Klarifikation, Abschluss festlegen.', 'Einfachen Dialogfluss skizzieren.', 'Antwortlaenge begrenzen.'], prompt: 'Schreibe ein Dialogskript für 3 typische Nutzerfragen.', note: 'Klarer Flow verbessert Verständnis.' },
                        praxis: { points: ['Rückfragen gezielt einsetzen.', 'Fehlerdialoge wertschätzend formulieren.', 'Intent-Wechsel robust abfangen.'], prompt: 'Plane einen Dialogflow mit Rückfrage-Logik.', note: 'Praxis: resilient bei echten Nutzern.' },
                        profi: { points: ['Konversationen segmentiert auswerten.', 'Tonalität dynamisch je Kontext anpassen.', 'Dialogmuster über A/B Tests optimieren.'], prompt: 'Entwerfe ein Experimentdesign für Dialogverbesserung.', note: 'Profi: datengetriebenes Dialogdesign.' }
                    }
                },
                evaluation: {
                    label: 'Evaluation und Rollout',
                    levels: {
                        basis: { points: ['Testset mit Standardfragen bauen.', 'AntwortQualität manuell prüfen.', 'Pilotgruppe definieren.'], prompt: 'Erstelle eine einfache Bot-Testmatrix für den Start.', note: 'Basis: erst sicher, dann breit ausrollen.' },
                        praxis: { points: ['Abbruchraten und Lösungsquote messen.', 'Feedbackkanal direkt im Chat integrieren.', 'Rollout stufenweise planen.'], prompt: 'Plane einen 3-Phasen-Rollout für einen Team-Bot.', note: 'Praxis: kontrolliertes Wachstum.' },
                        profi: { points: ['Live-Monitoring mit Alerts aufsetzen.', 'Root-Cause-Analysen für Fehldialoge.', 'Release-Management für Prompt-/Model-Updates.'], prompt: 'Entwirf ein Monitoring-Dashboard für Bot-Betrieb.', note: 'Profi: kontinuierliche BetriebsQualität.' }
                    }
                }
            }
        },
        quiz: {
            label: 'Quiz-Lernpfad',
            intro: 'Wähle je nach Niveau ein Quiz-Modul und springe dann direkt in das passende Themenquiz.',
            modules: {
                'ml-quiz': {
                    label: 'ML Quiz',
                    levels: {
                        basis: { points: ['2 Kernfragen zu Metriken und Overfitting.', 'Ziel: Begriffe sicher unterscheiden.', 'Direktes Feedback nach Auswertung.'], prompt: 'Starte danach das ML Quiz und erkläree jede Antwort in 1 Satz.', note: 'Quiz-Link: ki-thema-quiz.html#mlQuiz' },
                        praxis: { points: ['Zusatzaufgabe: Metrik an Use-Case koppeln.', 'Fehlerantworten reflektieren.', 'Eigene Beispielfrage ergänzen.'], prompt: 'Leite aus dem ML Quiz 2 Praxisregeln ab.', note: 'Quiz-Link: ki-thema-quiz.html#mlQuiz' },
                        profi: { points: ['Antworten mit Kostenfunktion verknüpfen.', 'Trade-offs zwischen Recall und Precision begründen.', 'Eigene Transferfrage formulieren.'], prompt: 'Formuliere eine Expertenfrage basierend auf dem Quiz.', note: 'Quiz-Link: ki-thema-quiz.html#mlQuiz' }
                    }
                },
                'dl-quiz': {
                    label: 'DL Quiz',
                    levels: {
                        basis: { points: ['Grundfragen zu Backpropagation und CNN.', 'Architekturbegriff korrekt anwenden.', 'Sofortige Rückmeldung nutzen.'], prompt: 'Starte das DL Quiz und notiere den schwierigsten Punkt.', note: 'Quiz-Link: ki-thema-quiz.html#dlQuiz' },
                        praxis: { points: ['Antworten in Trainingspraxis übersetzen.', 'Optimierungsbezug herstellen.', 'Fehlerantworten gezielt nacharbeiten.'], prompt: 'erkläree, wie die Quizantwort dein Training verbessert.', note: 'Quiz-Link: ki-thema-quiz.html#dlQuiz' },
                        profi: { points: ['Antworten mit Architekturentscheidungen verbinden.', 'Konvergenz- und Generalisierungsaspekte einbauen.', 'Eigene Expertenfrage ableiten.'], prompt: 'Entwickle eine DL-Transferfrage für dein Team.', note: 'Quiz-Link: ki-thema-quiz.html#dlQuiz' }
                    }
                },
                'ds-quiz': {
                    label: 'Data Science Quiz',
                    levels: {
                        basis: { points: ['Fragen zu Explorationsstart und Testset.', 'Grundlagen der sauberen Analyse.', 'Kurzfeedback auswerten.'], prompt: 'Starte das DS Quiz und fasse die Kernregel zusammen.', note: 'Quiz-Link: ki-thema-quiz.html#dsQuiz' },
                        praxis: { points: ['Verknüpfe Quiz mit Projektanalyse.', 'Erstelle aus den Fragen eine Checkliste.', 'Setze Prioritaeten für DatenQualität.'], prompt: 'Leite aus dem DS Quiz eine 5-Punkte-Checkliste ab.', note: 'Quiz-Link: ki-thema-quiz.html#dsQuiz' },
                        profi: { points: ['begründe methodische Entscheidungen.', 'überfuehre Quizfragen in Governance-Regeln.', 'Baue Transfer in Teamprozesse ein.'], prompt: 'Erstelle eine DS-Reviewregel aus den Quizfragen.', note: 'Quiz-Link: ki-thema-quiz.html#dsQuiz' }
                    }
                },
                'python-quiz': {
                    label: 'Python Quiz',
                    levels: {
                        basis: { points: ['Datentypen und Environments sicher unterscheiden.', 'Core-Python für KI-Projekte festigen.', 'Fehler direkt reflektieren.'], prompt: 'Starte das Python Quiz und notiere 2 Merksätze.', note: 'Quiz-Link: ki-thema-quiz.html#pythonQuiz' },
                        praxis: { points: ['Antworten in Setup-Routinen übertragen.', 'Projektisolation sauber dokumentieren.', 'Typische Fehler vermeiden.'], prompt: 'Leite aus dem Quiz eine Setup-Checkliste ab.', note: 'Quiz-Link: ki-thema-quiz.html#pythonQuiz' },
                        profi: { points: ['Teamstandards für Python-Umgebungen definieren.', 'Reproduzierbarkeit in Pipelines sichern.', 'Quizwissen auf Deploy-Prozesse mappen.'], prompt: 'Definiere 3 Teamregeln für Python-Projektsetups.', note: 'Quiz-Link: ki-thema-quiz.html#pythonQuiz' }
                    }
                }
            }
        }
    };

    const topicSelect = document.getElementById('topicSelect');
    const levelSelect = document.getElementById('levelSelect');
    const moduleSelect = document.getElementById('moduleSelect');
    const pageTitle = document.getElementById('pageTitle');
    const pageIntro = document.getElementById('pageIntro');
    const moduleTitle = document.getElementById('moduleTitle');
    const metaTopic = document.getElementById('metaTopic');
    const metaLevel = document.getElementById('metaLevel');
    const metaModule = document.getElementById('metaModule');
    const contentList = document.getElementById('contentList');
    const practicePrompt = document.getElementById('practicePrompt');
    const topicNote = document.getElementById('topicNote');
    const completeModuleButton = document.getElementById('completeModuleButton');
    const completionStatus = document.getElementById('completionStatus');

    if (!topicSelect || !levelSelect || !moduleSelect) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const initialTopic = TOPIC_DATA[params.get('topic')] ? params.get('topic') : 'mcp';
    const initialLevel = ['basis', 'praxis', 'profi'].includes(params.get('level')) ? params.get('level') : 'basis';
    let topicProgress = loadTopicProgress();

    populateTopics();
    topicSelect.value = initialTopic;
    levelSelect.value = initialLevel;
    populateModules(initialTopic, params.get('module'));
    render();

    topicSelect.addEventListener('change', function () {
        populateModules(topicSelect.value, null);
        render();
    });

    levelSelect.addEventListener('change', function () {
        render();
    });

    moduleSelect.addEventListener('change', function () {
        render();
    });

    if (completeModuleButton) {
        console.log('Button found, adding event listener');
        completeModuleButton.addEventListener('click', function () {
            console.log('Button clicked!');
            toggleCurrentModuleCompletion();
        });
    } else {
        console.error('Complete module button not found!');
    }

    function populateTopics() {
        topicSelect.innerHTML = '';
        Object.keys(TOPIC_DATA).forEach((topicKey) => {
            const option = document.createElement('option');
            option.value = topicKey;
            option.textContent = TOPIC_DATA[topicKey].label;
            topicSelect.appendChild(option);
        });
    }

    function populateModules(topicKey, preferredModule) {
        moduleSelect.innerHTML = '';
        const topic = TOPIC_DATA[topicKey];
        const moduleKeys = Object.keys(topic.modules);

        moduleKeys.forEach((moduleKey) => {
            const option = document.createElement('option');
            option.value = moduleKey;
            option.textContent = topic.modules[moduleKey].label;
            moduleSelect.appendChild(option);
        });

        if (preferredModule && topic.modules[preferredModule]) {
            moduleSelect.value = preferredModule;
        } else {
            moduleSelect.value = moduleKeys[0];
        }
    }

    function render() {
        try {
            const topicKey = topicSelect.value;
            const levelKey = levelSelect.value;
            const moduleKey = moduleSelect.value;
            
            console.log('Render called with:', { topicKey, levelKey, moduleKey });
            console.log('TOPIC_DATA keys:', Object.keys(TOPIC_DATA));
            
            const topic = TOPIC_DATA[topicKey];
            if (!topic) {
                console.error('Topic not found:', topicKey);
                return;
            }
            
            const moduleData = topic.modules[moduleKey];
            if (!moduleData) {
                console.error('Module not found:', moduleKey, 'Available modules:', Object.keys(topic.modules));
                return;
            }
            
            const levelData = moduleData.levels[levelKey];
            if (!levelData) {
                console.error('Level not found:', levelKey, 'Available levels:', Object.keys(moduleData.levels));
                return;
            }

            console.log('levelData:', levelData);

            pageTitle.textContent = topic.label;
            pageIntro.textContent = topic.intro;

            moduleTitle.textContent = moduleData.label;
            metaTopic.textContent = 'Thema: ' + topic.label;
            metaLevel.textContent = 'Level: ' + toLevelLabel(levelKey);
            metaModule.textContent = 'Modul: ' + moduleData.label;

            contentList.innerHTML = '';
            console.log('Points to add:', levelData.points);
            levelData.points.forEach((point) => {
                const item = document.createElement('li');
                item.textContent = point;
                contentList.appendChild(item);
            });
            console.log('Content list now has', contentList.children.length, 'items');

            practicePrompt.textContent = levelData.prompt;
            topicNote.textContent = levelData.note;

            if (completeModuleButton && completionStatus) {
                const done = isModuleCompleted(topicKey, levelKey, moduleKey);
                completeModuleButton.textContent = done ? 'Modul als offen markieren' : 'Modul als erledigt markieren';
                completionStatus.textContent = done
                    ? 'Status: Dieses Modul ist als erledigt markiert.'
                    : 'Status: Dieses Modul ist noch offen.';
            }

            const updatedParams = new URLSearchParams({
                topic: topicKey,
                level: levelKey,
                module: moduleKey
            });
            const newUrl = 'ki-thema-dynamisch.html?' + updatedParams.toString();
            window.history.replaceState({}, '', newUrl);
        } catch (error) {
            console.error('Error in render:', error);
        }
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

    function loadTopicProgress() {
        try {
            const raw = localStorage.getItem(TOPIC_PROGRESS_KEY);
            if (!raw) {
                return {};
            }
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') {
                return {};
            }

            const normalized = {};
            Object.keys(parsed).forEach((topicKey) => {
                const list = Array.isArray(parsed[topicKey]) ? parsed[topicKey] : [];
                normalized[topicKey] = sanitizeProgressList(list);
            });
            return normalized;
        } catch (error) {
            return {};
        }
    }

    function saveTopicProgress() {
        try {
            localStorage.setItem(TOPIC_PROGRESS_KEY, JSON.stringify(topicProgress));
        } catch (error) {
            // Ignore localStorage errors.
        }
    }

    function buildProgressKey(levelKey, moduleKey) {
        return levelKey + '::' + moduleKey;
    }

    function isModuleCompleted(topicKey, levelKey, moduleKey) {
        const list = Array.isArray(topicProgress[topicKey]) ? topicProgress[topicKey] : [];
        const key = buildProgressKey(levelKey, moduleKey);
        return list.some((entry) => entry && typeof entry === 'object' && entry.key === key);
    }

    function toggleCurrentModuleCompletion() {
        try {
            console.log('toggleCurrentModuleCompletion called');
            const topicKey = topicSelect.value;
            const levelKey = levelSelect.value;
            const moduleKey = moduleSelect.value;
            console.log('Current values:', { topicKey, levelKey, moduleKey });
            
            const progressKey = buildProgressKey(levelKey, moduleKey);
            console.log('Progress key:', progressKey);
            
            const list = Array.isArray(topicProgress[topicKey]) ? topicProgress[topicKey].slice() : [];
            console.log('Current list for topic:', list);
            
            const index = list.findIndex((entry) => entry && typeof entry === 'object' && entry.key === progressKey);
            console.log('Index found:', index);

            if (index >= 0) {
                list.splice(index, 1);
                console.log('Removed entry');
            } else {
                list.push({
                    key: progressKey,
                    completedAt: new Date().toISOString()
                });
                console.log('Added entry');
            }

            topicProgress[topicKey] = list;
            saveTopicProgress();
            render();
            console.log('Render called after toggle');
        } catch (error) {
            console.error('Error in toggleCurrentModuleCompletion:', error);
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
            const previous = byKey.get(entry.key);
            if (!previous) {
                byKey.set(entry.key, {
                    key: entry.key,
                    completedAt: completedAt
                });
                return;
            }

            if (!previous.completedAt && completedAt) {
                byKey.set(entry.key, {
                    key: entry.key,
                    completedAt: completedAt
                });
            }
        });

        return Array.from(byKey.values());
    }
})();
