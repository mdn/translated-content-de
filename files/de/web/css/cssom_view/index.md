---
title: CSSOM-Ansicht
slug: Web/CSS/CSSOM_view
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

Das **CSSOM-Ansicht**-Modul ermöglicht es Ihnen, die visuelle Ansicht eines Dokuments zu manipulieren, einschließlich des Abrufens der Position von Element-Layout-Boxen, des Ermittelns der Breite oder Höhe des Ansichtsbereichs (Viewport) durch Skripte sowie des Scrollens eines Elements.

## Referenz

### Ereignisse

- [`Window`](/de/docs/Web/API/Window)-Ereignisse:
  - [`resize`](/de/docs/Web/API/Window/resize_event)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Ereignisse:
  - [`resize`](/de/docs/Web/API/VisualViewport/resize_event)
  - [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)
  - [`scrollend`](/de/docs/Web/API/VisualViewport/scrollend_event)
- [`Document`](/de/docs/Web/API/Document)-Ereignisse:
  - [`scroll`](/de/docs/Web/API/Document/scroll_event)
  - [`scrollend`](/de/docs/Web/API/Document/scrollend_event)
- [`Element`](/de/docs/Web/API/Element)-Ereignisse:
  - [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Ereignisse:
  - [`change`](/de/docs/Web/API/MediaQueryList/change_event)

### Glossar

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- {{Glossary("Visual_viewport", "Visueller Viewport")}}

### API

Für die JavaScript-API, die von diesem Modul definiert wird, siehe die [CSSOM-Ansicht-API](/de/docs/Web/API/CSSOM_view_API)-Dokumentation.

## Leitfäden

- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : Die Koordinatensysteme, die verwendet werden, um eine Position in einem Anzeigezusammenhang wie einem Fenster auf einem Monitor, einem Viewport auf einem mobilen Gerät oder einer Position auf einem Blatt Papier beim Drucken anzugeben.
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was es ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

## Verwandte Konzepte

- {{cssxref("zoom")}}
- {{htmlelement("meta")}}

### Glossarbegriffe und Definitionen

- {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}}
- {{Glossary("CSS_pixel", "CSS-Pixel")}}
- {{Glossary("Scroll_container", "Scroll-Container")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API
- [CSSOM-Ansicht-API](/de/docs/Web/API/CSSOM_view_API)
- [CSS-Viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Overscrollverhalten](/de/docs/Web/CSS/CSS_overscroll_behavior)-Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
