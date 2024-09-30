---
title: Ink overflow
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

Der **Ink overflow** eines Kastens bezieht sich auf den Teil des Kastens und seines Inhalts, der einen visuellen Effekt außerhalb des Randbereichs des Kastens erzeugt. Da es sich nur um einen visuellen Effekt handelt, beeinflusst der Ink overflow nicht das Layout, da er keine Auswirkungen auf die Boxmodell-Eigenschaften hat.

Ink overflow ist das Überlaufen von Malereffekten wie z.B. [Box-Schatten](/de/docs/Web/CSS/box-shadow), [Randbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders), [Textdekoration](/de/docs/Web/CSS/CSS_text_decoration), [Umrisse](/de/docs/Web/CSS/outline), etc., die das Layout nicht beeinflussen oder den scrollbar überfließenden Bereich nicht erweitern. Ink overflow ist auch das Überlappen von Glyphen wie Auf- und Abstrichen, die außerhalb des Em-Kastens hinausragen.

Da [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) immer einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) etablieren, ist jegliches Überlaufen von ersetzten Inhalten immer Ink overflow (im Gegensatz zu [scrollbarem Overflow](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)).

## Siehe auch

- [CSS overflow Modul](/de/docs/Web/CSS/CSS_overflow)
