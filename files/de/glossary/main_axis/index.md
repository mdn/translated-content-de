---
title: Hauptachse
slug: Glossary/Main_Axis
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Die Hauptachse im {{Glossary("flexbox", "flexbox")}} wird durch die Richtung definiert, die von der {{cssxref("flex-direction")}}-Eigenschaft festgelegt wird. Es gibt vier mögliche Werte für `flex-direction`. Diese sind:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Sollten Sie `row` oder `row-reverse` wählen, dann verläuft Ihre Hauptachse entlang der Zeile in der Inline-Richtung.

![In diesem Bild ist die flex-Direction auf row gesetzt, was die Hauptachse bildet](basics1.png)

Wählen Sie `column` oder `column-reverse`, und Ihre Hauptachse verläuft von oben nach unten der Seite in der Block-Richtung.

![Drei Flex-Elemente nehmen die volle Breite des Containers ein und werden nacheinander in der Reihenfolge des Codes angezeigt. Flex-direction ist auf column gesetzt. Die Hauptachse ist vertikal, d.h. von oben nach unten](basics2.png)

Auf der Hauptachse können Sie die Größe von Flex-Elementen steuern, indem Sie den vorhandenen Platz den Elementen selbst hinzufügen, mithilfe der `flex`-Eigenschaften auf den Elementen. Oder, Sie können den Raum zwischen und um die Elemente herum mit der `justify-content`-Eigenschaft steuern.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Weiterführende Literatur

- CSS-Flexbox-Leitfäden:
  - [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
