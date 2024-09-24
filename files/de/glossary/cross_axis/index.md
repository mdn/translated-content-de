---
title: Querachse
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Die **Querachse** im {{glossary("flexbox")}} verläuft senkrecht zur {{glossary("Hauptachse")}}, daher läuft die Querachse entlang der Spalten, wenn Ihre {{cssxref("flex-direction")}} entweder `row` oder `row-reverse` ist.

![Die Querachse verläuft entlang der Spalte](basics3.png)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Die Querachse verläuft entlang der Zeile.](basics4.png)

Die Ausrichtung von Elementen auf der Querachse wird mit der `align-items`-Eigenschaft des Flex-Containers oder der `align-self`-Eigenschaft einzelner Elemente erreicht. Bei einem mehrzeiligen Flex-Container, mit zusätzlichem Raum auf der Querachse, können Sie `align-content` verwenden, um den Abstand der Zeilen zu steuern.

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

CSS-Flexbox-Leitfäden:

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Meistern des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- Verwandte Glossarbegriffe:
  - {{Glossary("Flex")}}
  - {{Glossary("Flex Container")}}
  - {{Glossary("Flex Item")}}
  - {{Glossary("Grid")}}
