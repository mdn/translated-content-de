---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 76bdd4e01dc2b1aa09da861f345cf21368bc83b6
---

{{jsSidebar("More")}}

**Iterationsprotokolle** sind keine neuen Built-Ins oder Syntaxen, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterable Protokoll](#das_iterable_protokoll) und das [iterator Protokoll](#das_iterator_protokoll).

## Das iterable Protokoll

**Das iterable Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, z.B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie z.B. {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die **`[Symbol.iterator]()`**-Methode implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, die über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [iterator Protokoll](#das_iterator_protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (wie zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Funktion ohne Argumente aufgerufen wird, sie als Methode des iterierbaren Objekts aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen, um zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine gewöhnliche Funktion oder eine Generatorfunktion sein, sodass beim Aufruf ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mit `yield` bereitgestellt werden.

## Das iterator Protokoll

**Das iterator Protokoll** definiert einen Standardweg, um eine Sequenz von Werten (entweder endlich oder unendlich) zu erzeugen und möglicherweise einen Rückgabewert, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Falls ein nicht objektartiger Wert zurückgegeben wird (wie `false` oder `undefined`), wenn ein eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Iterator-Protokollmethoden (`next()`, `return()` und `throw()`) sollen ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein boolean der `false` ist, wenn der Iterator den nächsten Wert in der Sequenz erzeugen konnte. (Dies ist gleichbedeutend damit, die `done`-Eigenschaft insgesamt nicht anzugeben.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Irgendein JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis sind keine der Eigenschaften streng erforderlich; wenn ein Objekt ohne irgendeine Eigenschaft zurückgegeben wird, ist es effektiv gleichbedeutend mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, sollten alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies nicht auf Sprachebene erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der dem Methodenrumpf verfügbar gemacht wird. Keine eingebaute Sprachfunktion wird irgendeinen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, welche, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer das Iterieren beendet hat und alle notwendigen Aufräumarbeiten durchgeführt werden können (wie das Schließen der Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer nicht beabsichtigt, weitere `next()`-Aufrufe zu machen und alle Aufräumaktionen durchgeführt werden können. Wenn eingebaute Sprachfunktionen `return()` für Aufräumarbeiten aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done` gleich `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist typischerweise eine Instanz von {{jsxref("Error")}}. Keine eingebaute Sprachfunktion ruft `throw()` zu Aufräumzwecken auf - es ist eine besondere Eigenschaft von Generatoren zur Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektierend (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) herauszufinden, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

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

Ein solches Objekt wird als _iterable iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die Iterables erwarten – daher ist es selten sinnvoll, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, nicht _Iterators_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode so implementiert, dass es `this` zurückgibt, sodass eingebaute Iteratoren auch iterierbar sind.

Wenn möglich, ist es jedoch besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von vorne beginnen, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) dies tut.

## Die async iterator- und async iterable-Protokolle

Es gibt ein weiteres Paar von Protokollen, die für asynchrone Iterationen verwendet werden, genannt **async iterator** und **async iterable**-Protokolle. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterable- und iterator-Protokollen, außer dass jeder Rückgabewert aus den Aufrufen der Iterator-Methoden in ein Promise eingebunden ist.

Ein Objekt implementiert das async iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem async iterator-Protokoll entspricht.

Ein Objekt implementiert das async iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronischen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronischen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleichen Semantiken wie die des synchronischen Iterators.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables produzieren oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, da jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Darüber hinaus sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls iterierbar.

In der Kern-JavaScript-Sprache gibt es kein Objekt, das asynchron iterierbar ist. Einige Web-APIs, wie zum Beispiel [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die von eingebauten Iterables zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die vorgenannte `[Symbol.iterator]() { return this; }`-Methode implementiert, wodurch sie alle iterierbare Iteratoren sind. Die `Iterator`-Klasse bietet neben der `next()`-Methode, die vom Iterator-Protokoll verlangt wird, noch zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Sie können die Prototypkette eines Iterators überprüfen, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameterverteilung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und `done` des letzten Ergebnisses `false` ist (d. h. der Iterator kann noch weitere Werte erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, wenn sie vorhanden ist. Dies kann passieren, wenn z. B. ein `break` oder `return` in einer `for...of`-Schleife auftritt oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten zur Interaktion mit asynchronen Iterables. Die Verwendung von `for...of`, Array-Verteilung usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d. h., es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), führt zu einem TypeError: x ist nicht iterierbar.

## Fehlerbehandlung

Da die Iteration den Kontrollfluss zwischen dem Iterator und dem Verbraucher hin und her überträgt, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Verbraucher mit Fehlern umgeht, die vom Iterator ausgelöst werden, und wie der Iterator mit Fehlern umgeht, die vom Verbraucher ausgelöst werden. Wenn Sie eine der eingebauten Iterationsmöglichkeiten verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte Invarianten verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, was als Richtlinie für Ihren eigenen Code verwendet werden kann, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterables

Fehler können auftreten, wenn der Iterator vom Iterable bezogen wird. Die durch die Sprache durchgesetzte Invariante ist, dass das Iterable einen gültigen Iterator produzieren muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das durch `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Wenn die eingebaute Syntax verwendet wird, um die Iteration auf einem nicht wohlgeformten Iterable zu initiieren, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn seine `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, versucht JavaScript, stattdessen die `[Symbol.iterator]`-Eigenschaft zu verwenden (und den resultierenden Iterator in einen asynchronen Iterator einzukapseln, indem die Methoden weitergeleitet werden, siehe [Fehlerweiterleitung](#fehlerweiterleitung)). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch den obigen Invarianten entsprechen.

Diese Art von Fehlern können verhindert werden, indem das Iterable zuerst validiert wird, bevor es versucht wird, es zu iterieren. Allerdings ist dies ziemlich selten, da Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler an den Aufrufer weiterleiten, damit dieser weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator weitergeführt wird (Aufruf von `next()`). Die durch die Sprache durchgesetzte Invariante hier ist, dass die `next()`-Methode ein Objekt zurückgeben muss (bei asynchronen Iteratoren ein Objekt nach dem Warten). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler auslöst (bei asynchronen Iteratoren kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergeleitet. Bei eingebauten Syntaxen wird die laufende Iteration ohne Wiederholung oder Aufräumarbeiten abgebrochen (mit der Annahme, dass, wenn die `next()`-Methode den Fehler ausgelöst hat, sie bereits aufgeräumt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und `next()` erneut aufrufen. Im Allgemeinen sollten Sie jedoch davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer entscheidet, die Iteration aus einem anderen Grund als den oben genannten Fehlern zu beenden, z.B. wenn er in seinem eigenen Code einen Fehlerzustand auftritt (zum Beispiel, wenn ein ungültiger Wert, der vom Iterator erzeugt wurde, behandelt wird), sollte er die `return()`-Methode auf dem Iterator aufrufen, falls vorhanden. Dies ermöglicht es dem Iterator, alle Aufräumarbeiten durchzuführen. Die `return()`-Methode wird nur bei vorzeitigen Beendigungen aufgerufen - wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgibt und andernfalls einen TypeError auslöst. Wenn die `return()`-Methode einen Fehler auslöst, wird der Fehler an den Aufrufer weitergeleitet. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer in seinem eigenen Code auf einen Fehlerzustand gestoßen ist, überschreibt dieser Fehler den von der `return()`-Methode ausgelösten Fehler.

Normalerweise implementiert der Aufrufer die Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

Das `catch` wird in der Lage sein, Fehler abzufangen, die auftreten, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (falls die `for`-Schleife vorzeitig beendet wird) und wenn der `for`-Schleifenrumpf einen Fehler auslöst.

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

Das Fehlen von `catch` hier führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` ausgelöst werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was gleichermaßen empfehlenswert ist), kann die Generatorfunktion entscheiden, weiterhin Werte zu erzeugen oder vorzeitig zu beenden. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen behalten. Der `finally`-Block wird garantiert entweder ausgeführt, wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxen kapseln einen Iterator in einen anderen Iterator ein. Dazu gehören der durch {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der eingekapselte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich dessen Rückgabewert und ausgelöster Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht vorhanden ist, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Falle von Iterator-Hilfsmethoden: wenn die `next()`-Methode des Iterator-Hilfswerkzeugs nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Das ist konsistent mit Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck nicht betreten hat.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die Methoden `return()` und `throw()` weiterleitet, finden Sie in dessen eigener Referenz.

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

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), möchten Sie wahrscheinlich den Zustand in eine Schließung kapseln.

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

### Ein Iterable mit einem Generator definieren

```js
function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(["yo", "ya"]);

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

### Ein Iterable mit einer Klasse definieren

Zustandskapselung kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erfolgen.

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

### Überschreibung von eingebauten Iterables

Ein Beispiel, ein {{jsxref("String")}} ist ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

Der [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) von `String` gibt die Code-Punkte der Zeichenkette einzeln zurück:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen bei der Iteration

Fast alle Iterables haben die gleiche zugrunde liegende Semantik: Sie kopieren die Daten nicht, wenn die Iteration beginnt. Stattdessen behalten sie einen Zeiger und verschieben ihn. Daher können Sie, wenn Sie Elemente in der Sammlung während der Iteration über die Sammlung hinzufügen, löschen oder ändern, unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich, wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) funktionieren.

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

Beachten Sie, wie es niemals `key2` protokolliert. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn der Zeiger auf den nächsten Schlüssel verschoben wird, landet er auf `key3`.

Bestimmte Implementierungen von Iterables vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um ein Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code mit einem `Map`:

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

Beachten Sie, wie es alle Schlüssel protokolliert. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, hier ist, wie es aussehen könnte:

```js
const tombstone = Symbol("tombstone");

class MyIterable {
  #data;
  constructor(data) {
    this.#data = data;
  }
  delete(deletedKey) {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i][1] === deletedKey) {
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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es ist am besten, die Sammlung nicht während der Iteration zu ändern, es sei denn, Sie wissen genau, wie das Iterable implementiert ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
