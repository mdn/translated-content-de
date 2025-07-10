---
title: AsyncGenerator.prototype.throw()
short-title: throw()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`throw()`** Methode von {{jsxref("AsyncGenerator")}} Instanzen wirkt so, als ob ein `throw`-Statement an der aktuellen angehaltenen Position im Körper des Generators eingefügt worden wäre, was den Generator über eine Fehlerbedingung informiert und ihm ermöglicht, den Fehler zu behandeln, oder Aufräumarbeiten durchzuführen und sich selbst zu schließen.

## Syntax

```js-nolint
asyncGeneratorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die Ausnahme, die geworfen werden soll. Zu Debugging-Zwecken ist es nützlich, sie als `instanceof` {{jsxref("Error")}} zu gestalten.

### Rückgabewert

Falls der geworfene Fehler nicht abgefangen wird, wird ein {{jsxref("Promise")}} zurückgegeben, das mit der übergebenen Ausnahme abgelehnt wird.

Wird die Ausnahme von einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen und der Generator führt die Erzeugung weiterer Werte fort, wird ein {{jsxref("Promise")}} zurückgegeben, das mit einem {{jsxref("Object")}} aufgelöst wird, das zwei Eigenschaften hat:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Der Wert, der vom nächsten `yield`-Ausdruck erzeugt wird.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen Generator und einen Fehler, der mit der `throw`-Methode geworfen wird. Ein Fehler kann wie gewohnt von einem {{jsxref("Statements/try...catch", "try...catch")}}-Block abgefangen werden.

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
