---
title: Barrierefreiheit
slug: Learn/Accessibility
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}

Es ist nützlich, etwas HTML, CSS und JavaScript zu lernen, wenn Sie Webentwickler werden möchten. Über den mechanischen Gebrauch hinaus ist es wichtig zu lernen, wie man diese Technologien **verantwortungsbewusst** einsetzt, damit alle Nutzer Ihre Kreationen im Web nutzen können. Um Ihnen dabei zu helfen, wird dieses Modul allgemeine Best Practices abdecken (die in den Themen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) demonstriert werden), [Cross-Browser-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) und einige Tipps zur Durchsetzung von Barrierefreiheit von Anfang an. Wir werden Barrierefreiheit im Detail behandeln.

## Überblick

Wenn jemand eine Website als "zugänglich" beschreibt, bedeutet das, dass alle Benutzer alle Funktionen und Inhalte nutzen können, unabhängig davon, wie der Benutzer auf das Internet zugreift — insbesondere auch Benutzer mit körperlichen oder geistigen Beeinträchtigungen.

- Websites sollten für Tastatur-, Maus- und Touchscreen-Nutzer zugänglich sein und für jede andere Art, wie Benutzer auf das Web zugreifen, einschließlich Screenreader und Sprachassistenten wie Alexa und Google Home.
- Anwendungen sollten von Menschen unabhängig von auditiven, visuellen, physischen oder kognitiven Fähigkeiten verstanden und genutzt werden können.
- Websites sollten auch keinen Schaden verursachen: Web-Funktionen wie Bewegung können Migräne oder epileptische Anfälle auslösen.

**Standardmäßig ist HTML, wenn es korrekt verwendet wird, zugänglich.** Web-Barrierefreiheit beinhaltet, sicherzustellen, dass Inhalte zugänglich bleiben, unabhängig davon, wer und wie auf das Web zugegriffen wird.

Der Firefox Accessibility Inspector ist ein sehr nützliches Werkzeug, um Barrierefreiheitsprobleme auf Webseiten zu prüfen. Das folgende Video bietet eine schöne Einführung:

{{EmbedYouTube("7mqqgIxX_NU")}}

## Voraussetzungen

Um das Beste aus diesem Modul herauszuholen, wäre es eine gute Idee, mindestens die ersten zwei Module der Themen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) durchzuarbeiten oder vielleicht noch besser, die relevanten Teile des Barrierefreiheitsmoduls durchzugehen, während Sie die verwandten Technologiethemen bearbeiten.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Geräten arbeiten, wo Sie keine eigenen Dateien erstellen können, können Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility)
  - : Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist — dazu gehört, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungsworkflow integrieren können.
- [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML)
  - : Ein großer Teil der Webinhalte kann zugänglich gemacht werden, indem sichergestellt wird, dass die richtigen HTML-Elemente immer für den richtigen Zweck verwendet werden. Dieser Artikel befasst sich im Detail damit, wie HTML verwendet werden kann, um maximale Barrierefreiheit zu gewährleisten.
- [Beste Praktiken für CSS und JavaScript in Bezug auf Barrierefreiheit](/de/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS und JavaScript, richtig verwendet, haben auch das Potenzial, barrierefreie Web-Erfahrungen zu ermöglichen, aber wenn sie missbräuchlich verwendet werden, können sie die Barrierefreiheit erheblich beeinträchtigen. Dieser Artikel skizziert einige CSS- und JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.
- [Grundlagen von WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : Aufbauend auf dem vorherigen Artikel, kann es manchmal schwierig sein, komplexe UI-Kontrollen zu erstellen, die semantikfreies HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die von Browsern und unterstützenden Technologien erkannt und verwendet werden kann, um Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie man sie auf einer grundlegenden Ebene verwenden kann, um die Barrierefreiheit zu verbessern.
- [Zugängliche Multimediainhalte](/de/docs/Learn/Accessibility/Multimedia)
  - : Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen können, ist Multimedia — Video-, Audio- und Bildinhalte müssen mit geeigneten textlichen Alternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.
- [Mobile Barrierefreiheit](/de/docs/Learn/Accessibility/Mobile)
  - : Da der Zugriff auf das Internet über mobile Geräte so beliebt ist und beliebte Plattformen wie iOS und Android vollwertige Barrierefreiheitswerkzeuge haben, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt mobile spezifische Barrierefreiheitsüberlegungen.

## Bewertungen

- [Fehlerbehebung bei Barrierefreiheit](/de/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : In der Bewertung für dieses Modul präsentieren wir Ihnen eine einfache Website mit mehreren Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Siehe auch

- [Learn Accessible Web Design](https://v2.scrimba.com/learn-accessible-web-design-c031?via=mdn) <sup>_MDN Curriculum-Partner_</sup>
  - : Der Kurs _Learn Accessible Web Design_ von [Scrimba](https://scrimba.com?via=mdn) lehrt Sie, wie man zugängliches HTML schreibt, indem Sie interaktive Programmieraufgaben lösen und eine reale Website reparieren.
- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today)
  - : Eine ausgezeichnete Serie von Video-Tutorials von Marcy Sutton.
- [Ressourcen der Deque University](https://dequeuniversity.com/resources/)
  - : Beinhaltet Codebeispiele, Screenreader-Referenzen und andere nützliche Ressourcen.
- [Ressourcen von WebAIM](https://webaim.org/resources/)
  - : Beinhaltet Leitfäden, Checklisten, Werkzeuge und mehr.
- [Liste der Web-Barrierefreiheit-Bewertungswerkzeuge](https://www.w3.org/WAI/ER/tools/)
  - : Beinhaltet eine Liste von Web-Barrierefreiheit-Bewertungswerkzeugen.
