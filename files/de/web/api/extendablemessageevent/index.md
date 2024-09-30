---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das **`ExtendableMessageEvent`** Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Nachricht auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) – es verlängert die Lebensdauer solcher Ereignisse.

Dieses Interface erbt vom [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) Interface.

{{InheritanceDiagram}}

## Konstruktor

- [`ExtendableMessageEvent()`](/de/docs/Web/API/ExtendableMessageEvent/ExtendableMessageEvent)
  - : Erstellt eine neue `ExtendableMessageEvent` Objektinstanz.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`ExtendableMessageEvent.data`](/de/docs/Web/API/ExtendableMessageEvent/data) {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Es kann sich um jeden Datentyp handeln. Wenn im `messageerror` Ereignis ausgelöst, wird die Eigenschaft `null` sein.
- [`ExtendableMessageEvent.origin`](/de/docs/Web/API/ExtendableMessageEvent/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des [`Client`](/de/docs/Web/API/Client) zurück, der die Nachricht gesendet hat.
- [`ExtendableMessageEvent.lastEventId`](/de/docs/Web/API/ExtendableMessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Repräsentiert bei [server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die letzte Ereignis-ID der Ereignisquelle.
- [`ExtendableMessageEvent.source`](/de/docs/Web/API/ExtendableMessageEvent/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz des [`Client`](/de/docs/Web/API/Client) Objekts zurück, das die Nachricht gesendet hat.
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die [`MessagePort`](/de/docs/Web/API/MessagePort) Objekte repräsentiert, die die Ports des zugehörigen Nachrichtenkanals darstellen.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

## Beispiele

Im untenstehenden Beispiel erhält eine Seite eine Referenz auf das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) und ruft dann seine `postMessage()` Funktion auf.

```js
// in the page being controlled
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

Der Service Worker kann die Nachricht empfangen, indem er auf das `message` Ereignis hört:

```js
// in the service worker
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Worker Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Kanal-Messaging](/de/docs/Web/API/Channel_Messaging_API)
