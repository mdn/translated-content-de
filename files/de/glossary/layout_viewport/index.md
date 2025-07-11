---
title: Layout-Viewport
slug: Glossary/Layout_viewport
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der **Layout-Viewport** ist der {{Glossary("viewport", "Viewport")}}, in den der Browser eine Webseite zeichnet. Im Wesentlichen repräsentiert er das, was verfügbar ist, um gesehen zu werden, während der {{Glossary("visual_viewport", "Visual-Viewport")}} den aktuell sichtbaren Teil des Layout-Viewports darstellt, den derzeit sichtbaren Abschnitt des Layout-Viewports, der aktuell auf dem Anzeigegerät des Benutzers sichtbar ist.

Dies wird beispielsweise auf mobilen Geräten wichtig, wo eine Wischgeste normalerweise verwendet werden kann, um in die Inhalte einer Seite hinein- oder herauszuzoomen. Das gerenderte Dokument ändert sich in keiner Weise, sodass der Layout-Viewport unverändert bleibt, während der Benutzer die Zoomstufe anpasst. Stattdessen wird der Visual-Viewport aktualisiert, um den Bereich der Seite anzuzeigen, den er sehen kann.

## Siehe auch

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Visual_viewport", "Visual-Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
