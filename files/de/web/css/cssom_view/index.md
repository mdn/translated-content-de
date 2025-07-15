---
title: CSSOM-Ansicht
slug: Web/CSS/CSSOM_view
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSSOM-Ansicht**-Modul ermöglicht es Ihnen, die visuelle Ansicht eines Dokuments zu manipulieren. Dazu gehört, die Position der Layoutboxen eines Elements zu erhalten, die Breite oder Höhe des Ansichtsfensters durch Skript zu ermitteln und auch ein Element zu scrollen.

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

### Glossar

- {{Glossary("Viewport", "Viewport")}}
- {{Glossary("Layout_viewport", "Layout-Viewport")}}
- {{Glossary("Visual_viewport", "Visueller Viewport")}}

### Schnittstellen

- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- [`Screen`](/de/docs/Web/API/Screen)
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)

### Schnittstellenerweiterungen

Dieses Modul fügt Schnittstellen, die in anderen Spezifikationen definiert sind, Eigenschaften und Methoden hinzu.

- [`Window`](/de/docs/Web/API/Window)
  - [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio)
  - [`innerHeight`](/de/docs/Web/API/Window/innerHeight)
  - [`innerWidth`](/de/docs/Web/API/Window/innerWidth)
  - [`matchMedia()`](/de/docs/Web/API/Window/matchMedia)
  - [`moveBy()`](/de/docs/Web/API/Window/moveBy)
  - [`moveTo()`](/de/docs/Web/API/Window/moveTo)
  - [`outerHeight`](/de/docs/Web/API/Window/outerHeight)
  - [`outerWidth`](/de/docs/Web/API/Window/outerWidth)
  - `pageXOffset` (siehe [`scrollX`](/de/docs/Web/API/Window/scrollX))
  - `pageYOffset` (siehe [`scrollY`](/de/docs/Web/API/Window/scrollY))
  - [`resizeBy()`](/de/docs/Web/API/Window/resizeBy)
  - [`resizeTo()`](/de/docs/Web/API/Window/resizeTo)
  - [`screen`](/de/docs/Web/API/Window/screen)
  - [`screenLeft`](/de/docs/Web/API/Window/screenLeft)
  - [`screenTop`](/de/docs/Web/API/Window/screenTop)
  - [`screenX`](/de/docs/Web/API/Window/screenX)
  - [`screenY`](/de/docs/Web/API/Window/screenY)
  - [`visualViewport`](/de/docs/Web/API/Window/visualViewport)
  - [`scroll()`](/de/docs/Web/API/Window/scroll)
  - [`scrollBy()`](/de/docs/Web/API/Window/scrollBy)
  - [`scrollTo()`](/de/docs/Web/API/Window/scrollTo)
  - [`scrollX`](/de/docs/Web/API/Window/scrollX)
  - [`scrollY`](/de/docs/Web/API/Window/scrollY)
- [`Document`](/de/docs/Web/API/Document)
  - [`elementFromPoint()`](/de/docs/Web/API/Document/elementFromPoint)
  - [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
  - [`scrollingElement`](/de/docs/Web/API/Document/scrollingElement)
- [`Element`](/de/docs/Web/API/Element)
  - [`checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - [`clientHeight`](/de/docs/Web/API/Element/clientHeight)
  - [`clientLeft`](/de/docs/Web/API/Element/clientLeft)
  - [`clientTop`](/de/docs/Web/API/Element/clientTop)
  - [`clientWidth`](/de/docs/Web/API/Element/clientWidth)
  - [`currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom)
  - [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - [`getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - [`scroll()`](/de/docs/Web/API/Element/scroll)
  - [`scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - [`scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
  - [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - [`scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - [`scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
  - [`offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
  - [`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft)
  - [`offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)
  - [`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
  - [`offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - [`x`](/de/docs/Web/API/HTMLImageElement/x)
  - [`y`](/de/docs/Web/API/HTMLImageElement/y)
- [`Range`](/de/docs/Web/API/Range)
  - [`getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect)
  - [`getClientRects()`](/de/docs/Web/API/Range/getClientRects)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
  - [`clientX`](/de/docs/Web/API/MouseEvent/clientX)
  - [`clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX)
  - [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`pageX`](/de/docs/Web/API/MouseEvent/pageX)
  - [`pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`screenY`](/de/docs/Web/API/MouseEvent/screenY)
  - [`x`](/de/docs/Web/API/MouseEvent/x)
  - [`y`](/de/docs/Web/API/MouseEvent/y)

Dieses Modul definiert geometrische Hilfsmethoden, die auf die Schnittstellen [`Text`](/de/docs/Web/API/Text), [`Element`](/de/docs/Web/API/Element), [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) und [`Document`](/de/docs/Web/API/Document) angewendet werden. Diese `GeometryUtils`-Funktionen sind in keinem Browser implementiert.

## Leitfaden

- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : Die Koordinatensysteme, die verwendet werden, um eine Position in einem Anzeige-Kontext wie einem Fenster auf einem Monitor, einem Viewport auf einem mobilen Gerät oder einer Position auf einem Blatt Papier beim Drucken anzugeben.
- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was es ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

## Verwandte Konzepte

- {{cssxref("zoom")}}
- {{Glossary("CSSOM", "CSSOM")}}
- {{Glossary("CSS_pixel", "CSS-Pixel")}}
- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{htmlelement("meta")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior)-Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
