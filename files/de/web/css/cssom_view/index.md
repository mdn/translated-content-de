---
title: CSSOM view
slug: Web/CSS/CSSOM_view
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSSOM view** Modul ermöglicht es Ihnen, die visuelle Ansicht eines Dokuments zu manipulieren, einschließlich des Abrufens der Position von Element-Layout-Boxen, der Ermittlung der Breite oder Höhe des Viewports über ein Skript und auch des Scrollens eines Elements.

## Referenz

### Ereignisse

- [`Window`](/de/docs/Web/API/Window) Ereignisse:
  - [`resize`](/de/docs/Web/API/Window/resize_event)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Ereignisse:
  - [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
- [`Document`](/de/docs/Web/API/Document) Ereignisse
  - [`scroll`](/de/docs/Web/API/Document/scroll_event)
  - [`scrollend`](/de/docs/Web/API/Document/scrollend_event)
- [`Element`](/de/docs/Web/API/Element) Ereignisse
  - [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Ereignisse
  - [`change`](/de/docs/Web/API/MediaQueryList/change_event)

### Glossarbegriffe

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- {{Glossary("Visual_viewport", "Visueller Viewport")}}

### API

Für die von diesem Modul definierte JavaScript-API siehe die [CSSOM view API](/de/docs/Web/API/CSSOM_view_API) Dokumentation.

## Leitfäden

- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : Die Koordinatensysteme, die verwendet werden, um eine Position in einem Anzeigezusammenhang anzugeben, wie z. B. ein Fenster auf einem Monitor, ein Viewport auf einem mobilen Gerät oder eine Position auf einem Blatt Papier beim Drucken.
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was er ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

## Verwandte Konzepte

- {{cssxref("zoom")}}
- {{htmlelement("meta")}}

### Glossarbegriffe

- {{Glossary("CSSOM", "CSS Objekt-Modell (CSSOM)")}}
- {{Glossary("CSS_pixel", "CSS-Pixel")}}
- {{Glossary("Scroll_container", "Scroll-Container")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Objekt-Modell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API
- [CSSOM view API](/de/docs/Web/API/CSSOM_view_API)
- [CSS Viewport](/de/docs/Web/CSS/CSS_viewport) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
