---
title: Inset-Eigenschaften
slug: Glossary/Inset_properties
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In CSS steuern **inset-Eigenschaften** die Position von positionierten Elementen, indem sie Verschiebungen von den Standardpositionen der Elemente festlegen. Es gibt physische, logische und Kurzform-Inset-Eigenschaften.

Zu den inset-Eigenschaften gehören die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}} und {{cssxref("right")}}, ihre flussrelativen {{Glossary("logical_properties", "logischen Eigenschaft")}} Äquivalente {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}, sowie die Kurzformen {{cssxref("inset-block")}}, {{cssxref("inset-inline")}} und {{cssxref("inset")}}.

**Physische Eigenschaften** beziehen sich auf spezifische physische Seiten eines Elements. Logische Eigenschaften verwenden Richtungsschlüsselwörter relativ zu den Block- und Inline-Achsen. Die **Block-Achse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Die **Inline-Achse** steht senkrecht zur Block-Achse und repräsentiert die Richtung, entlang derer Inline-Inhalte wie Text innerhalb eines Blocks fließen. Die Zuordnung hängt ab vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements.

Die Interpretation von Inset-Eigenschaften hängt vom Wert der {{cssxref("position")}} Eigenschaft ab. Wenn `position: absolute` festgelegt ist, repräsentieren sie Insets vom [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) oder [Anker-Element](/de/docs/Web/CSS/CSS_anchor_positioning/Using). Mit `position: relative` stellen sie Insets von der Standard-Randkante der Box dar. Bei `sticky` repräsentieren sie Insets von der Kante des {{Glossary("scroll_container", "Scroll-Containers")}}. Der Wert `fixed` ähnelt `absolute`, außer dass das Element relativ zu seinem enthaltenen Fixblock positioniert und skaliert wird, der oft der Viewport ist.

## Siehe auch

- [Layout und der enthältende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
