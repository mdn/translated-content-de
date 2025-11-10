---
title: Viewport
slug: Glossary/Viewport
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In der Computergrafik stellt ein **Viewport** einen polygonalen (normalerweise rechteckigen) Bereich dar, der derzeit betrachtet wird.

In Bezug auf Webbrowser bezieht es sich auf den Teil des Dokuments, der im Browserfenster angezeigt wird (oder auf dem Bildschirm, wenn das Dokument auf einem mobilen Browser oder einem Desktop-Browser im Vollbildmodus angezeigt wird). Inhalte außerhalb des Viewports sind nicht auf dem Bildschirm sichtbar, bis sie in den Sichtbereich gescrollt werden.

Der Teil des Viewports, der derzeit sichtbar ist, wird **{{Glossary("visual_viewport", "visual viewport")}}** genannt. Dieser kann kleiner sein als der Layout-Viewport, beispielsweise wenn der Benutzer herangezoomt hat. Der {{Glossary("layout_viewport", "layout viewport")}} bleibt unverändert, aber der visuelle Viewport wird kleiner.

Der visuelle Viewport eines {{htmlelement("iframe")}}, {{svgelement("svg")}} oder {{htmlelement("object")}} Elements entspricht der inneren Breite und Höhe des jeweiligen Elements und nicht des übergeordneten Dokuments. Für Inhalte, die innerhalb des Elements gerendert werden, sind der visuelle Viewport und der Layout-Viewport identisch.

## Siehe auch

- {{Glossary("Visual_viewport", "Visueller Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM-View](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
