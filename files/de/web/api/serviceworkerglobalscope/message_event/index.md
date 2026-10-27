---
title: "ServiceWorkerGlobalScope: message-Ereignis"
short-title: message
slug: Web/API/ServiceWorkerGlobalScope/message_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`message`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) tritt ein, wenn Nachrichten empfangen werden. Kontrollierte Seiten können mit der Methode [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage) Nachrichten an Service Worker senden. Der Service Worker kann der kontrollierten Seite optional über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) antworten.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Beispiele

Im folgenden Beispiel erhält eine Seite über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Zugriff auf ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt und ruft anschließend dessen `postMessage()`-Funktion auf.

```js
// main.js
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.addEventListener("message", (event) => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage("Hi service worker");
  });
}
```

Der Service Worker kann die Nachricht empfangen, indem er auf das `message`-Ereignis wartet:

```js
// service-worker.js
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

Alternativ kann das Skript mit `onmessage` auf die Nachricht warten. Beachten Sie jedoch, dass dadurch andere mit `onmessage` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden:

```js
// service-worker.js
self.onmessage = (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
