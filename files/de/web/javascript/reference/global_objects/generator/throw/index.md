---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: af8c003be438157fb59397347ca766bf997c7934
---

{{JSRef}}

Die **`throw()`** Methode von {{jsxref("Generator")}} Instanzen wirkt als ob eine `throw` Anweisung an der aktuellen suspendierten Position im Körper des Generators eingefügt wird. Dies informiert den Generator über einen Fehlerzustand und ermöglicht es ihm, den Fehler zu behandeln, oder aufzuräumen und sich selbst zu schließen.

## Syntax

<!-- Normalerweise fügen wir nicht das "generatorInstance" Subjekt für Methoden hinzu. Allerdings ist es hier notwendig, weil "throw" ein Schlüsselwort ist, und es sonst ungültige Syntax wäre. -->

```js-nolint
generatorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die auszulösende Ausnahme. Zu Debugging-Zwecken ist es nützlich, wenn es ein `instanceof` {{jsxref("Error")}} ist.

### Rückgabewert

Wenn die ausgelöste Ausnahme von einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortfährt, um mehr Werte zu liefern, wird ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgegeben:

- `done`
  - : Ein boolean Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Der von dem nächsten `yield` Ausdruck gelieferte Wert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Generator bereits läuft.

Wenn die `exception` innerhalb der Generatorfunktion nicht von einem `try...catch` abgefangen wird, wird sie auch an den Aufrufer von `throw()` weitergegeben.

## Beschreibung

Die `throw()` Methode kann bei Aufruf so gesehen werden, als ob eine `throw exception;` Anweisung an der aktuellen suspendierten Position im Körper des Generators eingefügt wird, wobei `exception` die an die `throw()` Methode übergebene Ausnahme ist. Daher führt ein typischer Ablauf beim Aufruf von `throw(exception)` dazu, dass der Generator wirft. Wenn jedoch der `yield` Ausdruck in einem `try...catch` Block eingeschlossen ist, kann der Fehler abgefangen werden und der Kontrollfluss kann entweder nach der Fehlerbehandlung fortfahren oder ordentlich beendet werden.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen Generator und einen Fehler, der mit der `throw` Methode ausgelöst wird. Ein Fehler kann wie üblich von einem {{jsxref("Statements/try...catch", "try...catch")}} Block abgefangen werden.

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
