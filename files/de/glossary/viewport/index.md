---
title: Viewport
slug: Glossary/Viewport
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{GlossarySidebar}}

In der Computergrafik steht ein **Viewport** für ein polygonales (normalerweise rechteckiges) Gebiet, das aktuell angezeigt wird.

In den Begriffen eines Webbrowsers bezieht sich dies auf den Teil des Dokuments, der im Browserfenster angezeigt wird (oder auf dem Bildschirm, wenn das Dokument auf einem mobilen Browser oder einem Desktop-Browser im Vollbildmodus angezeigt wird). Inhalte außerhalb des Viewports sind auf dem Bildschirm nicht sichtbar, bis sie durch Scrollen in den sichtbaren Bereich gelangen.

Der Teil des Viewports, der aktuell sichtbar ist, wird **{{Glossary("visual_viewport", "visueller Viewport")}}** genannt. Dieser kann kleiner sein als der Layout-Viewport, zum Beispiel wenn der Benutzer herangezoomt hat. Der {{Glossary("layout_viewport", "Layout-Viewport")}} bleibt gleich, aber der visuelle Viewport wird kleiner.

Der visuelle Viewport eines {{htmlelement("iframe")}}, {{svgelement("svg")}} oder {{htmlelement("object")}} Elements ist die Größe der inneren Breite und Höhe des jeweiligen Elements, anstatt das des übergeordneten Dokuments. Für Inhalte, die innerhalb des Elements gerendert werden, sind visueller Viewport und Layout-Viewport identisch.

## Siehe auch

- {{Glossary("Visual_viewport", "Visueller Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [Eine Geschichte von zwei Viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
