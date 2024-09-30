---
title: Cross Axis
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **cross axis** (Querachse) im [Flexbox](/de/docs/Glossary/flexbox) verläuft senkrecht zur [main axis](/de/docs/Glossary/main_axis) (Hauptachse). Daher, wenn Ihre {{cssxref("flex-direction")}} entweder `row` oder `row-reverse` ist, verläuft die Querachse entlang der Spalten.

![Die Querachse verläuft entlang der Spalte](basics3.png)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Reihen.

![Die Querachse verläuft entlang der Reihe.](basics4.png)

Die Ausrichtung von Elementen auf der Querachse wird mit der `align-items`-Eigenschaft des Flexcontainers oder der `align-self`-Eigenschaft der einzelnen Elemente erreicht. Im Fall eines mehrzeiligen Flexcontainers, mit zusätzlichem Platz auf der Querachse, können Sie `align-content` verwenden, um den Abstand der Reihen zu steuern.

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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Meisterung des Umbruchs von Flexelementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)

Verwandte Glossareinträge:

- [Flex](/de/docs/Glossary/Flex)
- [Flex Container](/de/docs/Glossary/Flex_Container)
- [Flex Item](/de/docs/Glossary/Flex_Item)
- [Grid](/de/docs/Glossary/Grid)
