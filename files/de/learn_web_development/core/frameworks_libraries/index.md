---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Front-End-Webentwicklung und bieten Entwicklern erprobte Tools zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen verwenden Frameworks als Standardwerkzeug, daher erfordern viele Front-End-Entwicklungsjobs mittlerweile Erfahrung mit Frameworks. In dieser Artikelreihe möchten wir Ihnen einen komfortablen Ausgangspunkt bieten, um Ihnen den Einstieg in die Frameworks zu erleichtern.

Als angehender Front-End-Entwickler kann es schwierig sein, herauszufinden, wo man mit dem Erlernen von Frameworks beginnen soll - es gibt so viele Frameworks zur Auswahl, ständig tauchen neue auf, sie funktionieren größtenteils ähnlich, aber einige Dinge machen sie anders, und es gibt einige spezifische Dinge, auf die man beim Einsatz von Frameworks achten sollte.

Wir beabsichtigen nicht, Ihnen erschöpfend alles beizubringen, was Sie über React/ReactDOM, Vue oder ein anderes bestimmtes Framework wissen müssen; die Dokumentationen der Framework-Teams (und andere Ressourcen) erfüllen diese Aufgabe bereits. Stattdessen möchten wir grundlegende Fragen beantworten wie:

- Warum sollte ich ein Framework benutzen? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich mir stellen, wenn ich versuche, ein Framework auszuwählen? Brauche ich überhaupt ein Framework?
- Welche Funktionen haben Frameworks? Wie funktionieren sie im Allgemeinen, und wie unterscheiden sich die Implementierungen dieser Funktionen bei verschiedenen Frameworks?
- Wie stehen sie in Beziehung zu "Vanilla"-JavaScript oder HTML?

Danach bieten wir einige Tutorials, die die wesentlichen Grundlagen von React, einer beliebten Framework-Wahl, abdecken, um Ihnen genügend Kontext und Vertrautheit zu bieten, damit Sie selbst tiefer einsteigen können. Wir möchten, dass Sie pragmatisch weiter lernen und dabei grundlegende Best Practices der Webplattform wie Barrierefreiheit nicht vergessen.

Wir bieten auch einige Tutorials zu den Grundlagen anderer Framework-Optionen an, für diejenigen, die eine andere Wahl als React treffen möchten.

## Voraussetzungen

