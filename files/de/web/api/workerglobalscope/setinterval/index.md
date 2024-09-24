---
title: "WorkerGlobalScope: setInterval()-Methode"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`setInterval()`**-Methode der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ruft wiederholt eine Funktion auf oder führt einen Code-Snippet aus, mit einer festen zeitlichen Verzögerung zwischen jedem Aufruf.

Diese Methode gibt eine Intervall-ID zurück, die das Intervall eindeutig identifiziert, sodass Sie es später mit einem Aufruf von [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) entfernen können.

Diese Methode ist auch in Fensterkontexten verfügbar: Für eine detaillierte Beschreibung von `setInterval()`, siehe die Seite [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval).

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
  - : Eine optionale Syntax erlaubt es Ihnen, einen String anstelle einer Funktion einzuschließen, der kompiliert und alle `delay` Millisekunden ausgeführt wird.
    Diese Syntax wird _nicht empfohlen_, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (Tausendstelsekunden), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern soll. Standardmäßig 0, wenn nicht angegeben.
    Siehe [Verzögerungseinschränkungen](/de/docs/Web/API/Window/setInterval#delay_restrictions) für Details zum zulässigen Bereich von `delay`-Werten.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Die zurückgegebene `intervalID` ist ein numerischer, nicht null Wert, der den durch den Aufruf von `setInterval()` erstellten Timer identifiziert; Dieser Wert kann an [`clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval) übergeben werden, um das Intervall zu canceln.

Es kann hilfreich sein, sich dessen bewusst zu sein, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout) technisch austauschbar verwendet werden können.
Aus Gründen der Klarheit sollten Sie jedoch versuchen, sie immer zuzuordnen, um Verwirrungen bei der Wartung Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay`-Argument wird in einen signierten 32-Bit-Ganzzahlwert konvertiert.
> Dies begrenzt `delay` effektiv auf 2147483647 ms, ungefähr 24,8 Tage, da es als signierte Ganzzahl im IDL spezifiziert ist.

## Beispiele

Siehe [`setInterval()`](/de/docs/Web/API/Window/setInterval) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das das Übergeben von Argumenten an den Callback in `core-js` erlaubt](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
