---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **`yield`** Operator wird verwendet, um eine [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) anzuhalten und wieder aufzunehmen.

{{InteractiveExample("JavaScript Demo: Expressions - yield", "taller")}}

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
  - : Der Wert, der von der Generatorfunktion über [das Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) ausgegeben wird. Falls weggelassen, wird `undefined` ausgegeben.

### Rückgabewert

Gibt den optionalen Wert zurück, der durch die `next()`-Methode des Generators übergeben wurde, um dessen Ausführung fortzusetzen.

> [!NOTE]
> Das bedeutet, dass `next()` asymmetrisch ist: Es sendet immer einen Wert an das aktuell angehaltene `yield`, gibt aber den Operanden des nächsten `yield` zurück. Das Argument, das dem ersten Aufruf von `next()` übergeben wird, kann nicht abgerufen werden, da kein aktuell angehaltenes `yield` vorhanden ist.

## Beschreibung

Das Schlüsselwort `yield` pausiert die Ausführung der Generatorfunktion, und der Wert des Ausdrucks nach dem Schlüsselwort `yield` wird an den Aufrufer des Generators zurückgegeben. Es kann als generatorbasierte Version des Schlüsselworts `return` betrachtet werden.

`yield` kann nur direkt innerhalb der Generatorfunktion verwendet werden, die es enthält. Es kann nicht innerhalb verschachtelter Funktionen verwendet werden.

Der Aufruf einer Generatorfunktion erstellt ein {{jsxref("Generator")}}-Objekt. Jedes Mal, wenn die {{jsxref("Generator/next", "next()")}}-Methode des Generators aufgerufen wird, wird die Ausführung des Generators fortgesetzt, und er läuft weiter, bis er auf einen der folgenden Punkte stößt:

- Einen `yield`-Ausdruck. In diesem Fall pausiert der Generator, und die `next()`-Methode gibt ein [Iterator-Resultat](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurück, ein Objekt mit zwei Eigenschaften: `value` und `done`. Die Eigenschaft `value` ist der Wert des Ausdrucks nach dem `yield`-Operator, und `done` ist `false`, was darauf hinweist, dass die Generatorfunktion noch nicht vollständig abgeschlossen ist.
- Das Ende der Generatorfunktion. In diesem Fall beendet sich die Ausführung des Generators, und die `next()`-Methode gibt ein Iterator-Resultat zurück, bei dem `value` {{jsxref("undefined")}} ist und `done` `true` ist.
- Eine {{jsxref("Statements/return", "return")}}-Anweisung. In diesem Fall wird die Ausführung des Generators beendet, und die `next()`-Methode gibt ein Iterator-Resultat zurück, bei dem `value` der angegebene Rückgabewert ist und `done` `true` ist.
- Eine {{jsxref("Statements/throw", "throw")}}-Anweisung. In diesem Fall wird die Ausführung des Generators vollständig abgebrochen, und die `next()`-Methode löst die angegebene Ausnahme aus.

Einmal bei einem `yield`-Ausdruck pausiert, bleibt die Code-Ausführung des Generators angehalten, bis die `next()`-Methode des Generators erneut aufgerufen wird. Wenn ein optionaler Wert an die `next()`-Methode des Generators übergeben wird, wird dieser Wert zu dem Wert, der von der aktuellen `yield`-Operation des Generators zurückgegeben wird. Der erste `next()`-Aufruf hat keine entsprechende angehaltene `yield`-Operation, sodass es keine Möglichkeit gibt, das Argument des ersten `next()`-Aufrufs zu erhalten.

Wenn die {{jsxref("Generator/return", "return()")}}- oder {{jsxref("Generator/throw", "throw()")}}-Methode des Generators aufgerufen wird, verhält es sich so, als ob eine {{jsxref("Statements/return", "return")}}- oder {{jsxref("Statements/throw", "throw")}}-Anweisung an dem angehaltenen `yield`-Ausdruck ausgeführt wurde. Sie können {{jsxref("Statements/try...catch", "try...catch...finally")}} innerhalb des Generatorfunktionkörpers verwenden, um solche vorzeitigen Beendigungen zu handhaben. Wenn die `return()`- oder `throw()`-Methode aufgerufen wird, aber kein angehaltener `yield`-Ausdruck vorhanden ist (weil `next()` noch nicht aufgerufen wurde oder weil der Generator bereits abgeschlossen ist), können die vorzeitigen Beendigungen nicht behandelt werden und führen immer zum Abbruch des Generators.

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

Sobald eine Generatorfunktion definiert ist, kann sie durch die Erstellung eines Iterators wie gezeigt verwendet werden.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

Es ist auch möglich, einen Wert mit `next(value)` in den Generator zu senden. `step` wird als Rückgabewert des `yield`-Ausdrucks ausgewertet — obwohl der Wert, der an die `next()`-Methode des Generators beim ersten Aufruf von `next()` übergeben wird, ignoriert wird.

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
- [`function*` expression](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield*", "yield*")}}
