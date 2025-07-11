---
title: Scroll-Grenze
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Scroll-Grenze** ist der Punkt, an dem ein scrollbares Element in eine bestimmte Richtung nicht weiter gescrollt werden kann, entweder oben oder unten (oder links/rechts für horizontales Scrollen). Dies ist typischerweise der Rand des {{Glossary("Scroll_container#scrollport", "Scrollport")}}.

Wenn der Inhalt eines {{Glossary("Scroll_container", "Scroll-Containers")}} die Containergröße in der Scrollrichtung nicht überschreitet, wird der Container immer an seiner Scroll-Grenze betrachtet. Dies liegt daran, dass kein zusätzlicher Inhalt zum Scrollen vorhanden ist. Wenn das Scrollen des Inhalts verhindert wird, beispielsweise wenn {{cssxref("overflow", "overflow: hidden")}} gesetzt ist, ist das Element kein Scroll-Container, und somit gibt es keine Scroll-Grenze.

Wenn die Scroll-Grenze des Scrollports erreicht wird, indem ein Benutzer den Inhalt scrollt, kann ein visueller Effekt wie ein Bounce oder eine funktionale Aktion wie Pull-to-Refresh auf mobilen Geräten auftreten. Dieses Standardbrowserverhalten wird als **Grenzenstandardaktion** bezeichnet.

Zum Beispiel erzeugt das Ziehen einer Seite nach unten auf mobilen Geräten, wenn man sich bereits am oberen Rand befindet, einen Bounce-Effekt und löst manchmal ein Seitenrefresh aus. Dieser Bounce oder Refresh ist die Grenzenstandardaktion.

Grenzenstandardaktionen können lokal oder nicht-lokal sein.

- Eine **lokale Grenzenstandardaktion** ist die Aktion, die an der Grenze eines bestimmten scrollbaren Bereichs, der auf dieses Element beschränkt ist, auftritt. Diese Aktion wird als _lokal_ betrachtet, da sie keine Auswirkungen auf übergeordnete Container oder den Rest der Webseite hat.

- Eine **nicht-lokale Grenzenstandardaktion** tritt auf, wenn das Erreichen der Scroll-Grenze eines Scroll-Containers Auswirkungen über das spezifisch gescrollte Element hinaus hat. Ein Beispiel hierfür ist das {{Glossary("Scroll_chaining", "Scroll-Chaining")}}, bei dem das Erreichen der Scroll-Grenze eines Elements das Scrollen in einem übergeordneten oder Vorfahren-Element auslöst und möglicherweise eine seitenweite Aktion, wie eine Navigation, initiiert.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Überscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS-Scroll-Verankerung](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
