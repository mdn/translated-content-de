---
title: "Element: touchstart-Ereignis"
short-title: touchstart
slug: Web/API/Element/touchstart_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Touch Events")}}

Das `touchstart`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf einer berührungsempfindlichen Oberfläche platziert werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("touchstart", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
ontouchstart = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Beispiele

Codebeispiele für diese Ereignisse finden Sie auf der entsprechenden Seite: [Touch-Ereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
