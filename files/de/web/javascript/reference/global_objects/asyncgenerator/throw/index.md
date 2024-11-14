---
title: AsyncGenerator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die **`throw()`**-Methode von {{jsxref("AsyncGenerator")}}-Instanzen wirkt so, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator über eine Fehlerbedingung informiert und ihm ermöglicht, den Fehler zu behandeln oder Bereinigungen durchzuführen und sich zu schließen.

## Syntax

```js-nolint
asyncGeneratorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die auszulösende Ausnahme. Zu Debugging-Zwecken ist es nützlich, wenn sie ein `instanceof` {{jsxref("Error")}} ist.

### Rückgabewert

Wenn der ausgelöste Fehler nicht abgefangen wird, gibt er ein {{jsxref("Promise")}} zurück, das mit der übergebenen Ausnahme abgelehnt wird.

Wenn die Ausnahme durch einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortfährt, um weitere Werte zu erzeugen, wird ein {{jsxref("Promise")}} zurückgegeben, das mit einem {{jsxref("Object")}} aufgelöst wird, das zwei Eigenschaften enthält:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Der Wert, der vom nächsten `yield`-Ausdruck erzeugt wird.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen Generator und einen Fehler, der mit der `throw`-Methode ausgelöst wird. Ein Fehler kann wie üblich durch einen {{jsxref("Statements/try...catch", "try...catch")}}-Block abgefangen werden.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    try {
      await sleep(500);
      yield 42;
    } catch (e) {
      console.error(e);
    }
  }
}

const asyncGen = createAsyncGenerator();
asyncGen.next(1).then((res) => console.log(res)); // { value: 42, done: false }
asyncGen
  .throw(new Error("Something went wrong")) // Error: Something went wrong
  .then((res) => console.log(res)); // { value: 42, done: false }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterators und generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
