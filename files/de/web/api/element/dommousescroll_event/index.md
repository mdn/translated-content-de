---
title: "Element: DOMMouseScroll-Ereignis"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Das DOM-`DOMMouseScroll`-Ereignis wird asynchron ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät bedient wird und der akkumulierte Scrollbetrag über 1 Zeile oder 1 Seite seit dem letzten Ereignis liegt. Es wird durch das [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Interface dargestellt. Dieses Ereignis wurde nur von Firefox implementiert. Sie sollten stattdessen das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

Wenn Sie die Standardaktion von Mausradereignissen verhindern möchten, reicht es nicht aus, nur dieses Ereignis auf Gecko zu behandeln, da, wenn der Scrollbetrag bei einem nativen Mausradereignis weniger als 1 Zeile (oder weniger als 1 Seite, wenn die Systemeinstellung auf Seitenscrollen steht) beträgt, andere Mausradereignisse ohne dieses Ereignis ausgelöst werden können.

Auf Gecko 17 (Firefox 17) oder höher müssen Sie `preventDefault()` von `wheel`-Ereignissen aufrufen, die für jedes native Ereignis ausgelöst werden müssen.

Verwenden Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, wenn es verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("DOMMouseScroll", (event) => { })

onDOMMouseScroll = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

Das Ereignis hat nur eine zusätzliche Eigenschaft über die standardmäßigen Ereignisse hinaus.

### detail

Die `detail`-Eigenschaft beschreibt das Scrollen genauer, wobei positive Werte nach unten scrollen und negative nach oben scrollen anzeigen.

Wenn das Ereignis das Hochscrollen um eine Seite darstellt, beträgt der Wert von `detail` -32768. Wenn das Ereignis das Herunterscrollen um eine Seite anzeigt, beträgt der Wert +32768. Jeder andere Wert repräsentiert die Anzahl der zu scrollenden Zeilen, wobei die Richtung durch das Vorzeichen des Wertes angezeigt wird.

> [!NOTE]
> Vertrauenswürdige Ereignisse werden niemals mit einem Wert von 0 für `detail` gesendet.

Vertrauenswürdige Ereignisse werden niemals mit 0 ausgelöst.

> [!NOTE]
> Wenn die nativen Mausradereignisse der Plattform nur Scrolldistanzen in Pixeln angeben oder wenn die Geschwindigkeit vom Benutzer angepasst werden kann, wird der Wert anhand der Zeilenhöhe des nächsten scrollbaren Vorfahrenelements des Ziels des Ereignisses berechnet. Wenn die Schriftgröße dieses Elements kleiner als `mousewheel.min_line_scroll_amount` ist, wird der Wert dieser Einstellung als Zeilenhöhe verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Geckos veraltetes Pixel-Scrollereignis: `MozMousePixelScroll`
- Veraltetes Mausradereignis in Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Wheel-Ereignis: `wheel`
