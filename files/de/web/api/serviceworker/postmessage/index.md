---
title: "ServiceWorker: Methode postMessage()"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **`postMessage()`**-Methode der {{domxref("ServiceWorker")}}-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter ist die Datenmenge, die an den Worker gesendet werden soll. Die Daten können jedes JavaScript-Objekt sein, das durch den [strukturierter Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) behandelt werden kann.

Der Service-Worker kann Informationen an seine Clients zurücksenden, indem er die {{domxref("Client.postMessage", "postMessage()")}}-Methode verwendet. Die Nachricht wird nicht an dieses `ServiceWorker`-Objekt zurückgesendet, sondern an den zugehörigen {{domxref("ServiceWorkerContainer")}}, der über {{domxref("navigator.serviceWorker")}} verfügbar ist.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker übermittelt werden soll; es wird im `data`-Feld des Ereignisses enthalten sein, das an das {{domxref("ServiceWorkerGlobalScope.message_event", "message")}}-Ereignis übergeben wird. Dies kann jedes JavaScript-Objekt sein, das durch den [strukturierter Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) behandelt wird.

    Der `message`-Parameter ist obligatorisch. Wenn die übergebenen Daten an den Worker nicht wichtig sind, muss `null` oder `undefined` explizit übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um deren Eigentum zu übertragen. Das Eigentum dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber tatsächlich nicht auf der empfangenden Seite zugänglich sein.
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

In diesem Beispiel wird ein {{domxref("ServiceWorker")}} erstellt und eine Nachricht wird sofort gesendet:

```js
navigator.serviceWorker.register("service-worker.js");

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage(
    "Testnachricht, die sofort nach der Erstellung gesendet wird",
  );
});
```

Um die Nachricht zu empfangen, muss der Service-Worker in `service-worker.js` das {{domxref("ServiceWorkerGlobalScope.message_event", "message")}}-Ereignis in seinem globalen Bereich überwachen.

```js
// Dies muss in `service-worker.js` stehen
addEventListener("message", (event) => {
  console.log(`Nachricht empfangen: ${event.data}`);
});
```

Beachten Sie, dass der Service-Worker über die {{domxref("Client.postMessage()", "postMessage()")}}-Methode Nachrichten an den Hauptthread zurücksenden kann. Um es zu empfangen, muss der Hauptthread ein {{domxref("ServiceWorkerContainer.message_event", "message")}}-Ereignis am {{domxref("ServiceWorkerContainer")}}-Objekt überwachen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("ServiceWorker")}}-Schnittstelle, zu der sie gehört.
- Ihr Gegenstück, die {{domxref("Client.postMessage()", "postMessage()")}}-Methode, die ein Service-Worker verwenden muss, um eine Nachricht an den zugehörigen {{domxref("ServiceWorkerContainer")}} zu senden.
