---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`throw()`** von {{jsxref("Generator")}} Instanzen wirkt, als ob eine `throw`-Anweisung im Körper des Generators an der aktuellen angehaltenen Stelle eingefügt wird. Dies informiert den Generator über einen Fehlerzustand und ermöglicht es ihm, den Fehler zu behandeln oder aufzuräumen und sich zu schließen.

## Syntax

<!-- Wir fügen normalerweise das "generatorInstance" Subjekt für Methoden nicht hinzu. Aber hier ist es notwendig, weil "throw" ein Schlüsselwort ist, sonst wäre es ungültige Syntax. -->

```js-nolint
generatorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die zu werfende Ausnahme. Für Debugging-Zwecke ist es nützlich, sie zu einem `instanceof` {{jsxref("Error")}} zu machen.

### Rückgabewert

Wenn die geworfene Ausnahme durch einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortgesetzt wird, um weitere Werte zu liefern, wird ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgegeben:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu produzieren.
- `value`
  - : Der Wert, der aus dem nächsten `yield` Ausdruck abgeleitet wird.

### Ausnahmen

Wenn die geworfene Ausnahme nicht von einem `try...catch` abgefangen wird, wird die an `throw()` übergebene `exception` aus der Generatorfunktion geworfen.

## Beschreibung

Die `throw()` Methode bewirkt, wenn sie aufgerufen wird, dass eine `throw exception;` Anweisung im Körper des Generators an der aktuellen angehaltenen Stelle eingefügt wird, wobei `exception` die an die `throw()` Methode übergebene Ausnahme ist. Daher führt ein typischer Ablauf, wenn `throw(exception)` aufgerufen wird, dazu, dass der Generator auslöst. Wenn der `yield` Ausdruck jedoch in einem `try...catch` Block eingeschlossen ist, kann der Fehler abgefangen werden und der Kontrollfluss kann entweder nach der Fehlerbehandlung fortgesetzt oder ordnungsgemäß beendet werden.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen einfachen Generator und einen Fehler, der unter Verwendung der `throw` Methode geworfen wird. Ein Fehler kann wie üblich von einem {{jsxref("Statements/try...catch", "try...catch")}} Block abgefangen werden.

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
