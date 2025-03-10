---
title: Layout-Modus
slug: Web/CSS/Layout_mode
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

Ein [CSS](/de/docs/Web/CSS) **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein Algorithmus, der die Position und Größe von Boxen bestimmt, basierend darauf, wie sie mit ihren Geschwister- und Vorfahrenboxen interagieren. Es gibt mehrere davon:

- _[Normalfluss](/de/docs/Web/CSS/CSS_display/Flow_layout)_ — alle Elemente sind Teil des Normalflusses, bis Sie etwas tun, um sie daraus zu entfernen. Der Normalfluss umfasst _Block-Layout_, das für das Layouten von Boxen wie Absätzen vorgesehen ist, und _Inline-Layout_, das Inline-Elemente wie Text anordnet.
- [_Tabellen-Layout_](/de/docs/Web/CSS/CSS_table), entworfen für das Layouten von Tabellen.
- _Float-Layout_, entwickelt, um ein Element links oder rechts zu positionieren, wobei der restliche Inhalt im Normalfluss es umgibt.
- [_Positioniertes Layout_](/de/docs/Web/CSS/CSS_positioned_layout), entwickelt, um Elemente ohne viel Interaktion mit anderen Elementen zu positionieren.
- [_Mehrspalten-Layout_](/de/docs/Web/CSS/CSS_multicol_layout), entwickelt, um Inhalte in Spalten wie in einer Zeitung anzuordnen.
- [_Flexibles Box-Layout_](/de/docs/Web/CSS/CSS_flexible_box_layout), entworfen, um komplexe Seitenlayouts zu ermöglichen, die sich reibungslos anpassen lassen.
- [_Raster-Layout_](/de/docs/Web/CSS/CSS_grid_layout), entwickelt, um Elemente relativ zu einem festen Raster anzuordnen.

> [!NOTE]
> Nicht alle [CSS Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten für einen oder zwei Modi und haben keine Wirkung, wenn sie auf einem Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberschneidung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
