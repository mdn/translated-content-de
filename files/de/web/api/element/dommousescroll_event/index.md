---
title: "Element: DOMMouseScroll-Ereignis"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Das DOM-`DOMMouseScroll`-Ereignis wird asynchron ausgelöst, wenn das Mausrad oder ein ähnliches Gerät betätigt wird und die akkumulierte Scrollmenge seit dem letzten Ereignis über 1 Linie oder 1 Seite beträgt. Es wird durch die [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Schnittstelle dargestellt. Dieses Ereignis wurde nur von Firefox implementiert. Stattdessen sollten Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

Wenn Sie die Standardaktion von Mausrad-Ereignissen verhindern möchten, reicht es nicht aus, nur dieses Ereignis in Gecko zu behandeln, da, wenn die Scrollmenge eines nativen Mausrad-Ereignisses weniger als 1 Linie (oder weniger als 1 Seite, wenn die Systemeinstellung nach Seiten scrollen ist) beträgt, andere Mausrad-Ereignisse ohne dieses Ereignis ausgelöst werden können.

Ab Gecko 17 (Firefox 17) oder später müssen Sie `preventDefault()` für `wheel`-Ereignisse aufrufen, die für jedes native Ereignis ausgelöst werden müssen.

Verwenden Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, wenn verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js
addEventListener("DOMMouseScroll", (event) => {});

onDOMMouseScroll = (event) => {};
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

Das Ereignis hat nur eine zusätzliche Eigenschaft über die Standardereignisse hinaus.

### detail

Die `detail`-Eigenschaft beschreibt das Scrollen genauer, wobei positive Werte nach unten scrollen und negative Werte nach oben scrollen anzeigen.

Wenn das Ereignis das Scrollen um eine Seite nach oben darstellt, hat die `detail`-Eigenschaft den Wert -32768. Wenn das Ereignis das Scrollen um eine Seite nach unten anzeigt, hat die `detail`-Eigenschaft den Wert +32768. Jeder andere Wert stellt die Anzahl der zu scrollenden Linien dar, wobei die Richtung durch das Vorzeichen des Wertes angezeigt wird.

> [!NOTE]
> Vertrauenswürdige Ereignisse werden niemals mit einem Wert von 0 für `detail` gesendet.

Vertrauenswürdige Ereignisse werden niemals mit 0 ausgelöst.

> [!NOTE]
> Wenn die nativen Mausrad-Ereignisse der Plattform nur Scrollabstand in Pixel bereitstellen oder wenn die Geschwindigkeit vom Benutzer angepasst werden kann, wird der Wert mithilfe der Zeilenhöhe des nächstgelegenen scrollbaren Vorgängerelements des Ereignisziels berechnet. Wenn die Schriftgröße dieses Elements kleiner als `mousewheel.min_line_scroll_amount` ist, wird der Wert dieser Präferenz als Zeilenhöhe verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Geckos veraltetes Pixel-Scroll-Ereignis: `MozMousePixelScroll`
- Veraltetes Mausrad-Ereignis von Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Wheel-Ereignis: `wheel`
