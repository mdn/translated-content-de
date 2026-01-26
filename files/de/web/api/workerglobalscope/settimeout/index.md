---
title: "WorkerGlobalScope: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 21ed9a1338b207e8a39064583c19d9f720235235
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode seinen Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/Window/setTimeout#security_considerations) in `Window.setTimeout()` für weitere Informationen.

Die **`setTimeout()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle setzt einen Timer, der eine Funktion oder ein bestimmtes Stück Code ausführt, sobald der Timer abgelaufen ist.

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
  - : Eine {{jsxref("function")}}, die nach Ablauf des Timers ausgeführt wird.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String von beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle der Übergabe einer Funktion verwendet werden, wird jedoch _stark abgeraten_, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird, in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.

    Hinweis:
    - Der Delay hat einen Maximalwert von 2147483647 ms — größere Werte können zu einem Überlauf oder einem Wert von 0 führen.
      Siehe [Maximaler Delay-Wert](/de/docs/Web/API/Window/setTimeout#maximum_delay_value) für weitere Informationen.
    - Der tatsächliche Delay kann länger sein als eingestellt.
      Wenn Sie z. B. den `delay` auf 0 setzen, wird er im nächsten Ereigniszyklus anstatt "sofort" ausgeführt.
      Siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) für weitere Informationen.
    - Wenn der Wert keine Zahl ist, erfolgt eine implizite {{Glossary("Type_coercion", "Typumwandlung")}}, um den Wert in eine Zahl zu konvertieren.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen — siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](/de/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die der durch `func` angegebenen Funktion übergeben werden.

### Rückgabewert

Eine positive Ganzzahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z. B. ein bestimmtes Fenster oder Worker) wird die Timeout-ID nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv bleibt.
Jedoch führen separate globale Umgebungen ihre eigenen unabhängigen Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, ein String oder `TrustedScript`.

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
