---
title: Ink Overflow
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **Ink Overflow** eines Kastens bezieht sich auf den Teil des Kastens und dessen Inhalt, der einen visuellen Effekt außerhalb der Begrenzung des Kastens erzeugt. Da es sich ausschließlich um einen visuellen Effekt handelt, beeinflusst Ink Overflow das Layout nicht, da es keine Auswirkungen auf Box-Model-Eigenschaften hat.

Ink Overflow ist das Überlaufen von Maleffekten wie [Box-Schatten](/de/docs/Web/CSS/Reference/Properties/box-shadow), [Randbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders), [Textdekorationen](/de/docs/Web/CSS/CSS_text_decoration), [Konturen](/de/docs/Web/CSS/Reference/Properties/outline) usw., die das Layout nicht beeinflussen oder den scrollbaren Überlaufbereich nicht erweitern. Ink Overflow ist auch das Überragen von Glyphen, wie Auf- und Abstriche, die außerhalb des Em-Kastens hinausgehen.

Da {{Glossary("replaced_elements", "ersetzte Elemente")}} immer einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) etablieren, ist jeder Überlauf von ersetztem Inhalt immer ein Ink Overflow (im Gegensatz zum [scrollbaren Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)).

## Siehe auch

- [CSS Overflow Modul](/de/docs/Web/CSS/CSS_overflow)
