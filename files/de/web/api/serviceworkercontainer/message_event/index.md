---
title: "ServiceWorkerContainer: message Event"
short-title: message
slug: Web/API/ServiceWorkerContainer/message_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`message`**-Ereignis wird auf einer Seite verwendet, die von einem Service Worker gesteuert wird, um Nachrichten vom Service Worker zu empfangen.

Dieses Ereignis ist nicht abbrechbar und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichtensender darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, das die Ports darstellt, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird (wo zutreffend, z. B. in der Kanalnachrichtenübertragung oder beim Senden einer Nachricht an einen gemeinsam genutzten Worker).

## Beispiele

In diesem Beispiel erhält der Service Worker die ID des Clients von einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis und sendet dann eine Nachricht mit [`Client.postMessage`](/de/docs/Web/API/Client/postMessage):

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

Der Client kann die Nachricht empfangen, indem er das `message`-Ereignis überwacht:

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
