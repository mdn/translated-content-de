---
title: Ink-Überlauf
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **Ink-Überlauf** eines Kastens bezieht sich auf den Teil des Kastens und dessen Inhalte, der einen visuellen Effekt außerhalb des Randkastens des Kastens erzeugt. Da er nur visuell ist, beeinflusst der Ink-Überlauf nicht das Layout, da er keine Auswirkungen auf die Eigenschaften des Box-Modells hat.

Ink-Überlauf ist das Überlaufen von Maleffekten wie [Box-Schatten](/de/docs/Web/CSS/Reference/Properties/box-shadow), [Rahmenbilder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders), [Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration), [Umrisse](/de/docs/Web/CSS/Reference/Properties/outline), etc., die das Layout nicht beeinflussen oder anderweitig den scrollbaren Überlaufbereich erweitern. Ink-Überlauf ist auch das Überstehen von Glyphen, wie Auf- und Abstriche, die außerhalb des em-Kastens hinausragen.

Da {{Glossary("replaced_elements", "ersetzte Elemente")}} immer einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Formatting_contexts) etablieren, ist jeglicher Überlauf von ersetztem Inhalt immer Ink-Überlauf (im Gegensatz zum [scrollbaren Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)).

## Siehe auch

- [CSS-Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow)
