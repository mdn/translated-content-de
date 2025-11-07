---
title: Hauptachse
slug: Glossary/Main_Axis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Hauptachse in {{Glossary("flexbox", "flexbox")}} wird durch die Richtung festgelegt, die durch die Eigenschaft {{cssxref("flex-direction")}} gesetzt wird. Es gibt vier mögliche Werte für `flex-direction`. Diese sind:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wählen Sie `row` oder `row-reverse`, dann verläuft Ihre Hauptachse entlang der Zeile in der Inline-Richtung.

![In diesem Bild ist die flex-direction auf row gesetzt, wodurch die Hauptachse entsteht](basics1.png)

Wählen Sie `column` oder `column-reverse`, und Ihre Hauptachse verläuft von oben nach unten auf der Seite in der Block-Richtung.

![Drei Flex-Elemente nehmen die volle Breite des Containers ein, werden im Code nacheinander untereinander angezeigt. Flex-direction ist auf Spalte gesetzt. Die Hauptachse ist vertikal, also von oben nach unten](basics2.png)

Auf der Hauptachse können Sie die Größe der Flex-Elemente steuern, indem Sie den vorhandenen Platz den Elementen selbst hinzufügen, mittels der `flex`-Eigenschaften auf den Elementen. Oder Sie können den Raum zwischen und um die Elemente herum mit Hilfe der Eigenschaft `justify-content` steuern.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Weiterführende Lektüre

- CSS-Flexbox-Leitfäden:
  - [Grundlagen der Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
