---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("More")}}

**Iterationsprotokolle** sind keine neuen Built-ins oder Syntaxen, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterable Protokoll](#das_iterable_protokoll) und das [iterator Protokoll](#das_iterator_protokoll).

## Das iterable Protokoll

**Das iterable Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, z.B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebauten Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterabel** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, der über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator_protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (z.B. zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Funktionen ohne Argumente aufgerufen wird, sie als Methode auf dem iterierbaren Objekt ausgeführt wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt wird.

Diese Funktion kann eine gewöhnliche Funktion sein oder eine Generatorfunktion, sodass beim Aufrufen ein Iteratorobjekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag durch Verwendung von `yield` bereitgestellt werden.

## Das iterator Protokoll

**Das iterator Protokoll** definiert eine Standardmethode, um eine Folge von Werten (entweder endlich oder unendlich) und möglicherweise einen Rückgabewert zu erzeugen, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht (siehe unten). Wenn ein nicht-Objektwert zurückgegeben wird (wie `false` oder `undefined`), wenn ein eingebautes Sprach-Feature (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das das `IteratorResult`-Interface implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein boolescher Wert, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies ist gleichbedeutend damit, die `done`-Eigenschaft überhaupt nicht anzugeben.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis sind weder die eine noch die andere Eigenschaft streng erforderlich; wenn ein Objekt ohne beide Eigenschaften zurückgegeben wird, ist es effektiv gleichbedeutend mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der dem Methodenrumpf zur Verfügung gestellt wird. Kein eingebautes Sprach-Feature wird einen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird der Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die, wenn aufgerufen, dem Iterator mitteilen, dass der Aufrufer mit der Iteration fertig ist und alle notwendigen Aufräumarbeiten (wie das Schließen der Datenbankverbindung) durchgeführt werden können.

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, in der Regel mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Durch den Aufruf dieser Methode teilt der Iterator mit, dass der Aufrufer nicht beabsichtigt, weitere `next()`-Aufrufe zu machen und alle Aufräumaktionen durchführen kann. Wenn eingebaute Sprach-Features `return()` zum Aufräumen aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, in der Regel mit `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist in der Regel eine {{jsxref("Error")}}-Instanz. Kein eingebautes Sprach-Feature ruft `throw()` für Aufräumzwecke auf — es ist eine spezielle Funktion von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektiv (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) herauszufinden, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen, die Iterables erwarten, verwendet werden – daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwartet fast alle Syntaxen und APIs _Iterables_, nicht _Iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, welches die `[Symbol.iterator]()`-Methode als `this` zurückgeben implementiert, sodass eingebaute Iteratoren auch iterierbar sind.

Es ist jedoch besser, wenn `iterable[Symbol.iterator]()` unterschiedliche Iteratoren zurückgibt, die immer vom Anfang starten, wie es [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die asynchrone Iterator- und iterable Protokolle

Ein weiteres Paar von Protokollen wird für die asynchrone Iteration verwendet, nämlich die **asynchrones Iterator**- und **asynchrones Iterable**-Protokolle. Diese haben sehr ähnliche Schnittstellen wie die iterable- und Iterator-Protokolle, außer dass jeder Rückgabewert aus den Aufrufen der Iterator-Methoden in ein Promise eingewickelt ist.

Ein Objekt implementiert das asynchrone iterable Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich mit einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften verhalten sich gleich wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich mit einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften verhalten sich gleich wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich mit einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften verhalten sich gleich wie die des synchronen Iterators.

## Wechselwirkungen zwischen der Sprache und Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben durch [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Darüber hinaus sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls Iterables. Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchrones Iterable ist. Einige Web-APIs, wie [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die Iteratoren, die von eingebauten Iterables zurückgegeben werden, erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die vorgenannte `[Symbol.iterator]() { return this; }`-Methode implementiert, sodass sie alle iterierbare Iteratoren sind. Die `Iterator`-Klasse bietet auch zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) zusätzlich zur `next()`-Methode, die vom Iterator-Protokoll gefordert wird. Sie können die Prototypenkette eines Iterators überprüfen, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, z.B. die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameter-Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` ist `false` (d.h. der Iterator ist in der Lage, weitere Werte zu erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann beispielsweise passieren, wenn ein `break` oder `return` in einer `for...of`-Schleife auftritt, oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, um mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading, etc. bei einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`) wird einen TypeError: x is not iterable auslösen.

## Fehlerbehandlung

Da die Iteration die Übergabe der Kontrolle zwischen dem Iterator und dem Verbraucher umfasst, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Möglichkeiten der Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte Invarianten bricht. Wir werden beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, was als Richtlinie für Ihren eigenen Code verwendet werden kann, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohldefinierte Iterables

Fehler können auftreten, wenn der Iterator vom Iterable erworben wird. Die hier durchgesetzte Sprach-Invariante ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Bei Verwendung einer eingebauten Syntax, um eine Iteration bei einem nicht wohldefinierten Iterable zu initiieren, wird ein TypeError geworfen.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn seine `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript darauf zurück, die `[Symbol.iterator]`-Eigenschaft stattdessen zu verwenden (und wrappt den resultierenden Iterator in einen asynchronen Iterator durch [Weiterleitung](#fehlerweiterleitung) der Methoden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den obigen Invarianten entsprechen.

Diese Art von Fehlern kann verhindert werden, indem zuerst das Iterable validiert wird, bevor versucht wird, es zu iterieren. Es ist jedoch ziemlich selten, weil Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weitergeben, damit er weiß, dass eine ungültige Eingabe geliefert wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator gesponsert wird (Aufruf von `next()`). Die hier durchgesetzte Sprach-Invariante ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Awaiten). Andernfalls wird ein TypeError geworfen.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler auslöst (bei asynchronen Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergegeben. Bei eingebauten Syntaxen wird die laufende Iteration ohne erneuten Versuch oder Aufräumen abgebrochen (mit der Annahme, dass, wenn die `next()`-Methode den Fehler geworfen hat, dann hat sie bereits aufgeräumt). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und erneut `next()` aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer beschließt, die Iteration aus einem anderen Grund als den oben genannten Fehlern zu beenden, wie z.B. wenn er in seinem eigenen Code in einen Fehlerzustand gerät (z.B. beim Umgang mit einem ungültigen vom Iterator erzeugten Wert), sollte er die `return()`-Methode beim Iterator aufrufen, wenn eine existiert. Dadurch kann der Iterator alle Aufräumarbeiten durchführen. Die `return()`-Methode wird nur bei vorzeitigen Abbrüchen aufgerufen — wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgeben muss und wirft andernfalls einen TypeError. Wenn die `return()`-Methode einen Fehler auslöst, wird der Fehler an den Aufrufer weitergegeben. Wenn die `return()`-Methode jedoch aufgerufen wird, weil der Aufrufer in seinem eigenen Code einen Fehlerzustand erkannt hat, dann ersetzt dieser Fehler den von der `return()`-Methode geworfenen Fehler.

In der Regel implementiert der Aufrufer die Fehlerbehandlung so:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` kann Fehler abfangen, die geworfen werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (wenn die `for`-Schleife vorzeitig beendet wird) und wenn der `for`-Schleifenrumpf einen Fehler wirft.

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

Der Mangel an `catch` hier sorgt dafür, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was gleichermaßen ratsam ist), kann die Generatorfunktion sich entscheiden, weiterhin Werte zu erzeugen oder vorzeitig zu beenden. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen halten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen ein. Dazu gehören der Iterator, der von {{jsxref("Iterator.from()")}} erzeugt wird, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein verborgener Wrapper, wenn Sie die asynchrone Iteration (`for await...of`, `Array.fromAsync`) bei synchronen Iteratoren verwenden. Der gewrapte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iterators leiten direkt die `next()`-Methode des inneren Iterators weiter, einschließlich seines Rückgabewerts und geworfener Fehler.
- Wrapper-Iterators leiten im Allgemeinen direkt die `return()`-Methode des inneren Iterators weiter. Wenn die `return()`-Methode beim inneren Iterator nicht existiert, wird stattdessen `{ done: true, value: undefined }` zurückgegeben. Im Falle von Iterator-Helps: wenn die `next()`-Methode des Iterator-Helps nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` beim inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung noch nicht in den `yield*`-Ausdruck eingetreten ist.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen dazu, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, finden Sie in seiner eigenen Referenz.

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

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie im obigen Beispiel gezeigt), möchten Sie den Zustand wahrscheinlich in einer Closure kapseln.

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

### Definition eines iterierbaren Objekts mit einem Generator

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

### Definition eines iterierbaren Objekts mit einer Klasse

Die Zustandseinkapselung kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erfolgen.

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

`String`'s [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) gibt die Code-Punkte des Strings einzeln zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten neu definieren, indem Sie unsere eigene `[Symbol.iterator]()` bereitstellen:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten verändert, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen während der Iteration

Fast alle Iterables haben dasselbe zugrunde liegende semantische Konzept: sie kopieren die Daten nicht zum Zeitpunkt, zu dem die Iteration beginnt. Stattdessen behalten sie einen Zeiger und bewegen ihn herum. Daher, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie über die Sammlung iterieren, könnten Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich wie bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

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

Beachten Sie, dass `key2` nie protokolliert wird. Dies liegt daran, dass ein `URLSearchParams` zugrundeliegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` vorher hatte, und wenn der Zeiger zum nächsten Schlüssel bewegt wird, landet er bei `key3`.

Bestimmte Iterables-Implementierungen vermeiden dieses Problem, indem sie "Grabsteine" verwenden, um das Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code unter Verwendung eines `Map`:

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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es sei denn, Sie wissen genau, wie das Iterable implementiert ist, es ist am besten, Änderungen an der Sammlung zu vermeiden, während Sie sie durchlaufen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
