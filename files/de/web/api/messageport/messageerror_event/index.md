---
title: "MessagePort: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/MessagePort/messageerror_event
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`messageerror`**-Ereignis wird an einem [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt ausgelöst, wenn es eine Nachricht erhält, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtenemittenten gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtenemittenten darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichtenemittenten darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array, das alle [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die mit der Nachricht gesendet wurden, in der richtigen Reihenfolge.

## Beispiele

### Versuch, Speicher freizugeben

Ein häufiger Auslöser für `messageerror`-Ereignisse ist der Versuch, ein {{jsxref("SharedArrayBuffer")}}-Objekt oder eine Pufferansicht, die von einem solchen unterstützt wird, über [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) zu senden. Ein Beispiel: Ein Fenster befindet sich nicht im selben Agenten-Cluster wie ein gemeinsam genutzter Worker, den es erstellt hat. Angenommen, die Seite führt den folgenden Code aus:

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

Dann empfängt der gemeinsame Worker ein `messageerror`-Ereignis, wenn er versucht, die vom Fenster gesendete Nachricht zu deserialisieren.

> [!NOTE]
> Sie können die Entwicklertools Ihres Browsers verwenden, um Ihren SharedWorker zu debuggen, indem Sie eine URL in die Adressleiste Ihres Browsers eingeben, um auf die Worker-Inspektor-Tools zuzugreifen; zum Beispiel lautet in Chrome die URL `chrome://inspect/#workers` und in Firefox die URL `about:debugging#workers`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`message`](/de/docs/Web/API/MessagePort/message_event).
- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
