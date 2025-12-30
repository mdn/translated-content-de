---
title: "WorkerGlobalScope: setInterval() Methode"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
l10n:
  sourceCommit: 21ed9a1338b207e8a39064583c19d9f720235235
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers("window_and_worker")}}

> [!WARNING]
> Wenn der `code` Parameter verwendet wird, führt diese Methode dessen Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injektions-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/Window/setInterval#security_considerations) in `Window.setInterval()` für weitere Informationen.

Die **`setInterval()`** Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface ruft wiederholt eine Funktion auf oder führt ein Code-Snippet aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

Sie wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie z.B. Animationen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) abbrechen.
Siehe [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) für weitere Informationen.

Bitte beachten Sie, dass, wenn Sie wünschen, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verwendet werden sollte.

## Syntax

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, param1)
setInterval(func, delay, param1, param2)
setInterval(func, delay, param1, param3, /* …, */ paramN)
```

### Parameter

- `func`
  - : Eine {{jsxref("function")}}, die alle `delay` Millisekunden ausgeführt wird.
    Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein Zeichenfolgen-Codeschnipsel, das alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion übergeben werden, wird jedoch _stark abgeraten_, aus denselben Gründen, weshalb die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt.
- `delay` {{optional_inline}}
  - : Die Verzögerungszeit zwischen den Ausführungen der angegebenen Funktion oder des Codes, in Millisekunden.
    Standardwert ist 0, wenn nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](/de/docs/Web/API/Window/setInterval#delay_restrictions) in `Window.setInterval` für Details zum zulässigen Bereich der `delay` Werte.
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die Funktion übergeben werden, die durch _func_ spezifiziert ist, sobald der Timer abläuft.

### Rückgabewert

Eine positive Ganzzahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.

Dieser Identifikator, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code` Parameter auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden, und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, Zeichenfolge oder `TrustedScript`.

## Beispiele

Siehe [`setInterval()`](/de/docs/Web/API/Window/setInterval) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
