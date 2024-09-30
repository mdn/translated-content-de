---
title: Verständnis von clientseitigen JavaScript-Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern erprobte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standardbestandteil ihrer Werkzeugkette, daher erfordern viele Frontend-Entwicklerjobs mittlerweile Framework-Erfahrung. In dieser Artikelsammlung möchten wir Ihnen einen fundierten Einstiegspunkt bieten, um Ihnen beim Erlernen von Frameworks zu helfen.

Als angehender Frontend-Entwickler kann es schwierig sein, herauszufinden, wo man beim Erlernen von Frameworks beginnen soll – es gibt so viele Frameworks zur Auswahl, ständig erscheinen neue, sie funktionieren größtenteils ähnlich, unterscheiden sich jedoch in einigen Details, und es gibt einige spezifische Dinge, die man beim Einsatz von Frameworks beachten sollte.

Unser Ziel ist es nicht, Ihnen erschöpfend alles beizubringen, was Sie über React/ReactDOM oder Vue oder ein anderes spezifisches Framework wissen müssen; diese Aufgabe erledigen die Dokumentationen der Framework-Teams (und andere Ressourcen) bereits. Stattdessen wollen wir grundlegende Fragen klären, wie zum Beispiel:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich mir stellen, wenn ich versuche, ein Framework auszuwählen? Brauche ich überhaupt ein Framework?
- Welche Funktionen haben Frameworks? Wie funktionieren sie im Allgemeinen, und wie unterscheiden sich die Implementierungen dieser Funktionen der verschiedenen Frameworks?
- Wie stehen sie in Beziehung zu "vanilla" JavaScript oder HTML?

Anschließend werden wir einige Tutorials bereitstellen, die die wesentlichen Aspekte einiger verschiedener Framework-Optionen abdecken, um Ihnen genug Kontext und Vertrautheit zu bieten, damit Sie selbst tiefer in das Thema einsteigen können. Wir möchten, dass Sie pragmatisch über Frameworks lernen, ohne die grundlegenden Best Practices der Webplattform wie Barrierefreiheit zu vergessen.

