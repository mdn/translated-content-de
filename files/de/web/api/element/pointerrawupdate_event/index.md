---
title: "Element: pointerrawupdate-Ereignis"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: a0d27fbd56b5327923e072af498c3e8e3252afce
---

{{APIRef("Pointer Events")}}{{secureContext_header}}

Das **`pointerrawupdate`**-Ereignis wird ausgelöst, wenn ein Pointer Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen. Eine Liste dieser Eigenschaften finden Sie unter [`pointermove`](/de/docs/Web/API/Element/pointermove_event).

Das `pointerrawupdate`-Ereignis kann zusammengefasste Ereignisse enthalten, wenn bereits ein anderes `pointerrawupdate`-Ereignis mit derselben Pointer-ID existiert, das in der Ereignisschleife noch nicht ausgelöst wurde. Wenn Ereignisse zusammengefasst werden, ist das `target` des ausgelösten Ereignisses dasselbe wie das letzte zusammengefasste. Informationen zu zusammengefassten Ereignissen finden Sie in der Dokumentation zu [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents).

Der Unterschied zwischen `pointerrawupdate` und [`pointermove`](/de/docs/Web/API/Element/pointermove_event) liegt in der Häufigkeit ihrer Auslösung. Ein Browser kann `pointermove`-Ereignisse verzögern, um die Leistung zu verbessern, während `pointerrawupdate`-Ereignisse so schnell und oft wie möglich von dem Browser bereitgestellt werden. Beide Ereignistypen werden zusammengefasst, aber `pointerrawupdate` wird weniger zusammengefasst, sodass seine Listener häufiger ausgeführt werden. Jedes einzelne Ereignis trägt dieselben Eigenschaftswerte, so dass `pointerrawupdate` nicht präziser in Raum oder Zeit ist als das `pointermove`-Ereignis, das dieselbe Bewegung abdeckt.

Daher ist `pointerrawupdate` für Anwendungen gedacht, die eine geringere Latenzzeit bei der Verarbeitung von Eingaben benötigen, als `pointermove` bietet, wie z.B. beim Zeichnen oder Ziehen, das sonst sichtbar hinter dem Zeiger hinterherhinken würde. Da die Ereignisse häufiger eintreffen, kann sich eine Anwendung, die damit Schritt hält, auch flüssiger anfühlen. Da das Lauschen auf `pointerrawupdate`-Ereignisse jedoch die Leistung beeinflussen kann, sollten Sie diese Listener nur hinzufügen, wenn Ihr JavaScript hochfrequente Ereignisse benötigt und diese so schnell wie sie ausgelöst werden verarbeiten kann. Eine Anwendung, die nicht Schritt halten kann, fühlt sich weniger reaktionsschnell an, anstatt mehr, daher ist eine intensive Optimierung innerhalb des Ereignis-Listeners erforderlich. Für die meisten Anwendungsfälle sollten andere Pointer-Ereignistypen ausreichen.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und ist [komponiert](/de/docs/Web/API/Event/composed), aber es ist nicht [abbrechbar](/de/docs/Web/API/Event/cancelable) und hat keine Standardaktion.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("pointerrawupdate", (event) => { })

onpointerrawupdate = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiel

```js
canvas.addEventListener("pointerrawupdate", (event) => {
  const events = event.getCoalescedEvents();
  if (events.length > 1) {
    console.log("Coalesced events:", events.length);
    for (const coalescedEvent of events) {
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
