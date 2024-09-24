---
title: CSS logische Eigenschaften und Werte
slug: Web/CSS/CSS_logical_properties_and_values
l10n:
  sourceCommit: 63249f6b1e89f42e172878c54a2f9674bee50904
---

{{CSSRef}}

Das **Modul für CSS logische Eigenschaften und Werte** definiert logische Eigenschaften und Werte, die das Layout durch logische anstelle von physischen Richtungs- und Dimensionszuordnungen steuern können. Logische Eigenschaften definieren richtungsrelative Entsprechungen ihrer entsprechenden physischen Eigenschaften.

Der Anfang einer Zeile ist nicht immer die linke Seite einer Zeile. Verschiedene Schriftsysteme operieren in verschiedenen Richtungen. Zum Beispiel:

- Englisch und Portugiesisch werden von links nach rechts geschrieben, wobei neue Zeilen unter den vorherigen hinzugefügt werden.
- Hebräisch und Arabisch sind von rechts nach links verlaufende Sprachen, wobei auch hier neue Zeilen unter den vorherigen hinzugefügt werden.
- In einigen Schreibmodi sind die Textzeilen vertikal und werden von oben nach unten geschrieben. Chinesisch, Vietnamesisch, Koreanisch und Japanisch werden traditionell vertikal geschrieben, von oben nach unten, wobei jede neue vertikale Linie links von der vorherigen hinzugefügt wird.
- Traditionelles Mongolisch ist ebenfalls eine von oben nach unten verlaufende Sprache, jedoch werden neue Zeilen rechts von vorherigen hinzugefügt.

Die in diesem Modul definierten logischen Eigenschaften ermöglichen die Definition von Eigenschaften relativ zur Schreibrichtung des Inhalts, anstatt einer physischen Richtung. Dies bedeutet, dass Inhalte, die in Sprachen mit unterschiedlichen Schreibmodi übersetzt wurden, wie beabsichtigt wiedergegeben werden.

Logische Eigenschaften und Werte verwenden die abstrakten Begriffe _Block_ und _Inline_, um die Richtung zu beschreiben, in der sie fließen. Die physische Bedeutung dieser Begriffe hängt vom [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) ab.

Die **Block-Dimension** steht senkrecht zum Textfluss innerhalb einer Zeile, d. h. die vertikale Dimension in horizontalen Schreibmodi und die horizontale Dimension in vertikalen Schreibmodi. Für normalen englischen Text ist es die vertikale Dimension.

Die **Inline-Dimension** verläuft parallel zum Textfluss innerhalb einer Zeile, d.h. die horizontale Dimension in horizontalen Schreibmodi und die vertikale Dimension in vertikalen Schreibmodi. Für normalen englischen Text ist es die horizontale Dimension.

CSS wurde ursprünglich nur mit physischen Koordinaten entworfen. Das Modul für logische Eigenschaften und Werte definiert fluss-relative Entsprechungen für viele [Werte](/de/docs/Web/CSS/CSS_Values_and_Units) und [Eigenschaften](/de/docs/Glossary/Property/CSS). Eigenschaften, die einst nur physische Werte akzeptierten (`top`, `bottom`, `left`, `right`), akzeptieren jetzt auch fluss-relative logische Werte (`block-start`, `block-end`, `inline-start`, `inline-end`).

## Referenz

### Eigenschaften

- {{cssxref("block-size")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("inline-size")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-block-end")}}
- {{cssxref("margin-block-start")}}
- {{cssxref("margin-inline")}}
- {{cssxref("margin-inline-end")}}
- {{cssxref("margin-inline-start")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-block-end")}}
- {{cssxref("padding-block-start")}}
- {{cssxref("padding-inline")}}
- {{cssxref("padding-inline-end")}}
- {{cssxref("padding-inline-start")}}

### Datentypen und Werte

{{glossary("Flow relative values")}}:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`
- `start`
- `end`

### Glossarbegriffe

- {{glossary("Flow relative values")}}
- {{glossary("Inset properties")}}
- {{glossary("Logical properties")}}
- {{glossary("Physical properties")}}

## Leitfäden

- [Grundkonzepte der logischen Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)

  - : Überblick über fluss-relative Eigenschaften und Werte.

- [Logische Eigenschaften für Größen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)

  - : Fluss-relative Zuordnungen zwischen physischen Eigenschaften und logischen Eigenschaften, die für die Größenbestimmung von Elementen auf der Seite verwendet werden.

- [Logische Eigenschaften für Ränder, Rahmen und Abstände](/de/docs/Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding)

  - : Fluss-relative Zuordnungen für die verschiedenen Rand-, Rahmen- und Abstands-Eigenschaften und ihre Kurzformate.

- [Logische Eigenschaften für Floats und Positionierung](/de/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning)

  - : Detaillierte Zuordnungen zwischen physischen und logischen Werten für `float` und `clear`, [Inset-Eigenschaften](/de/docs/Glossary/Inset_properties) und `resize`.

## Verwandte Konzepte

- {{CSSxRef("caption-side")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("float")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("text-align")}}

[CSS Boxmodell](/de/docs/Web/CSS/CSS_box_model)

- {{CSSxRef("margin")}} Kurzform
- {{CSSxRef("padding")}} Kurzform

[CSS Boxgrößenbestimmung](/de/docs/Web/CSS/CSS_box_sizing)

- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}

[CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)

- {{CSSxRef("border-color")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("border")}} Kurzform
- {{CSSxRef("border-radius")}}

[CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)

- {{CSSxRef("top")}}
- {{CSSxRef("right")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("left")}}

[CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)

- {{CSSxRef("direction")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("writing-mode")}}

[CSS Eingrenzung](/de/docs/Web/CSS/CSS_containment)

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

[CSS Überlauf](/de/docs/Web/CSS/CSS_overflow)

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}

[CSS Überscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior)

- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
