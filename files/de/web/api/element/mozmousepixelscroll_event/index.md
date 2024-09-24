---
title: "Element: MozMousePixelScroll-Ereignis"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das ausschließlich in Firefox verfügbare, _nicht-standardisierte_ und _veraltete_ **`MozMousePixelScroll`**-Ereignis wird asynchron an einem {{domxref("Element")}} ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät bedient wird. Es wird durch die {{ domxref("MouseScrollEvent") }}-Schnittstelle repräsentiert.

> [!NOTE]
> Verwenden Sie dieses nicht-standardisierte und veraltete Ereignis nicht. Stattdessen sollten Sie immer das standardisierte {{domxref("Element.wheel_event", "wheel")}}-Ereignis verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("MozMousePixelScroll", (event) => {});

onMozMousePixelScroll = (event) => {};
```

## Ereignistyp

Ein {{domxref("WheelEvent")}}. Erbt von {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Ermitteln der Scroll-Distanz

Die {{domxref("UIEvent/detail", "detail")}}-Eigenschaft des Ereignisses gibt die Scroll-Distanz in Zeilen an, wobei negative Werte darauf hindeuten, dass die Scroll-Bewegung entweder nach unten oder nach rechts erfolgt, und positive Werte darauf hindeuten, dass nach oben oder links gescrollt wird.

Wenn die nativen Mausrad-Ereignisse der Plattform die Scroll-Distanz in Zeilen oder Seiten angeben, wird der Wert von `detail` unter Verwendung dieses Wertes und der Zeilenhöhe oder Seitenbreite/-höhe des nächstgelegenen übergeordneten scrollbareren Elements berechnet, das das Zielelement enthält.

> [!NOTE]
> Unter macOS wird die Scroll-Distanz (und somit der Wert von `detail`) basierend auf der beschleunigten Scroll-Distanz berechnet.

Der Wert von `detail` ist niemals 0, wenn die Ereignisse legitim sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("MouseScrollEvent") }}
- Geckos veraltetes Zeilen- oder Seiten-Scroll-Ereignis: `DOMMouseScroll`
- Veraltetes Mausrad-Ereignis in Browsern ohne Gecko: `mousewheel`
- Standardisiertes Radereignis: `wheel`
