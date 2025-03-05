---
title: Viewport
slug: Glossary/Viewport
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{GlossarySidebar}}

In der Computergrafik stellt ein **Viewport** ein polygonales (normalerweise rechteckiges) Gebiet dar, das aktuell betrachtet wird.

In Bezug auf Webbrowser bezieht es sich auf den Teil des Dokuments, der im Browserfenster angezeigt wird (oder auf dem Bildschirm, wenn das Dokument auf einem mobilen Browser oder einem Desktop-Browser im Vollbildmodus betrachtet wird). Inhalte außerhalb des Viewports sind auf dem Bildschirm nicht sichtbar, bis sie in den sichtbaren Bereich gescrollt werden.

Der Teil des Viewports, der aktuell sichtbar ist, wird als **{{Glossary("visual_viewport", "visueller Viewport")}}** bezeichnet. Dieser kann kleiner als der Layout-Viewport sein, zum Beispiel wenn der Benutzer hereingezoomt hat. Der {{Glossary("layout_viewport", "Layout-Viewport")}} bleibt unverändert, aber der visuelle Viewport wird kleiner.

Der visuelle Viewport eines {{htmlelement("iframe")}}, {{htmlelement("svg")}} oder {{htmlelement("object")}} Elements ist die Größe der inneren Breite und Höhe des jeweiligen Elements, anstatt des übergeordneten Dokuments. Für Inhalte, die innerhalb des Elements gerendert werden, sind der visuelle Viewport und der Layout-Viewport gleich.

## Siehe auch

- {{Glossary("Visual_viewport", "Visueller Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
