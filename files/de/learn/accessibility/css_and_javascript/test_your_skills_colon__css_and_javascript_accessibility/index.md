---
title: "Testen Sie Ihre Fähigkeiten: Barrierefreiheit von CSS und JavaScript"
slug: Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel über die [CSS- und JavaScript-Barrierefreiheit Best Practices](/de/docs/Learn/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## CSS-Barrierefreiheit 1

In der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Allerdings ist deren Barrierefreiheit ziemlich schlecht — es ist nicht ersichtlich, dass es sich um Links handelt oder welcher Link gerade fokussiert ist.

Wir möchten, dass Sie davon ausgehen, dass das vorhandene Regelset mit dem `a`-Selektor von einem CMS bereitgestellt wird und Sie es nicht ändern können. Stattdessen müssen Sie neue Regeln erstellen, damit die Links wie Links aussehen und sich verhalten, und damit der Nutzer erkennen kann, wo er sich in der Liste befindet.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## CSS-Barrierefreiheit 2

In der nächsten Aufgabe wird Ihnen ein einfaches Stück Inhalt präsentiert — nur Überschriften und Absätze. Es gibt Barrierefreiheitsprobleme mit den Farben und der Größe des Textes; wir möchten, dass Sie:

1. Erläutern, was die Probleme sind und welche Richtlinien die akzeptablen Werte für Farbe und Größe angeben.
2. Neue Werte für die Farbe und Schriftgröße auswählen, um das Problem zu beheben.
3. Das CSS mit diesen neuen Werten aktualisieren, um das Problem zu beheben.
4. Den Code testen, um sicherzustellen, dass das Problem jetzt behoben ist. Erklären Sie, welche Werkzeuge oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## JavaScript-Barrierefreiheit 1

In unserer letzten Aufgabe hier haben Sie etwas JavaScripting zu erledigen. Wir haben eine einfache App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung dieses Tieres in einem Kasten unterhalb der Liste.

Aber sie ist nicht sehr barrierefrei — in ihrem aktuellen Zustand kann sie nur mit der Maus bedient werden. Wir möchten, dass Sie HTML und JavaScript hinzufügen, um sie auch über die Tastatur zugänglich zu machen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
