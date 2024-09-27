---
title: "AbortSignal: throwIfAborted() Methode"
short-title: throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`throwIfAborted()`** Methode wirft den Abbruch-`reason` des Signals, wenn das Signal abgebrochen wurde; andernfalls tut sie nichts.

Eine API, die das Abbrechen unterstützen muss, kann ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt akzeptieren und `throwIfAborted()` verwenden, um zu testen und auszulösen, wenn das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis signalisiert wird.

Diese Methode kann auch verwendet werden, um Operationen an bestimmten Stellen im Code abzubrechen, anstatt sie an Funktionen zu übergeben, die ein Signal entgegennehmen.

## Syntax

```js-nolint
throwIfAborted()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Die folgenden Beispiele stammen aus der Spezifikation.

### Abbrechen einer Abfrageoperation

Dieses Beispiel zeigt, wie Sie `throwIfAborted()` verwenden können, um eine Abfrageoperation abzubrechen.

Betrachten Sie eine asynchrone `waitForCondition()`-Funktion, die mit einer anderen asynchronen Funktion `func`, einem Zielwert `targetValue` und einem `AbortSignal` aufgerufen wird.
Die Methode vergleicht das Ergebnis von `func` mit `targetValue` in einer Schleife und gibt zurück, wenn sie übereinstimmen.

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

Bei jeder Iteration der Schleife verwenden wir `throwIfAborted()`, um den `reason` des Signals zu werfen, wenn die Operation abgebrochen wurde (und ansonsten nichts zu tun).
Wenn das Signal abgebrochen wird, führt dies dazu, dass das `waitForCondition()`-Versprechen abgelehnt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
