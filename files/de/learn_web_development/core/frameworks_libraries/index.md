---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern erprobte Werkzeuge zum Aufbau skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standardbestandteil ihres Toolings, sodass viele Frontend-Entwicklerstellen nun Erfahrung mit Frameworks voraussetzen. Diese Artikelreihe bietet einen komfortablen Ausgangspunkt, um Ihnen den Einstieg in das Erlernen von Frameworks zu erleichtern.

Als angehender Frontend-Entwickler kann es schwierig sein, herauszufinden, wo man beim Erlernen von Frameworks beginnen soll – es gibt so viele Frameworks zur Auswahl, ständig erscheinen neue, sie funktionieren größtenteils ähnlich, machen aber einige Dinge anders, und es gibt einige spezifische Dinge, auf die man beim Einsatz von Frameworks achten sollte.

Es ist nicht unser Ziel, Ihnen alles beizubringen, was Sie über React/ReactDOM, Vue oder ein anderes spezifisches Framework wissen müssen; die Dokumentation der Framework-Teams und andere Ressourcen erledigen diesen Job bereits. Stattdessen möchten wir zu grundlegenderen Fragen zurückkehren und diese zuerst beantworten, wie:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich mir stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen haben Frameworks? Wie funktionieren sie im Allgemeinen, und wie unterscheiden sich die Implementierungen dieser Funktionen in verschiedenen Frameworks?
- Wie stehen sie im Verhältnis zu "vanilla" JavaScript oder HTML?

Anschließend bieten wir einige Tutorials zu den wesentlichen Aspekten von React, einer beliebten Wahl für Frameworks, um Ihnen genügend Kontext und Vertrautheit zu bieten, damit Sie selbst tiefer in die Materie einsteigen können. Wir möchten, dass Sie einen pragmatischen Ansatz zum Lernen von Frameworks verfolgen, der die grundlegenden Best Practices der Webplattform wie Zugänglichkeit nicht vergisst.

Wir stellen auch einige Tutorials zu den Grundlagen anderer Framework-Optionen bereit, für diejenigen, die eine andere Wahl als React treffen möchten.

