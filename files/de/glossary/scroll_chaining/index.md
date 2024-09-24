---
title: Scroll-Verkettung
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

**Scroll-Verkettung** bezieht sich auf das Verhalten, das beobachtet wird, wenn ein Benutzer über die {{Glossary("Scroll_boundary", "Scrollgrenze")}} eines scrollbaren Elements hinaus scrollt, was ein Scrollen bei einem übergeordneten Element verursacht.

Wenn ein Benutzer innerhalb eines scrollbaren Elements wie einem `<div>` oder `<textarea>` scrollt und die [scrollport](/de/docs/Glossary/Scroll_container#scrollport)-Grenze (oben, unten, links oder rechts) des scrollbaren Elements erreicht wird, kann es einen "verketteten Effekt" geben, bei dem die Scrollaktion nahtlos auf das übergeordnete Element übertragen wird. Dieses Verhalten schafft eine kontinuierliche Scrollerfahrung, sowohl vertikal als auch horizontal.

Eine **Scroll-Kette** ist die Reihenfolge der scrollbaren Elemente, in der die Scrollaktion von einem Element zum nächsten übergeht. Dies geschieht, wenn ein inneres Element an seinem Limit gescrollt wird, und das Scrollen auf das übergeordnete Element fortgesetzt wird, wodurch eine 'Kette' von Scrollaktionen entsteht. Die Verkettung erfolgt typischerweise rekursiv im enthaltenen Block nach oben.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Überscrollverhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
