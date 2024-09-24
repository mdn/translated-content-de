---
title: "TaskSignal: any() statische Methode"
short-title: any()
slug: Web/API/TaskSignal/any_static
l10n:
  sourceCommit: 9bad86bae21d5a6b7e2118482badfb69889c86f5
---

{{APIRef("Prioritized Task Scheduling API")}}{{SeeCompatTable}}

Die statische Methode **`TaskSignal.any()`** nimmt ein iterierbares Objekt von {{domxref("AbortSignal")}}-Objekten und gibt ein {{domxref("TaskSignal")}} zurück. Das zurückgegebene Task-Signal wird abgebrochen, wenn eines der Abbruchsignale abgebrochen wird.

Wenn das Task-Signal abgebrochen wird, wird seine {{domxref("AbortSignal.reason", "reason")}}-Eigenschaft auf den Grund des ersten abgebrochenen Signals gesetzt.

## Syntax

```js-nolint
TaskSignal.any(signals)
TaskSignal.any(signals, init)
```

### Parameter

- `signals`
  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt (wie ein {{jsxref("Array")}}) von Abbruchsignalen.
- `init` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `priority` {{optional_inline}}
      - : Einer der folgenden Werte:
        - Ein String, der entweder `user-blocking`, `user-visible` oder `background` ist.
        - Ein {{domxref("TaskSignal")}}.

### Rückgabewert

Eine `TaskSignal`-Instanz. Diese wird abgebrochen, wenn das erste in `signals` übergebene Signal abgebrochen wird. Wenn dies geschieht:

- Seine {{domxref("AbortSignal.reason", "reason")}}-Eigenschaft wird auf den Grund des Signals gesetzt, das das Abbrechen verursacht hat.

- Seine {{domxref("TaskSignal.priority", "priority")}}-Eigenschaft wird durch den `priority`-Parameter bestimmt:

  - Wenn der `priority`-Parameter ein String war, wird dieser als Wert verwendet.
  - Wenn der `priority`-Parameter ein `TaskSignal` war, wird der Wert der `priority` dieses Signals verwendet.

## Beispiele

### Verwendung von `TaskSignal.any()`

Dieses Beispiel demonstriert die Kombination eines Signals von einem {{domxref("TaskController")}} und eines Timeout-Signals von {{domxref("AbortSignal/timeout_static", "TaskSignal.timeout()")}}.

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new TaskController({
  priority: "user-visible",
});

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// Timeout nach 5 Minuten
const timeoutSignal = TaskSignal.timeout(1_000 * 60 * 5);

// Dieses Signal wird abgebrochen, wenn entweder der Benutzer den Abbrechen-Button klickt oder 5 Minuten um sind, je nachdem, was zuerst passiert
const combinedSignal = TaskSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // Beenden Sie den Fetch, wenn eines der
    signal: combinedSignal,
  });
  const body = await res.blob();
  // Machen Sie etwas mit dem heruntergeladenen Inhalt
  // ...
} catch (e) {
  if (e.name === "AbortError") {
    // Vom Benutzer abgebrochen
  } else if (e.name === "TimeoutError") {
    // Benutzer zeigen, dass der Download abgelaufen ist
  } else {
    // Anderer Fehler, z.B. Netzwerkfehler
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AbortSignal/any_static", "AbortSignal.any()")}}
