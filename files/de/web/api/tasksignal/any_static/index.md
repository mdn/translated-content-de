---
title: "TaskSignal: any() statische Methode"
short-title: any()
slug: Web/API/TaskSignal/any_static
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`TaskSignal.any()`** statische Methode nimmt ein iterierbares Objekt von [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekten und gibt ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) zurück. Das zurückgegebene Task-Signal wird abgebrochen, wenn eines der Abbruchs-Signale abgebrochen wird.

Wenn das Task-Signal abgebrochen wird, wird die [`reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft auf den Grund des ersten abgebrochenen Signals gesetzt.

## Syntax

```js-nolint
TaskSignal.any(signals)
TaskSignal.any(signals, init)
```

### Parameter

- `signals`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Abbruchs-Signalen.
- `init` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `priority` {{optional_inline}}
      - : Eine der folgenden:
        - Ein [Prioritäten-](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) String, der einer von `user-blocking`, `user-visible` und `background` ist.
        - Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal).

### Rückgabewert

Eine `TaskSignal`-Instanz. Sie wird abgebrochen, wenn das erste in `signals` übergebene Signal abgebrochen wird. Wenn dies passiert:

- Ihre [`reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft wird auf den Grund des Signals gesetzt, das dieses Signal zum Abbrechen gebracht hat.

- Ihre [`priority`](/de/docs/Web/API/TaskSignal/priority)-Eigenschaft wird durch den `priority`-Parameter bestimmt:
  - Wenn der `priority`-Parameter ein String war, wird dieser als Wert verwendet.
  - Wenn der `priority`-Parameter ein `TaskSignal` war, wird der Wert der `priority`-Eigenschaft dieses Signals verwendet.

## Beispiele

### Verwendung von `TaskSignal.any()`

Dieses Beispiel zeigt die Kombination eines Signals von einem [`TaskController`](/de/docs/Web/API/TaskController) und eines Timeout-Signals von [`TaskSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static).

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

## Siehe auch

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
