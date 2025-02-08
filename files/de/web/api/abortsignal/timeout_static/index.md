---
title: "AbortSignal: timeout() statische Methode"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 58163fc9e99e2ea7eb6c2b698f02343009351dd9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal.timeout()`**-statische Methode gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das nach einer angegebenen Zeit automatisch abgebrochen wird.

Das Signal bricht mit einer `TimeoutError`-[`DOMException`](/de/docs/Web/API/DOMException) nach Ablauf der Zeit ab.

Der Timeout basiert auf "aktiver" Zeit anstelle von verstrichener Zeit und wird effektiv pausiert, wenn der Code in einem angehaltenen Worker ausgeführt wird oder wenn sich das Dokument im Vor-Zurück-Cache ("[bfcache](https://web.dev/articles/bfcache)") befindet.

Um mehrere Signale zu kombinieren, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, z. B. um einen Download direkt entweder mit einem Timeout-Signal oder durch Aufrufen von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen.

## Syntax

```js-nolint
AbortSignal.timeout(time)
```

### Parameter

- `time`
  - : Die "aktive" Zeit in Millisekunden, bevor das zurückgegebene [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbricht.
    Der Wert muss im Bereich von 0 bis {{jsxref("Number.MAX_SAFE_INTEGER")}} liegen.

### Rückgabewert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal).

Das Signal bricht ab und sein [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft wird auf eine `TimeoutError`-[`DOMException`](/de/docs/Web/API/DOMException) gesetzt, wenn ein Timeout eintritt, oder auf eine `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException), wenn der Vorgang vom Benutzer ausgelöst wurde.

## Beispiele

Unten ist ein Beispiel für eine Fetch-Operation, die nach 5 Sekunden fehlschlägt, falls sie nicht erfolgreich ist.
Beachten Sie, dass dies auch fehlschlagen kann, wenn die Methode nicht unterstützt wird, wenn ein Browser-"Stop"-Button gedrückt wird oder aus einem anderen Grund.

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    // This exception is from the abort signal
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    // This exception is from the fetch itself
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc.",
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() method is not supported");
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
