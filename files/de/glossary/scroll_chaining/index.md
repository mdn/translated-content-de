---
title: Scroll chaining
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

**Scroll chaining** bezieht sich auf das Verhalten, das auftritt, wenn ein Benutzer über die [Scroll-Grenze](/de/docs/Glossary/Scroll_boundary) eines scrollbaren Elements hinaus scrollt und dadurch ein Vorfahr-Element gescrollt wird.

Wenn ein Benutzer innerhalb eines scrollbaren Elements wie einem `<div>` oder `<textarea>` scrollt und die [scrollport](/de/docs/Glossary/Scroll_container#scrollport)-Grenze (oben, unten, links oder rechts) des scrollbaren Elements erreicht ist, kann ein "Ketteneffekt" auftreten, bei dem die Scroll-Aktion nahtlos auf das Elternelement übertragen wird. Dieses Verhalten schafft ein kontinuierliches Scroll-Erlebnis, sowohl vertikal als auch horizontal.

Eine **Scroll-Kette** ist die Reihenfolge von scrollbaren Elementen, bei der die Scroll-Aktion von einem Element zum nächsten übergeht. Dies geschieht, wenn ein inneres Element bis ans Limit gescrollt wird und das Scrollen zu seinem Elternelement weitergeht, wodurch eine 'Kette' von Scroll-Aktionen entsteht. Das Verketteln erfolgt typischerweise rekursiv im enthaltenen Block.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior)-Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
