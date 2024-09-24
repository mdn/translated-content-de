---
title: Flex-Container
slug: Glossary/Flex_Container
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Ein {{glossary("flexbox")}}-Layout wird definiert, indem die Werte `flex` oder `inline-flex` der `display`-Eigenschaft auf dem Elternelement angewendet werden. Dieses Element wird dann zu einem **Flex-Container**, und jedes seiner Kinder wird zu einem {{glossary("flex item")}}.

Ein Wert von `flex` bewirkt, dass das Element zu einem Block-Level-Flex-Container wird, und `inline-flex` zu einem Inline-Level-Flex-Container. Diese Werte erzeugen einen **Flex-Formatierungskontext** für das Element, der ähnlich wie ein Block-Formatierungskontext ist, da Floats nicht in den Container eindringen, und die Ränder des Containers sich nicht mit denen der Items überlappen.

## Siehe auch

### Eigenschaftenreferenz

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
- [Meistern des Wickelns von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS-Flexbox-Inspector: Untersuchen von Flexbox-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
