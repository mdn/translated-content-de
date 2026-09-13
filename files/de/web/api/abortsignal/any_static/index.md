---
title: "AbortSignal: any() statische Methode"
short-title: any()
slug: Web/API/AbortSignal/any_static
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die statische Methode **`AbortSignal.any()`** nimmt ein iterierbares Objekt von Abbruchsignalen und gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück. Das zurückgegebene Abbruchsignal wird abgebrochen, wenn eines der Abbruchsignale des Input-Iterators abgebrochen wird. Der [Abbruchgrund](/de/docs/Web/API/AbortSignal/reason) wird auf den Grund des ersten Signals gesetzt, das abgebrochen wurde. Wenn eines der angegebenen Abbruchsignale bereits abgebrochen ist, wird auch das zurückgegebene [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen.

## Syntax

```js-nolint
AbortSignal.any(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Abbruchsignalen.

### Rückgabewert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das:

- **Bereits abgebrochen** ist, wenn eines der angegebenen Abbruchsignale bereits abgebrochen ist. Der Grund des zurückgegebenen [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird bereits auf den [`reason`](/de/docs/Web/API/AbortSignal/reason) des ersten bereits abgebrochenen Abbruchsignals gesetzt.
- **Asynchron abgebrochen** wird, wenn ein Abbruchsignal im `iterable` abbricht. Der [`reason`](/de/docs/Web/API/AbortSignal/reason) wird auf den Grund des ersten abgebrochenen Abbruchsignals gesetzt.

## Beschreibung

`AbortSignal.any()` bietet keine Methode, um das zurückgegebene Signal von seinen Eingabesignalen abzumelden. Das Abbrechen des zurückgegebenen Signals bricht nicht die anderen Eingabesignale ab oder storniert deren Zeitüberschreitungen.

Intern werden das kombinierte Signal und seine Quellsignale durch schwache Referenzen verknüpft. Die kombinierten Signale werden nicht automatisch vor der Garbage Collection geschützt, während die Eingabesignale aktiv bleiben. Ein nicht-abgebrochenes kombiniertes Signal bleibt jedoch erhalten, solange es noch Quellsignale und entweder registrierte `abort`-Ereignislistener oder von einer API registrierte interne Abbruchschritte hat.

Wenn Ihr Code `abort`-Listener zu dem kombinierten Signal hinzufügt, [entfernen Sie diese, wenn die Operation abgeschlossen ist](/de/docs/Web/API/AbortSignal#removing_the_abort_event_listener), genauso wie bei jedem anderen `AbortSignal`.

## Beispiele

### Verwenden von `AbortSignal.any()`

Dieses Beispiel zeigt die Kombination eines Signals von einem [`AbortController`](/de/docs/Web/API/AbortController) und eines Timeout-Signals von [`AbortSignal.timeout`](/de/docs/Web/API/AbortSignal/timeout_static).

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
    // Canceled by the user
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
