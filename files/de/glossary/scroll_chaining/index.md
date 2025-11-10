---
title: Scroll Chaining
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Scroll Chaining** bezieht sich auf das Verhalten, das beobachtet wird, wenn ein Benutzer über die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} eines scrollbaren Elements hinaus scrollt und dadurch ein Scrollen in einem übergeordneten Element verursacht.

Wenn ein Benutzer innerhalb eines scrollbaren Elements, wie einem `<div>` oder `<textarea>`, scrollt und die {{Glossary("Scroll_container#scrollport", "scrollport")}}-Grenze (oben, unten, links oder rechts) des scrollbaren Elements erreicht wird, kann es einen "Ketteneffekt" geben, bei dem die Scroll-Aktion nahtlos auf das Elternelement propagiert wird. Dieses Verhalten erzeugt ein kontinuierliches Scroll-Erlebnis, sowohl vertikal als auch horizontal.

Eine **Scroll-Kette** ist die Reihenfolge der scrollbaren Elemente, bei der die Scroll-Aktion von einem Element zum nächsten übergeht. Dies passiert, wenn ein inneres Element an sein Limit gescrollt wird und das Scrollen bei seinem übergeordneten Element fortgesetzt wird, wodurch eine 'Kette' von Scroll-Aktionen entsteht. Das Kettenverhalten erfolgt typischerweise rekursiv im übergeordneten Block.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS Overscroll Behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)-Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [CSS Scroll Anchoring](/de/docs/Web/CSS/Guides/Scroll_anchoring)-Modul
