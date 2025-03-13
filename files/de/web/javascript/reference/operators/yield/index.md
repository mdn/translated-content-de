---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **`yield`** Operator wird verwendet, um eine [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) anzuhalten und fortzusetzen.

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
  - : Der Wert, der von der Generatorfunktion über [das Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) geliefert wird. Falls weggelassen, wird `undefined` geliefert.

### Rückgabewert

Gibt den optionalen Wert zurück, der an die `next()` Methode des Generators übergeben wird, um seine Ausführung fortzusetzen.

> [!NOTE]
> Das bedeutet, `next()` ist asymmetrisch: Es sendet immer einen Wert an das aktuell angehaltene `yield`, gibt jedoch den Operanden des nächsten `yield` zurück. Das Argument, das an den ersten `next()` Aufruf übergeben wird, kann nicht abgerufen werden, da es kein derzeit angehaltenes `yield` gibt.

## Beschreibung

Das `yield` Schlüsselwort hält die Ausführung der Generatorfunktion an und der Wert des Ausdrucks nach dem `yield` Schlüsselwort wird an den Aufrufer des Generators zurückgegeben. Es kann als generatorbasierte Version des `return` Schlüsselworts betrachtet werden.

`yield` kann nur direkt innerhalb der Generatorfunktion verwendet werden, die es enthält. Es kann nicht innerhalb verschachtelter Funktionen verwendet werden.

Der Aufruf einer Generatorfunktion erstellt ein {{jsxref("Generator")}} Objekt. Jedes Mal, wenn die {{jsxref("Generator/next", "next()")}} Methode des Generators aufgerufen wird, wird die Ausführung des Generators fortgesetzt und läuft, bis eine der folgenden Bedingungen eintritt:

- Ein `yield` Ausdruck. In diesem Fall pausiert der Generator, und die `next()`-Methode gibt ein [Iterator-Ergebnis](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Objekt mit zwei Eigenschaften zurück: `value` und `done`. Die `value` Eigenschaft ist der Wert des Ausdrucks nach dem `yield` Operator, und `done` ist `false`, was darauf hinweist, dass die Generatorfunktion nicht vollständig abgeschlossen ist.
- Das Ende der Generatorfunktion. In diesem Fall endet die Ausführung des Generators, und die `next()` Methode gibt ein Iterator-Ergebnisobjekt zurück, bei dem der `value` {{jsxref("undefined")}} ist und `done` `true` ist.
- Eine {{jsxref("Statements/return", "return")}} Anweisung. In diesem Fall endet die Ausführung des Generators, und die `next()` Methode gibt ein Iterator-Ergebnisobjekt zurück, bei dem der `value` der angegebene Rückgabewert ist und `done` `true` ist.
- Eine {{jsxref("Statements/throw", "throw")}} Anweisung. In diesem Fall wird die Ausführung des Generators vollständig angehalten, und die `next()` Methode wirft die angegebene Ausnahme.

Sobald eine `yield` Expression pausiert wird, bleibt die Code-Ausführung des Generators angehalten, bis die `next()`-Methode des Generators erneut aufgerufen wird. Wenn ein optionaler Wert an die `next()` Methode des Generators übergeben wird, wird dieser Wert der Wert, der von der aktuellen `yield` Operation des Generators zurückgegeben wird. Der erste `next()` Aufruf hat keine entsprechende angehaltene `yield` Operation, daher gibt es keine Möglichkeit, das an den ersten `next()` Aufruf übergebene Argument zu erhalten.

Wenn die {{jsxref("Generator/return", "return()")}} oder {{jsxref("Generator/throw", "throw()")}} Methode des Generators aufgerufen wird, verhält es sich, als ob eine {{jsxref("Statements/return", "return")}} oder {{jsxref("Statements/throw", "throw")}} Anweisung an der angehaltenen `yield` Expression ausgeführt wurde. Sie können im Funktionskörper des Generators {{jsxref("Statements/try...catch", "try...catch...finally")}} verwenden, um mit diesen frühen Abschlüssen umzugehen. Wenn die `return()` oder `throw()` Methode aufgerufen wird, aber keine angehaltene `yield` Expression vorhanden ist (weil `next()` noch nicht aufgerufen wurde oder weil der Generator bereits abgeschlossen ist), können die frühen Abschlüsse nicht behandelt werden und beenden immer den Generator.

## Beispiele

### Verwendung von yield

Der folgende Code ist die Deklaration einer Beispiel-Generatorfunktion.

```js
function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

Sobald eine Generatorfunktion definiert ist, kann sie durch Erstellen eines Iterators verwendet werden, wie gezeigt.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

Sie können auch einen Wert mit `next(value)` in den Generator senden. `step` wird als Rückgabewert des `yield` Ausdrucks ausgewertet — der an die `next()` Methode des Generators übergebene Wert beim ersten Aufruf von `next()` wird jedoch ignoriert.

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
