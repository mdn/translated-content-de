---
title: "Element: DOMMouseScroll-Ereignis"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Das DOM `DOMMouseScroll`-Ereignis wird asynchron ausgelöst, wenn das Mausrad oder ein ähnliches Gerät betätigt wird und die akkumulierte Scrollmenge seit dem letzten Ereignis über 1 Zeile oder 1 Seite liegt. Es wird durch die {{ domxref("MouseScrollEvent") }}-Schnittstelle dargestellt. Dieses Ereignis wurde nur von Firefox implementiert. Stattdessen sollten Sie das standardisierte {{domxref("Element.wheel_event", "wheel")}}-Ereignis verwenden.

Wenn Sie die Standardaktion von Mausrad-Ereignissen verhindern möchten, reicht es nicht aus, nur dieses Ereignis in Gecko zu behandeln, da bei einer Scrollmenge durch ein natives Mausrad-Ereignis, die weniger als 1 Zeile (oder weniger als 1 Seite, wenn die Systemeinstellung nach Seiten-Scroll ist) beträgt, andere Mausrad-Ereignisse ohne dieses Ereignis ausgelöst werden können.

Ab Gecko 17 (Firefox 17) oder später müssen Sie `preventDefault()` von `wheel`-Ereignissen aufrufen, die für jedes native Ereignis ausgelöst werden müssen.

Verwenden Sie, wenn verfügbar, das standardisierte {{domxref("Element/wheel_event","wheel")}}-Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("DOMMouseScroll", (event) => {});

onDOMMouseScroll = (event) => {};
```

## Ereignistyp

Ein {{domxref("WheelEvent")}}. Erbt von {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

Das Ereignis hat nur eine zusätzliche Eigenschaft über die Standardereignisse hinaus.

### detail

Die `detail`-Eigenschaft beschreibt das Scrollen genauer, wobei positive Werte nach unten und negative Werte nach oben scrollen anzeigen.

Wenn das Ereignis das Scrollen um eine Seite nach oben darstellt, ist der Wert von `detail` -32768. Wenn das Ereignis das Scrollen um eine Seite nach unten anzeigt, beträgt der Wert +32768. Jeder andere Wert repräsentiert die Anzahl der zu scrollenden Zeilen, wobei die Richtung durch das Vorzeichen des Wertes angezeigt wird.

> [!NOTE]
> Vertrauenswürdige Ereignisse werden nie mit einem Wert von 0 für `detail` gesendet.

Vertrauenswürdige Ereignisse werden nie mit 0 ausgelöst.

> [!NOTE]
> Wenn die nativen Mausrad-Ereignisse der Plattform nur die Scroll-Distanz in Pixeln bereitstellen oder wenn die Geschwindigkeit vom Benutzer angepasst werden kann, wird der Wert unter Verwendung der Zeilenhöhe des nächstgelegenen rollbaren Vorfahrenelements des Zieles des Ereignisses berechnet. Wenn die Schriftgröße dieses Elements kleiner als `mousewheel.min_line_scroll_amount` ist, wird der Wert dieser Präferenz als Zeilenhöhe verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("MouseScrollEvent") }}
- Geckos veraltetes Pixel-Scroll-Ereignis: `MozMousePixelScroll`
- Veraltetes Mausrad-Ereignis in Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Wheel-Ereignis: `wheel`
