---
title: Einfüge-Eigenschaften
slug: Glossary/Inset_properties
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{GlossarySidebar}}

In CSS steuern **Einfüge-Eigenschaften** die Positionierung von Elementen, indem sie Offsets von den Standardpositionen der Elemente angeben. Es gibt physische, logische und abgekürzte Einfüge-Eigenschaften.

Zu den Einfüge-Eigenschaften gehören die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}} und {{cssxref("right")}}, ihre flussrelativen {{glossary("logical properties", "logischen Eigenschaften")}} Äquivalente {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}} sowie die Kurzschreibweisen {{cssxref("inset-block")}}, {{cssxref("inset-inline")}} und {{cssxref("inset")}}.

**Physische Eigenschaften** beziehen sich auf bestimmte physische Seiten eines Elements. Logische Eigenschaften verwenden richtungsbezogene Schlüsselwörter relativ zu den Block- und Inline-Achsen. Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Die **Inline-Achse** steht senkrecht zur Blockachse und repräsentiert die Richtung, in der innerhalb eines Blocks Inline-Inhalt wie Text fließt. Die Zuordnung hängt vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements ab.

Die Interpretation von Einfüge-Eigenschaften hängt vom Wert der {{cssxref("position")}}-Eigenschaft ab. Wenn `position: absolute` gesetzt ist, stellen sie Einfügungen ab dem [enthaltenden Block](/de/docs/Web/CSS/Containing_block) oder dem [Verankerungselement](/de/docs/Web/CSS/CSS_anchor_positioning/Using) dar. Bei `position: relative` stellen sie Einfügungen ab der Standardposition des Randes des Rahmens dar. Bei `sticky` stellen sie Einfügungen vom Rand des {{glossary("scroll container")}} dar. Der Wert `fixed` ist ähnlich wie `absolute`, außer dass das Element relativ zu seinem fixierten Positionierung enthaltenden Block positioniert und dimensioniert wird, der oft das Ansichtsfenster ist.

## Siehe auch

- [Layout und der enthaltende Block](/de/docs/Web/CSS/Containing_block)
- Modul [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)
- Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Modul [CSS Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)
