---
title: AsyncGenerator.prototype.throw()
short-title: throw()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`throw()`**-Methode von {{jsxref("AsyncGenerator")}}-Instanzen wirkt, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird. Dies informiert den Generator über einen Fehlerzustand und ermöglicht es ihm, den Fehler zu behandeln oder Bereinigungen durchzuführen und sich zu schließen.

## Syntax

```js-nolint
asyncGeneratorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die zu werfende Ausnahme. Zu Debugging-Zwecken ist es nützlich, sie als `instanceof` {{jsxref("Error")}} zu gestalten.

### Rückgabewert

Wenn der geworfene Fehler nicht abgefangen wird, gibt die Methode ein {{jsxref("Promise")}} zurück, das mit der übergebenen Ausnahme abgelehnt wird.

Wenn die Ausnahme durch einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortfährt, um weitere Werte zu liefern, wird ein {{jsxref("Promise")}} zurückgegeben, das mit einem {{jsxref("Object")}} aufgelöst wird, das zwei Eigenschaften enthält:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion noch weitere Werte erzeugen kann.
- `value`
  - : Der Wert, der aus dem nächsten `yield`-Ausdruck geliefert wird.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen Generator und einen Fehler, der mit der `throw`-Methode geworfen wird. Ein Fehler kann wie üblich durch einen {{jsxref("Statements/try...catch", "try...catch")}}-Block abgefangen werden.

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
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
