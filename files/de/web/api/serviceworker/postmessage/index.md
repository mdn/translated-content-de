---
title: "ServiceWorker: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **`postMessage()`**-Methode der [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter ist die Daten, die an den Worker gesendet werden sollen. Diese Daten können jedes JavaScript-Objekt sein, das vom [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden kann.

Der Service Worker kann seinen Clients Informationen zurücksenden, indem er die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode verwendet. Die Nachricht wird nicht an dieses `ServiceWorker`-Objekt zurückgesendet, sondern an das zugehörige [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer), das über [`navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar ist.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker übermittelt werden soll; dies wird im `data`-Feld im Ereignis enthalten sein, das an das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis übermittelt wird. Dies kann jedes JavaScript-Objekt sein, das vom [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) behandelt wird.

    Der `message`-Parameter ist obligatorisch. Wenn die zu übergebenden Daten an den Worker unwichtig sind, muss `null` oder `undefined` explizit übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Das Eigentum an diesen Objekten wird der Zielseite übergeben und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten mit der Nachricht verbunden sein, andernfalls werden sie verschoben, sind aber auf der Empfangsseite nicht tatsächlich zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `message`-Parameter nicht bereitgestellt wird.

## Beispiele

In diesem Beispiel wird ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) erstellt und es wird sofort eine Nachricht gesendet:

```js
navigator.serviceWorker.register("service-worker.js");

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage(
    "Test message sent immediately after creation",
  );
});
```

Um die Nachricht zu empfangen, muss der Service Worker in `service-worker.js` das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis in seinem globalen Gültigkeitsbereich abhören.

```js
// This must be in `service-worker.js`
addEventListener("message", (event) => {
  console.log(`Message received: ${event.data}`);
});
```

Beachten Sie, dass der Service Worker Nachrichten an den Hauptthread zurücksenden kann, indem er die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode verwendet. Um sie zu empfangen, muss der Hauptthread ein [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)-Ereignis auf dem [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt abhören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle, zu der sie gehört.
- Ihr Gegenstück, die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode, die ein Service Worker verwenden muss, um eine Nachricht zurück an das zugehörige [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) zu senden.
