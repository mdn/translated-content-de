---
title: Scroll boundary
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

Eine **Scroll-Grenze** ist der Punkt, an dem ein scrollbareres Element in einer bestimmten Richtung nicht weiter gescrollt werden kann, entweder oben oder unten (oder links/rechts bei horizontalem Scrollen). Dies ist typischerweise der Rand des {{Glossary("Scroll_container#scrollport", "Scrollports")}}.

Wenn der Inhalt eines {{Glossary("Scroll_container", "Scroll-Containers")}} in der Scroll-Richtung die Größe des Containers nicht überschreitet, wird der Container jederzeit als an seiner Scroll-Grenze betrachtet. Dies liegt daran, dass es keinen zusätzlichen Inhalt gibt, durch den gescrollt werden könnte. Wenn das Scrollen des Inhalts verhindert wird, z.B. wenn {{cssxref("overflow", "overflow: hidden")}} gesetzt ist, ist das Element kein Scroll-Container und daher gibt es keine Scroll-Grenze.

Wenn die Scroll-Grenze des Scrollports durch das Scrollen des Inhalts durch einen Benutzer erreicht wird, kann ein visueller Effekt wie ein Bounce oder eine funktionale Aktion wie "Pull-to-Refresh" auf mobilen Geräten auftreten. Dieses standardmäßige Browserverhalten wird als **Boundary Default Action** bezeichnet.

Zum Beispiel löst das Ziehen einer Seite auf mobilen Geräten nach unten, wenn man sich bereits oben befindet, einen Bounce-Effekt aus und manchmal auch eine Seitenaktualisierung. Dieser Bounce oder Refresh ist die Boundary Default Action.

Boundary Default Actions können lokal oder nicht lokal sein.

- Eine **lokale Boundary Default** ist die Aktion, die an der Grenze eines spezifischen scrollbaren Bereichs stattfindet, der auf dieses Element beschränkt ist. Diese Aktion gilt als _lokal_, da sie keine Auswirkungen auf übergeordnete Container oder den Rest der Webseite hat.

- Eine **nicht-lokale Boundary Default Action** tritt auf, wenn das Erreichen der Scroll-Grenze eines Scroll-Containers Auswirkungen über das spezifische gescrollte Element hinaus hat. Ein Beispiel dafür ist das {{Glossary("Scroll_chaining", "Scroll-Chaining")}}, bei dem das Erreichen der Scroll-Grenze eines Elements das Scrollen in einem übergeordneten oder Vorfahren-Element auslöst und möglicherweise sogar eine seitenweite Aktion, wie z.B. Navigation, initiiert.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS Overscroll Behavior](/de/docs/Web/CSS/CSS_overscroll_behavior)-Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
