---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **`yield`** Operator wird verwendet, um eine [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) zu pausieren und fortzusetzen.

{{EmbedInteractiveExample("pages/js/expressions-yield.html", "taller")}}

## Syntax

```js-nolint
yield
yield expression
```

### Parameter

- `expression` {{optional_inline}}
  - : Der Wert, der aus der Generatorfunktion über [das Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) geliefert werden soll. Wenn weggelassen, wird `undefined` geliefert.

### Rückgabewert

Gibt den optionalen Wert zurück, der an die `next()` Methode des Generators übergeben wurde, um die Ausführung fortzusetzen.

> [!NOTE]
> Dies bedeutet, dass `next()` asymmetrisch ist: Es sendet immer einen Wert an das derzeit angehaltene `yield`, gibt jedoch den Operanden des nächsten `yield` zurück. Das Argument, das beim ersten Aufruf von `next()` übergeben wird, kann nicht abgerufen werden, da es kein derzeit angehaltenes `yield` gibt.

## Beschreibung

Das Schlüsselwort `yield` pausiert die Ausführung der Generatorfunktion und der Wert des Ausdrucks, der dem `yield` Schlüsselwort folgt, wird an den Aufrufer des Generators zurückgegeben. Es kann als eine auf Generatoren basierende Version des Schlüsselworts `return` gesehen werden.

`yield` kann nur direkt innerhalb der Generatorfunktion verwendet werden, die es enthält. Es kann nicht innerhalb verschachtelter Funktionen verwendet werden.

Das Aufrufen einer Generatorfunktion konstruiert ein {{jsxref("Generator")}} Objekt. Jedes Mal, wenn die {{jsxref("Generator/next", "next()")}} Methode des Generators aufgerufen wird, setzt der Generator die Ausführung fort und läuft, bis er einen der folgenden Punkte erreicht:

- Einen `yield` Ausdruck. In diesem Fall pausiert der Generator, und die `next()` Methode gibt ein [Iteratorergebnis](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Objekt mit zwei Eigenschaften zurück: `value` und `done`. Die `value` Eigenschaft ist der Wert des Ausdrucks nach dem `yield` Operator, und `done` ist `false`, was darauf hinweist, dass die Generatorfunktion nicht vollständig abgeschlossen ist.
- Das Ende der Generatorfunktion. In diesem Fall endet die Ausführung des Generators, und die `next()` Methode gibt ein Iteratorergebnisobjekt zurück, bei dem `value` {{jsxref("undefined")}} ist und `done` `true`.
- Eine {{jsxref("Statements/return", "return")}} Anweisung. In diesem Fall endet die Ausführung des Generators, und die `next()` Methode gibt ein Iteratorergebnisobjekt zurück, bei dem `value` der angegebene Rückgabewert ist und `done` `true`.
- Eine {{jsxref("Statements/throw", "throw")}} Anweisung. In diesem Fall stoppt die Ausführung des Generators vollständig, und die `next()` Methode wirft die angegebene Ausnahme.

Sobald der Generator an einem `yield` Ausdruck pausiert, bleibt die Codeausführung des Generators pausiert, bis die `next()` Methode des Generators erneut aufgerufen wird. Wenn ein optionaler Wert an die `next()` Methode des Generators übergeben wird, wird dieser Wert der von der aktuellen `yield` Operation des Generators zurückgegebene Wert. Der erste `next()` Aufruf hat keine entsprechende angehaltene `yield` Operation, daher gibt es keine Möglichkeit, das übergebene Argument des ersten `next()` Aufrufs zu erhalten.

Wenn die {{jsxref("Generator/return", "return()")}} oder {{jsxref("Generator/throw", "throw()")}} Methode des Generators aufgerufen wird, verhält es sich so, als ob eine {{jsxref("Statements/return", "return")}} oder {{jsxref("Statements/throw", "throw")}} Anweisung an dem pausierten `yield` Ausdruck ausgeführt wurde. Sie können {{jsxref("Statements/try...catch", "try...catch...finally")}} im Körper der Generatorfunktion verwenden, um mit diesen vorzeitigen Abschlüssen umzugehen. Wenn die `return()` oder `throw()` Methode aufgerufen wird, es aber keinen angehaltenen `yield` Ausdruck gibt (weil `next()` noch nicht aufgerufen wurde oder der Generator bereits abgeschlossen ist), können die vorzeitigen Abschlüsse nicht behandelt werden und beenden den Generator immer.

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

Sobald eine Generatorfunktion definiert ist, kann sie verwendet werden, indem ein Iterator konstruiert wird, wie gezeigt.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

Sie können auch einen Wert mit `next(value)` in den Generator senden. `step` wird als Rückgabewert des `yield` Ausdrucks ausgewertet — obwohl der Wert, der der `next()` Methode des Generators beim ersten Aufruf von `next()` übergeben wird, ignoriert wird.

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
