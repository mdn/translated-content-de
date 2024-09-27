---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`throw()`** von {{jsxref("Generator")}}-Instanzen wirkt so, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator über eine Fehlerbedingung informiert und ihm ermöglicht, den Fehler zu behandeln oder Bereinigungen durchzuführen und sich selbst zu schließen.

## Syntax

<!-- Wir fügen normalerweise nicht das "generatorInstance"-Subjekt für Methoden hinzu. Hier ist es jedoch notwendig, weil "throw" ein Schlüsselwort ist, was andernfalls ungültige Syntax wäre. -->

```js-nolint
generatorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die Ausnahme, die ausgelöst werden soll. Aus Debugging-Zwecken ist es nützlich, sie zu einem `instanceof` {{jsxref("Error")}} zu machen.

### Rückgabewert

Wenn die ausgelöste Ausnahme durch ein [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortfährt, um weitere Werte zu liefern, wird ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgegeben:

- `done`
  - : Ein boolean-Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu produzieren.
- `value`
  - : Der Wert, der aus dem nächsten `yield`-Ausdruck resultiert.

### Ausnahmen

Wenn die ausgelöste Ausnahme nicht durch ein `try...catch` abgefangen wird, wird die an `throw()` übergebene `exception` aus der Generatorfunktion herausgeworfen.

## Beschreibung

Die `throw()`-Methode, wenn sie aufgerufen wird, kann als ob eine `throw exception;`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, aufgefasst werden, wobei `exception` die an die `throw()`-Methode übergebene Ausnahme ist. In einem typischen Ablauf wird das Aufrufen von `throw(exception)` dazu führen, dass der Generator wirft. Wenn jedoch der `yield`-Ausdruck in einem `try...catch`-Block eingeschlossen ist, kann der Fehler abgefangen werden und der Kontrollfluss kann entweder nach der Fehlerbehandlung fortgesetzt oder sanft beendet werden.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen einfachen Generator und einen Fehler, der mit der `throw`-Methode ausgelöst wird. Ein Fehler kann wie üblich durch einen {{jsxref("Statements/try...catch", "try...catch")}}-Block abgefangen werden.

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
