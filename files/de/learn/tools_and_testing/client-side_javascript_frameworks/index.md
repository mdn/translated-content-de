---
title: Verständnis von client-seitigen JavaScript-Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standardwerkzeug, daher erfordert jetzt auch die Mehrzahl der Frontend-Entwicklungsjobs Erfahrung mit Frameworks. In dieser Artikelsammlung möchten wir Ihnen einen komfortablen Ausgangspunkt bieten, um Ihnen beim Erlernen von Frameworks zu helfen.

Als angehender Frontend-Entwickler kann es schwierig sein, herauszufinden, wo man beim Erlernen von Frameworks beginnen soll - es gibt so viele zur Auswahl, ständig tauchen neue auf, sie funktionieren meist ähnlich, aber einige Dinge sind unterschiedlich, und es gibt einige spezielle Punkte, auf die man bei der Nutzung von Frameworks achten muss.

Wir beabsichtigen nicht, Ihnen erschöpfend alles über React/ReactDOM, Vue oder einige andere spezifische Frameworks beizubringen; die Dokumentationen der Framework-Teams (und andere Ressourcen) erledigen das bereits. Stattdessen möchten wir grundlegende Fragen beantworten, wie zum Beispiel:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen haben Frameworks? Wie funktionieren sie im Allgemeinen, und wie unterscheiden sich die Implementierungen dieser Funktionen in den Frameworks?
- Wie verhalten sie sich zu "Vanilla" JavaScript oder HTML?

Danach bieten wir einige Tutorials an, die die wesentlichen Punkte einiger verschiedener Framework-Optionen abdecken, um Ihnen ausreichend Kontext und Vertrautheit zu geben, um selbst tiefer einzutauchen. Wir möchten, dass Sie weitergehen und Frameworks auf eine pragmatische Weise lernen, die die grundlegenden Best Practices der Webplattform wie Barrierefreiheit nicht vergisst.

