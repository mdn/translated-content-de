---
title: CSSOM view API
slug: Web/API/CSSOM_view_API
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{DefaultAPISidebar("CSSOM view API")}}

Die **CSSOM View API** ermöglicht es Ihnen, die visuelle Ansicht eines Dokuments zu manipulieren, einschließlich der Abfrage der Position von Layout-Boxen eines Elements, der Ermittlung der Breite oder Höhe des Ansichtsfensters durch ein Skript und des Scrollens eines Elements.

## Leitfäden

- [Koordinatensysteme](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : Die Koordinatensysteme zur Angabe einer Position in einem Anzeige-Kontext wie einem Fenster auf einem Monitor, einem Ansichtsfenster auf einem mobilen Gerät, oder einer Position auf einem Blatt Papier beim Drucken.
- [Konzepte des Ansichtsfensters](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Ansichtsfensters — was es ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Ansichtsfenster und dem Layout-Ansichtsfenster.

## Schnittstellen

- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- [`Screen`](/de/docs/Web/API/Screen)
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)

## Erweiterungen für andere Schnittstellen

Dieses Modul fügt Eigenschaften, Methoden und Ereignisse zu Schnittstellen hinzu, die in anderen Spezifikationen definiert sind.

### Erweiterungen für Window

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
- [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis

### Erweiterungen für Document

- [`elementFromPoint()`](/de/docs/Web/API/Document/elementFromPoint)
- [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
- [`scrollingElement`](/de/docs/Web/API/Document/scrollingElement)
- [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis

### Erweiterungen für Element

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
- [`scroll`](/de/docs/Web/API/Element/scroll_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event) Ereignis

### Erweiterungen für HTMLElement

- [`offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft)
- [`offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)
- [`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)

### Erweiterungen für HTMLImageElement

- [`x`](/de/docs/Web/API/HTMLImageElement/x)
- [`y`](/de/docs/Web/API/HTMLImageElement/y)

### Erweiterungen für Range

- [`getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect)
- [`getClientRects()`](/de/docs/Web/API/Range/getClientRects)

### Erweiterungen für MouseEvent

- [`clientX`](/de/docs/Web/API/MouseEvent/clientX)
- [`clientY`](/de/docs/Web/API/MouseEvent/clientY)
- [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX)
- [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
- [`pageX`](/de/docs/Web/API/MouseEvent/pageX)
- [`pageY`](/de/docs/Web/API/MouseEvent/pageY)
- [`screenY`](/de/docs/Web/API/MouseEvent/screenY)
- [`x`](/de/docs/Web/API/MouseEvent/x)
- [`y`](/de/docs/Web/API/MouseEvent/y)

Dieses Modul definiert geometrische Hilfsmethoden, die auf die [`Text`](/de/docs/Web/API/Text), [`Element`](/de/docs/Web/API/Element), [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) und [`Document`](/de/docs/Web/API/Document) Schnittstellen anwendbar sind. Diese `GeometryUtils`-Funktionen sind in keinem Browser implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API
- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- {{Glossary("Viewport", "Ansichtsfenster")}}
- {{Glossary("Layout_viewport", "Layout-Ansichtsfenster")}}
- {{Glossary("Visual_viewport", "Visuelles Ansichtsfenster")}}
- {{cssxref("zoom")}}
- {{Glossary("CSSOM", "CSSOM")}}
- {{Glossary("CSS_pixel", "CSS-Pixel")}}
- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{htmlelement("meta")}}
