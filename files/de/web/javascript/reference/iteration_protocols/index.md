---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{jsSidebar("Mehr")}}

**Iterationsprotokolle** sind keine neuen Built-ins oder Syntax, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, beispielsweise welche Werte in einem {{jsxref("Statements/for...of", "for...of")}} Konstrukt durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Itrationsverhalten, wie etwa {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie etwa {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]` Schlüssel haben muss, die über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (etwa am Anfang einer {{jsxref("Statements/for...of", "for...of")}} Schleife), wird seine `[Symbol.iterator]()` Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Funktion ohne Argumente aufgerufen wird, sie als Methode auf dem iterierbaren Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this` Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen, um zu entscheiden, was während der Iteration bereitgestellt wird.

Diese Funktion kann eine gewöhnliche Funktion sein oder eine Generatormethode, sodass beim Aufruf ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatormethode kann jeder Eintrag durch die Verwendung von `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine standardisierte Methode zur Erzeugung einer Sequenz von Werten (entweder endlich oder unendlich) und potenziell einen Rückgabewert, wenn alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine Methode **`next()`** mit den folgenden Eigenschaften implementiert:

- `next()`
  - : Eine Funktion, die kein oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult` Interface entspricht (siehe unten). Wenn ein nicht-objektwertiger Wert zurückgegeben wird (wie `false` oder `undefined`), wenn ein eingebautes Sprachmerkmal (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollten ein Objekt zurückgeben, das das `IteratorResult` Interface implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein boolescher Wert, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert der Sequenz zu erzeugen. (Dies entspricht der Nichtangabe der `done`-Eigenschaft insgesamt.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall spezifiziert `value` optional den Rückgabewert des Iterators.

- `value` {{optional_inline}}
  - : Ein beliebiger JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis ist keine der Eigenschaften streng erforderlich; wenn ein Objekt ohne eine dieser Eigenschaften zurückgegeben wird, ist es effektiv gleichbedeutend mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die Methode `next` kann einen Wert erhalten, der im Methodenkörper verfügbar gemacht wird. Keine eingebaute Sprachfunktion wird einen Wert übergeben. Der an die `next` Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield` Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die bei Aufruf den Iterator darüber informieren, dass der Anrufer das Iterieren beendet hat und notwendige Bereinigungen durchführen kann (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die kein oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult` Schnittstelle entspricht, typischerweise mit `value`, das dem übergebenen Wert entspricht, und `done`, das `true` ist. Das Aufrufen dieser Methode signalisiert dem Iterator, dass der Anrufer keine weiteren `next()` Aufrufe vornehmen will und bereinigende Maßnahmen durchführen kann. Wenn eingebaute Sprachmerkmale `return()` zum Bereinigen aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die kein oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult` Schnittstelle entspricht, typischerweise mit `done`, das `true` ist. Das Aufrufen dieser Methode signalisiert dem Iterator, dass der Anrufer einen Fehlerzustand entdeckt, und `exception` ist typischerweise eine {{jsxref("Error")}} Instanz. Kein eingebautes Sprachmerkmal ruft `throw()` zu Bereinigungszwecken auf — es ist eine spezielle Funktion von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflexartig (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu erkennen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterierbar zu machen: Implementieren Sie einfach eine `[Symbol.iterator]()` Methode, die `this` zurückgibt.

```js
// Satisfies both the Iterator Protocol and Iterable
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dies ermöglicht es einem Iterator, von den verschiedenen Syntaxen, die Iterables erwarten, konsumiert zu werden – daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch das Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, keine _Iteratoren_.) Das [Generatorenobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

```js
const aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof aGeneratorObject.next);
// "function" — it has a next method (which returns the right result), so it's an iterator

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function" — it has an [Symbol.iterator] method (which returns the right iterator), so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true — its [Symbol.iterator] method returns itself (an iterator), so it's an iterable iterator
```

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, welches die `[Symbol.iterator]()` Methode als Rückgabe von `this` implementiert, sodass eingebaute Iteratoren ebenfalls iterierbar sind.

Es ist jedoch besser, wenn möglich, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer am Anfang beginnen, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die asynchronen Iterator- und asynchronen Iterable-Protokolle

Es gibt ein weiteres Paar von Protokollen, die für die asynchrone Iteration verwendet werden, genannt **asynchrones Iterator**- und **asynchrones Iterable**-Protokoll. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den Iterable- und Iterator-Protokollen, mit dem Unterschied, dass jeder Rückgabewert aus den Aufrufen der Iterator-Methoden in ein Promise eingepackt ist.

Ein Objekt implementiert das asynchrone Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, welches dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die kein oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das dem `IteratorResult` Interface entspricht, und die Eigenschaften haben die gleichen Semantiken wie beim synchronen Iterator.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die kein oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das dem `IteratorResult` Interface entspricht, und die Eigenschaften haben die gleichen Semantiken wie beim synchronen Iterator.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die kein oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das dem `IteratorResult` Interface entspricht, und die Eigenschaften haben die gleichen Semantiken wie beim synchronen Iterator.

## Wechselwirkungen zwischen der Sprache und den Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype` Objekte eine `[Symbol.iterator]()` Methode implementiert. Zusätzlich sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterierbar ist. Einige Web-APIs, wie beispielsweise [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator` Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die von eingebauten Iterables zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die erwähnte `[Symbol.iterator]() { return this; }` Methode implementiert und sie damit alle zu iterierbaren Iteratoren macht. Die `Iterator` Klasse bietet zusätzlich [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) an, zusätzlich zur `next()` Methode, die vom Iterator-Protokoll gefordert wird. Sie können die Prototypen-Kette eines Iterators inspizieren, indem Sie es in einer grafischen Konsole protokollieren.

```plain
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> This is the prototype shared by all array iterators
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> This is the prototype shared by all built-in iterators
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> This is Object.prototype
```

### Eingebaute APIs, die Iterables akzeptieren

Es gibt viele APIs, die Iterables akzeptieren. Einige Beispiele sind:

- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
- {{jsxref("Set/Set", "Set()")}}
- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}

```js
const myObj = {};

new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

### Syntaxen, die Iterables erwarten

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}} Schleifen, [Array- und Parameter-Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}} und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

console.log([..."abc"]); // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
console.log(a); // "a"
```

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` ist `false` (d.h. der Iterator kann mehr Werte erzeugen), aber keine weiteren Werte benötigt werden, wird die `return` Methode aufgerufen, falls sie vorhanden ist. Dies kann passieren, wenn beispielsweise ein `break` oder `return` in einer `for...of` Schleife auftritt oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

```js
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        console.log("Returning", i);
        if (i === 3) return { done: true, value: i };
        return { done: false, value: i };
      },
      return() {
        console.log("Closing");
        return { done: true };
      },
    };
  },
};

