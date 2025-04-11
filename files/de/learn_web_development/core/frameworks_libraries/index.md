---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung. Sie bieten Entwicklern erprobte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standardbestandteil ihres Toolsets, und viele Stellen im Front-End-Bereich erfordern inzwischen Erfahrung mit Frameworks. In dieser Artikelsammlung möchten wir Ihnen einen komfortablen Einstiegspunkt bieten, um mit dem Erlernen von Frameworks zu beginnen.

Als angehender Front-End-Entwickler kann es schwierig sein, herauszufinden, wo man beim Lernen von Frameworks anfangen soll — es gibt so viele Frameworks zur Auswahl, ständig erscheinen neue, sie funktionieren größtenteils ähnlich, aber manches machen sie unterschiedlich, und es gibt einige spezielle Dinge, auf die man beim Einsatz von Frameworks achten muss.

Unser Ziel ist nicht, Ihnen erschöpfend alles beizubringen, was Sie über React/ReactDOM, Vue oder ein anderes spezifisches Framework wissen müssen; die Dokumentationen der Framework-Teams (und andere Ressourcen) übernehmen diese Aufgabe bereits. Stattdessen möchten wir zunächst grundlegende Fragen beantworten wie:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen bieten Frameworks? Wie funktionieren sie im Allgemeinen, und wie unterscheiden sich die Implementierungen dieser Funktionen?
- Wie stehen sie im Verhältnis zu "Vanilla" JavaScript oder HTML?

Danach bieten wir einige Tutorials, die die Grundlagen von React abdecken, einem beliebten Framework, um Ihnen genügend Kontext und Vertrautheit zu bieten, damit Sie selbst tiefer ins Thema einsteigen können. Wir möchten, dass Sie Frameworks auf eine pragmatische Weise lernen, die die grundlegenden Best Practices der Webplattform, wie Barrierefreiheit, nicht vergisst.

Wir bieten auch einige Tutorials, die die Grundlagen anderer Framework-Optionen abdecken, für diejenigen, die eine andere Wahl als React treffen möchten.

## Voraussetzungen

