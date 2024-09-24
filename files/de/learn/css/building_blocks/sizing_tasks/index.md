---
title: "Testen Sie Ihre Fähigkeiten: Größenanpassung"
slug: Learn/CSS/Building_blocks/Sizing_tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie die verschiedenen Möglichkeiten verstanden haben, [Elemente in CSS zu dimensionieren](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen. Die erste sollte so dimensioniert sein, dass die Höhe mindestens 100 Pixel hoch ist, selbst wenn weniger Inhalt vorhanden ist, der sie zu dieser Höhe ausdehnen würde. Der Inhalt sollte jedoch nicht überlaufen, wenn mehr Inhalt vorhanden ist als in 100 Pixel passt. Testen Sie diese Box, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie immer noch eine 100 Pixel hohe Box erhalten, auch ohne Inhalt.

Die zweite Box sollte fest auf 100 Pixel Höhe eingestellt sein, sodass der Inhalt überläuft, wenn es zu viel gibt.

![Zwei Boxen, eine mit überlaufendem Inhalt](mdn-sizing-height-min-height.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/height-min-height.html", '100%', 1000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/height-min-height-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe haben Sie eine Box, die eine weitere Box enthält. Ihre Aufgabe ist es, die innere Box 60% der Breite der äußeren Box groß zu machen. Der Wert der {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jegliche Auffüllung und den Rand beinhaltet. Sie sollten der inneren Box auch einen Abstand von 10% geben, wobei die Breite (oder Inline-Größe) als Ausgangspunkt für die Berechnung dieses Prozentsatzes verwendet wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit einer weiteren Box innen](mdn-sizing-percentages.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/percentages.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/percentages-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, das andere ist größer und bricht aus der Box aus. Wenn Sie sich vorstellen, dass die Box responsiv ist und sich daher vergrößern und verkleinern könnte, welche Eigenschaft würden Sie auf das Bild anwenden, damit das große Bild in die Box verkleinert wird, aber das kleine Bild sich nicht dehnt.

Ihr Endergebnis sollte wie die Bilder unten aussehen:

![Zwei Boxen mit Bildern darin](mdn-sizing-max-width.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/max-width.html", '100%', 1200)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/max-width-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
