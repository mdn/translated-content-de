---
title: "Testen Sie Ihr Wissen: Grid"
slug: Learn/CSS/CSS_layout/Grid_skills
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Ziel dieser Fähigkeitsprüfung ist es, zu beurteilen, ob Sie verstehen, wie ein [Grid und Grid-Elemente](/de/docs/Learn/CSS/CSS_layout/Grids) funktionieren. Sie werden mehrere kleine Aufgaben durchgehen, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe sollen Sie ein Grid erstellen, in das die vier Kind-Elemente automatisch platziert werden. Das Grid sollte drei Spalten haben, die den verfügbaren Raum gleichmäßig teilen, und einen 20-Pixel-Abstand zwischen den Spalten- und Zeilen-Spuren aufweisen. Danach versuchen Sie, mehr Kind-Container in den Eltern-Container mit der Klasse `grid` hinzuzufügen und beobachten, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein dreispaltiges Grid mit vier eingefügten Elementen.](grid-task1.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe haben wir bereits ein definiertes Grid. Indem Sie die CSS-Regeln für die beiden Kind-Elemente bearbeiten, lassen Sie sie jeweils über mehrere Grid-Spuren spannen. Das zweite Element sollte das erste überlagern, wie im Bild unten:

![Eine Box mit zwei Elementen, wobei ein Element das andere überlagert.](grid-task2.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid2.html", '100%', 900)}}

Zusätzliche Frage:

- Können Sie das erste Element jetzt darüber anzeigen lassen, ohne die Reihenfolge der Elemente im Quelltext zu ändern?

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe gibt es vier direkte Kinder in diesem Grid. Der Ausgangspunkt lässt sie automatisch platziert anzeigen. Verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente so anzuordnen, wie im Bild unten gezeigt:

![Vier Elemente, die in einem Grid angezeigt werden.](grid-task3.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid3.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch das Flexbox verwenden, um das Beispiel aus dem untenstehenden Bild nachzubilden. Der Abstand zwischen den Spalten- und Zeilenspurensollte 10px betragen. Es sind keine Änderungen am HTML erforderlich, um dies zu erreichen.

![Zwei Reihen von Karten, jede mit einem Bild und einem Satz Tags.](grid-task4.png)

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid4.html", '100%', 2000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
