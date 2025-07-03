---
title: "Testen Sie Ihre Fähigkeiten: CSS- und JavaScript-Zugänglichkeit"
short-title: CSS und JavaScript
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie unseren Artikel [CSS and JavaScript accessibility best practices](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich an uns über eines unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## CSS Zugänglichkeit 1

In der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Ihre Zugänglichkeit ist jedoch ziemlich schlecht — es gibt keine Möglichkeit zu erkennen, dass es sich um Links handelt, oder zu erkennen, auf welchen Link der Benutzer fokussiert ist.

Wir möchten, dass Sie davon ausgehen, dass das vorhandene Regelset mit dem `a` Selektor von einem CMS bereitgestellt wird und dass Sie es nicht ändern können — stattdessen müssen Sie neue Regeln erstellen, um die Links wie Links aussehen zu lassen und zu ermöglichen, dass der Benutzer erkennen kann, wo er sich in der Liste befindet.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## CSS Zugänglichkeit 2

In der nächsten Aufgabe wird Ihnen ein einfaches Stück Inhalt präsentiert — nur Überschriften und Absätze. Es gibt Zugänglichkeitsprobleme mit den Farben und der Größe des Textes; wir möchten, dass Sie:

1. Erklären, was die Probleme sind und welche Richtlinien akzeptable Werte für Farbe und Größe angeben.
2. Neue Werte für Farbe und Schriftgröße auswählen, die das Problem beheben.
3. Das CSS mit diesen neuen Werten aktualisieren, um das Problem zu beheben.
4. Den Code testen, um sicherzustellen, dass das Problem jetzt behoben ist. Erklären, welche Werkzeuge oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## JavaScript Zugänglichkeit 1

In unserer letzten Aufgabe hier haben Sie einige JavaScript-Aufgaben zu erledigen. Wir haben eine App, die eine Liste von Tiernamen präsentiert. Ein Klick auf einen der Tiernamen führt dazu, dass eine Beschreibung dieses Tieres in einem Kasten unterhalb der Liste erscheint.

Aber sie ist nicht sehr zugänglich — im aktuellen Zustand kann sie nur mit der Maus bedient werden. Wir möchten, dass Sie HTML und JavaScript ergänzen, um sie auch über die Tastatur zugänglich zu machen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
