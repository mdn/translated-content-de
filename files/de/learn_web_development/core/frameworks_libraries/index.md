---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als festen Bestandteil ihrer Toolchain, sodass viele Frontend-Entwicklungsjobs nun Framework-Erfahrung erfordern. Diese Artikelsammlung bietet einen bequemen Ausgangspunkt, um Ihnen beim Einstieg in das Erlernen von Frameworks zu helfen.

Als aufstrebender Frontend-Entwickler kann es schwierig sein, herauszufinden, wo man mit dem Erlernen von Frameworks beginnen soll — es gibt so viele zur Auswahl, ständig tauchen neue auf, sie funktionieren meist ähnlich, machen aber einige Dinge anders, und es gibt einige spezifische Dinge, auf die man beim Einsatz von Frameworks achten sollte.

Wir wollen Ihnen nicht alles erschöpfend beibringen, was Sie über React/ReactDOM, Vue oder ein anderes spezifisches Framework wissen müssen; die Dokumentationen der Framework-Teams (und andere Ressourcen) erfüllen diese Aufgabe bereits. Stattdessen wollen wir grundlegende Fragen beantworten wie:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich mir stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen bieten Frameworks? Wie funktionieren sie im Allgemeinen und wie unterscheiden sich die Implementierungen dieser Funktionen in den verschiedenen Frameworks?
- Wie verhalten sie sich zu „Vanilla“ JavaScript oder HTML?

Anschließend bieten wir einige Tutorials an, die die Grundlagen von React, einer beliebten Framework-Option, abdecken, um Ihnen genügend Kontext und Vertrautheit zu bieten, um selbst tiefer einzutauchen. Wir möchten, dass Sie pragmatisch vorgehen und Frameworks erlernen, ohne dabei die grundlegenden Best Practices der Webplattform wie Barrierefreiheit zu vergessen.

Wir bieten auch einige Tutorials an, die die Grundlagen anderer Framework-Optionen behandeln, für diejenigen, die sich für eine andere Option als React entscheiden möchten.

