---
title: "WorkerGlobalScope: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`setTimeout()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces setzt einen Timer, der eine Funktion oder einen angegebenen Code einmal ausführt, wenn der Timer abläuft.

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
  - : Eine alternative Syntax, die es Ihnen ermöglicht, einen String anstelle einer Funktion zu übergeben, der beim Ablaufen des Timers kompiliert und ausgeführt wird. Diese Syntax wird **nicht empfohlen**, aus den gleichen Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0 verwendet, was bedeutet, dass "sofort" ausgeführt werden soll, oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass die tatsächliche Verzögerung in beiden Fällen länger als beabsichtigt sein kann; siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified).

    Beachten Sie außerdem, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("type_coercion", "Typumwandlung")}} leise auf den Wert angewendet wird, um ihn in eine Zahl umzuwandeln - was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-nummerische Verzögerungswerte werden leise in Zahlen umgewandelt](/de/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die durch `functionRef` angegebene Funktion übergeben werden.

### Rückgabewert

Der zurückgegebene `timeoutID` ist ein positiver ganzzahliger Wert, der
den durch den Aufruf von `setTimeout()` erstellten Timer identifiziert. Dieser Wert kann an [`clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout) übergeben werden, um den Timeout abzubrechen.

Es ist garantiert, dass ein `timeoutID`-Wert niemals von einem nachfolgenden Aufruf von `setTimeout()` oder `setInterval()` im selben Worker wiederverwendet wird, solange der Timer noch aktiv ist. Verschiedene Objekte verwenden jedoch getrennte ID-Pools.

## Beschreibung

Siehe [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für detaillierte Beschreibungen.

## Beispiele

Siehe [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für Beispiele.

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