**[Jetzt anfangen mit "Einführung in client-seitige Frameworks"](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Voraussetzungen

Sie sollten wirklich zuerst die Grundlagen der Kern-Websprachen lernen, bevor Sie mit dem Lernen von client-seitigen Frameworks beginnen — [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und insbesondere [JavaScript](/de/docs/Learn/JavaScript).

Ihr Code wird dadurch reicher und professioneller und Sie können Probleme mit mehr Selbstvertrauen lösen, wenn Sie die grundlegenden Webplattformfunktionen verstehen, auf denen die Frameworks aufbauen.

## Einführungsleitfäden

- [1. Einführung in client-seitige Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Gebiet, schauen uns eine kurze Geschichte von JavaScript und Frameworks an, warum Frameworks existieren und was sie uns bieten, wie man anfängt darüber nachzudenken, ein Framework zum Lernen auszuwählen, und welche Alternativen es zu client-seitigen Frameworks gibt.
- [2. Hauptmerkmale von Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Jedes große JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zur Verarbeitung von Browsereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks erkunden und darauf eingehen, wie Frameworks tendenziell auf einer hohen Ebene funktionieren und welche Unterschiede zwischen ihnen bestehen.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023 mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react). Eine laufende Live-Version finden Sie unter <https://mdn.github.io/todo-react/>.

- [1. Erste Schritte mit React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : In diesem Artikel sagen wir Hallo zu React. Wir entdecken ein wenig über seinen Hintergrund und seine Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen und spielen mit einer einfachen Starter-App, wobei wir ein wenig darüber lernen, wie React funktioniert.
- [2. Beginn unserer React-ToDo-Liste](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Nehmen wir an, wir wurden beauftragt, ein Proof-of-Concept in React zu erstellen - eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch das Erstellen der grundlegenden `App`-Komponentenstruktur und die Stilgebung, bereit für die Definition und Interaktivität einzelner Komponenten, die wir später hinzufügen.
- [3. Komponentenbildung unserer React-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : Zu diesem Zeitpunkt ist unsere App ein Monolith. Bevor wir sie funktional machen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen einen sinnvollen Weg, unsere App in Komponenten aufzuteilen.
- [4. React-Interaktivität: Ereignisse und Status](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : Mit unserem Komponentierungsplan ausgearbeitet, ist es jetzt an der Zeit, unsere App von einer völlig statischen Benutzeroberfläche auf eine zu aktualisieren, die es uns tatsächlich erlaubt, mit ihr zu interagieren und Dinge zu ändern. In diesem Artikel werden wir dies tun, indem wir uns dabei mit Ereignissen und Status befassen.
- [5. React-Interaktivität: Bearbeiten, Filtern, Bedingte Darstellung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir den wichtigsten Funktionsbereichen in unserer ToDo-Listen-App die letzten Schliffe hinzu. Dies beinhaltet das Bearbeiten vorhandener Aufgaben und das Filtern der Aufgabenliste zwischen allen, erledigten und unerledigten Aufgaben. Wir sehen uns dabei die bedingte UI-Darstellung an.
- [6. Zugänglichkeit in React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : In unserem letzten Tutorial-Artikel konzentrieren wir uns auf Zugänglichkeit, einschließlich der Fokussierungsverwaltung in React, was die Benutzerfreundlichkeit für Tastatur- und Bildschirmlesegeräte verbessern und Verwirrung verringern kann.
- [7. React-Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen zu vertiefen.

## Ember-Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020 mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial Repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Eine laufende Live-Version finden Sie unter <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies beinhaltet auch ein paar zusätzliche Funktionen, die im Tutorial nicht behandelt werden).

- [1. Erste Schritte mit Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : In unserem ersten Ember-Artikel schauen wir uns an, wie Ember funktioniert und wofür es nützlich ist, installieren die Ember-Toolchain lokal, erstellen eine Beispiel-App und führen dann einige erste Setups durch, um sie bereit für die Entwicklung zu machen.
- [2. Ember-App-Struktur und Komponentenbildung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In diesem Artikel werden wir sofort mit der Planung der Struktur unserer TodoMVC-Ember-App fortfahren, das HTML dafür hinzufügen und dann diese HTML-Struktur in Komponenten aufteilen.
- [3. Ember-Interaktivität: Ereignisse, Klassen und Status](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : An diesem Punkt werden wir anfangen, einige Interaktivität zu unserer App hinzuzufügen, die Möglichkeit bieten, neue To-Do-Elemente hinzuzufügen und anzuzeigen. Unterwegs werden wir uns mit der Verwendung von Ereignissen in Ember befassen, Klassenkomponenten erstellen, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und einen Dienst zur Nachverfolgung des Datenstatus unserer App einrichten.
- [4. Ember-Interaktivität: Footer-Funktionalität, bedingte Darstellung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Jetzt ist es Zeit, die Footer-Funktionalität in unserer App anzugehen. Hier werden wir den Todo-Zähler aktualisieren, um die korrekte Anzahl an verbleibenden Todos anzuzeigen, und korrektes Styling auf erledigte Todos anwenden (d.h. wo das Kontrollkästchen aktiviert wurde). Wir werden auch unseren "Fertiggestellt löschen"-Button anschließen. Unterwegs lernen wir, wie man bedingte Darstellungen in unseren Vorlagen verwendet.
- [5. Routing in Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : In diesem Artikel lernen wir über Routing oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir werden es verwenden, um eine eindeutige URL für jede der drei Todo-Ansichten zu bieten — "Alle", "Aktiv" und "Erledigt".
- [6. Ember-Ressourcen und Fehlersuche](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie nutzen können, um Ihr Lernen zu vertiefen, sowie einige nützliche Tipps zur Fehlersuche und mehr.

## Vue-Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023, mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Eine laufende Live-Version finden Sie unter <https://mdn.github.io/todo-vue/>.

- [1. Erste Schritte mit Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Jetzt führen wir Vue ein, das dritte unserer Frameworks. In diesem Artikel schauen wir uns ein wenig über den Hintergrund von Vue an, lernen, wie man es installiert und ein neues Projekt erstellt, und betrachten die allgemeine Struktur des gesamten Projekts und einer einzelnen Komponente, lernen, wie man das Projekt lokal ausführt, und bereiten es vor, um unser Beispiel zu erstellen.
- [2. Erstellen unserer ersten Vue-Komponente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Nun ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir beginnen mit der Erstellung einer Komponente, die jedes Element in der Todo-Liste darstellt. Unterwegs lernen wir ein paar wichtige Konzepte wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über Props und das Speichern des Datenstatus.
- [3. Rendern einer Liste von Vue-Komponenten](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind nun bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel schauen wir uns an, wie man eine Reihe von Todo-Elementdaten zu unserer `App.vue`-Komponente hinzufügt, die wir dann mit der `v-for`-Direktive durchlaufen und innerhalb von `ToDoItem`-Komponenten anzeigen.
- [4. Ein neues Todo-Formular hinzufügen: Vue-Ereignisse, Methoden und Modelle](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : Wir haben nun Beispieldaten und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir als nächstes wirklich brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen Todo-Elemente in die App einzugeben, und dafür brauchen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell zur Steuerung der Daten. Das werden wir in diesem Artikel behandeln.
- [5. Styling von Vue-Komponenten mit CSS](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : Die Zeit ist gekommen, unsere App ein bisschen hübscher aussehen zu lassen. In diesem Artikel erkunden wir die verschiedenen Möglichkeiten, Vue-Komponenten mit CSS zu stylen.
- [6. Verwenden von Vue-Berechneten Eigenschaften](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der erledigten Todo-Elemente anzeigt, indem wir eine Funktion von Vue namens berechnete Eigenschaften verwenden. Diese arbeiten ähnlich wie Methoden, werden jedoch nur neu ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [7. Vue-konditionale Darstellung: Bearbeiten vorhandener Todos](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Nun ist es an der Zeit, eine der Hauptfunktionen hinzuzufügen, die wir noch vermissen — die Möglichkeit, bestehende Todo-Elemente zu bearbeiten. Um dies zu tun, werden wir die konditionale Darstellungsfähigkeiten von Vue nutzen, nämlich `v-if` und `v-else`, um uns zu ermöglichen, zwischen der bestehenden Todo-Element-Ansicht und einer Bearbeitungsansicht umzuschalten, in der Sie die Labels von Todo-Elementen aktualisieren können. Wir schauen uns auch an, wie man Funktionalität zum Löschen von Todo-Elementen hinzufügt.
- [8. Vue-Refs und Lebenszyklusmethoden für die Fokussierungsverwaltung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Der letzte Funktionsbereich, den wir uns ansehen werden, ist die Fokussierungsverwaltung oder, anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir schauen uns das Verwenden von Vue-Refs an, um dies zu handhaben – ein erweitertes Merkmal, das es Ihnen erlaubt, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unter dem virtuellen DOM zu haben oder direkten Zugang von einer Komponente zur internen DOM-Struktur einer untergeordneten Komponente zu haben.
- [9. Vue-Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Jetzt schließen wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen geben, die Sie nutzen können, um Ihr Lernen zu vertiefen, sowie einige weitere nützliche Tipps.

## Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020 mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Svelte-App-Codes, wie er nach jedem Artikel sein sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) Repository. Eine laufende Live-Version finden Sie in unserem Svelte REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [1. Erste Schritte mit Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - : In diesem Artikel bieten wir eine kurze Einführung in das [Svelte Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Werkzeugen unterscheidet, die wir bisher gesehen haben. Dann lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und wie wir es lokal ausführen und für die Produktion bauen können.
- [2. Start unserer Svelte-ToDo-Liste-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - : Nun, da wir ein Grundverständnis davon haben, wie die Dinge in Svelte funktionieren, können wir mit dem Aufbau unserer Beispiel-App beginnen: einer Todo-Liste. In diesem Artikel werfen wir zunächst einen Blick auf die gewünschte Funktionalität unserer App, erstellen dann eine `Todos.svelte`-Komponente und setzen statisches Markup und Stile um, damit alles bereit ist, um mit der Entwicklung unserer To-Do-Listen-App-Funktionen zu beginnen, die wir in nachfolgenden Artikeln fortsetzen werden.
- [3. Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - : Nun, da wir unser Markup und unsere Stile bereit haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte To-Do-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir Todos hinzufügen und löschen, sie als erledigt markieren und nach ihrem Status filtern können.
- [4. Komponentenbildung unserer Svelte-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - : Das zentrale Ziel dieses Artikels ist es, uns anzusehen, wie man unsere App in handhabbare Komponenten zerlegt und Informationen zwischen ihnen teilt. Wir werden unsere App komponentisieren und dann weitere Funktionen hinzufügen, damit Benutzer bestehende Komponenten aktualisieren können.
- [5. Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Zugänglichkeit](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel fügen wir den letzten Funktionen der App hinzu und komponentisieren unsere App weiter. Wir lernen, wie man mit Reaktivitätsproblemen in Bezug auf das Aktualisieren von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir ein wenig tiefer in Sveltes Reaktivitätssystem eintauchen. Wir schauen uns auch die Lösung einiger Zugänglichkeits-Schwerpunktprobleme und mehr an.
- [6. Arbeiten mit Svelte-Stores](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - : In diesem Artikel zeigen wir eine weitere Möglichkeit zum Handling des Zustandsmanagements in Svelte — [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenbanken, die Werte enthalten. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.
- [7. TypeScript-Unterstützung in Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - : Wir lernen nun, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt so konfigurieren, dass es mit TypeScript-Dateien arbeitet. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile der TypeScript-Funktionen vollständig zu nutzen.
- [8. Bereitstellung und nächste Schritte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  - : In diesem letzten Artikel schauen wir uns an, wie Sie Ihre Anwendung bereitstellen und online stellen können, und teilen auch einige der Ressourcen, die Sie als nächstes nutzen sollten, um Ihr Svelte-Lernen fortzusetzen.

## Angular-Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021 mit Angular CLI (NG) 11.2.5.

- [1. Erste Schritte mit Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - : In diesem Artikel werfen wir einen Blick darauf, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und betrachten die Grundarchitektur von Angular.
- [2. Beginn unserer Angular-ToDo-Liste-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, mit der Erstellung unserer To-Do-Listen-Anwendung in Angular zu beginnen. Die fertige Anwendung wird eine Liste von To-Do-Elementen anzeigen und umfasst Funktionen zum Bearbeiten, Löschen und Hinzufügen. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten daran, eine grundlegende Liste von To-Do-Elementen anzuzeigen.
- [3. Styling unserer Angular-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - : Jetzt, da wir unsere grundlegende Anwendungsstruktur eingerichtet haben und anfangen, etwas Nützliches anzuzeigen, wechseln wir die Schwerpunkte und widmen uns einem Artikel über das Styling von Anwendungen in Angular.
- [4. Erstellen einer Item-Komponente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie Schritt für Schritt durch die Erstellung einer Komponente, die sich mit den einzelnen Elementen in der Liste befasst, und fügt Funktionalität zum Abhaken, Bearbeiten und Löschen hinzu. Hier wird das Angular-Ereignismodel behandelt.
- [5. Filtern unserer To-Do-Elemente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - : Lassen Sie uns nun fortfahren und die Funktionalität hinzufügen, die es Benutzern ermöglicht, ihre To-Do-Elemente zu filtern, sodass sie aktive, erledigte oder alle Elemente anzeigen können.
- [6. Bauen von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
  - : Dieser letzte Angular-Artikel behandelt, wie man eine App für den Produktionsbetrieb bereitstellt, und bietet weitere Ressourcen für Sie, um Ihre Lernreise fortzusetzen.

## Welche Frameworks haben wir ausgewählt?

Wir veröffentlichen unser erstes Artikel-Set mit Leitfäden, die sich auf fünf Frameworks konzentrieren. Vier davon sind sehr beliebt und etabliert — React/ReactDOM, Ember, Vue und Angular — während Svelte ein vergleichsweise Neuling ist, der vielversprechend ist und in letzter Zeit viel Popularität gewonnen hat.

Es gibt verschiedene Gründe dafür:

- Sie sind beliebte Wahlmöglichkeiten, die eine Weile bestehen werden — wie bei jedem Software-Tool ist es gut, bei aktiv entwickelten Optionen zu bleiben, die wahrscheinlich nicht nächste Woche eingestellt werden, und die wünschenswerte Ergänzungen zu Ihrem Fähigkeitsportfolio sind, wenn Sie nach einem Job suchen.
- Sie haben starke Communities und gute Dokumentation. Es ist sehr wichtig, Hilfe beim Lernen eines komplexen Themas zu erhalten, besonders wenn Sie gerade erst anfangen.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks abzudecken. Diese Liste aktuell zu halten, wäre ohnehin sehr schwierig, da ständig neue auftauchen.
- Als Anfänger ist das Bemühen, sich zwischen der riesigen Auswahl an Möglichkeiten zu entscheiden, ein sehr reales Problem. Daher ist es hilfreich, die Liste kurz zu halten.

Wir möchten dies von Anfang an klarstellen — wir haben **nicht** die Frameworks ausgewählt, auf die wir uns konzentrieren, weil wir denken, sie sind die besten oder weil wir sie auf irgendeine Weise unterstützen. Wir glauben einfach, dass sie bei den genannten Kriterien hoch punkten.

Beachten Sie, dass wir hofften, mehr Frameworks bei der anfänglichen Veröffentlichung einschließlich zu haben, aber wir beschlossen, die Inhalte zu veröffentlichen und dann später weitere Framework-Leitfäden hinzuzufügen, anstatt sie länger zu verzögern. Wenn Ihr bevorzugtes Framework in diesem Inhalt nicht vertreten ist und Sie helfen möchten, dies zu ändern, fühlen Sie sich frei, [darüber mit uns zu diskutieren](/de/docs/MDN/Community/Communication_channels)!
