---
title: "EventSource: message-Ereignis"
short-title: message
slug: Web/API/EventSource/message_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`message`**-Ereignis der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle wird ausgelöst, wenn Daten über eine Ereignisquelle empfangen werden.

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht nach oben aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

In diesem einfachen Beispiel wird eine `EventSource` erstellt, um Ereignisse vom Server zu empfangen. Eine Seite namens `sse.php` erzeugt die Ereignisse.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.addEventListener("message", (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
});
```

### Verwendung der Event-Handler-Eigenschaft `onmessage`

Sie können auch die Event-Handler-Eigenschaft `onmessage` verwenden. Beachten Sie jedoch, dass dadurch andere Ereignis-Listener ersetzt werden, die gegebenenfalls über `onmessage` hinzugefügt wurden:

```js
evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Server-Sent Events verwenden](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`error`](/de/docs/Web/API/EventSource/error_event)
