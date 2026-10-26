---
title: "WorkerGlobalScope: Methode setTimeout()"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> Wenn der Parameter `code` verwendet wird, führt diese Methode seinen Wert dynamisch als JavaScript aus.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) sein.
>
> Sie können dieses Risiko verringern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](/de/docs/Web/API/Window/setTimeout#security_considerations) bei `Window.setTimeout()`.

Die Methode **`setTimeout()`** der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) setzt einen Timer, der nach Ablauf der festgelegten Zeit eine Funktion oder einen angegebenen Codeabschnitt einmal ausführt.

## Syntax

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(func)
setTimeout(func, delay)
setTimeout(func, delay, param1)
setTimeout(func, delay, param1, param2)
setTimeout(func, delay, param1, param2, /* …, */ paramN)
```

### Parameter

- `func`
  - : Eine {{jsxref("Function")}}, die nach Ablauf des Timers ausgeführt wird.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge mit beliebigem Code, der kompiliert und alle `delay` Millisekunden ausgeführt wird.
    Dies kann anstelle einer Funktion übergeben werden, wird aber aus denselben Gründen, aus denen die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt, _dringend abgeraten_.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der angegebene Code ausgeführt wird.
    Wenn kein Wert angegeben wird, beträgt er standardmäßig 0.

    Hinweis:
    - Der Verzögerungswert darf höchstens 2147483647 ms betragen. Die Angabe größerer Werte kann zu einem Überlauf oder dazu führen, dass der Wert 0 verwendet wird.
      Weitere Informationen finden Sie unter [Maximaler Verzögerungswert](/de/docs/Web/API/Window/setTimeout#maximum_delay_value).
    - Die tatsächliche Verzögerung kann länger sein als angegeben.
      Wenn `delay` beispielsweise auf 0 gesetzt wird, erfolgt die Ausführung im nächsten Ereigniszyklus und nicht „sofort“.
      Weitere Informationen finden Sie unter [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified).
    - Wenn der Wert keine Zahl ist, wird er stillschweigend durch implizite {{Glossary("Type_coercion", "Typumwandlung")}} in eine Zahl umgewandelt.
      Dies kann zu unerwarteten Ergebnissen führen. Ein Beispiel finden Sie unter [Nicht numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](/de/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers).

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch `func` angegebene Funktion weitergegeben werden.

### Rückgabewert

Eine positive Ganzzahl (üblicherweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Dieser Bezeichner, häufig als „Timeout-ID“ bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Workers) wird die Timeout-ID garantiert nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv ist.
Getrennte globale Umgebungen verwalten jedoch jeweils eigene, voneinander unabhängige Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter `code` auf eine Zeichenfolge gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Der Fehler wird auch ausgelöst, wenn der erste Parameter keinem der unterstützten Typen entspricht: einer Funktion, einer Zeichenfolge oder `TrustedScript`.

## Beschreibung

Ausführliche Beschreibungen finden Sie unter [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## Beispiele

Beispiele finden Sie unter [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `setTimeout` in `core-js`, mit dem Argumente an die Callback-Funktion übergeben werden können](https://core-js.io/docs/features/web-standards/settimeout-setinterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
