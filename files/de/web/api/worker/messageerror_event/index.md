---
title: "Worker: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/Worker/messageerror_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das `messageerror`-Ereignis wird bei einem [`Worker`](/de/docs/Web/API/Worker)-Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

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

Erstellen Sie einen Worker und registrieren Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Listener für die Ereignisse `message` und `messageerror`:

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

Dasselbe mit der Event-Handler-Eigenschaft `onmessageerror`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmessage` und `onmessageerror` hinzugefügte Ereignis-Listener ersetzt werden:

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
