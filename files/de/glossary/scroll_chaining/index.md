---
title: Scroll-Chaining
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Scroll-Chaining** bezieht sich auf das Verhalten, das auftritt, wenn ein Benutzer über die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} eines scrollbaren Elements hinaus scrollt und dabei ein Vorfahrenelement zum Scrollen bringt.

Wenn ein Benutzer innerhalb eines scrollbaren Elements wie einem `<div>` oder `<textarea>` scrollt und die {{Glossary("Scroll_container#scrollport", "Scrollport")}}-Grenze (oben, unten, links oder rechts) des scrollbaren Elements erreicht wird, kann es einen "Ketteneffekt" geben, bei dem die Scroll-Aktion nahtlos auf das Elternelement übertragen wird. Dieses Verhalten erzeugt ein kontinuierliches Scroll-Erlebnis, sowohl vertikal als auch horizontal.

Eine **Scroll-Kette** ist die Reihenfolge der scrollbaren Elemente, bei denen die Scroll-Aktion von einem Element zum anderen übergeht. Dies geschieht, wenn ein inneres Element bis an seine Grenze gescrollt wird und das Scrollen auf das Elternelement übergeht, wodurch eine 'Kette' von Scroll-Aktionen entsteht. Das Kettenverhalten rekursiert typischerweise bis zum enthaltenden Block.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Scroll Anchoring](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
