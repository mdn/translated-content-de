---
title: Einfügungs-Eigenschaften
slug: Glossary/Inset_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In CSS steuern **Einfügungs-Eigenschaften** die Position von positionierten Elementen, indem sie Offsets von den Standardpositionen der Elemente angeben. Es gibt physische, logische und Kurzschreibweisen der Einfügungs-Eigenschaften.

Die Einfügungs-Eigenschaften umfassen die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}} und {{cssxref("right")}}, ihre flussrelativen {{Glossary("logical_properties", "logischen Eigenschaft")}} Äquivalente {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}, sowie die Kurzschreibweisen {{cssxref("inset-block")}}, {{cssxref("inset-inline")}} und {{cssxref("inset")}}.

**Physische Eigenschaften** beziehen sich auf spezifische physische Seiten eines Elements. Logische Eigenschaften verwenden richtungsabhängige Schlüsselwörter relativ zu den Block- und Inline-Achsen. Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Die **Inline-Achse** ist senkrecht zur Blockachse und repräsentiert die Richtung, entlang der Inline-Inhalt wie Text innerhalb eines Blocks fließt. Die Zuordnung hängt vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements ab.

Die Interpretation der Einfügungs-Eigenschaften hängt vom Wert der {{cssxref("position")}}-Eigenschaft ab. Wenn `position: absolute` gesetzt ist, stellen sie Einfügungen von dem [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) oder dem [Ankerelement](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) dar. Mit `position: relative` stellen sie Einfügungen von der Standardmargenrandecke der Box dar. Mit `sticky` stellen sie Einfügungen vom Rand des {{Glossary("scroll_container", "Scroll-Containers")}} dar. Der `fixed`-Wert ähnelt `absolute`, außer dass das Element relativ zu seinem festen Positionierungs-enthältenden Block positioniert und dimensioniert wird, der oft das Ansichtsfenster ist.

## Siehe auch

- [Layout und der enthältende Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- Modul [CSS positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout)
- Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Modul [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
