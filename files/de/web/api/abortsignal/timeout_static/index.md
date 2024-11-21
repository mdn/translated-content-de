---
title: "AbortSignal: timeout() statische Methode"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal.timeout()`** statische Methode gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das nach einer festgelegten Zeit automatisch abbricht.

Das Signal bricht bei einem Timeout mit einem `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException) ab oder mit `AbortError` [`DOMException`](/de/docs/Web/API/DOMException), wenn die Stopptaste des Browsers gedrückt wird (oder eine andere eingebaute „Stopp“-Operation). Dies ermöglicht es Benutzeroberflächen, Timeout-Fehler, die typischerweise eine Benachrichtigung des Benutzers erfordern, von Benutzer-abgebrochenen Operationen zu unterscheiden, die dies nicht tun.

Das Timeout basiert auf aktiver anstatt auf verstrichener Zeit und wird effektiv pausiert, wenn der Code in einem angehaltenen Worker läuft oder während das Dokument in einem Vorwärts-Rückwärts-Cache ("[bfcache](https://web.dev/articles/bfcache)") ist.

Um mehrere Signale zu kombinieren, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um beispielsweise direkt einen Download abzubrechen, entweder durch ein Timeout-Signal oder durch Aufruf von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort).

## Syntax

```js-nolint
AbortSignal.timeout(time)
```

### Parameter

- `time`
  - : Die „aktive“ Zeit in Millisekunden, bevor das zurückgegebene [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbricht. Der Wert muss im Bereich von 0 und {{jsxref("Number.MAX_SAFE_INTEGER")}} liegen.

### Rückgabewert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal).

Das Signal wird mit seiner [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) Eigenschaft auf einen `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException) beim Timeout oder auf einen `AbortError` [`DOMException`](/de/docs/Web/API/DOMException), wenn die Operation vom Benutzer ausgelöst wurde, abgebrochen.

## Beispiele

Unten ist ein Beispiel für eine Fetch-Operation, die nach 5 Sekunden abbricht, wenn sie erfolglos bleibt. Beachten Sie, dass dies auch fehlschlagen kann, wenn die Methode nicht unterstützt wird, wenn eine „Stop“-Taste des Browsers gedrückt wird oder aus einem anderen Grund.

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
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
