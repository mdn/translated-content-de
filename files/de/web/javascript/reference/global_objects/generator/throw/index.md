---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`throw()`**-Methode von {{jsxref("Generator")}} Instanzen wirkt, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator über einen Fehlerzustand informiert und es ihm ermöglicht, den Fehler zu handhaben oder eine Bereinigung durchzuführen und sich selbst zu schließen.

## Syntax

<!-- Normalerweise fügen wir nicht das "generatorInstance"-Subjekt für Methoden hinzu. Es ist jedoch hier notwendig, da "throw" ein Schlüsselwort ist, andernfalls wäre es ungültige Syntax. -->

```js-nolint
generatorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die Ausnahme, die ausgelöst werden soll. Für Debugging-Zwecke ist es nützlich, sie zu einem `instanceof` {{jsxref("Error")}} zu machen.

### Rückgabewert

Wenn die geworfene Ausnahme von einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) eingefangen wird und der Generator fortfährt, mehr Werte zu liefern, wird er ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgeben:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, mehr Werte zu produzieren.
- `value`
  - : Der Wert, der von dem nächsten `yield`-Ausdruck geliefert wird.

### Ausnahmen

Wenn die geworfene Ausnahme nicht von einem `try...catch` eingefangen wird, wird die `exception`, die an `throw()` übergeben wird, aus der Generatorfunktion herausgeworfen.

## Beschreibung

Die `throw()`-Methode kann, wenn sie aufgerufen wird, so gesehen werden, als ob eine `throw exception;`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, wobei `exception` die an die `throw()`-Methode übergebene Ausnahme ist. Folglich wird in einem typischen Ablauf beim Aufruf von `throw(exception)` der Generator dazu gebracht, die Ausnahme zu werfen. Wenn der `yield`-Ausdruck jedoch in einem `try...catch`-Block eingeschlossen ist, kann der Fehler aufgefangen werden und der Kontrollfluss kann entweder nach der Fehlerbehandlung fortgesetzt oder geordnet beendet werden.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen einfachen Generator und einen Fehler, der mit der `throw`-Methode geworfen wird. Ein Fehler kann wie üblich mit einem {{jsxref("Statements/try...catch", "try...catch")}}-Block aufgefangen werden.

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
