---
title: "ServiceWorkerGlobalScope: messageerror Ereignis"
short-title: messageerror
slug: Web/API/ServiceWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`messageerror`** Ereignis der {{domxref("ServiceWorkerGlobalScope")}} Schnittstelle tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("ExtendableMessageEvent")}}. Erbt von {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableMessageEvent.data")}} {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Es kann sich um jeden Datentyp handeln. Wenn im `messageerror` Ereignis ausgelöst, wird die Eigenschaft `null` sein.
- {{domxref("ExtendableMessageEvent.origin")}} {{ReadOnlyInline}}
  - : Gibt den Ursprung des {{domxref("Client")}} zurück, der die Nachricht gesendet hat.
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Repräsentiert, bei [server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events), die letzte Ereignis-ID der Ereignisquelle.
- {{domxref("ExtendableMessageEvent.source")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das {{domxref("Client")}} Objekt zurück, das die Nachricht gesendet hat.
- {{domxref("ExtendableMessageEvent.ports")}} {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die {{domxref("MessagePort")}} Objekte enthält, die die Ports des zugehörigen Nachrichtenkanals darstellen.

## Beispiele

Im folgenden Beispiel erhält eine Seite einen Zugriff auf das {{domxref("ServiceWorker")}} Objekt über {{domxref("ServiceWorkerRegistration.active")}} und ruft dann seine `postMessage()` Funktion auf.

```js
// main.js
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.addEventListener("message", (event) => {
    // event ist ein MessageEvent Objekt
    console.log(`Der Service Worker hat mir eine Nachricht gesendet: ${event.data}`);
  });

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage("Hi service worker");
  });
}
```

Der Service Worker kann den Deserialisierungsfehler der Nachricht erkennen, indem er auf das `messageerror` Ereignis hört:

```js
// service-worker.js
self.addEventListener("messageerror", (event) => {
  // event ist ein ExtendableMessageEvent Objekt
  console.error("Deserialisierung der Nachricht fehlgeschlagen");
});
```

Alternativ kann das Skript den Deserialisierungsfehler der Nachricht mithilfe von `onmessageerror` erfassen:

```js
// service-worker.js
self.onmessageerror = (event) => {
  // event ist ein ExtendableMessageEvent Objekt
  console.error("Deserialisierung der Nachricht fehlgeschlagen");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
- {{domxref("ServiceWorker.postMessage()")}}
- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
