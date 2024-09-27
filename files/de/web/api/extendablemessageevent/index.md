---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`ExtendableMessageEvent`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das in einem Service Worker ausgelöst wird (wenn im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eine Nachricht aus einem anderen Kontext empfangen wird) — und verlängert die Dauer solcher Ereignisse.

Diese Schnittstelle erbt von der [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- [`ExtendableMessageEvent()`](/de/docs/Web/API/ExtendableMessageEvent/ExtendableMessageEvent)
  - : Erstellt eine neue `ExtendableMessageEvent`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`ExtendableMessageEvent.data`](/de/docs/Web/API/ExtendableMessageEvent/data) {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Es kann sich um einen beliebigen Datentyp handeln. Wenn es im `messageerror`-Ereignis ausgelöst wird, ist die Eigenschaft `null`.
- [`ExtendableMessageEvent.origin`](/de/docs/Web/API/ExtendableMessageEvent/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des [`Client`](/de/docs/Web/API/Client) zurück, der die Nachricht gesendet hat.
- [`ExtendableMessageEvent.lastEventId`](/de/docs/Web/API/ExtendableMessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Repräsentiert bei [server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die letzte Ereignis-ID der Ereignisquelle.
- [`ExtendableMessageEvent.source`](/de/docs/Web/API/ExtendableMessageEvent/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`Client`](/de/docs/Web/API/Client)-Objekt zurück, das die Nachricht gesendet hat.
- [`ExtendableMessageEvent.ports`](/de/docs/Web/API/ExtendableMessageEvent/ports) {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte darstellt, die die Ports des zugehörigen Nachrichtenkanals repräsentieren.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

## Beispiele

Im folgenden Beispiel erhält eine Seite Zugriff auf das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) und ruft dann die `postMessage()`-Funktion auf.

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

Der Service Worker kann die Nachricht empfangen, indem er dem `message`-Ereignis zugehört:

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
