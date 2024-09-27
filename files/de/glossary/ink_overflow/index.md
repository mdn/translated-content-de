---
title: Ink overflow
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

Der **Ink Overflow** eines Kastens bezieht sich auf den Teil des Kastens und seiner Inhalte, der einen visuellen Effekt außerhalb des Rahmenkastens erzeugt. Da es sich nur um einen visuellen Effekt handelt, beeinflusst Ink Overflow das Layout nicht, da es keine Auswirkungen auf die Eigenschaften des Boxmodells hat.

Ink Overflow ist das Überlaufen von Maleffekten wie [Box-Schatten](/de/docs/Web/CSS/box-shadow), [Rahmenbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders), [Textdekorationen](/de/docs/Web/CSS/CSS_text_decoration), [Konturen](/de/docs/Web/CSS/outline) usw., die das Layout nicht beeinflussen oder den scrollbaren Überlaufbereich nicht erweitern. Ink Overflow ist auch das Überhängen von Glyphen, wie Auf- und Abstriche, die außerhalb des Em-Kastens reichen.

Da [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) immer einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) etablieren, ist jeder Überlauf von ersetzten Inhalten immer Ink Overflow (im Gegensatz zu [scrollbarem Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)).

## Siehe auch

- [CSS Overflow-Modul](/de/docs/Web/CSS/CSS_overflow)
