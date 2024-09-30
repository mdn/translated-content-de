---
title: "AbortSignal: timeout() statische Methode"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 9ffa9c1e2757231b3796522e8f55bd5e0eda635e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die statische Methode **`AbortSignal.timeout()`** gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das nach einer angegebenen Zeit automatisch abbricht.

Das Signal bricht mit einem `TimeoutError`-[`DOMException`](/de/docs/Web/API/DOMException) bei einem Timeout ab oder mit einer `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException) aufgrund des Drückens einer Stopptaste im Browser (oder einer anderen integrierten "Stopp"-Operation). Dies ermöglicht es Benutzeroberflächen, Timeout-Fehler, die typischerweise eine Benutzerbenachrichtigung erfordern, von nutzerbedingten Abbrüchen, die dies nicht erfordern, zu unterscheiden.

Der Timeout basiert auf aktiver statt auf vergangener Zeit und wird effektiv pausiert, wenn der Code in einem angehaltenen Worker ausgeführt wird oder während das Dokument im Rückwärts-Vorwärts-Cache ("[bfcache](https://web.dev/articles/bfcache)") ist.

Um mehrere Signale zu kombinieren, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um beispielsweise einen Download direkt mit einem Timeout-Signal oder durch Aufruf von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen.

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

Das Signal wird mit seiner [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)-Eigenschaft auf einen `TimeoutError`-[`DOMException`](/de/docs/Web/API/DOMException) bei Timeout gesetzt oder auf einen `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException), falls die Operation durch den Benutzer ausgelöst wurde.

## Beispiele

Unten sehen Sie ein einfaches Beispiel, das eine Fetch-Operation zeigt, die abbricht, wenn sie nach 5 Sekunden nicht erfolgreich ist. Beachten Sie, dass dies auch fehlschlagen kann, wenn die Methode nicht unterstützt wird, wenn eine Stopptaste im Browser gedrückt wird oder aus einem anderen Grund.

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
