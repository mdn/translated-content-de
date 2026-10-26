---
title: "Element: touchend-Ereignis"
short-title: touchend
slug: Web/API/Element/touchend_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Touch Events")}}

Das `touchend`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsfläche entfernt werden. Beachten Sie, dass stattdessen auch ein [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis auftreten kann.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("touchend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontouchend = (event) => { }
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
