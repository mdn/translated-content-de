---
title: Layout-Modus
slug: Web/CSS/Layout_mode
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

Ein [CSS](/de/docs/Web/CSS) **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein Algorithmus, der die Position und Größe von Boxen bestimmt, basierend darauf, wie sie mit ihren benachbarten und übergeordneten Boxen interagieren. Es gibt mehrere davon:

- _[Normalfluss](/de/docs/Web/CSS/CSS_display/flow_layout)_ — alle Elemente sind Teil des Normalflusses, bis Sie etwas unternehmen, um sie daraus zu entfernen. Der Normalfluss umfasst _Block-Layout_, das für das Layout von Boxen wie Absätzen entwickelt wurde, und _Inline-Layout_, das Inline-Elemente wie Text anordnet.
- [_Tabellenlayout_](/de/docs/Web/CSS/CSS_table), entwickelt für das Layout von Tabellen.
- _Float-Layout_, das dazu entwickelt wurde, dass sich ein Element links oder rechts positioniert, während der restliche Inhalt im Normalfluss darum herumfließt.
- [_Positioniertes Layout_](/de/docs/Web/CSS/CSS_positioned_layout), entwickelt, um Elemente ohne viel Interaktion mit anderen Elementen zu positionieren.
- [_Mehrspaltenlayout_](/de/docs/Web/CSS/CSS_multicol_layout), entwickelt, um Inhalte wie in einer Zeitung in Spalten anzuordnen.
- [_Flexibles Box-Layout_](/de/docs/Web/CSS/CSS_flexible_box_layout), entwickelt für das Layout von komplexen Seiten, die sich nahtlos anpassen lassen.
- [_Rasterlayout_](/de/docs/Web/CSS/CSS_grid_layout), entwickelt für das Layout von Elementen relativ zu einem festen Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten gelten für ein oder zwei davon und haben keine Wirkung, wenn sie auf ein Element angewendet werden, das in einem anderen Layout-Modus beteiligt ist.

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wert-Definitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Abkürzungs-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
