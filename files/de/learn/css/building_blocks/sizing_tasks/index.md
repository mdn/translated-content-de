---
title: "Testen Sie Ihre Fähigkeiten: Größenanpassung"
slug: Learn/CSS/Building_blocks/Sizing_tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Ziel dieses Fertigkeitstests ist es zu prüfen, ob Sie die verschiedenen Möglichkeiten des [Größenanpassens von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) verstehen.

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) melden.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen. Die erste sollte so dimensioniert werden, dass die Höhe mindestens 100 Pixel beträgt, auch wenn es weniger Inhalt gibt, der diese Höhe erfordert. Der Inhalt sollte jedoch nicht überlaufen, wenn mehr Inhalt vorhanden ist, als in 100 Pixel passt. Testen Sie diese Box, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie auch ohne Inhalt eine 100 Pixel hohe Box erhalten.

Die zweite Box sollte auf 100 Pixel festgelegt werden, so dass der Inhalt überläuft, wenn es zu viel ist.

![Zwei Boxen, eine mit überlaufendem Inhalt](mdn-sizing-height-min-height.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/height-min-height.html", '100%', 1000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/height-min-height-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe haben Sie eine Box, die eine weitere Box enthält. Ihre Aufgabe ist es, die innere Box 60% der Breite der äußeren Box zu machen. Der Wert der {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die gesamte Breite jegliche Auffüllung und den Rand einschließt. Sie sollten der inneren Box auch eine Auffüllung von 10% geben, wobei die Breite (oder die inlinelange Größe) als Basisgröße angesehen wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit einer weiteren Box darin verschachtelt](mdn-sizing-percentages.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/percentages.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/percentages-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, das andere ist größer und bricht aus der Box heraus. Wenn Sie sich vorstellen, dass die Box responsiv ist und daher wachsen und schrumpfen könnte, welche Eigenschaft würden Sie auf das Bild anwenden, damit sich das große Bild in die Box verkleinert, aber das kleine Bild sich nicht streckt.

Ihr Endergebnis sollte wie die Bilder unten aussehen:

![Zwei Boxen mit Bildern darin](mdn-sizing-max-width.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/max-width.html", '100%', 1200)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/max-width-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
