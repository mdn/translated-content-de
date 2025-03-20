---
title: Scroll-Verkettung
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{GlossarySidebar}}

**Scroll-Verkettung** bezieht sich auf das Verhalten, das beobachtet wird, wenn ein Benutzer über die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} eines scrollbaren Elements hinaus scrollt und dadurch ein Überrollen auf einem übergeordneten Element verursacht.

Wenn ein Benutzer innerhalb eines scrollbaren Elements wie einem `<div>` oder `<textarea>` scrollt und die {{Glossary("Scroll_container#scrollport", "Scrollport")}}-Grenze (oben, unten, links oder rechts) des scrollbaren Elements erreicht, kann ein "verketteter Effekt" auftreten, bei dem die Scroll-Aktion nahtlos auf das übergeordnete Element übertragen wird. Dieses Verhalten schafft ein durchgehendes Scroll-Erlebnis, sowohl vertikal als auch horizontal.

Eine **Scroll-Kette** ist die Reihenfolge der scrollbaren Elemente, bei der die Scroll-Aktion von einem Element zum nächsten übergeht. Dies geschieht, wenn ein inneres Element bis an seine Grenze gescrollt wird und das Scrollen zu seinem übergeordneten Element weitergeht, wodurch eine 'Kette' von Scroll-Aktionen entsteht. Verkettung erfolgt typischerweise rekursiv auf dem umgebenden Block.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Scroll-Anker](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
