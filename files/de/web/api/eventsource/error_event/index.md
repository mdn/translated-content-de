---
title: "EventSource: error-Ereignis"
short-title: error
slug: Web/API/EventSource/error_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`error`**-Ereignis der [`EventSource`](/de/docs/Web/API/EventSource)-API wird ausgelöst, wenn keine Verbindung zu einer Ereignisquelle hergestellt werden kann.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("error", (e) => {
  console.log("An error occurred while attempting to connect.");
});

// onerror version (but note that this replaces other event listeners
// added using onerror, if any)
evtSource.onerror = (e) => {
  console.log("An error occurred while attempting to connect.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Server-Sent Events verwenden](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
