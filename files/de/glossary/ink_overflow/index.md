---
title: Tintenüberlauf
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{GlossarySidebar}}

Der **Tintenüberlauf** einer Box bezieht sich auf den Teil der Box und ihres Inhalts, der einen visuellen Effekt außerhalb der Begrenzungsbox der Box erzeugt. Da es sich nur um einen visuellen Effekt handelt, beeinflusst der Tintenüberlauf das Layout nicht, da er keine Auswirkungen auf die Eigenschaften des Box-Modells hat.

Der Tintenüberlauf umfasst die Überläufe von Maleffekten wie [Box-Schatten](/de/docs/Web/CSS/box-shadow), [Rahmenbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders), [Textdekorationen](/de/docs/Web/CSS/CSS_text_decoration), [Rahmenlinien (Outlines)](/de/docs/Web/CSS/outline) usw., die das Layout nicht beeinflussen oder den überlaufbaren Bereich nicht erweitern. Tintenüberlauf umfasst auch überhängende Glyphen, wie z. B. Oberlängen und Unterlängen, die außerhalb der `em`-Box liegen.

Da [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) immer einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) etablieren, ist jeder Überlauf von ersetzten Inhalten immer Tintenüberlauf (im Gegensatz zum [scrollbaren Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)).

## Siehe auch

- [CSS-Overflow-Modul](/de/docs/Web/CSS/CSS_overflow)
