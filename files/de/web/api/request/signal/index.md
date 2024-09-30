---
title: "Request: signal-Eigenschaft"
short-title: signal
slug: Web/API/Request/signal
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`signal`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces gibt das [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das mit der Anforderung verbunden ist.

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
  if (signal.aborted) {
    if (signal.reason) {
      console.log(`Request aborted with reason: ${signal.reason}`);
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
