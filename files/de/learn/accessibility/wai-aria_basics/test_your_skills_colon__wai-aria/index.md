---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
slug: Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{learnsidebar}}

Ziel dieses Fertigkeitstests ist es zu überprüfen, ob Sie unseren Artikel zu den [Grundlagen von WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt mit nicht-semantischem Markup, der offensichtlich als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es Nutzern von Screenreadern ermöglichen, diese als Liste zu erkennen?

Versuchen Sie den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## WAI-ARIA 2

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular und möchten, dass Sie ein paar WAI-ARIA-Features hinzufügen, um dessen Zugänglichkeit zu verbessern:

1. Wie können Sie es Nutzern von Screenreadern ermöglichen, das Suchformular als separates Landmark auf der Seite zu erkennen, damit es leicht auffindbar ist?
2. Wie können Sie dem Sucheingabefeld ein geeignetes Label geben, ohne explizit ein sichtbares Textlabel im DOM hinzuzufügen?

Versuchen Sie den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## WAI-ARIA 3

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS- und JavaScript-Fertigkeitstest](/de/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility) gesehen haben. Wie zuvor haben wir eine einfache App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung dieses Tieres in einem Feld unterhalb der Liste. Hier beginnen wir mit einer Version, die mit Maus und Tastatur zugänglich ist.

Das Problem, das wir jetzt haben, ist, dass Screenreader nicht erkennen können, was sich geändert hat, wenn sich das DOM ändert, um eine neue Beschreibung anzuzeigen. Können Sie es so aktualisieren, dass Änderungen in der Beschreibung vom Screenreader angesagt werden?

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
