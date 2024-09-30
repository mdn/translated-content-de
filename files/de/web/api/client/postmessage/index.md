---
title: "Client: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/Client/postMessage
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Service Worker API")}}{{AvailableInWorkers("service")}}

Die **`postMessage()`**-Methode der [`Client`](/de/docs/Web/API/Client)-Schnittstelle ermöglicht es einem Service Worker, eine Nachricht an einen Client (ein [`Window`](/de/docs/Web/API/Window), [`Worker`](/de/docs/Web/API/Worker) oder [`SharedWorker`](/de/docs/Web/API/SharedWorker)) zu senden. Die Nachricht wird im `message`-Ereignis auf [`navigator.serviceWorker`](/de/docs/Web/API/ServiceWorkerContainer) empfangen.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die an den Client gesendet werden soll. Dies kann jeder [strukturiert-klonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um das Eigentum zu übertragen. Das Eigentum an diesen Objekten wird auf die Empfängerseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; sonst würden sie verschoben, aber tatsächlich nicht auf der Empfängerseite zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der unten stehende Code sendet eine Nachricht von einem Service Worker an einen Client. Der Client wird mit der [`get()`](/de/docs/Web/API/Clients/get)-Methode auf [`clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients), einem Global im Service Worker Scope, abgerufen.

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