**[Jetzt beginnen mit "Einführung in clientseitige Frameworks"](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Voraussetzungen

Sie sollten wirklich zuerst die Grundlagen der Kern-Websprachen lernen, bevor Sie versuchen, clientseitige Frameworks zu lernen – [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und insbesondere [JavaScript](/de/docs/Learn/JavaScript).

Ihr Code wird dadurch reicher und professioneller, und Sie werden in der Lage sein, Probleme mit mehr Selbstbewusstsein zu beheben, wenn Sie die grundlegenden Funktionen der Webplattform verstehen, auf denen die Frameworks aufbauen.

## Einführende Leitfäden

- [1. Einführung in clientseitige Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einer allgemeinen Übersicht über das Gebiet, schauen auf eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man beginnt, die Wahl eines zu erlernenden Frameworks zu überdenken, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [2. Hauptfunktionen von Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Jedes große JavaScript-Framework verfolgt einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browserereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel untersucht die Hauptfunktionen der „großen 4“-Frameworks und betrachtet, wie Frameworks im Allgemeinen funktionieren und die Unterschiede zwischen ihnen.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023, mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

- [1. Einstieg in React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : In diesem Artikel begrüßen wir React. Wir entdecken ein wenig über den Hintergrund und die Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen eine einfache Starter-App, mit der wir uns mit der Funktionsweise von React vertraut machen können.
- [2. Beginn unserer React-to-do-Liste](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Angenommen, wir haben die Aufgabe, ein Proof-of-Concept in React zu erstellen - eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und auch Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch die Erstellung der grundlegenden `App`-Komponentenstruktur und -Stil, bereit für die spätere Definition und Interaktivität einzelner Komponenten.
- [3. Komponentenisieren unserer React-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktional machen, müssen wir sie in handhabbare, beschreibende Komponenten unterteilen. In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten aufzuteilen.
- [4. React-Interaktivität: Ereignisse und Zustand](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : Mit unserem Komponentenplan ist es nun an der Zeit, unsere App von einer komplett statischen Benutzeroberfläche hin zu einer, die uns tatsächlich erlaubt, zu interagieren und Dinge zu ändern, zu aktualisieren. In diesem Artikel werden wir dies tun und uns dabei in Ereignisse und Zustände einarbeiten.
- [5. React-Interaktivität: Bearbeiten, Filtern, bedingte Darstellung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : Da wir gegen Ende unserer React-Reise sind (vorerst zumindest), fügen wir die letzten Schliffe an den Hauptfunktionen unserer To-do-Listen-App hinzu. Dies schließt die Möglichkeit ein, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Wir werden uns auf dem Weg die bedingte Darstellung von Benutzeroberflächen ansehen.
- [6. Barrierefreiheit in React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : In unserem letzten Tutorial-Artikel konzentrieren wir uns auf (Wortspiel beabsichtigt) Barrierefreiheit, einschließlich des Fokus-Managements in React, das die Benutzerfreundlichkeit verbessern und Verwirrung sowohl bei Tastatur-only- als auch bei Screenreader-Nutzern reduzieren kann.
- [7. React-Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie zur Vertiefung Ihres Lernerlebnisses nutzen können.

## Ember-Tutorials

> [!NOTE]
> Ember-Tutorials zuletzt getestet im Mai 2020, mit Ember/Ember CLI Version 3.18.0.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Ember-App-Codes im [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Für eine laufende Live-Version siehe <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (dies schließt auch einige zusätzliche Funktionen ein, die im Tutorial nicht behandelt werden).

- [1. Einstieg in Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : In unserem ersten Ember-Artikel betrachten wir, wie Ember funktioniert und wofür es nützlich ist, installieren die Ember-Toolchain lokal, erstellen eine Beispiel-App, und führen dann einige anfängliche Setups durch, um es für die Entwicklung vorzubereiten.
- [2. Ember-App-Struktur und Komponentenbildung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In diesem Artikel legen wir direkt mit der Planung der Struktur unserer TodoMVC Ember-App los, fügen das HTML dafür hinzu und zerlegen dann diese HTML-Struktur in Komponenten.
- [3. Ember-Interaktivität: Ereignisse, Klassen und Zustand](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : An diesem Punkt beginnen wir, unserer App Interaktivität hinzuzufügen, indem wir die Möglichkeit schaffen, neue To-dos hinzuzufügen und anzuzeigen. Dabei werden wir uns ansehen, wie man Ereignisse in Ember verwendet, Komponentenklassen erstellt, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und einen Dienst einrichtet, um den Datenzustand unserer App zu verfolgen.
- [4. Ember Interaktivität: Fußzeilenfunktionalität, bedingte Darstellung](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Nun ist es an der Zeit, die Fußzeilenfunktionalität in unserer App anzugehen. Hier werden wir den To-do-Zähler aktualisieren, sodass er die korrekte Anzahl der noch zu erledigenden To-dos anzeigt und das Styling korrekt auf erledigte To-dos (d. h. bei denen das Kontrollkästchen aktiviert wurde) anwendet. Wir werden auch unseren „Abgeschlossen löschen“-Knopf anschließen. Dabei lernen wir, wie man in unseren Templates eine bedingte Darstellung verwendet.
- [5. Routing in Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : In diesem Artikel lernen wir über Routing oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir werden es verwenden, um eine eindeutige URL für jede der drei To-do-Ansichten - „Alle“, „Aktiv“ und „Abgeschlossen“ - bereitzustellen.
- [6. Ember-Ressourcen und Problemlösungen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie zur Vertiefung Ihres Lernens nutzen können, sowie einige nützliche Problemlösungen und weitere Informationen.

## Vue-Tutorials

> [!NOTE]
> Vue-Tutorial zuletzt getestet im Januar 2023, mit Vue 3.2.45.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

- [1. Einstieg in Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Lassen Sie uns nun Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel werden wir ein wenig über den Hintergrund von Vue erfahren, lernen, wie man es installiert und ein neues Projekt erstellt, die Struktur des gesamten Projekts und einer einzelnen Komponente untersuchen, sehen, wie man das Projekt lokal ausführt und es vorbereitet, um mit dem Aufbau unseres Beispiels zu beginnen.
- [2. Erstellen unserer ersten Vue-Komponente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Nun ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen damit, eine Komponente zu erstellen, die jedes Element in der To-do-Liste darstellt. Unterwegs lernen wir einige wichtige Konzepte kennen, wie z. B. Komponenten in anderen Komponenten aufzurufen, ihnen Daten über Props zu übergeben und Datenbestände zu speichern.
- [3. Rendern einer Liste von Vue-Komponenten](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : Zu diesem Zeitpunkt haben wir eine voll funktionsfähige Komponente; jetzt sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel sehen wir uns an, wie man eine Menge To-do-Elementdaten zu unserer `App.vue`-Komponente hinzufügt, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen werden.
- [4. Hinzufügen eines neuen To-do-Formulars: Vue-Ereignisse, Methoden und Modelle](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : Wir haben jetzt Beispieldaten und eine Schleife, die jedes Datenbit nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir wirklich als Nächstes benötigen, ist die Möglichkeit, unseren Benutzern das Hinzufügen ihrer eigenen To-do-Elemente in die App zu ermöglichen, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, um bei der Dateneingabe ausgelöst zu werden, eine Methode, die beim Übermitteln ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Auf diese Aspekte werden wir in diesem Artikel eingehen.
- [5. Styling von Vue-Komponenten mit CSS](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : Es ist endlich an der Zeit, unser App optisch etwas ansprechender zu gestalten. In diesem Artikel werden wir die verschiedenen Möglichkeiten zum Stylen von Vue-Komponenten mit CSS erkunden.
- [6. Verwendung von Vue-berechneten Eigenschaften](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen To-do-Elemente anzeigt, indem wir eine Funktion von Vue namens berechnete Eigenschaften verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.
- [7. Vue bedingte Darstellung: Bearbeiten bestehender To-dos](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Jetzt ist es an der Zeit, eine der Hauptfunktionen, die uns noch fehlen, hinzuzufügen - die Möglichkeit, bestehende To-do-Elemente zu bearbeiten. Dazu werden wir die bedingten Darstellungsfunktionen von Vue - nämlich `v-if` und `v-else` - nutzen, um zwischen der vorhandenen To-do-Elementansicht und einer Bearbeitungsansicht zu wechseln, in der Sie die Bezeichnungen der To-do-Elemente aktualisieren können. Wir werden uns auch ansehen, wie man die Funktionalität zum Löschen von To-do-Elementen hinzufügt.
- [8. Vue-Referenzen und Lebenszyklusmethoden für das Fokus-Management](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : Wir sind fast fertig mit Vue. Das letzte Stück Funktionalität, das wir betrachten, ist das Fokus-Management oder mit anderen Worten, wie wir die Tastatur-Benutzerfreundlichkeit unserer App verbessern können. Wir werden uns ansehen, wie man Vue-Referenzen dafür verwendet – eine fortgeschrittene Funktion, die Ihnen direkten Zugriff auf die darunterliegenden DOM-Knoten unterhalb des virtuellen DOMs oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente ermöglicht.
- [9. Vue-Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Nun schließen wir unsere Studie von Vue ab, indem wir Ihnen eine Liste von Ressourcen zur Verfügung stellen, die Sie verwenden können, um Ihre Lernerfahrung zu vertiefen, und einige weitere nützliche Tipps.

## Svelte-Tutorials

> [!NOTE]
> Svelte-Tutorials zuletzt getestet im August 2020, mit Svelte 3.24.1.
>
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Svelte-App-Codes, wie er nach jedem Artikel sein sollte, in unserem [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) Repo. Für eine laufende Live-Version siehe unser Svelte REPL unter <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [1. Einstieg in Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - : In diesem Artikel bieten wir eine schnelle Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher gesehen haben. Dann erfahren wir, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht und sieht, wie man sie lokal ausführt und für die Produktion baut.
- [2. Beginn unserer Svelte-To-do-Liste-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - : Da wir nun ein grundlegendes Verständnis davon haben, wie die Dinge in Svelte funktionieren, können wir beginnen, unsere Beispiel-App zu erstellen: eine To-do-Liste. In diesem Artikel schauen wir uns zunächst die gewünschte Funktionalität unserer App an, dann erstellen wir eine `Todos.svelte`-Komponente und fügen statisches Markup und Stile hinzu, um alles bereit zu halten, um mit der Entwicklung der Funktionen unserer To-do-Listen-App zu starten, auf die wir in den folgenden Artikeln eingehen werden.
- [3. Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - : Nun, da wir unser Markup und unsere Stile bereit haben, können wir damit beginnen, die erforderlichen Funktionen für unsere Svelte-To-do-Liste-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu machen, sodass wir To-dos hinzufügen und löschen, sie als erledigt markieren und sie nach Status filtern können.
- [4. Komponentenisierung unserer Svelte-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - : Das zentrale Ziel dieses Artikels ist es, zu untersuchen, wie unsere App in handhabbare Komponenten aufgeteilt und Informationen zwischen ihnen geteilt werden können. Wir werden unsere App in Komponenten unterteilen und dann mehr Funktionalitäten hinzufügen, um den Benutzern zu ermöglichen, bestehende Komponenten zu aktualisieren.
- [5. Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - : In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter in Komponenten unterteilen. Wir werden lernen, wie man mit Reaktivitätsproblemen im Zusammenhang mit dem Aktualisieren von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, werden wir etwas tiefer in das Reaktivitätssystem von Svelte eintauchen müssen. Wir werden uns auch mit der Lösung einiger Probleme im Zusammenhang mit der Fokus-Barrierefreiheit beschäftigen und mehr.
- [6. Arbeiten mit Svelte-Stores](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - : In diesem Artikel zeigen wir eine weitere Möglichkeit, das Zustandsmanagement in Svelte zu handhaben – [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Daten-Repositorien, die Werte speichern. Komponenten können sich auf Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.
- [7. TypeScript-Unterstützung in Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - : Wir werden nun lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie man unser Projekt konfiguriert, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die TypeScript-Funktionen voll auszuschöpfen.
- [8. Bereitstellung und nächste Schritte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  - : In diesem letzten Artikel schauen wir uns an, wie man Ihre Anwendung bereitstellt und online stellt und teilen auch einige der Ressourcen, zu denen Sie weitergehen sollten, um Ihre Svelte-Lernreise fortzusetzen.

## Angular-Tutorials

> [!NOTE]
> Angular-Tutorials zuletzt getestet im April 2021, mit Angular CLI (NG) 11.2.5.

- [1. Einstieg in Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - : In diesem Artikel schauen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und betrachten die grundlegende Architektur von Angular.
- [2. Beginn unserer Angular-To-do-Listen-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - : An diesem Punkt sind wir bereit, unsere To-do-Liste-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von To-do-Elementen anzeigen und enthält Funktionen zum Bearbeiten, Löschen und Hinzufügen. In diesem Artikel lernen Sie Ihre Anwendungsstruktur kennen und arbeiten daran, eine grundlegende Liste von To-do-Elementen anzuzeigen.
- [3. Styling unserer Angular-App](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - : Jetzt, da wir unsere grundlegende Anwendungsstruktur eingerichtet haben und begonnen haben, etwas Nützliches anzuzeigen, wechseln wir die Gänge und verbringen einen Artikel damit zu schauen, wie Angular das Styling von Anwendungen handhabt.
- [4. Erstellen einer Elementkomponente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - : Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, die die einzelnen Elemente in der Liste verwaltet, und das Hinzufügen von Prüf-, Bearbeitungs- und Löschfunktionen. Das Angular-Ereignismodell wird hier behandelt.
- [5. Filtern unserer To-do-Elemente](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - : Gehen wir nun weiter zur Hinzufügung von Funktionalität, die es Benutzern ermöglicht, ihre To-do-Elemente zu filtern, sodass sie aktive, erledigte oder alle Elemente anzeigen können.
- [6. Angular-Anwendungen erstellen und weitere Ressourcen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
  - : Dieser letzte Angular-Artikel behandelt, wie man eine App bereit für die Produktion erstellt und bietet Ihnen weitere Ressourcen, um Ihre Lernreise fortzusetzen.

## Welche Frameworks haben wir gewählt?

Wir veröffentlichen unser anfängliches Set von Artikeln mit Leitfäden, die sich auf fünf Frameworks konzentrieren. Vier von ihnen sind sehr beliebt und etabliert – React/ReactDOM, Ember, Vue und Angular – während Svelte ein vergleichsweise neuer Mitspieler ist, der viel Potenzial zeigt und in letzter Zeit stark an Popularität gewonnen hat.

Es gibt eine Vielzahl von Gründen dafür:

- Sie sind beliebte Wahlmöglichkeiten, die noch eine Weile bestehen werden – wie bei jedem Software-Tool ist es gut, an aktiv entwickelten Optionen festzuhalten, die wahrscheinlich nicht nächste Woche eingestellt werden, und die wünschenswerte Ergänzungen zu Ihrem Fähigkeiten-Set darstellen, wenn Sie auf Jobsuche sind.
- Sie haben starke Communitys und gute Dokumentation. Es ist sehr wichtig, in der Lage zu sein, Hilfe beim Erlernen eines komplexen Themas zu bekommen, insbesondere wenn man gerade erst anfängt.
- Wir haben nicht die Ressourcen, _alle_ modernen Frameworks abzudecken. Diese Liste wäre sowieso sehr schwierig auf dem neuesten Stand zu halten, da ständig neue erscheinen.
- Als Anfänger ist es ein sehr reales Problem, zu versuchen, aus der großen Anzahl an vorhandenen Optionen zu wählen, worauf man sich konzentrieren sollte. Daher ist es hilfreich, die Liste kurz zu halten.

Wir möchten dies im Voraus sagen — wir haben die Frameworks, auf die wir uns konzentrieren, **nicht** ausgewählt, weil wir denken, dass sie die besten sind oder weil wir sie in irgendeiner Weise unterstützen. Wir glauben nur, dass sie in den oben genannten Kriterien gut abschneiden.

Beachten Sie, dass wir hofften, beim ersten Erscheinen mehr Frameworks einzuschließen, uns aber dann entschieden haben, die Inhalte zu veröffentlichen und später mehr Framework-Leitfäden hinzuzufügen, anstatt sie länger zu verzögern. Wenn Ihr bevorzugtes Framework in diesen Inhalten nicht vertreten ist und Sie daran helfen möchten, dies zu ändern, zögern Sie nicht, [es mit uns zu besprechen](/de/docs/MDN/Community/Communication_channels)!
