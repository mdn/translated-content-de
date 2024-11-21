---
title: MessageEvent
slug: Web/API/MessageEvent
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Das **`MessageEvent`**-Interface repräsentiert eine Nachricht, die von einem Zielobjekt empfangen wird.

Dies wird verwendet, um Nachrichten darzustellen in:

- [Server-sent events](/de/docs/Web/API/Server-sent_events) (siehe das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis von [`EventSource`](/de/docs/Web/API/EventSource)).
- [WebSockets](/de/docs/Web/API/WebSockets_API) (siehe das [`message`](/de/docs/Web/API/WebSocket/message_event)-Ereignis von [`WebSocket`](/de/docs/Web/API/WebSocket)).
- Cross-Dokument-Messaging (siehe [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) und das [`message`](/de/docs/Web/API/Window/message_event)-Ereignis von [`Window`](/de/docs/Web/API/Window)).
- [Channel messaging](/de/docs/Web/API/Channel_Messaging_API) (siehe [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) und das [`message`](/de/docs/Web/API/MessagePort/message_event)-Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort)).
- Cross-Worker/Dokument-Messaging (siehe die beiden oben genannten Einträge, aber auch [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage), das [`message`](/de/docs/Web/API/Worker/message_event)-Ereignis von [`Worker`](/de/docs/Web/API/Worker), das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope), etc.)
- [Broadcast-Kanäle](/de/docs/Web/API/Broadcast_Channel_API) (siehe [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage) und das [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis von [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)).
- WebRTC-Datenkanäle (siehe das [`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Ereignis von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)).

Die durch dieses Ereignis ausgelöste Aktion wird in einer Funktion definiert, die als Ereignis-Handler für das relevante `message`-Ereignis festgelegt ist.

{{InheritanceDiagram}}

## Konstruktor

- [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)
  - : Erstellt ein neues `MessageEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die von dem Nachrichten-Emitter gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichten-Emitters darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (dies kann ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein), das den Nachrichten-Emitter darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, das alle [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die mit der Nachricht gesendet wurden, in der richtigen Reihenfolge.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`initMessageEvent()`](/de/docs/Web/API/MessageEvent/initMessageEvent) {{deprecated_inline}}
  - : Initialisiert ein Nachrichten-Ereignis. **Verwenden Sie dies nicht mehr** — **verwenden Sie stattdessen den [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)-Konstruktor.**

## Beispiele

In unserem [einfachen Beispiel mit einem geteilten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) haben wir zwei HTML-Seiten, von denen jede ein bisschen JavaScript verwendet, um eine Berechnung durchzuführen. Die verschiedenen Skripte benutzen dieselbe Worker-Datei, um die Berechnung durchzuführen — sie können beide darauf zugreifen, selbst wenn ihre Seiten in verschiedenen Fenstern ausgeführt werden.

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts unter Verwendung des [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktors. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

Beide Skripte greifen dann auf den Worker über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zu, das unter Verwendung der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde. Wenn das onmessage-Ereignis mit addEventListener angehängt wird, wird der Port manuell mithilfe seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet wird, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet werden, mit `port.postMessage()` und `port.onmessage`:

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

Innerhalb des Workers verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um eine Verbindung zum oben genannten Port herzustellen. Die mit diesem Worker assoziierten Ports sind im `ports`-Eigentum des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich — wir verwenden dann die `start()`-Methode von [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten, und den `onmessage`-Handler, um Nachrichten zu bearbeiten, die von den Haupt-Threads gesendet werden.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich diesem Interface, wird aber in Interfaces verwendet, die den Autoren mehr Flexibilität bieten müssen.
