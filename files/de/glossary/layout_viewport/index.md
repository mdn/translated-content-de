---
title: Layout-Viewport
slug: Glossary/Layout_viewport
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{GlossarySidebar}}

Der **Layout-Viewport** ist der {{Glossary("viewport", "Viewport")}}, in den der Browser eine Webseite zeichnet. Im Wesentlichen repräsentiert er das, was verfügbar ist, um gesehen zu werden, während der {{Glossary("visual_viewport", "Visual Viewport")}} den derzeit sichtbaren Teil des Layout-Viewports darstellt, die aktuell sichtbare Untersektion des Layout-Viewports, die auf dem Anzeigegerät des Nutzers sichtbar ist.

Das wird beispielsweise auf mobilen Geräten wichtig, wo eine Kneifgeste normalerweise verwendet werden kann, um in die Inhalte einer Seite hinein- und herauszuzoomen. Das gerenderte Dokument ändert sich in keiner Weise, sodass der Layout-Viewport gleich bleibt, wenn der Nutzer den Zoomlevel anpasst. Stattdessen wird der Visual Viewport aktualisiert, um den Bereich der Seite anzuzeigen, den sie sehen können.

## Siehe auch

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Visual_viewport", "Visual Viewport")}}
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) auf Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
