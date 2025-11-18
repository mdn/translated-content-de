---
title: "WorkerGlobalScope: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`setTimeout()`** Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interfaces setzt einen Timer, der eine Funktion oder ein bestimmtes Stück Code einmal ausführt, nachdem der Timer abgelaufen ist.

## Syntax

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```

### Parameter

- `functionRef`
  - : Eine {{jsxref("function")}}, die nach Ablauf des Timers ausgeführt wird.
- `code`
  - : Eine alternative Syntax, die es Ihnen ermöglicht, einen String anstelle einer Funktion anzugeben,
    der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird **nicht
    empfohlen**, aus den gleichen Gründen, die die Verwendung von
    {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor
    die angegebene Funktion oder der Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0
    verwendet, was bedeutet, "sofort" oder genauer gesagt im nächsten Ereigniszyklus zu reagieren.

    Beachten Sie, dass die tatsächliche Verzögerung in beiden Fällen länger als vorgesehen sein kann; siehe [Gründe für Verzögerungen länger als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified).

    Beachten Sie auch, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("type_coercion", "Typkonvertierung")}} stillschweigend auf den Wert angewendet wird, um ihn in eine Zahl zu konvertieren — was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-Zahl Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](/de/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch `functionRef` angegebene Funktion übergeben werden.

### Rückgabewert

Die `setTimeout()` Methode gibt eine positive ganze Zahl zurück (normalerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert. Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z.B. ein spezifisches Fenster oder Worker) wird die Timeout-ID garantiert nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv bleibt. Separate globale Umgebungen führen jedoch ihre eigenen, unabhängigen Pools von Timer-IDs.

## Beschreibung

Siehe [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für detaillierte Beschreibungen.

## Beispiele

Siehe [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, das die Übergabe von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
