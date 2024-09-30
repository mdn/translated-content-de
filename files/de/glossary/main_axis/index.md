---
title: Main Axis
slug: Glossary/Main_Axis
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Die Hauptachse im [flexbox](/de/docs/Glossary/flexbox) wird durch die Richtung definiert, die durch die {{cssxref("flex-direction")}} Eigenschaft festgelegt ist. Es gibt vier mögliche Werte für `flex-direction`. Diese sind:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in Richtung der Inline-Ausbreitung.

![In diesem Bild ist die flex-direction auf row gesetzt, was die Hauptachse bildet](basics1.png)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse von oben nach unten auf der Seite in Richtung des Blockflusses.

![Drei Flex-Elemente nehmen die volle Breite des Containers ein, werden in der Code-Reihenfolge untereinander angezeigt. Die Flex-Richtung ist auf column gesetzt. Die Hauptachse ist vertikal, d.h. von oben nach unten](basics2.png)

Auf der Hauptachse können Sie die Größe der Flex-Elemente steuern, indem Sie den verfügbaren Raum den Elementen selbst hinzufügen, durch Verwendung der `flex` Eigenschaften der Elemente. Oder, Sie können den Raum zwischen und um die Elemente herum durch die Verwendung der `justify-content` Eigenschaft steuern.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Weiterführende Lektüre

- CSS Flexbox Leitfäden:
  - [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
