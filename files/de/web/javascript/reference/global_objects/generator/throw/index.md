---
title: Generator.prototype.throw()
short-title: throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`throw()`**-Methode von {{jsxref("Generator")}}-Instanzen wirkt so, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird. Dies informiert den Generator über einen Fehlerzustand und ermöglicht es ihm, den Fehler zu behandeln, Bereinigungen durchzuführen oder sich selbst zu schließen.

## Syntax

<!-- Wir fügen normalerweise nicht das "generatorInstance"-Subjekt für Methoden hinzu. Hier ist es jedoch notwendig, da "throw" ein Schlüsselwort ist und es sonst eine ungültige Syntax wäre. -->

```js-nolint
generatorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die zu werfende Ausnahme. Für Debugging-Zwecke ist es nützlich, sie zu einem `instanceof` {{jsxref("Error")}} zu machen.

### Rückgabewert

Wenn die geworfene Ausnahme von einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortfährt, weitere Werte zu liefern, wird ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgegeben:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Der aus dem nächsten `yield`-Ausdruck gelieferte Wert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn der Generator bereits läuft.

Wenn die `exception` nicht innerhalb der Generatorfunktion von einem `try...catch` abgefangen wird, wird sie auch an den Aufrufer von `throw()` geworfen.

## Beschreibung

Die `throw()`-Methode kann, wenn sie aufgerufen wird, als ob eine `throw exception;`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, betrachtet werden, wobei `exception` die an die `throw()`-Methode übergebene Ausnahme ist. Daher wird der Generator bei einem typischen Ablauf durch das Aufrufen von `throw(exception)` werfen. Wenn der `yield`-Ausdruck jedoch in einem `try...catch`-Block eingeschlossen ist, kann der Fehler abgefangen und der Kontrollfluss entweder nach der Fehlerbehandlung fortgesetzt oder geordnet beendet werden.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen Generator und einen Fehler, der mit der `throw`-Methode geworfen wird. Ein Fehler kann wie üblich von einem {{jsxref("Statements/try...catch", "try...catch")}}-Block abgefangen werden.

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
