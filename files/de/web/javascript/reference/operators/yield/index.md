---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **`yield`** Operator wird verwendet, um eine [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) zu pausieren und fortzusetzen.

{{InteractiveExample("JavaScript Demo: yield operator", "taller")}}

```js interactive-example
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// Expected output: 0

console.log(iterator.next().value);
// Expected output: 1
```

## Syntax

```js-nolint
yield
yield expression
```

### Parameter

- `expression` {{optional_inline}}
  - : Der Wert, der über das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) aus der Generatorfunktion ausgegeben wird. Wenn weggelassen, wird `undefined` ausgegeben.

### Rückgabewert

Gibt den optionalen Wert zurück, der an die `next()` Methode des Generators übergeben wurde, um die Ausführung fortzusetzen.

> [!NOTE]
> Das bedeutet, `next()` ist asymmetrisch: es sendet immer einen Wert an das aktuell angehaltene `yield`, gibt aber den Operanden des nächsten `yield` zurück. Der übergebene Wert des ersten `next()` Aufrufs kann nicht abgerufen werden, da kein aktuell angehaltenes `yield` existiert.

## Beschreibung

Das Schlüsselwort `yield` pausiert die Ausführung einer Generatorfunktion und der Wert des Ausdrucks nach dem `yield` Schlüsselwort wird an den Aufrufer des Generators zurückgegeben. Es kann als generatorbasierte Version des `return` Schlüsselworts betrachtet werden.

`yield` kann nur direkt innerhalb der Generatorfunktion verwendet werden, die es enthält. Es kann nicht innerhalb verschachtelter Funktionen verwendet werden.

Der Aufruf einer Generatorfunktion erzeugt ein {{jsxref("Generator")}} Objekt. Jedes Mal, wenn die {{jsxref("Generator/next", "next()")}} Methode des Generators aufgerufen wird, wird die Generatorausführung fortgesetzt und läuft bis zu einem der folgenden Punkte:

- Ein `yield` Ausdruck. In diesem Fall pausiert der Generator, und die `next()` Methode gibt ein [Iterator-Ergebnis](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Objekt mit zwei Eigenschaften zurück: `value` und `done`. Die Eigenschaft `value` ist der Wert des Ausdrucks nach dem `yield` Operator, und `done` ist `false`, was darauf hinweist, dass die Generatorfunktion nicht vollständig abgeschlossen ist.
- Das Ende der Generatorfunktion. In diesem Fall endet die Ausführung des Generators, und die `next()` Methode gibt ein Iterator-Ergebnisobjekt zurück, bei dem `value` {{jsxref("undefined")}} ist und `done` `true`.
- Eine {{jsxref("Statements/return", "return")}} Anweisung. In diesem Fall endet die Ausführung des Generators, und die `next()` Methode gibt ein Iterator-Ergebnisobjekt zurück, bei dem `value` der angegebene Rückgabewert ist und `done` `true`.
- Eine {{jsxref("Statements/throw", "throw")}} Anweisung. In diesem Fall wird die Ausführung des Generators vollständig gestoppt, und die `next()` Methode löst die angegebene Ausnahme aus.

Einmal auf einem `yield` Ausdruck pausiert, bleibt die Codeausführung des Generators angehalten, bis die `next()` Methode des Generators erneut aufgerufen wird. Wenn ein optionaler Wert an die `next()` Methode des Generators übergeben wird, wird dieser Wert als Rückgabewert der aktuellen `yield` Operation des Generators. Der erste `next()` Aufruf hat keine entsprechende angehaltene `yield` Operation, sodass es keine Möglichkeit gibt, das Argument des ersten `next()` Aufrufs abzurufen.

Wenn die {{jsxref("Generator/return", "return()")}} oder {{jsxref("Generator/throw", "throw()")}} Methode des Generators aufgerufen wird, wirkt dies, als ob eine {{jsxref("Statements/return", "return")}} oder {{jsxref("Statements/throw", "throw")}} Anweisung am pausierten `yield` Ausdruck ausgeführt wurde. Sie können {{jsxref("Statements/try...catch", "try...catch...finally")}} im Körper der Generatorfunktion verwenden, um diese vorzeitigen Abschlüsse zu behandeln. Wenn die `return()` oder `throw()` Methode aufgerufen wird, aber kein angehaltener `yield` Ausdruck vorhanden ist (weil `next()` noch nicht aufgerufen wurde oder weil der Generator bereits abgeschlossen ist), dann können die vorzeitigen Abschlüsse nicht behandelt werden und beenden den Generator immer.

## Beispiele

### Verwendung von yield

Der folgende Code ist die Deklaration einer Beispiel-Generatorfunktion.

```js
function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (const sale of saleList) {
    yield sale;
  }
}
```

Sobald eine Generatorfunktion definiert ist, kann ein Iterator wie folgt erstellt werden.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

Sie können auch einen Wert mit `next(value)` in den Generator senden. `step` wird als Rückgabewert des `yield` Ausdrucks ausgewertet — obwohl der an die `next()` Methode des Generators übergebene Wert beim ersten Aufruf von `next()` ignoriert wird.

```js
function* counter(value) {
  while (true) {
    const step = yield value++;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 0
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Iterator-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield*", "yield*")}}
