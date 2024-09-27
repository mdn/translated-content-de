---
title: "Testen Sie Ihre Fähigkeiten: Barrierefreiheit von CSS und JavaScript"
slug: Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unseren Artikel zu [Best Practices für Barrierefreiheit in CSS und JavaScript](/de/docs/Learn/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## CSS-Barrierefreiheit 1

In der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Die Barrierefreiheit dieser Links ist jedoch ziemlich schlecht – es gibt keine Möglichkeit, wirklich zu erkennen, dass es Links sind oder auf welchem Link sich der Benutzer gerade konzentriert.

Wir möchten, dass Sie davon ausgehen, dass das bestehende Regelset mit dem `a`-Selektor von einem CMS bereitgestellt wird und dass Sie es nicht ändern können – stattdessen müssen Sie neue Regeln erstellen, um die Links aussehen zu lassen und sich wie Links zu verhalten, damit der Benutzer erkennen kann, wo er sich in der Liste befindet.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## CSS-Barrierefreiheit 2

In dieser nächsten Aufgabe wird Ihnen ein einfacher Inhalt präsentiert – nur Überschriften und Absätze. Es gibt Barrierefreiheitsprobleme mit den Farben und der Größe des Textes; wir möchten, dass Sie:

1. Erklären, was die Probleme sind und welche Richtlinien die akzeptablen Werte für Farben und Größen festlegen.
2. Neue Werte für Farben und Schriftgröße auswählen, die das Problem beheben.
3. Das CSS mit diesen neuen Werten aktualisieren, um das Problem zu lösen.
4. Den Code testen, um sicherzustellen, dass das Problem nun behoben ist. Erklären Sie, welche Werkzeuge oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## JavaScript-Barrierefreiheit 1

In unserer letzten Aufgabe hier haben Sie einige JavaScript-Arbeiten zu erledigen. Wir haben eine einfache App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung dieses Tieres in einem Kasten unter der Liste.

Aber es ist nicht sehr barrierefrei – im aktuellen Zustand kann man es nur mit der Maus bedienen. Wir möchten, dass Sie das HTML und JavaScript hinzufügen, um es auch mit der Tastatur bedienbar zu machen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
