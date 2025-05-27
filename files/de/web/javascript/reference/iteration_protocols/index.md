---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{jsSidebar("Mehr")}}

**Iterationsprotokolle** sind keine neuen Built-ins oder Syntaxelemente, sondern _Protokolle_. Diese Protokolle können von jedem Objekt durch das Befolgen bestimmter Konventionen implementiert werden.

Es gibt zwei Protokolle: Das [iterable Protokoll](#das_iterable_protokoll) und das [iterator Protokoll](#das_iterator_protokoll).

## Das iterable Protokoll

**Das iterable Protokoll** erlaubt es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, zum Beispiel welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie zum Beispiel {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie zum Beispiel {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, die über den konstanten {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator_protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (zum Beispiel zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu durchlaufenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Funktion ohne Argumente aufgerufen wird, sie als Methode auf dem iterierbaren Objekt aufgerufen wird. Deshalb kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine normale Funktion sein oder eine Generatorfunktion, sodass beim Aufruf ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag durch die Verwendung von `yield` bereitgestellt werden.

## Das iterator Protokoll

**Das iterator Protokoll** definiert eine standardisierte Methode zur Erzeugung einer Sequenz von Werten (entweder endlich oder unendlich) und potenziell eines Rückgabewerts, wenn alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein nicht-Objekt-Wert (wie `false` oder `undefined`) zurückgegeben wird, während ein eingebautes Sprachfeature (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein Boolean, der `false` ist, wenn der Iterator den nächsten Wert in der Sequenz erzeugen konnte. (Das ist gleichbedeutend damit, die Eigenschaft `done` überhaupt nicht anzugeben.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder beliebige JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis ist keine der Eigenschaften strikt erforderlich; wenn ein Objekt ohne eine der beiden Eigenschaften zurückgegeben wird, ist es im Wesentlichen gleichbedeutend mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der dem Methodenrumpf zur Verfügung gestellt wird. Kein eingebautes Sprachfeature wird einen Wert übergeben. Der Wert, der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergeben wird, wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die **`return(value)`**- und **`throw(exception)`**-Methoden implementieren. Wenn diese aufgerufen werden, teilt der Iterator mit, dass der Aufrufer mit der Iteration fertig ist und alle notwendigen Bereinigungsaktionen durchführen kann (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer nicht beabsichtigt, weitere `next()`-Aufrufe zu tätigen und kann Aufräumaktionen durchführen. Wenn eingebaute Sprachmerkmale `return()` zur Bereinigung aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer eine Fehlerbedingung erkennt, und `exception` ist typischerweise eine {{jsxref("Error")}}-Instanz. Kein eingebautes Sprachmerkmal ruft `throw()` zu Bereinigungszwecken auf - es ist eine spezielle Funktion von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektierend (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die Iterables erwarten – daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, nicht _Iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode als Rückgabe von `this` implementiert, sodass eingebaute Iteratoren ebenfalls iterierbar sind.

Es ist jedoch besser, wenn möglich, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von vorne beginnen, wie es zum Beispiel [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die asynchronen Iterator- und asynchronen Iterierbaren-Protokolle

Es gibt ein weiteres Paar von Protokollen für die asynchrone Iteration, genannt **asynchrone Iterator-** und **asynchrone Iterierbaren-Protokolle**. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterierbaren und Iterator-Protokollen, mit der Ausnahme, dass jeder Rückgabewert von den Aufrufen der Iterator-Methoden in einem Promise eingeschlossen ist.

Ein Objekt implementiert das asynchrone Iterierbaren-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen iterators.

## Interaktionen zwischen der Sprache und Iterationsprotokollen

Die Sprache definiert APIs, die entweder Iterables oder Iteratoren produzieren oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (erstellt von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Zusätzlich sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls iterierbar.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterierbar ist. Einige Web-APIs, wie etwa [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Async-Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die von eingebauten Iterables zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die oben erwähnte Methode `[Symbol.iterator]() { return this; }` implementiert und sie somit alle zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet auch zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) zusätzlich zur `next()`-Methode, die vom Iterator-Protokoll gefordert wird. Sie können die Prototypenkette eines Iterators prüfen, indem Sie sie in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array und Parameterverteilung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebauter Syntax ein Iterator iteriert und das letzte Ergebnis `done` `false` ist (d.h. der Iterator kann mehr Werte erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann zum Beispiel passieren, wenn ein `break` oder `return` in einer `for...of`-Schleife getroffen wird oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [async-Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht in [synchronen Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Verteilung usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), wird einen TypeError auslösen: x ist nicht iterierbar.

## Fehlerbehandlung

Da Iteration die Übertragung der Kontrolle zwischen dem Iterator und dem Verbraucher umfasst, findet die Fehlerbehandlung in beide Richtungen statt: wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Methoden der Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte Invarianten verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, was als Richtlinie für Ihren eigenen Code verwendet werden kann, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterables

Fehler können beim Abrufen des Iterators aus dem Iterable auftreten. Die hier durchgesetzte Sprachinvariante ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das Objekt, das von `[Symbol.iterator]()` zurückgegeben wird, hat eine aufrufbare `next()`-Methode.

Bei der Verwendung eingebauter Syntax zur Initiierung der Iteration über ein nicht wohlgeformtes Iterable wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn ihr `[Symbol.asyncIterator]()`-Eigenschaftswert `undefined` oder `null` ist, fällt JavaScript zurück auf die Verwendung der `[Symbol.iterator]`-Eigenschaft stattdessen (und wandelt den resultierenden Iterator in einen asynchronen Iterator um, indem es die Methoden weiterleitet). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann vermieden werden, indem das Iterable zuerst validiert wird, bevor versucht wird, es zu iterieren. Es ist jedoch ziemlich selten, da Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach zum Aufrufer weiterleiten, damit dieser weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator weitergeschaltet wird (Aufruf von `next()`). Die hier durchgesetzte Sprachinvariante ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Warten). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler wirft (für asynchrone Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergeleitet. Für eingebaute Syntaxen wird die in Bearbeitung befindliche Iteration ohne erneutes Versuchen oder Bereinigung abgebrochen (mit der Annahme, dass, wenn die `next()`-Methode den Fehler geworfen hat, sie bereits bereinigt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und erneut `next()` aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer beschließt, die Iteration aus einem anderen Grund als den Fehlern im vorherigen Absatz zu beenden, zum Beispiel, wenn er in seinem eigenen Code einen Fehlerzustand betritt (zum Beispiel beim Verarbeiten eines ungültigen Werts, der vom Iterator erzeugt wurde), sollte er die `return()`-Methode des Iterators aufrufen, falls vorhanden. Dies ermöglicht es dem Iterator, alle notwendigen Aufräumarbeiten durchzuführen. Die `return()`-Methode wird nur für vorzeitige Beendigungen aufgerufen - wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits bereinigt hat.

Die `return()`-Methode kann ebenfalls ungültig sein! Die Sprache setzt ebenfalls durch, dass die `return()`-Methode ein Objekt zurückgeben muss, und wirft andernfalls einen TypeError. Wenn die `return()`-Methode einen Fehler wirft, wird der Fehler an den Aufrufer weitergeleitet. Sollte die `return()`-Methode jedoch aufgerufen werden, weil der Aufrufer in seinem eigenen Code auf einen Fehler gestoßen ist, überschreibt dieser Fehler den von der `return()`-Methode geworfenen Fehler.

Normalerweise implementiert der Aufrufer die Fehlerbehandlung so:

```js
try {
  for (const value of iterable) {
    // …
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` kann Fehler abfangen, die geworfen werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (falls die `for`-Schleife vorzeitig beendet wird), und wenn der `for`-Schleifenrumpf einen Fehler wirft.

Die meisten Iteratoren werden mit Generatorfunktionen implementiert, sodass wir demonstrieren, wie Generatorfunktionen typischerweise Fehler behandeln:

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

Das Fehlen von `catch` führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` weitergeleitet werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenso ratsam ist), kann die Generatorfunktion entscheiden, ob sie weiterhin Werte erzeugt oder vorzeitig beendet wird. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen verwalten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen Iterator ein. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [iterator helper methods](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der ummantelte Iterator ist dann dafür verantwortlich, Fehler zwischen dem internen Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des internen Iterators direkt weiter, einschließlich deren Rückgabewerte und ausgelöster Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des internen Iterators direkt weiter. Wenn die `return()`-Methode beim internen Iterator nicht existiert, gibt er stattdessen `{ done: true, value: undefined }` zurück. Bei Iterator-Helpmethoden: wenn die `next()`-Methode des Iterator-Helpers noch nicht aufgerufen wurde, gibt der aktuelle Iterator, nachdem er versucht hat, `return()` auf dem internen Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit den Generatorfunktionen, deren Ausführung noch nicht in den `yield*`-Ausdruck eingetreten ist.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des internen Iterators weiterleitet. Weitere Informationen zur Weiterleitung der `return()`- und `throw()`-Methoden durch [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), finden Sie in der entsprechenden Referenz.

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

### Ein Iterable mit einem Generator definieren

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

### Ein Iterable mit einer Klasse definieren

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

### Eingebaute Iterables überschreiben

Beispielsweise ist ein {{jsxref("String")}} ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

Der [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) von `String` gibt die Codepunkte der Zeichenkette nacheinander zurück:

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

Beachten Sie, wie sich das Neudefinieren von `[Symbol.iterator]()` auf das Verhalten von eingebauten Konstrukten auswirkt, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen beim Iterieren

Fast alle Iterables haben die gleiche zugrundeliegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, zu dem die Iteration beginnt. Stattdessen halten sie einen Zeiger und bewegen ihn hin und her. Wenn Sie also Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie über die Sammlung iterieren, können Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich wie bei [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

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

Beachten Sie, wie es niemals `key2` ausgibt. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn der Zeiger zum nächsten Schlüssel geht, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um zu vermeiden, dass die verbleibenden Werte verschoben werden. Betrachten Sie den ähnlichen Code mit einer `Map`:

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

Beachten Sie, wie es alle Schlüssel ausgibt. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Sofern Sie nicht genau wissen, wie das Iterable implementiert ist, ist es am besten, die Sammlung während des Iterierens nicht zu ändern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
