---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: d2487ed541a886302df3e7d25f2fb1769b8420e7
---

{{jsSidebar("Mehr")}}

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntax, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem einige Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterable-Protokoll](#das_iterable-protokoll) und das [iterator-Protokoll](#das_iterator-protokoll).

## Das iterable-Protokoll

**Das iterable-Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, z. B. welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, die über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (wie zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu durchlaufenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Funktion ohne Argumente aufgerufen wird, sie als Methode auf dem iterierbaren Objekt ausgeführt wird. Daher kann innerhalb der Funktion das Schlüsselwort `this` verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine gewöhnliche Funktion oder eine Generatorfunktion sein, sodass beim Aufruf ein Iteratorobjekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mit `yield` bereitgestellt werden.

## Das iterator-Protokoll

**Das iterator-Protokoll** definiert eine standardisierte Methode, um eine Sequenz von Werten (entweder endlich oder unendlich) zu erzeugen und möglicherweise einen Rückgabewert zu liefern, wenn alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantic implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht (siehe unten). Wenn ein immanenter Wert zurückgegeben wird (wie `false` oder `undefined`), wenn eine eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das das `IteratorResult`-Interface implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein boolean, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies entspricht dem Fehlen der Angabe der `done`-Eigenschaft insgesamt.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann ausgelassen werden, wenn `done` `true` ist.

In der Praxis ist keine dieser Eigenschaften zwingend erforderlich; wenn ein Objekt ohne diese Eigenschaften zurückgegeben wird, entspricht dies effektiv `{ done: false, value: undefined }`.

Gibt ein Iterator ein Ergebnis mit `done: true` zurück, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der im Methodenrumpf verfügbar gemacht wird. Keine eingebaute Sprachfunktion wird irgendeinen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die **`return(value)`** und **`throw(exception)`** Methoden implementieren, die, wenn sie aufgerufen werden, dem Iterator signalisieren, dass der Aufrufer die Iteration beendet hat und notwendige Aufräumarbeiten durchführen kann (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Das Aufrufen dieser Methode signalisiert dem Iterator, dass der Aufrufer nicht beabsichtigt, weitere `next()`-Aufrufe zu tätigen und alle Aufräumaktionen durchführen kann. Wenn eingebaute Sprachfunktionen `return()` zum Aufräumen aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das dem `IteratorResult`-Interface entspricht, typischerweise mit `done` gleich `true`. Das Aufrufen dieser Methode signalisiert dem Iterator, dass der Aufrufer einen Fehlerzustand entdeckt und `exception` typischerweise eine {{jsxref("Error")}}-Instanz ist. Keine eingebaute Sprachfunktion ruft `throw()` zu Bereinigungszwecken auf — es handelt sich um ein spezielles Feature von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektiv (d. h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das iterator-Protokoll implementiert.

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

Ein solches Objekt wird als _iterabler Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die Iterables erwarten — daher ist es selten sinnvoll, das iterator-Protokoll zu implementieren, ohne auch iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxe und APIs _iterables_, nicht _iterators_.) Das [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode als `this` zurückgebend implementiert, sodass eingebaute Iteratoren auch iterierbar sind.

Wenn möglich, ist es jedoch besser, wenn `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer von Anfang an starten, so wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) es tut.

## Die Protokolle für asynchrone Iteratoren und asynchrone Iterables

Es gibt ein weiteres Paar von Protokollen für asynchrone Iteration, die als **asynchrones Iterator**- und **asynchrones Iterable**-Protokolle bezeichnet werden. Sie haben sehr ähnliche Schnittstellen wie die iterable- und iterator-Protokolle, mit der Ausnahme, dass jeder Rückgabewert der Aufrufe der Iterator-Methoden in einem Promise verpackt ist.

Ein Objekt implementiert das asynchrone Iterable-Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem asynchronen Iterator-Protokoll entspricht.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselben Semantiken wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselben Semantiken wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise erfüllt ein Objekt, das dem `IteratorResult`-Interface entspricht, und die Eigenschaften haben dieselben Semantiken wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und Iterationsprotokollen

Die Sprache definiert APIs, die entweder Iterables erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Darüber hinaus sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) ebenfalls Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterierbar ist. Einige Web-APIs wie [`ReadableStream`](/de/docs/Web/API/ReadableStream) haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die von eingebauten Iterables zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die oben erwähnte `[Symbol.iterator]() { return this; }`-Methode implementiert, wodurch sie alle iterierbare Iteratoren sind. Die `Iterator`-Klasse bietet neben der `next()`-Methode, die durch das iterator-Protokoll erforderlich ist, zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) an. Sie können die Prototypenkette eines Iterators inspizieren, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameterverbreitung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}} und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` auf `false` ist (d. h. der Iterator kann mehr Werte erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann z. B. passieren, wenn in einer `for...of`-Schleife ein `break` oder `return` auftritt oder wenn alle Bezeichner in einer Array-Destrukturierung bereits gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Verbreitung usw. auf einem asynchronen Iterable, das nicht auch synchron iterierbar ist (d. h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), führt zu einem TypeError: x ist nicht iterierbar.

## Fehlerbehandlung

Da bei der Iteration die Kontrolle zwischen Iterator und Verbraucher hin und her übertragen wird, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Möglichkeiten zur Iteration verwenden, kann die Sprache auch Fehler auswerfen, weil das Iterable bestimmte Invarianten verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler generieren und behandeln, was als Richtlinie für Ihren eigenen Code verwendet werden kann, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterables

Fehler können auftreten, wenn der Iterator vom Iterable erworben wird. Die hier durchgesetzte Sprachinvariante ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Wenn die eingebaute Syntax verwendet wird, um die Iteration auf einem nicht wohlgeformten Iterable zu initiieren, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn die `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript auf die Verwendung der `[Symbol.iterator]()`-Eigenschaft zurück (und umhüllt den resultierenden Iterator in einen asynchronen Iterator, indem die Methoden [weitergeleitet](#weiterleiten_von_fehlern) werden). Andernfalls muss die `[Symbol.asyncIterator]()`-Eigenschaft auch den oben genannten Invarianten entsprechen.

Dieser Fehlertyp kann vermieden werden, indem zuerst das Iterable validiert wird, bevor versucht wird, es zu iterieren. Es ist jedoch relativ selten, da Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weiterleiten, damit dieser weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator durchlaufen wird (Aufrufen von `next()`). Die hier durchgesetzte Sprachinvariante ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren, ein Objekt nach dem Awaiting). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler wirft (für asynchrone Iteratoren, kann sie auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergegeben. Bei eingebauten Syntaxen wird die gerade auszuführende Iteration ohne erneutes Versuchen oder Säuberung abgebrochen (mit der Annahme, dass, wenn die `next()`-Methode den Fehler geworfen hat, sie bereits gesäubert hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler möglicherweise abfangen und `next()` erneut aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer entscheidet, die Iteration aus einem anderen Grund als den in den vorhergehenden Absätzen aufgeführten Fehlern zu beenden, z. B. wenn er in seinem eigenen Code in einen Fehlerzustand gerät (zum Beispiel beim Umgang mit einem ungültigen Wert, der vom Iterator erzeugt wurde), sollte er die `return()`-Methode auf dem Iterator aufrufen, falls eine vorhanden ist. Dies ermöglicht es dem Iterator, Bereinigungen durchzuführen. Die `return()`-Methode wird nur für vorzeitige Beendigungen aufgerufen—wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache erzwingt ebenfalls, dass die `return()`-Methode ein Objekt zurückgibt und löst andernfalls einen TypeError aus. Wenn die `return()`-Methode einen Fehler wirft, wird der Fehler an den Aufrufer weitergegeben. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer in seinem eigenen Code auf einen Fehler gestoßen ist, überschreibt dieser Fehler den Fehler, den die `return()`-Methode geworfen hat.

Üblicherweise implementiert der Aufrufer die Fehlerbehandlung so:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` kann Fehler abfangen, die ausgelöst werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (wenn die `for`-Schleife frühzeitig beendet wird) und wenn der `for`-Schleifenkörper einen Fehler wirft.

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

Das Fehlen eines `catch` hier verursacht, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was gleichermaßen ratsam ist), kann die Generatorfunktion entscheiden, weiterhin Werte zu erzeugen oder frühzeitig zu beenden. Der `finally`-Block ist jedoch für Generatoren, die offene Ressourcen halten, notwendig. Der `finally`-Block läuft garantiert, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Weiterleiten von Fehlern

Einige eingebaute Syntaxen umwickeln einen Iterator in einen anderen Iterator. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein verborgener Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umwickelte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich dessen Rückgabewert und ausgelöste Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht vorhanden ist, wird stattdessen `{ done: true, value: undefined }` zurückgegeben. Im Fall von Iterator-Helfern: wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, der aktuelle Iterator immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck noch nicht betreten hat.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die Methoden `return()` und `throw()` weiterleitet, finden Sie in seiner eigenen Referenz.

## Beispiele

### Benutzerdefinierte Iterables

Sie können eigene Iterables wie folgt erstellen:

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

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie im obigen Beispiel gezeigt), möchten Sie den Zustand möglicherweise in einer Closure kapseln.

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

Die Zustandskapselung kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erfolgen.

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

### Eingebaute Iterables überschreiben

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes iterierbares Objekt:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstruktionen beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen während der Iteration

Fast alle Iterables haben die gleiche grundlegende Semantik: Sie kopieren die Daten nicht zum Zeitpunkt des Beginns der Iteration. Stattdessen behalten sie einen Zeiger und bewegen ihn herum. Daher, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie über die Sammlung iterieren, können Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) funktionieren.

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

Beachten Sie, wie es nie `key2` protokolliert. Dies liegt daran, dass ein `URLSearchParams` im Wesentlichen eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` früher innehatte, und wenn der Zeiger zum nächsten Schlüssel bewegt wird, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um das Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code mit einem `Map`:

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

Beachten Sie, wie es alle Schlüssel protokolliert. Dies liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es ist am besten, die Sammlung während der Iteration nicht zu verändern, es sei denn, Sie wissen genau, wie das Iterable implementiert ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
