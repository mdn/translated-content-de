---
title: MessageEvent
slug: Web/API/MessageEvent
l10n:
  sourceCommit: 71743b1d31cc78a5ba99ba56dfca2105b73bd2ca
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers}}

Das **`MessageEvent`**-Interface repräsentiert eine Nachricht, die von einem Zielobjekt empfangen wurde.

Dies wird verwendet, um Nachrichten darzustellen in:

- [Server-sent Events](/de/docs/Web/API/Server-sent_events) (siehe das [`message`](/de/docs/Web/API/EventSource/message_event)-Event von [`EventSource`](/de/docs/Web/API/EventSource)).
- [WebSockets](/de/docs/Web/API/WebSockets_API) (siehe das [`message`](/de/docs/Web/API/WebSocket/message_event)-Event von [`WebSocket`](/de/docs/Web/API/WebSocket)).
- Cross-Dokument-Messaging (siehe [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) und das [`message`](/de/docs/Web/API/Window/message_event)-Event von [`Window`](/de/docs/Web/API/Window)).
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API) (siehe [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) und das [`message`](/de/docs/Web/API/MessagePort/message_event)-Event von [`MessagePort`](/de/docs/Web/API/MessagePort)).
- Cross-Worker/Dokument-Messaging (siehe die obigen zwei Einträge, aber auch [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage), das [`message`](/de/docs/Web/API/Worker/message_event)-Event von [`Worker`](/de/docs/Web/API/Worker), das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Event von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope), etc.)
- [Broadcast-Kanäle](/de/docs/Web/API/Broadcast_Channel_API) (siehe [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage) und das [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Event von [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)).
- WebRTC-Datenkanäle (siehe das [`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Event von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)).

Die durch dieses Event ausgelöste Aktion wird in einer Funktion definiert, die als Event-Handler für das entsprechende `message`-Event gesetzt ist.

{{InheritanceDiagram}}

## Konstruktor

- [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)
  - : Erstellt ein neues `MessageEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichten-Emitter gesendet wurden.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichten-Emitters darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Event darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) repräsentiert den Nachrichten-Emitter.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal verbunden sind, durch den die Nachricht gesendet wird (wo passend, z.B. im Channel Messaging oder beim Senden einer Nachricht an einen Shared Worker).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`initMessageEvent()`](/de/docs/Web/API/MessageEvent/initMessageEvent) {{deprecated_inline}}
  - : Initialisiert ein Message-Event. **Verwenden Sie dies nicht mehr** — **verwenden Sie stattdessen den [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)-Konstruktor.**

## Beispiele

In unserem [Basisbeispiel für einen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), haben wir zwei HTML-Seiten, von denen jede ein wenig JavaScript verwendet, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden dieselbe Worker-Datei, um die Berechnung durchzuführen — sie können beide darauf zugreifen, selbst wenn ihre Seiten in verschiedenen Fenstern laufen.

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts unter Verwendung des [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktors. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

Beide Skripte greifen dann über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das mit der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde, auf den Worker zu. Wenn das `onmessage`-Event mit `addEventListener` angebracht wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet wird, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten von diesem mit `port.postMessage()` und `port.onmessage` jeweils:

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

Innerhalb des Workers verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um eine Verbindung zu dem oben genannten Port herzustellen. Die mit diesem Worker verbundenen Ports sind im `ports`-Property des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Events zugänglich — wir verwenden dann die `start()`-Methode von [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten, und den `onmessage`-Handler, um mit Nachrichten von den Haupt-Threads umzugehen.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich zu diesem Interface, jedoch in Interfaces verwendet, die den Autoren mehr Flexibilität bieten müssen.
