---
title: "ServiceWorkerContainer: messageerror Ereignis"
short-title: messageerror
slug: Web/API/ServiceWorkerContainer/messageerror_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`messageerror`** Ereignis wird an das [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ausgelöst, wenn eine eingehende Nachricht, die an den zugeordneten `worker` gesendet wird, nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann), die den Nachrichtensender darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort) Objekten, das die mit dem Kanal assoziierten Ports darstellt, durch den die Nachricht gesendet wird (wo zutreffend, z. B. im Kanalnachrichtenverkehr oder beim Senden einer Nachricht an einen gemeinsamen `Worker`).

## Beispiele

In diesem Beispiel erhält der Service Worker die ID des Clients von einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis und sendet ihm dann eine Nachricht mit [`Client.postMessage`](/de/docs/Web/API/Client/postMessage):

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

Der `Service Worker` kann auf den Fehler bei der Nachrichten-Deserialisierung lauschen, indem er das `messageerror` Ereignis abhört:

```js
// main.js
navigator.serviceWorker.addEventListener("messageerror", (event) => {
  console.error("Receive message from service worker failed!");
});
```

Alternativ kann das Skript den Fehler bei der Nachrichten-Deserialisierung mit `onmessageerror` abhören:

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
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Basis-Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
