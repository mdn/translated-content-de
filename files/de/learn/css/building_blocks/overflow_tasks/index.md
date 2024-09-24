---
title: "Testen Sie Ihre Fähigkeiten: Überlauf"
slug: Learn/CSS/Building_blocks/Overflow_Tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie [Überlauf in CSS verstehen und wie man ihn handhabt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt über die Box hinaus, da sie eine feste Höhe hat. Behalten Sie die Höhe bei, aber sorgen Sie dafür, dass die Box nur dann Scrollbalken hat, wenn genügend Text vorhanden ist, um einen Überlauf zu verursachen. Testen Sie, indem Sie etwas Text aus dem HTML entfernen; wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft, sollte kein Scrollbalken erscheinen.

![Eine kleine Box mit einem Rahmen und einem vertikalen Scrollbalken.](mdn-overflow1.png)

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-scroll.html", '100%', 1000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-scroll-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild in der Box, das größer als die Abmessungen der Box ist, sodass es sichtbar überläuft. Ändern Sie es so, dass alle Teile des Bildes, die sich außerhalb der Box befinden, verborgen sind.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Eine Box mit einem Bild, das die Box füllt, aber nicht über die Ränder hinausläuft.](mdn-overflow2.png)

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-hidden.html", '100%', 1200)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-hidden-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
