---
title: "ServiceWorker: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **`postMessage()`**-Methode der [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter ist die Daten, die an den Worker gesendet werden sollen. Die Daten können jedes JavaScript-Objekt sein, das vom [structured clone algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) behandelt werden kann.

Der Service Worker kann Informationen an seine Clients zurücksenden, indem er die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode verwendet. Die Nachricht wird nicht an dieses `ServiceWorker`-Objekt zurückgesendet, sondern an das zugehörige [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer), das über [`navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar ist.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker übermittelt werden soll; es wird im `data`-Feld des an das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis übermittelten Ereignisses enthalten sein. Dies kann jedes JavaScript-Objekt sein, das vom [structured clone algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) behandelt wird.

    Der `message`-Parameter ist obligatorisch. Wenn die Daten, die an den Worker übergeben werden sollen, unwichtig sind, müssen `null` oder `undefined` explizit übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum an diesen Objekten wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden, andernfalls würden sie verschoben, sind aber auf der empfangenden Seite nicht tatsächlich zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `message`-Parameter nicht angegeben ist.

## Beispiele

In diesem Beispiel wird ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) erstellt und sofort eine Nachricht gesendet:

```js
navigator.serviceWorker.register("service-worker.js");

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage(
    "Test message sent immediately after creation",
  );
});
```

Um die Nachricht zu empfangen, muss der Service Worker in `service-worker.js` das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis im globalen Bereich abhören.

```js
// This must be in `service-worker.js`
addEventListener("message", (event) => {
  console.log(`Message received: ${event.data}`);
});
```

Beachten Sie, dass der Service Worker mit der [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode Nachrichten an den Haupt-Thread zurücksenden kann. Um diese zu empfangen, muss der Haupt-Thread ein [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)-Ereignis am [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt abhören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle zu der sie gehört.
- Ihr Gegenstück, die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode, die ein Service Worker verwenden muss, um eine Nachricht zurück an das zugehörige [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) zu senden.
