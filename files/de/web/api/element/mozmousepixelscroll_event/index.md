---
title: "Element: MozMousePixelScroll-Ereignis"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das _nicht standardisierte_ und _veraltete_ **`MozMousePixelScroll`**-Ereignis, das nur in Firefox verfügbar ist, wird asynchron auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird. Es wird durch das [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Interface dargestellt.

> [!NOTE]
> Verwenden Sie dieses nicht standardisierte und veraltete Ereignis nicht. Stattdessen sollten Sie immer das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("MozMousePixelScroll", (event) => { })

onMozMousePixelScroll = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Die gescrollte Distanz ermitteln

Eigenschaft [`detail`](/de/docs/Web/API/UIEvent/detail) des Ereignisses gibt die Scroll-Distanz in Form von Zeilen an, wobei negative Werte angeben, dass die Scroll-Bewegung entweder nach unten oder nach rechts erfolgt, und positive Werte angeben, dass nach oben oder links gescrollt wird.

Wenn die nativen Mausrad-Ereignisse der Plattform die Scroll-Distanz in Form von Zeilen oder Seiten angeben, wird der Wert von `detail` unter Verwendung dieses Wertes und der Zeilenhöhe oder Seitenbreite/-höhe des nächsten Vorfahren-Scrolling-Elements berechnet, das das Ziel-Element enthält.

> [!NOTE]
> Auf macOS wird die Scroll-Distanz (und daher der Wert von `detail`) basierend auf der beschleunigten Scroll-Distanz berechnet.

Der Wert von `detail` ist niemals 0, wenn die Ereignisse legitim sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Geckos veraltetes Zeilen- oder Seiten-Scrolling-Ereignis: `DOMMouseScroll`
- Veraltetes Mausrad-Ereignis in Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Mausrad-Ereignis: `wheel`
