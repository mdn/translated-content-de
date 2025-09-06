---
title: "Client: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Client/postMessage
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("Service Worker API")}}{{AvailableInWorkers("service")}}

Die **`postMessage()`** Methode der [`Client`](/de/docs/Web/API/Client) Schnittstelle ermöglicht es einem Service Worker, eine Nachricht an einen Client (ein [`Window`](/de/docs/Web/API/Window), [`Worker`](/de/docs/Web/API/Worker) oder [`SharedWorker`](/de/docs/Web/API/SharedWorker)) zu senden. Die Nachricht wird im `message` Ereignis auf [`navigator.serviceWorker`](/de/docs/Web/API/ServiceWorkerContainer) empfangen.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die an den Client gesendet werden soll. Dies kann jeder [strukturiert klonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.

    > [!NOTE]
    > Ein Service Worker befindet sich nicht im gleichen [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) wie sein Client und kann daher keinen Speicher teilen. {{jsxref("SharedArrayBuffer")}} Objekte oder Pufferansichten, die von einem unterstützt werden, können nicht über Agenten-Cluster hinweg gesendet werden. Ein Versuch, dies zu tun, erzeugt ein [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event) Ereignis mit einer `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException) auf der Empfängerseite.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird an die Empfangsseite übergeben und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten mit der Nachricht verbunden sein; andernfalls würden sie verschoben, aber nicht tatsächlich auf der Empfängerseite zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code sendet eine Nachricht von einem Service Worker an einen Client. Der Client wird mit der [`get()`](/de/docs/Web/API/Clients/get) Methode auf [`clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients), welche ein globales Objekt im Service Worker-Kontext ist, abgerufen.

```js
addEventListener("fetch", (event) => {
  event.waitUntil(
    (async () => {
      // Exit early if we don't have access to the client.
      // Eg, if it's cross-origin.
      if (!event.clientId) return;

      // Get the client.
      const client = await self.clients.get(event.clientId);
      // Exit early if we don't get the client.
      // Eg, if it closed.
      if (!client) return;

      // Send a message to the client.
      client.postMessage({
        msg: "Hey I just got a fetch from you!",
        url: event.request.url,
      });
    })(),
  );
});
```

Empfangen dieser Nachricht:

```js
navigator.serviceWorker.addEventListener("message", (event) => {
  console.log(event.data.msg, event.data.url);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
