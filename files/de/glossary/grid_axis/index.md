---
title: Rasterachse
slug: Glossary/Grid_Axis
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das CSS-Grid-Layout ist eine zweidimensionale Layout-Methode, die das Anordnen von Inhalten in _Zeilen_ und _Spalten_ ermöglicht. Daher haben wir in jedem Raster zwei Achsen. Die _Block- oder Spaltenachse_ und die _Inline- oder Zeilenachse_.

Entlang dieser Achsen können Elemente mithilfe der in der [Box-Alignment-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) definierten Eigenschaften ausgerichtet und gerechtfertigt werden.

Die _Inline-Achse_ (auch Zeilenachse oder Hauptachse genannt) ist die Richtung, in der normaler Text fließt. Die _Block-Achse_ (auch Spaltenachse oder Querachse genannt) ist die Achse, die beim Anordnen von Textblöcken verwendet wird. Die physische Ausrichtung dieser Achsen kann je nach [Schreibmodus](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) des Dokuments variieren.

Wenn Sie beispielsweise von links nach rechts, von oben nach unten schreiben (wie bei typischem englischen Prosa), werden die einzelnen Zeichen entlang der Inline-Achse platziert, die von links nach rechts verläuft.

![Diagramm, das die Inline-Achse im CSS-Grid-Layout zeigt.](7_inline_axis.png)

Und wenn der Text mehrere Zeilen enthält, werden diese Zeilen entlang der Block-Achse platziert, die von oben nach unten verläuft.

![Diagramm, das die Block-Achse im CSS-Grid-Layout zeigt.](7_block_axis.png)

## Siehe auch

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Box-Alignment im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Rasters, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
