---
title: Bildlaufgrenze
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

Eine **Bildlaufgrenze** ist der Punkt, an dem ein scrollbares Element in einer bestimmten Richtung nicht weiter gescrollt werden kann, entweder am oberen oder unteren Rand (oder links/rechts bei horizontalem Scrollen). Dies ist typischerweise der Rand des [Scrollports](/de/docs/Glossary/Scroll_container#scrollport).

Wenn der Inhalt eines {{Glossary("Scroll_container", "Scroll-Containers")}} die Containergröße in der Scrollrichtung nicht überschreitet, wird der Container zu jeder Zeit als an seiner Bildlaufgrenze befindlich betrachtet. Das liegt daran, dass kein zusätzlicher Inhalt zum Scrollen vorhanden ist. Wenn das Scrollen des Inhalts verhindert wird, beispielsweise indem {{cssxref("overflow", "overflow: hidden")}} gesetzt ist, ist das Element kein Scroll-Container, und somit gibt es keine Bildlaufgrenze.

Wird die Bildlaufgrenze des Scrollports durch das Scrollen des Inhalts erreicht, kann ein visueller Effekt wie ein Bounce oder eine funktionale Aktion wie Pull-to-Refresh auf mobilen Geräten auftreten. Dieses Standardverhalten des Browsers wird als **Boundary Default Action** bezeichnet.

Zum Beispiel verursacht das Herunterziehen einer Seite auf mobilen Geräten, wenn man bereits am oberen Rand ist, einen Bounce-Effekt und manchmal einen Seiten-Refresh. Dieser Bounce oder Refresh ist die Boundary Default Action.

Boundary Default Actions können lokal oder nicht lokal sein.

- Eine **lokale Boundary Default Action** ist die Aktion, die an der Grenze eines bestimmten scrollbaren Bereichs innerhalb dieses Elements auftritt. Diese Aktion wird als _lokal_ betrachtet, da sie keine Auswirkungen auf übergeordnete Container oder den Rest der Webseite hat.

- Eine **nicht-lokale Boundary Default Action** tritt auf, wenn das Erreichen der Bildlaufgrenze eines Scroll-Containers Auswirkungen über das gescrollte spezifische Element hinaus hat. Ein Beispiel dafür ist {{Glossary("Scroll_chaining", "Scroll Chaining")}}, bei dem das Erreichen der Bildlaufgrenze eines Elements das Scrollen in einem übergeordneten oder Stamm-Element auslöst und möglicherweise sogar eine seitenweite Aktion initiiert, wie zum Beispiel eine Navigation.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS-Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