> [!NOTE]
> Scrimbas [Bibliotheken/Frameworks](https://scrimba.com/learn-react-c0e/~033a?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung von Frameworks im Vergleich zu Bibliotheken, eine kurze Geschichte der Bibliotheken und Frameworks im Web und einige Hintergrundinformationen speziell zu React.

## Voraussetzungen

Sie sollten wirklich die Grundlagen der Kern-Websprachen erlernen, bevor Sie versuchen, clientseitige Frameworks zu erlernen — [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und besonders [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch umfassender und professioneller, und Sie werden in der Lage sein, Probleme mit mehr Vertrauen zu beheben, wenn Sie die grundlegenden Funktionen der Webplattform verstehen, auf denen die Frameworks aufbauen.

## Einführende Tutorials

- [Einführung in clientseitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, einem kurzen Blick auf die Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, über die Auswahl eines Frameworks nachzudenken, das man erlernen möchte, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [Hauptmerkmale von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes große JavaScript-Framework verfolgt einen anderen Ansatz zur Aktualisierung des DOM, zur Handhabung von Browserevents und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel untersucht die Hauptmerkmale der „großen 4“ Frameworks, den Ansatz, wie Frameworks im Allgemeinen funktionieren, und die Unterschiede zwischen ihnen.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023 mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react-Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

- [Erste Schritte mit React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel begrüßen wir React. Wir werden ein wenig über den Hintergrund und die Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit spielen, um ein wenig darüber zu lernen, wie React funktioniert.
- [Beginn unserer React ToDo-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Angenommen, wir wurden beauftragt, ein Proof-of-Concept in React zu erstellen — eine App, die Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch die Basisstruktur und das Styling der `App`-Komponente, die später für die Definition und Interaktivität einzelner Komponenten bereitgestellt werden.
- [Komponentisierung unserer React-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktionstüchtig machen können, müssen wir sie in verwaltbare, beschreibende Komponenten zerlegen. React hat keine harten Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Art, unsere App in Komponenten zu unterteilen.
- [React-Interaktivität: Events und Zustand](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Mit unserem Komponentplan können wir nun beginnen, unsere App von einer komplett statischen Benutzeroberfläche zu einer, die tatsächlich erlaubt, interaktiv Dinge zu ändern, zu aktualisieren. In diesem Artikel werden wir dies tun, indem wir uns mit Ereignissen und Zuständen auseinandersetzen.
- [React-Interaktivität: Bearbeiten, Filtern, Bedingtes Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Da wir uns dem Ende unserer React-Reise (zumindest vorerst) nähern, fügen wir den Hauptfunktionalitäten in unserer ToDo-Listen-App den letzten Schliff hinzu. Dies umfasst die Möglichkeit, bestehende Aufgaben zu bearbeiten und die Aufgabenliste zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Dabei betrachten wir das bedingte UI-Rendering.
- [Barrierefreiheit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorial-Artikel konzentrieren wir uns auf Barrierefreiheit, einschließlich des Fokusmanagements in React, was für eine verbesserte Benutzerfreundlichkeit und weniger Verwirrung sowohl für Keyboard-Only- als auch Screenreader-Nutzer sorgen kann.
- [React-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie für weiterführendes Lernen verwenden können.

## Weitere Framework-Optionen

> [!NOTE]
> Dieser Abschnitt von MDN wird nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

### Ember-Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020 mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial-Repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies beinhaltet auch einige zusätzliche Funktionen, die im Tutorial nicht behandelt werden).

- [Erste Schritte mit Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige Anfangseinstellungen vornehmen, um sie für die Entwicklung bereitzumachen.
- [Ember-App-Struktur und Komponentisierung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : In diesem Artikel werden wir direkt mit der Planung der Struktur unserer TodoMVC Ember-App beginnen, das HTML hinzufügen und die HTML-Struktur in Komponenten aufteilen.
- [Ember-Interaktivität: Events, Klassen und Zustand](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : An diesem Punkt werden wir anfangen, unserer App einige Interaktivität hinzuzufügen, um die Fähigkeit bereitzustellen, neue Todo-Items hinzuzufügen und anzuzeigen. Dabei werden wir uns mit der Verwendung von Events in Ember befassen, Komponentenklassen erstellen, die JavaScript-Code zur Steuerung interaktiver Funktionen enthalten, und einen Service einrichten, um den Datenzustand unserer App zu verfolgen.
- [Ember-Interaktivität: Footer-Funktionalität, bedingtes Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, die Footer-Funktionalität in unserer App anzugehen. Hier werden wir den Todo-Zähler so aktualisieren, dass er die korrekte Anzahl noch zu erledigender Todos anzeigt und das Styling für erledigte Todos korrekt anwenden (d.h. wo das Kontrollkästchen aktiviert wurde). Wir werden auch unseren "Fertiggestellte löschen"-Button anschließen. Dabei lernen wir die Verwendung von bedingtem Rendering in unseren Vorlagen.
- [Routing in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : In diesem Artikel lernen wir das Routing oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir werden es verwenden, um eine eindeutige URL für jede der drei Todo-Ansichten bereitzustellen - "Alle", "Aktiv" und "Erledigt".
- [Ember-Ressourcen und Fehlersuche](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie für weiterführendes Lernen verwenden können, sowie einige nützliche Informationen zur Fehlersuche und weitere Hinweise.

### Vue-Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023 mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue-Repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [Erste Schritte mit Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : Lassen Sie uns nun Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel werden wir uns ein wenig über den Hintergrund von Vue informieren, lernen, wie man es installiert und ein neues Projekt erstellt, die hochrangige Struktur des gesamten Projekts und einer einzelnen Komponente studieren, sehen, wie man das Projekt lokal ausführt und es auf die Erstellung unseres Beispiels vorbereitet.
- [Erstellen unserer ersten Vue-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : Es ist nun an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen - wir beginnen mit der Erstellung einer Komponente zur Darstellung jedes Elements in der ToDo-Liste. Dabei lernen wir einige wichtige Konzepte wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten über Props und das Speichern des Datenzustands.
- [Darstellung einer Liste von Vue-Komponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine voll funktionsfähige Komponente; wir sind nun bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns ansehen, wie wir eine Reihe von Todo-Item-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann mithilfe der `v-for`-Direktive durchlaufen und innerhalb von `ToDoItem`-Komponenten anzeigen.
- [Hinzufügen eines neuen Todo-Formulars: Vue-Events, Methoden und Modelle](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : Wir haben jetzt Beispieldaten und eine Schleife, die jeden Datenpunkt nimmt und ihn innerhalb eines `ToDoItem` in unserer App darstellt. Was wir wirklich als Nächstes brauchen, ist die Fähigkeit, unseren Benutzern zu ermöglichen, ihre eigenen Aufgaben in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das bei der Datenübermittlung ausgelöst wird, eine Methode, die bei der Übermittlung die Daten hinzufügt und die Liste neu rendert, sowie ein Modell, um die Daten zu steuern. Dies werden wir in diesem Artikel behandeln.
- [Styling von Vue-Komponenten mit CSS](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : Endlich ist es an der Zeit, unsere App etwas schöner zu gestalten. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stylen.
- [Verwendung von Vue berechneten Eigenschaften](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen Todo-Items anzeigt, indem wir eine Funktion von Vue namens berechnete Eigenschaften verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [Vue bedingtes Rendering: Bearbeiten bestehender Todos](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : Nun ist es an der Zeit, einen der Hauptteile der Funktionalität hinzuzufügen, die uns noch fehlen - die Fähigkeit, vorhandene Todo-Artikel zu bearbeiten. Dafür nutzen wir Vue's bedingtes Rendering - insbesondere `v-if` und `v-else` - um zwischen der bestehenden Todo-Item-Ansicht und einer Bearbeitungsansicht zu wechseln, in der Sie die Labels der Todo-Items aktualisieren können. Wir betrachten auch das Hinzufügen von Funktionen zum Löschen von Todo-Items.
- [Vue-Refs und Lifecycle-Methoden für Fokusmanagement](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Der letzte Teil der Funktionalität, den wir uns anschauen werden, ist das Fokusmanagement, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie wir Vue-Refs verwenden, um dies zu handhaben - eine fortgeschrittene Funktion, die es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs zu haben oder direkten Zugriff aus einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente zu erhalten.
- [Vue-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : Nun schließen wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen zur Verfügung stellen, die Sie verwenden können, um Ihr Lernen weiter zu vertiefen, plus einige weitere nützliche Tipps.

### Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020 mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Svelte-Beispiel-App-Codes, wie er nach jedem Artikel aussehen sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial)-Repo. Für eine laufende Live-Version sehen Sie sich unser Svelte-REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2> an.

- [Erste Schritte mit Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : In diesem Artikel bieten wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher gesehen haben. Dann lernen wir, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht und sieht, wie man es lokal ausführt und für die Produktion baut.
- [Anfang unserer Svelte To-Do-Listen-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : Jetzt, da wir ein grundlegendes Verständnis dafür haben, wie Svelte funktioniert, können wir beginnen, unsere Beispiel-App zu erstellen: eine To-Do-Liste. In diesem Artikel schauen wir uns zuerst die gewünschten Funktionalitäten unserer App an, dann erstellen wir eine `Todos.svelte`-Komponente und setzen statisches Markup und Stile in Gang, damit alles bereit ist, um mit der Entwicklung der Funktionen unserer To-Do-Listen-App zu beginnen, was wir in den folgenden Artikeln tun werden.
- [Dynamisches Verhalten in Svelte: arbeiten mit Variablen und Props](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : Jetzt, da wir unser Markup und die Stile bereit haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte To-Do-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir Todos hinzufügen und löschen, sie als abgeschlossen markieren und nach ihrem Status filtern können.
- [Komponentisierung unserer Svelte-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : Das zentrale Ziel dieses Artikels ist es, zu erfahren, wie wir unsere App in verwaltbare Komponenten aufteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App komponentisieren und dann mehr Funktionalität hinzufügen, damit Benutzer vorhandene Komponenten aktualisieren können.
- [Fortgeschrittenes Svelte: Reaktivität, Lifecycle, Barrierefreiheit](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die letzten Funktionen unserer App hinzufügen und sie weiter komponentisieren. Wir werden lernen, wie man mit Reaktivitätsproblemen im Zusammenhang mit der Aktualisierung von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir tiefer in das Reaktivitätssystem von Svelte eintauchen. Wir werden uns auch mit der Lösung einiger Probleme mit dem Fokusmanagement beschäftigen, und mehr.
- [Arbeiten mit Svelte-Stores](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : In diesem Artikel zeigen wir eine andere Möglichkeit, das Zustandsmanagement in Svelte zu handhaben — [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositorys, die Werte halten. Komponenten können sich bei Stores anmelden und werden benachrichtigt, wenn sich deren Werte ändern.
- [TypeScript-Unterstützung in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : Wir werden nun lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir uns an, wie wir unser Projekt so konfigurieren, dass es mit TypeScript-Dateien arbeitet. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile von TypeScript-Funktionen vollständig zu nutzen.
- [Bereitstellung und nächste Schritte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : In diesem letzten Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online bringen können, und auch einige der Ressourcen teilen, die Sie besuchen sollten, um Ihre Svelte-Lernreise fortzusetzen.

### Angular-Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021 mit Angular CLI (NG) 11.2.5.

- [Erste Schritte mit Angular](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : In diesem Artikel betrachten wir, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein, und betrachten die grundlegende Architektur von Angular.
- [Beginn unserer Angular To-Do-Listen-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, unsere To-Do-Listen-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von To-Do-Items anzeigen und Bearbeitungs-, Lösch- und Hinzufügungsfunktionen enthalten. In diesem Artikel werden Sie Ihre Anwendungsstruktur kennenlernen und bis zur Anzeige einer grundlegenden Liste von To-Do-Items arbeiten.
- [Styling unserer Angular-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : Jetzt, da wir unsere grundlegende Anwendungsstruktur eingerichtet und mit der Anzeige von nützlichen Informationen begonnen haben, wechseln wir die Gänge und verbringen einen Artikel damit, zu betrachten, wie Angular das Styling von Anwendungen handhabt.
- [Erstellen einer Item-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente zur Handhabung der einzelnen Items in der Liste und fügt Überprüfungs-, Bearbeitungs- und Löschfunktionen hinzu. Das Angular-Ereignismodell wird hier behandelt.
- [Filtern unserer To-Do-Items](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : Lassen Sie uns nun Funktionen hinzufügen, die es Benutzern ermöglichen, ihre To-Do-Items zu filtern, damit sie aktive, erledigte oder alle Items anzeigen können.
- [Erstellen von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : Dieser letzte Angular-Artikel behandelt, wie man eine App bereit für die Produktion baut, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

## Welche Frameworks haben wir ausgewählt?

Wir decken in unseren Tutorials fünf Frameworks ab — Angular, Ember, React/ReactDOM, Svelte und Vue:

- Sie sind beliebte Optionen, die eine Weile bestehen bleiben werden — wie bei jedem Software-Tool ist es gut, sich an aktiv entwickelte Optionen zu halten, die nicht nächste Woche eingestellt werden und die bei der Jobsuche wünschenswerte Ergänzungen zu Ihrem Skillset sind.
- Sie haben starke Gemeinschaften und gute Dokumentation. Es ist sehr wichtig, in der Lage zu sein, Hilfe beim Erlernen eines komplexen Themas zu erhalten, insbesondere wenn Sie gerade erst anfangen.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks abzudecken. Diese Liste wäre ohnehin schwierig aktuell zu halten, da ständig neue erscheinen.
- Für Anfänger ist es ein sehr reales Problem, sich aus der Fülle an verfügbaren Optionen richtig zu entscheiden. Die Liste kurz zu halten, ist daher hilfreich.

Wir möchten dies gleich zu Beginn sagen — wir haben **nicht** die Frameworks ausgewählt, auf die wir uns konzentrieren, weil wir denken, dass sie die besten sind, oder weil wir sie in irgendeiner Weise unterstützen. Wir denken nur, dass sie in den oben genannten Kriterien hoch punkten.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
