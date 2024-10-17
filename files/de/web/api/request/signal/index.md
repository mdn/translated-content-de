---
title: "Anfrage: signal-Eigenschaft"
short-title: signal
slug: Web/API/Request/signal
l10n:
  sourceCommit: 242b21a3650efeec0d5d2c74cbd171891748c115
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`signal`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle gibt das mit der Anfrage verknüpfte [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.

## Wert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Beispiele

```js
// Create a new abort controller
const controller = new AbortController();

// Create a request with this controller's AbortSignal object
const req = new Request("/", { signal: controller.signal });

// Add an event handler logging a message in case of abort
req.signal.addEventListener("abort", () => {
  console.log("abort");
});

// In case of abort, log the AbortSignal reason, if any
fetch(req).catch(() => {
  if (req.signal.aborted) {
    if (req.signal.reason) {
      console.log(`Request aborted with reason: ${req.signal.reason}`);
    } else {
      console.log("Request aborted but no reason was given.");
    }
  } else {
    console.log("Request not aborted, but terminated abnormally.");
  }
});

// Actually abort the request
controller.abort();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
