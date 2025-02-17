---
title: Inset-Eigenschaften
slug: Glossary/Inset_properties
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{GlossarySidebar}}

In CSS steuern **Inset-Eigenschaften** die Position von positionierten Elementen, indem Versätze von den Standardpositionen der Elemente angegeben werden. Es gibt physische, logische und Kurzschreibweisen für Inset-Eigenschaften.

Zu den Inset-Eigenschaften gehören die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}} und {{cssxref("right")}}, ihre äquivalenten, flussbezogenen {{Glossary("logical_properties", "logischen Eigenschaften")}} {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}} sowie die Kurzschreibweisen {{cssxref("inset-block")}}, {{cssxref("inset-inline")}} und {{cssxref("inset")}}.

**Physische Eigenschaften** beziehen sich auf bestimmte physische Seiten eines Elements. Logische Eigenschaften verwenden Richtungsschlüsselwörter relativ zu den Block- und Inline-Achsen. Die **Block-Achse** ist die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Die **Inline-Achse** ist senkrecht zur Block-Achse und repräsentiert die Richtung, in der Inline-Inhalte wie Text innerhalb eines Blocks fließen. Die Zuordnung hängt vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements ab.

Die Interpretation der Inset-Eigenschaften hängt vom Wert der {{cssxref("position")}}-Eigenschaft ab. Wenn `position: absolute` gesetzt ist, stellen sie Versätze vom [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) oder [Anchor-Element](/de/docs/Web/CSS/CSS_anchor_positioning/Using) dar. Mit `position: relative` repräsentieren sie Versätze von der Standardposition des Margin-Randes des Elements. Bei `sticky` stellen sie Versätze vom Rand des {{Glossary("scroll_container", "Scroll-Containers")}} dar. Der Wert `fixed` ist `absolute` ähnlich, außer dass das Element relativ zu seinem festen Positionierungs-Containing-Block positioniert und dimensioniert wird, welcher oft der Viewport ist.

## Siehe auch

- [Layout und der Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Modul für CSS-Positionierungs-Layouts](/de/docs/Web/CSS/CSS_positioned_layout)
- [Modul für CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Modul für CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)
