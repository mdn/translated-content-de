---
title: "Testen Sie Ihre Fähigkeiten: CSS- und JavaScript-Zugänglichkeit"
short-title: CSS und JavaScript
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 93f54b6e1fdfef1375233abb265f101bd6866f99
---

Das Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie unseren Artikel über die [CSS- und JavaScript-Zugänglichkeitsbest Practices](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über eine unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## CSS-Zugänglichkeit 1

In der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Deren Zugänglichkeit ist jedoch ziemlich schlecht – es gibt keine Möglichkeit zu erkennen, dass es sich um Links handelt, oder zu sagen, welche gerade fokussiert ist.

Wir möchten, dass Sie annehmen, dass das bestehende Regelwerk mit dem `a`-Selektor von einem CMS bereitgestellt wird und dass Sie es nicht ändern können – stattdessen müssen Sie neue Regeln erstellen, damit die Links wie Links aussehen und sich verhalten, und der Benutzer erkennen kann, wo er sich in der Liste befindet.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## CSS-Zugänglichkeit 2

In dieser nächsten Aufgabe wird Ihnen ein einfaches Stück Inhalt präsentiert – nur Überschriften und Absätze. Es gibt Zugänglichkeitsprobleme mit den Farben und der Größe des Textes; wir möchten, dass Sie:

1. Erklären, was die Probleme sind und welche Richtlinien die akzeptablen Werte für Farbe und Größe vorschreiben.
2. Neue Werte für die Farbe und Schriftgröße auswählen, die das Problem beheben.
3. Die CSS mit diesen neuen Werten aktualisieren, um das Problem zu beheben.
4. Den Code testen, um sicherzustellen, dass das Problem jetzt behoben ist. Erklären, welche Werkzeuge oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## JavaScript-Zugänglichkeit 1

In unserer letzten Aufgabe hier haben Sie einige JavaScripting zu erledigen. Wir haben eine App, die eine Liste von Tiernamen präsentiert. Durch Klicken auf einen der Tiernamen wird eine weitere Beschreibung dieses Tieres in einem Kasten unterhalb der Liste angezeigt.

Doch ist es nicht sehr zugänglich – im aktuellen Zustand kann man es nur mit der Maus bedienen. Wir möchten, dass Sie das HTML und JavaScript ergänzen, um es auch mit der Tastatur zugänglich zu machen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
