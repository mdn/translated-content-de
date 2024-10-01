---
title: Inset-Eigenschaften
slug: Glossary/Inset_properties
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{GlossarySidebar}}

In CSS steuern **Inset-Eigenschaften** die Position von positionierten Elementen, indem sie Versätze von den Standardpositionen der Elemente angeben. Es gibt physische, logische und Kurznamen-Inset-Eigenschaften.

Zu den Inset-Eigenschaften gehören die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}} und {{cssxref("right")}}, ihre flussbezogenen {{Glossary("logical_properties", "logischen Eigenschaft")}} Entsprechungen {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}, sowie die Kurznamen {{cssxref("inset-block")}}, {{cssxref("inset-inline")}} und {{cssxref("inset")}}.

**Physische Eigenschaften** beziehen sich auf bestimmte physische Seiten eines Elements. Logische Eigenschaften verwenden richtungsbezogene Schlüsselwörter relativ zu den Block- und Inline-Achsen. Die **Block-Achse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Die **Inline-Achse** steht senkrecht zur Block-Achse und repräsentiert die Richtung, entlang derer Inline-Inhalt wie Text innerhalb eines Blocks fließt. Die Zuordnung hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements ab.

Die Interpretation von Inset-Eigenschaften hängt vom Wert der {{cssxref("position")}} Eigenschaft ab. Wenn `position: absolute` festgelegt ist, stellen sie Einsätze aus dem [umfassenden Block](/de/docs/Web/CSS/Containing_block) oder [Ankerelement](/de/docs/Web/CSS/CSS_anchor_positioning/Using) dar. Bei `position: relative` stellen sie Einsätze aus der Standardposition der Ränder des Kastens dar. Mit `sticky` repräsentieren sie Einsätze vom Rand des {{Glossary("scroll_container", "Scroll-Containers")}}. Der Wert `fixed` ähnelt `absolute`, außer dass das Element relativ zu seinem festen Positionierungsblock positioniert und dimensioniert wird, was oft das Ansichtsfenster ist.

## Siehe auch

- [Layout und der umfassende Block](/de/docs/Web/CSS/Containing_block)
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
