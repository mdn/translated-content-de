---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntaxelemente, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem einige Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, z. B. welche Werte in einem {{jsxref("Statements/for...of", "for...of")}}-Konstrukt durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem standardmäßigen Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) nicht iterierbar sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, der über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (z. B. zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass diese Funktion ohne Argumente als Methode für das iterierbare Objekt aufgerufen wird. Daher kann das Schlüsselwort `this` innerhalb der Funktion verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu bestimmen, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine gewöhnliche Funktion sein oder sie kann eine Generatorfunktion sein, sodass bei ihrer Ausführung ein Iteratorobjekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag durch die Nutzung von `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine standardisierte Methode zur Erzeugung einer Folge von Werten (endlicher oder unendlicher), und potenziell einen Rückgabewert, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`** Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein nicht-objekthafter Wert (wie `false` oder `undefined`) zurückgegeben wird, während eine eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollten ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss über die folgenden Eigenschaften verfügen:

- `done` {{optional_inline}}
  - : Ein Boolean, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Folge zu erzeugen. (Dies entspricht dem Nicht-Spezifizieren der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Folge abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Ein beliebiger JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis sind weder die eine noch die andere Eigenschaft streng erforderlich; wenn ein Objekt ohne eine der beiden Eigenschaften zurückgegeben wird, ist es effektiv gleichwertig zu `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, sollten alle nachfolgenden Aufrufe von `next()` erwartet werden, `done: true` zurückzugeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der dem Methodenkörper zur Verfügung gestellt wird. Kein eingebautes Sprachmerkmal wird irgendeinen Wert übergeben. Der Wert, der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergeben wird, wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die **`return(value)`** und **`throw(exception)`** Methoden implementieren, die, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer mit dem Iterieren fertig ist und alle notwendigen Aufräumarbeiten (wie das Schließen von Datenbankverbindungen) durchführen kann.

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Das Aufrufen dieser Methode teilt dem Iterator mit, dass der Aufrufer nicht die Absicht hat, weitere `next()`-Aufrufe zu tätigen, und alle Aufräumaktionen durchführen kann. Wenn eingebaute Sprachmerkmale `return()` für Aufräumarbeiten aufrufen, ist `value` immer `undefined`.

- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done` gleich `true`. Das Aufrufen dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist typischerweise eine {{jsxref("Error")}}-Instanz. Kein eingebautes Sprachmerkmal ruft `throw()` für Aufräumzwecke auf - es ist ein spezielles Merkmal von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektiv (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterierbar zu machen: Einfach eine `[Symbol.iterator]()`-Methode implementieren, die `this` zurückgibt.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dies ermöglicht es einem Iterator, von den verschiedenen Syn­t­axen konsumiert zu werden, die Iterables erwarten – daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch Iterables zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, nicht _Iterators_.) Das [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

```js
const generatorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof generatorObject.next);
// "function" — it has a next method (which returns the right result), so it's an iterator

console.log(typeof generatorObject[Symbol.iterator]);
// "function" — it has a [Symbol.iterator] method (which returns the right iterator), so it's an iterable

console.log(generatorObject[Symbol.iterator]() === generatorObject);
// true — its [Symbol.iterator] method returns itself (an iterator), so it's an iterable iterator
```

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode implementiert, die `this` zurückgibt, so dass eingebaute Iteratoren ebenfalls iterierbar sind.

Es ist jedoch, wann immer möglich, besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von Anfang an beginnen, wie es [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die asynchronen Iterator- und Iterable-Protokolle

Es gibt ein weiteres Paar von Protokollen für die asynchrone Iteration, die als **asynchrone Iterator-** und **asynchrone Iterable-Protokolle** bekannt sind. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterierbaren und Iterator-Protokollen, mit der Ausnahme, dass jeder Rückgabewert von den Aufrufen der Iterator-Methoden in ein Promise eingeschlossen wird.

Ein Objekt implementiert das asynchrone Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables oder Iteratoren erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, da jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Zusätzlich sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) auch iterierbar. Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterierbar ist. Einige Web-APIs, wie [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die von eingebauten Iterables zurückgegebenen Iteratoren erben alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die erwähnte `[Symbol.iterator]() { return this; }`-Methode implementiert, wodurch sie alle iterierbare Iteratoren sind. Die `Iterator`-Klasse bietet zusätzlich zu der `next()`-Methode, die für das Iterator-Protokoll erforderlich ist, weitere [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods). Sie können die Prototypenkette eines Iterators überprüfen, indem Sie ihn in einer grafischen Konsole protokollieren.

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

### Syn­taxen, die Iterables erwarten

Einige Anweisungen und Ausdrücke erwarten Iterables, wie beispielsweise die {{jsxref("Statements/for...of", "for...of")}} Schleifen, [Array- und Parameterverbreitung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` ist `false` (d.h. der Iterator kann weitere Werte erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann zum Beispiel passieren, wenn ein `break` oder `return` in einer `for...of`-Schleife auftritt oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, mit asynchronen Iterables zu interagieren. Die Nutzung von `for...of`, Array-Spreading, usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`) wird einen TypeError verursachen: x ist nicht iterierbar.

## Fehlerbehandlung

Da die Iteration einen Kontrolltransfer zwischen dem Iterator und dem Verbraucher beinhaltet, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator ausgelöst werden, und wie der Iterator Fehler behandelt, die vom Verbraucher ausgelöst werden. Wenn Sie eine der eingebauten Methoden zur Iteration verwenden, kann die Sprache auch Fehler auslösen, weil das Iterable bestimmte {{Glossary("invariant", "Invarianten")}} verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, die als Leitfaden für Ihren eigenen Code dienen können, wenn Sie den Iterator manuell steuern.

### Nicht gut geformte Iterables

Fehler können auftreten, wenn der Iterator aus dem Iterable erworben wird. Die hier durchgesetzte Sprachinvariante ist, dass das Iterable einen gültigen Iterator produzieren muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Bei der Verwendung eingebauter Syntaxen, um die Iteration auf einem nicht gut geformten Iterable zu initiieren, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn seine `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript darauf zurück, die `[Symbol.iterator]`-Eigenschaft zu verwenden (und den resultierenden Iterator in einen asynchronen Iterator zu verwandel, indem die Methoden [weitergeleitet](#weiterleitung_von_fehlern) werden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den oben genannten Invarianten entsprechen.

Diese Fehlerart kann verhindert werden, indem vor dem Versuch, es zu iterieren, das Iterable validiert wird. Es ist jedoch ziemlich selten, weil Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weiterleiten, damit er weiß, dass ein ungültiger Eingabewert bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator weitergeschaltet wird (durch Aufrufen von `next()`). Die hier durchgesetzte Sprachinvariante ist, dass die `next()`-Methode ein Objekt (für asynchrone Iteratoren, ein Objekt nach dem Warten) zurückgeben muss. Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt oder die `next()`-Methode einen Fehler auslöst (für asynchrone Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergeleitet. Bei eingebauten Syntaxen wird die in Arbeit befindliche Iteration ohne erneuten Versuch oder Aufräumarbeiten abgebrochen (mit der Annahme, dass, wenn die `next()`-Methode den Fehler ausgelöst hat, dann hat sie bereits aufgeräumt). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler auffangen und die `next()`-Methode erneut aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer aus einem anderen Grund als den Fehlern in den vorangegangenen Abschnitten beschließt, die Iteration zu beenden, wie z. B. wenn er in seinem eigenen Code in einen Fehlerzustand gerät (z. B., während er einen ungültigen Wert behandelt, der vom Iterator erzeugt wurde), sollte er die `return()`-Methode des Iterators aufrufen, falls diese vorhanden ist. Dadurch kann der Iterator alle Aufräumarbeiten durchführen. Die `return()`-Methode wird nur für vorzeitiges Beenden aufgerufen – wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte ebenfalls ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgibt, andernfalls wird ein TypeError ausgelöst. Wenn die `return()`-Methode einen Fehler auslöst, wird der Fehler an den Aufrufer weitergeleitet. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer in seinem eigenen Code einen Fehler entdeckt hat, dann überschreibt dieser Fehler den Fehler, der von der `return()`-Methode ausgelöst wird.

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

Der `catch` kann Fehler auffangen, die auftreten, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (wenn die `for`-Schleife frühzeitig beendet wird), und wenn der Körper der `for`-Schleife einen Fehler wirft.

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

Der Mangel an einem `catch` hier führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion (was gleichermaßen ratsam ist) aufgefangen werden, kann die Generatorfunktion entscheiden, ob weitere Werte bereitgestellt oder die Ausführung frühzeitig beendet werden soll. Der `finally`-Block ist jedoch für Generatoren, die offene Ressourcen halten, notwendig. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Weiterleitung von Fehlern

Einige eingebaute Syntaxen umwickeln einen Iterator in einen anderen Iterator. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umschlossene Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iterators leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich seines Rückgabewerts und der ausgelösten Fehler.
- Wrapper-Iterators leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode beim inneren Iterator nicht existiert, wird stattdessen `{ done: true, value: undefined }` zurückgegeben. Im Fall von Iterator-Hilfsmethoden: Wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator, nachdem versucht wurde, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung noch nicht in den `yield*`-Ausdruck eingetreten ist.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, finden Sie in der entsprechenden Dokumentation.

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

### Einfacher Iterator

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) (wie im obigen Beispiel gezeigt) definieren, sollten Sie den Zustand in einem Abschluss einkapseln.

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

Die Zustandseinkapsulierung kann auch mit [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) durchgeführt werden.

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

Ein Beispiel: Ein {{jsxref("String")}} ist ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

Der [Standarditerator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) eines `String` gibt die Codepunkte des Strings nacheinander zurück:

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

Fast alle Iterables haben die gleiche grundlegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, an dem die Iteration beginnt. Stattdessen behalten sie einen Zeiger und bewegen ihn. Daher kann es passieren, dass, wenn Sie Elemente in der Sammlung während des Iterierens hinzufügen, löschen oder ändern, Sie versehentlich ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) funktionieren.

Betrachten Sie das folgende Beispiel mit einem [`URLSearchParams`](/de/docs/Web/API/URLSearchParams):

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

Beachten Sie, dass nie `key2` geloggt wird. Dies liegt daran, dass ein `URLSearchParams` unterliegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn der Zeiger zum nächsten Schlüssel geht, landet er auf `key3`.

Bestimmte Implementierungen von Iterables vermeiden dieses Problem durch Setzen von "Grabstein"-Werten, um ein Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code mit einem `Map`:

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

Beachten Sie, dass alle Schlüssel geloggt werden. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, sieht es möglicherweise so aus:

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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Sofern Sie nicht genau wissen, wie das Iterable implementiert ist, sollten Sie vermeiden, die Sammlung während des Iterierens zu ändern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
