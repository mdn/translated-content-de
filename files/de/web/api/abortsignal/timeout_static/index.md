---
title: "AbortSignal: timeout() statische Methode"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 9ffa9c1e2757231b3796522e8f55bd5e0eda635e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal.timeout()`** statische Methode gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das nach einer bestimmten Zeit automatisch abbricht.

Das Signal bricht bei einem Timeout mit einem `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException) ab oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der Browser-Stop-Button gedrückt wird (oder eine andere eingebaute "Stop"-Operation).
Dies ermöglicht es Benutzeroberflächen, Timeout-Fehler, die typischerweise eine Benachrichtigung des Benutzers erfordern, von durch den Benutzer ausgelösten Abbrüchen zu unterscheiden, die nicht erfordern.

Das Timeout basiert auf der aktiven anstatt der vergangenen Zeit und wird effektiv pausiert, wenn der Code in einem unterbrochenen Worker läuft oder während das Dokument in einem Vorwärts-Rückwärts-Cache ("[bfcache](https://web.dev/articles/bfcache)") ist.

Um mehrere Signale zu kombinieren, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, beispielsweise um einen Download direkt entweder mit einem Timeout-Signal abzubrechen oder indem Sie [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen.

## Syntax

```js-nolint
AbortSignal.timeout(time)
```

### Parameter

- `time`
  - : Die "aktive" Zeit in Millisekunden, bevor das zurückgegebene [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbricht.
    Der Wert muss im Bereich zwischen 0 und {{jsxref("Number.MAX_SAFE_INTEGER")}} liegen.

### Rückgabewert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal).

Das Signal wird mit seiner [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) Eigenschaft abgebrochen, die bei einem Timeout auf einen `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException) gesetzt ist, oder auf einen `AbortError` [`DOMException`](/de/docs/Web/API/DOMException), wenn die Operation vom Benutzer ausgelöst wurde.

## Beispiele

Unten ist ein einfaches Beispiel zu sehen, das eine `fetch`-Operation zeigt, die abbricht, wenn sie nach 5 Sekunden nicht erfolgreich ist.
Beachten Sie, dass dies auch fehlschlagen kann, wenn die Methode nicht unterstützt wird, wenn ein Browser "Stop"-Button gedrückt wird oder aus einem anderen Grund.

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
