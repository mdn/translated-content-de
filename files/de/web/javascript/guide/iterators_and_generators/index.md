---
title: Iteratoren und Generatoren
slug: Web/JavaScript/Guide/Iterators_and_generators
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Resource_management")}}

Iteratoren und Generatoren bringen das Konzept der Iteration direkt in den Kern der Sprache und bieten einen Mechanismus zur Anpassung des Verhaltens von {{jsxref("Statements/for...of", "for...of")}} Schleifen.

Details finden Sie auch unter:

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/function*", "function*")}} und {{jsxref("Generator")}}
- {{jsxref("Operators/yield", "yield")}} und {{jsxref("Operators/yield*", "yield*")}}

## Iteratoren

In JavaScript ist ein **Iterator** ein Objekt, das eine Sequenz definiert und möglicherweise einen Rückgabewert bei seiner Beendigung.

Genauer gesagt ist ein Iterator jedes Objekt, das das [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert, indem es eine `next()` Methode hat, die ein Objekt mit zwei Eigenschaften zurückgibt:

- `value`
  - : Der nächste Wert in der Iterationssequenz.
- `done`
  - : Dies ist `true`, wenn der letzte Wert in der Sequenz bereits verbraucht wurde. Wenn `value` neben `done` vorhanden ist, ist dies der Rückgabewert des Iterators.

Einmal erstellt, kann ein Iterator-Objekt ausdrücklich durch wiederholtes Aufrufen von `next()` iteriert werden. Das Iterieren über einen Iterator wird als Konsumation des Iterators bezeichnet, da dies im Allgemeinen nur einmal möglich ist. Nachdem ein abschließender Wert geliefert wurde, sollten zusätzliche Aufrufe von `next()` weiterhin `{done: true}` zurückgeben.

Der gebräuchlichste Iterator in JavaScript ist der Array-Iterator, der jeden Wert im zugehörigen Array der Reihe nach zurückgibt.

Obwohl es einfach ist, sich vorzustellen, dass alle Iteratoren als Arrays ausgedrückt werden könnten, trifft dies nicht zu. Arrays müssen vollständig zugewiesen werden, aber Iteratoren werden nur nach Bedarf konsumiert. Aus diesem Grund können Iteratoren Sequenzen unbegrenzter Größe ausdrücken, wie z.B. den Bereich der ganzen Zahlen zwischen `0` und {{jsxref("Infinity")}}.

Hier ist ein Beispiel, das genau das tun kann. Es ermöglicht die Erstellung eines Bereichs-Iterators, der eine Sequenz von ganzzahligen Werten von `start` (einschließlich) bis `end` (ausschließlich) definiert, die `step` auseinander angeordnet sind. Sein endgültiger Rückgabewert ist die Größe der erzeugten Sequenz, verfolgt durch die Variable `iterationCount`.

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}
```

Die Verwendung des Iterators sieht dann so aus:

```js
const iter = makeRangeIterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
```

> [!NOTE]
> Es ist nicht möglich, reflexiv zu wissen, ob ein bestimmtes Objekt ein Iterator ist. Wenn Sie dies feststellen müssen, verwenden Sie [Iterables](#iterables).

## Generatorfunktionen

Während benutzerdefinierte Iteratoren ein nützliches Werkzeug sind, erfordert ihre Erstellung sorgfältige Programmierung aufgrund der Notwendigkeit, ihren internen Zustand explizit zu verwalten. **Generatorfunktionen** bieten eine leistungsstarke Alternative: Sie ermöglichen die Definition eines iterativen Algorithmus durch das Schreiben einer einzigen Funktion, deren Ausführung nicht kontinuierlich ist. Generatorfunktionen werden mit der {{jsxref("Statements/function*", "function*")}} Syntax geschrieben.

Wenn sie aufgerufen werden, führen Generatorfunktionen ihren Code nicht sofort aus. Stattdessen geben sie einen speziellen Iteratortyp zurück, der als **Generator** bezeichnet wird. Wenn ein Wert durch Aufrufen der `next` Methode des Generators konsumiert wird, führt die Generatorfunktion den Code bis zum Erreichen des `yield` Schlüsselworts aus.

Die Funktion kann so oft wie gewünscht aufgerufen werden und gibt jedes Mal einen neuen Generator zurück. Jeder Generator kann nur einmal iteriert werden.

Wir können nun das obige Beispiel anpassen. Das Verhalten dieses Codes ist identisch, aber die Implementierung ist viel einfacher zu schreiben und zu lesen.

```js
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
```

## Iterables

Ein Objekt ist **iterierbar**, wenn es sein Iterationsverhalten definiert, wie z.B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}} Konstruktion durchlaufen werden. Einige eingebaute Typen, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, haben ein Standard-Iterationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht tun.

Um **iterierbar** zu sein, muss ein Objekt die `[Symbol.iterator]()` Methode implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) über eine Eigenschaft mit einem {{jsxref("Symbol.iterator")}} Schlüssel verfügen muss.

Es kann möglich sein, mehrmals oder nur einmal über ein iterierbares Objekt zu iterieren. Es liegt in der Verantwortung des Programmierers zu wissen, welcher Fall vorliegt.

Iterables, die nur einmal iteriert werden können (wie Generatoren), geben in der Regel `this` von ihrer `[Symbol.iterator]()` Methode zurück, während Iterables, die mehrmals iteriert werden können, bei jedem Aufruf von `[Symbol.iterator]()` einen neuen Iterator zurückgeben müssen.

```js
function* makeIterator() {
  yield 1;
  yield 2;
}

