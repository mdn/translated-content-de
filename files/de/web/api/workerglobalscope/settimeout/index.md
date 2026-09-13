---
title: "WorkerGlobalScope: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Attacken.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/Window/setTimeout#security_considerations) in `Window.setTimeout()` für mehr Informationen.

Die **`setTimeout()`** Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle setzt einen Timer, der eine Funktion oder angegebenen Code ausführt, sobald der Timer abläuft.

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
  - : Eine {{jsxref("Function")}}, die nach dem Ablaufen des Timers ausgeführt wird.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge von beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion verwendet werden, wird jedoch aus denselben Gründen, die {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen, _stark abgeraten_.
- `delay` {{optional_inline}}
  - : Die Zeit, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird, in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.

    Hinweis:
    - Die Verzögerung hat einen maximalen Wert von 2147483647 ms — die Angabe größerer Werte kann zu einem Überlauf oder dem Wert 0 führen.
      Siehe [maximaler Verzögerungswert](/de/docs/Web/API/Window/setTimeout#maximum_delay_value) für weitere Informationen.
    - Die tatsächliche Verzögerung kann länger sein als eingestellt.
      Zum Beispiel wird bei einem `delay` von 0 im nächsten Ereigniszyklus ausgeführt, statt "sofort".
      Siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) für weitere Informationen.
    - Wenn der Wert keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Typkonvertierung")}} stillschweigend durchgeführt, um ihn in eine Zahl zu konvertieren.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen — siehe [Nicht-zahlen Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](/de/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch `func` angegebene Funktion übergeben werden.

### Rückgabewert

Ein positiver Integer (typischerweise im Bereich von 1 bis 2,147,483,647), der den durch den Aufruf erstellten Timer eindeutig identifiziert.
Diese Kennung, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z.B. ein bestimmtes Fenster oder Worker) wird die Timeout-ID garantiert nicht für irgendeinen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv bleibt.
Jedoch führen separate globale Umgebungen ihre eigenen unabhängigen Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf eine Zeichenfolge gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durchgesetzt werden durch einen CSP](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, Zeichenfolge oder `TrustedScript`.

## Beschreibung

Siehe [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für detaillierte Beschreibungen.

## Beispiele

Siehe [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, der das Übergeben von Argumenten an den Callback in `core-js` erlaubt](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
