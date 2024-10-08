---
title: Anleitung zur Hervorhebung der ersten Zeile eines Absatzes
slug: Learn/CSS/Howto/Highlight_first_line
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie die erste Zeile eines Textes in einem Absatz hervorheben können, selbst wenn Sie nicht wissen, wie lang diese Zeile sein wird.

## Die erste Zeile eines Textes stylen

Sie möchten die erste Zeile eines Absatzes größer und fett machen. Wenn Sie ein `<span>` um die erste Zeile wickeln, können Sie es zwar stylen, aber wenn die erste Zeile aufgrund einer kleineren Viewportgröße kürzer wird, wird der gestylte Text in die nächste Zeile umgebrochen.

## Verwendung eines Pseudo-Elements

Ein {{cssxref("pseudo-elements", "Pseudo-Element")}} kann anstelle des `<span>` verwendet werden; es ist jedoch flexibler — der genaue Inhalt, der von einem Pseudo-Element ausgewählt wird, wird berechnet, sobald der Browser den Inhalt gerendert hat. Es funktioniert also auch dann, wenn sich die Viewportgröße ändert.

In diesem Fall müssen wir das {{cssxref("::first-line")}} Pseudo-Element verwenden. Es wählt die erste formatierte Zeile jedes Absatzes aus, sodass Sie sie nach Ihren Wünschen stylen können.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line.html", '100%', 750)}}

> [!NOTE]
> Alle Pseudo-Elemente verhalten sich auf diese Weise. Sie verhalten sich so, als hätten Sie ein Element in das Dokument eingefügt, tun dies jedoch dynamisch basierend auf dem Inhalt, wie er zur Laufzeit angezeigt wird.

## Kombinieren von Pseudo-Elementen mit anderen Selektoren

Im obigen Beispiel wählt das Pseudo-Element die erste Zeile jedes Absatzes aus. Um nur die erste Zeile des ersten Absatzes auszuwählen, können Sie es mit einem anderen Selektor kombinieren. In diesem Fall verwenden wir die {{cssxref(":first-child")}} {{cssxref("pseudo-classes", "Pseudo-Klasse")}}. Dies ermöglicht uns, die erste Zeile des ersten Kindes von `.wrapper` auszuwählen, wenn dieses erste Kind ein Absatz ist.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line2.html", '100%', 700)}}

> [!NOTE]
> Wenn Sie Pseudo-Elemente mit anderen Selektoren in einem [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor kombinieren, müssen die Pseudo-Elemente nach allen anderen Komponenten im Selektor erscheinen, in dem sie auftreten.

## Siehe auch

- Die Referenzseite zu {{cssxref("pseudo-elements", "Pseudo-Elementen")}}.
- [Learn CSS: Pseudo-Klassen und Pseudo-Elemente.](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
