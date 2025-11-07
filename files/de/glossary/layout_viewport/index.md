---
title: Layout-Viewport
slug: Glossary/Layout_viewport
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **Layout-Viewport** ist der {{Glossary("viewport", "Viewport")}}, in den der Browser eine Webseite zeichnet. Im Wesentlichen repräsentiert er das, was verfügbar ist, um gesehen zu werden, während der {{Glossary("visual_viewport", "visuelle Viewport")}} den aktuell sichtbaren Teil des Layout-Viewports darstellt, den aktuell sichtbaren Unterabschnitt des Layout-Viewports, der auf dem Anzeigegerät des Benutzers sichtbar ist.

Dies wird beispielsweise auf mobilen Geräten wichtig, wo eine Kneifgeste normalerweise verwendet werden kann, um in die Inhalte einer Seite hinein- und herauszuzoomen. Das gerenderte Dokument ändert sich in keiner Weise, sodass der Layout-Viewport gleich bleibt, während der Benutzer den Zoom-Level anpasst. Stattdessen wird der visuelle Viewport aktualisiert, um den Bereich der Seite anzuzeigen, den sie sehen können.

## Siehe auch

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Visual_viewport", "Visueller Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM-View](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
