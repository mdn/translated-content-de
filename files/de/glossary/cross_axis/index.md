---
title: Querachse
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **Querachse** im {{Glossary("flexbox", "Flexbox")}} verläuft senkrecht zur {{Glossary("main_axis", "Hauptachse")}}, daher verläuft die Querachse nach unten durch die Spalten, wenn Ihre {{cssxref("flex-direction")}} entweder `row` oder `row-reverse` ist.

![Die Querachse verläuft durch die Spalte nach unten.](basics3.png)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Die Querachse verläuft entlang der Zeile.](basics4.png)

Die Ausrichtung von Elementen auf der Querachse wird mit der Eigenschaft `align-items` am Flex-Container oder mit der Eigenschaft `align-self` an einzelnen Elementen erreicht. Im Fall eines mehrzeiligen Flex-Containers, mit zusätzlichem Raum auf der Querachse, können Sie `align-content` verwenden, um den Abstand der Zeilen zu steuern.

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

### Weiterführende Literatur

CSS Flexbox-Leitfäden:

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Meistern des Wraps von Flex-Items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)

Verwandte Glossarbegriffe:

- {{Glossary("Flex", "Flex")}}
- {{Glossary("Flex_Container", "Flex Container")}}
- {{Glossary("Flex_Item", "Flex Item")}}
- {{Glossary("Grid", "Grid")}}
