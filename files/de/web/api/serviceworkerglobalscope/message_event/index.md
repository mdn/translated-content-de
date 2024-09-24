---
title: "ServiceWorkerGlobalScope: message-Ereignis"
short-title: message
slug: Web/API/ServiceWorkerGlobalScope/message_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`message`**-Ereignis des {{domxref("ServiceWorkerGlobalScope")}}-Interfaces tritt auf, wenn eingehende Nachrichten empfangen werden. Kontrollierte Seiten können die Methode {{domxref("ServiceWorker.postMessage()")}} verwenden, um Nachrichten an Service Workers zu senden.
Der Service Worker kann optional eine Antwort über {{domxref("Client.postMessage()")}}, entsprechend der kontrollierten Seite, zurücksenden.

Dieses Ereignis ist nicht stornierbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("ExtendableMessageEvent")}}. Erbt von {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableMessageEvent.data")}} {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Es kann sich um jeden Datentyp handeln. Wenn im `messageerror`-Ereignis ausgelöst, wird die Eigenschaft `null` sein.
- {{domxref("ExtendableMessageEvent.origin")}} {{ReadOnlyInline}}
  - : Gibt den Ursprung des {{domxref("Client")}} zurück, der die Nachricht gesendet hat.
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Repräsentiert in [server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die letzte Ereignis-ID der Ereignisquelle.
- {{domxref("ExtendableMessageEvent.source")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das {{domxref("Client")}}-Objekt zurück, das die Nachricht gesendet hat.
- {{domxref("ExtendableMessageEvent.ports")}} {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die {{domxref("MessagePort")}}-Objekte darstellt, welche die Ports des zugehörigen Nachrichtenkanals repräsentieren.

## Beispiele

Im folgenden Beispiel erhält eine Seite einen Handle auf das {{domxref("ServiceWorker")}}-Objekt über {{domxref("ServiceWorkerRegistration.active")}} und ruft dann dessen `postMessage()`-Funktion auf.

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

Der Service Worker kann die Nachricht empfangen, indem er auf das `message`-Ereignis hört:

```js
// service-worker.js
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

Alternativ kann das Skript auf die Nachricht mit `onmessage` warten:

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
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
