---
title: Grid-Achse
slug: Glossary/Grid_Axis
l10n:
  sourceCommit: 423dccfc784a013348a32fc9bd0cb9af0e5db3a6
---

{{GlossarySidebar}}

Das CSS-Grid-Layout ist eine zweidimensionale Layoutmethode, die es ermöglicht, Inhalte in _Zeilen_ und _Spalten_ anzuordnen. Daher gibt es in jedem Grid zwei Achsen. Die _Block- oder Spaltenachse_ und die _Inline- oder Zeilenachse_.

Entlang dieser Achsen können Elemente mithilfe der im [Box Alignment-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) definierten Eigenschaften ausgerichtet und gerechtfertigt werden.

Die _Inline-Achse_ (auch Zeilenachse oder Hauptachse genannt) ist die Richtung, in der sich normaler Text bewegt. Die _Block-Achse_ (auch Spaltenachse oder Kreuzachse genannt) ist die Achse, die beim Anordnen von Textblöcken verwendet wird. Die physische Richtung dieser Achsen kann sich nach dem [Schreibmodus](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) des Dokuments ändern.

Zum Beispiel: Wenn Sie von links nach rechts und von oben nach unten schreiben (wie im typischen englischen Prosa), werden die einzelnen Zeichen entlang der Inline-Achse platziert, die von links nach rechts verläuft.

![Diagramm, das die Inline-Achse im CSS-Grid-Layout zeigt.](7_inline_axis.png)

Und wenn der Text mehrere Zeilen enthält, werden diese Zeilen entlang der Block-Achse platziert, die von oben nach unten verläuft.

![Diagramm, das die Block-Achse im CSS-Grid-Layout zeigt.](7_block_axis.png)

## Siehe auch

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
