---
title: "Client: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/Client/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Service Worker API")}}{{AvailableInWorkers("service")}}

Die **`postMessage()`**-Methode der {{domxref("Client")}} Schnittstelle ermöglicht es einem Service Worker, eine Nachricht an einen Client (ein {{domxref("Window")}}, {{domxref("Worker")}} oder {{domxref("SharedWorker")}}) zu senden. Die Nachricht wird im "`message`"-Ereignis auf {{domxref("ServiceWorkerContainer", "navigator.serviceWorker")}} empfangen.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die an den Client gesendet werden soll. Dies kann jeder [strukturklonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum an diesen Objekten wird an die Empfängerseite übergeben und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber auf der Empfangsseite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der unten stehende Code sendet eine Nachricht von einem Service Worker an einen Client. Der Client wird mit der {{domxref("Clients.get()", "get()")}}-Methode auf {{domxref("ServiceWorkerGlobalScope.clients", "clients")}}, welche global im Service Worker-Scope ist, abgerufen.

```js
addEventListener("fetch", (event) => {
  event.waitUntil(
    (async () => {
      // Frühzeitiger Ausstieg, wenn wir keinen Zugriff auf den Client haben.
      // Z.B., wenn es sich um eine cross-origin Anfrage handelt.
      if (!event.clientId) return;

      // Den Client abrufen.
      const client = await self.clients.get(event.clientId);
      // Frühzeitiger Ausstieg, wenn wir den Client nicht abrufen können.
      // Z.B., wenn er geschlossen wurde.
      if (!client) return;

      // Eine Nachricht an den Client senden.
      client.postMessage({
        msg: "Hey, ich habe gerade eine Abfrage von Ihnen erhalten!",
        url: event.request.url,
      });
    })(),
  );
});
```

Empfang dieser Nachricht:

```js
navigator.serviceWorker.addEventListener("message", (event) => {
  console.log(event.data.msg, event.data.url);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
