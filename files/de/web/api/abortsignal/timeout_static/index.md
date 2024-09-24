---
title: "AbortSignal: timeout() statische Methode"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **statische Methode `AbortSignal.timeout()`** gibt ein {{domxref("AbortSignal")}} zurück, das nach einer angegebenen Zeit automatisch abbricht.

Das Signal wird bei einem Timeout mit einem `TimeoutError`-{{domxref("DOMException")}} abgebrochen oder mit einem `AbortError`-{{domxref("DOMException")}}, wenn die Stopp-Schaltfläche des Browsers gedrückt wird (oder eine andere eingebaute "Stopp"-Operation). Dies ermöglicht es Benutzeroberflächen, Zeitüberschreitungsfehler, die typischerweise eine Benachrichtigung des Benutzers erfordern, von benutzerinduzierter Unterbrechung zu unterscheiden, die dies nicht tun.

Der Timeout basiert auf der aktiven und nicht der abgelaufenen Zeit und wird effektiv pausiert, wenn der Code in einem angehaltenen Worker ausgeführt wird oder während das Dokument in einem Back-Forward-Cache ("[bfcache](https://web.dev/articles/bfcache)") ist.

Um mehrere Signale zu kombinieren, können Sie {{domxref("AbortSignal/any_static", "AbortSignal.any()")}} verwenden, z. B. um einen Download direkt abzubrechen, entweder mit einem Timeout-Signal oder durch Aufruf von {{domxref("AbortController.abort()")}}.

## Syntax

```js-nolint
AbortSignal.timeout(time)
```

### Parameter

- `time`
  - : Die "aktive" Zeit in Millisekunden, bevor das zurückgegebene {{domxref("AbortSignal")}} abbricht.

### Rückgabewert

Ein {{domxref("AbortSignal")}}.

Das Signal wird mit seiner {{domxref("AbortSignal.reason")}}-Eigenschaft auf einen `TimeoutError`-{{domxref("DOMException")}} bei Timeout oder einen `AbortError`-{{domxref("DOMException")}} gesetzt, wenn der Vorgang vom Benutzer ausgelöst wurde.

## Beispiele

Unten ist ein einfaches Beispiel für eine Fetch-Operation, die nach 5 Sekunden fehlschlägt, wenn sie nicht erfolgreich ist.
Beachten Sie, dass dies auch fehlschlagen kann, wenn die Methode nicht unterstützt wird, wenn eine Browser-"Stopp"-Taste gedrückt wird, oder aus einem anderen Grund.

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: Es dauerte mehr als 5 Sekunden, um das Ergebnis zu erhalten!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch durch Benutzeraktion abgebrochen (Browser-Stopp-Taste, Tab schließen usw.).",
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() Methode wird nicht unterstützt");
  } else {
    // Ein Netzwerkfehler oder ein anderes Problem.
    console.error(`Fehler: Typ: ${err.name}, Nachricht: ${err.message}`);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
