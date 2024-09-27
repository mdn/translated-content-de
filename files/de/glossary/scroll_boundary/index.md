---
title: Scroll boundary
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

Eine **scroll boundary** (Blätterränder) ist der Punkt, an dem ein scrollbares Element in eine bestimmte Richtung, entweder oben oder unten (oder links/rechts bei horizontalem Scrollen), nicht weiter gescrollt werden kann. Dies ist typischerweise der Rand des [scrollports](/de/docs/Glossary/Scroll_container#scrollport).

Wenn der Inhalt eines [scroll containers](/de/docs/Glossary/Scroll_container) die Containergröße in der Scrollrichtung nicht überschreitet, wird der Container zu jeder Zeit als an seiner Scrollgrenze betrachtet. Dies liegt daran, dass es keinen zusätzlichen Inhalt zum Scrollen gibt. Wenn das Scrollen des Inhalts verhindert wird, beispielsweise wenn {{cssxref("overflow", "overflow: hidden")}} eingestellt ist, ist das Element kein scroll container, und folglich gibt es keine scroll boundary.

Wenn der Scrollgrenze des Scrollports durch Benutzerscrollen des Inhalts erreicht wird, kann ein visueller Effekt wie ein Bounce oder eine funktionale Aktion wie Pull-to-Refresh auf mobilen Geräten auftreten. Dieses Standardverhalten des Browsers wird als **boundary default action** bezeichnet.

Beispielsweise verursacht das Herunterziehen einer Seite auf mobilen Geräten, wenn man sich bereits am oberen Ende befindet, einen Bounce-Effekt und manchmal eine Seitenaktualisierung. Dieser Bounce oder diese Aktualisierung ist die boundary default action.

Boundary default actions können lokal oder nicht-lokal sein.

- Eine **lokale boundary default** ist die Aktion, die an der Grenze eines spezifischen scrollbaren Bereichs erfolgt, der auf dieses Element beschränkt ist. Diese Aktion wird als _lokal_ betrachtet, da sie keine Auswirkungen auf andere übergeordnete Container oder den Rest der Webseite hat.

- Eine **nicht-lokale boundary default action** tritt auf, wenn das Erreichen der Scrollgrenze eines scroll containers Auswirkungen über das spezifische gescrollte Element hinaus hat. Ein Beispiel hierfür ist [scroll chaining](/de/docs/Glossary/Scroll_chaining), bei dem das Erreichen der Scrollgrenze eines Elements das Scrollen in einem übergeordneten oder vorangehenden Element auslöst und möglicherweise sogar eine aktionenübergreifende Aktion, wie die Navigation, initiiert.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