const [a] = obj;
// Returning 1
// Closing

const [b, c, d] = obj;
// Returning 1
// Returning 2
// Returning 3
// Already reached the end (the last call returned `done: true`),
// so `return` is not called

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht in [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, um mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), führt zu einem TypeError: x is not iterable.

## Fehlerbehandlung

Da Iteration eine Übertragung der Kontrolle zwischen dem Iterator und dem Verbraucher beinhaltet, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Verbraucher die vom Iterator geworfenen Fehler behandelt und wie der Iterator die durch den Verbraucher geworfenen Fehler behandelt. Wenn Sie eine der eingebauten Methoden der Iteration verwenden, kann die Sprache auch Fehler auslösen, weil das Iterable bestimmte Invarianten verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, die als Leitfaden für Ihren eigenen Code verwendet werden können, wenn Sie den Iterator manuell betreiben.

### Nicht gut geformte Iterables

Fehler können auftreten, wenn der Iterator aus dem Iterable erworben wird. Die hier durchgesetzte Sprachinvariante besteht darin, dass das Iterable einen gültigen Iterator produzieren muss:

- Es hat eine aufrufbare `[Symbol.iterator]()` Methode.
- Die `[Symbol.iterator]()` Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()` Methode.

Wenn eine eingebaute Syntax zur Initiierung der Iteration auf einem nicht gut geformten Iterable verwendet wird, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn seine `[Symbol.asyncIterator]()` Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript zurück, um stattdessen die `[Symbol.iterator]` Eigenschaft zu verwenden (und den resultierenden Iterator zu einem asynchronen Iterator zu umwickeln, indem es die Methoden [weiterleitet](#fehlerweiterleitung)). Andernfalls muss die `[Symbol.asyncIterator]` Eigenschaft auch den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann durch vorherige Validierung des Iterables verhindert werden, bevor versucht wird, sie zu iterieren. Es ist jedoch ziemlich selten, weil man normalerweise den Typ des Objekts kennt, das man iteriert. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Anrufer propagieren lassen, damit dieser weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator schrittweise aufgerufen wird (Aufruf von `next()`). Die hier durchgesetzte Sprachinvariante besteht darin, dass die `next()` Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren, ein Objekt nach dem Warten). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()` Methode einen Fehler auslöst (für asynchrone Iteratoren, kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Anrufer weitergegeben. Für eingebaute Syntaxen wird die laufende Iteration ohne Wiederholung oder Bereinigung abgebrochen (mit der Annahme, dass die `next()` Methode den Fehler ausgelöst hat und daher bereits bereinigt wurde). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und `next()` erneut aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Anrufer aus irgendeinem anderen Grund als den in den vorhergehenden Absätzen genannten Fehlern beschließt, die Iteration zu beenden, z.B. wenn er in seinem eigenen Code einen Fehlerzustand eingeht (zum Beispiel bei der Bearbeitung eines ungültigen vom Iterator erzeugten Wertes), sollte es die `return()` Methode am Iterator aufrufen, wenn eine vorhanden ist. Dies ermöglicht es dem Iterator, alle notwendigen Bereinigungen durchzuführen. Die `return()` Methode wird nur für vorzeitige Beendigungen aufgerufen — wenn `next()` `done: true` zurückgibt, wird die `return()` Methode nicht aufgerufen, in der Annahme, dass der Iterator bereits bereinigt wurde.

Die `return()` Methode könnte auch ungültig sein! Die Sprache erzwingt auch, dass die `return()` Methode ein Objekt zurückgeben muss und wirft einen TypeError, falls dies nicht der Fall ist. Wenn die `return()` Methode einen Fehler auslöst, wird der Fehler an den Anrufer weitergegeben. Wenn jedoch die `return()` Methode aufgerufen wird, weil der Anrufer einen Fehler in seinem eigenen Code festgestellt hat, dann überschreibt dieser Fehler den von der `return()` Methode ausgelösten Fehler.

In der Regel implementiert der Anrufer die Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` wird in der Lage sein, Fehler zu fangen, die auftreten, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (falls die `for` Schleife vorzeitig abbricht) und wenn der Körper der `for` Schleife einen Fehler auslöst.

Die meisten Iteratoren werden mithilfe von Generatorfunktionen implementiert, daher zeigen wir, wie Generatorfunktionen typischerweise Fehler behandeln:

```js
function* gen() {
  try {
    yield doSomething();
    yield doSomethingElse();
  } finally {
    cleanup();
  }
}
```

Das Fehlen eines `catch` hier bewirkt, dass die von `doSomething()` oder `doSomethingElse()` ausgelösten Fehler an den Anrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenfalls ratsam ist), kann die Generatorfunktion entscheiden, weiter Werte zu erzeugen oder frühzeitig zu beenden. Der `finally` Block ist jedoch notwendig für Generatoren, die offene Ressourcen behalten. Der `finally` Block wird entweder ausgeführt, wenn der letzte `next()` aufgerufen wird, oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxen umwickeln einen Iterator in einen anderen Iterator. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umwickelte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Anrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten direkt die `next()` Methode des inneren Iterators weiter, einschließlich seines Rückgabewerts und ausgelöster Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen direkt die `return()` Methode des inneren Iterators weiter. Falls die `return()` Methode beim inneren Iterator nicht vorhanden ist, wird stattdessen `{ done: true, value: undefined }` zurückgeben. Bei den Iterator-Helfern: wenn die `next()` Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` beim inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies stimmt mit Generatorfunktionen überein, bei denen die Ausführung noch nicht in den `yield*` Ausdruck eingetreten ist.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()` Methode des inneren Iterators weitergibt. Weitere Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()` und `throw()` Methoden weitergibt, finden Sie in der eigenen Referenz.

## Beispiele

### Vom Benutzer definierte Iterables

Sie können Ihre eigenen Iterables wie folgt erstellen:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...myIterable]); // [1, 2, 3]
```

### Grundlegender Iterator

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie es nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), möchten Sie wahrscheinlich den Zustand in einer Closure kapseln.

```js
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### Unendlicher Iterator

