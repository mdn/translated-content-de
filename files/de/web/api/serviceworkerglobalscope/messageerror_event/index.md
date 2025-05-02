---
title: "ServiceWorkerGlobalScope: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/ServiceWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`messageerror`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`ExtendableMessageEvent.data`](/de/docs/Web/API/ExtendableMessageEvent/data) {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Sie können jeden Datentyp haben. Wenn im `messageerror`-Ereignis ausgelöst, wird die Eigenschaft `null` sein.
- [`ExtendableMessageEvent.origin`](/de/docs/Web/API/ExtendableMessageEvent/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des [`Client`](/de/docs/Web/API/Client) zurück, der die Nachricht gesendet hat.
- [`ExtendableMessageEvent.lastEventId`](/de/docs/Web/API/ExtendableMessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Stellt bei [servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die letzte Ereignis-ID der Ereignisquelle dar.
- [`ExtendableMessageEvent.source`](/de/docs/Web/API/ExtendableMessageEvent/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`Client`](/de/docs/Web/API/Client)-Objekt zurück, das die Nachricht gesendet hat.
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, welche die Ports des zugehörigen Nachrichtenkanals darstellen.

## Beispiele

Im folgenden Beispiel erhält eine Seite einen Zugriff auf das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) und ruft dann dessen `postMessage()`-Funktion auf.

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

Der Service-Worker kann auf den Deserialisierungsfehler der Nachricht hören, indem er das `messageerror`-Ereignis abhört:

```js
// service-worker.js
self.addEventListener("messageerror", (event) => {
  // event is an ExtendableMessageEvent object
  console.error("Message deserialization failed");
});
```

Alternativ kann das Skript auf den Deserialisierungsfehler der Nachricht mithilfe von `onmessageerror` hören:

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
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
