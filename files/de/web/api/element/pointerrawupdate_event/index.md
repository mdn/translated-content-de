---
title: "Element: pointerrawupdate-Ereignis"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Pointer Events")}}{{secureContext_header}}

Das **`pointerrawupdate`**-Ereignis wird ausgelöst, wenn sich Eigenschaften eines Zeigers ändern, ohne dass dadurch ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)- oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignis ausgelöst wird. Eine Liste dieser Eigenschaften finden Sie unter [`pointermove`](/de/docs/Web/API/Element/pointermove_event).

Das `pointerrawupdate`-Ereignis kann zusammengefasste Ereignisse enthalten, wenn bereits ein weiteres `pointerrawupdate`-Ereignis mit derselben Zeiger-ID vorhanden ist, das noch nicht in der Ereignisschleife ausgelöst wurde. Werden Ereignisse zusammengefasst, hat das ausgelöste Ereignis denselben `target` wie das zuletzt zusammengefasste Ereignis. Informationen dazu finden Sie in der Dokumentation zu [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents).

Der Unterschied zwischen `pointerrawupdate` und [`pointermove`](/de/docs/Web/API/Element/pointermove_event) liegt in der Häufigkeit, mit der sie ausgelöst werden. Ein Browser kann `pointermove`-Ereignisse verzögern, um die Leistung zu verbessern. `pointerrawupdate`-Ereignisse werden dagegen so früh und so häufig ausgelöst, wie der Browser sie erzeugen kann. Beide Ereignistypen werden zusammengefasst, bei `pointerrawupdate` jedoch in geringerem Maße, sodass die zugehörigen Listener häufiger ausgeführt werden. Ein einzelnes Ereignis enthält in beiden Fällen dieselben Eigenschaftswerte. `pointerrawupdate` ist daher räumlich oder zeitlich nicht präziser als das `pointermove`-Ereignis, das dieselbe Bewegung abdeckt.

`pointerrawupdate` ist somit für Anwendungen gedacht, die eine Eingabeverarbeitung mit geringerer Latenz benötigen, als `pointermove` bietet – etwa beim Zeichnen oder Ziehen, wenn die Darstellung sonst sichtbar hinter dem Zeiger zurückbleiben würde. Da die Ereignisse häufiger eintreffen, kann sich eine Anwendung, die sie zeitnah verarbeitet, auch flüssiger anfühlen. Das Lauschen auf `pointerrawupdate`-Ereignisse kann jedoch die Leistung beeinträchtigen. Fügen Sie solche Listener daher nur hinzu, wenn Ihr JavaScript hochfrequente Ereignisse benötigt und sie ebenso schnell verarbeiten kann, wie sie ausgelöst werden. Eine Anwendung, die mit der Verarbeitung nicht Schritt halten kann, wirkt weniger statt mehr reaktionsfähig. Deshalb ist eine weitreichende Optimierung innerhalb des Ereignis-Listeners erforderlich. Für die meisten Anwendungsfälle sollten andere Zeigerereignistypen ausreichen.

Dieses Ereignis [steigt auf](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und ist [composed](/de/docs/Web/API/Event/composed), aber nicht [abbrechbar](/de/docs/Web/API/Event/cancelable) und hat keine Standardaktion.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerrawupdate", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
