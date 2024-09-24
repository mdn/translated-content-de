---
title: "ServiceWorkerContainer: Message-Ereignis"
short-title: Nachricht
slug: Web/API/ServiceWorkerContainer/message_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`message`**-Ereignis wird in einer Seite verwendet, die von einem Service Worker gesteuert wird, um Nachrichten vom Service Worker zu empfangen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht bubblen.

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
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{glossary("WindowProxy")}}, ein {{domxref("MessagePort")}}, oder ein {{domxref("ServiceWorker")}}-Objekt sein kann) und den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die mit dem Kanal assoziierten Ports darstellen, durch den die Nachricht gesendet wird (wenn zutreffend, z. B. im Kanal-Messaging oder beim Senden einer Nachricht an einen geteilten Worker).

## Beispiele

In diesem Beispiel erhält der Service Worker die ID des Clients von einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis und sendet ihm dann eine Nachricht mit [`Client.postMessage`](/de/docs/Web/API/Client/postMessage):

```js
// service-worker.js
async function messageClient(clientId) {
  const client = await clients.get(clientId);
  client.postMessage("Hi client!");
}

addEventListener("fetch", (event) => {
  messageClient(event.clientId);
  event.respondWith(() => {
    // …
  });
});
```

Der Client kann die Nachricht empfangen, indem er auf das `message`-Ereignis hört:

```js
// main.js
navigator.serviceWorker.addEventListener("message", (message) => {
  console.log(message);
});
```

Alternativ kann der Client die Nachricht mit dem `onmessage`-Ereignishandler empfangen:

```js
// main.js
navigator.serviceWorker.onmessage = (message) => {
  console.log(message);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel zu Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
