---
title: Cross-Achse
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Die **Cross-Achse** in [flexbox](/de/docs/Glossary/flexbox) verläuft senkrecht zur [Hauptachse](/de/docs/Glossary/main_axis). Wenn Ihre {{cssxref("flex-direction")}} entweder `row` oder `row-reverse` ist, verläuft die Cross-Achse die Spalten hinunter.

![Die Cross-Achse verläuft die Spalte hinunter.](basics3.png)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Cross-Achse entlang der Zeilen.

![Die Cross-Achse verläuft entlang der Zeile.](basics4.png)

Die Ausrichtung von Elementen auf der Cross-Achse wird mit der Eigenschaft `align-items` am Flex-Container oder der Eigenschaft `align-self` an einzelnen Elementen erreicht. Im Falle eines mehrzeiligen Flex-Containers mit zusätzlichem Raum auf der Cross-Achse können Sie `align-content` verwenden, um den Abstand der Zeilen zu steuern.

## Siehe auch

### Eigenschaftenreferenz

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("order")}}

### Weiterführende Lektüre

CSS Flexbox-Leitfäden:

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- Verwandte Glossareinträge:
  - [Flex](/de/docs/Glossary/Flex)
  - [Flex-Container](/de/docs/Glossary/Flex_Container)
  - [Flex-Element](/de/docs/Glossary/Flex_Item)
  - [Grid](/de/docs/Glossary/Grid)