Sie sollten wirklich zuerst die Grundlagen der Kern-Websprachen lernen, bevor Sie versuchen, clientseitige Frameworks zu erlernen — [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und insbesondere [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch reichhaltiger und professioneller, und Sie werden Probleme mit größerem Selbstvertrauen beheben können, wenn Sie die grundlegenden Merkmale der Webplattform verstehen, auf denen die Frameworks aufbauen.

## Einführende Tutorials

- [Einführung in clientseitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, betrachten eine kurze Geschichte von JavaScript und Frameworks, warum es Frameworks gibt und was sie uns bieten, wie man beginnt, ein Framework auszuwählen, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [Hauptmerkmale von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes große JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browserereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks untersuchen, wobei wir uns damit befassen, wie Frameworks auf hoher Ebene tendenziell funktionieren und welche Unterschiede es zwischen ihnen gibt.

## React-Tutorials

> [!NOTE]
> React-Tutorials wurden zuletzt im Januar 2023 mit React/ReactDOM 18.2.0 und create-react-app 5.0.1 getestet.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react-Repository](https://github.com/mdn/todo-react). Für eine live laufende Version siehe <https://mdn.github.io/todo-react/>.

- [Erste Schritte mit React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel sagen wir Hallo zu React. Wir entdecken einige Details über dessen Hintergrund und Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem Computer ein und erstellen und experimentieren mit einer einfachen Starter-App, während wir ein wenig darüber lernen, wie React funktioniert.
- [Unser React-ToDo-App beginnen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Angenommen, uns wurde die Aufgabe übertragen, ein Proof-of-Concept in React zu erstellen – eine App, die es Benutzerinnen erlaubt, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch die grundlegende `App`-Komponentenstruktur und das Styling, sodass alles bereit ist für die Definition einzelner Komponenten und deren Interaktivität, die wir später hinzufügen werden.
- [Komponentisierung unserer React-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktionsfähig machen können, müssen wir sie in handhabbare, beschreibende Komponenten aufteilen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das bleibt Ihnen überlassen! In diesem Artikel zeigen wir Ihnen eine vernünftige Möglichkeit, unsere App in Komponenten zu zerlegen.
- [React-Interaktivität: Ereignisse und State](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Mit unserem ausgearbeiteten Komponentenplan ist es jetzt an der Zeit, unsere App von einer komplett statischen UI zu einer zu aktualisieren, die tatsächlich Interaktionen und Änderungen ermöglicht. In diesem Artikel werden wir das tun, indem wir in Ereignisse und State vertiefen.
- [React-Interaktivität: Bearbeiten, Filtern, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Gegen Ende unserer React-Reise (zumindest für den Moment) werden wir den letzten Schliff an den Hauptfunktionalitäten in unserer Todo-Listen-App anbringen. Dazu gehört, dass Sie bestehende Aufgaben bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben filtern können. Wir werden auf dem Weg dorthin bedingte UI-Darstellung betrachten.
- [Barrierefreiheit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorial-Artikel konzentrieren wir uns (Wortspiel beabsichtigt) auf Barrierefreiheit, einschließlich Fokusmanagement in React, das die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Nur-Tastatur-Nutzer als auch für Screenreader-Anwender reduzieren kann.
- [React-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie verwenden können, um Ihre Lernreise fortzusetzen.

## Andere Framework-Optionen

### Ember-Tutorials

> [!NOTE]
> Ember-Tutorials wurden zuletzt im Mai 2020 mit Ember/Ember CLI Version 3.18.0 getestet.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial-Repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies schließt auch einige zusätzliche Funktionen ein, die im Tutorial nicht behandelt werden).

- [Erste Schritte mit Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige erste Einstellungen vornehmen, um sie für die Entwicklung vorzubereiten.
- [Ember-App-Struktur und Komponentierung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : In diesem Artikel beginnen wir direkt damit, die Struktur unserer TodoMVC Ember-App zu planen, das HTML dafür hinzuzufügen und dann diese HTML-Struktur in Komponenten zu zerlegen.
- [Ember-Interaktivität: Ereignisse, Klassen und Zustand](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : An diesem Punkt beginnen wir, unserer App etwas Interaktivität hinzuzufügen und die Möglichkeit zu bieten, neue Todo-Items hinzuzufügen und anzuzeigen. Auf dem Weg werden wir darauf eingehen, wie man Ereignisse in Ember verwendet, Komponentenklassen erstellt, um JavaScript-Code zu enthalten, der interaktive Funktionen steuert, und einen Dienst einrichtet, um den Datenzustand unserer App zu verfolgen.
- [Ember-Interaktivität: Footer-Funktionalität, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, die Footer-Funktionalität in unserer App anzugehen. Hier wird der Todo-Zähler so aktualisiert, dass er die korrekte Anzahl noch zu erledigender Todos anzeigt, und der Stil korrekt auf erledigte Todos angewendet (d.h. wenn das Kontrollkästchen markiert wurde). Wir verknüpfen auch unseren "Erledigte löschen"-Button. Unterwegs lernen wir, wie man bedingte Darstellung in unseren Vorlagen verwendet.
- [Routing in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : In diesem Artikel lernen wir über Routing oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir verwenden es, um eine eindeutige URL für jede der drei Todo-Ansichten bereitzustellen — "Alle", "Aktiv" und "Erledigt".
- [Ember-Ressourcen und Problemlösung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie verwenden können, um Ihr Lernen zu vertiefen, sowie einige nützliche Problemlösungen und andere Informationen.

### Vue-Tutorials

> [!NOTE]
> Vue-Tutorial wurde zuletzt im Januar 2023 mit Vue 3.2.45 getestet.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue-Repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [Erste Schritte mit Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : Nun lassen Sie uns Vue einführen, das dritte unserer Frameworks. In diesem Artikel werden wir ein wenig von Vues Hintergrund betrachten, lernen, wie man es installiert und ein neues Projekt erstellt, die allgemeine Struktur des gesamten Projekts sowie einer einzelnen Komponente studieren, sehen, wie man das Projekt lokal ausführt und es vorbereitet, um unser Beispiel zu erstellen.
- [Unsere erste Vue-Komponente erstellen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir beginnen mit der Erstellung einer Komponente, die jedes Element der Todo-Liste darstellt. Unterwegs lernen wir ein paar wichtige Konzepte wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über Props und das Speichern des Datenzustands.
- [Darstellung einer Liste von Vue-Komponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel sehen wir uns an, wie man eine Menge von Todo-Item-Daten zu unserer `App.vue`-Komponente hinzufügt, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Anweisung anzeigen werden.
- [Hinzufügen eines neuen Todo-Formulars: Vue-Ereignisse, Methoden und Modelle](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : Wir haben nun Beispieldaten an Ort und Stelle und eine Schleife, die jedes Datenstück nimmt und es innerhalb eines `ToDoItem` in unserer App rendert. Was wir wirklich als nächstes brauchen, ist die Fähigkeit, unseren Nutzern zu erlauben, ihre eigenen Todo-Items in die App einzugeben, und dafür brauchen wir ein Textfeld `<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu kontrollieren. Das werden wir in diesem Artikel behandeln.
- [Styling von Vue-Komponenten mit CSS](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : Die Zeit ist endlich gekommen, um unsere App ein wenig schöner aussehen zu lassen. In diesem Artikel werden wir die verschiedenen Möglichkeiten zum Styling von Vue-Komponenten mit CSS erforschen.
- [Verwendung von Vue-berechneten Eigenschaften](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der erledigten Todo-Items anzeigt, indem wir eine Funktion von Vue namens berechnete Eigenschaften verwenden. Diese funktionieren ähnlich wie Methoden, werden aber nur dann neu ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [Vue-bedingte Darstellung: Bearbeiten bestehender Todos](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : Jetzt ist es an der Zeit, eine der großen fehlenden Funktionen hinzuzufügen — die Möglichkeit, bestehende Todo-Items zu bearbeiten. Dazu nutzen wir die bedingten Darstellungsmöglichkeiten von Vue — nämlich `v-if` und `v-else` — um zwischen der bestehenden Todo-Ansicht und einer Bearbeitungsansicht zu wechseln, in der Sie die Labels von Todo-Items aktualisieren können. Wir werden auch das Hinzufügen von Funktionalitäten zum Löschen von Todo-Items betrachten.
- [Vue-Refs und Lebenszyklusmethoden für das Fokusmanagement](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Die letzte Funktionalität, die wir betrachten müssen, ist das Fokusmanagement, oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie man Vue-Refs verwendet, um dies zu handhaben — eine fortgeschrittene Funktion, die Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs ermöglicht oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente.
- [Vue-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : Nun schließen wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen bieten, die Sie verwenden können, um Ihre Lernreise fortzusetzen, sowie einige andere nützliche Tipps.

### Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials wurden zuletzt im August 2020 mit Svelte 3.24.1 getestet.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Svelte-App-Codes, wie er nach jedem Artikel sein sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial)-Repo. Für eine laufende Live-Version siehe unser Svelte-REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [Erste Schritte mit Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher gesehen haben. Dann lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie wir es lokal ausführen und für die Produktion bauen.
- [Unser Svelte Todo-Listen-App starten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : Nun, da wir ein grundlegendes Verständnis dafür haben, wie die Dinge in Svelte funktionieren, können wir anfangen, unsere Beispiel-App zu erstellen: eine Todo-Liste. In diesem Artikel werden wir uns zunächst die gewünschte Funktionalität unserer App ansehen, dann erstellen wir eine `Todos.svelte`-Komponente und fügen statisches Markup und Stile ein, sodass alles bereit ist, um die Funktionen unserer To-Do-Listen-App zu entwickeln, auf die wir in den nächsten Artikeln eingehen werden.
- [Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : Nun, da wir unser Markup und unsere Stile bereit haben, können wir beginnen, die erforderlichen Features für unsere Svelte To-Do-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir Todos hinzufügen und löschen, sie als erledigt markieren und nach Status filtern können.
- [Komponentierung unserer Svelte-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : Das Hauptziel dieses Artikels ist es, zu untersuchen, wie wir unsere App in handhabbare Komponenten aufteilen und Infos zwischen ihnen teilen können. Wir werden unsere App komponentisieren und dann mehr Funktionalität hinzufügen, um Benutzer das Aktualisieren bestehender Komponenten zu ermöglichen.
- [Erweiterte Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die letzten Features der App hinzufügen und unsere App weiter komponentisieren. Wir werden lernen, wie wir mit Reaktivitätsproblemen beim Aktualisieren von Objekten und Arrays umgehen. Um gängige Fallstricke zu vermeiden, müssen wir etwas tiefer in Sveltes Reaktivitätssystem eintauchen. Wir werden auch einige Probleme zur Zugänglichkeit des Fokus lösen und mehr.
- [Arbeiten mit Svelte-Stores](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : In diesem Artikel zeigen wir eine andere Möglichkeit, die Zustandsverwaltung in Svelte zu handhaben — [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenbanken, die Werte speichern. Komponenten können sich für Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.
- [TypeScript-Unterstützung in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : Wir werden nun lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es uns bringen kann. Dann werden wir sehen, wie wir unser Projekt so konfigurieren, dass es mit TypeScript-Dateien arbeitet. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die TypeScript-Funktionalitäten vollständig nutzen zu können.
- [Bereitstellung und nächste Schritte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : In diesem letzten Artikel werden wir uns ansehen, wie wir unsere Anwendung bereitstellen und online bringen, und auch einige der Ressourcen teilen, auf die Sie weitermachen sollten, um Ihre Svelte-Lernreise fortzusetzen.

### Angular-Tutorials

> [!NOTE]
> Angular-Tutorials wurden zuletzt im April 2021 mit Angular CLI (NG) 11.2.5 getestet.

- [Erste Schritte mit Angular](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : In diesem Artikel sehen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und betrachten die grundlegende Architektur von Angular.
- [Unser Angular-Todo-Listen-App starten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, unsere To-Do-Listen-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von To-Do-Items anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen beinhalten. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten bis zur Anzeige einer Grundliste von To-Do-Items.
- [Styling unserer Angular-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : Jetzt, wo wir unsere grundlegende Anwendungsstruktur eingerichtet und angefangen haben, etwas Nützliches anzuzeigen, lassen Sie uns umschalten und in einem Artikel betrachten, wie Angular den Umgang mit dem Styling von Anwendungen handhabt.
- [Erstellung einer Item-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, die für die Handhabung der einzelnen Elemente in der Liste verantwortlich ist, und das Hinzufügen von Markierungs-, Bearbeitungs- und Löschfunktionen. Das Angular-Ereignismodell wird hier behandelt.
- [Filtern unserer To-Do-Items](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : Nun lassen Sie uns fortfahren mit der Hinzufügung von Funktionen, die es den Benutzern ermöglichen, ihre To-Do-Items zu filtern, sodass sie aktive, erledigte oder alle Items anzeigen können.
- [Erstellen von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : Dieser finale Angular-Artikel behandelt, wie man eine Anwendung fertig für die Produktion erstellt und bietet weitere Ressourcen, mit denen Sie Ihre Lernreise fortsetzen können.

## Welche Frameworks haben wir gewählt?

Wir behandeln fünf Frameworks in unseren Tutorials — Angular, Ember, React/ReactDOM, Svelte und Vue:

- Sie sind beliebte Optionen, die noch eine Weile bestehen bleiben werden — wie bei jedem Software-Tool ist es gut, sich an aktiv entwickelte Optionen zu halten, die nicht nächste Woche eingestellt werden und die wertvolle Ergänzungen für Ihr Skill-Set beim Suchen nach einem Job sein werden.
- Sie haben starke Communities und gute Dokumentationen. Es ist sehr wichtig, bei der Erlernung eines komplexen Themas Hilfe zu bekommen, insbesondere wenn man gerade erst anfängt.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks abzudecken. Diese Liste auf dem neuesten Stand zu halten, wäre ohnehin sehr schwierig, da ständig neue auftauchen.
- Als Anfänger ist es ein sehr reales Problem, aus der riesigen Zahl an verfügbaren Optionen auszuwählen, worauf man sich konzentrieren soll. Daher hilft es, die Liste kurz zu halten.

Wir möchten das vorwegnehmen — wir haben **nicht** die Frameworks ausgewählt, auf die wir uns konzentrieren, weil wir denken, dass sie die besten sind, oder weil wir sie in irgendeiner Weise unterstützen. Wir glauben einfach, dass sie in den oben genannten Kriterien hoch punkten.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
