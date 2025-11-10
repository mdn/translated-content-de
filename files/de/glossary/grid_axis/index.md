---
title: Grid-Achsen
slug: Glossary/Grid_Axis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das CSS-Grid-Layout ist eine zweidimensionale Layoutmethode, die es ermöglicht, Inhalte in _Zeilen_ und _Spalten_ anzuordnen. Daher gibt es in jedem Grid zwei Achsen: die _Block- oder Spaltenachse_ und die _Inline- oder Zeilenachse_.

Entlang dieser Achsen können Elemente mit den in der [Box-Ausrichtungsspezifikation](/de/docs/Web/CSS/Guides/Box_alignment) definierten Eigenschaften ausgerichtet und gerechtfertigt werden.

Die _Inline-Achse_ (auch Zeilenachse oder Hauptachse genannt) ist die Richtung, in der normaler Text fließt. Die _Blockachse_ (auch Spaltenachse oder Kreuzachse genannt) wird verwendet, wenn Textblöcke angeordnet werden. Die physische Richtung dieser Achsen kann sich je nach [Schreibmodus](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes) des Dokuments ändern.

Zum Beispiel, wenn Sie von links nach rechts, von oben nach unten schreiben (wie bei typischem englischen Prosatext), dann werden die einzelnen Zeichen entlang der Inline-Achse angeordnet, die von links nach rechts verläuft.

![Diagramm zeigt die Inline-Achse im CSS-Grid-Layout.](7_inline_axis.png)

Und wenn der Text mehrere Zeilen enthält, werden diese Zeilen entlang der Blockachse platziert, die von oben nach unten verläuft.

![Diagramm zeigt die Blockachse im CSS-Grid-Layout.](7_block_axis.png)

## Siehe auch

- [Grundlagen des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
