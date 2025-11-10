---
title: CSS logische Eigenschaften und Werte
short-title: Logische Eigenschaften und Werte
slug: Web/CSS/Guides/Logical_properties_and_values
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Modul für logische Eigenschaften und Werte** definiert logische Eigenschaften und Werte, die Layouts durch logische statt physische Richtungs- und Dimensionszuordnungen steuern können. Logische Eigenschaften definieren richtungsbezogene Äquivalente zu ihren entsprechenden physikalischen Eigenschaften.

Der Anfang einer Zeile ist nicht immer die linke Seite. Verschiedene Schriftsysteme arbeiten in unterschiedlichen Richtungen. Zum Beispiel:

- Englisch und Portugiesisch werden von links nach rechts geschrieben, wobei neue Zeilen unter den vorherigen hinzugefügt werden.
- Hebräisch und Arabisch sind Sprachen, die von rechts nach links geschrieben werden, wobei neue Zeilen ebenfalls unter den vorherigen hinzugefügt werden.
- In einigen Schreibmodi sind die Textzeilen vertikal und werden von oben nach unten geschrieben. Chinesisch, Vietnamesisch, Koreanisch und Japanisch werden traditionell vertikal von oben nach unten geschrieben, wobei jede neue vertikale Zeile links von der vorherigen hinzugefügt wird.
- Traditionelles Mongolisch ist ebenfalls eine von oben nach unten geschriebene Sprache, jedoch werden neue Zeilen rechts von den vorherigen hinzugefügt.

Die in diesem Modul definierten logischen Eigenschaften ermöglichen es, Eigenschaften relativ zur Schreibrichtung des Inhalts zu definieren, anstatt in physische Richtung. Dies bedeutet, dass ins Deutsche oder andere Sprachen mit unterschiedlichen Schreibmodi übersetzte Inhalte wie beabsichtigt wiedergegeben werden.

Logische Eigenschaften und Werte verwenden die abstrakten Begriffe _block_ und _inline_, um die Richtung zu beschreiben, in der sie fließen. Die physische Bedeutung dieser Begriffe hängt vom [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) ab.

Die **Block-Dimension** steht senkrecht zum Textfluss innerhalb einer Zeile, das heißt, es ist die vertikale Dimension in horizontalen Schreibmodi und die horizontale Dimension in vertikalen Schreibmodi. Für englischen Standardtext ist es die vertikale Dimension.

Die **Inline-Dimension** ist parallel zum Textfluss innerhalb einer Zeile, das heißt, es ist die horizontale Dimension in horizontalen Schreibmodi und die vertikale Dimension in vertikalen Schreibmodi. Für englischen Standardtext ist es die horizontale Dimension.

Ursprünglich wurde CSS nur mit physischen Koordinaten gestaltet. Das Modul für logische Eigenschaften und Werte definiert flussbezogene Äquivalente für viele [Werte](/de/docs/Web/CSS/Guides/Values_and_units) und {{Glossary("Property/CSS", "Eigenschaften")}}. Eigenschaften, die einst nur physische Werte akzeptierten (`top`, `bottom`, `left`, `right`), akzeptieren jetzt auch flussbezogene logische Werte (`block-start`, `block-end`, `inline-start`, `inline-end`).

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

{{Glossary("Flow_relative_values", "Flussbezogene Werte")}}:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`
- `start`
- `end`

### Glossarbegriffe

- {{Glossary("Flow_relative_values", "Flussbezogene Werte")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- {{Glossary("Logical_properties", "Logische Eigenschaften")}}
- {{Glossary("Physical_properties", "Physikalische Eigenschaften")}}

## Leitfäden

- [Grundkonzepte zu logischen Eigenschaften und Werten](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts)
  - : Überblick über flussbezogene Eigenschaften und Werte.

- [Logische Eigenschaften für Größenangaben](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Sizing)
  - : Flussbezogene Zuordnungen zwischen physikalischen und logischen Eigenschaften zur Größenbestimmung von Elementen auf der Seite.

- [Logische Eigenschaften für Ränder, Rahmen und Abstände](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Margins_borders_padding)
  - : Flussbezogene Zuordnungen für die verschiedenen Rand-, Rahmen- und Abstandseigenschaften und deren Kurzformen.

- [Logische Eigenschaften für Floats und Positionierung](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning)
  - : Details zu den Zuordnungen zwischen physischen und logischen Werten für `float` und `clear`, {{Glossary("Inset_properties", "Inset-Eigenschaften")}} und `resize`.

## Verwandte Konzepte

- {{CSSxRef("caption-side")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("float")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("text-align")}}

[CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)

- {{CSSxRef("margin")}} Kurzform
- {{CSSxRef("padding")}} Kurzform

[CSS-Box-Größenanpassung](/de/docs/Web/CSS/Guides/Box_sizing)

- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}

[CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)

- {{CSSxRef("border-color")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("border")}} Kurzform
- {{CSSxRef("border-radius")}}

[CSS-Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout)

- {{CSSxRef("top")}}
- {{CSSxRef("right")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("left")}}

[CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes)

- {{CSSxRef("direction")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("writing-mode")}}

[CSS-Eindämmung](/de/docs/Web/CSS/Guides/Containment)

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

[CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow)

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}

[CSS-Umschrallverhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior)

- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [CSS Flexibles Boxenlayout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
