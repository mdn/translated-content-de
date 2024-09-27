---
title: MessageEvent
slug: Web/API/MessageEvent
l10n:
  sourceCommit: 71743b1d31cc78a5ba99ba56dfca2105b73bd2ca
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers}}

Die **`MessageEvent`** Schnittstelle repräsentiert eine Nachricht, die von einem Zielobjekt empfangen wurde.

Dies wird verwendet zur Darstellung von Nachrichten in:

- [Server-sent events](/de/docs/Web/API/Server-sent_events) (siehe das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis von [`EventSource`](/de/docs/Web/API/EventSource)).
- [Websockets](/de/docs/Web/API/WebSockets_API) (siehe das [`message`](/de/docs/Web/API/WebSocket/message_event)-Ereignis von [`WebSocket`](/de/docs/Web/API/WebSocket)).
- Cross-document messaging (siehe [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) und das [`message`](/de/docs/Web/API/Window/message_event)-Ereignis von [`Window`](/de/docs/Web/API/Window)).
- [Channel messaging](/de/docs/Web/API/Channel_Messaging_API) (siehe [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) und das [`message`](/de/docs/Web/API/MessagePort/message_event)-Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort)).
- Cross-worker/document messaging (siehe die beiden obigen Einträge, aber auch [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage), das [`message`](/de/docs/Web/API/Worker/message_event)-Ereignis von [`Worker`](/de/docs/Web/API/Worker), das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope), etc.)
- [Broadcast channels](/de/docs/Web/API/Broadcast_Channel_API) (siehe [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage) und das [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis von [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)).
- WebRTC-Datenkanäle (siehe das [`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Ereignis von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)).

Die durch dieses Ereignis ausgelöste Aktion ist in einer Funktion definiert, die als Ereignis-Handler für das entsprechende `message`-Ereignis gesetzt wurde.

{{InheritanceDiagram}}

## Konstruktor

- [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)
  - : Erstellt ein neues `MessageEvent`.

## Eigenschaften der Instanz

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann), welches den Nachrichtensender darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort) Objekten, die die mit dem Kanal verbundenen Ports darstellen, durch den die Nachricht gesendet wird (wo zutreffend, z.B. im Channel Messaging oder beim Senden einer Nachricht an einen Shared Worker).

## Methoden der Instanz

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`initMessageEvent()`](/de/docs/Web/API/MessageEvent/initMessageEvent) {{deprecated_inline}}
  - : Initialisiert ein Message-Ereignis. **Verwenden Sie dies nicht mehr** — **verwenden Sie stattdessen den [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)-Konstruktor.**

## Beispiele

In unserem [Einfaches Shared Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([starten Sie den Shared Worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) haben wir zwei HTML-Seiten, die jeweils ein JavaScript verwenden, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden dieselbe Worker-Datei, um die Berechnung durchzuführen — sie können beide darauf zugreifen, sogar wenn ihre Seiten in verschiedenen Fenstern laufen.

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das mit der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde, auf den Worker zu. Wenn das `onmessage`-Ereignis mit `addEventListener` angehängt wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet wird, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet werden, mithilfe von `port.postMessage()` und `port.onmessage`:

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

Im Worker verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um eine Verbindung zu dem oben diskutierten Port herzustellen. Die mit diesem Worker verbundenen Ports sind im `ports`-Eigentum des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich — wir verwenden dann die `start()`-Methode von [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten und den `onmessage`-Handler, um mit Nachrichten umzugehen, die von den Haupt-Threads gesendet werden.

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich dieser Schnittstelle, wird jedoch in Schnittstellen verwendet, die den Autoren mehr Flexibilität bieten müssen.
