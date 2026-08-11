---
title: "WorkerGlobalScope: setInterval()-Methode"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers("window_and_worker")}}

> [!WARNING]
> Wenn der Parameter `code` verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/Window/setInterval#security_considerations) in `Window.setInterval()` für weitere Informationen.

Die **`setInterval()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces ruft wiederholt eine Funktion auf oder führt einen Code-Schnipsel mit einer festen Zeitverzögerung zwischen jedem Aufruf aus.

Sie wird häufig verwendet, um eine Verzögerung für wiederholt ausgeführte Funktionen einzustellen, wie z.B. Animationen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) abbrechen.
Siehe [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) für weitere Informationen.

Beachten Sie, dass Sie, wenn Sie wünschen, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verwenden sollten.

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
  - : Eine {{jsxref("Function")}}, die alle `delay` Millisekunden ausgeführt wird.
    Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String von beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle der Umwandlung einer Funktion verwendet werden, wird jedoch _dringend abgeraten_, aus den gleichen Gründen, aus denen auch die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt.
- `delay` {{optional_inline}}
  - : Die Verzögerungszeit zwischen Ausführungen der angegebenen Funktion oder des Codes in Millisekunden.
    Standardwert ist 0, wenn nicht angegeben.
    Details zu den zulässigen Werten von `delay` finden Sie unter [Delay-Beschränkungen](/de/docs/Web/API/Window/setInterval#delay_restrictions) in `Window.setInterval`.
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die von _func_ angegebene Funktion weitergereicht werden, sobald der Timer abläuft.

### Rückgabewert

Ein positiver Integer (normalerweise im Bereich von 1 bis 2.147.483.647), der den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.

Dieser Bezeichner, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf einen String gesetzt ist, während [Vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Wird ebenfalls ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, ein String oder `TrustedScript`.

## Beispiele

Siehe [`setInterval()`](/de/docs/Web/API/Window/setInterval) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das das Übergeben von Argumenten an den Rückruf in `core-js` erlaubt](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
