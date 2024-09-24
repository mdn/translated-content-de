---
title: Iteratoren und Generatoren
slug: Web/JavaScript/Guide/Iterators_and_generators
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}

Iteratoren und Generatoren bringen das Konzept der Iteration direkt in die Kernsprache und bieten einen Mechanismus zur Anpassung des Verhaltens von {{jsxref("Statements/for...of", "for...of")}}-Schleifen.

Weitere Einzelheiten finden Sie unter:

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/function*", "function*")}} und {{jsxref("Generator")}}
- {{jsxref("Operators/yield", "yield")}} und {{jsxref("Operators/yield*", "yield*")}}

## Iteratoren

In JavaScript ist ein **Iterator** ein Objekt, das eine Sequenz definiert und möglicherweise einen Rückgabewert bei seinem Abschluss hat.

Konkret ist ein Iterator jedes Objekt, das das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert, indem es eine `next()`-Methode hat, die ein Objekt mit zwei Eigenschaften zurückgibt:

- `value`
  - : Der nächste Wert in der Iterationssequenz.
- `done`
  - : Dies ist `true`, wenn der letzte Wert in der Sequenz bereits verbraucht wurde. Wenn `value` neben `done` vorhanden ist, ist es der Rückgabewert des Iterators.

Sobald ein Iterator-Objekt erstellt wurde, kann es explizit durch wiederholtes Aufrufen von `next()` iteriert werden. Das Iterieren über einen Iterator wird als Verbrauch des Iterators bezeichnet, da es im Allgemeinen nur einmal möglich ist. Nachdem ein abschließender Wert geliefert wurde, sollten zusätzliche Aufrufe von `next()` weiterhin `{done: true}` zurückgeben.

Der häufigste Iterator in JavaScript ist der Array-Iterator, der jeden Wert im zugehörigen Array der Reihe nach zurückgibt.

Obwohl es leicht vorstellbar ist, dass alle Iteratoren als Arrays ausgedrückt werden könnten, stimmt dies nicht. Arrays müssen in ihrer Gesamtheit zugewiesen werden, aber Iteratoren werden nur nach Bedarf verbraucht. Aus diesem Grund können Iteratoren unbegrenzte Sequenzen darstellen, wie zum Beispiel den Bereich von ganzen Zahlen zwischen `0` und {{jsxref("Infinity")}}.

Hier ein Beispiel, das dies genau tut. Es erlaubt die Erstellung eines einfachen Bereichsiterators, der eine Sequenz von ganzen Zahlen von `start` (einschließlich) bis `end` (ausschließlich) definiert, die durch `step` getrennt sind. Sein endgültiger Rückgabewert ist die Größe der erstellten Sequenz, die durch die Variable `iterationCount` verfolgt wird.

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

console.log("Über Sequenz der Größe iteriert:", result.value); // [5 Numbers returned, that took interval in between: 0 to 10]
```

> [!NOTE]
> Es ist nicht möglich, reflexiv zu wissen, ob ein bestimmtes Objekt ein Iterator ist. Wenn Sie dies tun müssen, verwenden Sie [Iterables](#iterables).

## Generatorfunktionen

Während benutzerdefinierte Iteratoren ein nützliches Werkzeug sind, erfordert ihre Erstellung sorgfältiges Programmieren, da ihr interner Zustand explizit verwaltet werden muss. **Generatorfunktionen** bieten eine leistungsstarke Alternative: Sie ermöglichen es Ihnen, einen iterativen Algorithmus zu definieren, indem Sie eine einzelne Funktion schreiben, deren Ausführung nicht kontinuierlich ist. Generatorfunktionen werden mit der {{jsxref("Statements/function*", "function*")}}-Syntax geschrieben.

Beim Aufruf führen Generatorfunktionen ihren Code nicht sofort aus. Stattdessen geben sie eine spezielle Art von Iterator zurück, genannt **Generator**. Wenn ein Wert durch Aufrufen der `next`-Methode des Generators verbraucht wird, führt die Generatorfunktion aus, bis sie auf das `yield`-Schlüsselwort trifft.

Die Funktion kann so oft wie gewünscht aufgerufen werden und gibt jedes Mal einen neuen Generator zurück. Jeder Generator kann nur einmal iteriert werden.

Wir können nun das obige Beispiel anpassen. Das Verhalten dieses Codes ist identisch, jedoch ist die Implementierung viel einfacher zu schreiben und zu lesen.

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

Ein Objekt ist **iterierbar**, wenn es sein Iterationsverhalten definiert, also welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, haben ein Standard-Iterationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht haben.

Um **iterierbar** zu sein, muss ein Objekt die Methode `[Symbol.iterator]()` implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem {{jsxref("Symbol.iterator")}}-Schlüssel haben muss.

Es kann möglich sein, ein Iterierbares mehrmals oder nur einmal zu durchlaufen. Es liegt am Programmierer zu wissen, welches der Fall ist.

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

// Dieses Beispiel zeigt uns, dass ein Generator(Iterator) ein iterierbares Objekt ist,
// das die [Symbol.iterator]() Methode hat, die `iter` (sich selbst) zurückgibt,
// und folglich kann sich das it-Objekt nur _einmal_ iterieren.

// Wenn wir die [Symbol.iterator]() Methode von `iter` in eine Funktion/Generator ändern,
// die ein neues Iterator/Generator-Objekt zurückgibt, kann `iter` mehrfach iteriert werden.

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

Benutzerdefinierte Iterables können wie üblich in `for...of`-Schleifen oder der Spreiz-Syntax verwendet werden.

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

## Erweitere Generatoren

Generatoren berechnen ihre `yield`-Werte _auf Abruf_, wodurch sie Sequenzen effizient darstellen können, die rechenintensiv sind (oder sogar unendliche Sequenzen, wie oben gezeigt).

Die {{jsxref("Generator/next", "next()")}}-Methode akzeptiert ebenfalls einen Wert, der verwendet werden kann, um den internen Zustand des Generators zu ändern. Ein Wert, der an `next()` übergeben wird, wird von `yield` empfangen.

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

Sie können einen Generator zwingen, eine Ausnahme auszulösen, indem Sie seine {{jsxref("Generator/throw", "throw()")}}-Methode aufrufen und den Ausnahme-Wert übergeben, den er werfen soll. Diese Ausnahme wird aus dem aktuellen angehaltenen Kontext des Generators geworfen, als ob das aktuell angehaltene `yield`-Statement stattdessen ein `throw value`-Statement wäre.

Wenn die Ausnahme nicht innerhalb des Generators abgefangen wird, propagiert sie sich den Aufruf zu `throw()` hoch, und folgende Aufrufe zu `next()` führen dazu, dass die Eigenschaft `done` `true` ist.

Generatoren haben eine {{jsxref("Generator/return", "return()")}}-Methode, die den angegebenen Wert zurückgibt und den Generator selbst beendet.

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}
