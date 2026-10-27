---
title: "ServiceWorkerContainer: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/ServiceWorkerContainer/messageerror_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`messageerror`**-Ereignis wird für den [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ausgelöst, wenn eine eingehende Nachricht, die an den zugehörigen Worker gesendet wurde, nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

In diesem Beispiel ermittelt der Service Worker die ID des Clients aus einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis und sendet ihm anschließend mit [`Client.postMessage`](/de/docs/Web/API/Client/postMessage) eine Nachricht:

```js
// service-worker.js
async function messageClient(clientId) {
  const client = await self.clients.get(clientId);
  client.postMessage("Hi client!");
}

self.addEventListener("fetch", (event) => {
  messageClient(event.clientId);
  event.respondWith(() => {
    // …
  });
});
```

Der Service Worker kann auf Fehler bei der Deserialisierung der Nachricht reagieren, indem er auf das `messageerror`-Ereignis lauscht:

```js
// main.js
navigator.serviceWorker.addEventListener("messageerror", (event) => {
  console.error("Receive message from service worker failed!");
});
```

Alternativ kann das Skript mithilfe von `onmessageerror` auf Fehler bei der Deserialisierung der Nachricht reagieren. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onmessageerror` hinzugefügte Event-Listener ersetzt werden:

```js
// main.js
navigator.serviceWorker.onmessageerror = (event) => {
  console.error("Receive message from service worker failed!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)
- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
