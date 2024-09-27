---
title: Inset-Eigenschaften
slug: Glossary/Inset_properties
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{GlossarySidebar}}

In CSS steuern **Inset-Eigenschaften** die Positionierung von Elementen, indem sie Versätze von den Standardpositionen der Elemente angeben. Es gibt physische, logische und Kurzschrift-Inset-Eigenschaften.

Zu den Inset-Eigenschaften gehören die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}} und {{cssxref("right")}}, ihre flussrelativen [logischen Eigenschaft](/de/docs/Glossary/logical_properties) Äquivalente {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}, sowie die Kurzformen {{cssxref("inset-block")}}, {{cssxref("inset-inline")}} und {{cssxref("inset")}}.

**Physische Eigenschaften** beziehen sich auf spezifische physische Seiten eines Elements. Logische Eigenschaften verwenden Richtungs-Keywords relativ zu den Block- und Inline-Achsen. Die **Block-Achse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Die **Inline-Achse** steht senkrecht zur Block-Achse und repräsentiert die Richtung, in die Inline-Inhalte, wie Text, innerhalb eines Blocks fließen. Die Zuordnung hängt vom {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} des Elements ab.

Die Interpretation der Inset-Eigenschaften hängt vom Wert der {{cssxref("position")}} Eigenschaft ab. Wenn `position: absolute` festgelegt ist, stellen sie Inset von dem [Containing Block](/de/docs/Web/CSS/Containing_block) oder [Ankerelement](/de/docs/Web/CSS/CSS_anchor_positioning/Using) dar. Mit `position: relative` stellen sie Inset von der Standardrandposition des Box dar. Bei `sticky` beziehen sie sich auf die Inset vom Rand des [Scroll Containers](/de/docs/Glossary/scroll_container). Der Wert `fixed` ist ähnlich wie `absolute`, abgesehen davon, dass das Element relativ zu seinem fixierten Positionierungs-Containing Block positioniert und skaliert wird, der oft der Viewport ist.

## Siehe auch

- [Layout und der Containing Block](/de/docs/Web/CSS/Containing_block)
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