```js
function idMaker() {
  let index = 0;
  return {
    next() {
      return {
        value: index++,
        done: false,
      };
    },
  };
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### Definieren eines Iterables mit einem Generator

```js
function* makeGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### Definieren eines Iterables mit einer Klasse

Zustandskapselung kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) durchgeführt werden.

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      // Note: using an arrow function allows `this` to point to the
      // one of `[Symbol.iterator]()` instead of `next()`
      next: () => {
        if (index < this.#data.length) {
          return { value: this.#data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

### Überschreiben von eingebauten Iterables

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

Der [Standard-Iterator von String](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) gibt die Codepunkte des Strings einzeln zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten neu definieren, indem Sie Ihren eigenen `[Symbol.iterator]()` bereitstellen:

```js
// need to construct a String object explicitly to avoid auto-boxing
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next() {
      return this._first
        ? { value: "bye", done: (this._first = false) }
        : { done: true };
    },
    _first: true,
  };
};
```

Beachten Sie, wie die Neudefinition von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen beim Iterieren

Fast alle Iterables haben dieselbe zugrundeliegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, an dem die Iteration beginnt. Stattdessen behalten sie einen Zeiger und bewegen ihn herum. Wenn Sie also Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie die Sammlung durchlaufen, können Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich, wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterativen_methods) funktionieren.

Betrachten Sie den folgenden Fall unter Verwendung eines [`URLSearchParams`](/de/docs/Web/API/URLSearchParams):

```js
const searchParams = new URLSearchParams(
  "deleteme1=value1&key2=value2&key3=value3",
);

// Delete unwanted keys
for (const [key, value] of searchParams) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    searchParams.delete(key);
  }
}

// Output:
// deleteme1
// key3
```

Beachten Sie, dass er nie `key2` protokolliert. Dies liegt daran, dass ein `URLSearchParams` im Wesentlichen eine Liste von Schlüssel-Werte-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, so dass `key2` die Position einnimmt, die `deleteme1` vorher hatte, und wenn der Zeiger zum nächsten Schlüssel wechselt, landet er auf `key3`.

Bestimmte Implementierungen von Iterables vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um das Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code unter Verwendung einer `Map`:

```js
const myMap = new Map([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

for (const [key, value] of myMap) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myMap.delete(key);
  }
}

// Output:
// deleteme1
// key2
// key3
```

Beachten Sie, dass er alle Schlüssel protokolliert. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

```js
const tombstone = Symbol("tombstone");

class MyIterable {
  #data;
  constructor(data) {
    this.#data = data;
  }
  delete(deletedKey) {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i][0] === deletedKey) {
        this.#data[i] = tombstone;
        return true;
      }
    }
    return false;
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i] !== tombstone) {
        yield this.#data[i];
      }
    }
  }
}

const myIterable = new MyIterable([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
for (const [key, value] of myIterable) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myIterable.delete(key);
  }
}
```

> [!WARNING]
> Gleichzeitige Änderungen im Allgemeinen sind sehr fehleranfällig und verwirrend. Es sei denn, Sie wissen genau, wie das Iterable implementiert ist, ist es am besten, die Sammlung während des Iterierens nicht zu ändern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
