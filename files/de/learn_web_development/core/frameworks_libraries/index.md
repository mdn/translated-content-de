---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung. Sie bieten Entwicklern erprobte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardbestandteil ihrer Werkzeuge, weshalb inzwischen viele Frontend-Entwicklungsjobs Erfahrung mit Frameworks voraussetzen. In dieser Artikelsammlung möchten wir Ihnen einen bequemen Ausgangspunkt bieten, um Ihnen den Einstieg in das Lernen von Frameworks zu erleichtern.

Als angehender Frontend-Entwickler kann es schwierig sein, herauszufinden, wo man beim Lernen von Frameworks anfangen soll — es gibt so viele Frameworks zur Auswahl, ständig erscheinen neue, sie funktionieren größtenteils ähnlich, erledigen aber einige Dinge unterschiedlich, und es gibt einige spezielle Aspekte, auf die man beim Einsatz von Frameworks achten sollte.

Wir haben nicht das Ziel, Ihnen alles beizubringen, was Sie über React/ReactDOM, Vue oder ein anderes spezifisches Framework wissen müssen; die Dokumentationen der Framework-Teams (und andere Ressourcen) erfüllen diese Aufgabe bereits. Stattdessen möchten wir zuerst grundlegende Fragen beantworten wie:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen bieten Frameworks? Wie funktionieren sie im Allgemeinen und wie unterscheiden sich die Implementierungen dieser Funktionen in den Frameworks?
- Wie verhalten sie sich zu "vanilla" JavaScript oder HTML?

Anschließend bieten wir einige Tutorials, die die wesentlichen Aspekte von React, einer populären Framework-Wahl, abdecken, um Ihnen genügend Kontext und Vertrautheit zu bieten, um selbst tiefer einzusteigen. Wir möchten, dass Sie Pragmatik bei der Nutzung von Frameworks üben, ohne die grundlegenden bewährten Praktiken der Webplattform, wie z. B. Barrierefreiheit, außer Acht zu lassen.

Wir bieten auch einige Tutorials, die die Grundlagen anderer Framework-Wahlen abdecken, für diejenigen, die sich gegen React entscheiden möchten.

## Voraussetzungen

