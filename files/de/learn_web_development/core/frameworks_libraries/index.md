---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern erprobte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardbestandteil ihrer Werkzeuge, sodass viele Front-End-Entwicklungsjobs mittlerweile Framework-Erfahrung erfordern. In dieser Artikelsammlung möchten wir Ihnen einen komfortablen Ausgangspunkt bieten, der Ihnen beim Erlernen von Frameworks hilft.

Als angehender Front-End-Entwickler kann es schwierig sein, herauszufinden, wo man beim Erlernen von Frameworks beginnen soll – es gibt so viele Frameworks zur Auswahl, neue erscheinen ständig, sie funktionieren meist ähnlich, aber erledigen einige Dinge anders, und es gibt spezifische Dinge, auf die man achten muss, wenn man Frameworks verwendet.

Wir wollen Ihnen nicht alles beibringen, was Sie über React/ReactDOM, Vue oder ein anderes bestimmtes Framework wissen müssen; die Dokumentationen der Framework-Teams (und andere Ressourcen) erledigen diesen Job bereits. Stattdessen wollen wir zunächst grundlegende Fragen beantworten, wie zum Beispiel:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen haben Frameworks? Wie funktionieren sie im Allgemeinen und wie unterscheiden sich die Implementierungen dieser Funktionen in den Frameworks?
- Wie beziehen sie sich auf einfaches JavaScript oder HTML?

Danach bieten wir einige Tutorials an, die die Grundlagen von React abdecken, einer beliebten Framework-Option, um Ihnen genug Kontext und Vertrautheit zu bieten, damit Sie sich selbstständig weiter vertiefen können. Wir möchten, dass Sie die Auseinandersetzung mit Frameworks auf eine pragmatische Weise fortsetzen, die die grundlegenden Best Practices der Webplattform wie Barrierefreiheit nicht vergisst.

Wir bieten auch einige Tutorials zu den Grundlagen anderer Framework-Auswahlen an, für diejenigen, die sich für eine andere Option als React entscheiden möchten.

