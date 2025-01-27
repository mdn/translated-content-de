---
title: CSSOM-Ansicht
slug: Web/CSS/CSSOM_view
l10n:
  sourceCommit: a3a1dd3b7b81f1c4bbdfe1bdccc28dac2cac550d
---

{{CSSRef}}

Das **CSSOM-Ansichtsmodul** ermöglicht die Manipulation der visuellen Darstellung eines Dokuments, inklusive der Ermittlung der Position von Element-Layoutboxen, der Bestimmung der Breite oder Höhe des Ansichtsfensters mittels Skript und des Scrollens eines Elements.

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

### Schnittstellen

- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- [`Screen`](/de/docs/Web/API/Screen)
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)

Die folgenden Schnittstellen sind nicht durch dieses Modul definiert, fügen jedoch einige Erweiterungen hinzu.

- [`Window`](/de/docs/Web/API/Window)
- [`Document`](/de/docs/Web/API/Document)
- [`Element`](/de/docs/Web/API/Element)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
- [`Range`](/de/docs/Web/API/Range)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`Text`](/de/docs/Web/API/Text)
- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)

## Leitfäden

- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : Ein Leitfaden zu den Koordinatensystemen, die verwendet werden, um die Position eines Ortes in einem Darstellungszusammenhang anzugeben, sei es ein Fenster auf einem Monitor, ein Ansichtsfenster auf einem mobilen Gerät oder eine Position auf einem Blatt Papier beim Drucken.

## Verwandte Konzepte

- {{Glossary("CSSOM", "CSSOM")}}-Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) als Web-API
