---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die **`throw()`**-Methode von {{jsxref("Generator")}}-Instanzen wirkt so, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt ist. Dies informiert den Generator über eine Fehlersituation und ermöglicht es ihm, den Fehler zu behandeln oder Bereinigungen durchzuführen und sich selbst zu schließen.

## Syntax

<!-- Normalerweise fügen wir für Methoden nicht das "generatorInstance"-Subjekt hinzu. Hier ist es jedoch notwendig, weil "throw" ein Schlüsselwort ist, und andernfalls wäre es ungültige Syntax. -->

```js-nolint
generatorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die Ausnahme, die geworfen werden soll. Für Debugging-Zwecke ist es nützlich, sie als `instanceof` {{jsxref("Error")}} zu machen.

### Rückgabewert

Wenn die geworfene Ausnahme von einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator weitere Werte ausgibt, wird ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgegeben:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Der Wert, der vom nächsten `yield`-Ausdruck zurückgegeben wird.

### Ausnahmen

Wenn die geworfene Ausnahme nicht von einem `try...catch` abgefangen wird, wird die an `throw()` übergebene `exception` außerhalb der Generatorfunktion geworfen.

## Beschreibung

Die `throw()`-Methode kann, wenn sie aufgerufen wird, so angesehen werden, als ob eine `throw exception;`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, wobei `exception` die an die `throw()`-Methode übergebene Ausnahme ist. In einem typischen Ablauf verursacht der Aufruf von `throw(exception)`, dass der Generator wirft. Wenn jedoch der `yield`-Ausdruck in einem `try...catch`-Block eingeschlossen ist, kann der Fehler abgefangen werden und der Kontrollfluss kann entweder nach der Fehlerbehandlung fortgesetzt oder sauber beendet werden.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen Generator und einen Fehler, der mit der `throw`-Methode geworfen wird. Ein Fehler kann wie gewohnt mit einem {{jsxref("Statements/try...catch", "try...catch")}}-Block abgefangen werden.

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error("Something went wrong"));
// "Error caught!"
// { value: 42, done: false }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/function*", "function*")}}
