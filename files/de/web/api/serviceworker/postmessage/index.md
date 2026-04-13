---
title: "ServiceWorker: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
l10n:
  sourceCommit: ff81a4e4cb740060aca2df256ce2e07d1e2c0b4e
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **`postMessage()`**-Methode der [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter sind die Daten, die an den Worker gesendet werden sollen. Die Daten können jedes JavaScript-Objekt sein, das vom [strukturieren Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden kann.

Der Service Worker kann Informationen an seine Clients zurücksenden, indem er die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode verwendet. Die Nachricht wird nicht an dieses `ServiceWorker`-Objekt zurückgesendet, sondern an das zugehörige [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer), das über [`navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar ist.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Das Objekt, das an den Worker übermittelt werden soll; dieses wird im `data`-Feld des Ereignisses enthalten sein, das an das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis geliefert wird. Dies kann jedes JavaScript-Objekt sein, das vom [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet wird.

    Der `message`-Parameter ist obligatorisch. Wenn die Daten, die an den Worker übergeben werden sollen, nicht wichtig sind, muss `null` oder `undefined` explizit übergeben werden.

    > [!NOTE]
    > Ein Service Worker befindet sich nicht im gleichen [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) wie sein Client und kann daher keinen Speicher teilen. {{jsxref("SharedArrayBuffer")}}-Objekte oder Pufferansichten, die von einem solchen unterstützt werden, können nicht über Agent-Cluster hinweg gepostet werden. Der Versuch, dies zu tun, erzeugt ein [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event)-Ereignis, das einen `DataCloneError`-[`DOMException`](/de/docs/Web/API/DOMException) auf der empfangenden Seite enthält.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird an die Zielseite übergeben und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte werden nicht automatisch gesendet; sie müssen entweder in der Nachricht enthalten sein oder dem Empfänger über andere Mittel zugänglich gemacht werden, wie z.B. [`MessagePort`](/de/docs/Web/API/MessagePort) über [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports).
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

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

Um die Nachricht zu empfangen, muss der Service Worker in `service-worker.js` auf das [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis im globalen Bereich hören.

```js
// This must be in `service-worker.js`
addEventListener("message", (event) => {
  console.log(`Message received: ${event.data}`);
});
```

Beachten Sie, dass der Service Worker Nachrichten an den Haupt-Thread zurücksenden kann, indem er die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode verwendet. Um diese zu empfangen, muss der Haupt-Thread auf ein [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)-Ereignis auf dem [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Schnittstelle, zu der es gehört.
- Das Gegenstück, die [`postMessage()`](/de/docs/Web/API/Client/postMessage)-Methode, die ein Service Worker verwenden muss, um eine Nachricht an das zugehörige [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) zu senden.
