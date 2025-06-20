---
title: Generator.prototype.throw()
short-title: throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`throw()`** Methode von {{jsxref("Generator")}} Instanzen wirkt so, als ob eine `throw` Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wäre. Dies informiert den Generator über einen Fehlerzustand und ermöglicht es ihm, den Fehler zu behandeln oder Aufräumarbeiten durchzuführen und sich selbst zu schließen.

## Syntax

<!-- Wir fügen normalerweise nicht das Subjekt "generatorInstance" für Methoden hinzu. Es ist jedoch hier notwendig, da "throw" ein Schlüsselwort ist und es sonst ungültige Syntax wäre. -->

```js-nolint
generatorInstance.throw(exception)
```

### Parameter

- `exception`
  - : Die Ausnahme, die geworfen werden soll. Zu Debugging-Zwecken ist es nützlich, sie zu einem `instanceof` {{jsxref("Error")}} zu machen.

### Rückgabewert

Wenn die geworfene Ausnahme durch ein [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) abgefangen wird und der Generator fortfährt, um weitere Werte zu liefern, wird ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgegeben:

- `done`
  - : Ein boolean Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn die Generatorfunktion in der Lage ist, weitere Werte zu produzieren.
- `value`
  - : Der Wert, der aus dem nächsten `yield` Ausdruck geliefert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Generator bereits läuft.

Wenn die `exception` nicht durch ein `try...catch` innerhalb der Generatorfunktion abgefangen wird, wird sie auch an den Aufrufer von `throw()` weitergegeben.

## Beschreibung

Die `throw()` Methode, wenn sie aufgerufen wird, kann als ob ein `throw exception;` Anweisung im Korpus des Generators an der aktuellen angehaltenen Position eingefügt ist, wo `exception` die an die `throw()` Methode übergebene Ausnahme ist. Daher wird im typischen Ablauf der Aufruf von `throw(exception)` dazu führen, dass der Generator eine Ausnahme auslöst. Wenn der `yield` Ausdruck jedoch in einem `try...catch` Block eingeschlossen ist, kann der Fehler abgefangen werden und der Kontrollfluss kann entweder nach der Fehlerbehandlung fortgesetzt oder kontrolliert beendet werden.

## Beispiele

### Verwendung von throw()

Das folgende Beispiel zeigt einen Generator und einen Fehler, der mit der `throw` Methode ausgelöst wird. Ein Fehler kann wie üblich durch einen {{jsxref("Statements/try...catch", "try...catch")}} Block abgefangen werden.

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
