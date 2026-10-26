---
title: "MessagePort: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/MessagePort/messageerror_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`messageerror`**-Ereignis wird auf einem [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

### Versuch, Speicher gemeinsam zu nutzen

Eine häufige Ursache für `messageerror`-Ereignisse ist der Versuch, ein {{jsxref("SharedArrayBuffer")}}-Objekt oder eine darauf basierende Buffer-Ansicht über Grenzen von [Agent-Clustern](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) hinweg zu senden. Ein Fenster befindet sich beispielsweise nicht im selben Agent-Cluster wie ein von ihm erstellter Shared Worker. Angenommen, die Seite führt folgenden Code aus:

```js
const worker = new SharedWorker("worker.js");
worker.port.start();
worker.port.addEventListener("message", (event) => {
  worker.port.postMessage(new SharedArrayBuffer(1024));
});
```

Und `worker.js` enthält folgenden Code:

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

Dann empfängt der Shared Worker ein `messageerror`-Ereignis, wenn er versucht, die vom Fenster gesendete Nachricht zu deserialisieren.

> [!NOTE]
> Sie können die Entwicklertools Ihres Browsers verwenden, um Ihren SharedWorker zu debuggen. Geben Sie dazu eine URL in die Adressleiste Ihres Browsers ein, um die Worker-Ansicht der Entwicklertools aufzurufen: in Chrome beispielsweise `chrome://inspect/#workers` und in Firefox `about:debugging#workers`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`message`](/de/docs/Web/API/MessagePort/message_event).
- [Channel Messaging verwenden](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
