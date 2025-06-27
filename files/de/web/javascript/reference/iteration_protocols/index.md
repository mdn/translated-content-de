---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: d5be633656b10c913eb9a1db4fb5c59acfdcb86c
---

{{jsSidebar("Mehr")}}

**Iteraktionsprotokolle** sind keine neuen eingebauten Funktionen oder Syntaxen, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** erlaubt es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, z. B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie z.B. {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, die über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt durchlaufen werden muss (wie z.B. am Anfang einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()` Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu durchlaufenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Funktion ohne Argumente aufgerufen wird, sie als Methode auf dem iterierbaren Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen, um zu entscheiden, was während der Iteration bereitgestellt wird.

Diese Funktion kann eine gewöhnliche Funktion sein oder eine Generatorfunktion, so dass beim Aufruf ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mit `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine standardisierte Methode, um eine Sequenz von Werten (entweder endlich oder unendlich) zu erzeugen und möglicherweise einen Rückgabewert, wenn alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`** Methode mit folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht (siehe unten). Wenn ein Wert, der kein Objekt ist, zurückgegeben wird (wie `false` oder `undefined`), wenn eine eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das das `IteratorResult`-Interface implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}
  - : Ein boolescher Wert, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Das ist gleichbedeutend damit, die `done`-Eigenschaft überhaupt nicht anzugeben.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall spezifiziert `value` optional den Rückgabewert des Iterators.

- `value` {{optional_inline}}
  - : Jeder beliebige JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis sind beide Eigenschaften nicht streng erforderlich; wenn ein Objekt ohne beide Eigenschaften zurückgegeben wird, entspricht das effektiv `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf der Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der dem Methodenrumpf zur Verfügung gestellt wird. Keine eingebaute Sprachfunktion wird irgendeinen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer mit der Iteration fertig ist und alle notwendigen Aufräumarbeiten durchführen kann (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `value` gleich dem übergebenen Wert und `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer keine weiteren `next()`-Aufrufe vornehmen möchte und alle Aufräummaßnahmen durchgeführt werden können. Wenn eingebaute Sprachfunktionen `return()` für Aufräumarbeiten aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlzustand erkennt, und `exception` ist typischerweise eine {{jsxref("Error")}}-Instanz. Keine eingebaute Sprachfunktion ruft `throw()` für Aufräumzwecke auf — es ist eine besondere Funktion von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, rückblickend (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterierbar zu machen: implementieren Sie einfach eine `[Symbol.iterator]()`-Methode, die `this` zurückgibt.

```js
// Satisfies both the Iterator Protocol and Iterable
const myIterator = {
  next() {
    // …
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die Iterables erwarten — daher ist es selten sinnvoll, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, keine _Iteratoren_.) Das [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode als `this` zurückgebend implementiert, so dass eingebaute Iteratoren ebenfalls iterierbar sind.

Es ist jedoch, wenn möglich, besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von vorne beginnen, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) es tut.

## Die asynchronen Iterator- und Iterable-Protokolle

Es gibt ein weiteres Paar von Protokollen, die für die asynchrone Iteration verwendet werden und als **asynchrone Iterator**- und **asynchrone Iterable**-Protokolle bezeichnet werden. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterierbaren und Iterator-Protokollen, außer dass jeder Rückgabewert aus den Aufrufen der Iterator-Methoden in einem Promise verpackt ist.

Ein Objekt implementiert das asynchrone Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselbe Semantik wie bei denen des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselbe Semantik wie bei denen des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselbe Semantik wie bei denen des synchronen Iterators.

## Interaktionen zwischen der Sprache und Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben durch [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Darüber hinaus sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls Iterables.
Es gibt kein Objekt in der JavaScript-Kernsprache, das asynchron iterierbar ist. Einige Web-APIs, wie [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die von eingebauten Iterables zurückgegebenen Iteratoren erben alle tatsächlich von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die erwähnte Methode `[Symbol.iterator]() { return this; }` implementiert, die sie alle zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) zusätzlich zur `next()`-Methode, die das Iterator-Protokoll erfordert. Sie können die Prototyp-Kette eines Iterators untersuchen, indem Sie sie in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameterverbreitung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator durchlaufen, und das letzte Ergebnis `done` ist `false` (d.h. der Iterator ist in der Lage, mehr Werte zu erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, wenn vorhanden. Dies kann zum Beispiel passieren, wenn ein `break` oder `return` in einer `for...of`-Schleife auftritt, oder wenn alle Bezeichner bereits in einem Array-Destructuring gebunden sind.

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

Die Schleife [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Verbreitung, etc. auf einem asynchronen Iterable, das nicht gleichzeitig ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), wird einen TypeError auslösen: x ist nicht iterierbar.

## Fehlerbehandlung

Da die Iteration die Kontrolle zwischen dem Iterator und dem Verbraucher hin- und herüberträgt, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Verbraucher mit vom Iterator ausgelösten Fehlern umgeht und wie der Iterator mit vom Verbraucher ausgelösten Fehlern umgeht. Wenn Sie eine der eingebauten Iterationsmethoden verwenden, kann die Sprache auch Fehler werfen, da das Iterable bestimmte {{Glossary("invariant", "Invarianten")}} verletzt. Wir beschreiben, wie eingebettete Syntaxen Fehler generieren und behandeln, die als Richtlinie für Ihren eigenen Code verwendet werden können, wenn Sie den Iterator manuell schrittweise durchlaufen.

### Nicht wohlgeformte Iterables

Beim Abrufen des Iterators aus dem Iterable können Fehler auftreten. Die an dieser Stelle erzwungene Sprachinvariante ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Bei der Verwendung einer eingebauten Syntax zur Initiierung der Iteration auf einem nicht gut geformten Iterable wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn die `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript darauf zurück, die `[Symbol.iterator]`-Eigenschaft stattdessen zu verwenden (und den resultierenden Iterator in einen asynchronen Iterator zu wickeln, indem die Methoden [weitergeleitet](#weiterleiten_von_fehlern) werden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann verhindert werden, indem zuerst das Iterable validiert wird, bevor versucht wird es zu iterieren. Es ist jedoch ziemlich selten, da Sie normalerweise die Art des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weitergeben, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator (Aufruf von `next()`) durchlaufen wird. Die hier erzwungene Sprachinvariante ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Warten). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler wirft (für asynchrone Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergegeben. Für eingebaute Syntaxen wird die laufende Iteration ohne erneuten Versuch oder Aufräumarbeiten abgebrochen (mit der Annahme, dass, wenn die `next()`-Methode den Fehler geworfen hat, sie bereits aufgeräumt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und erneut `next()` aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer aus einem anderen Grund als den vorhergehenden Fehlern entschieden hat, die Iteration zu beenden, wie zum Beispiel, wenn er einen Fehlerzustand in seinem eigenen Code eingeht (z. B. beim Umgang mit einem ungültigen vom Iterator erzeugten Wert), sollte er die `return()`-Methode des Iterators aufrufen, wenn eine existiert. Dies ermöglicht es dem Iterator, alle Aufräumarbeiten durchzuführen. Die `return()`-Methode wird nur bei vorzeitigen Beendigungen aufgerufen — wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte ebenfalls ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgibt und wirft einen TypeError, andernfalls. Wenn die `return()`-Methode einen Fehler wirft, wird der Fehler an den Aufrufer weitergegeben. Wenn jedoch die `return()`-Methode aufgerufen wurde, weil der Aufrufer in seinem eigenen Code einen Fehler festgestellt hat, überschreibt dieser Fehler den Fehler, der von der `return()`-Methode geworfen wurde.

Üblicherweise implementiert der Aufrufer die Fehlerbehandlung folgendermaßen:

```js
try {
  for (const value of iterable) {
    // …
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` kann Fehler abfangen, die auftreten, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (wenn die `for`-Schleife frühzeitig beendet wird), und wenn der Rumpf der `for`-Schleife einen Fehler wirft.

Die meisten Iteratoren werden mit Generatorfunktionen implementiert, daher demonstrieren wir, wie Generatorfunktionen typischerweise Fehler behandeln:

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

Das Fehlen von `catch` hier führt dazu, dass vom `doSomething()` oder `doSomethingElse()` geworfene Fehler an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenso ratsam ist), kann die Generatorfunktion entscheiden, ob sie weiterhin Werte generiert oder frühzeitig beendet wird. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen behalten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Weiterleiten von Fehlern

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen Iterator. Dazu gehören der vom {{jsxref("Iterator.from()")}} zurückgegebene Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) über synchronen Iteratoren verwenden. Der umwickelte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten direkt die `next()`-Methode des inneren Iterators weiter, einschließlich seines Rückgabewertes und ausgelöster Fehler.
- Wrapper-Iteratoren leiten in der Regel direkt die `return()`-Methode des inneren Iterators weiter. Wenn die `return()`-Methode am inneren Iterator nicht vorhanden ist, wird stattdessen `{ done: true, value: undefined }` zurückgegeben. Im Fall von Iterator-Helfern: wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator immer `{ done: true, value: undefined }` zurück, nachdem er versucht hat, `return()` am inneren Iterator aufzurufen. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck noch nicht erreicht hat.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Für Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, siehe seine eigene Referenz.

## Beispiele

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

console.log([...myIterable]); // [1, 2, 3]
```

### Einfacher Iterator

Iteratoren sind ihrer Natur nach zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), möchten Sie möglicherweise den Zustand in einer Closure kapseln.

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
// …
```

### Definition eines Iterables mit einem Generator

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
// …
```

### Definition eines Iterables mit einer Klasse

Die Zustandkapselung kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erfolgen.

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
        if (index >= this.#data.length) {
          return { done: true };
        }
        return { value: this.#data[index++], done: false };
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

### Überschreiben eingebauter Iterables

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String`'s [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) gibt die Codepunkte des Strings, einen nach dem anderen, zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten durch Bereitstellung des eigenen `[Symbol.iterator]()` neu definieren:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstruktionen, die das Iterationsprotokoll verwenden, beeinflusst:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen beim Iterieren

Fast alle Iterables haben dasselbe zugrunde liegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, zu dem die Iteration beginnt. Vielmehr behalten sie einen Zeiger und bewegen ihn herum. Wenn Sie also Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie die Sammlung durchlaufen, könnten Sie ungewollt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich wie bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

Betrachten Sie diesen Fall mit einem [`URLSearchParams`](/de/docs/Web/API/URLSearchParams):

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

Beachten Sie, dass `key2` niemals protokolliert wird. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, so dass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn der Zeiger zum nächsten Schlüssel geht, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um ein Verschieben der verbleibenden Werte zu verhindern. Betrachten Sie den ähnlichen Code mit einer `Map`:

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

Beachten Sie, dass alle Schlüssel protokolliert werden. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

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
    for (const data of this.#data) {
      if (data !== tombstone) {
        yield data;
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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es ist am besten, Änderungen in der Sammlung zu vermeiden, während Sie sie durchlaufen, es sei denn, Sie wissen genau, wie das Iterable implementiert ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
