---
title: Viewport
slug: Glossary/Viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

In der Computergrafik stellt ein **Viewport** einen polygonalen (normalerweise rechteckigen) Bereich dar, der aktuell angezeigt wird.

In Bezug auf Webbrowser bezieht sich der Begriff auf den Teil des Dokuments, der im Browserfenster angezeigt wird (oder auf dem Bildschirm, wenn das Dokument in einem mobilen Browser oder einem Desktop-Browser im Vollbildmodus betrachtet wird). Inhalte außerhalb des Viewports sind nicht sichtbar, bis sie durch Scrollen in den sichtbaren Bereich gelangen.

Der Teil des Viewports, der derzeit sichtbar ist, wird als **{{Glossary("visual_viewport", "visual viewport")}}** bezeichnet. Dieser kann kleiner sein als der Layout-Viewport, zum Beispiel wenn der Benutzer gezoomt hat. Der {{Glossary("layout_viewport", "layout viewport")}} bleibt gleich, aber der visuelle Viewport wird kleiner.

Der visuelle Viewport eines {{htmlelement("iframe")}}, {{svgelement("svg")}} oder {{htmlelement("object")}} Elements entspricht der inneren Breite und Höhe des jeweiligen Elements, anstatt des übergeordneten Dokuments. Für Inhalte, die innerhalb des Elements gerendert werden, sind der visuelle Viewport und der Layout-Viewport identisch.

## Siehe auch

- {{Glossary("Visual_viewport", "Visual viewport")}}
- {{Glossary("Layout_viewport", "Layout viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- Modul [CSSOM view](/de/docs/Web/CSS/Guides/CSSOM_view)
- [CSSOM view API](/de/docs/Web/API/CSSOM_view_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [Eine Geschichte von zwei Viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
