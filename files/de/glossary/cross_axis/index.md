---
title: Kreuzachse
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Die **Kreuzachse** in {{Glossary("flexbox", "flexbox")}} verläuft senkrecht zur {{Glossary("main_axis", "Hauptachse")}}. Daher, wenn Ihre {{cssxref("flex-direction")}} entweder `row` oder `row-reverse` ist, verläuft die Kreuzachse entlang der Spalten.

![Die Kreuzachse verläuft entlang der Spalte](basics3.png)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Kreuzachse entlang der Reihen.

![Die Kreuzachse verläuft entlang der Reihe.](basics4.png)

Die Ausrichtung der Elemente auf der Kreuzachse wird mit der Eigenschaft `align-items` am Flex-Container oder der Eigenschaft `align-self` bei einzelnen Elementen erreicht. Im Fall eines mehrzeiligen Flex-Containers, mit zusätzlichem Raum auf der Kreuzachse, können Sie `align-content` verwenden, um den Abstand der Reihen zu steuern.

## Siehe auch

### Eigenschaftsreferenz

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
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- Verwandte Glossarbegriffe:
  - {{Glossary("Flex", "Flex")}}
  - {{Glossary("Flex_Container", "Flex-Container")}}
  - {{Glossary("Flex_Item", "Flex-Element")}}
  - {{Glossary("Grid", "Grid")}}
