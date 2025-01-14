---
title: Iteratoren und Generatoren
slug: Web/JavaScript/Guide/Iterators_and_generators
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Internationalization")}}

Iteratoren und Generatoren bringen das Konzept der Iteration direkt in die Kernsprache ein und bieten einen Mechanismus zur Anpassung des Verhaltens von {{jsxref("Statements/for...of", "for...of")}} Schleifen.

Siehe auch für Details:

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/function*", "function*")}} und {{jsxref("Generator")}}
- {{jsxref("Operators/yield", "yield")}} und {{jsxref("Operators/yield*", "yield*")}}

## Iteratoren

In JavaScript ist ein **Iterator** ein Objekt, das eine Sequenz definiert und möglicherweise einen Rückgabewert bei seiner Beendigung liefert.

Genauer gesagt ist ein Iterator jedes Objekt, das das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert, indem es eine `next()` Methode hat, die ein Objekt mit zwei Eigenschaften zurückgibt:

- `value`
  - : Der nächste Wert in der Iterationssequenz.
- `done`
  - : Dies ist `true`, wenn der letzte Wert in der Sequenz bereits konsumiert wurde. Wenn `value` zusammen mit `done` vorhanden ist, ist es der Rückgabewert des Iterators.

Einmal erstellt, kann ein Iterator-Objekt explizit durch wiederholtes Aufrufen von `next()` durchlaufen werden. Das Durchlaufen eines Iterators wird als Konsumieren des Iterators bezeichnet, da dies im Allgemeinen nur einmal möglich ist. Nachdem ein Endwert ausgegeben wurde, sollten zusätzliche Aufrufe von `next()` weiterhin `{done: true}` zurückgeben.

Der häufigste Iterator in JavaScript ist der Array-Iterator, der jeden Wert im zugehörigen Array in der Reihenfolge zurückgibt.

Während es einfach vorstellbar ist, dass alle Iteratoren als Arrays ausgedrückt werden könnten, ist das nicht der Fall. Arrays müssen vollständig zugewiesen werden, aber Iteratoren werden nur nach Bedarf konsumiert. Aus diesem Grund können Iteratoren Sequenzen von unbegrenzter Größe ausdrücken, wie etwa den Bereich von Ganzzahlen zwischen `0` und {{jsxref("Infinity")}}.

Hier ist ein Beispiel, das genau das tun kann. Es ermöglicht die Erstellung eines Bereichs-Iterators, der eine Sequenz von Ganzzahlen von `start` (einschließlich) bis `end` (ausschließlich) mit einem Abstand von `step` definiert. Sein endgültiger Rückgabewert ist die Größe der erzeugten Sequenz, verfolgt durch die Variable `iterationCount`.

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
> Es ist nicht möglich, reflektierend zu wissen, ob ein bestimmtes Objekt ein Iterator ist. Wenn Sie dies tun müssen, verwenden Sie [Iterables](#iterables).

## Generator-Funktionen

Während benutzerdefinierte Iteratoren ein nützliches Werkzeug sind, erfordert ihre Erstellung sorgfältige Programmierung aufgrund der Notwendigkeit, ihren internen Zustand explizit zu verwalten. **Generator-Funktionen** bieten eine leistungsstarke Alternative: Sie ermöglichen es Ihnen, einen iterativen Algorithmus zu definieren, indem Sie eine einzige Funktion schreiben, deren Ausführung nicht kontinuierlich erfolgt. Generator-Funktionen werden mit der {{jsxref("Statements/function*", "function*")}} Syntax geschrieben.

Wenn sie aufgerufen werden, führen Generator-Funktionen ihren Code nicht sofort aus. Stattdessen geben sie einen speziellen Typ von Iterator zurück, einen **Generator**. Wenn ein Wert konsumiert wird, indem die `next` Methode des Generators aufgerufen wird, führt die Generator-Funktion ihren Code aus, bis sie auf das `yield` Schlüsselwort stößt.

Die Funktion kann beliebig oft aufgerufen werden und gibt jedes Mal einen neuen Generator zurück. Jeder Generator kann nur einmal durchlaufen werden.

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

Ein Objekt ist **iterierbar**, wenn es sein Iterationsverhalten definiert, z. B. welche Werte in einem {{jsxref("Statements/for...of", "for...of")}} Konstrukt durchlaufen werden. Einige eingebaute Typen, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, haben ein Standard-Iterationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht tun.

Um **iterierbar** zu sein, muss ein Objekt die `[Symbol.iterator]()` Methode implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem {{jsxref("Symbol.iterator")}} Schlüssel haben muss.

Es kann möglich sein, ein iterierbares Objekt mehr als einmal oder nur einmal zu durchlaufen. Es liegt in der Verantwortung des Programmierers zu wissen, welches der Fall ist.

Iterables, die nur einmal durchlaufbar sind (wie Generatoren), geben von ihrer `[Symbol.iterator]()` Methode üblicherweise `this` zurück, während Iterables, die viele Male durchlaufen werden können, bei jeder Aufruf von `[Symbol.iterator]()` einen neuen Iterator zurückgeben müssen.

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

Benutzerdefinierte Iterables können wie gewohnt in `for...of` Schleifen oder der Spread-Syntax verwendet werden.

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

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} und {{jsxref("Set")}} sind alle eingebaute Iterables, da ihre Prototyp-Objekte alle eine {{jsxref("Symbol.iterator")}} Methode haben.

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

Generatoren berechnen ihre `yield`-Werte _auf Abruf_, was es ihnen ermöglicht, effizient Sequenzen darzustellen, die teuer zu berechnen sind (oder sogar unendliche Sequenzen, wie oben gezeigt).

Die {{jsxref("Generator/next", "next()")}} Methode akzeptiert auch einen Wert, der verwendet werden kann, um den internen Zustand des Generators zu ändern. Ein an `next()` übergebener Wert wird von `yield` empfangen.

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

Sie können einen Generator zwingen, eine Ausnahme auszulösen, indem Sie seine {{jsxref("Generator/throw", "throw()")}} Methode aufrufen und den Ausnahmewert übergeben, den er werfen soll. Diese Ausnahme wird aus dem aktuell angehaltenen Kontext des Generators ausgelöst, als ob das derzeit angehaltene `yield` stattdessen eine `throw value` Anweisung wäre.

Wenn die Ausnahme nicht innerhalb des Generators abgefangen wird, wird sie durch den Aufruf von `throw()` nach oben propagiert, und nachfolgende Aufrufe von `next()` führen dazu, dass die `done` Eigenschaft `true` ist.

Generatoren haben eine {{jsxref("Generator/return", "return()")}} Methode, die den angegebenen Wert zurückgibt und den Generator selbst beendet.

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Internationalization")}}
