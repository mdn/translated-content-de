---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern erprobte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardwerkzeug, sodass viele Front-End-Entwicklerjobs mittlerweile Erfahrung mit Frameworks voraussetzen. In dieser Artikelsammlung möchten wir Ihnen einen komfortablen Ausgangspunkt bieten, um mit dem Erlernen von Frameworks zu beginnen.

Als angehender Front-End-Entwickler kann es schwierig sein, einen Einstieg zu finden, wenn es um das Erlernen von Frameworks geht – es gibt so viele zur Auswahl, ständig erscheinen neue, sie funktionieren größtenteils auf ähnliche Weise, machen jedoch einiges anders, und es gibt einige spezifische Dinge, auf die man beim Umgang mit Frameworks achten sollte.

Es ist nicht unser Ziel, Ihnen alles beizubringen, was Sie über React/ReactDOM, Vue oder ein anderes spezifisches Framework wissen müssen; die Unterlagen der Framework-Teams selbst (und andere Ressourcen) übernehmen diese Aufgabe bereits. Stattdessen wollen wir zunächst grundlegende Fragen beantworten wie:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich stellen, wenn ich versuche, ein Framework auszuwählen? Muss ich überhaupt ein Framework verwenden?
- Welche Funktionen haben Frameworks? Wie funktionieren sie im Allgemeinen und wie unterscheiden sich die Implementierungen dieser Funktionen in den verschiedenen Frameworks?
- Wie stehen sie in Beziehung zu „Vanilla“ JavaScript oder HTML?

Danach bieten wir einige Tutorials, die die wesentlichen Aspekte von React, einer beliebten Framework-Auswahl, abdecken, um Ihnen genug Kontext und Vertrautheit zu bieten, um selbst tiefer einzutauchen. Wir möchten, dass Sie pragmatisch über Frameworks lernen und dabei grundlegende Best Practices der Webplattform wie Zugänglichkeit nicht vergessen.

Wir bieten auch einige Tutorials, die die Grundlagen anderer Framework-Optionen abdecken, für diejenigen, die eine andere Wahl als React treffen möchten.

## Voraussetzungen

