---
title: "ServiceWorkerGlobalScope: message Ereignis"
short-title: message
slug: Web/API/ServiceWorkerGlobalScope/message_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`message`** Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Schnittstelle tritt auf, wenn eingehende Nachrichten empfangen werden. Kontrollierte Seiten können die [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage)-Methode verwenden, um Nachrichten an Service Worker zu senden.
Der Service Worker kann optional über die [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) eine Antwort an die kontrollierte Seite zurücksenden.

Dieses Ereignis kann nicht abgebrochen werden und erfolgt nicht in einem Ereignis-Bubble.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`ExtendableMessageEvent.data`](/de/docs/Web/API/ExtendableMessageEvent/data) {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Es kann sich um jeden Datentyp handeln. Wird es im `messageerror`-Ereignis ausgelöst, wird die Eigenschaft `null` sein.
- [`ExtendableMessageEvent.origin`](/de/docs/Web/API/ExtendableMessageEvent/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des [`Client`](/de/docs/Web/API/Client) zurück, der die Nachricht gesendet hat.
- [`ExtendableMessageEvent.lastEventId`](/de/docs/Web/API/ExtendableMessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Repräsentiert bei [serverseitig gesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die letzte Ereignis-ID der Ereignisquelle.
- [`ExtendableMessageEvent.source`](/de/docs/Web/API/ExtendableMessageEvent/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz zum [`Client`](/de/docs/Web/API/Client)-Objekt zurück, das die Nachricht gesendet hat.
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die die Ports des zugehörigen Nachrichtenkanals darstellen.

## Beispiele

Im folgenden Beispiel erhält eine Seite Zugriff auf das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) und ruft dann dessen `postMessage()`-Funktion auf.

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

Der Service Worker kann die Nachricht empfangen, indem er das `message`-Ereignis abhört:

```js
// service-worker.js
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

Alternativ kann das Skript die Nachricht mithilfe von `onmessage` abhören:

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
