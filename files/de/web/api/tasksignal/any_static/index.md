---
title: "TaskSignal: any() statische Methode"
short-title: any()
slug: Web/API/TaskSignal/any_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Prioritized Task Scheduling API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die statische Methode **`TaskSignal.any()`** nimmt eine Iteration von [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekten und gibt ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) zurück. Das zurückgegebene Task-Signal wird abgebrochen, wenn eines der Abbruchsignale abgebrochen wird.

Wenn das Task-Signal abgebrochen wird, wird seine [`reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft auf den Grund des ersten Signals gesetzt, das abgebrochen wurde.

## Syntax

```js-nolint
TaskSignal.any(signals)
TaskSignal.any(signals, init)
```

### Parameter

- `signals`
  - : Eine [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Abbruchsignalen.
- `init` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `priority` {{optional_inline}}
      - : Eine der folgenden:
        - Ein [priority](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities)-String, der einer von `user-blocking`, `user-visible` und `background` ist.
        - Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal).

### Rückgabewert

Eine `TaskSignal`-Instanz. Diese wird abgebrochen, wenn das erste Signal in `signals` abgebrochen wird. Wenn dies geschieht:

- Seine [`reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft wird auf den Grund des Signals gesetzt, das dieses Signal zum Abbruch veranlasst hat.

- Seine [`priority`](/de/docs/Web/API/TaskSignal/priority)-Eigenschaft wird durch den `priority`-Parameter bestimmt:
  - Wenn der `priority`-Parameter ein String war, wird er der Wert des Strings sein.
  - Wenn der `priority`-Parameter ein `TaskSignal` war, wird er der Wert der [`priority`](/de/docs/Web/API/TaskSignal/priority) dieses Signals sein.

## Beispiele

### Verwendung von `TaskSignal.any()`

Dieses Beispiel demonstriert die Kombination eines Signals aus einem [`TaskController`](/de/docs/Web/API/TaskController) und eines Timeout-Signals von [`TaskSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static).

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new TaskController({
  priority: "user-visible",
});

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// Timeout after 5 minutes
const timeoutSignal = TaskSignal.timeout(1_000 * 60 * 5);

// This signal will abort when either the user clicks the cancel button or 5 minutes is up whichever is sooner
const combinedSignal = TaskSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // Stop the fetch when any of the
    signal: combinedSignal,
  });
  const body = await res.blob();
  // Do something with downloaded content
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

## Siehe auch

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
