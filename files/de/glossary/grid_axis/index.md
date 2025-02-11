---
title: Gitterachse
slug: Glossary/Grid_Axis
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{GlossarySidebar}}

Das CSS-Gitterlayout ist eine zweidimensionale Layoutmethode, die es ermöglicht, Inhalte in _Zeilen_ und _Spalten_ anzuordnen. Daher gibt es in jedem Gitter zwei Achsen: Die _Block- oder Spaltenachse_ und die _Inline- oder Zeilenachse_.

Entlang dieser Achsen können Elemente mithilfe der in der [Box Alignment-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) definierten Eigenschaften ausgerichtet und gerechtfertigt werden.

In CSS ist die _Block- oder Spaltenachse_ die Achse, die verwendet wird, um Textblöcke anzuordnen. Wenn Sie zwei Absätze haben und in einer Sprache arbeiten, die von rechts nach links und von oben nach unten gelesen wird, werden diese untereinander entlang der Blockachse angeordnet.

![Diagramm, das die Blockachse im CSS-Gitterlayout zeigt.](7_block_axis.png)

Die _Inline- oder Zeilenachse_ verläuft quer zur Blockachse und ist die Richtung, in der regulärer Text fließt. Dies sind unsere Zeilen im CSS-Gitterlayout.

![Diagramm, das die Inline-Achse im CSS-Gitterlayout zeigt.](7_inline_axis.png)

Die physische Richtung dieser Achsen kann sich je nach [Schreibmodus](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) des Dokuments ändern.

## Siehe auch

- [Grundlegende Konzepte des Gitterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Box-Ausrichtung im Gitterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
