---
title: Iteratoren und Generatoren
slug: Web/JavaScript/Guide/Iterators_and_generators
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}

Iteratoren und Generatoren bringen das Konzept der Iteration direkt in die Kernsprache und bieten einen Mechanismus zur Anpassung des Verhaltens von {{jsxref("Statements/for...of", "for...of")}} Schleifen.

Siehe auch:

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/function*", "function*")}} und {{jsxref("Generator")}}
- {{jsxref("Operators/yield", "yield")}} und {{jsxref("Operators/yield*", "yield*")}}

## Iteratoren

In JavaScript ist ein **Iterator** ein Objekt, das eine Sequenz definiert und möglicherweise einen Rückgabewert nach seinem Abschluss.

Genauer gesagt, ist ein Iterator jedes Objekt, das das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert, indem es eine `next()` Methode hat, die ein Objekt mit zwei Eigenschaften zurückgibt:

- `value`
  - : Der nächste Wert in der Iterationssequenz.
- `done`
  - : Dies ist `true`, wenn der letzte Wert der Sequenz bereits verbraucht wurde. Wenn `value` neben `done` vorhanden ist, ist es der Rückgabewert des Iterators.

Einmal erstellt, kann ein Iterator-Objekt explizit durch wiederholtes Aufrufen von `next()` iteriert werden. Über einen Iterator zu iterieren heißt, den Iterator zu konsumieren, weil dies im Allgemeinen nur einmal möglich ist. Nachdem ein abschließender Wert geliefert wurde, sollten zusätzliche Aufrufe von `next()` weiterhin `{done: true}` zurückgeben.

Der häufigste Iterator in JavaScript ist der Array-Iterator, der nacheinander jeden Wert im zugehörigen Array zurückgibt.

Während man leicht annehmen könnte, dass alle Iteratoren als Arrays ausgedrückt werden könnten, ist dies nicht der Fall. Arrays müssen vollständig zugewiesen werden, aber Iteratoren werden nur nach Bedarf konsumiert. Aus diesem Grund können Iteratoren Sequenzen unbegrenzter Größe ausdrücken, wie z.B. die Reihe von ganzen Zahlen zwischen `0` und {{jsxref("Infinity")}}.

Hier ist ein Beispiel, das genau das tun kann. Es ermöglicht die Erstellung eines Bereichs-Iterators, der eine Sequenz von Ganzzahlen von `start` (einschließlich) bis `end` (ausschließlich) mit Abständen von `step` definiert. Sein endgültiger Rückgabewert ist die Größe der erstellten Sequenz, verfolgt durch die Variable `iterationCount`.

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
> Es ist nicht möglich, auf reflektive Weise zu wissen, ob ein bestimmtes Objekt ein Iterator ist. Wenn Sie dies tun müssen, verwenden Sie [Iterables](#iterables).

## Generatorfunktionen

Während benutzerdefinierte Iteratoren ein nützliches Werkzeug sind, erfordert ihre Erstellung sorgfältiges Programmieren, da ihr interner Zustand explizit gehalten werden muss. **Generatorfunktionen** bieten eine leistungsstarke Alternative: Sie ermöglichen es, einen iterativen Algorithmus durch Schreiben einer einzigen Funktion zu definieren, deren Ausführung nicht kontinuierlich ist. Generatorfunktionen werden mit der {{jsxref("Statements/function*", "function*")}} Syntax geschrieben.

Beim Aufruf führen Generatorfunktionen ihren Code zunächst nicht aus. Stattdessen geben sie eine spezielle Art von Iterator zurück, einen **Generator**. Wenn ein Wert durch Aufrufen der `next` Methode des Generators konsumiert wird, führt die Generatorfunktion aus, bis sie auf das `yield` Schlüsselwort trifft.

Die Funktion kann beliebig oft aufgerufen werden und gibt jedes Mal einen neuen Generator zurück. Jeder Generator kann nur einmal iteriert werden.

Wir können jetzt das obige Beispiel anpassen. Das Verhalten dieses Codes ist identisch, aber die Implementierung ist viel einfacher zu schreiben und zu lesen.

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

Ein Objekt ist **iterierbar**, wenn es sein Iterationsverhalten definiert, z.B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}} Schleife durchlaufen werden. Einige eingebaute Typen, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, haben ein Standard-Iterationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht tun.

Um **iterierbar** zu sein, muss ein Objekt die Methode `[Symbol.iterator]()` implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem {{jsxref("Symbol.iterator")}} Schlüssel haben muss.

Es kann möglich sein, über ein iterierbares Objekt mehr als einmal zu iterieren oder nur einmal. Es liegt am Programmierer zu wissen, was der Fall ist.

Iterables, die nur einmal iterieren können (wie Generatoren), geben üblicherweise `this` von ihrer `[Symbol.iterator]()` Methode zurück, während iterierbare Objekte, die mehrmals durchlaufen werden können, bei jedem Aufruf von `[Symbol.iterator]()` einen neuen Iterator zurückgeben müssen.

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

// This example show us generator(iterator) is iterable object,
// which has the [Symbol.iterator]() method return the `iter` (itself),
// and consequently, the it object can iterate only _once_.

// If we change the [Symbol.iterator]() method of `iter` to a function/generator
// which returns a new iterator/generator object, `iter`
// can iterate many times

iter[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
```

### Benutzerdefinierte Iterables

Sie können Ihre eigenen iterierbaren Objekte so erstellen:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

Benutzerdefinierte iterierbare Objekte können wie gewohnt in `for...of` Schleifen oder der Spread-Syntax verwendet werden.

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

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} und {{jsxref("Set")}} sind alle eingebaute Iterables, da ihre Prototypobjekte alle eine {{jsxref("Symbol.iterator")}} Methode haben.

### Syntaxen, die Iterables erwarten

Einige Anweisungen und Ausdrücke erwarten Iterables. Zum Beispiel: die {{jsxref("Statements/for...of", "for...of")}} Schleifen, {{jsxref("Operators/Spread_syntax", "Spread-Syntax", "", 1)}}, {{jsxref("Operators/yield*", "yield*")}}, und {{jsxref("Operators/Destructuring_assignment", "Destrukturierung", "", 1)}} Syntax.

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

Generatoren berechnen ihre `yield` Werte _bei Bedarf_, was es ihnen ermöglicht, effizient Sequenzen darzustellen, die aufwendig zu berechnen sind (oder sogar unendliche Sequenzen, wie oben gezeigt).

Die {{jsxref("Generator/next", "next()")}} Methode nimmt auch einen Wert an, der verwendet werden kann, um den internen Zustand des Generators zu modifizieren. Ein an `next()` übergebener Wert wird von `yield` empfangen.

> [!NOTE]
> Ein an den _ersten_ Aufruf von `next()` übergebener Wert wird immer ignoriert.

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

Sie können einen Generator zwingen, eine Ausnahme auszulösen, indem Sie seine {{jsxref("Generator/throw", "throw()")}} Methode aufrufen und den Ausnahme-Wert übergeben, den er werfen soll. Diese Ausnahme wird aus dem aktuell angehaltenen Kontext des Generators geworfen, als ob das `yield`, das derzeit angehalten ist, stattdessen eine `throw value` Anweisung wäre.

Wenn die Ausnahme innerhalb des Generators nicht abgefangen wird, propagiert sie sich durch den Aufruf von `throw()`, und nachfolgende Aufrufe von `next()` führen dazu, dass die `done` Eigenschaft `true` ist.

Generatoren haben eine {{jsxref("Generator/return", "return()")}} Methode, die den gegebenen Wert zurückgibt und den Generator selbst beendet.

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}
