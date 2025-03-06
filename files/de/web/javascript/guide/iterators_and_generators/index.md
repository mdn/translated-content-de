---
title: Iteratoren und Generatoren
slug: Web/JavaScript/Guide/Iterators_and_generators
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Internationalization")}}

Iteratoren und Generatoren bringen das Konzept der Iteration direkt in die Kernsprache und bieten einen Mechanismus zur Anpassung des Verhaltens von {{jsxref("Statements/for...of", "for...of")}}-Schleifen.

Weitere Details finden Sie auch hier:

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/function*", "function*")}} und {{jsxref("Generator")}}
- {{jsxref("Operators/yield", "yield")}} und {{jsxref("Operators/yield*", "yield*")}}

## Iteratoren

Ein **Iterator** in JavaScript ist ein Objekt, das eine Sequenz definiert und möglicherweise einen Rückgabewert bei seiner Beendigung liefert.

Konkret ist ein Iterator jedes Objekt, das das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert, indem es eine `next()`-Methode hat, die ein Objekt mit zwei Eigenschaften zurückgibt:

- `value`
  - : Der nächste Wert in der Iterationssequenz.
- `done`
  - : Dies ist `true`, wenn der letzte Wert in der Sequenz bereits verbraucht wurde. Wenn `value` neben `done` vorhanden ist, ist dies der Rückgabewert des Iterators.

Nachdem ein Iterator-Objekt erstellt wurde, kann es explizit durch wiederholtes Aufrufen von `next()` iteriert werden. Das Iterieren über einen Iterator verbraucht diesen, da dies im Allgemeinen nur einmal möglich ist. Nachdem ein Endwert ausgegeben wurde, sollten weitere Aufrufe von `next()` weiterhin `{done: true}` zurückgeben.

Der häufigste Iterator in JavaScript ist der Array-Iterator, der jeden Wert im zugehörigen Array in Sequenz zurückgibt.

Obwohl es leicht vorstellbar ist, dass alle Iteratoren als Arrays ausgedrückt werden könnten, ist dies nicht der Fall. Arrays müssen vollständig zugewiesen werden, aber Iteratoren werden nur bei Bedarf konsumiert. Aufgrund dessen können Iteratoren Sequenzen unbegrenzter Größe ausdrücken, wie z.B. den Bereich der ganzen Zahlen zwischen `0` und {{jsxref("Infinity")}}.

Hier ist ein Beispiel, das genau dies tun kann. Es ermöglicht die Erstellung eines Bereichsiterators, der eine Sequenz von ganzen Zahlen von `start` (einschließlich) bis `end` (ausschließlich) definiert, die `step` auseinander liegen. Sein endgültiger Rückgabewert ist die Größe der erstellten Sequenz, verfolgt durch die Variable `iterationCount`.

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
> Es ist nicht möglich, reflexiv zu wissen, ob ein bestimmtes Objekt ein Iterator ist. Wenn Sie dies tun müssen, verwenden Sie [Iterables](#iterables).

## Generatorfunktionen

Obwohl benutzerdefinierte Iteratoren ein nützliches Werkzeug sind, erfordert deren Erstellung sorgfältige Programmierung, da deren interner Zustand explizit verwaltet werden muss. **Generatorfunktionen** bieten eine leistungsfähige Alternative: Sie ermöglichen Ihnen, einen iterativen Algorithmus zu definieren, indem Sie eine einzelne Funktion schreiben, deren Ausführung nicht kontinuierlich ist. Generatorfunktionen werden mit der {{jsxref("Statements/function*", "function*")}}-Syntax geschrieben.

Beim Aufruf führen Generatorfunktionen ihren Code nicht sofort aus. Stattdessen geben sie einen speziellen Typ von Iterator zurück, der als **Generator** bezeichnet wird. Wenn ein Wert durch Aufrufen der `next`-Methode des Generators konsumiert wird, führt die Generatorfunktion aus, bis sie auf das `yield`-Schlüsselwort stößt.

Die Funktion kann beliebig oft aufgerufen werden und gibt jedes Mal einen neuen Generator zurück. Jeder Generator kann nur einmal iteriert werden.

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

Ein Objekt ist **iterierbar**, wenn es sein Iterationsverhalten definiert, z. B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion überlaufen werden. Einige integrierte Typen, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, haben ein Standard-Iterationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht tun.

Um **iterierbar** zu sein, muss ein Objekt die Methode `[Symbol.iterator]()` implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem {{jsxref("Symbol.iterator")}}-Schlüssel haben muss.

Es kann möglich sein, mehr als einmal über ein iterierbares Objekt zu iterieren, oder nur einmal. Es liegt am Programmierer zu wissen, welcher Fall zutrifft.

Iterables, die nur einmal iteriert werden können (wie Generatoren), geben üblicherweise `this` von ihrer `[Symbol.iterator]()`-Methode zurück, während Iterables, die viele Male iteriert werden können, bei jedem Aufruf von `[Symbol.iterator]()` einen neuen Iterator zurückgeben müssen.

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

Sie können Ihre eigenen Iterables wie folgt erstellen:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

Benutzerdefinierte Iterables können wie gewohnt in `for...of`-Schleifen oder der Spread-Syntax verwendet werden.

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

Einige Anweisungen und Ausdrücke erwarten Iterables. Zum Beispiel: die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, {{jsxref("Operators/Spread_syntax", "Spread-Syntax", "", 1)}}, {{jsxref("Operators/yield*", "yield*")}}, und {{jsxref("Operators/Destructuring_assignment", "Destrukturierung", "", 1)}}-Syntax.

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

## Fortgeschrittene Generatoren

Generatoren berechnen ihre `yield`-Werte _bei Bedarf_, was es ihnen ermöglicht, Sequenzen darzustellen, die aufwendig zu berechnen sind (oder sogar unendliche Sequenzen, wie oben demonstriert).

Die {{jsxref("Generator/next", "next()")}}-Methode akzeptiert auch einen Wert, der verwendet werden kann, um den internen Zustand des Generators zu ändern. Ein Wert, der an `next()` übergeben wird, wird von `yield` empfangen.

> [!NOTE]
> Ein Wert, der bei der _ersten_ Ausführung von `next()` übergeben wird, wird immer ignoriert.

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

Sie können einen Generator zwingen, eine Ausnahme auszulösen, indem Sie seine {{jsxref("Generator/throw", "throw()")}}-Methode aufrufen und den Ausnahme-Wert übergeben, den er auslösen soll. Diese Ausnahme wird aus dem aktuell angehaltenen Kontext des Generators ausgelöst, als ob das derzeit angehaltene `yield`-Statement stattdessen ein `throw value`-Statement wäre.

Wenn die Ausnahme nicht innerhalb des Generators abgefangen wird, wird sie durch den Aufruf von `throw()` hoch eskaliert, und nachfolgende Aufrufe von `next()` führen dazu, dass die `done`-Eigenschaft `true` ist.

Generatoren haben eine {{jsxref("Generator/return", "return()")}}-Methode, die den angegebenen Wert zurückgibt und den Generator selbst beendet.

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Internationalization")}}
