---
title: Barrierefreiheit
slug: Learn/Accessibility
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

Grundkenntnisse in HTML, CSS und JavaScript sind nützlich, wenn Sie Webentwickler werden möchten. Über den mechanischen Gebrauch hinaus ist es wichtig, zu lernen, wie man diese Technologien **verantwortungsbewusst** einsetzt, damit alle Leser Ihre Kreationen im Web nutzen können. Um Ihnen dabei zu helfen, behandelt dieses Modul allgemeine Best Practices (die in den Themen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) demonstriert werden), [cross browser testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) und einige Tipps zur Durchsetzung der Barrierefreiheit von Anfang an. Wir werden uns mit dem Thema Barrierefreiheit im Detail befassen.

## Überblick

Wenn jemand eine Website als "zugänglich" beschreibt, bedeutet das, dass jeder Nutzer alle Funktionen und Inhalte nutzen kann, unabhängig davon, wie er auf das Internet zugreift – insbesondere auch Nutzer mit körperlichen oder geistigen Beeinträchtigungen.

- Websites sollten zugänglich für Tastatur-, Maus- und Touchscreen-Nutzer sein und auf jede andere Art und Weise, wie Nutzer auf das Internet zugreifen, einschließlich Bildschirmleser und Sprachassistenten wie Alexa und Google Home.
- Anwendungen sollten verständlich und nutzbar sein, unabhängig von auditiven, visuellen, körperlichen oder kognitiven Fähigkeiten der Menschen.
- Websites sollten auch keinen Schaden verursachen: Web-Eigenschaften wie Bewegung können Migräne oder epileptische Anfälle auslösen.

**Standardmäßig ist HTML barrierefrei, wenn es korrekt verwendet wird.** Web-Barrierefreiheit bedeutet, sicherzustellen, dass Inhalte zugänglich bleiben, unabhängig davon, wer und wie auf das Internet zugegriffen wird.

Der Firefox Accessibility Inspector ist ein sehr nützliches Tool, um Barrierefreiheitsprobleme auf Webseiten zu überprüfen. Das folgende Video bietet eine gute Einführung dazu:

{{EmbedYouTube("7mqqgIxX_NU")}}

## Voraussetzungen

Um das Beste aus diesem Modul herauszuholen, wäre es eine gute Idee, entweder zumindest die ersten beiden Module der Themen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) durchzuarbeiten oder vielleicht noch besser, parallel die relevanten Teile des Barrierefreiheitsmoduls zu den entsprechenden Technologiethemen zu erarbeiten.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie nicht die Möglichkeit haben, eigene Dateien zu erstellen, können Sie die meisten der Code-Beispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility)
  - : Dieser Artikel beginnt das Modul mit einem guten Einblick in das, was Barrierefreiheit ist — dazu gehört, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Internet zu interagieren, und wie wir Barrierefreiheit in unseren Entwicklungsprozess einbeziehen können.
- [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML)
  - : Ein Großteil der Web-Inhalte kann durch die korrekte Verwendung der HTML-Elemente zugänglich gemacht werden. Dieser Artikel beleuchtet im Detail, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.
- [CSS- und JavaScript-Best Practices für Barrierefreiheit](/de/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS und JavaScript haben, wenn sie richtig eingesetzt werden, das Potenzial, barrierefreie Web-Erlebnisse zu ermöglichen, aber bei falscher Anwendung können sie die Barrierefreiheit erheblich beeinträchtigen. Dieser Artikel skizziert einige CSS- und JavaScript-Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.
- [Grundlagen von WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : Aufbauend auf dem vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerungen, die nicht-semantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten, zu erstellen. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und genutzt werden kann, um Benutzern mitzuteilen, was passiert. Hier zeigen wir, wie man es auf grundlegender Ebene nutzt, um die Barrierefreiheit zu verbessern.
- [Zugängliche Multimedia-Inhalte](/de/docs/Learn/Accessibility/Multimedia)
  - : Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, sind Multimedia-Inhalte — Video-, Audio- und Bildinhalte müssen angemessene textliche Alternativen erhalten, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.
- [Mobile Barrierefreiheit](/de/docs/Learn/Accessibility/Mobile)
  - : Da der Zugriff auf das Internet über mobile Geräte so populär ist und beliebte Plattformen wie iOS und Android vollwertige Barrierefreiheitswerkzeuge bieten, ist es wichtig, die Barrierefreiheit Ihrer Web-Inhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel beleuchtet mobile spezifische Aspekte der Barrierefreiheit.

## Bewertungen

- [Troubleshooting der Barrierefreiheit](/de/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : In der Bewertung für dieses Modul präsentieren wir Ihnen eine einfache Website mit mehreren Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Siehe auch

- [Learn Accessible Web Design](https://v2.scrimba.com/learn-accessible-web-design-c031?via=mdn) <sup>_MDN Curriculum partner_</sup>
  - : Der Kurs _Learn Accessible Web Design_ von [Scrimba](https://scrimba.com?via=mdn) lehrt, wie man zugängliches HTML schreibt, indem man interaktive Codierherausforderungen löst und eine reale Website verbessert.
- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today)
  - : Eine ausgezeichnete Serie von Video-Tutorials von Marcy Sutton.
- [Deque University-Ressourcen](https://dequeuniversity.com/resources/)
  - : Beinhaltet Codebeispiele, Bildschirmleserreferenzen und andere nützliche Ressourcen.
- [WebAIM-Ressourcen](https://webaim.org/resources/)
  - : Beinhaltet Leitfäden, Checklisten, Tools und mehr.
- [Liste der Werkzeuge zur Evaluierung der Web-Barrierefreiheit](https://www.w3.org/WAI/ER/tools/)
  - : Beinhaltet eine Liste der Evaluierungswerkzeuge für die Barrierefreiheit im Web.
