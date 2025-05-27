---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{jsSidebar("Operators")}}

Der **`yield`**-Operator wird verwendet, um die Ausführung einer [Generator-Funktion](/de/docs/Web/JavaScript/Reference/Statements/function*) anzuhalten und fortzusetzen.

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
  - : Der Wert, der aus der Generator-Funktion über [das Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) geliefert werden soll. Wird er weggelassen, wird `undefined` zurückgegeben.

### Rückgabewert

Gibt den optionalen Wert zurück, der an die `next()`-Methode des Generators übergeben wird, um ihre Ausführung fortzusetzen.

> [!NOTE]
> Dies bedeutet, dass `next()` asymmetrisch ist: es sendet immer einen Wert an das aktuell angehaltene `yield`, gibt aber den Operand des nächsten `yield` zurück. Das Argument, das an den ersten `next()`-Aufruf übergeben wird, kann nicht abgerufen werden, da kein aktuell angehaltenes `yield` vorhanden ist.

## Beschreibung

Das `yield`-Schlüsselwort pausiert die Ausführung der Generator-Funktion und der Wert des Ausdrucks nach dem `yield`-Schlüsselwort wird an den Aufrufer des Generators zurückgegeben. Es kann als generatorbasierte Version des `return`-Schlüsselworts betrachtet werden.

`yield` kann nur direkt innerhalb der Generator-Funktion verwendet werden, die es enthält. Es kann nicht innerhalb geschachtelter Funktionen verwendet werden.

Der Aufruf einer Generator-Funktion erstellt ein {{jsxref("Generator")}}-Objekt. Jedes Mal, wenn die {{jsxref("Generator/next", "next()")}}-Methode des Generators aufgerufen wird, wird die Ausführung des Generators fortgesetzt, und läuft bis zu einem der folgenden Punkte:

- Ein `yield`-Ausdruck. In diesem Fall pausiert der Generator, und die `next()`-Methode gibt ein [Iterator-Ergebnis](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Objekt mit zwei Eigenschaften zurück: `value` und `done`. Die Eigenschaft `value` ist der Wert des Ausdrucks nach dem `yield`-Operator, und `done` ist `false`, was anzeigt, dass die Generator-Funktion noch nicht vollständig abgeschlossen ist.
- Das Ende der Generator-Funktion. In diesem Fall endet die Ausführung des Generators, und die `next()`-Methode gibt ein Iterator-Ergebnis-Objekt zurück, bei dem `value` {{jsxref("undefined")}} ist und `done` `true` ist.
- Eine {{jsxref("Statements/return", "return")}}-Anweisung. In diesem Fall endet die Ausführung des Generators, und die `next()`-Methode gibt ein Iterator-Ergebnis-Objekt zurück, bei dem `value` der angegebene Rückgabewert ist und `done` `true` ist.
- Eine {{jsxref("Statements/throw", "throw")}}-Anweisung. In diesem Fall wird die Ausführung des Generators vollständig gestoppt, und die `next()`-Methode wirft die angegebene Ausnahme.

Sobald auf einem `yield`-Ausdruck pausiert wurde, bleibt die Code-Ausführung des Generators angehalten, bis die `next()`-Methode des Generators erneut aufgerufen wird. Wenn ein optionaler Wert an die `next()`-Methode des Generators übergeben wird, wird dieser Wert zum zurückgegebenen Wert der aktuellen `yield`-Operation des Generators. Der erste `next()`-Aufruf hat keine entsprechende angehaltene `yield`-Operation, sodass es keine Möglichkeit gibt, das Argument zu erhalten, das an den ersten `next()`-Aufruf übergeben wird.

Wenn die {{jsxref("Generator/return", "return()")}}- oder {{jsxref("Generator/throw", "throw()")}}-Methode des Generators aufgerufen wird, wirkt es sich so aus, als ob eine {{jsxref("Statements/return", "return")}}- oder {{jsxref("Statements/throw", "throw")}}-Anweisung an dem angehaltenen `yield`-Ausdruck ausgeführt wurde. Sie können {{jsxref("Statements/try...catch", "try...catch...finally")}} innerhalb des Rumpfes der Generator-Funktion verwenden, um mit diesen frühen Abschlüssen umzugehen. Wenn die `return()`- oder `throw()`-Methode aufgerufen wird, aber kein angehaltener `yield`-Ausdruck vorhanden ist (weil `next()` noch nicht aufgerufen wurde oder weil der Generator bereits abgeschlossen ist), dann können die frühen Abschlüsse nicht behandelt werden und beenden immer den Generator.

## Beispiele

### Verwendung von yield

Der folgende Code ist die Deklaration einer Beispiel-Generator-Funktion.

```js
function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (const sale of saleList) {
    yield sale;
  }
}
```

Sobald eine Generator-Funktion definiert ist, kann sie durch Konstruktion eines Iterators verwendet werden, wie gezeigt.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

Sie können auch einen Wert mit `next(value)` in den Generator senden. `step` bewertet sich als Rückgabewert des `yield`-Ausdrucks — obwohl der Wert, der der `next()`-Methode des Generators beim ersten Aufruf von `next()` übergeben wird, ignoriert wird.

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

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield*", "yield*")}}
