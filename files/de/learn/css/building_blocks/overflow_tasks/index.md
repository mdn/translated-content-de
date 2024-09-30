---
title: "Testen Sie Ihre Fähigkeiten: Overflow"
slug: Learn/CSS/Building_blocks/Overflow_Tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieser Fähigkeitstest soll beurteilen, ob Sie [Overflow in CSS und dessen Verwaltung](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) verstehen.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe überläuft der Inhalt die Box, da sie eine feste Höhe hat. Behalten Sie die Höhe bei, aber sorgen Sie dafür, dass die Box nur dann Scrollbars hat, wenn genug Text vorhanden ist, um einen Overflow zu verursachen. Testen Sie, indem Sie etwas Text aus dem HTML entfernen: Wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft, sollte kein Scrollbar erscheinen.

![Eine kleine Box mit einem Rahmen und einem vertikalen Scrollbar.](mdn-overflow1.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-scroll.html", '100%', 1000)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-scroll-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild in der Box, das größer ist als die Dimensionen der Box und daher sichtbar überläuft. Ändern Sie es so, dass jedes Bild außerhalb der Box versteckt wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit einem Bild, das die Box ausfüllt, aber nicht über die Ränder hinausragt.](mdn-overflow2.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-hidden.html", '100%', 1200)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-hidden-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
