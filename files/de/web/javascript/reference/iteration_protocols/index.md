---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Mehr")}}

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntax, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** erlaubt es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, z.B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) es nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, die über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt durchlaufen werden muss (z.B. am Anfang einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die Werte zu erhalten, die durchlaufen werden sollen.

Beachten Sie, dass wenn diese Methode ohne Argumente aufgerufen wird, sie als Methode des iterierbaren Objekts aufgerufen wird. Daher kann in der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt wird.

Diese Funktion kann eine normale Funktion oder eine Generatorfunktion sein, sodass beim Aufruf ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mit `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine standardisierte Methode, um eine Sequenz von Werten (entweder endlich oder unendlich) zu erzeugen, und potenziell einen Rückgabewert, wenn alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein nicht-objekthafter Wert zurückgegeben wird (wie `false` oder `undefined`), während eine eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) müssen ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}
  - : Ein Boolean, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies entspricht dem vollständigen Fehlen der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder von JavaScript zurückgegebene Wert des Iterators. Kann ausgelassen werden, wenn `done` `true` ist.

In der Praxis sind weder die `done`- noch die `value`-Eigenschaft streng erforderlich; wenn ein Objekt ohne eine dieser Eigenschaften zurückgegeben wird, ist es effektiv gleichbedeutend mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird von allen nachfolgenden Aufrufen von `next()` ebenfalls erwartet, dass sie `done: true` zurückgeben, obwohl dies nicht auf Sprachebene erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der im Methodenrumpf verfügbar gemacht wird. Keine eingebaute Sprachfunktion wird irgendeinen Wert übergeben. Der Wert, der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergeben wird, wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die **`return(value)`**- und **`throw(exception)`**-Methoden implementieren, die, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer mit der Iteration fertig ist und er alle notwendigen Aufräumarbeiten durchführen kann (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer nicht vorhat, weitere `next()`-Aufrufe zu tätigen, und alle Aufräumaktionen durchführen kann. Wenn eingebaute Sprachfunktionen `return()` für Aufräumarbeiten aufrufen, ist der `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist typischerweise eine {{jsxref("Error")}}-Instanz. Keine eingebaute Sprachfunktion ruft `throw()` für Aufräumzwecke auf — es ist eine spezielle Funktionalität von Generatoren zur Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflexiv (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) festzustellen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

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

Ein solches Objekt wird als ein _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator durch die verschiedenen Syntaxen konsumiert werden, die Iterables erwarten — daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, nicht _Iteratoren_.) Das [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, welches die `[Symbol.iterator]()`-Methode so implementiert, dass `this` zurückgegeben wird, sodass eingebaute Iteratoren ebenfalls iterierbar sind.

Es ist jedoch, wenn möglich, besser, dass `iterable[Symbol.iterator]()` unterschiedliche Iteratoren zurückgibt, die immer von vorne beginnen, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) dies tut.

## Die async Iterator und async Iterable Protokolle

Es gibt noch ein weiteres Paar von Protokollen für asynchrone Iteration, genannt **async Iterator** und **async Iterable** Protokolle. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterierbaren und Iterator-Protokollen, außer dass jeder Rückgabewert der Aufrufe der Iterator-Methoden in ein Promise eingeschlossen ist.

Ein Objekt implementiert das async Iterable Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Null-Argument-Funktion, die ein Objekt zurückgibt, das dem async Iterator Protokoll entspricht.

