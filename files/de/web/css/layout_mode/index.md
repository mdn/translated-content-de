---
title: Layout-Modus
slug: Web/CSS/Layout_mode
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Ein [CSS](/de/docs/Web/CSS) **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein Algorithmus, der die Position und Größe von Boxen basierend auf ihrer Interaktion mit benachbarten und übergeordneten Boxen bestimmt. Es gibt mehrere solcher Modi:

- _[Normaler Fluss](/de/docs/Web/CSS/CSS_display/Flow_layout)_ — alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst die _Block-Layout_, das für das Layout von Boxen wie Absätzen entwickelt wurde, und die _Inline-Layout_, das Inline-Elemente wie Text anordnet.
- [_Tabellen-Layout_](/de/docs/Web/CSS/CSS_table), entwickelt für das Layout von Tabellen.
- _Float-Layout_, entwickelt, um ein Element links oder rechts zu positionieren, während der restliche Inhalt im normalen Fluss darum herumfließt.
- [_Positioniertes Layout_](/de/docs/Web/CSS/CSS_positioned_layout), entwickelt, um Elemente zu positionieren, ohne viel Interaktion mit anderen Elementen.
- [_Mehrspalten-Layout_](/de/docs/Web/CSS/CSS_multicol_layout), entwickelt, um Inhalte in Spalten anzuordnen, wie in einer Zeitung.
- [_Flexibles Box-Layout_](/de/docs/Web/CSS/CSS_flexible_box_layout), entwickelt für das Layout komplexer Seiten, die sich reibungslos anpassen lassen.
- [_Gitter-Layout_](/de/docs/Web/CSS/CSS_grid_layout), entwickelt, um Elemente relativ zu einem festen Gitter anzuordnen.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten für einen oder zwei von ihnen und haben keine Wirkung, wenn sie auf ein Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Zusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
