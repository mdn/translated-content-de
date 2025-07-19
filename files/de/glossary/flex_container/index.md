---
title: Flex-Container
slug: Glossary/Flex_Container
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Ein {{Glossary("flexbox", "flexbox")}}-Layout wird durch die Werte `flex` oder `inline-flex` der `display`-Eigenschaft auf dem Elternelement definiert. Dieses Element wird dann zu einem **Flex-Container**, und jedes seiner Kinder wird zu einem {{Glossary("flex_item", "Flex-Element")}}.

Ein Wert von `flex` führt dazu, dass das Element zu einem Block-Level Flex-Container wird, und `inline-flex` zu einem Inline-Level Flex-Container. Diese Werte schaffen einen **flex formatting context** für das Element, der einem Block-Formatting-Context ähnelt, da `floats` nicht in den Container eindringen werden, und die Ränder des Containers nicht mit denen der Elemente zusammenfallen.

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

- [Grundlagen des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Meisterung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS Flexbox-Inspektor: Untersuchen von Flexbox-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