> [!NOTE]
> Scrimbas [Libraries/Frameworks](https://scrimba.com/learn-react-c0e/~033a?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung von Frameworks im Vergleich zu Bibliotheken, eine kurze Geschichte von Bibliotheken und Frameworks im Web und einige Hintergrundinformationen speziell zu React.

## Voraussetzungen

Es ist empfehlenswert, zuerst die Grundlagen der Kern-Websprachen zu erlernen, bevor Sie versuchen, client-seitige Frameworks zu lernen - [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und besonders [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch reichhaltiger und professioneller, und Sie werden in der Lage sein, Probleme mit mehr Vertrauen zu beheben, wenn Sie die grundlegenden Webplattform-Funktionen verstehen, auf denen die Frameworks aufbauen.

## Einführende Tutorials

- [Einführung in client-seitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Gebiet, einem kurzen Rückblick auf die Geschichte von JavaScript und Frameworks, warum es Frameworks gibt und was sie uns geben, wie man anfängt, über die Auswahl eines Frameworks nachzudenken, das man lernen möchte, und welche Alternativen es zu client-seitigen Frameworks gibt.
- [Hauptmerkmale von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes wichtige JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browsereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks erkunden, einen Blick darauf werfen, wie Frameworks allgemein funktionieren, und die Unterschiede zwischen ihnen beleuchten.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023, mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

- [Erste Schritte mit React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel begrüßen wir React. Wir entdecken ein wenig Hintergrundinformationen und Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen und spielen mit einer einfachen Starter-App, um ein bisschen über die Funktionsweise von React zu lernen.
- [Beginn unserer React-ToDo-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Angenommen, wir haben die Aufgabe, ein Proof-of-Concept in React zu erstellen - eine App, die es Benutzern erlaubt, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, sowie Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch das Platzieren der grundlegenden `App`-Komponentenstruktur und -Stilrichtung, bereit für die spätere Definition und Interaktivität einzelner Komponenten.
- [Komponentisierung unserer React-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktionsfähig machen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine festen Regeln dafür, was eine Komponente ist - das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten aufzuteilen.
- [React-Interaktivität: Events und State](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Mit unserem Komponentenplan erarbeitet, ist es jetzt an der Zeit, unsere App von einer völlig statischen Benutzeroberfläche in eine zu verwandeln, die uns tatsächlich erlaubt, zu interagieren und Dinge zu ändern. In diesem Artikel gehen wir darauf ein, indem wir uns mit Ereignissen und Zuständen beschäftigen.
- [React-Interaktivität: Bearbeiten, Filtern, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Als wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir den Hauptbereichen der Funktionalität in unserer ToDo-Listen-App die letzten Schliffe hinzu. Dazu gehört, dass Sie bestehende Aufgaben bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben filtern können. Unterwegs werden wir uns mit der bedingten Benutzeroberflächendarstellung beschäftigen.
- [Zugänglichkeit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorial-Artikel konzentrieren wir uns auf die Zugänglichkeit, einschließlich der Fokusverwaltung in React, die die Benutzerfreundlichkeit verbessern und Verwirrung für sowohl nur Tastatur- als auch Bildschirmlesegerätenutzer reduzieren kann.
- [React-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie verwenden können, um Ihr Lernen weiter zu vertiefen.

## Andere Framework-Auswahlen

### Ember-Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020, mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies beinhaltet auch einige zusätzliche Funktionen, die im Tutorial nicht behandelt werden).

- [Erste Schritte mit Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige erste Einstellungen vornehmen, um sie für die Entwicklung vorzubereiten.
- [Ember-App-Struktur und Komponentisierung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : In diesem Artikel werden wir direkt mit der Planung der Struktur unserer TodoMVC-Ember-App fortfahren, das HTML dafür hinzufügen und dann diese HTML-Struktur in Komponenten aufteilen.
- [Ember-Interaktivität: Events, Klassen und Zustand](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : An diesem Punkt werden wir anfangen, unserer App einige interaktive Funktionen hinzuzufügen, die Möglichkeit bieten, neue ToDo-Items hinzuzufügen und anzuzeigen. Unterwegs werden wir uns mit der Verwendung von Ereignissen in Ember, dem Erstellen von Komponentenklassen zum Enthalten von JavaScript-Code für interaktive Funktionen und dem Einrichten eines Dienstes zur Verfolgung des Datenstatus unserer App beschäftigen.
- [Ember Interaktivität: Fußzeilenfunktionalität, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, die Fußzeilenfunktionalität in unserer App anzugehen. Hier werden wir den ToDo-Zähler aktualisieren, um die korrekte Anzahl der noch zu erledigenden ToDos anzuzeigen, und welches Styling auf erledigte ToDos korrekt angewendet wird (d.h. wo das Kontrollkästchen markiert wurde). Wir werden auch unseren "Erledigte löschen"-Button verdrahten. Unterwegs lernen wir, wie man bedingte Darstellungen in unseren Vorlagen verwendet.
- [Routing in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : In diesem Artikel lernen wir etwas über Routing oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir werden es verwenden, um eine eindeutige URL für jede der drei ToDo-Ansichten bereitzustellen – "Alle", "Aktiv" und "Erledigt".
- [Ember-Ressourcen und Fehlerbehebung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie verwenden können, um Ihr Lernen weiter zu vertiefen, sowie einige nützliche Fehlerbehebungsinformationen und andere Hinweise.

### Vue-Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023, mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [Erste Schritte mit Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : Nun führen wir Vue ein, das dritte unserer Frameworks. In diesem Artikel werden wir uns ein wenig mit dem Hintergrund von Vue befassen, lernen, wie man es installiert und ein neues Projekt erstellt, die Struktur des gesamten Projekts und einer einzelnen Komponente studieren, lernen, wie man das Projekt lokal ausführt und es für den Start unseres Beispiels vorbereitet.
- [Erstellen unserer ersten Vue-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir beginnen mit der Erstellung einer Komponente, die jedes Element aus der ToDo-Liste darstellt. Unterwegs lernen wir einige wichtige Konzepte, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über Props und das Speichern von Datenzuständen.
- [Rendern einer Liste von Vue-Komponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind nun bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns damit befassen, eine Reihe von ToDo-Daten in unsere `App.vue`-Komponente hinzuzufügen, die wir dann durchlaufen und in `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen werden.
- [Hinzufügen eines neuen ToDo-Formulars: Vue-Events, Methoden und Modelle](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : Wir haben jetzt Beispieldaten in Position und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir wirklich als nächstes brauchen, ist die Fähigkeit, unseren Nutzern zu ermöglichen, ihre eigenen ToDo-Items in die App einzugeben, und dafür brauchen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu kontrollieren. Das werden wir in diesem Artikel behandeln.
- [Styling Vue-Komponenten mit CSS](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : Die Zeit ist endlich gekommen, unsere App ein bisschen schöner aussehen zu lassen. In diesem Artikel werden wir die verschiedenen Möglichkeiten zum Stylen von Vue-Komponenten mit CSS erkunden.
- [Verwendung von berechneten Eigenschaften in Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : In diesem Artikel werden wir einen Zähler hinzufügen, der die Anzahl der erledigten ToDo-Items anzeigt, indem wir eine Funktion von Vue verwenden, die als berechnete Eigenschaften bekannt ist. Diese funktionieren ähnlich wie Methoden, werden jedoch nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [Vue bedingte Darstellung: Bearbeiten bestehender ToDos](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : Jetzt ist es an der Zeit, eine der wichtigsten Funktionen, die uns noch fehlen, hinzuzufügen - die Möglichkeit, bestehende ToDo-Items zu bearbeiten. Dazu werden wir die bedingten Darstellungsmöglichkeiten von Vue nutzen — nämlich `v-if` und `v-else` — um zwischen der bestehenden ToDo-Item-Ansicht und einer Bearbeitungsansicht umzuschalten, in der Sie ToDo-Label aktualisieren können. Außerdem werden wir uns mit der Hinzufügung der Funktion zur Löschung von ToDo-Items befassen.
- [Vue-Refs und Lifecycle-Methoden für Fokusmanagement](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Der letzte Teil der Funktionalität, den wir uns ansehen müssen, ist das Fokusmanagement oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns mit der Verwendung von Vue-Refs befassen — einem fortgeschrittenen Merkmal, das es ermöglicht, direkten Zugang zu den zugrunde liegenden DOM-Knoten unter dem virtuellen DOM zu haben, oder direkten Zugang von einer Komponente zur internen DOM-Struktur einer untergeordneten Komponente.
- [Vue-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : Nun werden wir unser Studium von Vue abschließen, indem wir Ihnen eine Liste von Ressourcen zur Verfügung stellen, die Sie verwenden können, um Ihre Lernreise fortzusetzen, sowie einige andere nützliche Tipps.

### Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020, mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Svelte-App-Codes, wie er nach jedem Artikel aussehen sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) Repository. Für eine laufende Live-Version, siehe unser Svelte REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [Erste Schritte mit Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen bisher gesehenen Frameworks und Werkzeugen unterscheidet. Dann werden wir lernen, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht und sehen, wie man es lokal ausführt und für die Produktion baut.
- [Start unserer Svelte-ToDo-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : Jetzt, da wir ein grundlegendes Verständnis davon haben, wie Dinge in Svelte funktionieren, können wir beginnen, unsere Beispiel-App zu erstellen: eine ToDo-Liste. In diesem Artikel werden wir uns zuerst die gewünschten Funktionen unserer App ansehen, dann eine `Todos.svelte`-Komponente erstellen und statisches Markup und Stilrichtungen einfügen, alles bereit zum Starten der Entwicklung unserer To-Do-Listen-App-Funktionen, auf die wir in den folgenden Artikeln eingehen werden.
- [Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : Jetzt da wir unser Markup und unsere Stile bereit haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte-ToDo-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir ToDos hinzufügen und löschen, sie als erledigt markieren und nach Status filtern können.
- [Komponentisierung unserer Svelte-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : Das zentrale Ziel dieses Artikels ist es, zu sehen, wie wir unsere App in handhabbare Komponenten aufteilen und Informationen zwischen ihnen teilen können. Wir werden unsere App komponentisieren und dann mehr Funktionalität hinzufügen, um Benutzern zu ermöglichen, bestehende Komponenten zu aktualisieren.
- [Erweitertes Svelte: Reaktivität, Lebenszyklen, Zugänglichkeit](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter komponentisieren. Wir werden lernen, wie man mit Reaktivitätsproblemen umgeht, die mit der Aktualisierung von Objekten und Arrays verbunden sind. Um häufige Fehler zu vermeiden, müssen wir ein wenig tiefer in Sveltes Reaktivitätssystem eintauchen. Wir werden auch untersuchen, wie einige Zugänglichkeits- und Fokusprobleme gelöst werden können, und mehr.
- [Arbeiten mit Svelte-Stores](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : In diesem Artikel werden wir eine weitere Möglichkeit zur Verwaltung des Zustands in Svelte zeigen — [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenspeicher, die Werte halten. Komponenten können Store abonnieren und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.
- [TypeScript-Unterstützung in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : Nun lernen wir, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es bringen kann. Dann werden wir sehen, wie man unser Projekt so konfiguriert, dass es mit TypeScript-Dateien arbeitet. Abschließend werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die TypeScript-Funktionen vollständig zu nutzen.
- [Bereitstellung und nächste Schritte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : In diesem letzten Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online stellen können, und auch einige der Ressourcen teilen, zu denen Sie gehen sollten, um Ihre Svelte-Lernreise fortzusetzen.

### Angular-Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021, mit Angular CLI (NG) 11.2.5.

- [Erste Schritte mit Angular](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : In diesem Artikel sehen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein, und werfen einen Blick auf die grundlegende Architektur von Angular.
- [Beginn unserer Angular-ToDo-Listen-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, unsere ToDo-Listen-Anwendung mit Angular zu starten. Die fertige Anwendung wird eine Liste von ToDo-Items anzeigen und Bearbeitungs-, Lösch- und Hinzufügungsfunktionen enthalten. In diesem Artikel lernen Sie Ihre Anwendungsstruktur kennen und arbeiten darauf hin, eine grundlegende Liste von ToDo-Items anzuzeigen.
- [Styling unserer Angular-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : Jetzt, da wir unsere grundlegende Anwendungsstruktur eingerichtet haben und anfangen, etwas Nützliches anzuzeigen, schlagen wir vor, die Geschwindigkeit zu drosseln und uns einen Artikel darüber anzusehen, wie Angular Styling von Anwendungen handhabt.
- [Erstellen einer Elementkomponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, die die einzelnen Items in der Liste verwaltet, und fügt Überprüfungs-, Bearbeitungs- und Löschfunktionen hinzu. Das Angular-Ereignismodell wird hier behandelt.
- [Filtern unserer ToDo-Items](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : Nun möchten wir mit der Hinzufügung einer Funktionalität fortfahren, die es Benutzern erlaubt, ihre ToDo-Items zu filtern, sodass sie aktive, abgeschlossene oder alle Items anzeigen können.
- [Erstellen von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : Dieser letzte Angular-Artikel behandelt, wie man eine App erstellt, die für die Produktion bereit ist, und bietet zusätzliche Ressourcen, damit Sie Ihre Lernreise fortsetzen können.

## Welche Frameworks haben wir ausgewählt?

Wir behandeln in unseren Tutorials fünf Frameworks – Angular, Ember, React/ReactDOM, Svelte und Vue:

- Sie sind beliebte Optionen, die noch eine Weile bestehen werden – wie bei jedem Softwaretool ist es gut, sich an aktiv entwickelte Optionen zu halten, die wahrscheinlich nicht nächste Woche eingestellt werden und die bei der Jobsuche wertvolle Ergänzungen für Ihr Können sein werden.
- Sie haben starke Gemeinschaften und gute Dokumentation. Es ist sehr wichtig, Hilfe beim Erlernen eines komplexen Themas zu erhalten, besonders wenn Sie gerade erst anfangen.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks abzudecken. Diese Liste aktuell zu halten, wäre ohnehin sehr schwierig, da ständig neue auftauchen.
- Als Anfänger ist die Entscheidung, worauf man sich aus der Vielzahl der verfügbaren Optionen konzentrieren soll, ein sehr reales Problem. Die Liste kurz zu halten, ist daher hilfreich.

Wir möchten dies vorweg sagen - wir haben **nicht** die Frameworks ausgewählt, auf die wir uns konzentrieren, weil wir denken, dass sie die besten sind oder weil wir sie in irgendeiner Weise unterstützen. Wir glauben einfach, dass sie in den oben genannten Kriterien hoch punkten.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
