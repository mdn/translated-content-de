---
title: Scrollbegrenzung
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{GlossarySidebar}}

Eine **Scrollbegrenzung** ist der Punkt, an dem ein scrollbares Element in einer bestimmten Richtung nicht weiter gescrollt werden kann, entweder oben oder unten (oder links/rechts für horizontales Scrollen). Dies ist typischerweise der Rand des {{Glossary("Scroll_container#scrollport", "Scrollports")}}.

Wenn der Inhalt eines {{Glossary("Scroll_container", "Scrollcontainers")}} die Größe des Containers in der Scrollrichtung nicht überschreitet, gilt der Container jederzeit als an seiner Scrollbegrenzung befindlich. Dies liegt daran, dass kein zusätzlicher Inhalt zum Scrollen vorhanden ist. Wenn das Scrollen des Inhalts verhindert wird, z. B. wenn {{cssxref("overflow", "overflow: hidden")}} gesetzt ist, ist das Element kein Scrollcontainer und es gibt folglich keine Scrollbegrenzung.

Wenn die Scrollbegrenzung des Scrollports durch Anwenden von Scrollen des Inhalts durch den Benutzer erreicht wird, kann ein visueller Effekt wie ein Bounce oder eine funktionale Aktion wie das "Pull-to-Refresh" auf Mobilgeräten auftreten. Dieses Standardverhalten des Browsers wird als **Boundary Default Action** bezeichnet.

Zum Beispiel führt auf Mobilgeräten das Ziehen einer Seite nach unten, wenn sie sich bereits am oberen Rand befindet, zu einem Bounce-Effekt und manchmal zu einer Seitenaktualisierung. Dieser Bounce oder das Aktualisieren ist die Boundary Default Action.

Boundary Default Actions können lokal oder nicht lokal sein.

- Eine **lokale Boundary Default Action** ist die Aktion, die an der Begrenzung eines bestimmten scrollbaren Bereichs erfolgt, der auf dieses Element beschränkt ist. Diese Aktion wird als _lokal_ betrachtet, da sie keine Auswirkungen auf übergeordnete Container oder den Rest der Webseite hat.

- Eine **nicht-lokale Boundary Default Action** tritt auf, wenn das Erreichen der Scrollbegrenzung eines Scrollcontainers Auswirkungen über das spezifische Element hinaus hat, das gescrollt wird. Ein Beispiel dafür ist {{Glossary("Scroll_chaining", "Scroll Chaining")}}, bei dem das Erreichen der Scrollbegrenzung eines Elements das Scrollen in einem übergeordneten oder Vorfahren-Element auslöst und möglicherweise sogar eine seitenweite Aktion, wie beispielsweise Navigation, initiiert.

## Siehe auch

- {{CSSxRef("overscroll-behavior")}} CSS-Eigenschaft
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Scroll-Ankerpunkt](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
