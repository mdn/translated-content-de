---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **`yield`**-Operator wird verwendet, um eine [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) anzuhalten und fortzusetzen.

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
  - : Der Wert, den die Generatorfunktion über das [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) liefert. Wird er weggelassen, wird `undefined` geliefert.

### Rückgabewert

Gibt den optionalen Wert zurück, der an die `next()`-Methode des Generators übergeben wurde, um dessen Ausführung fortzusetzen.

> [!NOTE]
> Das bedeutet, dass `next()` asymmetrisch ist: Die Methode übergibt immer einen Wert an den aktuell angehaltenen `yield`-Ausdruck, gibt aber den Operanden des nächsten `yield`-Ausdrucks zurück. Das beim ersten Aufruf von `next()` übergebene Argument kann nicht abgerufen werden, da noch kein `yield`-Ausdruck angehalten ist.

## Beschreibung

Das Schlüsselwort `yield` hält die Ausführung einer Generatorfunktion an. Der Wert des Ausdrucks nach `yield` wird an den Aufrufer des Generators zurückgegeben. Man kann `yield` als eine Generatorvariante des Schlüsselworts `return` betrachten.

`yield` kann nur direkt in der Generatorfunktion verwendet werden, in der es steht. Innerhalb verschachtelter Funktionen kann es nicht verwendet werden.

Der Aufruf einer Generatorfunktion erzeugt ein {{jsxref("Generator")}}-Objekt. Bei jedem Aufruf der {{jsxref("Generator/next", "next()")}}-Methode des Generators wird dessen Ausführung fortgesetzt, bis einer der folgenden Fälle eintritt:

- Ein `yield`-Ausdruck wird erreicht. In diesem Fall wird der Generator angehalten und die `next()`-Methode gibt ein [Iteratorergebnisobjekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) mit den beiden Eigenschaften `value` und `done` zurück. `value` enthält den Wert des Ausdrucks nach dem `yield`-Operator. `done` ist `false` und zeigt damit an, dass die Generatorfunktion noch nicht vollständig abgeschlossen ist.
- Das Ende der Generatorfunktion wird erreicht. In diesem Fall endet die Ausführung des Generators und die `next()`-Methode gibt ein Iteratorergebnisobjekt zurück, dessen `value` {{jsxref("undefined")}} und dessen `done` `true` ist.
- Eine {{jsxref("Statements/return", "return")}}-Anweisung wird erreicht. In diesem Fall endet die Ausführung des Generators und die `next()`-Methode gibt ein Iteratorergebnisobjekt zurück, dessen `value` der angegebene Rückgabewert und dessen `done` `true` ist.
- Eine {{jsxref("Statements/throw", "throw")}}-Anweisung wird erreicht. In diesem Fall endet die Ausführung des Generators vollständig und die `next()`-Methode löst die angegebene Ausnahme aus.

Wenn der Generator an einem `yield`-Ausdruck angehalten wurde, bleibt die Ausführung seines Codes unterbrochen, bis seine `next()`-Methode erneut aufgerufen wird. Wird der `next()`-Methode des Generators ein optionaler Wert übergeben, wird dieser zum Rückgabewert der aktuellen `yield`-Operation des Generators. Beim ersten Aufruf von `next()` gibt es noch keine angehaltene `yield`-Operation. Daher kann das Argument dieses ersten Aufrufs nicht abgerufen werden.

Wenn die {{jsxref("Generator/return", "return()")}}- oder die {{jsxref("Generator/throw", "throw()")}}-Methode des Generators aufgerufen wird, verhält sich dies so, als würde am angehaltenen `yield`-Ausdruck eine {{jsxref("Statements/return", "return")}}- beziehungsweise eine {{jsxref("Statements/throw", "throw")}}-Anweisung ausgeführt. Sie können {{jsxref("Statements/try...catch", "try...catch...finally")}} im Funktionskörper des Generators verwenden, um diese vorzeitigen Abschlüsse zu behandeln. Wird `return()` oder `throw()` aufgerufen, obwohl kein `yield`-Ausdruck angehalten ist – weil `next()` noch nicht aufgerufen wurde oder der Generator bereits abgeschlossen ist –, können die vorzeitigen Abschlüsse nicht behandelt werden und beenden den Generator immer.

## Beispiele

### yield verwenden

Der folgende Code deklariert eine beispielhafte Generatorfunktion.

```js
function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (const sale of saleList) {
    yield sale;
  }
}
```

Nachdem eine Generatorfunktion definiert wurde, kann sie verwendet werden, indem wie gezeigt ein Iterator erzeugt wird.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

Sie können mit `next(value)` auch einen Wert an den Generator übergeben. `step` nimmt den Rückgabewert des `yield`-Ausdrucks an. Der Wert, der beim ersten Aufruf von `next()` an die `next()`-Methode des Generators übergeben wird, wird allerdings ignoriert.

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
- [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield*", "yield*")}}
