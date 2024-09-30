---
title: "Client: type-Eigenschaft"
short-title: type
slug: Web/API/Client/type
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`type`**-Eigenschaft der [`Client`](/de/docs/Web/API/Client)
Schnittstelle gibt den Typ des Clients an, den der Service Worker steuert.

## Wert

Ein String, der den Client-Typ repräsentiert. Der Wert kann einer der folgenden sein:

- `"window"`
- `"worker"`
- `"sharedworker"`

## Beispiele

```js
// service worker client (e.g. a document)
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    // note that this is the ServiceWorker.postMessage version
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = (e) => {
      resolve(e.data);
    };
  });
}

// controlling service worker
self.addEventListener("message", (e) => {
  // e.source is a client object
  e.source.postMessage(`Hello! Your message was: ${e.data}`);
  // Let's also post the type value back to the client
  e.source.postMessage(e.source.type);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
