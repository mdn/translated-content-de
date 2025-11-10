---
title: Scrollgrenze
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Eine **Scrollgrenze** ist der Punkt, an dem ein scrollbares Element in eine bestimmte Richtung nicht weiter gescrollt werden kann, entweder oben oder unten (oder links/rechts für horizontales Scrollen). Dies ist typischerweise der Rand des {{Glossary("Scroll_container#scrollport", "Scrollports")}}.

Wenn der Inhalt eines {{Glossary("Scroll_container", "Scroll-Containers")}} die Containergröße in der Scrollrichtung nicht überschreitet, wird der Container immer als an seiner Scrollgrenze betrachtet. Dies liegt daran, dass es keinen zusätzlichen Inhalt gibt, durch den gescrollt werden könnte. Wenn das Scrollen des Inhalts verhindert wird, etwa wenn {{cssxref("overflow", "overflow: hidden")}} gesetzt ist, ist das Element kein Scroll-Container und es gibt daher keine Scrollgrenze.

Wenn die Scrollgrenze des Scrollports durch das Scrollen des Inhalts durch den Benutzer erreicht wird, kann ein visueller Effekt wie ein Bounce oder eine funktionale Aktion wie Pull-to-Refresh auf mobilen Geräten auftreten. Diese Standardverhalten im Browser wird als **Boundary Default Action** bezeichnet.

Zum Beispiel verursacht auf mobilen Geräten das Herunterziehen einer Seite, wenn man sich bereits ganz oben befindet, einen Bounce-Effekt und löst manchmal eine Seitenaktualisierung aus. Dieser Bounce oder Refresh ist die Boundary Default Action.

Boundary Default Actions können lokal oder nicht lokal sein.

- Eine **lokale Boundary Default** ist die Aktion, die an der Grenze eines bestimmten scrollbaren Bereichs auftritt, der auf dieses Element beschränkt ist. Diese Aktion wird als _lokal_ angesehen, da sie keine Auswirkungen auf übergeordnete Container oder den Rest der Webseite hat.

- Eine **nicht lokale Boundary Default Action** tritt auf, wenn das Erreichen der Scrollgrenze eines Scroll-Containers Auswirkungen über das spezifisch gescrollte Element hinaus hat. Ein Beispiel dafür ist das {{Glossary("Scroll_chaining", "Scroll Chaining")}}, bei dem das Erreichen der Scrollgrenze eines Elements das Scrollen in einem übergeordneten oder Vorfahren-Element auslöst und möglicherweise eine seitenweite Aktion initiiert, wie z.B. die Navigation.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSS Scroll Anchoring](/de/docs/Web/CSS/Guides/Scroll_anchoring) Modul