Sie sollten wirklich zuerst die Grundlagen der Kern-Websprachen erlernen, bevor Sie den Versuch unternehmen, clientseitige Frameworks zu erlernen — [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und insbesondere [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch reicher und professioneller, und Sie werden Probleme mit mehr Zuversicht beheben können, wenn Sie die grundlegenden Webplattform-Funktionen verstehen, auf denen die Frameworks aufbauen.

## Einführungstutorials

- [Einführung in clientseitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, betrachten eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, über die Auswahl eines zu lernenden Frameworks nachzudenken, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [Hauptfunktionen von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes große JavaScript-Framework hat einen anderen Ansatz zur DOM-Aktualisierung, zur Handhabung von Browserereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptfunktionen der „großen 4“ Frameworks untersuchen und betrachten, wie Frameworks tendenziell aus einer hohen Ebene funktionieren und welche Unterschiede zwischen ihnen bestehen.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023, mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispielcodes der React-App in unserem [todo-react Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

- [Erste Schritte mit React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel sagen wir Hallo zu React. Wir entdecken ein wenig über seinen Hintergrund und seine Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen und experimentieren mit einer einfachen Starter-App, wobei wir ein wenig über die Funktionsweise von React lernen.
- [Beginn unserer React ToDo-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Nehmen wir an, wir wurden mit der Erstellung eines Proof-of-Concepts in React beauftragt – eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, die sie erledigen möchten, und Aufgaben als abgeschlossen zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch das Aufstellen der grundlegenden `App`-Komponentenstruktur und des Stylings, bereit für die Definition einzelner Komponenten und Interaktivität, die wir später hinzufügen.
- [Komponentisierung unserer React-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir damit Funktionen ausführen können, müssen wir sie in handhabbare, beschreibende Komponenten aufteilen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unserer App in Komponenten aufzugliedern.
- [React-Interaktivität: Ereignisse und Status](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Mit unserem erarbeiteten Komponentenplan ist es nun an der Zeit, unsere App von einer völlig statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktionen und Änderungen ermöglicht. In diesem Artikel werden wir dies tun und dabei auf Ereignisse und Zustände eingehen.
- [React-Interaktivität: Bearbeiten, Filtern, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Wenn wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir den Hauptbereichen der Funktionalität in unserer Todo-Listen-App den letzten Schliff hinzu. Dazu gehört, dass Sie vorhandene Aufgaben bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben filtern können. Wir schauen auf die bedingte Darstellung der Benutzeroberfläche auf dem Weg.
- [Barrierefreiheit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorialartikel konzentrieren wir uns auf (Wortspiel beabsichtigt) Barrierefreiheit, einschließlich Fokus-Management in React, das die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Tastaturnutzer als auch für Bildschirmleser reduzieren kann.
- [React-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen weiter voranzutreiben.

## Andere Framework-Optionen

### Ember-Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020, mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispielcodes der Ember-App im [ember-todomvc-tutorial Repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies schließt auch einige zusätzliche Funktionen ein, die im Tutorial nicht behandelt werden).

- [Erste Schritte mit Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : In unserem ersten Ember-Artikel schauen wir uns an, wie Ember funktioniert und wofür es nützlich ist, installieren die Ember-Toolchain lokal, erstellen eine Beispiel-App und führen dann einige erste Einstellungen durch, um sie für die Entwicklung vorzubereiten.
- [Struktur der Ember-App und Komponentisierung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : In diesem Artikel machen wir uns direkt daran, die Struktur unserer TodoMVC Ember-App zu planen, das HTML dafür einzufügen und diese HTML-Struktur in Komponenten aufzuteilen.
- [Ember-Interaktivität: Ereignisse, Klassen und Status](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : An diesem Punkt beginnen wir, der App etwas Interaktivität hinzuzufügen und die Fähigkeit zur Anzeige und zum Hinzufügen neuer Aufgaben zu schaffen. Auf dem Weg dorthin betrachten wir die Verwendung von Ereignissen in Ember, die Erstellung von Komponentenklassen zur Aufnahme von JavaScript-Code zur Steuerung interaktiver Funktionen und die Einrichtung eines Dienstes zur Verfolgung des Datenstatus unserer App.
- [Ember-Interaktivität: Fußzeilenfunktionalität, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, die Fußzeilenfunktionen in unserer App anzugehen. Hier werden wir den Aufgaben-Zähler so aktualisieren, dass er die richtige Anzahl noch zu erledigender Aufgaben anzeigt und das Styling auf abgeschlossene Aufgaben korrekt angewendet wird (d.h. wo das Kontrollkästchen aktiviert wurde). Wir werden auch unseren "Abgeschlossene löschen"-Button verdrahten. Auf dem Weg lernen wir die bedingte Darstellung in unseren Vorlagen.
- [Routing in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : In diesem Artikel lernen wir über Routing oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir werden es verwenden, um eine eindeutige URL für jede der drei Ansichten—„Alle“, „Aktiv“ und „Abgeschlossen“— bereitzustellen.
- [Ember-Ressourcen und Fehlerbehebung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie verwenden können, um Ihr Lernen weiter voranzutreiben, plus einige nützliche Fehlerbehebungen und weitere Informationen.

### Vue-Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023, mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispielcodes der Vue-App in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [Erste Schritte mit Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : Nun stellen wir Vue vor, das dritte unserer Frameworks. In diesem Artikel schauen wir uns ein wenig Vue-Hintergrund an, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die hochrangige Struktur des gesamten Projekts und eines einzelnen Komponenten, sehen, wie man das Projekt lokal ausführt und es bereit macht, unser Beispiel zu bauen.
- [Erstellung unserer ersten Vue-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen mit der Erstellung einer Komponente, die jedes Element der Aufgabenliste darstellt. Auf dem Weg lernen wir einige wichtige Konzepte wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über Requisiten und das Speichern des Datenstatus.
- [Darstellung einer Liste von Vue-Komponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine voll funktionsfähige Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel fügen wir einen Satz von Aufgabenlistendaten zu unserer `App.vue`-Komponente hinzu, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten unter Verwendung der `v-for`-Anweisung anzeigen.
- [Hinzufügen eines neuen Aufgabenformulars: Vue-Ereignisse, Methoden und Modelle](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : Wir haben nun Beispieldaten an Ort und Stelle und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir als Nächstes wirklich brauchen, ist die Fähigkeit, unseren Benutzern zu ermöglichen, ihre eigenen Aufgaben in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das bei der Datenübermittlung ausgelöst wird, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Das werden wir in diesem Artikel behandeln.
- [Styling von Vue-Komponenten mit CSS](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : Die Zeit ist endlich gekommen, um unsere App etwas schöner aussehen zu lassen. In diesem Artikel werden wir die verschiedenen Möglichkeiten erforschen, Vue-Komponenten mit CSS zu stylen.
- [Verwendung von Vue-Computer-Eigenschaften](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen Aufgaben anzeigt, indem wir eine Funktion von Vue namens Computer-Eigenschaften verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur neu ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [Vue-bedingte Darstellung: Bearbeiten bestehender Aufgaben](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : Nun ist es an der Zeit, einen der wichtigsten Funktionsteile hinzuzufügen, die uns noch fehlen – die Fähigkeit, bestehende Aufgaben zu bearbeiten. Dafür werden wir die Funktionen der bedingten Darstellung von Vue nutzen – nämlich `v-if` und `v-else` –, um zwischen der vorhandenen Aufgabenansicht und einer Bearbeitungsansicht zu wechseln, in der Sie Aufgabenbezeichnungen aktualisieren können. Wir werden auch die Funktionalität zum Löschen von Aufgaben hinzufügen.
- [Vue-Refs und Lebenszyklus-Methoden für das Fokus-Management](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Der letzte Funktionsteil, den wir betrachten, ist das Fokus-Management, anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir schauen uns die Verwendung von Vue-Refs an, um dies zu handhaben – eine erweiterte Funktion, die es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOM zu haben, oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kindkomponente.
- [Vue-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : Jetzt runden wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen geben, die Sie nutzen können, um Ihr Lernen weiter voranzutreiben, sowie einige andere nützliche Tipps.

### Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020, mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispielcodes der Svelte-App, wie sie nach jedem Artikel aussehen sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial)-Repo. Eine laufende Live-Version finden Sie in unserem Svelte REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [Erste Schritte mit Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Werkzeugen unterscheidet, die wir bisher gesehen haben. Dann lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie wir es lokal ausführen und für die Produktion bauen.
- [Beginn unserer Svelte-To-Do-List-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : Jetzt, da wir ein grundlegendes Verständnis davon haben, wie die Dinge in Svelte funktionieren, können wir beginnen, unsere Beispiel-App zu bauen: eine To-Do-Liste. In diesem Artikel werden wir uns zunächst die gewünschten Funktionen unserer App ansehen, dann eine `Todos.svelte`-Komponente erstellen und statische Markup und Styles einfügen, sodass alles bereit ist, um die Funktionen unserer To-Do-Liste-App zu entwickeln, die wir in den folgenden Artikeln angehen werden.
- [Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : Jetzt, da unser Markup und unsere Styles bereit sind, können wir beginnen, die erforderlichen Funktionen für unsere Svelte-To-Do-List-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu machen, sodass wir Aufgaben hinzufügen und löschen, sie als erledigt markieren und nach Status filtern können.
- [Komponentisierung unserer Svelte-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : Das zentrale Ziel dieses Artikels ist es, zu sehen, wie wir unsere App in handhabbare Komponenten aufteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App komponentisieren und dann mehr Funktionen hinzufügen, die es Benutzern ermöglichen, bestehende Komponenten zu aktualisieren.
- [Fortgeschrittene Svelte-Nutzung: Reaktivität, Lebenszyklus, Barrierefreiheit](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter komponentisieren. Wir werden lernen, wie man mit reaktiven Problemen im Zusammenhang mit dem Aktualisieren von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir ein wenig tiefer in Sveltes Reaktivitätssystem eintauchen. Wir werden auch einige Barrierefreiheitsprobleme mit dem Fokus angehen und mehr darüber hinaus.
- [Arbeiten mit Svelte-Stores](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : In diesem Artikel zeigen wir eine andere Möglichkeit zur Handhabung des Zustandsmanagements in Svelte – [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte speichern. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.
- [TypeScript-Unterstützung in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : Wir werden jetzt lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die TypeScript-Funktionen vollständig auszunutzen.
- [Bereitstellung und nächste Schritte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : In diesem letzten Artikel schauen wir uns an, wie Sie Ihre Anwendung bereitstellen und online bringen, und teilen auch einige der Ressourcen, die Sie weiter nutzen sollten, um Ihr Svelte-Lernreise fortzusetzen.

### Angular-Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021, mit Angular CLI (NG) 11.2.5.

- [Erste Schritte mit Angular](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : In diesem Artikel schauen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und betrachten die grundlegende Architektur von Angular.
- [Beginn unserer Angular-Aufgabenlisten-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, unsere Aufgabenlisten-Anwendung mit Angular zu erstellen. Die fertige Anwendung zeigt eine Liste von Aufgaben an und umfasst Bearbeitungs-, Lösch- und Hinzufügefunktionen. In diesem Artikel lernen Sie die Anwendungsstruktur kennen und arbeiten bis zur Anzeige einer Basisliste von Aufgaben.
- [Styling unserer Angular-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : Jetzt, da wir unsere grundlegende Anwendungsstruktur eingerichtet und begonnen haben, etwas Nützliches anzuzeigen, wechseln wir den Gang und verbringen einen Artikel damit, wie Angular Styling von Anwendungen behandelt.
- [Erstellen eines Elementkomponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch das Erstellen einer Komponente, die die einzelnen Elemente in der Liste verarbeiten soll, und fügt Prüf-, Bearbeitungs- und Löschfunktionen hinzu. Das Angular-Ereignismodell wird hier behandelt.
- [Filtern unserer Aufgaben](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : Lassen Sie uns nun weitergehen und Funktionen hinzufügen, die es Benutzern ermöglichen, ihre Aufgaben zu filtern, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.
- [Erstellen von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : Dieser letzte Angular-Artikel behandelt, wie man eine App für die Produktion bereit erstellt, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

## Welche Frameworks haben wir ausgewählt?

Wir behandeln fünf Frameworks in unseren Tutorials — Angular, Ember, React/ReactDOM, Svelte und Vue:

- Sie sind beliebte Optionen, die eine Weile bestehen werden — wie bei jedem Software-Tool ist es gut, sich an aktiv entwickelte Optionen zu halten, die wahrscheinlich nicht nächste Woche eingestellt werden und die wünschenswerte Ergänzungen zu Ihrem Fähigkeiten-Satz sein werden, wenn Sie einen Job suchen.
- Sie haben starke Communities und gute Dokumentation. Es ist sehr wichtig, in der Lage zu sein, Hilfe beim Lernen eines komplexen Themas zu bekommen, besonders wenn Sie gerade erst anfangen.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks zu behandeln. Diese Liste auf dem neuesten Stand zu halten, wäre jedenfalls sehr schwierig, da ständig neue auftauchen.
- Als Anfänger ist es ein sehr reales Problem, aus der schieren Anzahl von verfügbaren Optionen auszuwählen, worauf man sich konzentrieren soll. Die Liste kurz zu halten, ist daher hilfreich.

Wir möchten dies im Vorfeld sagen — wir haben die Frameworks, auf die wir uns konzentrieren, **nicht** ausgewählt, weil wir denken, dass sie die besten sind, oder weil wir sie in irgendeiner Weise unterstützen. Wir denken nur, dass sie in den oben genannten Kriterien hoch punkten.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
