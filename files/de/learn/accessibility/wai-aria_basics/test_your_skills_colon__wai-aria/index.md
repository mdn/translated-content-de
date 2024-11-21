---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
slug: Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [WAI-ARIA-Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie feststecken, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt mit nicht-semantischem Markup, der offensichtlich als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es Benutzern von Screenreadern ermöglichen, dies als Liste zu erkennen?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## WAI-ARIA 2

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular und möchten, dass Sie ein paar WAI-ARIA-Features hinzufügen, um die Zugänglichkeit zu verbessern:

1. Wie können Sie es ermöglichen, dass das Suchformular von Screenreadern als eigenständiges Landmark auf der Seite aufgerufen wird, um es leicht auffindbar zu machen?
2. Wie können Sie dem Sucheingabefeld ein geeignetes Label geben, ohne explizit ein sichtbares Text-Label zum DOM hinzuzufügen?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## WAI-ARIA 3

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS- und JavaScript-Fähigkeitstest](/de/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility) gesehen haben. Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Das Klicken auf einen der Tiernamen führt dazu, dass eine weitere Beschreibung dieses Tieres in einem Feld unterhalb der Liste erscheint. Hier beginnen wir mit einer version, die sowohl per Maus als auch Tastatur zugänglich ist.

Das Problem, das wir jetzt haben, ist, dass, wenn sich das DOM ändert, um eine neue Beschreibung anzuzeigen, Screenreader nicht erkennen können, was sich geändert hat. Können Sie es so aktualisieren, dass Änderungen der Beschreibung vom Screenreader angekündigt werden?

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
