---
title: "Element: DOMMouseScroll-Ereignis"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Das DOM-`DOMMouseScroll`-Ereignis wird asynchron ausgelöst, wenn das Mausrad oder ein ähnliches Gerät verwendet wird und der angesammelte Scroll-Betrag seit dem letzten Ereignis mehr als eine Zeile oder Seite beträgt. Es wird durch die [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Schnittstelle dargestellt. Dieses Ereignis wurde nur von Firefox implementiert. Sie sollten stattdessen das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

Wenn Sie die Standardaktion von Mausrad-Ereignissen verhindern möchten, reicht es nicht aus, dieses Ereignis nur in Gecko zu bearbeiten, da bei einem Scroll-Betrag durch ein natives Mausrad-Ereignis, der weniger als eine Zeile (oder weniger als eine Seite, wenn die Systemeinstellung auf Seitenscrolling eingestellt ist), andere Mausrad-Ereignisse ohne dieses Ereignis ausgelöst werden können.

Ab Gecko 17 (Firefox 17) oder höher müssen Sie `preventDefault()` der `wheel`-Ereignisse aufrufen, die für jedes native Ereignis ausgelöst werden müssen.

Verwenden Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, wenn verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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
- Geckos veraltetes Pixel-Scroll-Ereignis: `MozMousePixelScroll`
- Veraltetes Mausrad-Ereignis in Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Wheel-Ereignis: `wheel`
