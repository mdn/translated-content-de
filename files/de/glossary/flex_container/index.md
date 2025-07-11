---
title: Flex Container
slug: Glossary/Flex_Container
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein {{Glossary("flexbox", "Flexbox-Layout")}} wird definiert, indem man die Werte `flex` oder `inline-flex` der `display`-Eigenschaft beim Elternelement verwendet. Dieses Element wird dann zu einem **Flex-Container**, und jedes seiner Kinder wird zu einem {{Glossary("flex_item", "Flex-Element")}}.

Ein Wert von `flex` führt dazu, dass das Element zu einem Block-Level-Flex-Container wird, und `inline-flex` zu einem Inline-Level-Flex-Container. Diese Werte erzeugen einen **Flex-Formatierungskontext** für das Element, der ähnlich wie ein Block-Formatierungskontext ist, da Floats nicht in den Container eindringen und die Ränder des Containers sich nicht mit denen der Elemente zusammenziehen.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS Flexbox Inspektor: Untersuchen von Flexbox-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
