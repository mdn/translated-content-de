---
title: "Testen Sie Ihre Fähigkeiten: Overflow"
slug: Learn/CSS/Building_blocks/Overflow_Tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie das [Überlaufverhalten in CSS verstehen und wie Sie es handhaben können](/de/docs/Learn/CSS/Building_blocks/Overflowing_content).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt aus dem Kasten über, weil er eine feste Höhe hat. Behalten Sie die Höhe bei, aber sorgen Sie dafür, dass der Kasten nur dann Bildlaufleisten erhält, wenn genug Text vorhanden ist, um einen Überlauf zu verursachen. Testen Sie, indem Sie etwas Text aus dem HTML entfernen. Wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft, sollte keine Bildlaufleiste erscheinen.

![Ein kleiner Kasten mit einem Rahmen und einer vertikalen Bildlaufleiste.](mdn-overflow1.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-scroll.html", '100%', 1000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-scroll-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild im Kasten, das größer als die Abmessungen des Kastens ist, sodass es sichtbar überläuft. Ändern Sie es so, dass jedes Bild außerhalb des Kastens verborgen wird.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Ein Kasten mit einem Bild, das den Kasten ausfüllt, aber nicht über die Ränder hinausragt.](mdn-overflow2.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-hidden.html", '100%', 1200)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-hidden-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
