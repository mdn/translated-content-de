---
title: "Element: MozMousePixelScroll-Ereignis"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das ausschließlich in Firefox verfügbare, _nicht standardisierte_ und _veraltete_ **`MozMousePixelScroll`**-Ereignis wird asynchron bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät bedient wird. Es wird durch die Schnittstelle [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent) dargestellt.

> [!NOTE]
> Verwenden Sie dieses nicht standardisierte und veraltete Ereignis nicht. Stattdessen sollten Sie immer das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("MozMousePixelScroll", (event) => {});

onMozMousePixelScroll = (event) => {};
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ermitteln der gescrollten Entfernung

Die [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft des Ereignisses gibt die Scrollentfernung in Zeilen an, wobei negative Werte darauf hinweisen, dass die Scrollbewegung entweder nach unten oder nach rechts erfolgt, und positive Werte darauf hinweisen, dass nach oben oder nach links gescrollt wird.

Wenn die nativen Mausrad-Ereignisse der Plattform die Scrollentfernung in Zeilen oder Seiten angeben, wird der Wert von `detail` anhand dieses Wertes und der Zeilenhöhe oder Seitenbreite/-höhe des nächsten scrollbaren Vorfahrenelements berechnet, das das Zielelement enthält.

> [!NOTE]
> Auf macOS wird die Scrollentfernung (und damit der Wert von `detail`) basierend auf der beschleunigten Scrollentfernung berechnet.

Der Wert von `detail` ist nie 0, wenn die Ereignisse legitim sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Geckos veraltetes Zeilen- oder Seitenscroll-Ereignis: `DOMMouseScroll`
- Veraltetes Mausrad-Ereignis in Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Wheel-Ereignis: `wheel`
