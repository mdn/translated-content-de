---
title: "Client: Eigenschaft type"
short-title: type
slug: Web/API/Client/type
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`type`** schreibgeschützte Eigenschaft des {{domxref("Client")}}-Interfaces gibt den Typ des Clients an, den der Service Worker steuert.

## Wert

Ein String, der den Client-Typ darstellt. Der Wert kann einer der folgenden sein:

- `"window"`
- `"worker"`
- `"sharedworker"`

## Beispiele

```js
// Dienstarbeiter-Client (z. B. ein Dokument)
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    // beachten Sie, dass dies die ServiceWorker.postMessage-Version ist
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = (e) => {
      resolve(e.data);
    };
  });
}

// steuernder Dienstarbeiter
self.addEventListener("message", (e) => {
  // e.source ist ein Client-Objekt
  e.source.postMessage(`Hello! Your message was: ${e.data}`);
  // Senden wir auch den Typ-Wert an den Client zurück
  e.source.postMessage(e.source.type);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
