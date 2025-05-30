---
title: "AbortSignal: any() statische Methode"
short-title: any()
slug: Web/API/AbortSignal/any_static
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die statische Methode **`AbortSignal.any()`** nimmt ein iterierbares Objekt von Abbruchsignalen entgegen und gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück. Das zurückgegebene Abbruchsignal wird abgebrochen, wenn eines der Abbruchsignale im Eingabeiterierbaren abgebrochen wird. Der [Abbruchgrund](/de/docs/Web/API/AbortSignal/reason) wird auf den Grund des ersten Signals gesetzt, das abgebrochen wird. Wenn eines der gegebenen Abbruchsignale bereits abgebrochen ist, wird auch das zurückgegebene [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen.

## Syntax

```js-nolint
AbortSignal.any(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Abbruchsignalen.

### Rückgabewert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das:

- **Bereits abgebrochen** ist, wenn eines der gegebenen Abbruchsignale bereits abgebrochen ist. Der Grund des zurückgegebenen [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird bereits auf den [`reason`](/de/docs/Web/API/AbortSignal/reason) des ersten bereits abgebrochenen Abbruchsignals gesetzt.
- **Asynchron abgebrochen**, wenn irgendein Abbruchsignal im `iterable` abbricht. Der [`reason`](/de/docs/Web/API/AbortSignal/reason) wird auf den Grund des ersten abgebrochenen Abbruchsignals gesetzt.

## Beispiele

### Verwendung von `AbortSignal.any()`

Dieses Beispiel zeigt die Kombination aus einem Signal von einem [`AbortController`](/de/docs/Web/API/AbortController) und einem Timeout-Signal von [`AbortSignal.timeout`](/de/docs/Web/API/AbortSignal/timeout_static).

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new AbortController();

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// Timeout after 5 minutes
const timeoutSignal = AbortSignal.timeout(1_000 * 60 * 5);

// This signal will abort when either the user clicks the cancel button or 5 minutes is up
// whichever is sooner
const combinedSignal = AbortSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // Stop the fetch when any of the signals aborts
    signal: combinedSignal,
  });
  const body = await res.blob();
  // Do something with downloaded content:
  // …
} catch (e) {
  if (e.name === "AbortError") {
    // Cancelled by the user
  } else if (e.name === "TimeoutError") {
    // Show user that download timed out
  } else {
    // Other error, e.g. network error
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
