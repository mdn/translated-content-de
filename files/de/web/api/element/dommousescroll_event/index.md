---
title: "Element: DOMMouseScroll-Ereignis"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef}}{{Non-standard_header}}

Das DOM-`DOMMouseScroll`-Ereignis wird asynchron ausgelöst, wenn das Mausrad oder ein ähnliches Gerät betätigt wird und die kumulierte Scrollmenge seit dem letzten Ereignis über 1 Zeile oder 1 Seite beträgt. Es wird durch die [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Schnittstelle dargestellt. Dieses Ereignis wurde nur von Firefox implementiert. Stattdessen sollten Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

Wenn Sie die Standardaktion von Mausrad-Ereignissen unterbinden möchten, reicht es im Gecko nicht aus, nur dieses Ereignis zu behandeln, da, wenn die Scrollmenge durch ein natives Mausrad-Ereignis weniger als 1 Zeile (oder weniger als 1 Seite, wenn die Systemeinstellung auf Seitenscrollen ist) beträgt, andere Mausrad-Ereignisse ohne dieses Ereignis ausgelöst werden können.

In Gecko 17 (Firefox 17) oder höher müssen Sie `preventDefault()` bei `wheel`-Ereignissen aufrufen, die für jedes native Ereignis ausgelöst werden müssen.

Verwenden Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, wenn verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("DOMMouseScroll", (event) => { })

onDOMMouseScroll = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Gecko's veraltetes Pixel-Scroll-Ereignis: `MozMousePixelScroll`
- Veraltetes Mausrad-Ereignis von Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Wheel-Ereignis: `wheel`
