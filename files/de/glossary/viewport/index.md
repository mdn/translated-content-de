---
title: Viewport
slug: Glossary/Viewport
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Computergrafik stellt ein **Viewport** einen polygonalen (normalerweise rechteckigen) Bereich dar, der momentan betrachtet wird.

In Bezug auf Webbrowser bezieht sich der Begriff auf den Teil des Dokuments, der im Browserfenster angezeigt wird (oder auf dem Bildschirm, wenn das Dokument in einem mobilen Browser oder einem Desktop-Browser im Vollbildmodus betrachtet wird). Inhalte außerhalb des Viewports sind nicht sichtbar, bis sie durch Scrollen ins Sichtfeld gebracht werden.

Der Teil des Viewports, der momentan sichtbar ist, wird als **{{Glossary("visual_viewport", "visueller Viewport")}}** bezeichnet. Dieser kann kleiner sein als der Layout-Viewport, beispielsweise wenn der Nutzer herein- oder herausgezoomt hat. Der {{Glossary("layout_viewport", "Layout-Viewport")}} bleibt gleich, aber der visuelle Viewport wurde kleiner.

Der visuelle Viewport eines {{htmlelement("iframe")}}, {{svgelement("svg")}} oder {{htmlelement("object")}} Elements ist die Größe der inneren Breite und Höhe des jeweiligen Elements und nicht des übergeordneten Dokuments. Für Inhalte, die innerhalb des Elements gerendert werden, sind der visuelle Viewport und der Layout-Viewport identisch.

## Siehe auch

- {{Glossary("Visual_viewport", "Visueller Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