Ein Objekt implementiert das async Iterator Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables und Iteratoren erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Darüber hinaus sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) auch Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das async Iterable ist. Einige Web-APIs, wie [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generat Funktionen (Generator functions)](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generat Funktionen (Async generator functions)](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [async Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die async iterierbare Iteratoren sind.

Die von eingebauten Iterables zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die oben genannte `[Symbol.iterator]() { return this; }`-Methode implementiert und sie alle zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet zusätzlich zu der `next()`-Methode, die von dem Iterator-Protokoll verlangt wird, zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods). Sie können die Prototypenkette eines Iterators inspizieren, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, beispielsweise die {{jsxref("Statements/for...of", "for...of")}} Schleifen, [Array- und Parameterspreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` `false` ist (d.h. der Iterator ist in der Lage, mehr Werte zu erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann zum Beispiel passieren, wenn ein `break` oder `return` in einer `for...of`-Schleife auftritt oder wenn alle Bezeichner bereits in einem Array Destructuring gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht in [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, um mit async Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading usw. auf einem async Iterable, das nicht auch ein sync Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), führt zu einem TypeError: x is not iterable.

## Fehlerbehandlung

Da die Iteration die Kontrolle zwischen dem Iterator und dem Verbraucher hin und her überträgt, erfolgt die Fehlerbehandlung in beiden Richtungen: Wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Methoden der Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte {{Glossary("invariant", "Invarianten")}} verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler generieren und behandeln, die als Richtlinie für Ihren eigenen Code verwendet werden können, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterables

Fehler können auftreten, wenn der Iterator vom Iterable bezogen wird. Die hier durchgesetzte Sprachinvarianz ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine callable `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine callable `next()`-Methode.

Wenn beim Initiieren einer Iteration auf einem nicht wohlgeformten Iterable mit eingebauter Syntax ein TypeError auftritt, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für async Iterables, wenn seine `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript darauf zurück, die `[Symbol.iterator]`-Eigenschaft stattdessen zu verwenden (und umschließt den resultierenden Iterator in einen async Iterator, indem es die Methoden [weiterleitet](#fehlerweiterleitung)). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den obigen Invarianten entsprechen.

Diese Art von Fehlern kann vermieden werden, indem das Iterable validiert wird, bevor es versucht wird, es zu iterieren. Es ist jedoch ziemlich selten, da Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer propagieren lassen, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator durchlaufen wird (bei Aufrufen von `next()`). Die durchgesetzte Sprachinvariante hier ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für async Iteratoren ein Objekt nach Erwartung). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler wirft (für async Iteratoren kann es auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer propagiert. Für eingebaute Syntaxen wird die Iteration abgebrochen, ohne es erneut zu versuchen oder aufzuräumen (mit der Annahme, dass die `next()`-Methode den Fehler geworfen hat und bereits aufgeräumt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und erneut versuchen, `next()` aufzurufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer aus irgendeinem Grund, der nicht in den vorherigen Absätzen genannten Fehlern entspricht, aus der Iteration austreten möchte, z.B. wenn er in seinem eigenen Code in einen Fehlerzustand gerät (zum Beispiel beim Umgang mit einem ungültigen Wert, der vom Iterator erzeugt wurde), sollte er die `return()`-Methode des Iterators aufrufen, falls eine existiert. Dadurch kann der Iterator alle Bereinigungen vornehmen. Die `return()`-Methode wird nur bei vorzeitigem Beenden aufgerufen — wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, in der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache setzt ebenfalls durch, dass die `return()`-Methode ein Objekt zurückgeben muss und wirft einen TypeError, wenn nicht. Wenn die `return()`-Methode einen Fehler wirft, wird der Fehler an den Aufrufer weitergegeben. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer einen Fehler in seinem eigenen Code festgestellt hat, dann überschreibt dieser Fehler den von der `return()`-Methode ausgelösten Fehler.

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

Das `catch` wird in der Lage sein, Fehler abzufangen, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (wenn die `for`-Schleife vorzeitig endet) und wenn der `for`-Schleifenrumpf einen Fehler wirft.

Die meisten Iteratoren werden mit Generatorfunktionen implementiert, daher demonstrieren wir hier, wie Generatorfunktionen typischerweise Fehler behandeln:

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

Das Fehlen von `catch` hier führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenfalls ratsam ist), kann die Generatorfunktion entscheiden, weiterhin Werte zu `yielden` oder frühzeitig auszusteigen. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen halten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn der letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxelemente umschließen einen Iterator in einen anderen Iterator. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie async Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umschlossene Iterator ist dann verantwortlich für das Weiterleiten von Fehlern zwischen dem inneren Iterator und dem Aufrufer.

- Alle Wrapper-Iteratoren leiten direkt die `next()`-Methode des inneren Iterators weiter, einschließlich seines Rückgabewerts und geworfener Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht existiert, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Fall von Iterator-Helfern: Wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator immer `{ done: true, value: undefined }` zurück, nachdem versucht wurde, `return()` auf dem inneren Iterator aufzurufen. Dies ist konsistent mit Generatorfunktionen, bei denen der Ausführung noch nicht in den `yield*`-Ausdruck eingetreten ist.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Für Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, siehe dessen eigene Referenz.

## Beispiele

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

console.log([...myIterable]); // [1, 2, 3]
```

### Basis-Iterator

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie es nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), möchten Sie wahrscheinlich den Zustand in einem Abschluss kapseln.

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

Zustandskapselung kann auch mit [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) erfolgen.

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

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String`'s [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) gibt die Codepunkte des Strings nacheinander zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten neu definieren, indem Sie einen eigenen `[Symbol.iterator]()` bereitstellen:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitig Modifikationen beim Iterieren

Fast alle Iterables haben dieselbe zugrunde liegende Semantik: Sie kopieren die Daten nicht, wenn die Iteration startet. Stattdessen behalten sie einen Zeiger und bewegen ihn. Daher kann es, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie über die Sammlung iterieren, dazu kommen, dass _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich wie bei [Iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

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

Beachten Sie, wie es `key2` nie protokolliert. Dies liegt daran, dass ein `URLSearchParams` unterliegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` inne hatte, und wenn der Zeiger auf den nächsten Schlüssel verschoben wird, landet er auf `key3`.

Bestimmte Implementierungen von Iterables vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um das Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code mit einer `Map`:

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

Beachten Sie, wie alle Schlüssel protokolliert werden. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie möchten, dass etwas Ähnliches implementiert wird, hier ist, wie es aussehen könnte:

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
> Gleichzeitige Modifikationen sind im Allgemeinen sehr fehleranfällig und verwirrend. Wenn Sie nicht genau wissen, wie das Iterable implementiert ist, ist es am besten, Änderungen an der Sammlung während der Iteration zu vermeiden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
