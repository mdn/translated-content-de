---
title: Hauptachse
slug: Glossary/Main_Axis
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Die Hauptachse in {{glossary("flexbox")}} wird durch die Richtung definiert, die durch die Eigenschaft {{cssxref("flex-direction")}} festgelegt wird. Es gibt vier mögliche Werte für `flex-direction`. Diese sind:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wählen Sie `row` oder `row-reverse`, dann verläuft Ihre Hauptachse entlang der Zeile in Inline-Richtung.

![In diesem Bild ist die flex-direction auf row gesetzt, was die Hauptachse bildet](basics1.png)

Wählen Sie `column` oder `column-reverse`, und Ihre Hauptachse verläuft von oben nach unten auf der Seite in Blockrichtung.

![Drei Flex-Elemente, die die volle Breite des Containers einnehmen und in der Code-Reihenfolge untereinander angezeigt werden. Die flex-direction ist auf column gesetzt. Die Hauptachse ist vertikal, d.h. von oben nach unten](basics2.png)

Auf der Hauptachse können Sie die Größenanpassung der Flex-Elemente steuern, indem Sie ihnen über `flex`-Eigenschaften auf den Elementen verfügbaren Platz hinzufügen. Oder Sie können den Raum zwischen und um die Elemente mit der Eigenschaft `justify-content` steuern.

## Siehe auch

### Eigenschaftenreferenz

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Weiterführende Literatur

- CSS Flexbox-Anleitungen:
  - [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
