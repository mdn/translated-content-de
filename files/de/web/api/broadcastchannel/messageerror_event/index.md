---
title: "BroadcastChannel: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

Das **`messageerror`**-Ereignis der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle wird ausgelöst, wenn eine Nachricht, die nicht deserialisiert werden kann, im Kanal ankommt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichten-Emitter gesendet wurden.
- [`origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichten-Emitters darstellt.
- [`lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine _Message Event Source_, die entweder ein {{Glossary("WindowProxy", "WindowProxy")}}, ein [`MessagePort`](/de/docs/Web/API/MessagePort), oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt ist, das den Nachrichten-Emitter darstellt.
- [`ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal assoziiert sind, durch den die Nachricht gesendet wird (wo relevant, z.B. in der Kanal-Messaging oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

### Auf `messageerror`-Ereignisse hören

Dieser Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Nachrichten und Fehler zu hören:

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Dasselbe, aber unter Verwendung der `onmessage`- und `onmessageerror`-Ereignis-Handler-Eigenschaften:

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

### Versuch, Speicher freizugeben

Ein häufiger Grund für `messageerror`-Ereignisse ist der Versuch, ein {{jsxref("SharedArrayBuffer")}}-Objekt oder eine Pufferansicht, die von einem solchen unterstützt wird, über [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) zu senden. Der folgende Code demonstriert dies.

Seite A führt den folgenden Code aus:

```js
const channel = new BroadcastChannel("hello");
channel.postMessage({ data: new SharedArrayBuffer(1024) });
```

Seite B führt den folgenden Code aus:

```js
const channel = new BroadcastChannel("hello");
channel.addEventListener("messageerror", (event) => {
  console.error("Message error");
});
```

Dann wird Seite B ein `messageerror`-Ereignis empfangen, wenn sie versucht, die von Seite A gesendete Nachricht zu deserialisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`message`](/de/docs/Web/API/BroadcastChannel/message_event).
