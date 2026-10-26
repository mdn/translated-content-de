---
title: "WorkerGlobalScope: Methode setInterval()"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers("window_and_worker")}}

> [!WARNING]
> Wenn der Parameter `code` verwendet wird, führt diese Methode dessen Wert dynamisch als JavaScript aus.
> Solche APIs werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie statt Zeichenfolgen immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](/de/docs/Web/API/Window/setInterval#security_considerations) zu `Window.setInterval()`.

Die Methode **`setInterval()`** der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle ruft eine Funktion wiederholt auf oder führt wiederholt einen Codeausschnitt aus. Zwischen den Ausführungen liegt jeweils eine feste Zeitspanne.

Sie wird häufig verwendet, um einen zeitlichen Abstand zwischen wiederholten Funktionsaufrufen festzulegen, beispielsweise bei Animationen.
Mit [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) können Sie die wiederholte Ausführung beenden.
Weitere Informationen finden Sie unter [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval).

Wenn Ihre Funktion nach der angegebenen Verzögerung nur _einmal_ aufgerufen werden soll, verwenden Sie stattdessen [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout).

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
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge mit beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion verwendet werden, wird aber aus denselben Sicherheitsgründen wie die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} _dringend abgeraten_.
- `delay` {{optional_inline}}
  - : Die Zeitspanne zwischen den Ausführungen der angegebenen Funktion oder des Codes in Millisekunden.
    Wenn kein Wert angegeben wird, ist der Standardwert 0.
    Einzelheiten zum zulässigen Wertebereich von `delay` finden Sie unter [Beschränkungen für Verzögerungen](/de/docs/Web/API/Window/setInterval#delay_restrictions) zu `Window.setInterval`.
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die nach Ablauf des Timers an die durch _func_ angegebene Funktion übergeben werden.

### Rückgabewert

Eine positive Ganzzahl (üblicherweise zwischen 1 und 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.

Dieser Bezeichner, häufig als „Intervall-ID“ bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu beenden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter `code` eine Zeichenfolge enthält, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Die Ausnahme wird auch ausgelöst, wenn der erste Parameter keinem der unterstützten Typen entspricht: einer Funktion, einer Zeichenfolge oder `TrustedScript`.

## Beispiele

Beispiele finden Sie unter [`setInterval()`](/de/docs/Web/API/Window/setInterval).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `setInterval` in `core-js`, das die Übergabe von Argumenten an die Callback-Funktion ermöglicht](https://core-js.io/docs/features/web-standards/settimeout-setinterval)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
