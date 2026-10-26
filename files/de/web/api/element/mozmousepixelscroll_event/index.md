---
title: "Element: MozMousePixelScroll-Ereignis"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Das ausschließlich in Firefox verfügbare, _nicht standardisierte_ und _veraltete_ Ereignis **`MozMousePixelScroll`** wird asynchron an einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird. Es wird durch die Schnittstelle [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent) repräsentiert.

> [!NOTE]
> Verwenden Sie dieses nicht standardisierte und veraltete Ereignis nicht. Verwenden Sie stattdessen immer das standardisierte Ereignis [`wheel`](/de/docs/Web/API/Element/wheel_event).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("MozMousePixelScroll", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onMozMousePixelScroll = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ermitteln der Scrollstrecke

Die Eigenschaft [`detail`](/de/docs/Web/API/UIEvent/detail) des Ereignisses gibt die Scrollstrecke in Zeilen an. Negative Werte stehen für eine Scrollbewegung nach unten oder rechts, positive Werte für eine Scrollbewegung nach oben oder links.

Wenn die nativen Mausradereignisse der Plattform die Scrollstrecke in Zeilen oder Seiten angeben, wird der Wert von `detail` anhand dieser Angabe und der Zeilenhöhe beziehungsweise der Seitenbreite oder -höhe des nächstgelegenen scrollbaren Vorfahrenelements berechnet, das das Zielelement enthält.

> [!NOTE]
> Unter macOS wird die Scrollstrecke (und damit der Wert von `detail`) anhand der beschleunigten Scrollstrecke berechnet.

Bei regulären Ereignissen ist der Wert von `detail` niemals 0.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Geckos veraltetes Ereignis zum Scrollen nach Zeilen oder Seiten: `DOMMouseScroll`
- Veraltetes Mausradereignis in Browsern ohne Gecko: `mousewheel`
- Standardisiertes Mausradereignis: `wheel`
