---
title: "ServiceWorker: postMessage() Methode"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **`postMessage()`** Methode der [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter ist die an den Worker zu sendenden Daten. Diese Daten können jedes JavaScript-Objekt sein, das vom [Strukturierten Klonalgoitmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) behandelt werden kann.

Der Service Worker kann Informationen an seine Clients zurücksenden, indem er die [`postMessage()`](/de/docs/Web/API/Client/postMessage) Methode verwendet. Die Nachricht wird nicht an dieses `ServiceWorker`-Objekt zurückgesendet, sondern an den zugehörigen [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer), der über [`navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) zugänglich ist.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Das Objekt, das an den Worker übermittelt werden soll; es wird im `data`-Feld im Event enthalten sein, das an das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Event übermittelt wird. Dies kann jedes JavaScript-Objekt sein, das vom [Strukturierten Klonalgoitmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) behandelt wird.

    Der `message`-Parameter ist obligatorisch. Wenn die Daten, die an den Worker übergeben werden sollen, nicht wichtig sind, muss `null` oder `undefined` explizit übergeben werden.

    > [!NOTE]
    > Ein Service Worker befindet sich nicht im gleichen [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) wie sein Client und kann daher keinen Speicher teilen. {{jsxref("SharedArrayBuffer")}} Objekte oder Pufferansichten, die durch einen solchen Puffer unterstützt werden, können nicht über Agent-Cluster hinweg gepostet werden. Der Versuch, dies zu tun, erzeugt ein [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event)-Event, das am empfangenden Ende einen `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException) enthält.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um deren Eigentum zu transferieren. Das Eigentum dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie zwar verschoben, aber nicht tatsächlich auf der Empfängerseite zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `message`-Parameter nicht bereitgestellt wird.

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

Um die Nachricht zu empfangen, muss der Service Worker in `service-worker.js` das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Event in seinem globalen Kontext überwachen.

```js
// This must be in `service-worker.js`
addEventListener("message", (event) => {
  console.log(`Message received: ${event.data}`);
});
```

Beachten Sie, dass der Service Worker Nachrichten an den Hauptthread zurücksenden kann, indem er die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode verwendet. Um diese zu empfangen, muss der Hauptthread ein [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)-Event am [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt überwachen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle, zu der es gehört.
- Das Gegenstück, die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode, die ein Service Worker verwenden muss, um eine Nachricht zurück an den zugehörigen [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) zu senden.