Sie sollten wirklich zuerst die Grundlagen der Kern-Websprachen lernen, bevor Sie versuchen, clientseitige Frameworks zu erlernen — [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und insbesondere [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch reichhaltiger und professioneller, und Sie werden Probleme sicherer beheben können, wenn Sie die grundlegenden Funktionen der Webplattform verstehen, auf denen die Frameworks aufbauen.

## Einführende Tutorials

- [Einführung in clientseitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick, einschließlich einer kurzen Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man damit beginnt, ein Framework zum Lernen auszuwählen, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [Hauptfeatures von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes große JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browserevents und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel untersucht die Hauptfeatures der „großen Vier“-Frameworks, wie Frameworks tendenziell aus einer hohen Ebene arbeiten und die Unterschiede zwischen ihnen.

## React Tutorials

> [!NOTE]
> React Tutorials zuletzt getestet im Januar 2023 mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

- [Erste Schritte mit React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel begrüßen wir React. Wir werden ein wenig über den Hintergrund und die Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren, um ein wenig über das Funktionsweise von React zu lernen.
- [Anfang unserer React ToDo-Liste](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Nehmen wir an, uns wurde die Aufgabe übertragen, einen Proof-of-Concept in React zu erstellen – eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel wird Sie durch das Aufstellen der grundlegenden `App`-Komponentenstruktur und Stilführung führen, bereit für die spätere Definition und Interaktivität einzelner Komponenten.
- [Komponentisierung unserer React-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : Zu diesem Zeitpunkt ist unsere App ein Monolith. Bevor wir sie funktional machen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine strikten Regeln dafür, was als Komponente gilt und was nicht - das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen einen sinnvollen Weg, um unsere App in Komponenten zu zerlegen.
- [Reaktivität in React: Events und Zustand](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Mit unserem Komponentenschema ausgearbeitet, ist es jetzt an der Zeit, unsere App von einer komplett statischen Benutzeroberfläche zu einer zu aktualisieren, die uns tatsächlich erlaubt, zu interagieren und Dinge zu ändern. In diesem Artikel werden wir dies tun und dabei auf Events und Zustand eingehen.
- [Reaktive Interaktivität in React: Bearbeiten, Filtern, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir den letzten Schliff an den Hauptbereichen der Funktionalität unserer ToDo-Listen-App hinzu. Dazu gehört das Erlauben, vorhandene Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Wir werden uns auch die bedingte UI-Darstellung ansehen.
- [Barrierefreiheit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorial-Artikel konzentrieren wir uns (Wortspiel beabsichtigt) auf Barrierefreiheit, einschließlich der Fokusverwaltung in React, die die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Benutzer, die nur mit der Tastatur arbeiten, als auch für Bildschirmleser reduzieren kann.
- [React Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen weiter voranzutreiben.

## Andere Framework-Optionen

### Ember Tutorials

> [!NOTE]
> Ember Tutorials zuletzt getestet im Mai 2020 mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies umfasst auch einige zusätzliche Funktionen, die im Tutorial nicht behandelt werden).

- [Erste Schritte mit Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige anfängliche Einstellungen vornehmen, um sie für die Entwicklung bereit zu machen.
- [Struktur und Komponentisierung der Ember-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : In diesem Artikel werden wir sofort mit der Planung der Struktur unserer TodoMVC Ember-App beginnen, indem wir das HTML dafür hinzufügen und diese HTML-Struktur in Komponenten aufteilen.
- [Reaktivität in Ember: Events, Klassen und Zustand](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : An diesem Punkt werden wir beginnen, unserem App-Interaktivität hinzuzufügen, indem wir die Möglichkeit bieten, neue To-Do-Elemente hinzuzufügen und anzuzeigen. Unterwegs werden wir uns ansehen, wie Events in Ember verwendet werden, Komponentenklassen erstellen, um JavaScript-Code zu enthalten, der interaktive Funktionen steuert, und einen Service einrichten, um den Datenzustand unserer App zu verfolgen.
- [Reaktivität in Ember: Footer-Funktionalität, bedingte Darstellung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : Jetzt ist es an der Zeit, die Footer-Funktionalität in unserer App in Angriff zu nehmen. Hier werden wir den Zähler für die noch abzuschließenden To-Dos korrekt aktualisieren lassen, und die abgelaufenen To-Dos korrekt gestalten (d.h. wo das Kontrollkästchen aktiviert wurde). Wir werden auch unseren "Abgeschlossene löschen" Button verkabeln. Unterwegs lernen wir, wie wir konditionale Darstellungen in unseren Vorlagen verwenden.
- [Routing in Ember](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : In diesem Artikel lernen wir Routing oder URL-basiertes Filtern, wie es manchmal bezeichnet wird, kennen. Wir werden es nutzen, um eine einzigartige URL für jede der drei To-Do-Ansichten – „Alle“, „Aktiv“ und „Abgeschlossen“ – bereitzustellen.
- [Ember Ressourcen und Fehlerbehebung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie nutzen können, um Ihr Wissen zu vertiefen, sowie einige hilfreiche Informationen zur Fehlerbehebung und mehr.

### Vue Tutorials

> [!NOTE]
> Vue Tutorial zuletzt getestet im Januar 2023 mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [Erste Schritte mit Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : Lassen Sie uns nun Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel betrachten wir ein wenig den Hintergrund von Vue, lernen, wie man es installiert und ein neues Projekt erstellt, studieren die hochgradige Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie man das Projekt lokal ausführt und es bereitmacht, um mit dem Bau unseres Beispiels zu beginnen.
- [Erstellen unserer ersten Vue-Komponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : Nun ist es an der Zeit, tiefer in Vue einzusteigen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir beginnen damit, eine Komponente zu erstellen, die jeden Punkt auf der To-Do-Liste darstellt. Unterwegs lernen wir einige wichtige Konzepte kennen, wie man Komponenten in anderen Komponenten aufruft, Daten über Props an sie übergibt und den Datenzustand speichert.
- [Rendern einer Liste von Vue-Komponenten](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : An diesem Punkt haben wir eine voll funktionsfähige Komponente; wir sind jetzt bereit, unserer App mehrere `ToDoItem`-Komponenten hinzuzufügen. In diesem Artikel werden wir uns ansehen, wie wir eine Reihe von To-Do-Elementdaten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und in `ToDoItem`-Komponenten mithilfe der `v-for`-Direktive anzeigen.
- [Hinzufügen eines neuen To-Do-Formulars: Vue-Events, Methoden und Modelle](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : Wir haben jetzt Beispieldaten eingerichtet und eine Schleife, die jedes Stück Daten nimmt und in einem `ToDoItem` in unserer App rendert. Was wir wirklich als nächstes brauchen, ist die Fähigkeit, unseren Benutzern die Eingabe ihrer eigenen To-Do-Elemente in die App zu ermöglichen, und dafür benötigen wir ein Text-<input>, ein Event, das beim Übermitteln der Daten ausgelöst wird, eine Methode, die beim Übermitteln der Daten zum Hinzufügen der Daten an die Liste und das erneute Rendern der Liste ausgelöst wird, und ein Modell zur Steuerung der Daten. Das werden wir in diesem Artikel behandeln.
- [Styling von Vue-Komponenten mit CSS](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : Es ist endlich an der Zeit, unsere App ein wenig ansprechender aussehen zu lassen. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stylen.
- [Verwendung von Vue-Berechneten Eigenschaften](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen To-Do-Elemente anzeigt, unter Verwendung eines Features von Vue, genannt berechneten Eigenschaften. Diese funktionieren ähnlich wie Methoden, werden aber nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [Bedingtes Rendern in Vue: Bearbeiten vorhandener To-Dos](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : Jetzt ist es Zeit, eine der Hauptfunktionalitäten hinzuzufügen, die uns noch fehlt - die Möglichkeit, vorhandene To-Do-Elemente zu bearbeiten. Um dies zu tun, werden wir Vuie's bedingte Renderfähigkeiten nutzen – nämlich `v-if` und `v-else`, um uns zwischen der vorhandenen To-Do-Elementansicht und einer Bearbeitungsansicht umzuschalten, in der Sie die Bezeichnung der To-Do-Elemente aktualisieren können. Wir werden auch die Funktionalität zum Löschen von To-Do-Elementen hinzufügen.
- [Vue-Referenzen und Lebenszyklusmethoden zur Fokusverwaltung](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Das letzte Stück Funktionalität, das wir betrachten müssen, ist die Fokusverwaltung oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie wir Vue-Referenzen verwenden können, um dies zu handhaben – ein fortgeschrittenes Feature, das Ihnen den direkten Zugriff auf die zugrunde liegenden DOM-Knoten unter dem virtuellen DOM oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente ermöglicht.
- [Vue Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : Nun runden wir unser Studium von Vue ab, indem wir Ihnen eine Liste von Ressourcen zur Verfügung stellen, die Sie nutzen können, um Ihr Lernen fortzusetzen, plus einige andere nützliche Tipps.

### Svelte Tutorials

> [!NOTE]
> Svelte Tutorials zuletzt getestet im August 2020 mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Svelte-App-Codes, wie er nach jedem Artikel sein sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) Repository. Für eine laufende Live-Version siehe unseren Svelte REPL bei <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [Erste Schritte mit Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : In diesem Artikel bieten wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den bisher gesehenen Frameworks und Tools unterscheidet. Dann lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie wir sie lokal ausführen und für die Produktion bauen.
- [Beginn unserer Svelte ToDo-Liste App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : Jetzt, da wir ein grundlegendes Verständnis davon haben, wie Svelte funktioniert, können wir beginnen, unsere Beispiel-App: eine To-Do-Liste zu erstellen. In diesem Artikel werfen wir zunächst einen Blick auf die gewünschten Funktionen unserer App, dann erstellen wir eine `Todos.svelte` Komponente und stellen statisches Markup und Styles ein, damit alles bereit steht, um die Funktionen unserer To-Do-Liste App zu entwickeln, auf die wir in den folgenden Artikeln eingehen werden.
- [Dynamisches Verhalten in Svelte: Arbeit mit Variablen und Props](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : Jetzt, da wir unser Markup und unsere Styles bereit haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte To-Do-Liste App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, damit wir To-Dos hinzufügen und löschen, als erledigt markieren und nach Status filtern können.
- [Komponentisierung unserer Svelte-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : Das Hauptziel dieses Artikels ist es, zu betrachten, wie wir unsere App in handhabbare Komponenten zerlegen und Informationen zwischen ihnen teilen können. Wir werden unsere App in Komponenten unterteilen und dann mehr Funktionalität hinzufügen, damit Benutzer vorhandene Komponenten aktualisieren können.
- [Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die finalen Funktionen der App hinzufügen und unsere App weiter komponentisieren. Wir lernen, wie wir mit reaktiven Problemen im Zusammenhang mit dem Aktualisieren von Objekten und Arrays umgehen. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in das Reaktivitätssystem von Svelte eintauchen. Wir werden auch einige Barrierefreiheitsblendprobleme lösen und mehr.
- [Arbeiten mit Svelte Stores](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : In diesem Artikel zeigen wir eine andere Möglichkeit zum Umgang mit der Zustandsverwaltung in Svelte – [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte halten. Komponenten können sich auf Stores abonnieren und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.
- [TypeScript-Unterstützung in Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : Wir werden nun lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir durch unsere App und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile der TypeScript-Funktionen voll auszuschöpfen.
- [Bereitstellung und nächste Schritte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : In diesem letzten Artikel schauen wir uns an, wie Sie Ihre Anwendung bereitstellen und online bringen und teilen auch einige der Ressourcen, die Sie nutzen sollten, um Ihre Svelte-Lernreise fortzusetzen.

### Angular Tutorials

> [!NOTE]
> Angular Tutorials zuletzt getestet im April 2021 mit Angular CLI (NG) 11.2.5.

- [Erste Schritte mit Angular](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : In diesem Artikel betrachten wir, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein, und betrachten die grundlegende Architektur von Angular.
- [Anfang unserer Angular ToDo-Liste App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, mit der Erstellung unserer To-Do-Listenanwendung mit Angular zu beginnen. Die fertige Anwendung zeigt eine Liste von To-Do-Elementen an und umfasst Editier-, Lösch- und Hinzufügefunktionen. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten daran, eine grundlegende Liste von To-Do-Elementen anzuzeigen.
- [Styling unserer Angular-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : Jetzt, da wir unsere grundlegende Anwendungsstruktur eingerichtet haben und beginnen, etwas Nützliches anzuzeigen, wechseln wir die Gänge und verbringen einen Artikel damit, zu betrachten, wie Angular das Styling von Anwendungen handhabt.
- [Erstellen einer Einzelkomponente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : Komponenten bieten Ihnen eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente zur Verwaltung der einzelnen Elemente in der Liste und das Hinzufügen von Prüf-, Bearbeitungs- und Löschfunktionen. Das Angular-Event-Modell wird hier behandelt.
- [Filtern unserer To-Do-Elemente](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : Lassen Sie uns jetzt zur Hinzufügung von Funktionen übergehen, die es Benutzern ermöglichen, ihre To-Do-Elemente zu filtern, damit sie aktive, vollständige oder alle Elemente anzeigen können.
- [Erstellung von Angular-Anwendungen und weitere Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : Dieser letzte Angular-Artikel behandelt, wie man eine App bereit für die Produktion baut und bietet weitere Ressourcen, damit Sie Ihre Lernerfahrung fortsetzen können.

## Welche Frameworks haben wir ausgewählt?

Wir decken in unseren Tutorials fünf Frameworks ab — Angular, Ember, React/ReactDOM, Svelte und Vue:

- Sie sind beliebte Optionen, die eine Weile bestehen bleiben werden – wie bei jedem Software-Tool, ist es gut, bei aktiv entwickelten Optionen zu bleiben, die wahrscheinlich nicht nächste Woche eingestellt werden und die wünschenswerte Ergänzungen zu Ihren Fähigkeiten sind, wenn Sie einen Job suchen.
- Sie haben starke Communities und gute Dokumentationen. Es ist sehr wichtig, Hilfe beim Lernen eines komplexen Themas erhalten zu können, besonders wenn Sie gerade erst anfangen.
- Wir haben nicht die Ressourcen, um _alle_ modernen Frameworks abzudecken. Diese Liste auf dem neuesten Stand zu halten wäre sowieso sehr schwierig, da ständig neue auftauchen.
- Als Anfänger ist es ein sehr reales Problem, sich zu entscheiden, worauf man sich bei der gigantischen Anzahl an verfügbaren Optionen konzentrieren sollte. Die Liste kurz zu halten ist daher hilfreich.

Wir möchten dies von vornherein klarstellen — wir haben **nicht** die Frameworks ausgewählt, auf die wir uns konzentrieren, weil wir sie für die besten halten oder sie in irgendeiner Weise unterstützen. Wir glauben einfach, dass sie in den oben genannten Kriterien hoch punkten.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
