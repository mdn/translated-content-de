---
title: Iteratoren und Generatoren
slug: Web/JavaScript/Guide/Iterators_and_generators
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}

Iteratoren und Generatoren bringen das Konzept der Iteration direkt in die Kernsprache und bieten einen Mechanismus zur Anpassung des Verhaltens von {{jsxref("Statements/for...of", "for...of")}}-Schleifen.

Weitere Details finden Sie auch unter:

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/function*", "function*")}} und {{jsxref("Generator")}}
- {{jsxref("Operators/yield", "yield")}} und {{jsxref("Operators/yield*", "yield*")}}

## Iteratoren

In JavaScript ist ein **Iterator** ein Objekt, das eine Sequenz definiert und möglicherweise einen Rückgabewert bei seiner Beendigung liefert.

Konkret ist ein Iterator jedes Objekt, das das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert, indem es eine `next()`-Methode hat, die ein Objekt mit zwei Eigenschaften zurückgibt:

- `value`
  - : Der nächste Wert in der Iterationssequenz.
- `done`
  - : Dies ist `true`, wenn der letzte Wert in der Sequenz bereits verbraucht wurde. Wenn `value` zusammen mit `done` vorhanden ist, ist dies der Rückgabewert des Iterators.

Sobald ein Iterator-Objekt erstellt wurde, kann es explizit durch wiederholte Aufrufe von `next()` iteriert werden. Das Iterieren über einen Iterator wird als "Verbrauch" des Iterators bezeichnet, da dies im Allgemeinen nur einmal möglich ist. Nachdem ein Endwert zurückgegeben wurde, sollten zusätzliche Aufrufe von `next()` weiterhin `{done: true}` zurückgeben.

Der häufigste Iterator in JavaScript ist der Array-Iterator, der jeden Wert im zugehörigen Array in Sequenz zurückgibt.

Obwohl es leicht vorstellbar ist, dass alle Iteratoren als Arrays ausgedrückt werden könnten, ist das nicht der Fall. Arrays müssen in ihrer Gesamtheit zugeordnet werden, Iteratoren hingegen werden nur bei Bedarf konsumiert. Aufgrund dieser Eigenschaft können Iteratoren Sequenzen unbegrenzter Größe darstellen, wie beispielsweise den Bereich der ganzen Zahlen zwischen `0` und {{jsxref("Infinity")}}.

Hier ein Beispiel, das genau das tun kann. Es ermöglicht die Erstellung eines einfachen Range-Iterators, der eine Sequenz von ganzen Zahlen von `start` (einschließlich) bis `end` (ausschließlich) in Abständen von `step` definiert. Sein letzter Rückgabewert ist die Größe der erzeugten Sequenz, die durch die Variable `iterationCount` verfolgt wird.

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
> Es ist nicht möglich, auf reflektierende Weise zu erkennen, ob ein bestimmtes Objekt ein Iterator ist. Wenn Sie dies tun müssen, verwenden Sie [Iterables](#iterables).

## Generatorfunktionen

Obwohl benutzerdefinierte Iteratoren ein nützliches Werkzeug sind, erfordert ihre Erstellung sorgfältige Programmierung, da ihr interner Zustand explizit verwaltet werden muss. **Generatorfunktionen** bieten eine leistungsstarke Alternative: Sie ermöglichen es, einen iterativen Algorithmus zu definieren, indem eine einzelne Funktion geschrieben wird, deren Ausführung nicht kontinuierlich ist. Generatorfunktionen werden mit der {{jsxref("Statements/function*", "function*")}}-Syntax geschrieben.

Beim Aufruf führen Generatorfunktionen ihren Code nicht sofort aus. Stattdessen geben sie eine spezielle Art von Iterator zurück, genannt **Generator**. Wenn ein Wert durch Aufruf der `next`-Methode des Generators konsumiert wird, führt die Generatorfunktion aus, bis sie auf das `yield`-Schlüsselwort stößt.

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

Ein Objekt ist **iterierbar**, wenn es sein Iterationsverhalten definiert, also welche Werte in einem {{jsxref("Statements/for...of", "for...of")}}-Konstrukt durchlaufen werden. Einige eingebaute Typen, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, haben ein Standarditerationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht haben.

Um **iterierbar** zu sein, muss ein Objekt die `[Symbol.iterator]()`-Methode implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit dem Schlüssel {{jsxref("Symbol.iterator")}} haben muss.

Es kann möglich sein, ein iterierbares Objekt mehr als einmal oder nur einmal zu iterieren. Es liegt am Programmierer, zu wissen, welches der Fall ist.

Iterable Objekte, die nur einmal iteriert werden können (wie Generatoren), geben in der Regel `this` von ihrer `[Symbol.iterator]()`-Methode zurück, während iterierbare Objekte, die viele Male iteriert werden können, bei jedem Aufruf von `[Symbol.iterator]()` einen neuen Iterator zurückgeben müssen.

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

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} und {{jsxref("Set")}} sind alle eingebaute Iterables, da ihre Prototyp-Objekte alle eine {{jsxref("Symbol.iterator")}}-Methode besitzen.

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

Generatoren berechnen ihre `yield`-Werte _bei Bedarf_, was es ihnen ermöglicht, effizient Sequenzen darzustellen, die aufwendig zu berechnen sind (oder sogar unendliche Sequenzen, wie oben demonstriert).

Die {{jsxref("Generator/next", "next()")}}-Methode akzeptiert auch einen Wert, der verwendet werden kann, um den internen Zustand des Generators zu ändern. Ein Wert, der an `next()` übergeben wird, wird von `yield` empfangen.

> [!NOTE]
> Ein Wert, der beim _ersten_ Aufruf von `next()` übergeben wird, wird immer ignoriert.

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

Sie können einen Generator zwingen, eine Ausnahme auszulösen, indem Sie seine {{jsxref("Generator/throw", "throw()")}}-Methode aufrufen und den Ausnahme-Wert übergeben, den er werfen soll. Diese Ausnahme wird aus dem aktuellen angehaltenen Kontext des Generators geworfen, als ob das `yield`, das gerade angehalten wurde, stattdessen eine `throw value`-Anweisung wäre.

Wenn die Ausnahme nicht innerhalb des Generators abgefangen wird, wird sie durch den Aufruf von `throw()` nach oben propagiert, und nachfolgende Aufrufe von `next()` führen dazu, dass die `done`-Eigenschaft `true` ist.

Generatoren haben eine {{jsxref("Generator/return", "return()")}}-Methode, die den angegebenen Wert zurückgibt und den Generator selbst beendet.

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}
