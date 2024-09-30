---
title: Layout-Modus
slug: Web/CSS/Layout_mode
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Ein [CSS](/de/docs/Web/CSS) **Layout-Modus**, manchmal _Layout_ genannt, ist ein Algorithmus, der die Position und Größe von Boxen bestimmt, basierend auf der Weise, wie sie mit ihren Geschwister- und Vorfahren-Boxen interagieren. Es gibt mehrere davon:

- _[Normaler Fluss](/de/docs/Web/CSS/CSS_flow_layout)_ — alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst _Block-Layout_, das für das Anordnen von Boxen wie Absätzen entworfen wurde, und _Inline-Layout_, das Inline-Elemente wie Text anordnet.
- [_Tabellenlayout_](/de/docs/Web/CSS/CSS_table), entworfen für das Anordnen von Tabellen.
- _Float-Layout_, entworfen, um ein Element links oder rechts zu positionieren, während der Rest des Inhalts im normalen Fluss darum herumfließt.
- [_Positioniertes Layout_](/de/docs/Web/CSS/CSS_positioned_layout), entworfen zur Positionierung von Elementen ohne viel Interaktion mit anderen Elementen.
- [_Mehrspaltiges Layout_](/de/docs/Web/CSS/CSS_multicol_layout), entworfen, um Inhalte in Spalten wie in einer Zeitung anzuordnen.
- [_Flexibles Box-Layout_](/de/docs/Web/CSS/CSS_flexible_box_layout), entworfen für das Anordnen komplexer Seiten, die sich reibungslos anpassen lassen.
- [_Grid-Layout_](/de/docs/Web/CSS/CSS_grid_layout), entworfen, um Elemente relativ zu einem festen Raster anzuordnen.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten für einen oder zwei davon und haben keine Wirkung, wenn sie auf ein Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreib-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
