---
title: "Überprüfen Sie Ihre Fähigkeiten: Größenanpassung"
slug: Learn/CSS/Building_blocks/Sizing_tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie die verschiedenen Möglichkeiten des [Größenanpassens von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) verstehen.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen. Die erste sollte so dimensioniert sein, dass die Höhe mindestens 100 Pixel beträgt, selbst wenn der Inhalt kleiner ist, sodass er nicht ausreicht, um die Höhe zu erreichen. Der Inhalt sollte jedoch nicht überlaufen, wenn mehr Inhalt vorhanden ist als in 100 Pixel passt. Testen Sie diese Box, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie immer noch eine 100 Pixel hohe Box erhalten, selbst ohne Inhalt.

Die zweite Box sollte fest auf 100 Pixel Höhe eingestellt sein, sodass der Inhalt überläuft, wenn er zu groß ist.

![Zwei Boxen, eine mit überlaufendem Inhalt](mdn-sizing-height-min-height.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/height-min-height.html", '100%', 1000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/height-min-height-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe haben Sie eine Box, die eine weitere Box enthält. Ihre Aufgabe ist es, die innere Box 60% der Breite der äußeren Box groß zu machen. Der Wert der {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` eingestellt, was bedeutet, dass die Gesamtbreite Polster und Rahmen einschließt. Sie sollten der inneren Box auch einen Abstand von 10% in Bezug auf die Breite (oder Inline-Größe) geben, von welcher dieser Prozentwert berechnet wird.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Eine Box mit einer weiteren, darin geschachtelten Box](mdn-sizing-percentages.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/percentages.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/percentages-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, das andere ist größer und bricht aus der Box heraus. Wenn Sie sich vorstellen, dass die Box responsiv ist und daher wachsen und schrumpfen könnte, welche Eigenschaft würden Sie auf das Bild anwenden, damit das große Bild in die Box schrumpft, aber das kleine Bild nicht gestreckt wird.

Ihr Endergebnis sollte wie die unten stehenden Bilder aussehen:

![Zwei Boxen mit Bildern darin](mdn-sizing-max-width.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/max-width.html", '100%', 1200)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/max-width-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
