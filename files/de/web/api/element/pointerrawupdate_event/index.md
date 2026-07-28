---
title: "Element: pointerrawupdate Ereignis"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}{{secureContext_header}}

Das **`pointerrawupdate`** Ereignis wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
Sehen Sie [„pointermove“](/de/docs/Web/API/Element/pointermove_event) für eine Liste dieser Eigenschaften.

Das `pointerrawupdate` Ereignis kann zusammengefasste Ereignisse enthalten, wenn bereits ein anderes `pointerrawupdate` Ereignis mit derselben Zeiger-ID existiert, das in der Ereignisschleife noch nicht gesendet wurde.
Für Informationen zu zusammengefassten Ereignissen siehe die Dokumentation zu [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents).

`pointerrawupdate` ist für Anwendungen gedacht, die eine präzise Eingabeverarbeitung erfordern und eine reibungslose Interaktion nicht allein durch zusammengefasste [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Ereignisse erreichen können.
Da das Abhören von `pointerrawupdate` Ereignissen jedoch die Leistung beeinträchtigen kann, sollten Sie diese Listener nur hinzufügen, wenn Ihr JavaScript hochfrequente Ereignisse benötigt und diese so schnell verarbeiten kann, wie sie gesendet werden.
Für die meisten Anwendungsfälle sollten andere Zeigerereignistypen ausreichen.

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und ist [komponiert](/de/docs/Web/API/Event/composed), ist jedoch nicht [abbrechbar](/de/docs/Web/API/Event/cancelable) und hat keine Standardaktion.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pointerrawupdate", (event) => { })

onpointerrawupdate = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiel

```js
addEventListener("pointerrawupdate", (event) => {
  if (event.getCoalescedEvents && event.getCoalescedEvents().length > 1) {
    console.log("Coalesced events:", event.getCoalescedEvents().length);
    for (let coalescedEvent of event.getCoalescedEvents()) {
      // Do something with the coalesced events.
    }
  } else {
    // Do something with the event.
    console.log("Raw event", event);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
