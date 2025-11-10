---
title: "Worker: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/Worker/messageerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das `messageerror`-Ereignis wird auf einem [`Worker`](/de/docs/Web/API/Worker)-Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

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

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die von dem Nachrichtenemitter gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtenemitters repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine einzigartige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (kann ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein), das den Nachrichtenemitter repräsentiert.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports repräsentieren, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird (wo zutreffend, z.B. bei der Kanalnachrichtübermittlung oder beim Senden einer Nachricht an einen gemeinsam genutzten Worker).

## Beispiele

Erstellen Sie einen Worker und lauschen Sie auf `message`- und `messageerror`-Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.error(`Received message from worker: ${event}`);
});

worker.addEventListener("messageerror", (event) => {
  console.error(`Error receiving message from worker: ${event}`);
});
```

Das gleiche, aber unter Verwendung der `onmessageerror`-Ereignis-Handler-Eigenschaft:

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
  console.error(`Received message from worker: ${event}`);
};

worker.onmessageerror = (event) => {
  console.error(`Error receiving message from worker: ${event}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/Worker/message_event)