Sie sollten wirklich zuerst die Grundlagen der Kern-Websprachen lernen, bevor Sie versuchen, clientseitige Frameworks zu erlernen — [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und besonders [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch reicher und professioneller, und Sie werden Probleme sicherer lösen können, wenn Sie die grundlegenden Webplattform-Funktionen verstehen, auf denen die Frameworks aufbauen.

## Einführende Tutorials

- [Einführung in clientseitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unser Studium der Frameworks mit einem allgemeinen Überblick über das Gebiet und betrachten eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, darüber nachzudenken, welches Framework man lernen möchte, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [Hauptfunktionen von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes große JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browserereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel erkundet die Hauptfunktionen "der großen 4" Frameworks, betrachtet, wie Frameworks im Allgemeinen arbeiten und die Unterschiede zwischen ihnen.

## React Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023, mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine abgeschlossene Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version, siehe <https://mdn.github.io/todo-react/>.

- [Einstieg in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel begrüßen wir React. Wir entdecken ein wenig Details über seinen Hintergrund und seine Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen sowie spielen mit einer einfachen Starter-App, lernen dabei ein bisschen über die Arbeitsweise von React.
- [Beginn unserer React ToDo App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Nehmen wir an, wir haben den Auftrag, ein Proof-of-Concept in React zu erstellen – eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als abgeschlossen zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch das Erstellen der grundlegenden `App`-Komponentenstruktur und -Styling, bereit für die Definition und Interaktivität einzelner Komponenten, die wir später hinzufügen werden.
- [Komponentisieren unserer React-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktional machen können, müssen wir sie in überschaubare, beschreibende Komponenten aufteilen. React hat keine festen Regeln dafür, was eine Komponente ist oder nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen einen sinnvollen Weg, um unsere App in Komponenten aufzuteilen.
- [React-Interaktivität: Ereignisse und Zustände](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Mit unserem ausgereiften Komponentenplan ist es nun an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktion und Änderungen ermöglicht. In diesem Artikel gehen wir darauf ein und befassen uns dabei mit Ereignissen und Zuständen.
- [React-Interaktivität: Bearbeitung, Filterung, bedingte Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Da wir uns jetzt dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir die letzten Feinheiten der Hauptfunktionalitäten unserer ToDo-Listen-App hinzu. Dies umfasst das Bearbeiten von bestehenden Aufgaben und das Filtern der Aufgabenliste zwischen allen, abgeschlossenen und unvollständigen Aufgaben. Wir werden uns dabei das bedingte UI-Rendering ansehen.
- [Zugänglichkeit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorialartikel konzentrieren wir uns auf (pun intended) Barrierefreiheit, einschließlich des Fokusmanagements in React, das die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Tastaturnutzer als auch für Bildschirmleser-Benutzer verringern kann.
- [React-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen zu vertiefen.

## Andere Framework-Wahlen

### Ember Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020, mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine abgeschlossene Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial Repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies umfasst auch einige zusätzliche Funktionen, die im Tutorial nicht behandelt werden).

- [Einstieg in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : In unserem ersten Ember-Artikel werden wir sehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige erste Schritte unternehmen, um sie für die Entwicklung vorzubereiten.
- [Struktur und Komponentisierung von Ember-Apps](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : In diesem Artikel planen wir die Struktur unserer TodoMVC Ember-App, fügen das HTML dafür hinzu und zerlegen dann diese HTML-Struktur in Komponenten.
- [Ember-Interaktivität: Ereignisse, Klassen und Zustände](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : An diesem Punkt beginnen wir, unserer App Interaktivität hinzuzufügen, indem wir die Fähigkeit hinzufügen, neue Todo-Items hinzuzufügen und anzuzeigen. Wir schauen uns an, wie man Ereignisse in Ember verwendet, Komponentenklassen erstellt, um JavaScript-Code zu enthalten, der interaktive Funktionen steuert, und einen Dienst einrichtet, um den Datenzustand unserer App zu verfolgen.
- [Ember-Interaktivität: Fußzeilenfunktionalität, bedingte Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, die Fußzeilenfunktionalität in unserer App anzugehen. Wir bringen den Todo-Zähler dazu, die korrekte Anzahl verbleibender Todos anzuzeigen und die Stilisierung der abgeschlossenen Todos korrekt anzuwenden (d.h. wo das Kontrollkästchen aktiviert wurde). Wir verbinden auch unseren "Abgeschlossene löschen"-Button. Unterwegs lernen wir, wie man bedingtes Rendering in unseren Vorlagen verwendet.
- [Routing in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : In diesem Artikel lernen wir über Routing oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir verwenden es, um eine eindeutige URL für jede der drei Todo-Ansichten bereitzustellen — "Alle", "Aktiv" und "Abgeschlossen".
- [Ember-Ressourcen und Fehlersuche](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie verwenden können, um Ihr Lernen zu vertiefen, sowie einige nützliche Fehlerbehebungs- und andere Informationen.

### Vue Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023, mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine abgeschlossene Version des Beispiel-Vue-App-Codes in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [Einstieg in Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : Jetzt stellen wir Vue vor, das dritte unserer Frameworks. In diesem Artikel schauen wir uns ein wenig den Hintergrund von Vue an, lernen, wie man es installiert und ein neues Projekt erstellt, studieren die Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie man das Projekt lokal ausführt und es vorbereitet, um unser Beispiel zu erstellen.
- [Erstellen unserer ersten Vue-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : Nun ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen damit, eine Komponente zu erstellen, um jedes Element in der Todo-Liste darzustellen. Unterwegs lernen wir einige wichtige Konzepte kennen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über Props und das Speichern des Datenstatus.
- [Rendering einer Liste von Vue-Komponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel schauen wir uns an, wie man eine Reihe von Todo-Item-Daten zu unserer `App.vue`-Komponente hinzufügt, die wir dann durchlaufen und in `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen.
- [Hinzufügen eines neuen Todo-Formulars: Vue-Ereignisse, Methoden und Modelle](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : Wir haben jetzt Beispiel-{{2, und eine Schleife, die jedes Stück Daten nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir wirklich als nächstes brauchen, ist die Fähigkeit, unseren Benutzern zu erlauben, ihre eigenen Todo-Items in die App einzugeben, und dafür brauchen wir ein Text-`<input>`, ein Ereignis, das bei der Datenübergabe ausgelöst wird, eine Methode, die bei der Übergabe ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell zur Steuerung der Daten. Dies werden wir in diesem Artikel behandeln.
- [Styling von Vue-Komponenten mit CSS](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : Es ist endlich an der Zeit, unsere App etwas schöner aussehen zu lassen. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stylen.
- [Verwendung von Vue-berechneten Eigenschaften](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen Todo-Items anzeigt, unter Verwendung einer Funktion von Vue, die als berechnete Eigenschaften bekannt ist. Diese funktionieren ähnlich wie Methoden, werden aber nur dann neu ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [Vue-bedingtes Rendering: Bearbeiten bestehender Todos](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : Nun ist es Zeit, einen der Hauptpunkte der Funktionalität hinzuzufügen, der uns noch fehlt – die Fähigkeit, bestehende Todo-Items zu bearbeiten. Um dies zu tun, werden wir die bedingte Rendering-Funktionalität von Vue nutzen – nämlich `v-if` und `v-else` – um zwischen der bestehenden Todo-Item-Ansicht und einer Bearbeitungsansicht wechseln zu können, in der Sie die Todo-Item-Labels aktualisieren können. Wir werden auch schauen, wie wir die Funktionalität zum Löschen von Todo-Items hinzufügen.
- [Vue-Refs und Lebenszyklusmethoden für die Fokusverwaltung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Der letzte Punkt der Funktionalität, den wir uns ansehen werden, ist das Fokusmanagement, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie Vue-Refs verwendet werden, um dies zu handhaben – eine erweiterte Funktion, die Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOM oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente ermöglicht.
- [Vue-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : Nun schließen wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen geben, die Sie nutzen können, um Ihr Lernen zu vertiefen, und einige andere nützliche Tipps teilen.

### Svelte Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020, mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, können Sie eine abgeschlossene Version des Beispiel-Svelte-App-Codes, wie er nach jedem Artikel aussehen sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) Repo finden. Für eine laufende Live-Version siehe unser Svelte REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [Einstieg in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den restlichen Frameworks und Werkzeugen, die wir bisher gesehen haben, unterscheidet. Dann werden wir lernen, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie wir es lokal ausführen und für die Produktion bauen können.
- [Start unserer Svelte ToDo Listen-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : Nachdem wir ein grundlegendes Verständnis dafür haben, wie die Dinge in Svelte funktionieren, können wir beginnen, unsere Beispiel-App zu erstellen: eine ToDo-Liste. In diesem Artikel werden wir uns zunächst die gewünschte Funktionalität unserer App ansehen, dann eine `Todos.svelte`-Komponente erstellen und statische Markup und Stile an Ort und Stelle setzen, so dass alles bereit ist, um die Funktionen unserer ToDo Listen-App zu entwickeln, die wir in den kommenden Artikeln behandeln werden.
- [Dynamisches Verhalten in Svelte: Mit Variablen und Props arbeiten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : Nun, da wir unser Markup und unsere Stile bereit haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte ToDo Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, indem wir es ermöglichen, Todos hinzuzufügen und zu löschen, sie als abgeschlossen zu markieren und sie nach Status zu filtern.
- [Komponentisierung unserer Svelte-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : Das zentrale Ziel dieses Artikels ist es, zu untersuchen, wie wir unsere App in verwaltbare Komponenten aufteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App komponentisieren und dann mehr Funktionalität hinzufügen, um den Benutzern das Aktualisieren bestehender Komponenten zu ermöglichen.
- [Erweitertes Svelte: Reaktivität, Lebenszyklus, Zugänglichkeit](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel fügen wir die letzten Funktionen der App hinzu und komponentisieren unsere App weiter. Wir lernen, wie man mit Reaktivitätsproblemen umgeht, die mit dem Aktualisieren von Objekten und Arrays verbunden sind. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in Sveltes Reaktivitätssystem eintauchen. Wir werden uns auch mit der Lösung einiger Zugänglichkeitsfokusprobleme befassen und mehr.
- [Arbeiten mit Svelte-Stores](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : In diesem Artikel zeigen wir eine andere Möglichkeit, das Zustandsmanagement in Svelte zu handhaben — [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositorien, die Werte halten. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.
- [TypeScript-Unterstützung in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : Wir werden nun lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die TypeScript-Funktionen voll auszunutzen.
- [Bereitstellung und nächste Schritte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : In diesem abschließenden Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online gehen können, und auch einige der Ressourcen teilen, die Sie weiterverfolgen sollten, um Ihre Svelte-Lernreise fortzusetzen.

### Angular Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021, mit Angular CLI (NG) 11.2.5.

- [Einstieg in Angular](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : In diesem Artikel schauen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und betrachten die grundlegende Architektur von Angular.
- [Beginn unserer Angular ToDo Listen-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, unsere ToDo Listen-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von ToDo-Elementen anzeigen und enthält Funktionen zum Bearbeiten, Löschen und Hinzufügen. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten darauf hin, eine grundlegende Liste von ToDo-Items anzuzeigen.
- [Styling unserer Angular-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : Jetzt, da wir die grundlegende Anwendungsstruktur eingerichtet und begonnen haben, etwas Nützliches anzuzeigen, wechseln wir den Gang und verbringen einen Artikel damit, uns anzusehen, wie Angular das Styling von Anwendungen handhabt.
- [Erstellung einer Elementkomponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, um die einzelnen Elemente in der Liste zu handhaben, sowie um Funktionen zum Überprüfen, Bearbeiten und Löschen hinzuzufügen. Das Angular-Ereignismodell wird hier behandelt.
- [Filtern unserer To-Do-Items](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : Jetzt gehen wir weiter zur Umsetzung der Funktionalität, die es Benutzern ermöglicht, ihre To-Do-Items zu filtern, sodass sie aktive, abgeschlossene oder alle Elemente ansehen können.
- [Erstellung von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : Dieser abschließende Angular-Artikel behandelt, wie man eine App bereit für die Produktion erstellt, und bietet weitere Ressourcen, damit Sie Ihre Lernreise fortsetzen können.

## Welche Frameworks haben wir ausgewählt?

Wir behandeln in unseren Tutorials fünf Frameworks — Angular, Ember, React/ReactDOM, Svelte und Vue:

- Sie sind beliebte Optionen, die eine Weile bestehen bleiben werden – wie bei jedem Software-Tool ist es gut, sich an aktiv entwickelte Optionen zu halten, die wahrscheinlich nicht nächste Woche eingestellt werden, und die bei der Jobsuche wünschenswerte Ergänzungen Ihres Fähigkeitssets sind.
- Sie haben starke Communities und gute Dokumentation. Es ist sehr wichtig, Hilfe beim Lernen eines komplexen Themas zu erhalten, insbesondere wenn Sie gerade anfangen.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks abzudecken. Diese Liste wäre ohnehin sehr schwierig auf dem neuesten Stand zu halten, da ständig neue erscheinen.
- Als Anfänger ist es ein wirkliches Problem, zu versuchen, aus der riesigen Anzahl an verfügbaren Auswahlmöglichkeiten zu wählen. Die Liste kurz zu halten, ist daher hilfreich.

Wir möchten dies im Voraus sagen — wir haben die Frameworks, auf die wir uns konzentrieren, **nicht** gewählt, weil wir denken, dass sie die besten sind oder weil wir sie auf irgendeine Weise unterstützen. Wir glauben einfach, dass sie auf den oben genannten Kriterien hoch punkten.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
