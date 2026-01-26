---
title: Layout-Viewport
slug: Glossary/Layout_viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

Der **Layout-Viewport** ist der {{Glossary("viewport", "Viewport")}}, in den der Browser eine Webseite zeichnet. Im Wesentlichen repräsentiert er, was verfügbar ist, während der {{Glossary("visual_viewport", "visuelle Viewport")}} den aktuell sichtbaren Teil des Layout-Viewports darstellt, den derzeit sichtbaren Teil des Layout-Viewports, der aktuell auf dem Anzeigegerät des Nutzers sichtbar ist.

Dies wird beispielsweise auf mobilen Geräten wichtig, wo eine Pinch-Geste normalerweise verwendet werden kann, um in die Inhalte einer Webseite hereinzuzoomen oder herauszuzoomen. Das gerenderte Dokument ändert sich in keiner Weise, daher bleibt der Layout-Viewport gleich, während der Nutzer die Zoomstufe anpasst. Stattdessen wird der visuelle Viewport aktualisiert, um den Bereich der Seite anzuzeigen, den der Nutzer sehen kann.

## Siehe auch

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Visual_viewport", "Visueller Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM View](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- [CSSOM View API](/de/docs/Web/API/CSSOM_view_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) bei Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
