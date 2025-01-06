---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 21916b17fcbfdae0058e713dd2a1953fd88106f4
---

{{jsSidebar("Mehr")}}

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntax, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, beispielsweise welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem standardmäßigen Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren. Das bedeutet, dass das Objekt (oder eines der Objekte oben in seiner [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, der durch die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Immer wenn ein Objekt iteriert werden muss (z. B. am Anfang eines {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass diese Funktion ohne Argumente als Methode für das iterierbare Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine gewöhnliche Funktion sein, oder sie kann eine Generatorfunktion sein, sodass beim Aufruf ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mit `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine standardisierte Methode, um eine Sequenz von Werten (entweder endlich oder unendlich) zu erzeugen und potenziell einen Rückgabewert, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit der folgenden Semantik implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein nicht-Objektwert zurückgegeben wird (wie `false` oder `undefined`), während eine eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein boolescher Wert, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies entspricht dem vollständigen Weglassen der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis ist weder die Eigenschaft strikt erforderlich; wenn ein Objekt ohne irgendeine dieser Eigenschaften zurückgegeben wird, ist es effektiv äquivalent zu `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, sollen alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der innerhalb des Methodenrücks zu Verfügung steht. Keine eingebaute Sprachfunktion wird irgendeinen Wert übergeben. Der Wert, der der `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergeben wird, wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, welche, wenn sie aufgerufen werden, den Iterator darüber informieren, dass der Aufrufer mit dem Iterieren fertig ist und alle erforderlichen Bereinigungen vornehmen kann (z. B. das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, wobei `value` typischerweise gleich dem übergebenen `value` ist und `done` gleich `true`. Der Aufruf dieser Methode gibt dem Iterator an, dass der Aufrufer nicht beabsichtigt, weitere `next()`-Aufrufe zu machen und gegebenenfalls Bereinigungsaktionen durchgeführt werden können. Wenn eingebaute Sprachfunktionen `return()` für die Bereinigung aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, wobei `done` typischerweise `true` ist. Der Aufruf dieser Methode weist den Iterator darauf hin, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist in der Regel eine {{jsxref("Error")}}-Instanz. Keine eingebaute Sprachfunktion ruft `throw()` zu Bereinigungszwecken auf – es ist ein besonderes Feature von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektiv (d. h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu prüfen) festzustellen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen, die Iterables erwarten, konsumiert werden – es ist daher selten sinnvoll, das Iterator-Protokoll zu implementieren, ohne auch das Iterable-Protokoll zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, keine _Iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode implementiert, welche `this` zurückgibt, sodass eingebaute Iteratoren auch iterierbar sind.

Wenn möglich, ist es jedoch besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von Anfang an beginnen, wie es zum Beispiel [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die Protokolle für asynchrone Iteratoren und asynchrone Iterables

Es gibt ein weiteres Paar von Protokollen für asynchrone Iterationen, genannt **Protokolle für asynchrone Iteratoren** und **asynchrone Iterables**. Diese haben sehr ähnliche Schnittstellen verglichen mit den iterierbaren und Iterator-Protokollen, abgesehen davon, dass jeder Rückgabewert von den Aufrufen der Iterator-Methoden in einem Promise verpackt ist.

Ein Objekt implementiert das asynchrone Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es folgende Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt sich zu einem Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables und Iteratoren erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Zusätzlich sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Collection-Typen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron ist. Einige Web-APIs wie [`ReadableStream`](/de/docs/Web/API/ReadableStream) haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die Iteratoren, die von eingebauten Iterables zurückgegeben werden, erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die bereits erwähnte `[Symbol.iterator]() { return this; }`-Methode implementiert, wodurch sie alle iterierbare Iteratoren sind. Die `Iterator`-Klasse bietet zusätzlich [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) zusätzlich zur `next()`-Methode, die vom Iterator-Protokoll gefordert wird. Sie können die Prototypenkette eines Iterators inspizieren, indem Sie sie in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameterspreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}} und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` als `false` zurückgibt (d. h. der Iterator kann weitere Werte erzeugen) aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann passieren, z. B. wenn in einer `for...of`-Schleife ein `break` oder `return` auftritt oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading usw. auf einem asynchronen Iterable, das nicht auch synchron ist (d. h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`) wird einen TypeError: x is not iterable auslösen.

## Fehlerbehandlung

Da die Iteration die Steuerung zwischen dem Iterator und dem Verbraucher hin- und herüberträgt, erfolgt die Fehlerbehandlung in beiden Richtungen: Wie der Verbraucher Fehler behandelt, die vom Iterator ausgelöst werden, und wie der Iterator Fehler behandelt, die vom Verbraucher ausgelöst werden. Wenn Sie eine der eingebauten Methoden der Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte Invarianten verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler generieren und behandeln, was als Richtlinie für Ihren eigenen Code dienen kann, wenn Sie den Iterator manuell Schritt für Schritt durchlaufen.

### Nicht gut geformte Iterables

Fehler können auftreten, wenn der Iterator aus dem Iterable abgeleitet wird. Die Sprache erzwingt hier die Invariante, dass das Iterable einen gültigen Iterator produzieren muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Wenn eingebaute Syntax verwendet wird, um die Iteration auf einem nicht gut geformten Iterable zu beginnen, wird ein TypeError geworfen.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables: Wenn der Wert seiner `[Symbol.asyncIterator]()`-Eigenschaft `undefined` oder `null` ist, fällt JavaScript darauf zurück, stattdessen die `[Symbol.iterator]`-Eigenschaft zu verwenden (und der resultierende Iterator wird in einem asynchronen Iterator verpackt, indem die Methoden [weitergeleitet](#fehlerweiterleitung) werden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft ebenfalls den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann vermieden werden, indem das Iterable zuerst validiert wird, bevor versucht wird, es zu iterieren. Dies ist jedoch ziemlich selten, da Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler an den Aufrufer weiterleiten, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator durchlaufen wird (durch Aufrufen von `next()`). Die Sprache erzwingt hier die Invariante, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Warten darauf). Andernfalls wird ein TypeError geworfen.

Wenn die Invariante verletzt ist oder die `next()`-Methode einen Fehler auslöst (für asynchrone Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergeleitet. Für eingebaute Syntaxen wird die Iteration abgebrochen, ohne es erneut zu versuchen oder zu bereinigen (mit der Annahme, dass wenn die `next()`-Methode den Fehler ausgelöst hat, dann hat sie bereits aufgeräumt). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und erneut `next()` aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer beschließt, die Iteration aus irgendeinem anderen Grund als den oben genannten Fehlern zu beenden, beispielsweise wenn er in seinem eigenen Code in einen Fehlerzustand gerät (zum Beispiel beim Umgang mit einem ungültigen Wert, den der Iterator erzeugt hat), sollte er die `return()`-Methode des Iterators aufrufen, falls vorhanden. Dadurch kann der Iterator alle erforderlichen Bereinigungen vornehmen. Die `return()`-Methode wird nur bei vorzeitigem Beenden aufgerufen — wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgibt und wirft einen TypeError, wenn dies nicht der Fall ist. Wenn die `return()`-Methode einen Fehler auslöst, wird dieser Fehler an den Aufrufer weitergeleitet. Wenn die `return()`-Methode jedoch aufgerufen wird, weil der Aufrufer in seinem eigenen Code auf einen Fehler gestoßen ist, dann überschreibt dieser Fehler den Fehler, der durch die `return()`-Methode ausgelöst wurde.

In der Regel implementiert der Aufrufer die Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` kann Fehler abfangen, die ausgelöst werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (wenn die `for`-Schleife vorzeitig beendet wird) und wenn der `for`-Schleifenrumpf einen Fehler auslöst.

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

Das Fehlen von `catch` hier führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` ausgelöst werden, an den Aufrufer von `gen` weitergereicht werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenfalls ratsam ist), kann die Generatorfunktion entscheiden, ob sie weitere Werte generiert oder vorzeitig beendet wird. Der `finally`-Block ist jedoch notwendig für Generatoren, die Ressourcen offen halten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen Iterator ein. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie asynchrone Iteration verwenden (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren. Der eingewickelte Iterator ist dann verantwortlich für die Weiterleitung von Fehlern zwischen dem inneren Iterator und dem Aufrufer.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich ihrem Rückgabewert und ausgelöster Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht existiert, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Fall von Iterator-Hilfsmethoden: Wenn die `next()`-Methode des Iterator-Helpers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen der `yield*`-Ausdruck noch nicht betreten wurde.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Für Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, siehe deren eigene Referenz.

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

Iteratoren sind von Natur aus zustandsabhängig. Wenn Sie es nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie im obigen Beispiel gezeigt), möchten Sie den Zustand wahrscheinlich in einer Closure kapseln.

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
// ...
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

Der [Standard-Iterator von String](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) gibt die Codepunkte des Strings nacheinander zurück:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen beim Iterieren

Fast alle Iterables haben die gleiche zugrunde liegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, wenn die Iteration beginnt. Vielmehr halten sie einen Zeiger und bewegen ihn. Daher, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie über die Sammlung iterieren, könnten Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ähnelt sehr der Funktionsweise von [iterierenden Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

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

Beachten Sie, dass es nie `key2` protokolliert. Dies liegt daran, dass ein `URLSearchParams` eine Liste von Schlüssel-Wert-Paaren zugrunde liegt. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn der Zeiger zum nächsten Schlüssel bewegt wird, landet er auf `key3`.

Bestimmte iterierbare Implementierungen vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um das Verschieben der restlichen Werte zu vermeiden. Betrachten Sie den ähnlichen Code mit einem `Map`:

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

Beachten Sie, dass es alle Schlüssel protokolliert. Dies liegt daran, dass `Map` die übrigen Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

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
> Gleichzeitige Modifikationen sind im Allgemeinen sehr fehleranfällig und verwirrend. Sofern Sie nicht genau wissen, wie das Iterable implementiert ist, ist es am besten, die Sammlung nicht zu ändern, während Sie über sie iterieren.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Leitfaden zu Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
