---
title: "Element: touchend-Event"
short-title: touchend
slug: Web/API/Element/touchend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Touch Events")}}

Das `touchend`-Event wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsfläche entfernt werden. Beachten Sie, dass es stattdessen möglich ist, ein [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Event zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("touchend", (event) => { })

ontouchend = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("TouchEvent")}}

## Beispiele

Code-Beispiele für diese Events sind auf der speziellen Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
