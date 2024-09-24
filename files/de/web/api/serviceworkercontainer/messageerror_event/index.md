---
title: "ServiceWorkerContainer: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/ServiceWorkerContainer/messageerror_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`messageerror`**-Ereignis wird an das {{domxref("ServiceWorkerContainer")}} ausgelöst, wenn eine eingehende Nachricht, die an den zugehörigen Worker gesendet wird, nicht deserialisiert werden kann.

Dieses Ereignis ist nicht abbruchs- und nicht aufblasbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener()", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
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
  - : Ein `MessageEventSource` (das ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, oder {{domxref("ServiceWorker")}}-Objekt sein kann), das den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die mit dem Kanal verbundenen Ports darstellen, über den die Nachricht gesendet wird (wo es angemessen ist, z. B. bei Kanalnachrichten oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

In diesem Beispiel erhält der Service Worker die Client-ID von einem {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}}-Ereignis und sendet ihm dann eine Nachricht mit {{domxref("Client.postMessage")}}:

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

Der Service Worker kann den Deserialisierungsfehler der Nachricht durch Lauschen des `messageerror`-Ereignisses erkennen:

```js
// main.js
navigator.serviceWorker.addEventListener("messageerror", (event) => {
  console.error("Empfang der Nachricht vom Service Worker fehlgeschlagen!");
});
```

Alternativ kann das Skript den Deserialisierungsfehler der Nachricht mit `onmessageerror` erkennen:

```js
// main.js
navigator.serviceWorker.onmessageerror = (event) => {
  console.error("Empfang der Nachricht vom Service Worker fehlgeschlagen!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ServiceWorkerContainer/message_event", "message")}}
- {{domxref("Client.postMessage()")}}
- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
