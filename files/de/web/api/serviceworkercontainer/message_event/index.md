---
title: "ServiceWorkerContainer: message-Ereignis"
short-title: message
slug: Web/API/ServiceWorkerContainer/message_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`message`**-Ereignis wird auf einer Seite, die von einem Service Worker gesteuert wird, verwendet, um Nachrichten vom Service Worker zu empfangen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht an übergeordnete Elemente weitergegeben.

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

In diesem Beispiel ruft der Service Worker die ID des Clients aus einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis ab und sendet ihm anschließend mit [`Client.postMessage`](/de/docs/Web/API/Client/postMessage) eine Nachricht:

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

Der Client kann die Nachricht empfangen, indem er auf das `message`-Ereignis lauscht:

```js
// main.js
navigator.serviceWorker.addEventListener("message", (message) => {
  console.log(message);
});
```

Alternativ kann der Client die Nachricht mit dem `onmessage`-Event-Handler empfangen. Beachten Sie jedoch, dass dadurch andere mit `onmessage` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden:

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

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
