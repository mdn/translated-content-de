---
title: Scroll chaining
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

Der Begriff **Scroll chaining** bezieht sich auf das Verhalten, das beobachtet wird, wenn ein Benutzer über die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} eines scrollbaren Elements hinaus scrollt und dadurch ein Scrollen auf einem übergeordneten Element verursacht wird.

Wenn ein Benutzer innerhalb eines scrollbaren Elements wie einem `<div>` oder `<textarea>` scrollt und die Begrenzung des {{Glossary("Scroll_container#scrollport", "scrollports")}} (oben, unten, links oder rechts) des scrollbaren Elements erreicht wird, kann es zu einem „verknüpften Effekt“ kommen, bei dem die Scrollaktion nahtlos auf das Elternelement übertragen wird. Dieses Verhalten schafft ein kontinuierliches Scroll-Erlebnis, sowohl vertikal als auch horizontal.

Eine **Scroll-Kette** ist die Reihenfolge von scrollbaren Elementen, bei der die Scroll-Aktion von einem Element zum nächsten übergeht. Dies geschieht, wenn ein inneres Element bis zu seinem Limit gescrollt wird und das Scrollen auf sein Elternelement fortgesetzt wird, wodurch eine „Kette“ von Scroll-Aktionen entsteht. Chaining erfolgt normalerweise rekursiv auf dem Containing-Block.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Überscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
