---
title: Tintenüberlauf
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

Der **Tintenüberlauf** einer Box bezieht sich auf den Teil der Box und ihres Inhalts, der einen visuellen Effekt außerhalb der Begrenzung der Box erzeugt. Da es sich nur um visuelle Effekte handelt, beeinflusst der Tintenüberlauf nicht das Layout, da er keine Auswirkungen auf die Eigenschaften des Boxmodells hat.

Tintenüberlauf umfasst Malereffekte wie [Box-Schatten](/de/docs/Web/CSS/box-shadow), [Rahmenbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders), [Textdekoration](/de/docs/Web/CSS/CSS_text_decoration), [Umrisse](/de/docs/Web/CSS/outline) usw., die das Layout nicht beeinflussen oder den scrollbareren Überlaufbereich nicht erweitern. Tintenüberlauf ist auch das Überhängen von Glyphen, wie zum Beispiel Abstriche und Unterlängen, die außerhalb der Em-Box liegen.

Da [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) immer einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) etablieren, ist jedes Überlaufen von ersetzten Inhalten immer Tintenüberlauf (im Gegensatz zu [scrollbarem Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)).

## Siehe auch

- [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow)
