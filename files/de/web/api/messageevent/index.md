---
title: MessageEvent
slug: Web/API/MessageEvent
l10n:
  sourceCommit: 6091080d719b4f0ec1cdc119a21d54a1f1cc1c59
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`MessageEvent`**-Schnittstelle steht für eine Nachricht, die von einem Zielobjekt empfangen wurde.

Diese wird verwendet, um Nachrichten in folgenden Kontexten darzustellen:

- [Server-sent events](/de/docs/Web/API/Server-sent_events) (siehe das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis von [`EventSource`](/de/docs/Web/API/EventSource)).
- [WebSockets](/de/docs/Web/API/WebSockets_API) (siehe das [`message`](/de/docs/Web/API/WebSocket/message_event)-Ereignis von [`WebSocket`](/de/docs/Web/API/WebSocket)).
- Cross-Dokument-Messaging (siehe [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) und das [`message`](/de/docs/Web/API/Window/message_event)-Ereignis von [`Window`](/de/docs/Web/API/Window)).
- [Channel-Messaging](/de/docs/Web/API/Channel_Messaging_API) (siehe [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) und das [`message`](/de/docs/Web/API/MessagePort/message_event)-Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort)).
- Cross-Worker/Dokument-Messaging (siehe die obigen zwei Einträge, aber auch [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage), das [`message`](/de/docs/Web/API/Worker/message_event)-Ereignis von [`Worker`](/de/docs/Web/API/Worker), das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope), usw.)
- [Broadcast-Kanäle](/de/docs/Web/API/Broadcast_Channel_API) (siehe [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage) und das [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis von [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)).
- WebRTC-Datenkanäle (siehe das [`message`](/de/docs/Web/API/RTCDataChannel/message_event)-Ereignis von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)).

Die durch dieses Ereignis ausgelöste Aktion wird in einer Funktion definiert, die als Ereignis-Handler für das entsprechende `message`-Ereignis gesetzt ist.

{{InheritanceDiagram}}

## Konstruktor

- [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)
  - : Erstellt ein neues `MessageEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichten-Emitter gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichten-Emitters repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (was ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann), das den Nachrichten-Emitter repräsentiert.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal verbundenen Ports darstellen, durch den die Nachricht gesendet wird (wo zutreffend, z.B. beim Channel-Messaging oder beim Senden einer Nachricht an einen Shared Worker).

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`initMessageEvent()`](/de/docs/Web/API/MessageEvent/initMessageEvent) {{deprecated_inline}}
  - : Initialisiert ein Nachrichtenevent. **Verwenden Sie dies nicht mehr** — **verwenden Sie stattdessen den [`MessageEvent()`](/de/docs/Web/API/MessageEvent/MessageEvent)-Konstruktor.**

## Beispiele

In unserem [einfachen Beispiel für Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) haben wir zwei HTML-Seiten, von denen jede etwas JavaScript verwendet, um eine einfache Berechnung durchzuführen. Die verschiedenen Skripte verwenden dieselbe Worker-Datei, um die Berechnung durchzuführen — sie können beide darauf zugreifen, auch wenn ihre Seiten in verschiedenen Fenstern ausgeführt werden.

Der folgende Code-Ausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor. Beide Skripte enthalten dies:

```js
const myWorker = new SharedWorker("worker.js");
```

Beide Skripte greifen dann auf den Worker über ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zu, das mit der [`SharedWorker.port`](/de/docs/Web/API/SharedWorker/port)-Eigenschaft erstellt wurde. Wenn das `onmessage`-Ereignis mithilfe von `addEventListener` angehängt wird, wird der Port manuell mit seiner `start()`-Methode gestartet:

```js
myWorker.port.start();
```

Wenn der Port gestartet ist, senden beide Skripte Nachrichten an den Worker und verarbeiten Nachrichten, die von ihm gesendet werden, mit `port.postMessage()` und `port.onmessage`:

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

Innerhalb des Workers verwenden wir den [`onconnect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Handler, um sich mit demselben oben beschriebenen Port zu verbinden. Die mit diesem Worker verbundenen Ports sind im `ports`-Eigenschaft des [`connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)-Ereignisses zugänglich — wir verwenden dann die `start()`-Methode des [`MessagePort`](/de/docs/Web/API/MessagePort), um den Port zu starten, und den `onmessage`-Handler, um mit Nachrichten umzugehen, die von den Haupt-Threads gesendet werden.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich zu dieser Schnittstelle, aber verwendet in Schnittstellen, die den Autoren mehr Flexibilität bieten müssen.
