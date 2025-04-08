---
title: "WorkerGlobalScope: setInterval() Methode"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
l10n:
  sourceCommit: 29d6bb944a1c1fe42eb9957e2a6e5b4f85a2656e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`setInterval()`** Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interfaces ruft wiederholt eine Funktion auf oder führt einen Code-Schnipsel aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

Diese Methode ist auch in Fensterkontexten verfügbar: Eine detaillierte Beschreibung von `setInterval()` finden Sie auf der Seite [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval).

## Syntax

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine {{jsxref("function")}}, die alle `delay` Millisekunden ausgeführt wird. Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Eine optionale Syntax, die es Ihnen ermöglicht, einen String anstelle einer Funktion einzuschließen, der kompiliert und alle `delay` Millisekunden ausgeführt wird.
    Diese Syntax wird _nicht empfohlen_, da sie aus denselben Gründen ein Sicherheitsrisiko darstellt wie die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (Tausendstel einer Sekunde), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern soll. Standardmäßig 0, wenn nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](/de/docs/Web/API/Window/setInterval#delay_restrictions) für Details zum zulässigen Bereich der `delay`-Werte.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die von _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Die `setInterval()` Methode gibt eine positive ganze Zahl zurück (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert. Dieser Bezeichner, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Arbeiters) bleibt die Intervall-ID eindeutig und wird nicht für einen neuen Intervall-Timer wiederverwendet, solange der ursprüngliche Timer noch aktiv ist. Unterschiedliche globale Umgebungen haben jedoch ihre eigenen unabhängigen Pools von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können.
Zur Klarstellung sollten Sie jedoch versuchen, sie immer zuzuordnen, um Verwirrung bei der Pflege Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay` Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt.
> Dies begrenzt `delay` effektiv auf 2147483647 ms, also etwa 24,8 Tage, da es als signierte Ganzzahl in der IDL spezifiziert ist.

## Beispiele

Siehe [`setInterval()`](/de/docs/Web/API/Window/setInterval) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, der das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
