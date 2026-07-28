---
title: "MessagePort: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/MessagePort/messageerror_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`messageerror`**-Ereignis wird bei einem [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt ausgelöst, wenn es eine Nachricht erhält, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

### Versuch, Speicher zu teilen

Eine häufige Ursache für `messageerror`-Ereignisse ist der Versuch, ein {{jsxref("SharedArrayBuffer")}}-Objekt oder eine Pufferansicht, die von einem solchen unterstützt wird, über [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) hinweg zu senden. Zum Beispiel befindet sich ein Fenster nicht im gleichen Agenten-Cluster wie ein von ihm erstellter Shared Worker. Angenommen, die Seite führt den folgenden Code aus:

```js
const worker = new SharedWorker("worker.js");
worker.port.start();
worker.port.addEventListener("message", (event) => {
  worker.port.postMessage(new SharedArrayBuffer(1024));
});
```

Und `worker.js` enthält den folgenden Code:

```js
self.addEventListener("connect", (event) => {
  console.log("Hello");
  const port = event.ports[0];
  port.start();
  port.postMessage("Port connected");
  port.addEventListener("messageerror", (event) => {
    console.log("Message error");
  });
});
```

Dann wird der Shared Worker ein `messageerror`-Ereignis erhalten, wenn er versucht, die vom Fenster gesendete Nachricht zu deserialisieren.

> [!NOTE]
> Sie können die Entwicklerwerkzeuge Ihres Browsers verwenden, um Ihren SharedWorker zu debuggen, indem Sie eine URL in der Adressleiste Ihres Browsers eingeben, um auf den Entwicklerwerkzeuge-Inspektor der Worker zuzugreifen; zum Beispiel in Chrome die URL `chrome://inspect/#workers` und in Firefox die URL `about:debugging#workers`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`message`](/de/docs/Web/API/MessagePort/message_event).
- [Verwendung der Kanal-Nachrichtenübermittlung](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
