---
title: "Testen Sie Ihre Fähigkeiten: CSS und JavaScript Barrierefreiheit"
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel über [CSS- und JavaScript-Barrierefreiheit Best Practices](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## CSS-Barrierefreiheit 1

In der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Deren Zugänglichkeit ist jedoch ziemlich schlecht — es gibt keine Möglichkeit wirklich zu erkennen, dass es sich um Links handelt oder zu erkennen, welcher Link gerade fokussiert ist.

Wir möchten, dass Sie annehmen, dass das vorhandene Regelwerk mit dem `a`-Selektor von einem CMS bereitgestellt wird und Sie es nicht ändern können. Stattdessen müssen Sie neue Regeln erstellen, um die Links so aussehen und sich verhalten zu lassen, wie Links dies tun, und damit der Benutzer erkennen kann, wo er sich in der Liste befindet.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## CSS-Barrierefreiheit 2

In der nächsten Aufgabe wird Ihnen ein einfacher Inhalt präsentiert — nur Überschriften und Absätze. Es gibt Zugänglichkeitsprobleme mit den Farben und der Größe des Textes. Wir möchten, dass Sie:

1. Erklären, was die Probleme sind und welche Richtlinien akzeptable Werte für Farbe und Größe vorgeben.
2. Neue Werte für die Farbe und die Schriftgröße auswählen, die das Problem beheben.
3. Das CSS mit diesen neuen Werten aktualisieren, um das Problem zu lösen.
4. Den Code testen, um sicherzustellen, dass das Problem nun behoben ist. Erklären Sie, welche Tools oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## JavaScript-Barrierefreiheit 1

In unserer letzten Aufgabe hier haben Sie etwas JavaScript zu bearbeiten. Wir haben eine App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung dieses Tieres in einem Kasten unterhalb der Liste.

Aber sie ist nicht sehr zugänglich — im aktuellen Zustand können Sie sie nur mit der Maus bedienen. Wir möchten, dass Sie das HTML und JavaScript ergänzen, um sie auch über die Tastatur erreichbar zu machen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
