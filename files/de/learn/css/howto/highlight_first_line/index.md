---
title: Wie man die erste Zeile eines Absatzes hervorhebt
slug: Learn/CSS/Howto/Highlight_first_line
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie die erste Zeile eines Absatzes hervorheben können, selbst wenn Sie nicht wissen, wie lang diese Zeile sein wird.

## Die erste Zeile eines Textes stylen

Sie möchten die erste Zeile eines Absatzes größer und fett darstellen. Wenn Sie ein `<span>` um die erste Zeile legen, können Sie es gestalten, jedoch wird der gestaltete Text umgebrochen, wenn die erste Zeile aufgrund einer kleineren Ansichtsfenstergröße kürzer wird.

## Verwenden eines Pseudo-Elements

Ein {{cssxref("pseudo-elements", "Pseudo-Element")}} kann anstelle des `<span>` verwendet werden; es ist jedoch flexibler — der genaue Inhalt, der von einem Pseudo-Element ausgewählt wird, wird berechnet, nachdem der Browser den Inhalt gerendert hat. Es funktioniert also auch, wenn sich die Ansichtsfenstergröße ändert.

In diesem Fall müssen wir das {{cssxref("::first-line")}} Pseudo-Element verwenden. Es wählt die erste formatierte Zeile jedes Absatzes aus, was bedeutet, dass Sie es nach Ihren Anforderungen gestalten können.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line.html", '100%', 750)}}

> [!NOTE]
> Alle Pseudo-Elemente verhalten sich auf diese Weise. Sie wirken, als hätten Sie ein Element in das Dokument eingefügt, tun dies jedoch dynamisch basierend auf dem Inhalt, wie er zur Laufzeit angezeigt wird.

## Pseudo-Elemente mit anderen Selektoren kombinieren

Im obigen Beispiel wählt das Pseudo-Element die erste Zeile jedes Absatzes aus. Um nur die erste Zeile des ersten Absatzes auszuwählen, können Sie es mit einem anderen Selektor kombinieren. In diesem Fall verwenden wir die {{cssxref(":first-child")}} {{cssxref("pseudo-classes", "Pseudo-Klasse")}}. Dies ermöglicht uns die Auswahl der ersten Zeile des ersten Kindes von `.wrapper`, wenn dieses erste Kind ein Absatz ist.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line2.html", '100%', 700)}}

> [!NOTE]
> Beim Kombinieren von Pseudo-Elementen mit anderen Selektoren in einem [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor müssen die Pseudo-Elemente nach allen anderen Komponenten im Selektor erscheinen, in dem sie vorkommen.

## Siehe auch

- Die {{cssxref("pseudo-elements", "Pseudo-Elemente")}} Referenzseite.
- [Lernen Sie CSS: Pseudo-Klassen und Pseudo-Elemente.](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
