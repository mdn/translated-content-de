---
title: Layout-Modus
slug: Web/CSS/Layout_mode
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Ein [CSS](/de/docs/Web/CSS) **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein Algorithmus, der die Position und Größe von Boxen bestimmt, basierend auf ihrer Interaktion mit den benachbarten und übergeordneten Boxen. Es gibt mehrere davon:

- _[Normaler Fluss](/de/docs/Web/CSS/CSS_flow_layout)_ — alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst _Blocklayout_, das für die Anordnung von Boxen wie Absätzen entwickelt wurde, und _Inline-Layout_, das Inline-Elemente wie Text anordnet.
- [_Tabellenlayout_](/de/docs/Web/CSS/CSS_table), entwickelt für die Anordnung von Tabellen.
- _Float-Layout_, entwickelt, um ein Element zu veranlassen, sich links oder rechts zu positionieren, wobei der restliche Inhalt im normalen Fluss darum herumfließt.
- [_Positioniertes Layout_](/de/docs/Web/CSS/CSS_positioned_layout), entwickelt für die Positionierung von Elementen ohne großen Bezug zu anderen Elementen.
- [_Mehrspalten-Layout_](/de/docs/Web/CSS/CSS_multicol_layout), entwickelt, um Inhalte in Spalten wie in einer Zeitung anzuordnen.
- [_Flexibles Box-Layout_](/de/docs/Web/CSS/CSS_flexible_box_layout), entwickelt für die Anordnung komplexer Seiten, die sich reibungslos skalieren lassen.
- [_Raster-Layout_](/de/docs/Web/CSS/CSS_grid_layout), entwickelt, um Elemente relativ zu einem festen Raster anzuordnen.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten nur für ein oder zwei Modi und haben keine Wirkung, wenn sie auf ein Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
