---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("More")}}

**Iterationsprotokolle** sind keine neuen Built-Ins oder Syntaxelemente, sondern _Protokolle_. Diese Protokolle können durch jedes Objekt implementiert werden, indem bestimmte Konventionen eingehalten werden.

Es gibt zwei Protokolle: Das [iterable Protokoll](#das_iterable-protokoll) und das [iterator Protokoll](#das_iterator-protokoll).

## Das Iterable-Protokoll

**Das iterable Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, beispielsweise welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterable** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]` Schlüssel haben muss, welche über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Null-Parameter-Funktion, die ein Objekt zurückgibt, das dem [iterator Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (zum Beispiel am Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird dessen `[Symbol.iterator]()` Methode ohne Argumente aufgerufen und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass diese Null-Parameter-Funktion als Methode auf dem iterablen Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this` Schlüsselwort verwendet werden, um auf die Eigenschaften des iterablen Objekts zuzugreifen, um zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine normale Funktion oder eine Generatorfunktion sein, sodass beim Aufruf ein Iteratorobjekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mithilfe von `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das iterator Protokoll** definiert eine standardisierte Methode zur Erzeugung einer Wertesequenz (entweder endlich oder unendlich) und eventuell einen Rückgabewert, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`** Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein Nicht-Objekt-Wert zurückgegeben wird (wie `false` oder `undefined`), wenn ein eingebautes Sprachfeature (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des iterator Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein Boolean, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies ist gleichbedeutend damit, die `done` Eigenschaft insgesamt nicht anzugeben.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder von den Iterator zurückgegebene JavaScript-Wert. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis sind keine der Eigenschaften strikt erforderlich; wenn ein Objekt ohne eine dieser Eigenschaften zurückgegeben wird, ist es effektiv gleichwertig zu `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies nicht auf der Sprachebene durchgesetzt wird.

Die `next` Methode kann einen Wert empfangen, welcher dem Methodenrumpf zur Verfügung gestellt wird. Kein eingebautes Sprachfeature wird einen Wert übergeben. Der an die `next` Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer mit dem Iterieren fertig ist und alle erforderlichen Bereinigungen durchgeführt werden können (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value` gleich dem übergebenen Wert und `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer nicht beabsichtigt, weitere `next()` Aufrufe zu machen, und alle Bereinigungsvorgänge durchführen kann. Wenn eingebaute Sprachfeatures `return()` zur Bereinigung aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist typischerweise eine {{jsxref("Error")}} Instanz. Kein eingebautes Sprachfeature ruft `throw()` zu Bereinigungszwecken auf — es ist ein besonderes Feature von Generatoren zur Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, rückblickend (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das iterator Protokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterabel zu machen: Implementieren Sie einfach eine `[Symbol.iterator]()` Methode, die `this` zurückgibt.

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

Ein solches Objekt wird als _iterabler Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die Iterables erwarten — daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwarten fast alle Sytnaxen und APIs _Iterables_, nicht _Iteratoren_.) Das [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, welches die `[Symbol.iterator]()` Methode als Rückgabe von `this` implementiert, sodass eingebaute Iteratoren ebenfalls iterabel sind.

Wann immer es möglich ist, ist es jedoch besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von Anfang an anfangen, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).

## Die async iterator und async iterable Protokolle

Es gibt ein weiteres Paar von Protokollen, die für die asynchrone Iteration verwendet werden, nämlich **async iterator** und **async iterable** Protokolle. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterable und iterator Protokollen, außer dass jeder Rückgabewert aus den Aufrufen der Iterator-Methoden in einem Promise verpackt ist.

Ein Objekt implementiert das async iterable Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Null-Parameter-Funktion, die ein Objekt zurückgibt, das dem async iterator Protokoll entspricht.

Ein Objekt implementiert das async iterator Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das mit der `IteratorResult`-Schnittstelle übereinstimmt, und die Eigenschaften haben dieselben Semantiken wie die des sync iterator's.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das mit der `IteratorResult`-Schnittstelle übereinstimmt, und die Eigenschaften haben dieselben Semantiken wie die des sync iterator's.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das mit der `IteratorResult`-Schnittstelle übereinstimmt, und die Eigenschaften haben dieselben Semantiken wie die des sync iterator's.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables oder Iteratoren erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype` Objekte eine `[Symbol.iterator]()` Methode implementiert. Darüber hinaus sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt und einige DOM-Sammlungsarten wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls Iterables. Es gibt kein Objekt in der Kern-JavaScript-Sprache, das async iterable ist. Einige Web-APIs, wie z. B. [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben standardmäßig die `Symbol.asyncIterator` Methode gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Async Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [Async Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die async iterierbare Iteratoren sind.

Die aus eingebauten Iterables zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die erwähnte Methode `[Symbol.iterator]() { return this; }` implementiert, was sie zu iterierbaren Iteratoren macht. Die `Iterator` Klasse bietet auch zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zusätzlich zur `next()` Methode, die durch das iterator Protokoll erforderlich ist. Sie können die Prototypkette eines Iterators überprüfen, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Es gibt viele APIs, die Iterables akzeptieren. Einige Beispiele beinhalten:

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

### Sytnaxen, die Iterables erwarten

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}} Schleifen, [Array- und Parameter-Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

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

Wenn eingebaute Syntaxen einen Iterator iterieren, und das letzte Ergebnis `done` ist `false` (d.h. der Iterator kann mehr Werte erzeugen) aber keine weiteren Werte benötigt werden, wird die `return` Methode aufgerufen, falls vorhanden. Dies kann zum Beispiel passieren, wenn ein `break` oder `return` in einer `for...of` Schleife auftritt oder wenn alle Identifikatoren bereits in einem Array-Destructuring gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [async Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht in [sync Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, um mit async Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading, etc. auf einem async Iterable, das nicht auch ein sync Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`) wird einen TypeError werfen: x is not iterable.

## Fehlerbehandlung

Da Iteration die Kontrolle zwischen dem Iterator und dem Verbraucher hin- und her übertragen, erfolgt die Fehlerbehandlung in beiden Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator ausgelöst werden, und wie der Iterator Fehler behandelt, die vom Verbraucher ausgelöst werden. Wenn Sie eine der eingebauten Arten der Iteration verwenden, kann die Sprache auch Fehler auslösen, weil das Iterable bestimmte Invarianten bricht. Wir werden beschreiben, wie eingebaute Syntaxen Fehler generieren und handhaben, was als Richtlinie für Ihren eigenen Code verwendet werden kann, wenn Sie den Iterator manuell durchlaufen.

### Nicht gut geformte Iterables

Fehler können auftreten, wenn der Iterator aus dem Iterable erworben wird. Die hier durchgesetzte Sprachinvariante ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()` Methode.
- Die `[Symbol.iterator]()` Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()` Methode.

Wenn eine eingebaute Syntax verwendet wird, um die Iteration auf einem nicht gut geformten Iterable zu starten, wird ein TypeError geworfen.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für async Iterables, wenn die `[Symbol.asyncIterator]()` Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript darauf zurück, die `[Symbol.iterator]` Eigenschaft statt dessen zu verwenden (und umwickelt den resultierenden Iterator in einen async Iterator durch [Weiterleitung](#weiterleitung_von_fehlern) der Methoden). Andernfalls muss die `[Symbol.asyncIterator]` Eigenschaft ebenfalls den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann verhindert werden, indem zuerst das Iterable validiert wird, bevor versucht wird, es zu durchlaufen. Es ist jedoch ziemlich selten, weil Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach zum Aufrufer propagieren lassen, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler bei der Iteration

Die meisten Fehler treten auf, wenn der Iterator schrittweise durchlaufen wird (Aufruf von `next()`). Die hier durchgesetzte Sprachinvariante ist, dass die `next()` Methode ein Objekt zurückgeben muss (für async Iteratoren, ein Objekt nach dem Warten). Andernfalls wird ein TypeError geworfen.

Wenn die Invariante verletzt wird oder die `next()` Methode einen Fehler auslöst (für async Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer propagiert. Bei eingebauten Syntaxen wird die in Bearbeitung befindliche Iteration ohne Wiederholung oder Bereinigung abgebrochen (mit der Annahme, dass wenn die `next()` Methode den Fehler ausgelöst hat, dann hat sie bereits bereinigt). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und `next()` erneut aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer aus anderen Gründen als den oben genannten Fehlern beschließt, die Iteration zu beenden, wie zum Beispiel, wenn er in seinem eigenen Code einen Fehlerzustand betritt (zum Beispiel, während er einen ungültigen Wert behandelt, der vom Iterator erzeugt wurde), sollte er die `return()` Methode des Iterators aufrufen, falls vorhanden. Dies ermöglicht dem Iterator, die notwendigen Bereinigungen durchzuführen. Die `return()` Methode wird nur bei vorzeitigem Abbrechen aufgerufen - wenn `next()` `done: true` zurückgibt, wird die `return()` Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits bereinigt hat.

Die `return()` Methode könnte auch ungültig sein! Die Sprache setzt auch durch, dass die `return()` Methode ein Objekt zurückgeben muss und andernfalls einen TypeError wirft. Wenn die `return()` Methode einen Fehler verursacht, wird der Fehler dem Aufrufer propagiert. Wenn jedoch die `return()` Methode aufgerufen wird, weil der Aufrufer in seinem eigenen Code einen Fehler aufgetreten ist, überlagert dieser Fehler den Fehler, der von der `return()` Methode ausgelöst wird.

Normalerweise implementiert der Aufrufer Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` wird in der Lage sein, Fehler abzufangen, die geworfen werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (falls die `for` Schleife vorzeitig beendet wird), und wenn der Körper der `for` Schleife einen Fehler wirft.

Die meisten Iteratoren werden mit Generatorfunktionen implementiert, daher werden wir zeigen, wie Generatorfunktionen typischerweise Fehler behandeln:

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

Das Fehlen von `catch` hier verursacht, dass Fehler, die von `doSomething()` oder `doSomethingElse()` verursacht werden, an den Aufrufer von `gen` propagiert werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was genauso ratsam ist), kann die Generatorfunktion entscheiden, das Yielding von Werten fortzusetzen oder vorzeitig zu beenden. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen halten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Weiterleitung von Fehlern

Einige eingebaute Syntaxen umwickeln einen Iterator in einen anderen Iterator. Dazu gehören der Iterator, der von {{jsxref("Iterator.from()")}} erzeugt wird, [Iterator-Hilfsmittel](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie async Iteration (`for await...of`, `Array.fromAsync`) auf sync Iteratoren anwenden. Der umwickelte Iterator ist dann verantwortlich für die Weiterleitung von Fehlern zwischen dem inneren Iterator und dem Aufrufer.

- Alle Wrapper-Iteratoren leiten die `next()` Methode des inneren Iterators direkt weiter, einschließlich seines Rückgabewerts und geworfener Fehler.
- Wrapper-Iterators leiten im Allgemeinen die `return()` Methode des inneren Iterators direkt weiter. Wenn die `return()` Methode auf dem inneren Iterator nicht existiert, wird stattdessen `{ done: true, value: undefined }` zurückgegeben. Im Fall von Iterator-Hilfsmitteln: wenn die `next()` Methode des Iterator-Hilfsmittels nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, in denen die Ausführung noch nicht in den `yield*` Ausdruck eingetreten ist.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()` Methode des inneren Iterators weiterleitet. Weitere Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()` Methoden weiterleitet, finden Sie in seiner eigenen Referenz.

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

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), möchten Sie den Zustand wahrscheinlich in einem Closure kapseln.

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

### Überschreiben eingebauter Iterables

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes iterierbares Objekt:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen bei der Iteration

Fast alle Iterables haben dieselbe zugrunde liegende Semantik: Sie kopieren die Daten nicht, wenn die Iteration beginnt. Stattdessen behalten sie einen Zeiger und verschieben ihn. Daher kann es sein, dass Sie, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie über die Sammlung iterieren, unbeabsichtigt ändern, ob andere _unveränderte_ Elemente der Sammlung besucht werden. Dies ist sehr ähnlich zu wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) arbeiten.

Betrachten Sie den folgenden Fall, der ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwendet:

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

Beachten Sie, wie es nie `key2` loggt. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, so dass `key2` die Position einnimmt, die `deleteme1` zuvor hatte, und wenn der Zeiger zum nächsten Schlüssel geht, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um das Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code unter Verwendung eines `Map`:

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

Beachten Sie, wie es alle Schlüssel ausgibt. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, hier ist, wie es aussehen könnte:

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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es ist am besten, die Sammlung nicht zu ändern, während Sie über sie iterieren, es sei denn, Sie wissen genau, wie das Iterable implementiert ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
