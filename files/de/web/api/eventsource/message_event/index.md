---
title: "EventSource: message-Ereignis"
short-title: message
slug: Web/API/EventSource/message_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef}}

Das `message`-Ereignis der {{domxref("EventSource")}} API wird ausgelöst, wenn Daten über eine Ereignisquelle empfangen werden.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichtensenders repräsentiert.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (das ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}} Objekt sein kann), das den Nachrichtensender repräsentiert.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}} Objekten, die die mit dem Kanal verbundenen Ports darstellen, durch den die Nachricht gesendet wird (wo zutreffend, z.B. bei der Kanalnachrichtübertragung oder beim Senden einer Nachricht an einen Shared Worker).

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

- [Verwendung von servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`error`](/de/docs/Web/API/EventSource/error_event)
