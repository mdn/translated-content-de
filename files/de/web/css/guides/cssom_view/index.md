---
title: CSSOM-Ansicht
slug: Web/CSS/Guides/CSSOM_view
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSSOM view**-Modul ermöglicht es Ihnen, die visuelle Ansicht eines Dokuments zu manipulieren, einschließlich der Bestimmung der Position von Element-Layout-Boxen, der Ermittlung der Breite oder Höhe des Viewports über Skripte und auch dem Scrollen eines Elements.

## Referenz

### Ereignisse

- [`Window`](/de/docs/Web/API/Window)-Ereignisse:
  - [`resize`](/de/docs/Web/API/Window/resize_event)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Ereignisse:
  - [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
- [`Document`](/de/docs/Web/API/Document)-Ereignisse
  - [`scroll`](/de/docs/Web/API/Document/scroll_event)
  - [`scrollend`](/de/docs/Web/API/Document/scrollend_event)
- [`Element`](/de/docs/Web/API/Element)-Ereignisse
  - [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Ereignisse
  - [`change`](/de/docs/Web/API/MediaQueryList/change_event)

### Glossarbegriffe

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- {{Glossary("Visual_viewport", "Visueller Viewport")}}

### API

Für die von diesem Modul definierte JavaScript-API siehe die [CSSOM view API](/de/docs/Web/API/CSSOM_view_API)-Dokumentation.

## Leitfäden

- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : Die Koordinatensysteme, die verwendet werden, um eine Position in einem Anzeigekontext wie einem Fenster auf einem Monitor, einem Viewport auf einem mobilen Gerät oder einer Position auf einem Blatt Papier beim Drucken anzugeben.
- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was es ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

## Verwandte Konzepte

- {{cssxref("zoom")}}
- {{htmlelement("meta")}}

### Glossarbegriffe

- {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}}
- {{Glossary("CSS_pixel", "CSS-Pixel")}}
- {{Glossary("Scroll_container", "Scroll-Container")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API
- [CSSOM view API](/de/docs/Web/API/CSSOM_view_API)
- [CSS-Viewport](/de/docs/Web/CSS/Guides/Viewport) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Verhalten bei Überscrollen](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
