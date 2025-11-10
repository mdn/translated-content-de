---
title: "DedicatedWorkerGlobalScope: messageerror Ereignis"
short-title: messageerror
slug: Web/API/DedicatedWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das `messageerror` Ereignis wird auf einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

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
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (welches ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann), das den Nachrichtensender darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort) Objekten, das die mit dem Kanal, durch den die Nachricht gesendet wird, verbundenen Ports repräsentiert (wo zutreffend, z.B. bei der Kanal-Messaging oder beim Senden einer Nachricht zu einem Shared Worker).

## Beispiele

Auf `messageerror` mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hören:

```js
// worker.js

self.addEventListener("messageerror", (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
});
```

Dasselbe, aber mit der `onmessageerror` Ereignis-Handler-Eigenschaft:

```js
// worker.js

self.onmessageerror = (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
- [Verwendung von Kanal-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
