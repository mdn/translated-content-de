---
title: "EventSource: message-Ereignis"
short-title: message
slug: Web/API/EventSource/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`message`**-Ereignis der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle wird ausgelöst, wenn Daten über eine Ereignisquelle empfangen werden.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisblase aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtenemitter gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Ursprung des Nachrichtenemitters darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) und den Nachrichtenemitter darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal verbundenen Ports darstellen, durch den die Nachricht gesendet wird (wo zutreffend, z.B. im Kanal-Messaging oder beim Senden einer Nachricht an einen gemeinsam genutzten Worker).

## Beispiele

In diesem einfachen Beispiel wird ein `EventSource` erstellt, um Ereignisse vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist für die Generierung der Ereignisse verantwortlich.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.addEventListener("message", (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
});
```

### Äquivalent zu onmessage

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

- [Verwendung von Server-Sent Events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`error`](/de/docs/Web/API/EventSource/error_event)
