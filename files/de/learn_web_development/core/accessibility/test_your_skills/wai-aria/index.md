---
title: "Testen Sie Ihr Können: WAI-ARIA"
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Tests ist es, zu beurteilen, ob Sie unseren Artikel zu den [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt mit nicht-semantischem Markup, das offensichtlich als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es Bildschirmleser-Nutzern ermöglichen, dies als Liste zu erkennen?

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## WAI-ARIA 2

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular, und wir möchten, dass Sie ein paar WAI-ARIA-Funktionen hinzufügen, um dessen Zugänglichkeit zu verbessern:

1. Wie können Sie erreichen, dass das Suchformular von Bildschirmlesern als separates Landmark auf der Seite aufgerufen wird, um es leicht auffindbar zu machen?
2. Wie können Sie dem Suchfeld ein geeignetes Label geben, ohne explizit ein sichtbares Textlabel zum DOM hinzuzufügen?

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## WAI-ARIA 3

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir bereits im [CSS- und JavaScript-Test](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben.
Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung dieses Tieres in einem Kasten unter der Liste. Hier starten wir mit einer Maus- und Tastatur-kompatiblen Version.

Das Problem, das wir jetzt haben, ist, dass Bildschirmleser nicht erkennen können, was sich geändert hat, wenn das DOM eine neue Beschreibung anzeigt. Können Sie es so aktualisieren, dass Änderungen der Beschreibung vom Bildschirmleser angekündigt werden?

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
