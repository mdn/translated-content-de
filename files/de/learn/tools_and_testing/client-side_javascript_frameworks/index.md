---
title: Verständnis von clientseitigen JavaScript-Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern erprobte Werkzeuge zum Aufbau skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardbestandteil ihrer Werkzeuge, sodass viele Frontend-Entwicklerstellen nun Framework-Erfahrung erfordern. In dieser Artikelreihe wollen wir Ihnen einen komfortablen Einstiegspunkt bieten, um mit dem Lernen von Frameworks zu beginnen.

Als angehender Frontend-Entwickler kann es schwierig sein, zu entscheiden, wo man beim Lernen von Frameworks beginnen sollte – es gibt so viele Frameworks zur Auswahl, ständig kommen neue hinzu, sie funktionieren größtenteils ähnlich, tun aber einige Dinge unterschiedlich, und es gibt einige spezifische Dinge, auf die man bei der Nutzung von Frameworks achten sollte.

Wir beabsichtigen nicht, Ihnen erschöpfend alles zu lehren, was Sie über React/ReactDOM, oder Vue, oder ein anderes spezifisches Framework wissen müssen; die Dokumentationen der Framework-Teams (und andere Ressourcen) übernehmen diesen Part bereits. Stattdessen möchten wir grundlegende Fragen beantworten, wie:

- Warum sollte ich ein Framework nutzen? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich mir stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen haben Frameworks? Wie funktionieren sie im Allgemeinen, und wie unterscheiden sich die Implementierungen dieser Funktionen zwischen den Frameworks?
- Wie stehen sie im Verhältnis zu "Vanilla" JavaScript oder HTML?

Danach werden wir Ihnen einige Tutorials zu den Grundlagen verschiedener Framework-Optionen geben, um Ihnen genügend Kontext und Vertrautheit zu bieten, damit Sie selbst tiefer in die Materie einsteigen können. Wir möchten, dass Sie ein pragmatisches Verständnis der Frameworks entwickeln, ohne die grundlegenden Best Practices der Webplattform, wie Barrierefreiheit, zu vergessen.