> [!NOTE]
> Scrimbas [Libraries/Frameworks](https://scrimba.com/learn-react-c0e/~033a?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung von Frameworks im Vergleich zu Bibliotheken, eine kurze Geschichte der Bibliotheken und Frameworks im Web und einige Hintergrundinformationen speziell zu React.

## Voraussetzungen

Sie sollten wirklich die Grundlagen der Kern-Websprachen lernen, bevor Sie versuchen, clientseitige Frameworks zu erlernen – [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und insbesondere [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch reicher und professioneller, und Sie werden Probleme mit mehr Selbstvertrauen beheben können, wenn Sie die grundlegenden Funktionen der Webplattform verstehen, auf denen die Frameworks aufbauen.

## Einführende Tutorials

- [Einführung in clientseitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über den Bereich, betrachten eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, darüber nachzudenken, welches Framework man lernen sollte, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [Hauptfunktionen von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes große JavaScript-Framework hat einen anderen Ansatz zum Aktualisieren des DOM, zum Umgang mit Browserevents und zur Bereitstellung eines angenehmen Entwicklererlebnisses. Dieser Artikel untersucht die Hauptfunktionen der "großen 4" Frameworks, beleuchtet, wie Frameworks tendenziell aus einer höheren Perspektive arbeiten und die Unterschiede zwischen ihnen.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023, mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, können Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react repository](https://github.com/mdn/todo-react) finden. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

- [Erste Schritte mit React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel werden wir React kennenlernen. Wir entdecken ein wenig über seinen Hintergrund und seine Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen und spielen mit einer einfachen Starter-App, um ein bisschen darüber zu lernen, wie React funktioniert.
- [Beginn unserer React ToDo App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Nehmen wir an, wir wurden damit beauftragt, ein Konzeptnachweis in React zu erstellen – eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch das Erstellen der grundlegenden `App`-Komponentenstruktur und das Bereitstellen von Styling, bereit für die Definition und Interaktivität einzelner Komponenten, die wir später hinzufügen werden.
- [Komponenten in unserer React-App erstellen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : Zu diesem Zeitpunkt ist unsere App ein Monolith. Bevor wir sie funktional machen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine harten Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen einen vernünftigen Weg, unsere App in Komponenten aufzuteilen.
- [Reaktivität in React: Events und State](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Mit unserem Komponentenplan können wir jetzt anfangen, unsere App von einer komplett statischen Benutzeroberfläche in eine solche zu verwandeln, die es uns tatsächlich erlaubt, zu interagieren und Dinge zu ändern. In diesem Artikel tun wir dies und tauchen dabei in Events und State ein.
- [Reaktivität in React: Bearbeiten, Filtern, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Gegen Ende unseres React-Wegs (vorerst zumindest) werden wir den letzten Schliff an den Hauptfunktionen in unserer Todo-Listen-App vornehmen. Dazu gehört das Bearbeiten bestehender Aufgaben und das Filtern der Aufgabenliste zwischen allen, erledigten und unerledigten Aufgaben. Unterwegs betrachten wir die bedingte Darstellung der Benutzeroberfläche.
- [Zugänglichkeit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorial-Artikel konzentrieren wir uns auf die Zugänglichkeit, einschließlich des Fokus-Managements in React, das die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Tastaturbenutzer als auch für Bildschirmleser reduzieren kann.
- [React-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste mit React-Ressourcen, die Sie für Ihr weiteres Lernen verwenden können.

## Andere Framework-Optionen

### Ember-Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020, mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, können Sie eine fertige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) finden. Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies umfasst auch ein paar zusätzliche Funktionen, die nicht im Tutorial behandelt werden).

- [Erste Schritte mit Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : In unserem ersten Ember-Artikel werden wir sehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige anfängliche Setups durchführen, um sie für die Entwicklung vorzubereiten.
- [Struktur und Komponenten in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : In diesem Artikel werden wir die Struktur unserer TodoMVC Ember-App planen, das HTML dafür hinzufügen und dann diese HTML-Struktur in Komponenten zerlegen.
- [Interaktivität in Ember: Events, Klassen und State](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : An diesem Punkt beginnen wir, unserer App Interaktivität hinzuzufügen, mit der Fähigkeit, neue Todo-Items hinzuzufügen und anzuzeigen. Unterwegs betrachten wir die Verwendung von Events in Ember, das Erstellen von Komponentenklassen, um JavaScript-Code zu steuern, und das Einrichten eines Dienstes, um den Datenstatus unserer App zu verfolgen.
- [Interaktivität in Ember: Footer-Funktionalität, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, sich der Footer-Funktionalität in unserer App zu widmen. Hier werden wir den Todo-Zähler so konfigurieren, dass er die korrekte Anzahl an noch zu erledigenden Todos anzeigt, und das Styling korrekt anwenden auf erledigte Todos (d.h. dort, wo das Kontrollkästchen aktiviert ist). Wir verkabeln auch unseren "Erledigte löschen" Button. Unterwegs lernen wir die Verwendung von bedingter Darstellung in unseren Templates.
- [Routing in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : In diesem Artikel lernen wir Routing kennen oder auch URL-basiertes Filtern, wie es manchmal genannt wird. Wir werden es verwenden, um für jede der drei Todo-Ansichten – "Alle", "Aktiv" und "Erledigt" – eine eindeutige URL bereitzustellen.
- [Ember-Ressourcen und Fehlerbehebung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie nutzen können, um Ihr Lernen weiter fortzusetzen, plus einige nützliche Fehlerbehebungs- und andere Informationen.

### Vue-Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023, mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, können Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue repository](https://github.com/mdn/todo-vue) finden. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [Erste Schritte mit Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : Lassen Sie uns nun Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel werden wir einen kurzen Überblick über den Hintergrund von Vue geben, lernen, wie man es installiert und ein neues Projekt erstellt, die hohe Struktur des gesamten Projekts und einer einzelnen Komponente studieren, sehen, wie man das Projekt lokal ausführt und es vorbereitet, um mit dem Bau unseres Beispiels zu beginnen.
- [Erstellen unserer ersten Vue-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir werden damit beginnen, eine Komponente zu erstellen, die jeden Punkt in der Todo-Liste darstellt. Unterwegs lernen wir einige wichtige Konzepte kennen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten über Props und das Speichern des Datenstatus.
- [Darstellen einer Liste von Vue-Komponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine voll funktionsfähige Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir untersuchen, wie man einen Satz von Todo-Item-Daten zu unserer `App.vue`-Komponente hinzufügt, die wir dann mithilfe der Richtlinie `v-for` durchlaufen und innerhalb von `ToDoItem`-Komponenten anzeigen werden.
- [Hinzufügen eines neuen Todo-Formulars: Vue Events, Methoden und Modelle](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : Jetzt haben wir Beispieldaten an Ort und Stelle und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App anzeigt. Was wir wirklich als nächstes brauchen, ist die Fähigkeit, unseren Benutzern zu ermöglichen, ihre eigenen Todo-Items in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Event, das bei der Datenübermittlung ausgelöst wird, eine Methode, die bei der Übermittlung der Daten ausgeführt wird und die Liste neu rendert, und ein Modell, das die Daten steuert. Dies werden wir in diesem Artikel behandeln.
- [Stilisieren von Vue-Komponenten mit CSS](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : Die Zeit ist endlich gekommen, um unsere App etwas ansehnlicher zu machen. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stilisieren.
- [Verwenden von Vue berechneten Eigenschaften](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen Todo-Items anzeigt, indem wir eine Funktion von Vue namens berechnete Eigenschaften verwenden. Diese funktionieren ähnlich wie Methoden, werden aber nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [Bedingte Darstellung in Vue: Bearbeiten bestehender Todos](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : Jetzt ist es an der Zeit, eine der wichtigen Funktionalitäten hinzuzufügen, die uns noch fehlen – die Möglichkeit, bestehende Todo-Items zu bearbeiten. Dafür nutzen wir Vues bedingte Darstellungsmöglichkeiten – nämlich `v-if` und `v-else` – um uns das Umschalten zwischen der bestehenden Todo-Item-Ansicht und einer Bearbeitungsansicht zu ermöglichen, in der Sie die Todo-Item-Beschriftungen aktualisieren können. Wir werden auch sehen, wie man die Funktionalität zum Löschen von Todo-Items hinzufügt.
- [Vue Refs und Lebenszyklusmethoden für Fokus-Management](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Das letzte Stück Funktionalität, das wir betrachten müssen, ist das Fokus-Management oder, um es anders auszudrücken, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie wir Vue Refs dafür verwenden – eine fortgeschrittene Funktion, die Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs gibt oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kindkomponente.
- [Vue-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : Nun runden wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen geben, die Sie nutzen können, um Ihr Lernen weiter fortzusetzen, plus einige andere nützliche Tipps.

### Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020, mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, können Sie eine fertige Version des Beispiel-Svelte-App-Codes, wie er nach jedem Artikel sein sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) Repository finden. Für eine laufende Live-Version siehe unser Svelte REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [Erste Schritte mit Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher gesehen haben. Dann werden wir lernen, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen, wie man es lokal ausführt und es für die Produktion baut.
- [Beginn unserer Svelte Todo-Listen-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : Jetzt, da wir ein grundlegendes Verständnis davon haben, wie Dinge in Svelte funktionieren, können wir mit dem Bau unserer Beispiel-App beginnen: einer Todo-Liste. In diesem Artikel werden wir zunächst einen Blick auf die gewünschte Funktionalität unserer App werfen, dann eine `Todos.svelte`-Komponente erstellen und statisches Markup und Styles hinzufügen, um alles bereit zu haben, um mit der Entwicklung unserer To-Do-Listen-App-Funktionen fortzufahren, auf die wir in den folgenden Artikeln eingehen werden.
- [Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : Jetzt, da wir unser Markup und unsere Styles fertig haben, können wir anfangen, die erforderlichen Funktionen für unsere Svelte To-Do-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir Todos hinzufügen und löschen, als erledigt markieren und nach Status filtern können.
- [Komponenten in unserer Svelte-App erstellen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : Das Hauptziel dieses Artikels ist es, zu zeigen, wie man unsere App in handhabbare Komponenten zerlegt und Informationen zwischen ihnen teilt. Wir werden unsere App in Komponenten unterteilen und dann mehr Funktionalität hinzufügen, um Benutzern zu ermöglichen, bestehende Komponenten zu aktualisieren.
- [Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Zugänglichkeit](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter in Komponenten unterteilen. Wir lernen, wie man mit Problemen der Reaktivität umgeht, die mit der Aktualisierung von Objekten und Arrays zusammenhängen. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in Sveltes Reaktivitätssystem eintauchen. Wir werden uns auch ansehen, wie man einige Probleme mit der Zugänglichkeit des Fokus löst, und mehr darüber hinaus.
- [Arbeiten mit Svelte-Stores](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : In diesem Artikel zeigen wir einen anderen Weg, wie man das State-Management in Svelte handhaben kann – [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenbanken, die Werte speichern. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.
- [TypeScript-Unterstützung in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : Wir werden nun lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es uns bringen kann. Danach werden wir sehen, wie man unser Projekt konfiguriert, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um vollständig von TypeScript-Funktionen zu profitieren.
- [Bereitstellung und nächste Schritte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : In diesem letzten Artikel werden wir uns ansehen, wie man Ihre Anwendung bereitstellt und online stellt, sowie einige der Ressourcen teilen, die Sie weiterverfolgen sollten, um Ihre Svelte-Lernreise fortzusetzen.

### Angular-Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021, mit Angular CLI (NG) 11.2.5.

- [Erste Schritte mit Angular](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : In diesem Artikel sehen wir, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und betrachten die grundlegende Architektur von Angular.
- [Beginn unserer Angular-Todo-Listen-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : Zu diesem Zeitpunkt sind wir bereit, mit der Erstellung unserer To-Do-Listen-App unter Verwendung von Angular zu beginnen. Die fertige Anwendung zeigt eine Liste von To-Do-Items an und umfasst Funktionen zum Bearbeiten, Löschen und Hinzufügen. In diesem Artikel erfahren Sie mehr über die Struktur Ihrer Anwendung und arbeiten daran, eine grundlegende Liste von To-Do-Items anzuzeigen.
- [Stilisieren unserer Angular-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : Jetzt, wo wir unsere grundlegende Anwendungsstruktur eingerichtet und begonnen haben, etwas Nützliches anzuzeigen, schalten wir in einen anderen Gang und widmen einen Artikel der Frage, wie Angular das Styling von Anwendungen handhabt.
- [Erstellen einer Element-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch das Erstellen einer Komponente zur Handhabung der einzelnen Elemente in der Liste und das Hinzufügen von Überprüfungs-, Bearbeitungs- und Löschfunktionen. Das Angular-Event-Modell wird hier behandelt.
- [Filtern unserer To-Do-Items](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : Lassen Sie uns nun zur Hinzufügung von Funktionalität übergehen, die es Benutzern ermöglicht, ihre To-Do-Items zu filtern, damit sie aktive, erledigte oder alle Einträge anzeigen können.
- [Erstellung von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : Dieser letzte Angular-Artikel behandelt, wie man eine App bereit für die Produktion macht und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

## Welche Frameworks haben wir ausgewählt?

Wir decken fünf Frameworks in unseren Tutorials ab – Angular, Ember, React/ReactDOM, Svelte und Vue:

- Sie sind beliebte Wahlmöglichkeiten, die eine Weile bestehen werden – wie bei jedem Software-Tool ist es gut, sich an aktiv entwickelte Optionen zu halten, die wahrscheinlich nicht nächste Woche eingestellt werden, und die wertvolle Ergänzungen Ihrer Fähigkeiten sein werden, wenn Sie sich auf Jobsuche begeben.
- Sie haben starke Gemeinschaften und gute Dokumentation. Es ist sehr wichtig, Hilfe beim Erlernen eines komplexen Themas zu bekommen, insbesondere wenn Sie gerade erst anfangen.
- Wir haben nicht die Ressourcen, _alle_ modernen Frameworks abzudecken. Diese Liste aktuell zu halten, wäre ohnehin sehr schwierig, da ständig neue erscheinen.
- Als Anfänger ist die Entscheidung, worauf man sich bei der riesigen Anzahl an Auswahlmöglichkeiten konzentrieren soll, ein sehr reales Problem. Eine kurze Liste zu führen, ist daher hilfreich.

Wir möchten dies im Voraus sagen – wir haben die Frameworks, auf die wir uns konzentrieren, **nicht** ausgewählt, weil wir denken, dass sie die besten sind oder weil wir sie in irgendeiner Weise befürworten. Wir denken nur, dass sie nach den oben genannten Kriterien hoch punkten.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
