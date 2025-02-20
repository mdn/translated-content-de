---
title: Layout-Modus
slug: Web/CSS/Layout_mode
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Ein [CSS](/de/docs/Web/CSS) **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein Algorithmus, der die Position und Größe von Boxen bestimmt, basierend auf der Art und Weise, wie sie mit ihren Nachbar- und Vorfahren-Boxen interagieren. Es gibt mehrere Layout-Modi:

- _[Normaler Fluss](/de/docs/Web/CSS/CSS_display/flow_layout)_ — alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst _Blocklayout_, das für das Layout von Boxen wie Absätzen vorgesehen ist, und _Inline-Layout_, das Inline-Elemente wie Text anordnet.
- [_Tabellenlayout_](/de/docs/Web/CSS/CSS_table), das für das Layout von Tabellen entwickelt wurde.
- _Float-Layout_, das darauf ausgelegt ist, ein Element nach links oder rechts zu positionieren, während der restliche Inhalt im normalen Fluss darum herumfließt.
- [_Positioniertes Layout_](/de/docs/Web/CSS/CSS_positioned_layout), vorgesehen für das Positionieren von Elementen mit wenig Interaktion mit anderen Elementen.
- [_Mehrspalten-Layout_](/de/docs/Web/CSS/CSS_multicol_layout), konzipiert für das Layout von Inhalten in Spalten, wie in einer Zeitung.
- [_Flexibler Box-Layout_](/de/docs/Web/CSS/CSS_flexible_box_layout), entwickelt für komplexe Layouts, die sich nahtlos anpassen lassen.
- [_Rasterlayout_](/de/docs/Web/CSS/CSS_grid_layout), konzipiert für das Layout von Elementen relativ zu einem festen Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten Eigenschaften gelten nur für einen oder zwei Modi und haben keine Wirkung, wenn sie auf einem Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- Wichtige Konzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte:
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
