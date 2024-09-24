---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`ExtendableMessageEvent`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert das Ereignisobjekt eines {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}-Ereignisses, das bei einem Service Worker ausgelöst wird (wenn eine Nachricht im {{domxref("ServiceWorkerGlobalScope")}} aus einem anderen Kontext empfangen wird) — und verlängert die Lebensdauer solcher Ereignisse.

Diese Schnittstelle erbt von der {{domxref("ExtendableEvent")}}-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ExtendableMessageEvent.ExtendableMessageEvent","ExtendableMessageEvent()")}}
  - : Erstellt eine neue Instanz des `ExtendableMessageEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableMessageEvent.data")}} {{ReadOnlyInline}}
  - : Gibt die Daten des Ereignisses zurück. Es kann sich um jeden Datentyp handeln. Wenn im `messageerror`-Ereignis gesendet, wird die Eigenschaft `null` sein.
- {{domxref("ExtendableMessageEvent.origin")}} {{ReadOnlyInline}}
  - : Gibt den Ursprung des {{domxref("Client")}} zurück, der die Nachricht gesendet hat.
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Repräsentiert, bei [server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events), die letzte Ereignis-ID der Ereignisquelle.
- {{domxref("ExtendableMessageEvent.source")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das {{domxref("Client")}}-Objekt zurück, das die Nachricht gesendet hat.
- {{domxref("ExtendableMessageEvent.ports")}} {{ReadOnlyInline}}
  - : Gibt das Array zurück, das die {{domxref("MessagePort")}}-Objekte repräsentiert, welche die Ports des zugehörigen Nachrichtenkanals darstellen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("ExtendableEvent")}}_.

## Beispiele

Im untenstehenden Beispiel erhält eine Seite Zugriff auf das {{domxref("ServiceWorker")}}-Objekt über {{domxref("ServiceWorkerRegistration.active")}} und ruft dann die Funktion `postMessage()` auf.

```js
// auf der kontrollierten Seite
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.addEventListener("message", (event) => {
    // event ist ein MessageEvent-Objekt
    console.log(`Der Service Worker hat mir eine Nachricht gesendet: ${event.data}`);
  });

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage("Hi service worker");
  });
}
```

Der Service Worker kann die Nachricht empfangen, indem er auf das `message`-Ereignis hört:

```js
// im Service Worker
addEventListener("message", (event) => {
  // event ist ein ExtendableMessageEvent-Objekt
  console.log(`Der Client hat mir eine Nachricht gesendet: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
