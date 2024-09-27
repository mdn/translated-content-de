---
title: Zugänglichkeit
slug: Learn/Accessibility
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}

Es ist nützlich, etwas HTML, CSS und JavaScript zu lernen, wenn Sie Webentwickler werden möchten. Über die mechanische Nutzung hinaus ist es wichtig, zu lernen, wie man diese Technologien **verantwortungsbewusst** einsetzt, damit alle Leser Ihre Kreationen im Internet nutzen können. Um Ihnen dabei zu helfen, behandelt dieses Modul grundlegende Best Practices (die in den Themen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) demonstriert werden), [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) und einige Tipps zur Durchsetzung von Zugänglichkeit von Anfang an. Wir werden die Zugänglichkeit im Besonderen detailliert behandeln.

## Übersicht

Wenn jemand eine Website als "barrierefrei" beschreibt, bedeutet das, dass jeder Benutzer alle Funktionen und Inhalte nutzen kann, unabhängig davon, wie der Benutzer auf das Internet zugreift — und insbesondere auch Benutzer mit körperlichen oder geistigen Beeinträchtigungen.

- Websites sollten für Tastatur-, Maus- und Touchscreen-Nutzer sowie jede andere Art, wie Nutzer auf das Internet zugreifen, einschließlich Bildschirmlesegeräten und Sprachassistenten wie Alexa und Google Home, zugänglich sein.
- Anwendungen sollten unabhängig von auditiven, visuellen, körperlichen oder kognitiven Fähigkeiten verständlich und nutzbar sein.
- Websites sollten auch keinen Schaden verursachen: Webfunktionen wie Bewegung können Migräne oder epileptische Anfälle auslösen.

**HTML ist standardmäßig zugänglich, wenn es korrekt verwendet wird.** Barrierefreiheit im Web bedeutet sicherzustellen, dass Inhalte zugänglich bleiben, unabhängig davon, wer und wie auf das Internet zugegriffen wird.

Das Firefox Accessibility Inspector ist ein sehr nützliches Werkzeug, um Zugänglichkeitsprobleme auf Webseiten zu überprüfen. Das folgende Video bietet eine gute Einführung dazu:

{{EmbedYouTube("7mqqgIxX_NU")}}

## Voraussetzungen

Um das meiste aus diesem Modul herauszuholen, wäre es eine gute Idee, entweder mindestens die ersten beiden Module der Themen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) zu bearbeiten, oder sogar besser, die relevanten Teile des Zugänglichkeitsmoduls zu bearbeiten, während Sie die verwandten Technologiethemen durchgehen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Geräten arbeiten, auf denen Sie nicht die Möglichkeit haben, eigene Dateien zu erstellen, können Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Was ist Zugänglichkeit?](/de/docs/Learn/Accessibility/What_is_accessibility)
  - : Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Zugänglichkeit ist — dazu gehört, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen verwenden, um mit dem Internet zu interagieren, und wie wir Zugänglichkeit in unseren Webentwicklungsprozess integrieren können.
- [HTML: Eine gute Grundlage für Zugänglichkeit](/de/docs/Learn/Accessibility/HTML)
  - : Ein großer Teil des Webinhalts kann zugänglich gemacht werden, indem sichergestellt wird, dass die richtigen HTML-Elemente immer für den richtigen Zweck verwendet werden. Dieser Artikel betrachtet im Detail, wie HTML verwendet werden kann, um maximale Zugänglichkeit zu gewährleisten.
- [CSS- und JavaScript-Zugänglichkeitsbest-Praktiken](/de/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS und JavaScript haben, wenn sie richtig eingesetzt werden, auch das Potenzial, zugängliche Weberfahrungen zu ermöglichen. Wenn sie jedoch missbraucht werden, können sie der Zugänglichkeit erheblich schaden. Dieser Artikel skizziert einige CSS- und JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so zugänglich wie möglich sind.
- [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : Aufbauend auf dem vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie weitere Semantiken hinzufügt, die Browser und Hilfstechnologien erkennen und verwenden können, um Benutzern anzuzeigen, was vor sich geht. Hier zeigen wir auf einfache Weise, wie es zur Verbesserung der Zugänglichkeit genutzt werden kann.
- [Barrierefreie Multimedia](/de/docs/Learn/Accessibility/Multimedia)
  - : Eine weitere Kategorie von Inhalten, die Zugänglichkeitsprobleme verursachen können, ist Multimedia — Video-, Audio- und Bildinhalte müssen geeignete textliche Alternativen erhalten, damit sie von Hilfstechnologien und ihren Benutzern verstanden werden können. Dieser Artikel zeigt, wie das gemacht wird.
- [Mobile Zugänglichkeit](/de/docs/Learn/Accessibility/Mobile)
  - : Da der Webzugang auf mobilen Geräten so beliebt ist und Plattformen wie iOS und Android vollständig entwickelte Zugänglichkeitstools besitzen, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt mobile spezifische Zugänglichkeitsüberlegungen.

## Bewertungen

- [Fehlerbehebung bei der Zugänglichkeit](/de/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : In der Bewertung für dieses Modul präsentieren wir Ihnen eine einfache Website mit mehreren Zugänglichkeitsproblemen, die Sie diagnostizieren und beheben müssen.

## Siehe auch

- [Learn Accessible Web Design](https://v2.scrimba.com/learn-accessible-web-design-c031?via=mdn) <sup>_MDN Curriculum Partner_</sup>
  - : Der Kurs _Learn Accessible Web Design_ von [Scrimba](https://scrimba.com?via=mdn) lehrt Ihnen, wie man zugängliches HTML schreibt, indem Sie interaktive Coding-Herausforderungen lösen und eine reale Website reparieren.
- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today)
  - : Eine ausgezeichnete Reihe von Video-Tutorials von Marcy Sutton.
- [Deque University Ressourcen](https://dequeuniversity.com/resources/)
  - : Enthält Codebeispiele, Bildschirmleser-Referenzen und andere nützliche Ressourcen.
- [WebAIM Ressourcen](https://webaim.org/resources/)
  - : Enthält Leitfäden, Checklisten, Tools und mehr.
- [Liste der Webzugänglichkeits-Bewertungstools](https://www.w3.org/WAI/ER/tools/)
  - : Enthält eine Liste von Webzugänglichkeits-Bewertungstools.
