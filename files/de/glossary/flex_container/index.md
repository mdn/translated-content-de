---
title: Flex-Container
slug: Glossary/Flex_Container
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein {{Glossary("flexbox", "Flexbox")}}-Layout wird durch die Werte `flex` oder `inline-flex` der `display`-Eigenschaft auf dem Elternelement definiert. Dieses Element wird dann zu einem **Flex-Container**, und jedes seiner Kinder wird zu einem {{Glossary("flex_item", "Flex-Element")}}.

Ein Wert von `flex` bewirkt, dass das Element zu einem Block-Level-Flex-Container wird, und `inline-flex` zu einem Inline-Level-Flex-Container. Diese Werte erzeugen einen **Flex-Formatierungskontext** für das Element, der ähnlich wie ein Block-Formatierungskontext ist, da Floats nicht in den Container eindringen werden und die Ränder des Containers sich nicht mit denen der Elemente überlappen.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [CSS Flexbox-Inspektor: Flexbox-Layouts untersuchen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
