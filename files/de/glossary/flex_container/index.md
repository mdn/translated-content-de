---
title: Flex Container
slug: Glossary/Flex_Container
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Ein [flexbox](/de/docs/Glossary/flexbox) Layout wird durch die Verwendung der Werte `flex` oder `inline-flex` der `display` Eigenschaft auf dem Elternelement definiert. Dieses Element wird dann zu einem **Flex-Container** und jedes seiner Kinder wird zu einem [Flex-Item](/de/docs/Glossary/flex_item).

Ein Wert von `flex` bewirkt, dass das Element zu einem Block-Level-Flex-Container wird, und `inline-flex` zu einem Inline-Level-Flex-Container. Diese Werte erstellen einen **Flex-Formatting-Kontext** für das Element, ähnlich einem Block-Formatting-Kontext, in dem Floats nicht in den Container eindringen, und die Ränder des Containers sich nicht mit denen der Elemente überlappen.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("flex")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### Weiterführende Literatur

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Meistern des Umbruchs von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS-Flexbox-Inspektor: Flexbox-Layouts untersuchen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
