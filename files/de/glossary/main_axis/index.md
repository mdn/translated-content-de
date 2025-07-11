---
title: Hauptachse
slug: Glossary/Main_Axis
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Die Hauptachse im {{Glossary("flexbox", "flexbox")}} wird durch die Richtung bestimmt, die durch die {{cssxref("flex-direction")}}-Eigenschaft festgelegt wird. Es gibt vier mögliche Werte für `flex-direction`. Diese sind:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in der Inline-Richtung.

![In diesem Bild ist die flex-direction auf row gesetzt, was die Hauptachse bildet](basics1.png)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse von oben nach unten der Seite in der Blockrichtung.

![Drei Flex-Elemente nehmen die volle Breite des Containers ein, dargestellt von oben nach unten in der Reihenfolge des Codes. Flex-direction ist auf column gesetzt. Die Hauptachse ist vertikal, d.h. von oben nach unten](basics2.png)

Auf der Hauptachse können Sie die Größe der Flex-Elemente steuern, indem Sie den Elementen selbst den verfügbaren Platz über `flex`-Eigenschaften hinzufügen. Alternativ können Sie den Platz zwischen und um die Elemente mit der `justify-content`-Eigenschaft steuern.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Weiterführende Literatur

- Leitfäden zu CSS-Flexbox:
  - [Grundkonzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - [Kontrollieren von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
