---
title: AsyncGenerator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`throw()`** Methode von Instanzen des {{jsxref("AsyncGenerator")}} agiert so, als ob an der aktuellen angehaltenen Position im Körper des Generators eine `throw`-Anweisung eingefügt wird. Dies informiert den Generator über eine Fehlersituation und ermöglicht es ihm, den Fehler zu behandeln oder eine Bereinigung durchzuführen und sich selbst zu schließen.

## Syntax

```js-nolint
asyncGeneratorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die zu werfende Ausnahme. Aus Debugging-Zwecken ist es nützlich, sie als `instanceof` von {{jsxref("Error")}} zu gestalten.

### Rückgabewert

Wenn der geworfene Fehler nicht abgefangen wird, wird ein {{jsxref("Promise")}} zurückgegeben, welches mit der übergebenen Ausnahme ablehnt.

Wenn die Ausnahme durch ein [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortfährt, um weitere Werte zu liefern, wird ein {{jsxref("Promise")}} zurückgegeben, das mit einem {{jsxref("Object")}} mit zwei Eigenschaften aufgelöst wird:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Der Wert, der aus dem nächsten `yield` Ausdruck gewonnen wird.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen einfachen Generator und einen Fehler, der mit der `throw` Methode geworfen wird. Ein Fehler kann wie gewohnt von einem {{jsxref("Statements/try...catch", "try...catch")}} Block abgefangen werden.

```js
// Eine asynchrone Aufgabe. Tun Sie so, als würde es in der Praxis
// etwas Nützlicheres tun.
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
- [Iterators and generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Anleitung