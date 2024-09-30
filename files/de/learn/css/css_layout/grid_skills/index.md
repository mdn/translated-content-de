---
title: "Testen Sie Ihre Fähigkeiten: Grid"
slug: Learn/CSS/CSS_layout/Grid_skills
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie verstehen, wie ein [Grid und Grid-Elemente](/de/docs/Learn/CSS/CSS_layout/Grids) funktionieren. Sie werden mehrere kleine Aufgaben durchgehen, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe sollen Sie ein Grid erstellen, in das sich die vier Kindelemente automatisch einfügen. Das Grid sollte drei Spalten haben, die den verfügbaren Platz gleichmäßig teilen, und einen Abstand von 20 Pixeln zwischen den Spalten- und Reihen-Tracks. Versuchen Sie danach, mehr Kindelemente innerhalb des übergeordneten Containers mit der Klasse `grid` hinzuzufügen, um zu sehen, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein Grid mit drei Spalten und vier Elementen.](grid-task1.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe haben wir bereits ein Grid definiert. Indem Sie die CSS-Regeln für die beiden Kindelemente bearbeiten, lassen Sie sie jeweils über mehrere Grid-Tracks spannen. Das zweite Element sollte das erste überlagern, wie im Bild unten gezeigt:

![Ein Kasten mit zwei Elementen, wobei eines das andere überlagert.](grid-task2.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid2.html", '100%', 900)}}

Zusätzliche Frage:

- Können Sie jetzt das erste Element oben anzeigen lassen, ohne die Reihenfolge der Elemente im Quellcode zu ändern?

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe gibt es vier direkte Kinder in diesem Grid. Der Ausgangspunkt zeigt sie mittels Auto-Platzierung an. Verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente wie im Bild unten anzuzeigen:

![Vier Elemente, die in einem Raster angezeigt werden.](grid-task3.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid3.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das Beispiel wie im Bild unten zu erstellen. Der Abstand zwischen den Spalten- und Reihen-Tracks sollte 10px betragen. Sie müssen keine Änderungen am HTML vornehmen, um dies zu erreichen.

![Zwei Reihen von Karten, jeweils mit einem Bild und einer Reihe von Tags.](grid-task4.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid4.html", '100%', 2000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
