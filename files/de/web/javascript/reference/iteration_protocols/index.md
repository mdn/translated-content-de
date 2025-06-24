---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{jsSidebar("More")}}

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntaxen, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** erlaubt es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, wie zum Beispiel welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem standardmäßigen Iterationsverhalten, wie zum Beispiel {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) es nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die **`[Symbol.iterator]()`**-Methode implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, der über das konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (zum Beispiel am Anfang einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die darzustellenden Werte zu erhalten.

Beachten Sie, dass diese Funktion ohne Argumente als Methode auf dem iterierbaren Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen, um zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine normale Funktion sein, oder sie kann eine Generatorfunktion sein, so dass beim Aufrufen ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag durch die Verwendung von `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine standardisierte Methode, um eine Sequenz von Werten (entweder endlich oder unendlich) zu erzeugen und möglicherweise einen Rückgabewert, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein nicht-Objekt-Wert zurückgegeben wird (wie `false` oder `undefined`), während ein eingebautes Sprachfeature (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollten ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein boolescher Wert, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies entspricht dem vollständigen Weglassen der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder von dem Iterator zurückgegebene JavaScript-Wert. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis ist keine Eigenschaft strikt erforderlich; wenn ein Objekt ohne eine der beiden Eigenschaften zurückgegeben wird, ist es effektiv gleichbedeutend mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der im Methodenrumpf verfügbar gemacht wird. Kein eingebautes Sprachfeature wird einen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die **`return(value)`**- und **`throw(exception)`**-Methoden implementieren, die, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer mit der Iteration fertig ist und alle notwendigen Aufräumarbeiten (wie das Schließen von Datenbankverbindungen) durchführen kann.

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value`, das dem übergebenen `value` entspricht, und `done`, das `true` ist. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer keine weiteren `next()`-Aufrufe beabsichtigt und Aufräumaktionen ausführen kann. Wenn eingebaute Sprachfeatures `return()` für Aufräumarbeiten aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done`, das `true` ist. Die Methode teilt dem Iterator mit, dass der Aufrufer eine Fehlersituation erkannt hat, und `exception` ist typischerweise eine Instanz von {{jsxref("Error")}}. Kein eingebautes Sprachfeature ruft `throw()` für Aufräumzwecke auf — es ist eine spezielle Funktion der Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, spiegelbezogen (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu erkennen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterierbar zu machen: Implementieren Sie einfach eine `[Symbol.iterator]()`-Methode, die `this` zurückgibt.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen verzehrt werden, die _iterables_ erwarten — daher ist es selten nützlich, nur das Iterator-Protokoll zu implementieren, ohne auch das iterierbare Protokoll zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _iterables_, nicht _iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die Methode `[Symbol.iterator]()` als `this` zurückgebend implementiert, sodass eingebaute Iteratoren ebenfalls iterierbar sind.

Jedoch ist es, wenn möglich, besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von Anfang an starten, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) es tut.

## Die Protokolle für asynchrone Iteratoren und asynchrone Iterables

Es gibt ein weiteres Paar von Protokollen für die asynchrone Iteration, genannt **asynchrones Iteratoren**- und **asynchrones Iterable**-Protokolle. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterierbaren und Iteratoren-Protokollen, außer dass jeder Rückgabewert der Aufrufe der Iterator-Methoden in einem Promise eingepackt ist.

Ein Objekt implementiert das asynchrone Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables erzeugen oder verbrauchen.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segmente`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, da jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Zusätzlich sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls iterierbar.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterierbar ist. Einige Web-APIs, wie [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben standardmäßig die `Symbol.asyncIterator`-Methode gesetzt.

[Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die Iteratoren, die von eingebauten Iterables zurückgegeben werden, erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die oben genannte Methode `[Symbol.iterator]() { return this; }` implementiert, was sie alle zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet auch zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) zusätzlich zu der `next()`-Methode, die vom Iterator-Protokoll erforderlich ist. Sie können die Prototypenkette eines Iterators inspizieren, indem Sie ihn in einer grafischen Konsole protokollieren.

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

### Eingebauter APIs, die Iterables akzeptieren

Es gibt viele APIs, die Iterables akzeptieren. Einige Beispiele umfassen:

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` `false` ist (d.h. der Iterator kann mehr Werte produzieren), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann zum Beispiel passieren, wenn eine `break`- oder `return`-Anweisung in einer `for...of`-Schleife auftritt oder wenn alle Bezeichner in einem Array-Destructuring bereits gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, um mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), wird einen TypeError werfen: x ist nicht iterierbar.

## Fehlerbehandlung

Da die Iteration mit sich bringt, dass die Kontrolle zwischen dem Iterator und dem Verbraucher hin- und herwechselt, geschieht die Fehlerbehandlung in beide Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Möglichkeiten der Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte Invarianten bricht. Wir werden beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, die als Richtlinie für Ihren eigenen Code verwendet werden können, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterables

Fehler können auftreten, wenn der Iterator vom Iterable erworben wird. Die Sprachinvariante, die hier durchgesetzt wird, ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Wenn eingebaute Syntaxen verwendet werden, um die Iteration auf einem nicht wohlgeformten Iterable zu initiieren, wird ein TypeError geworfen.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn ihre `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript auf die Verwendung der `[Symbol.iterator]`-Eigenschaft zurück (und wickelt den resultierenden Iterator in einen asynchronen Iterator ein, indem die Methoden [weitergeleitet](#fehlerweiterleitung) werden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann vermieden werden, indem das Iterable zuerst validiert wird, bevor versucht wird, es zu iterieren. Es ist jedoch ziemlich selten, weil Sie in der Regel den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach zum Aufrufer propagieren lassen, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator weitergeschaltet wird (wenn `next()` aufgerufen wird). Die Sprachinvariante, die hier durchgesetzt wird, ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Awaiting). Andernfalls wird ein TypeError geworfen.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler wirft (bei asynchronen Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler zum Aufrufer weitergeleitet. Bei eingebauten Syntaxen wird die in Bearbeitung befindliche Iteration ohne Wiederholung oder Bereinigung abgebrochen (mit der Annahme, dass die `next()`-Methode bereits aufgeräumt hat, wenn sie den Fehler geworfen hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und erneut `next()` aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn sich der Aufrufer aus irgendeinem anderen Grund als den Fehlern im vorherigen Absatz dazu entscheidet, die Iteration zu beenden, zum Beispiel wenn er in seinem eigenen Code in einen Fehlerzustand gerät (zum Beispiel beim Umgang mit einem ungültigen vom Iterator erzeugten Wert), sollte er die `return()`-Methode des Iterators aufrufen, falls vorhanden. Dies ermöglicht es dem Iterator, alle Aufräumarbeiten durchzuführen. Die `return()`-Methode wird nur bei vorzeitigem Verlassen aufgerufen — wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, unter der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte ebenfalls ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgegeben muss und wirft andernfalls einen TypeError. Wenn die `return()`-Methode einen Fehler wirft, wird der Fehler an den Aufrufer weitergegeben. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer in seinem eigenen Code auf einen Fehler gestoßen ist, dann wird dieser Fehler den von der `return()`-Methode geworfenen Fehler überschreiben.

Normalerweise implementiert der Aufrufer die Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // …
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` kann Fehler abfangen, die geworfen werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (wenn die `for`-Schleife frühzeitig endet) und wenn der Körper der `for`-Schleife einen Fehler wirft.

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

Das Fehlen von `catch` hier verursacht, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` propagiert werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenso ratsam ist), kann die Generatorfunktion entscheiden, weiterhin Werte zu erzeugen oder vorzeitig zu beenden. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen behalten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen ein. Dazu gehören der Iterator, der durch {{jsxref("Iterator.from()")}} produziert wird, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und eine verborgene Einhüllung, wenn Sie eine asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der eingewickelte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich seines Rückgabewerts und geworfener Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode beim inneren Iterator nicht existiert, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Falle von Iterator-Hilfsmethoden: Wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck noch nicht betreten hat.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Für Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, siehe die eigene Referenz.

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

### Basis-Iterator

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), möchten Sie wahrscheinlich den Zustand in einem Closure kapseln.

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
// …
```

### Definieren eines Iterables mit einer Klasse

Die Zustandseinkapselung kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) durchgeführt werden.

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

### Überschreiben von eingebauten Iterables

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes Iterable-Objekt:

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

Sie können das Iterationsverhalten durch die Bereitstellung einer eigenen `[Symbol.iterator]()`-Methode neu definieren:

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

### Gleichzeitige Modifikationen beim Iterieren

Fast alle Iterables haben die gleiche zugrundeliegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, an dem die Iteration beginnt. Vielmehr behalten sie einen Zeiger und bewegen ihn herum. Daher, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie über die Sammlung iterieren, können Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) funktionieren.

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

Beachten Sie, wie es nie `key2` protokolliert. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, so dass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn sich der Zeiger auf den nächsten Schlüssel bewegt, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem durch Setzen von "Grabstein"-Werten, um zu vermeiden, die verbleibenden Werte zu verschieben. Betrachten Sie den ähnlichen Code mit einem `Map`:

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

Beachten Sie, wie es alle Schlüssel protokolliert. Das liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, sieht es möglicherweise so aus:

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
> Gleichzeitige Modifikationen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es sei denn, Sie wissen genau, wie das Iterable implementiert ist, ist es am besten, es zu vermeiden, die Sammlung zu ändern, während Sie über sie iterieren.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators and generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
