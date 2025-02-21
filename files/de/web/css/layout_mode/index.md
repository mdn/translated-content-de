---
title: Layout-Modus
slug: Web/CSS/Layout_mode
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Ein [CSS](/de/docs/Web/CSS) **Layout-Modus**, manchmal einfach _Layout_ genannt, ist ein Algorithmus, der die Position und Größe von Boxen bestimmt, basierend auf ihrer Interaktion mit benachbarten und übergeordneten Boxen. Es gibt mehrere davon:

- _[Normaler Fluss](/de/docs/Web/CSS/CSS_display/flow_layout)_ — alle Elemente sind Teil des normalen Flusses, bis Sie etwas unternehmen, um sie daraus zu entfernen. Der normale Fluss umfasst _Block-Layout_, entworfen für das Layout von Boxen wie Absätzen, und _Inline-Layout_, das Inline-Elemente wie Text layoutet.
- [_Tabellen-Layout_](/de/docs/Web/CSS/CSS_table), entworfen für das Layout von Tabellen.
- _Float-Layout_, entworfen, um ein Element links oder rechts zu positionieren, wobei der restliche Inhalt im normalen Fluss darum herum fließt.
- [_Positioniertes Layout_](/de/docs/Web/CSS/CSS_positioned_layout), entworfen für die Positionierung von Elementen ohne große Interaktion mit anderen Elementen.
- [_Mehrspalten-Layout_](/de/docs/Web/CSS/CSS_multicol_layout), entworfen, um Inhalte in Spalten wie in einer Zeitung zu layouten.
- [_Flexibler Boxenlayout_](/de/docs/Web/CSS/CSS_flexible_box_layout), entworfen für das Layout komplexer Seiten, die sich reibungslos anpassen können.
- [_Grid-Layout_](/de/docs/Web/CSS/CSS_grid_layout), entworfen für das Layout von Elementen relativ zu einem festen Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten für ein oder zwei Layout-Modi und haben keine Wirkung, wenn sie auf ein Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- Wichtige Konzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlagerung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Syntax zur Definition von Werten](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreib-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
