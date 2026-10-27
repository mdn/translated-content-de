---
title: "ServiceWorkerGlobalScope: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/ServiceWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`messageerror`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.

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

Ein [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Beispiele

Im folgenden Beispiel erhält eine Seite über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) eine Referenz auf das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt und ruft anschließend dessen `postMessage()`-Funktion auf.

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

Der Service Worker kann auf Deserialisierungsfehler bei Nachrichten reagieren, indem er auf das `messageerror`-Ereignis lauscht:

```js
// service-worker.js
self.addEventListener("messageerror", (event) => {
  // event is an ExtendableMessageEvent object
  console.error("Message deserialization failed");
});
```

Alternativ kann das Skript mit `onmessageerror` auf Deserialisierungsfehler bei Nachrichten reagieren. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onmessageerror` hinzugefügte Event-Listener ersetzt werden:

```js
// service-worker.js
self.onmessageerror = (event) => {
  // event is an ExtendableMessageEvent object
  console.error("Message deserialization failed");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage)
- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
