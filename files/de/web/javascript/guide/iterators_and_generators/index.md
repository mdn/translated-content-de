---
title: Iteratoren und Generatoren
slug: Web/JavaScript/Guide/Iterators_and_generators
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Resource_management")}}

Iteratoren und Generatoren bringen das Konzept der Iteration direkt in die Kernsprache und bieten einen Mechanismus zur Anpassung des Verhaltens von {{jsxref("Statements/for...of", "for...of")}}-Schleifen.

Für weitere Details siehe auch:

- [Iterierungsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/function*", "function*")}} und {{jsxref("Generator")}}
- {{jsxref("Operators/yield", "yield")}} und {{jsxref("Operators/yield*", "yield*")}}

## Iteratoren

In JavaScript ist ein **Iterator** ein Objekt, das eine Sequenz definiert und möglicherweise einen Rückgabewert bei dessen Beendigung.

Speziell ist ein Iterator jedes Objekt, das das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert, indem es eine `next()`-Methode besitzt, die ein Objekt mit zwei Eigenschaften zurückgibt:

- `value`
  - : Der nächste Wert in der Iterationssequenz.
- `done`
  - : Dies ist `true`, wenn der letzte Wert in der Sequenz bereits verbraucht wurde. Wenn `value` zusammen mit `done` vorhanden ist, ist es der Rückgabewert des Iterators.

Sobald ein Iterator-Objekt erstellt wurde, kann es explizit iteriert werden, indem wiederholt `next()` aufgerufen wird. Das Iterieren über einen Iterator wird als Verbrauch des Iterators bezeichnet, da es im Allgemeinen nur einmal möglich ist. Nachdem ein Endwert geliefert wurde, sollten zusätzliche Aufrufe von `next()` weiterhin `{done: true}` zurückgeben.

Der häufigste Iterator in JavaScript ist der Array-Iterator, der jeden Wert im zugehörigen Array in Reihenfolge zurückgibt.

Obwohl es leicht vorstellbar ist, dass alle Iteratoren als Arrays ausgedrückt werden könnten, ist dies nicht wahr. Arrays müssen vollständig zugewiesen werden, aber Iteratoren werden nur bei Bedarf verbraucht. Aufgrund dessen können Iteratoren Sequenzen unbegrenzter Größe ausdrücken, wie etwa den Zahlenbereich zwischen `0` und {{jsxref("Infinity")}}.

Hier ist ein Beispiel, das genau das tun kann. Es ermöglicht die Erstellung eines Bereichsiterators, der eine Sequenz von Ganzzahlen von `start` (einschließlich) bis `end` (ausschließlich) mit dem Abstand `step` definiert. Sein endgültiger Rückgabewert ist die Größe der von ihm erstellten Sequenz, die durch die Variable `iterationCount` verfolgt wird.

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
> Es ist nicht möglich, reflektiv festzustellen, ob ein bestimmtes Objekt ein Iterator ist. Wenn Sie dies tun müssen, verwenden Sie [Iterables](#iterables).

## Generatofunktion

Obwohl benutzerdefinierte Iteratoren ein nützliches Werkzeug sind, erfordert ihre Erstellung sorgfältige Programmierung, da ihr interner Zustand explizit gepflegt werden muss. **Generatofunktionen** bieten eine leistungsstarke Alternative: Sie ermöglichen es Ihnen, einen iterativen Algorithmus zu definieren, indem eine einzelne Funktion geschrieben wird, deren Ausführung nicht kontinuierlich ist. Generatofunktionen werden mit der {{jsxref("Statements/function*", "function*")}}-Syntax geschrieben.

Bei Aufruf führen Generatofunktionen ihren Code nicht zunächst aus. Stattdessen geben sie einen speziellen Iteratortyp zurück, der als **Generator** bezeichnet wird. Wenn ein Wert durch den Aufruf der `next`-Methode des Generators verbraucht wird, führt die Generatofunktion aus, bis sie auf das `yield`-Schlüsselwort trifft.

Die Funktion kann so oft wie gewünscht aufgerufen werden und gibt jedes Mal einen neuen Generator zurück. Jeder Generator kann nur einmal durchlaufen werden.

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

Ein Objekt ist **iterierbar**, wenn es sein Iterationsverhalten definiert, wie beispielsweise welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, haben ein Standard-Iterationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht tun.

Um **iterierbar** zu sein, muss ein Objekt die Methode `[Symbol.iterator]()` implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem {{jsxref("Symbol.iterator")}}-Schlüssel haben muss.

Es kann möglich sein, über ein iterierbares Objekt mehrmals oder nur einmal zu iterieren. Es liegt in der Verantwortung des Programmierers zu wissen, welche Variante der Fall ist.

Iterables, die nur einmal iteriert werden können (wie Generatoren), geben üblicherweise `this` von ihrer `[Symbol.iterator]()`-Methode zurück, während Iterables, die mehrmals durchlaufen werden können, einen neuen Iterator bei jedem Aufruf von `[Symbol.iterator]()` zurückgeben müssen.

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

Sie können Ihre eigenen Iterables so erstellen:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

Benutzerdefinierte Iterables können in `for...of`-Schleifen oder der Spread-Syntax wie üblich verwendet werden.

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

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} und {{jsxref("Set")}} sind alle eingebaute Iterables, da ihre Prototypobjekte alle eine {{jsxref("Symbol.iterator")}}-Methode haben.

### Syntaxen, die Iterables erwarten

Einige Anweisungen und Ausdrücke erwarten Iterables. Zum Beispiel: die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, {{jsxref("Operators/Spread_syntax", "spread syntax", "", 1)}}, {{jsxref("Operators/yield*", "yield*")}}, und {{jsxref("Operators/Destructuring", "destructuring", "", 1)}}-Syntax.

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

Generatoren berechnen ihre `yield`-Werte _bei Bedarf_, was es ihnen ermöglicht, Sequenzen effizient darzustellen, deren Berechnung aufwändig ist (oder sogar unendliche Sequenzen, wie oben gezeigt).

Die {{jsxref("Generator/next", "next()")}}-Methode akzeptiert auch einen Wert, der verwendet werden kann, um den internen Zustand des Generators zu ändern. Ein Wert, der an `next()` übergeben wird, wird von `yield` empfangen.

> [!NOTE]
> Ein Wert, der bei der _ersten_ Aufruf von `next()` übergeben wird, wird immer ignoriert.

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

Sie können einen Generator zwingen, eine Ausnahme auszulösen, indem Sie seine {{jsxref("Generator/throw", "throw()")}}-Methode aufrufen und den Ausnahme-Wert übergeben, den er auslösen soll. Diese Ausnahme wird aus dem aktuellen angehaltenen Kontext des Generators geworfen, als ob der `yield`, der derzeit angehalten ist, stattdessen eine `throw value`-Anweisung wäre.

Wenn die Ausnahme nicht innerhalb des Generators abgefangen wird, wird sie durch den Aufruf von `throw()` nach oben propagiert, und nachfolgende Aufrufe von `next()` führen dazu, dass die `done`-Eigenschaft `true` ist.

Generatoren haben eine {{jsxref("Generator/return", "return()")}}-Methode, um den angegebenen Wert zurückzugeben und den Generator selbst zu beenden.

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Resource_management")}}
