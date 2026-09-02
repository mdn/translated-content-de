---
title: "AbortSignal: timeout() statische Methode"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal.timeout()`** statische Methode gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das automatisch nach einer angegebenen Zeit abbricht.

Das Signal bricht bei einem Timeout mit einem `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

Das Timeout basiert auf der aktiven Zeit und nicht auf der verstrichenen Zeit und wird effektiv angehalten, wenn der Code in einem angehaltenen Worker ausgeführt wird oder während das Dokument im Back-Forward-Cache ("[bfcache](https://web.dev/articles/bfcache)") ist.

Um mehrere Signale zu kombinieren, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, zum Beispiel, um einen Download direkt entweder mit einem Timeout-Signal oder durch Aufruf von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen.

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

Das Signal wird mit seiner [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) Eigenschaft, die auf einen `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException) gesetzt ist, bei einem Timeout abgebrochen.

## Beschreibung

`AbortSignal.timeout()` bietet keine Möglichkeit, seinen Timeout zu kündigen. Das frühzeitige Beenden der Operation oder das Abbrechen eines anderen Signals, das mit ihm über [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) kombiniert wurde, beendet den Timeout nicht.

Solange der Timeout noch aussteht, bleibt das Signal am Leben, wenn es `abort` Ereignislistener hat. [Entfernen Sie Listener](/de/docs/Web/API/AbortSignal#removing_the_abort_event_listener), die von Ihrem Code hinzugefügt wurden, wenn sie nicht mehr benötigt werden, anstatt zu warten, bis der Timeout abläuft. Das Erstellen von langen Timeouts mit Listenern kann die Speicherbereinigung verhindern, selbst nachdem der Anwendungscode seine Verweise auf das Signal gelöscht hat.

Das Unzugänglichwerden des `AbortSignal` garantiert nicht die Beendigung des Timeouts. Wenn die Ressourcen begrenzt sind und Sie Timeouts vorzeitig definitiv beenden möchten, verwenden Sie einen [`AbortController`](/de/docs/Web/API/AbortController) mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und rufen Sie [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) auf, wenn die Operation beendet ist.

## Beispiele

Unten ist ein Beispiel, das eine Fetch-Operation zeigt, die nach 5 Sekunden fehlschlägt, falls sie nicht erfolgreich ist.
Beachten Sie, dass dies auch fehlschlagen kann, wenn die Methode nicht unterstützt wird, wenn ein "Stopp"-Button im Browser gedrückt wird oder aus einem anderen Grund.

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