**[Starten Sie jetzt mit "Einführung in clientseitige Frameworks"](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Voraussetzungen

Sie sollten wirklich die Grundlagen der Kern-Websprachen lernen, bevor Sie versuchen, clientseitige Frameworks zu erlernen — [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und insbesondere [JavaScript](/de/docs/Learn/JavaScript).

Ihr Code wird dadurch reicher und professioneller, und Sie können Probleme mit mehr Vertrauen lösen, wenn Sie die grundlegenden Funktionen der Webplattform verstehen, auf denen die Frameworks aufbauen.

## Einführungsguides

- [1. Einführung in clientseitige Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, schauen uns eine kurze Geschichte von JavaScript und Frameworks an, warum es Frameworks gibt und was sie uns bringen, wie man beginnt, über die Auswahl eines Frameworks nachzudenken, das man lernen möchte, und welche Alternativen zu clientseitigen Frameworks es gibt.
- [2. Hauptmerkmale von Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Jedes große JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOMs, zur Handhabung von Browsereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks erkunden und untersuchen, wie Frameworks auf einem hohen Niveau funktionieren und welche Unterschiede es zwischen ihnen gibt.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023, mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, können Sie eine vollständige Version des Beispiel-React-App-Codes in unserem [todo-react repository](https://github.com/mdn/todo-react) finden. Für eine laufende Live-Version, siehe <https://mdn.github.io/todo-react/>.

- [1. Einstieg in React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : In diesem Artikel werden wir uns mit React vertraut machen. Wir werden ein wenig über seinen Hintergrund und seine Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und bearbeiten, um etwas über die Funktionsweise von React zu lernen.
- [2. Beginn unserer React-To-do-Liste](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Angenommen, wir wurden beauftragt, einen Proof-of-Concept in React zu erstellen – eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als abgeschlossen zu markieren, ohne sie zu löschen. In diesem Artikel werden Sie durch das Einrichten der grundlegenden `App`-Komponentenstruktur und der Gestaltung geführt, bereit für die Definition und Interaktivität der einzelnen Komponenten, die wir später hinzufügen werden.
- [3. Komponentisieren unserer React-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktional machen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine harten Regeln darüber, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen einen sinnvollen Weg, unsere App in Komponenten zu zerlegen.
- [4. React-Interaktivität: Ereignisse und Zustand](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : Mit unserem ausgearbeiteten Komponentenplan ist es jetzt an der Zeit, unsere App von einer völlig statischen Benutzeroberfläche in eine zu verwandeln, die tatsächlich Interaktionen und Änderungen ermöglicht. In diesem Artikel werden wir dies tun und uns dabei mit Ereignissen und Zustand beschäftigen.
- [5. React-Interaktivität: Bearbeiten, Filtern, bedingtes Rendern](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : Während wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), werden wir die letzten Schliffe an den Hauptfunktionen unserer To-do-App hinzufügen. Dies umfasst die Möglichkeit, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Unterwegs werden wir uns das bedingte Rendern der Benutzeroberfläche ansehen.
- [6. Barrierefreiheit in React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : In unserem letzten Tutorial-Artikel richten wir den Fokus (Wortspiel beabsichtigt) auf die Barrierefreiheit, einschließlich des Fokus-Managements in React, was die Benutzerfreundlichkeit sowohl für Tastaturnutzer als auch für Bildschirmleser verbessern kann.
- [7. React-Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihre Kenntnisse weiter zu vertiefen.

## Ember-Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020, mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, können Sie eine vollständige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) finden. Für eine laufende Live-Version, siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies beinhaltet auch ein paar zusätzliche Features, die im Tutorial nicht behandelt wurden).

- [1. Einstieg in Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige erste Einrichtungsschritte durchführen, um sie für die Entwicklung vorzubereiten.
- [2. Struktur der Ember-App und Komponentisierung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In diesem Artikel werden wir direkt mit der Planung der Struktur unserer TodoMVC-Ember-App beginnen, HTML dafür hinzufügen und dann diese HTML-Struktur in Komponenten zerlegen.
- [3. Ember-Interaktivität: Ereignisse, Klassen und Zustand](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : An diesem Punkt beginnen wir, unserer App interaktive Elemente hinzuzufügen, die Möglichkeit zu bieten, neue To-do-Elemente hinzuzufügen und anzuzeigen. Unterwegs werden wir uns den Einsatz von Ereignissen in Ember ansehen, Komponentenklassen erstellen, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und einen Service einrichten, um den Datenzustand unserer App zu verfolgen.
- [4. Ember-Interaktivität: Footer-Funktionalität, bedingtes Rendern](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, die Footer-Funktionalität in unserer App anzugehen. Hier werden wir den To-do-Zähler aktualisieren, um die korrekte Anzahl noch zu erledigender Aufgaben anzuzeigen, und das Styling korrekt auf erledigte Aufgaben anwenden (d. h. wenn das Kontrollkästchen aktiviert wurde). Wir werden auch unsere Schaltfläche "Erledigte löschen" verbinden. Unterwegs lernen wir, wie man bedingtes Rendern in unseren Templates verwendet.
- [5. Routing in Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : In diesem Artikel lernen wir Routing oder URL-basierte Filterung kennen, wie es manchmal genannt wird. Wir verwenden es, um eine eindeutige URL für jede der drei To-do-Ansichten bereitzustellen — "Alle", "Aktiv" und "Erledigt".
- [6. Ember-Ressourcen und Fehlerbehebung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie nutzen können, um Ihre Kenntnisse weiter zu vertiefen, sowie einige nützliche Tipps zur Fehlerbehebung und weitere Informationen.

## Vue-Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023, mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, können Sie eine vollständige Version des Beispiel-Vue-App-Codes in unserem [todo-vue repository](https://github.com/mdn/todo-vue) finden. Für eine laufende Live-Version, siehe <https://mdn.github.io/todo-vue/>.

- [1. Einstieg in Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Jetzt stellen wir Vue vor, das dritte unserer Frameworks. In diesem Artikel werfen wir einen Blick auf die Vue Hintergrundinformationen, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die hochrangige Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie wir das Projekt lokal ausführen können und bereiten es darauf vor, unser Beispiel zu erstellen.
- [2. Erstellen unserer ersten Vue-Komponente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir fangen mit der Erstellung einer Komponente für jedes Element in der To-do-Liste an. Unterwegs lernen wir einige wichtige Konzepte wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über Props und das Speichern von Datenzuständen.
- [3. Rendern einer Liste von Vue-Komponenten](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine voll funktionsfähige Komponente; jetzt sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns ansehen, wie man eine Reihe von To-do-Elementdaten zu unserer `App.vue`-Komponente hinzufügt, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mithilfe der `v-for`-Direktive anzeigen.
- [4. Hinzufügen eines neuen To-do-Formulars: Vue-Ereignisse, -Methoden und -Modelle](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : Wir haben jetzt Beispieldaten eingefügt und eine Schleife, die jedes Datenbit nimmt und es innerhalb eines `ToDoItem` in unserer App rendert. Was wir als nächstes wirklich brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen To-do-Elemente in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste erneut zu rendern, und ein Modell zur Datensteuerung. Das werden wir in diesem Artikel behandeln.
- [5. Stilannahme von Vue-Komponenten mit CSS](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : Die Zeit ist endlich gekommen, um unsere App ein wenig hübscher zu machen. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stylen.
- [6. Nutzung von Vue-Computed-Properties](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen To-do-Elemente anzeigt, indem wir eine Funktion von Vue namens Computed Properties verwenden. Diese arbeiten ähnlich wie Methoden, aber sie werden nur neu ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [7. Vue-bedingtes Rendern: Bearbeiten bestehender Todos](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Jetzt ist es an der Zeit, eine der wichtigsten Funktionalitäten, die wir noch vermissen, hinzuzufügen — die Möglichkeit, bestehende To-do-Elemente zu bearbeiten. Dazu werden wir die bedingten Renderfähigkeiten von Vue — nämlich `v-if` und `v-else` — nutzen, um zwischen der bestehenden To-do-Elementansicht und einer Bearbeitungsansicht zu wechseln, in der Sie To-do-Elementetiketten aktualisieren können. Wir werden auch die Funktionalität hinzufügen, To-do-Elemente zu löschen.
- [8. Vue-Referenzen und Lebenszyklusmethoden für das Fokus-Management](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Das letzte Stück Funktionalität, das wir betrachten müssen, ist das Fokus-Management, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie man Vue-Referenzen verwendet, um dies zu verwalten – ein fortgeschrittenes Feature, das es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs zu haben oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kindkomponente.
- [9. Vue-Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Jetzt runden wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen geben, die Sie nutzen können, um Ihr Lernen weiter zu vertiefen, sowie einige andere nützliche Tipps.

## Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020, mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, können Sie eine vollständige Version des Beispiel-Svelte-App-Codes nach jedem Artikel in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) Repo finden. Für eine laufende Live-Version, siehe unseren Svelte REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [1. Einstieg in Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - : In diesem Artikel werden wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/) geben. Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools, die wir bisher gesehen haben, unterscheidet. Dann werden wir lernen, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Projektstruktur versteht und sieht, wie man sie lokal ausführt und für die Produktion baut.
- [2. Beginn unserer Svelte-To-do-Liste-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - : Jetzt, da wir ein grundlegendes Verständnis davon haben, wie die Dinge in Svelte funktionieren, können wir beginnen, unsere Beispiel-App zu erstellen: eine To-do-Liste. In diesem Artikel werden wir zunächst einen Blick auf die gewünschte Funktionalität unserer App werfen, dann werden wir eine `Todos.svelte`-Komponente erstellen und statische Markup- und Stilvorlagen an Ort und Stelle bringen, damit alles bereit ist, um die Funktionen unserer To-do-Liste-App in den nachfolgenden Artikeln zu entwickeln.
- [3. Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - : Jetzt, da wir unser Markup und unsere Stile bereit haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte-To-do-Liste-App zu entwickeln. In diesem Artikel verwenden wir Variablen und Props, um unsere App dynamisch zu machen, sodass wir Todos hinzufügen und löschen, sie als erledigt markieren und nach ihrem Status filtern können.
- [4. Komponentisieren unserer Svelte-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - : Das zentrale Ziel dieses Artikels ist es, zu schauen, wie man unsere App in handhabbare Komponenten zerlegt und Informationen zwischen ihnen austauscht. Wir werden unsere App komponentisieren und dann mehr Funktionalitäten hinzufügen, um es Benutzern zu ermöglichen, bestehende Komponenten zu aktualisieren.
- [5. Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die letzten Funktionen zur App hinzufügen und unsere App weiter komponentisieren. Wir werden lernen, wie man mit Reaktivitätsproblemen im Zusammenhang mit der Aktualisierung von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir tiefer in das Reaktivitätssystem von Svelte eintauchen. Wir werden auch einige Probleme mit der Zugänglichkeitsfokussierung lösen und mehr.
- [6. Arbeiten mit Svelte-Stores](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - : In diesem Artikel zeigen wir eine andere Möglichkeit, die Zustandsverwaltung in Svelte zu handhaben — [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositorien, die Werte halten. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.
- [7. TypeScript-Unterstützung in Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - : Wir werden jetzt lernen, wie man TypeScript in Svelte-Anwendungen nutzt. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile von TypeScript vollständig zu nutzen.
- [8. Bereitstellung und nächste Schritte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  - : In diesem abschließenden Artikel sehen wir uns an, wie Sie Ihre Anwendung bereitstellen und online stellen können, und teilen einige der Ressourcen, die Sie nutzen sollten, um Ihre Svelte-Lernreise fortzusetzen.

## Angular-Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021, mit Angular CLI (NG) 11.2.5.

- [1. Einstieg in Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - : In diesem Artikel schauen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein, und schauen uns die grundlegende Architektur von Angular an.
- [2. Beginn unserer Angular-To-do-Liste-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, unsere To-do-Liste-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von To-do-Elementen anzeigen und enthält Funktionen zum Bearbeiten, Löschen und Hinzufügen. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten bis zur Anzeige einer grundlegenden Liste von To-do-Elementen.
- [3. Stilannahme unserer Angular-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - : Jetzt, da wir unsere grundlegende Anwendungsstruktur eingerichtet haben und etwas Nützliches anzeigen, wechseln wir die Gänge und verbringen einen Artikel damit, wie Angular das Styling von Anwendungen handhabt.
- [4. Erstellen einer Elementkomponente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente zur Handhabung der einzelnen Elemente in der Liste und fügt Prüfen, Bearbeiten und Löschen von Funktionen hinzu. Das Angular-Ereignismodell wird hier behandelt.
- [5. Filtern unserer To-do-Elemente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - : Jetzt gehen wir weiter und fügen Funktionalitäten hinzu, um Benutzern zu ermöglichen, ihre To-do-Elemente zu filtern, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.
- [6. Angular-Anwendungen erstellen und weitere Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
  - : Dieser abschließende Angular-Artikel behandelt, wie man eine App für die Produktion bereit macht, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

## Welche Frameworks haben wir gewählt?

Wir veröffentlichen unsere erste Reihe von Artikeln mit Leitfäden, die sich auf fünf Frameworks konzentrieren. Vier davon sind sehr beliebt und etabliert — React/ReactDOM, Ember, Vue und Angular — während Svelte ein vergleichsweise Neuling ist, der vielversprechend ist und in letzter Zeit viel Popularität gewonnen hat.

Es gibt eine Vielzahl von Gründen dafür:

- Sie sind beliebte Wahlmöglichkeiten, die noch eine Weile bestehen werden — wie bei jedem Software-Tool ist es gut, an aktiven Entwicklungen festzuhalten, die nicht nächste Woche eingestellt werden, und die wünschenswerte Ergänzungen für Ihr Skill-Set bei der Jobsuche sein werden.
- Sie haben starke Gemeinschaften und gute Dokumentation. Es ist sehr wichtig, Hilfe beim Lernen eines komplexen Themas zu bekommen, besonders wenn Sie gerade erst anfangen.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks abzudecken. Diese Liste aktuell zu halten wäre ohnehin sehr schwierig, da ständig neue hinzukommen.
- Als Anfänger ist es ein echtes Problem, zu entscheiden, worauf man sich aus der Vielzahl der verfügbaren Optionen konzentrieren soll. Die Liste kurz zu halten ist daher hilfreich.

Wir möchten das von Anfang an klarstellen — wir haben **nicht** die Frameworks ausgewählt, auf die wir uns konzentrieren, weil wir denken, dass sie die besten sind, oder weil wir sie in irgendeiner Weise unterstützen. Wir denken einfach, dass sie in den obigen Kriterien hoch punkten.

Bitte beachten Sie, dass wir gehofft haben, bei der ersten Veröffentlichung mehr Frameworks zu haben, aber wir haben uns entschieden, die Inhalte zu veröffentlichen und dann weitere Framework-Leitfäden hinzuzufügen, anstatt es länger zu verzögern. Wenn Ihr bevorzugtes Framework in diesem Inhalt nicht vertreten ist und Sie dabei helfen möchten, dies zu ändern, können Sie sich gerne [mit uns in Verbindung setzen](/de/docs/MDN/Community/Communication_channels)!
