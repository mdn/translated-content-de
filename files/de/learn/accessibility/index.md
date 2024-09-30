---
title: Accessibility
slug: Learn/Accessibility
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}

Einige HTML-, CSS- und JavaScript-Kenntnisse sind nützlich, wenn Sie Webentwickler werden möchten. Über die mechanische Nutzung hinaus ist es wichtig, zu lernen, wie man diese Technologien **verantwortlich** einsetzt, sodass alle Leser Ihre Kreationen im Internet nutzen können. Um Ihnen dabei zu helfen, behandelt dieses Modul allgemeine Best Practices (die im ganzen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) Themen demonstriert werden), [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) und einige Tipps zur Durchsetzung von Barrierefreiheit von Anfang an. Wir werden die Barrierefreiheit im Besonderen detailliert behandeln.

## Überblick

Wenn jemand eine Website als "zugänglich" beschreibt, bedeutet das, dass jeder Benutzer alle Funktionen und Inhalte nutzen kann, unabhängig davon, wie er auf das Internet zugreift – einschließlich und insbesondere Benutzer mit körperlichen oder geistigen Beeinträchtigungen.

- Webseiten sollten für Tastatur-, Maus- und Touchscreen-Nutzer sowie jede andere Weise, wie Benutzer auf das Internet zugreifen, einschließlich Screenreadern und Sprachassistenten wie Alexa und Google Home, zugänglich sein.
- Anwendungen sollten verständlich und nutzbar für Menschen unabhängig von auditiven, visuellen, physischen oder kognitiven Fähigkeiten sein.
- Webseiten sollten auch keinen Schaden verursachen: Web-Funktionen wie Bewegung können Migräne oder epileptische Anfälle auslösen.

**HTML ist standardmäßig zugänglich, wenn es korrekt verwendet wird.** Web-Barrierefreiheit bedeutet, dass sichergestellt wird, dass Inhalte zugänglich bleiben, unabhängig davon, wer und wie auf das Web zugegriffen wird.

Der Firefox Accessibility Inspector ist ein sehr nützliches Tool, um Barrierefreiheitsprobleme auf Webseiten zu überprüfen. Das folgende Video bietet eine schöne Einführung dazu:

{{EmbedYouTube("7mqqgIxX_NU")}}

## Voraussetzungen

Um das Beste aus diesem Modul herauszuholen, wäre es vorteilhaft, entweder mindestens die ersten beiden Module der [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) Themen zu bearbeiten oder, noch besser, die relevanten Teile des Barrierefreiheitsmoduls durchzuarbeiten, während Sie die dazugehörigen Technologie-Themen durchgehen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Geräten arbeiten, auf denen Sie nicht die Möglichkeit haben, Ihre eigenen Dateien zu erstellen, können Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility)
  - : Dieser Artikel beginnt das Modul mit einem guten Einblick, was Barrierefreiheit ist — dazu gehört, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungsworkflow integrieren können.
- [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML)
  - : Ein Großteil der Webinhalte kann barrierefrei gemacht werden, indem einfach sichergestellt wird, dass die richtigen HTML-Elemente immer für den richtigen Zweck verwendet werden. Dieser Artikel betrachtet im Detail, wie HTML eingesetzt werden kann, um maximale Barrierefreiheit zu gewährleisten.
- [CSS- und JavaScript-Barrierefreiheitsbest Practices](/de/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS und JavaScript können, wenn sie richtig eingesetzt werden, auch dazu beitragen, barrierefreie Web-Erlebnisse zu ermöglichen, aber wenn sie missbraucht werden, können sie die Barrierefreiheit erheblich beeinträchtigen. In diesem Artikel werden einige CSS- und JavaScript-Best-Practices beschrieben, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so barrierefrei wie möglich sind.
- [WAI-ARIA-Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : Aufbauend auf dem vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamische JavaScript-aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem es zusätzliche Semantik hinzufügt, die Browser und unterstützende Technologien erkennen und nutzen können, um Benutzer wissen zu lassen, was vor sich geht. Hier zeigen wir, wie es auf einem grundlegenden Niveau verwendet werden kann, um die Barrierefreiheit zu verbessern.
- [Barrierefreies Multimedia](/de/docs/Learn/Accessibility/Multimedia)
  - : Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia — Video-, Audio- und Bildinhalte müssen mit richtigen Textalternativen versehen werden, sodass sie von unterstützenden Technologien und ihren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.
- [Mobile Barrierefreiheit](/de/docs/Learn/Accessibility/Mobile)
  - : Da der Zugriff auf das Internet über mobile Geräte so populär ist und beliebte Plattformen wie iOS und Android vollwertige Barrierefreiheitswerkzeuge besitzen, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobile-spezifische Barrierefreiheitsüberlegungen.

## Bewertungen

- [Behebung von Barrierefreiheitsproblemen](/de/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : In der Bewertung für dieses Modul präsentieren wir Ihnen eine einfache Website mit mehreren Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Siehe auch

- [Lernen Sie zugängliches Webdesign](https://v2.scrimba.com/learn-accessible-web-design-c031?via=mdn) <sup>_MDN Curriculum Partner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) Kurs _Lernen Sie zugängliches Webdesign_ lehrt Ihnen, wie Sie zugängliches HTML schreiben, indem Sie interaktive Coding-Herausforderungen lösen und eine reale Website reparieren.
- [Beginnen Sie heute mit dem Aufbau barrierefreier Webanwendungen](https://egghead.io/courses/start-building-accessible-web-applications-today)
  - : Eine hervorragende Videotutorial-Serie von Marcy Sutton.
- [Deque University Ressourcen](https://dequeuniversity.com/resources/)
  - : Beinhaltet Code-Beispiele, Screenreader-Referenzen und andere nützliche Ressourcen.
- [WebAIM Ressourcen](https://webaim.org/resources/)
  - : Beinhaltet Leitfäden, Checklisten, Werkzeuge und mehr.
- [Liste der Werkzeuge zur Bewertung der Web-Barrierefreiheit](https://www.w3.org/WAI/ER/tools/)
  - : Beinhaltet eine Liste von Werkzeugen zur Bewertung der Web-Barrierefreiheit.
