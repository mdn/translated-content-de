---
title: "TaskSignal: any() statische Methode"
short-title: any()
slug: Web/API/TaskSignal/any_static
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`TaskSignal.any()`** statische Methode nimmt ein iterierbares Objekt von [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekten und gibt ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) zurück. Das zurückgegebene Task-Signal wird abgebrochen, wenn eines der Abbruchsignale abgebrochen wird.

Wenn das Task-Signal abgebrochen wird, wird seine [`reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft auf den Grund des ersten Signal, das abgebrochen wurde, gesetzt.

## Syntax

```js-nolint
TaskSignal.any(signals)
TaskSignal.any(signals, init)
```

### Parameter

- `signals`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Abbruchsignalen.
- `init` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `priority` {{optional_inline}}
      - : Eine der folgenden:
        - Ein [Prioritätsstring](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities), der einer von `user-blocking`, `user-visible` und `background` ist.
        - Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal).

### Rückgabewert

Eine `TaskSignal`-Instanz. Diese wird abgebrochen, wenn das erste Signal, das in `signals` übergeben wird, abgebrochen wird. Wenn dies passiert:

- Seine [`reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft wird auf den Grund des Signals gesetzt, das dieses Signal zum Abbruch gebracht hat.

- Seine [`priority`](/de/docs/Web/API/TaskSignal/priority)-Eigenschaft wird durch den `priority`-Parameter bestimmt:
  - Wenn der `priority`-Parameter ein String war, wird er der Wert des Strings sein.
  - Wenn der `priority`-Parameter ein `TaskSignal` war, wird er der Wert der [`priority`](/de/docs/Web/API/TaskSignal/priority)-Eigenschaft dieses Signals sein.

## Beschreibung

Die Überlegungen zur Bereinigung von Abbruchsignalen, die für [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) beschrieben wurden, gelten auch für `TaskSignal.any()`. Es gibt keine Methode, um das zurückgegebene Signal von seinen Eingangssignalen abzumelden, und das Abbrechen des Signals führt nicht zum Abbruch der anderen Eingangssignale oder zur Stornierung ihrer Zeitlimits.

Wenn `init.priority` ein Signal mit einer veränderbaren Priorität ist, bleibt das zurückgegebene Signal auch am Leben, solange es eine Prioritätsquelle hat und entweder `prioritychange`-Listener oder interne Prioritätsänderungsschritte, die von einer API registriert wurden, hat. Entfernen Sie Listener, die Ihr Code hinzugefügt hat, wenn sie nicht mehr benötigt werden. Das Abbrechen des Signals entfernt nicht die `prioritychange`-Listener und verhindert nicht, dass es Prioritätsänderungen folgt.

## Beispiele

### Verwenden von `TaskSignal.any()`

Dieses Beispiel zeigt die Kombination eines Signals von einem [`TaskController`](/de/docs/Web/API/TaskController) mit einem Timeout-Signal von [`TaskSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static).

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
