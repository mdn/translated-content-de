---
title: "Element: DOMMouseScroll-Ereignis"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef}}{{Non-standard_header}}

Das DOM-Ereignis `DOMMouseScroll` wird asynchron ausgelöst, wenn das Mausrad oder ein ähnliches Gerät betätigt wird und der seit dem letzten Ereignis aufgelaufene Scrollbetrag mehr als eine Zeile oder eine Seite beträgt. Es wird durch das Interface [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent) repräsentiert. Dieses Ereignis wurde nur in Firefox implementiert. Verwenden Sie stattdessen das standardisierte Ereignis [`wheel`](/de/docs/Web/API/Element/wheel_event).

Wenn Sie die Standardaktion von Mausradereignissen verhindern möchten, reicht es unter Gecko nicht aus, nur dieses Ereignis zu behandeln. Beträgt der Scrollbetrag eines nativen Mausradereignisses weniger als eine Zeile (oder weniger als eine Seite, wenn in den Systemeinstellungen seitenweises Scrollen festgelegt ist), können andere Mausradereignisse ausgelöst werden, ohne dass dieses Ereignis ausgelöst wird.

Ab Gecko 17 (Firefox 17) müssen Sie `preventDefault()` für `wheel`-Ereignisse aufrufen, die bei jedem nativen Ereignis ausgelöst werden müssen.

Verwenden Sie das standardisierte Ereignis [`wheel`](/de/docs/Web/API/Element/wheel_event), sofern es verfügbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("DOMMouseScroll", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onDOMMouseScroll = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Veraltetes Pixel-Scroll-Ereignis von Gecko: `MozMousePixelScroll`
- Veraltetes Mausradereignis anderer Browser als Gecko: `mousewheel`
- Standardisiertes Mausradereignis: `wheel`
