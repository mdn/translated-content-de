---
title: Hauptachse
slug: Glossary/Main_Axis
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Die Hauptachse in {{Glossary("flexbox", "flexbox")}} wird durch die Richtung definiert, die durch die {{cssxref("flex-direction")}} Eigenschaft festgelegt wird. Es gibt vier mögliche Werte für `flex-direction`. Diese sind:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in der Inline-Richtung.

![In diesem Bild ist die flex-direction auf row eingestellt, was die Hauptachse bildet](basics1.png)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse von oben nach unten der Seite in der Block-Richtung.

![Drei Flex-Elemente nehmen die gesamte Breite des Containers ein und werden in Code-Reihenfolge untereinander angezeigt. Flex-direction ist auf column eingestellt. Die Hauptachse verläuft vertikal, d.h. von oben nach unten](basics2.png)

Auf der Hauptachse können Sie die Größe von Flex-Elementen steuern, indem Sie den Elementen selbst durch die `flex`-Eigenschaften auf den Elementen verfügbaren Platz hinzufügen. Oder Sie können den Raum zwischen und um die Elemente herum mit der `justify-content` Eigenschaft steuern.

## Siehe auch

### Eigenschaftenreferenz

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Weiterführende Literatur

- CSS-Flexbox-Leitfäden:
  - [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - [Steuern von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
