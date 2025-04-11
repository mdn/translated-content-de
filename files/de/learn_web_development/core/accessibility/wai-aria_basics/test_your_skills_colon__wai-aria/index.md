---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Tests ist es, zu beurteilen, ob Sie unseren Artikel zu den [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt mit nicht-semantischem Markup, der offensichtlich als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es Benutzern von Screenreadern ermöglichen, dies als Liste zu erkennen?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## WAI-ARIA 2

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular, und wir möchten, dass Sie ein paar WAI-ARIA-Features hinzufügen, um dessen Zugänglichkeit zu verbessern:

1. Wie können Sie das Suchformular von Screenreadern als eigenständiges Landmark auf der Seite benannt lassen, damit es leicht auffindbar ist?
2. Wie können Sie dem Suchfeld ein geeignetes Label geben, ohne explizit ein sichtbares Textlabel zum DOM hinzuzufügen?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## WAI-ARIA 3

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS- und JavaScript-Fähigkeiten-Test](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility) gesehen haben. Wie zuvor haben wir eine App, die eine Liste von Tiernamen zeigt. Das Anklicken eines der Tiernamen führt dazu, dass eine weitere Beschreibung dieses Tieres in einem Feld unterhalb der Liste erscheint. Hier beginnen wir mit einer maus- und tastaturzugänglichen Version.

Das Problem, das wir jetzt haben, ist, dass Screenreader nicht erkennen können, was sich verändert hat, wenn sich das DOM so ändert, dass eine neue Beschreibung angezeigt wird. Können Sie es so aktualisieren, dass Änderungen der Beschreibung vom Screenreader angekündigt werden?

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
