---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{jsSidebar("More")}}

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntaxen, sondern _Protokolle_. Diese Protokolle können durch jedes Objekt implementiert werden, indem einige Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterable-Protokoll](#das_iterable-protokoll) und das [iterator-Protokoll](#das_iterator-protokoll).

## Das iterable-Protokoll

**Das iterable-Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, z. B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, der über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (z. B. zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass diese Funktion ohne Argumente als Methode auf dem iterierbaren Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen, um zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine gewöhnliche Funktion oder eine Generatorfunktion sein, so dass beim Aufrufen ein Iteratorobjekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mit `yield` bereitgestellt werden.

## Das iterator-Protokoll

**Das iterator-Protokoll** definiert eine standardisierte Art und Weise, eine Folge von Werten zu erzeugen (entweder endlich oder unendlich), und möglicherweise einen Rückgabewert, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine Methode **`next()`** mit folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht (siehe unten). Wenn ein Nicht-Objekt-Wert zurückgegeben wird (wie `false` oder `undefined`), wenn eine eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das das `IteratorResult`-Interface implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein Boolean-Wert, der `false` ist, wenn der Iterator den nächsten Wert in der Sequenz bereitstellen konnte. (Das ist gleichbedeutend mit dem vollständigen Weglassen der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann ausgelassen werden, wenn `done` `true` ist.

In der Praxis ist keine der beiden Eigenschaften streng erforderlich; wenn ein Objekt ohne eine der beiden Eigenschaften zurückgegeben wird, ist es effektiv gleichwertig mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass nachfolgende Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der der Methodenkörper verfügbar gemacht wird. Keine eingebaute Sprachfunktion wird irgendeinen Wert übergeben. Der Wert, der der `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergeben wird, wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer mit der Iteration fertig ist und alle notwendigen Aufräumarbeiten durchführen kann (z. B. das Schließen der Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Wenn diese Methode aufgerufen wird, teilt sie dem Iterator mit, dass der Aufrufer nicht beabsichtigt, weitere `next()`-Aufrufe zu tätigen und alle Aufräumaktionen durchgeführt werden können. Wenn eingebaute Sprachmerkmale `return()` zum Aufräumen aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `done` gleich `true`. Wenn diese Methode aufgerufen wird, teilt sie dem Iterator mit, dass der Aufrufer einen Fehlerzustand erkannt hat, und `exception` ist typischerweise eine {{jsxref("Error")}}-Instanz. Kein eingebautes Sprachmerkmal ruft `throw()` zu Aufräumzwecken auf – es ist ein spezielles Merkmal von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflexiv (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

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

Ein solches Objekt wird als _iterable Iterator_ bezeichnet. Dies ermöglicht es einem Iterator, von den verschiedenen Syntaxen, die Iterables erwarten, konsumiert zu werden – daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, nicht _Iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode implementiert, indem es `this` zurückgibt, so dass eingebaute Iteratoren auch iterierbar sind.

Wo dies möglich ist, ist es jedoch besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von vorne beginnen, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) es tut.

## Die async Iterator und async Iterable Protokolle

Es gibt ein weiteres Paar von Protokollen für die asynchrone Iteration, die als **async Iterator** und **async Iterable** Protokolle bekannt sind. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den Iterable- und Iterator-Protokollen, außer dass jeder Rückgabewert von den Aufrufen der Iterator-Methoden in ein Promise gehüllt ist.

Ein Objekt implementiert das async Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem async Iterator-Protokoll entspricht.

Ein Objekt implementiert das async Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables und Iteratoren produzieren oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Zusätzlich sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) auch Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das async iterierbar ist. Einige Web-APIs, wie [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterable Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die async iterable Iteratoren sind.

Die Iteratoren, die von eingebauten Iterables zurückgegeben werden, erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die oben erwähnte `[Symbol.iterator]() { return this; }`-Methode implementiert, was sie alle zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet zusätzlich zu der `next()`-Methode des Iterator-Protokolls zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods). Sie können die Prototypkette eines Iterators inspizieren, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameter-Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator iterieren, und das letzte Ergebnis `done` `false` ist (d.h. der Iterator ist in der Lage, weitere Werte zu erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann passieren, zum Beispiel, wenn ein `break` oder `return` in einer `for...of`-Schleife auftritt oder wenn alle Bezeichner in einer Array-Destrukturierung bereits gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (nicht jedoch [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber keinen `[Symbol.iterator]()`), wird einen TypeError auslösen: x ist nicht iterierbar.

## Fehlerbehandlung

Da Iteration die Übertragung der Kontrolle zwischen dem Iterator und dem Verbraucher beinhaltet, geschieht die Fehlerbehandlung in beide Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Möglichkeiten zur Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte Invarianten verletzt. Wir beschreiben, wie eingebaute Syntaxen Fehler generieren und behandeln, die als Leitfaden für Ihren eigenen Code verwendet werden können, wenn Sie den Iterator manuell vorgehen.

### Nicht gut geformte Iterables

Fehler können auftreten, wenn der Iterator aus dem Iterable gewonnen wird. Die Sprachinvariante, die hier erzwungen wird, ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Bei Verwendung einer eingebauten Syntax zur Initiierung der Iteration über ein nicht gut geformtes Iterable wird ein TypeError geworfen.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn seine `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript darauf zurück, die `[Symbol.iterator]`-Eigenschaft stattdessen zu verwenden (und den resultierenden Iterator in einen async Iterator zu umwickeln, indem die Methoden [weitergereicht](#weiterreichen_von_fehlern) werden). Ansonsten muss die `[Symbol.asyncIterator]`-Eigenschaft ebenfalls den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann verhindert werden, indem das Iterable vor dem Versuch, es zu iterieren, zuerst validiert wird. Es ist jedoch ziemlich selten, da Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weiterleiten, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator weitergegeben wird (indem `next()` aufgerufen wird). Die Sprachinvariante, die hier erzwungen wird, ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Await). Andernfalls wird ein TypeError geworfen.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler wirft (für asynchrone Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergeleitet. Für eingebaute Syntaxen wird die laufende Iteration abgebrochen, ohne dass ein erneuter Versuch oder eine Aufräumaktion erfolgt (mit der Annahme, dass wenn die `next()`-Methode den Fehler geworfen hat, sie bereits aufgeräumt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und einen erneuten Aufruf von `next()` versuchen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer aus irgendeinem anderen Grund als den Fehlern im vorherigen Absatz entscheidet, die Iteration zu beenden, wie z. B. wenn er selbst in seinem eigenen Code einen Fehlerzustand eingeht (zum Beispiel während der Behandlung eines ungültigen Wertes, der vom Iterator erzeugt wurde), sollte er die `return()`-Methode am Iterator aufrufen, falls eine vorhanden ist. Dadurch kann der Iterator eine Aufräumaktion durchführen. Die `return()`-Methode wird nur bei vorzeitigen Beendigungen aufgerufen – wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgeben muss und wirft einen TypeError andernfalls. Wenn die `return()`-Methode einen Fehler wirft, wird der Fehler an den Aufrufer weitergeleitet. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer selbst in seinem Code einen Fehler festgestellt hat, dann überschreibt dieser Fehler den Fehler, den die `return()`-Methode geworfen hat.

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

Der `catch` kann Fehler abfangen, die geworfen werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (wenn die `for`-Schleife vorzeitig endet) und wenn der `for`-Schleifenrumpf einen Fehler wirft.

Die meisten Iteratoren werden mit Generatorfunktionen implementiert, daher zeigen wir, wie Generatorfunktionen typischerweise Fehler behandeln:

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

Der Mangel an `catch` hier führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` weitergeleitet werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was gleichermaßen ratsam ist), kann die Generatorfunktion entscheiden, weiterhin Werte zu `yield`-en oder vorzeitig zu beenden. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen behalten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn der letzte `next()`-Aufruf erfolgt oder wenn `return()` aufgerufen wird.

### Weiterreichen von Fehlern

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen Iterator ein. Dazu gehören der Iterator, der von {{jsxref("Iterator.from()")}} erzeugt wird, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), und ein versteckter Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umwickelte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzugeben.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich deren Rückgabewert und geworfener Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode beim inneren Iterator nicht existiert, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Fall von Iterator-Hilfsmethoden: Wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck noch nicht erreicht hat.
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

### Basis-Iterator

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie es nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das Beispiel oben zeigt), möchten Sie wahrscheinlich den Zustand in einem Closure kapseln.

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

### Definieren eines iterierbaren mit einem Generator

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

### Definieren eines iterierbaren mit einer Klasse

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

### Überschreiben von eingebauten Iterables

Ein Beispiel: ein {{jsxref("String")}} ist ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

Der [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) von `String` gibt die Codepunkte des Strings nacheinander zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten neu definieren, indem Sie unseren eigenen `[Symbol.iterator]()` bereitstellen:

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

Beachten Sie, wie das Überschreiben von `[Symbol.iterator]()` das Verhalten der eingebauten Konstrukte beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen bei der Iteration

Fast alle Iterables haben dieselbe zugrunde liegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, an dem die Iteration startet. Stattdessen behalten sie einen Zeiger und bewegen ihn. Wenn Sie also während der Iteration über die Sammlung Elemente hinzufügen, löschen oder ändern, können Sie unabsichtlich beeinflussen, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich, wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) funktionieren.

Betrachten Sie den folgenden Fall, in dem ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwendet wird:

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

Beachten Sie, dass es niemals `key2` loggt. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, so dass `key2` die Position einnimmt, die `deleteme1` früher gehabt hat, und wenn der Zeiger zum nächsten Schlüssel wechselt, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabsteine" setzen, um zu vermeiden, dass die verbleibenden Werte verschoben werden. Betrachten Sie den ähnlichen Code mit einem `Map`:

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

Beachten Sie, dass es alle Schlüssel loggt. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, sieht es so aus:

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
> Gleichzeitige Änderungen sind in der Regel sehr fehleranfällig und verwirrend. Es sei denn, Sie wissen genau, wie das Iterable implementiert ist, es ist am besten zu vermeiden, die Sammlung während der Iteration über sie zu verändern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
