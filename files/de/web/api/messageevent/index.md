---
title: MessageEvent
slug: Web/API/MessageEvent
l10n:
  sourceCommit: 71743b1d31cc78a5ba99ba56dfca2105b73bd2ca
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers}}

Das **`MessageEvent`**-Interface repräsentiert eine Nachricht, die von einem Zielobjekt empfangen wurde.

Dies wird genutzt, um Nachrichten zu repräsentieren in:

- [Server-sent events](/de/docs/Web/API/Server-sent_events) (siehe das {{domxref("EventSource.message_event", "message")}}-Ereignis von {{domxref("EventSource")}}).
- [Websockets](/de/docs/Web/API/WebSockets_API) (siehe das {{domxref("WebSocket.message_event", "message")}}-Ereignis von {{domxref("WebSocket")}}).
- Dokumentübergreifende Nachrichtenübermittlung (siehe {{domxref("Window.postMessage()")}} und das {{domxref("Window.message_event", "message")}}-Ereignis von {{domxref("Window")}}).
- [Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API) (siehe {{domxref("MessagePort.postMessage()")}} und das {{domxref("MessagePort.message_event", "message")}}-Ereignis von {{domxref("MessagePort")}}).
- Nachrichtenübermittlung zwischen Arbeitsbereichen/Dokumenten (siehe die oben genannten Einträge, aber auch {{domxref("Worker.postMessage()")}}, das {{domxref("Worker.message_event", "message")}}-Ereignis von {{domxref("Worker")}}, das {{domxref("ServiceWorkerGlobalScope.message_event", "message")}}-Ereignis von {{domxref("ServiceWorkerGlobalScope")}}, etc.)
- [Broadcast Kanäle](/de/docs/Web/API/Broadcast_Channel_API) (siehe {{domxref("BroadcastChannel.postMessage()")}} und das {{domxref("BroadcastChannel.message_event", "message")}}-Ereignis von {{domxref("BroadcastChannel")}}).
- WebRTC-Datenkanäle (siehe das {{domxref("RTCDataChannel.message_event", "message")}}-Ereignis von {{domxref("RTCDataChannel")}}).

Die durch dieses Ereignis ausgelöste Aktion wird in einer Funktion definiert, die als Ereignishandler für das relevante `message`-Ereignis festgelegt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : Erstellt ein neues `MessageEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die vom Nachrichtenemittenten gesendeten Daten.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein Zeichenkette, die den Ursprung des Nachrichtenemitters darstellt.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein Zeichenkette, die eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, oder {{domxref("ServiceWorker")}} Objekt sein kann), die den Nachrichtenemittenten darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}} Objekten, die die Ports repräsentieren, die mit dem Kanal assoziiert sind, über den die Nachricht gesendet wird (wo zutreffend, z. B. bei Kanalnachrichten oder beim Senden einer Nachricht an einen gemeinsamen Arbeiter).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, {{domxref("Event")}}._

- {{domxref("MessageEvent.initMessageEvent","initMessageEvent()")}} {{deprecated_inline}}
  - : Initialisiert ein Nachrichtsereignis. **Verwenden Sie dies nicht mehr** — **verwenden Sie stattdessen den {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} Konstruktor.**

## Beispiele

In unserem [Beispiel für einen einfachen gemeinsamen Arbeiter](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([gemeinsamen Arbeiter ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), haben wir zwei HTML-Seiten, die jeweils ein wenig JavaScript verwenden, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden dieselbe Arbeiterdatei, um die Berechnung durchzuführen — sie können beide darauf zugreifen, selbst wenn ihre Seiten in verschiedenen Fenstern laufen.

Der folgende Codeausschnitt zeigt die Erstellung eines {{domxref("SharedWorker")}} Objekts mit dem {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

Beide Skripte greifen dann über ein {{domxref("MessagePort")}} Objekt, das mit der {{domxref("SharedWorker.port")}} Eigenschaft erstellt wurde, auf den Arbeiter zu. Wenn das `onmessage` Ereignis mit `addEventListener` angebunden wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Arbeiter und verarbeiten Nachrichten von ihm mit `port.postMessage()` und `port.onmessage` entsprechend:

```js
first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Im Inneren des Arbeiters verwenden wir den {{domxref("SharedWorkerGlobalScope.connect_event", "onconnect")}} Handler, um uns mit demselben oben besprochenen Port zu verbinden. Die mit diesem Arbeiter assoziierten Ports sind im `ports`-Eigentum des {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}}-Ereignisses zugänglich — wir verwenden dann die {{domxref("MessagePort")}} `start()`-Methode, um den Port zu starten, und den `onmessage`-Handler, um Nachrichten zu bearbeiten, die von den Haupt-Threads gesendet werden.

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Erforderlich bei der Verwendung von addEventListener. Andernfalls implizit durch onmessage-Setter aufgerufen.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ExtendableMessageEvent")}} — ähnlich diesem Interface, aber in Interfaces genutzt, die den Autoren mehr Flexibilität bieten müssen.
