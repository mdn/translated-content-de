---
title: "Element: MozMousePixelScroll-Ereignis"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das ausschließlich in Firefox verfügbare, _nicht standardisierte_ und _veraltete_ **`MozMousePixelScroll`**-Ereignis wird asynchron bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird. Es wird durch das [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Interface dargestellt.

> [!NOTE]
> Verwenden Sie dieses nicht standardisierte und veraltete Ereignis nicht. Stattdessen sollten Sie immer das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("MozMousePixelScroll", (event) => {});

onMozMousePixelScroll = (event) => {};
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Erfassung der gescrollten Distanz

Die [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft des Ereignisses gibt die Scroll-Distanz in Zeilen an, wobei negative Werte eine Bewegung nach unten oder nach rechts anzeigen und positive Werte nach oben oder links.

Wenn die nativen Mausrad-Ereignisse der Plattform die Scroll-Distanz in Zeilen oder Seiten angeben, wird der `detail`-Wert unter Berücksichtigung dieses Wertes und der Zeilenhöhe oder Seitenbreite/-höhe des nächstgelegenen übergeordneten scrollbaren Elements, das das Zielelement enthält, berechnet.

> [!NOTE]
> Auf macOS wird die Scroll-Distanz (und damit der `detail`-Wert) basierend auf der beschleunigten Scroll-Distanz berechnet.

Der Wert von `detail` ist niemals 0, wenn die Ereignisse legitim sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Geckos veraltetes Zeilen- oder Seiten-Scroll-Ereignis: `DOMMouseScroll`
- Mauswiel-Ereignis in nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Rad-Ereignis: `wheel`
