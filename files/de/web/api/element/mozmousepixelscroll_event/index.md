---
title: "Element: MozMousePixelScroll-Ereignis"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Das ausschließlich in Firefox verfügbare, _nicht standardisierte_ und _veraltete_ **`MozMousePixelScroll`**-Ereignis wird asynchron bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird. Es wird durch die [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Schnittstelle dargestellt.

> [!NOTE]
> Verwenden Sie dieses nicht standardisierte und veraltete Ereignis nicht. Stattdessen sollten Sie immer das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("MozMousePixelScroll", (event) => { })

onMozMousePixelScroll = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ermittlung der gescrollten Distanz

Die [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft des Ereignisses gibt die Scroll-Distanz in Bezug auf Zeilen an, wobei negative Werte anzeigen, dass die Scrollbewegung entweder nach unten oder nach rechts erfolgt, und positive Werte anzeigen, dass nach oben oder links gescrollt wird.

Wenn die nativen Mausrad-Ereignisse der Plattform die Scroll-Distanz in Bezug auf Zeilen oder Seiten angeben, wird der Wert von `detail` unter Verwendung dieses Wertes und der Zeilenhöhe oder Seitenbreite/-höhe des nächstgelegenen scrollbaren übergeordneten Elements, das das Ziel-Element enthält, berechnet.

> [!NOTE]
> Auf macOS wird die Scroll-Distanz (und damit der Wert von `detail`) basierend auf der beschleunigten Scroll-Distanz berechnet.

Der Wert von `detail` ist niemals 0, wenn die Ereignisse legitim sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Geckos veraltetes Zeilen- oder Seitenscroll-Ereignis: `DOMMouseScroll`
- Veraltetes Mausrad-Ereignis in Nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Wheel-Ereignis: `wheel`