const iter = makeIterator();

for (const itItem of iter) {
  console.log(itItem);
}

console.log(iter[Symbol.iterator]() === iter); // true

// This example shows us generator(iterator) is an iterable object,
// which has the [Symbol.iterator]() method return the `iter` (itself),
// and consequently, the `iter` object can iterate only _once_.

// If we change the [Symbol.iterator]() method of `iter` to a function/generator
// which returns a new iterator/generator object, `iter`
// can iterate many times

iter[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
```

### Benutzerdefinierte Iterables

Sie können Ihre eigenen Iterables folgendermaßen erstellen:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

Benutzerdefinierte Iterables können wie gewohnt in `for...of` Schleifen oder mit der Spread-Syntax verwendet werden.

```js
for (const value of myIterable) {
  console.log(value);
}
// 1
// 2
// 3

[...myIterable]; // [1, 2, 3]
```

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} und {{jsxref("Set")}} sind alle eingebaute Iterables, da ihre Prototyp-Objekte alle eine {{jsxref("Symbol.iterator")}}-Methode haben.

### Syntaxen, die Iterables erwarten

Einige Anweisungen und Ausdrücke erwarten Iterables. Zum Beispiel: die {{jsxref("Statements/for...of", "for...of")}} Schleifen, {{jsxref("Operators/Spread_syntax", "Spread-Syntax", "", 1)}}, {{jsxref("Operators/yield*", "yield*")}} und {{jsxref("Operators/Destructuring", "Destrukturierung", "", 1)}} Syntax.

```js
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"];
// ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next();
// { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
a;
// "a"
```

## Erweiterte Generatoren

Generatoren berechnen ihre `yield`-Werte _auf Abruf_, was es ihnen ermöglicht, effizient Sequenzen darzustellen, die teuer zu berechnen sind (oder sogar unendliche Sequenzen, wie oben gezeigt).

Die {{jsxref("Generator/next", "next()")}} Methode akzeptiert auch einen Wert, der verwendet werden kann, um den internen Zustand des Generators zu ändern. Ein an `next()` übergebener Wert wird von `yield` empfangen.

> [!NOTE]
> Ein Wert, der an den _ersten_ Aufruf von `next()` übergeben wird, wird immer ignoriert.

Hier ist der Fibonacci-Generator, der `next(x)` verwendet, um die Sequenz neu zu starten:

```js
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    const reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
```

Sie können einen Generator zwingen, eine Ausnahme auszulösen, indem Sie seine {{jsxref("Generator/throw", "throw()")}} Methode aufrufen und den Ausnahmewert übergeben, den er werfen soll. Diese Ausnahme wird aus dem aktuellen angehaltenen Kontext des Generators ausgelöst, als ob das derzeit angehaltene `yield` stattdessen eine `throw value`-Anweisung wäre.

Wenn die Ausnahme innerhalb des Generators nicht abgefangen wird, wird sie durch den Aufruf von `throw()` nach oben propagiert, und nachfolgende Aufrufe von `next()` führen dazu, dass die `done` Eigenschaft `true` ist.

Generatoren haben eine {{jsxref("Generator/return", "return()")}} Methode, die den angegebenen Wert zurückgibt und den Generator selbst abschließt.

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Resource_management")}}
