---
title: "ServiceWorkerGlobalScope: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/ServiceWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`messageerror`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlungseigenschaft fest.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Ereignistyp

Ein [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`ExtendableMessageEvent.data`](/de/docs/Web/API/ExtendableMessageEvent/data) {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Es kann sich um jeden Datentyp handeln. Wird es im `messageerror`-Ereignis ausgelöst, ist die Eigenschaft `null`.
- [`ExtendableMessageEvent.origin`](/de/docs/Web/API/ExtendableMessageEvent/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des [`Client`](/de/docs/Web/API/Client) zurück, der die Nachricht gesendet hat.
- [`ExtendableMessageEvent.lastEventId`](/de/docs/Web/API/ExtendableMessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Repräsentiert bei [Server-Sent Events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die letzte Ereignis-ID der Ereignisquelle.
- [`ExtendableMessageEvent.source`](/de/docs/Web/API/ExtendableMessageEvent/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz zum [`Client`](/de/docs/Web/API/Client)-Objekt zurück, das die Nachricht gesendet hat.
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die die Ports des zugehörigen Nachrichtenkanals repräsentieren.

## Beispiele

Im folgenden Beispiel erhält eine Seite einen Zugriff auf das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) und ruft dann die `postMessage()`-Funktion auf.

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

Der Service Worker kann auf den Fehler bei der Nachrichtendeserialisierung hören, indem er das `messageerror`-Ereignis abhört:

```js
// service-worker.js
self.addEventListener("messageerror", (event) => {
  // event is an ExtendableMessageEvent object
  console.error("Message deserialization failed");
});
```

Alternativ kann das Skript auf den Fehler bei der Nachrichtendeserialisierung mit `onmessageerror` hören:

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
- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Service Worker Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
