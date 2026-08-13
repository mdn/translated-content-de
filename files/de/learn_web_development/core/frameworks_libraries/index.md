---
title: JavaScript-Frameworks und -Bibliotheken
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 238b07dfeb8c347c590bd02a63140867525d511c
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript-Frameworks sind ein wesentlicher Bestandteil der modernen Frontend-Webentwicklung und bieten Entwicklern bewährte Werkzeuge zum Erstellen skalierbarer, interaktiver Webanwendungen. Viele moderne Unternehmen nutzen Frameworks als Standard in ihrer Tool-Palette, sodass in vielen Frontend-Entwicklerjobs mittlerweile Erfahrung mit Frameworks erforderlich ist. Diese Artikelsammlung bietet einen angenehmen Ausgangspunkt, um Ihnen den Einstieg in das Lernen von Frameworks zu erleichtern.

Als angehender Frontend-Entwickler kann es schwierig sein, herauszufinden, wo man beim Lernen von Frameworks beginnen sollte – es gibt so viele zur Auswahl, ständig tauchen neue auf, sie funktionieren größtenteils ähnlich, aber in einigen Punkten unterschiedlich, und es gibt einige spezifische Dinge, auf die Sie beim Verwenden von Frameworks achten sollten.

Unser Ziel ist nicht, Ihnen alles beizubringen, was Sie über React/ReactDOM oder irgendein anderes spezielles Framework wissen müssen; die Dokumentationen der Framework-Teams (und andere Ressourcen) übernehmen bereits diese Aufgabe. Stattdessen möchten wir zunächst grundlegendere Fragen beantworten, wie beispielsweise:

- Warum sollte ich ein Framework verwenden? Welche Probleme lösen sie für mich?
- Welche Fragen sollte ich stellen, wenn ich versuche, ein Framework auszuwählen? Brauche ich überhaupt ein Framework?
- Welche Funktionen haben Frameworks? Wie funktionieren sie allgemein, und wie unterscheiden sich die Implementierungen dieser Funktionen zwischen den Frameworks?
- Wie stehen sie im Verhältnis zu „vanilla“ JavaScript oder HTML?

Danach bieten wir einige Tutorials, die die Grundlagen von React, einer beliebten Framework-Wahl, abdecken, um Ihnen ausreichend Kontext und Vertrautheit zu geben, damit Sie sich selbst tiefer einarbeiten können. Wir möchten, dass Sie auf pragmatische Weise über Frameworks lernen und dabei grundlegende Best Practices der Webplattform, wie Barrierefreiheit, nicht vergessen.

> [!NOTE]
> Scrimbas interaktives Tutorial [Libraries/Frameworks](https://scrimba.com/learn-react-c0e/~033a?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche Zusammenfassung von Frameworks gegenüber Bibliotheken, eine kurze Geschichte der Bibliotheken und Frameworks im Web und Hintergrundinformationen speziell zu React.

## Voraussetzungen

Sie sollten wirklich die Grundlagen der Kern-Websprachen lernen, bevor Sie anfangen, clientseitige Frameworks zu erlernen — [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und besonders [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Ihr Code wird dadurch reichhaltiger und professioneller sein, und Sie werden Probleme mit mehr Selbstvertrauen beheben können, wenn Sie die grundlegenden Funktionen der Webplattform verstehen, auf denen die Frameworks aufbauen.

## Einführende Tutorials

- [Einführung in clientseitige Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, betrachten eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, darüber nachzudenken, ein Framework zu lernen, und welche Alternativen es zu clientseitigen Frameworks gibt.
- [Hauptmerkmale von Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Jedes größere JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browser-Ereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks untersuchen und betrachten, wie Frameworks auf hoher Ebene funktionieren und welche Unterschiede es zwischen ihnen gibt.

## React-Tutorials

> [!NOTE]
> React-Tutorials zuletzt getestet im Januar 2023, mit React/ReactDOM 18.2.0 und create-react-app 5.0.1.
>
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

- [Erste Schritte mit React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In diesem Artikel werden wir React kennenlernen. Wir werden ein wenig über seinen Hintergrund und Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit spielen, um etwas darüber zu lernen, wie React funktioniert.
- [Beginn unserer React-ToDo-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Nehmen wir an, wir wurden beauftragt, einen Proof-of-Concept in React zu erstellen - eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und Aufgaben als abgeschlossen zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch das Erstellen der grundlegenden `App`-Komponentenstruktur und -Stil, bereit für die Definition und Interaktivität individueller Komponenten, die wir später hinzufügen werden.
- [Komponentisierung unserer React-App](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktional machen können, müssen wir sie in handhabbare, beschreibende Komponenten aufteilen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten aufzuteilen.
- [React-Interaktivität: Ereignisse und Status](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Nachdem unser Komponentenplan fertiggestellt ist, ist es an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche in eine zu verwandeln, die tatsächlich interaktiv ist und Änderungen erlaubt. In diesem Artikel werden wir dies tun und dabei in Ereignisse und Status eintauchen.
- [React-Interaktivität: Bearbeitung, Filterung, bedingtes Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), werden wir den letzten Schliff an den Hauptfunktionen unserer To-Do-Listen-App anbringen. Dies beinhaltet das Bearbeiten bestehender Aufgaben und das Filtern der Aufgabenliste zwischen allen, erledigten und unerledigten Aufgaben. Wir werden dabei auch bedingtes UI-Rendering betrachten.
- [Barrierefreiheit in React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In unserem letzten Tutorial-Artikel werden wir uns auf Barrierefreiheit konzentrieren, einschließlich des Fokusmanagements in React, das die Benutzerfreundlichkeit für Tastaturbenutzer und Bildschirmleser verbessern und Verwirrung reduzieren kann.
- [React-Ressourcen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen zu vertiefen.

## Andere Framework-Optionen

Wenn Sie nicht mit React beginnen möchten, Frameworks zu lernen, steht es Ihnen frei, eine andere Wahl zu treffen.

Wir empfehlen, sich die folgenden Alternativen anzusehen:

- [Angular](https://angular.dev/): Beginnen Sie mit dem [Angular-Tutorial](https://angular.dev/tutorials/learn-angular).
- [Ember](https://emberjs.com/): Beginnen Sie mit den [Learning Ember.js-Dokumenten](https://emberjs.com/learn/).
- [Svelte](https://svelte.dev/): Beginnen Sie mit dem [Svelte-Tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte).
- [Vue](https://vuejs.org/): Beginnen Sie mit dem [Vue Quick Start](https://vuejs.org/guide/quick-start.html).

Wir möchten dies vorab sagen – wir haben die zuvor genannten Frameworks **nicht** ausgewählt, weil wir denken, dass sie die besten sind oder weil wir sie in irgendeiner Weise befürworten. Wir denken einfach, dass sie hoch in den folgenden Kriterien abschneiden, die berücksichtig werden sollten, wenn Sie anfangen, Zeit in das Erlernen neuer Software zu investieren:

- Sie sind gut unterstützt und werden eine Weile bestehen bleiben: Wie bei jedem Software-Tool ist es gut, sich an aktiv entwickelte Optionen zu halten, die wahrscheinlich nicht nächste Woche eingestellt werden und die eine wünschenswerte Ergänzung zu Ihrem Fähigkeitenportfolio beim Jobsuchen darstellen.
- Sie haben starke Gemeinschaften und gute Dokumentationen: Es ist sehr wichtig, Hilfe beim Erlernen eines komplexen Themas zu erhalten, insbesondere wenn Sie gerade erst anfangen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
