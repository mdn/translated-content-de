---
title: "WorkerGlobalScope: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 29d6bb944a1c1fe42eb9957e2a6e5b4f85a2656e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`setTimeout()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces setzt einen Timer, der eine Funktion oder ein spezifiziertes Stück Code ausführt, sobald der Timer abläuft.

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
  - : Eine {{jsxref("function")}}, die ausgeführt wird, nachdem der Timer abgelaufen ist.
- `code`
  - : Eine alternative Syntax, die es Ihnen ermöglicht, einen String anstelle einer Funktion einzubinden, der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird **nicht empfohlen**, aus denselben Gründen, die das Verwenden von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die spezifizierte Funktion oder der Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0 verwendet, was bedeutet, "sofort" ausführen, oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass in beiden Fällen die tatsächliche Verzögerung länger als beabsichtigt sein kann; siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified).

    Beachten Sie auch, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("type_coercion", "Typumwandlung")}} stillschweigend durchgeführt wird, um den Wert in eine Zahl zu konvertieren — was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](/de/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die durch `functionRef` festgelegte Funktion übergeben werden.

### Rückgabewert

Die `setTimeout()`-Methode gibt eine positive ganze Zahl (typischerweise im Bereich von 1 bis 2.147.483.647) zurück, die den durch den Aufruf erstellten Timer eindeutig identifiziert. Diese Kennung, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Arbeiters) wird die Timeout-ID nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv ist. Jedoch verwalten separate globale Umgebungen ihre eigenen unabhängigen Pools von Timer-IDs.

## Beschreibung

Schauen Sie sich [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für ausführliche Beschreibungen an.

## Beispiele

Sehen Sie [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, der das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
