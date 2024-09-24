---
title: "Testen Sie Ihre Fähigkeiten: Grid"
slug: Learn/CSS/CSS_layout/Grid_skills
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie verstehen, wie sich ein [Grid und Grid-Elemente](/de/docs/Learn/CSS/CSS_layout/Grids) verhalten. Sie werden mehrere kleine Aufgaben durchgehen, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe sollten Sie ein Grid erstellen, in das sich die vier Kindelemente automatisch einfügen. Das Grid sollte drei Spalten haben, die den verfügbaren Platz gleichmäßig teilen, und einen Abstand von 20 Pixeln zwischen den Spalten- und Reihen-Spuren. Versuchen Sie danach, weitere Kindcontainer innerhalb des Elterncontainers mit der Klasse `grid` hinzuzufügen und sehen Sie, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte dem unten stehenden Bild entsprechen:

![Ein dreispaltiges Grid mit vier darin platzierten Elementen.](grid-task1.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe haben wir bereits ein Grid definiert. Indem Sie die CSS-Regeln für die beiden Kindelemente bearbeiten, lassen Sie jedes über mehrere Grid-Spuren spannen. Das zweite Element sollte wie im Bild unten dargestellt über dem ersten liegen:

![Eine Box mit zwei Elementen, von denen eines überlagert ist.](grid-task2.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid2.html", '100%', 900)}}

Zusätzliche Frage:

- Können Sie jetzt das erste Element ohne Änderung der Reihenfolge der Elemente im Quelltext oben anzeigen lassen?

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe gibt es vier direkte Kinder in diesem Grid. Der Ausgangspunkt zeigt sie unter Verwendung der automatischen Platzierung. Verwenden Sie die Eigenschaften grid-area und grid-template-areas, um die Elemente wie im Bild unten angezeigt anzuordnen:

![Vier Elemente, die in einem Grid angezeigt werden.](grid-task3.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid3.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das Beispiel wie im untenstehenden Bild zu sehen nachzubilden. Der Abstand zwischen den Spalten- und Reihen-Spuren sollte 10px betragen. Sie müssen keine Änderungen am HTML vornehmen, um dies zu erreichen.

![Zwei Reihen von Karten, jede mit einem Bild und einem Satz von Tags.](grid-task4.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid4.html", '100%', 2000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
