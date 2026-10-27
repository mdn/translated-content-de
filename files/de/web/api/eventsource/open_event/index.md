---
title: "EventSource: open-Ereignis"
short-title: open
slug: Web/API/EventSource/open_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`open`**-Ereignis der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("open", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onopen = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("open", (e) => {
  console.log("The connection has been established.");
});

// onopen version (but note that this replaces other event listeners
// added using onopen, if any)
evtSource.onopen = (e) => {
  console.log("The connection has been established.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Server-Sent Events verwenden](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`error`](/de/docs/Web/API/EventSource/error_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
