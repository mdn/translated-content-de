---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Mehr")}}

**Iterationsprotokolle** sind keine neuen integrierten Funktionen oder Syntaxe, sondern _Protokolle_. Diese Protokolle können von jedem Objekt durch Befolgen bestimmter Konventionen implementiert werden.

Es gibt zwei Protokolle: Das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iteratorprotokoll](#das_iteratorprotokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder zu ändern, wie etwa welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Itrationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, die über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iteratorprotokoll](#das_iteratorprotokoll) entspricht.

Immer wenn ein Objekt iteriert werden muss (z. B. am Anfang einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass diese Funktion ohne Argumente als Methode am iterierbaren Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine normale Funktion oder eine Generatorfunktion sein, sodass beim Aufrufen ein Iteratorobjekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag durch Verwendung von `yield` bereitgestellt werden.

## Das Iteratorprotokoll

**Das Iteratorprotokoll** definiert eine standardisierte Methode zur Erzeugung einer Wertefolge (entweder endlich oder unendlich) und möglicherweise eines Rückgabewertes, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht (siehe unten). Wenn bei Verwendung eines eingebauten Sprachfeatures (wie `for...of`) ein nicht-Objekt-Wert (wie `false` oder `undefined`) von `next()` zurückgegeben wird, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iteratorprotokolls (`next()`, `return()` und `throw()`) sollen ein Objekt zurückgeben, das das `IteratorResult`-Interface implementiert. Es muss die folgenden Eigenschaften enthalten:

- `done` {{optional_inline}}

  - : Ein Boolescher Wert, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies ist äquivalent dazu, die `done`-Eigenschaft überhaupt nicht anzugeben.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Ein beliebiger JavaScript-Wert, der vom Iterator zurückgegeben wurde. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis ist keine der Eigenschaften strikt erforderlich; wenn ein Objekt ohne eine der Eigenschaften zurückgegeben wird, entspricht es effektiv `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, sollten alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies nicht auf Sprachebene erzwungen wird.

Die `next`-Methode kann einen Wert erhalten, der im Methodenrumpf verfügbar gemacht wird. Kein eingebautes Sprachfeature wird einen Wert übergeben. Der übergebene Wert an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die beim Aufrufen dem Iterator mitteilen, dass der Aufrufer das Iterieren beendet hat und alle notwendigen Aufräumaktionen durchführen kann (z. B. das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Der Aufruf dieser Methode signalisiert dem Iterator, dass der Aufrufer keine weiteren `next()`-Aufrufe beabsichtigt und alle Aufräumaktionen durchführen kann. Wenn eingebaute Sprachfeatures `return()` für Aufräumarbeiten aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `done` gleich `true`. Der Aufruf dieser Methode signalisiert dem Iterator, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist typischerweise eine {{jsxref("Error")}}-Instanz. Kein eingebautes Sprachfeature ruft `throw()` für Aufräumzwecke auf — es ist eine spezielle Funktion von Generatoren zur Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, durch Reflektion (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das Iteratorprotokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterierbar zu machen: Implementieren Sie einfach eine `[Symbol.iterator]()`-Methode, die `this` zurückgibt.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die Iterables erwarten – daher ist es selten nützlich, das Iteratorprotokoll zu implementieren, ohne auch das Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, nicht _Iteratoren_.) Das [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode implementiert, um `this` zurückzugeben, sodass eingebauter Iteratoren auch iterierbar sind.

Wo immer möglich, ist es jedoch besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von vorne beginnen, wie zum Beispiel [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).

## Die async-Iterator- und async-Iterable-Protokolle

Es gibt ein weiteres Paar von Protokollen zur asynchronen Iteration, genannt **async Iterator** und **async Iterable**-Protokolle. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den Iterable- und Iteratorprotokollen, außer dass jeder Rückgabewert von den Aufrufen der Iteratormethoden in einem Promise eingeschlossen ist.

Ein Objekt implementiert das async-Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem async-Iterator-Protokoll entspricht.

Ein Objekt implementiert das async-Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache definiert APIs, die entweder Iterables erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, da jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Zusätzlich sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das async iterierbar ist. Einige Web-APIs, wie etwa [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Async-Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [async-Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchron iterierbare Iteratoren sind.

Die Iteratoren, die von eingebauten Iterables zurückgegeben werden, erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die oben erwähnte `[Symbol.iterator]() { return this; }`-Methode implementiert, was sie alle zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet zusätzlich zu der `next()`-Methode, die vom Iteratorprotokoll verlangt wird, zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods). Sie können die Prototypen-Kette eines Iterators untersuchen, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameter-Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator durchlaufen und das letzte Ergebnis `done` `false` ist (d.h. der Iterator in der Lage ist, mehr Werte zu erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, wenn vorhanden. Dies kann zum Beispiel passieren, wenn ein `break` oder `return` in einer `for...of`-Schleife auftritt oder wenn alle Bezeichner in einem Array-Destructuring bereits gebunden sind.

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
console.log([b, c, d]); // [1, 2, undefined]; the value associated with `done: true` is not reachable

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [async-Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht in [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, um mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), wird einen TypeError: x is not iterable auslösen.

## Fehlerbehandlung

Da die Iteration die Kontrolle hin und her zwischen dem Iterator und dem Verbraucher überträgt, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator ausgelöst werden, und wie der Iterator Fehler behandelt, die vom Verbraucher ausgelöst werden. Wenn Sie einen der eingebauten Möglichkeiten der Iteration verwenden, kann die Sprache auch Fehler erzeugen, weil das Iterable bestimmte Invarianten verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, die als Richtlinie für Ihren eigenen Code verwendet werden können, wenn Sie den Iterator manuell durchlaufen.

### Nicht gut geformte Iterables

Fehler können auftauchen, wenn der Iterator aus dem Iterable erhalten wird. Die hier durchgesetzte Sprachinvariante ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Wenn eingebaute Syntax verwendet wird, um eine Iteration bei einem nicht gut geformten Iterable zu starten, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für async-Iterables, wenn ihre `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, greift JavaScript darauf zurück, die `[Symbol.iterator]`-Eigenschaft stattdessen zu verwenden (und umschließt den resultierenden Iterator in einen async-Iterator, indem die Methoden [weitergeleitet](#fehlerweiterleitung) werden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann verhindert werden, indem zuerst das Iterable validiert wird, bevor versucht wird, es zu durchlaufen. Es ist jedoch ziemlich selten, denn in der Regel wissen Sie, welchen Typ das Objekt hat, das Sie durchlaufen. Wenn Sie dieses Iterable aus einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weiterleiten, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten beim Aufrufen des Iterators (Aufruf von `next()`) auf. Die hier durchgesetzte Sprachinvariante ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für async-Iterators ein Objekt nach Awaiting). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler auslöst (bei async-Iterators kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergegeben. Bei eingebauten Syntaxen wird die laufende Iteration abgebrochen, ohne es erneut zu versuchen oder aufzuräumen (in der Annahme, dass die `next()`-Methode den Fehler bereits aufgeräumt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und den Aufruf von `next()` erneut versuchen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer aus irgendeinem anderen Grund als die in den vorherigen Absätzen genannten Fehler beschließt, die Iteration zu beenden, wie z. B. wenn er in seiner eigenen Logik in einen Fehlerzustand gerät (z. B. beim Umgang mit einem ungültigen Wert, der vom Iterator erzeugt wird), sollte er die `return()`-Methode des Iterators aufrufen, falls vorhanden. Dies ermöglicht es dem Iterator, alle nötigen Aufräumarbeiten durchzuführen. Die `return()`-Methode wird nur bei vorzeitigen Beendigungen aufgerufen – wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, in der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte ebenfalls ungültig sein! Die Sprache setzt auch durch, dass die `return()`-Methode ein Objekt zurückgeben muss und löst einen TypeError aus, wenn dies nicht der Fall ist. Wenn die `return()`-Methode einen Fehler auslöst, wird der Fehler an den Aufrufer weitergegeben. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer in seiner eigenen Logik auf einen Fehler gestoßen ist, überschreibt dieser Fehler den von der `return()`-Methode geworfenen Fehler.

Normalerweise implementiert der Aufrufer die Fehlerbehandlung so:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

Das `catch` fängt Fehler ab, die auftreten, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (wenn die `for`-Schleife frühzeitig endet) und wenn der Rumpf der `for`-Schleife einen Fehler auslöst.

Die meisten Iteratoren werden mit Generatorfunktionen implementiert, daher werden wir demonstrieren, wie Generatorfunktionen typischerweise Fehler behandeln:

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

Das Fehlen von `catch` hier führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` ausgelöst werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenso ratsam ist), kann die Funktion entscheiden, weiterhin Werte zu liefern oder frühzeitig zu beenden. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen verwalten. Der `finally`-Block wird garantiert entweder bei Aufruf des letzten `next()` oder bei Aufruf von `return()` ausgeführt.

### Fehlerweiterleitung

Einige eingebaute Syntaxen umschließen einen Iterator in einen anderen Iterator. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Hilfsmethoden für Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein verstecker Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umschlossene Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich seines Rückgabewerts und ausgelöster Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht existiert, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Fall von Iteratorhelfern: Wenn die `next()`-Methode des Iteratorhelfers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung noch nicht in den `yield*`-Ausdruck eingetreten ist.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen dazu, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die Methoden `return()` und `throw()` weiterleitet, finden Sie in seiner eigenen Referenz.

## Beispiele

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

console.log([...myIterable]); // [1, 2, 3]
```

### Einfacher Iterator

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

Die Zustandkapselung kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) durchgeführt werden.

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

Der [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) von `String` gibt die Codepunkte des Strings einzeln zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten durch die Bereitstellung einer eigenen `[Symbol.iterator]()` neu definieren:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstruktionen beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen bei der Iteration

Fast alle Iterables haben dasselbe zugrunde liegende Konzept: Sie kopieren die Daten nicht zu Beginn der Iteration. Stattdessen behalten sie einen Zeiger bei und bewegen ihn. Daher, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder ändern while sie über die Sammlung iterieren, können Sie unbeabsichtigt ändern, ob andere _ungeänderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich dazu, wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) funktionieren.

Betrachten Sie den folgenden Fall mit einem [`URLSearchParams`](/de/docs/Web/API/URLSearchParams):

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

Beachten Sie, wie `key2` nie protokolliert wird. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` vorher hatte, und wenn der Zeiger zum nächsten Schlüssel wechselt, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabsteine" setzen, um das Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code mit einer `Map`:

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

Beachten Sie, wie alle Schlüssel protokolliert werden. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Sofern Sie nicht genau wissen, wie das Iterable implementiert ist, sollten Sie es vermeiden, die Sammlung während der Iteration zu modifizieren.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators and generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
