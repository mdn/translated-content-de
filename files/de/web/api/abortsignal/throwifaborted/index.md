---
title: "AbortSignal: throwIfAborted() Methode"
short-title: throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`throwIfAborted()`** Methode wirft die {{domxref("AbortSignal.reason", "Begründung")}} des Signals, wenn das Signal abgebrochen wurde; andernfalls tut sie nichts.

Eine API, die das Abbrechen unterstützen muss, kann ein {{domxref("AbortSignal")}} Objekt akzeptieren und `throwIfAborted()` verwenden, um zu testen und zu werfen, wenn das [`abort`](/de/docs/Web/API/AbortSignal/abort_event) Ereignis signalisiert wird.

Diese Methode kann auch verwendet werden, um Operationen an bestimmten Stellen im Code abzubrechen, anstatt an Funktionen zu übergeben, die ein Signal verwenden.

## Syntax

```js-nolint
throwIfAborted()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Die untenstehenden Beispiele stammen aus der Spezifikation.

### Abbrechen einer Polling-Operation

Dieses Beispiel zeigt, wie Sie `throwIfAborted()` verwenden können, um eine Polling-Operation abzubrechen.

Betrachten Sie eine asynchrone Funktion `waitForCondition()`, die mit einer weiteren asynchronen Funktion `func`, einem Zielwert `targetValue` und einem `AbortSignal` aufgerufen wird. Die Methode vergleicht das Ergebnis von `func` mit `targetValue` in einer Schleife und gibt zurück, wenn sie übereinstimmen.

```js
async function waitForCondition(func, targetValue, { signal } = {}) {
  while (true) {
    signal?.throwIfAborted();

    const result = await func();
    if (result === targetValue) {
      return;
    }
  }
}
```

Bei jeder Iteration der Schleife verwenden wir `throwIfAborted()`, um die `Begründung` des Signals zu werfen, falls die Operation abgebrochen wurde (und andernfalls nichts zu tun). Wenn das Signal abgebrochen wird, führt dies dazu, dass das `waitForCondition()`-Versprechen abgelehnt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
