---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

**Iterationsprotokolle** sind keine neuen integrierten Funktionen oder Syntaxelemente, sondern _Protokolle_. Jedes Objekt kann diese Protokolle implementieren, indem es bestimmte Konventionen einhält.

Es gibt zwei Protokolle: das [Iterable-Protokoll](#das_iterable-protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das Iterable-Protokoll

**Das Iterable-Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten festzulegen oder anzupassen, etwa welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige integrierte Typen sind [integrierte Iterables](#integrierte_iterables) mit einem standardmäßigen Iterationsverhalten, beispielsweise {{jsxref("Array")}} oder {{jsxref("Map")}}. Andere Typen, etwa {{jsxref("Object")}}, sind nicht iterierbar.

Damit ein Objekt **iterierbar** ist, muss es die Methode **`[Symbol.iterator]()`** implementieren. Das bedeutet, dass das Objekt selbst oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) eine Eigenschaft mit dem Schlüssel `[Symbol.iterator]` besitzen muss, der über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Immer wenn über ein Objekt iteriert werden soll, beispielsweise zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife, wird seine Methode `[Symbol.iterator]()` ohne Argumente aufgerufen. Der zurückgegebene **Iterator** wird verwendet, um die zu durchlaufenden Werte abzurufen.

Beachten Sie, dass diese Funktion ohne Argumente als Methode des iterierbaren Objekts aufgerufen wird. Innerhalb der Funktion kann daher über das Schlüsselwort `this` auf die Eigenschaften des iterierbaren Objekts zugegriffen werden, um zu entscheiden, welche Werte bei der Iteration bereitgestellt werden.

Diese Funktion kann eine gewöhnliche Funktion oder eine Generatorfunktion sein. In beiden Fällen gibt sie beim Aufruf ein Iteratorobjekt zurück. Innerhalb der Generatorfunktion können die einzelnen Einträge mit `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine einheitliche Methode, um eine endliche oder unendliche Folge von Werten zu erzeugen und gegebenenfalls einen Rückgabewert bereitzustellen, nachdem alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine Methode **`next()`** mit der folgenden Semantik implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument entgegennimmt und ein Objekt zurückgibt, das der Schnittstelle `IteratorResult` entspricht (siehe unten). Wird ein Wert zurückgegeben, der kein Objekt ist, etwa `false` oder `undefined`, während eine integrierte Sprachfunktion wie `for...of` den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Von allen Methoden des Iterator-Protokolls (`next()`, `return()` und `throw()`) wird erwartet, dass sie ein Objekt zurückgeben, das die Schnittstelle `IteratorResult` implementiert. Es hat die folgenden Eigenschaften:

- `done` {{optional_inline}}
  - : Ein boolescher Wert, der `false` ist, wenn der Iterator den nächsten Wert der Folge erzeugen konnte. (Dies entspricht dem vollständigen Weglassen der Eigenschaft `done`.)

    Der Wert ist `true`, wenn der Iterator seine Folge abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Ein beliebiger JavaScript-Wert, den der Iterator zurückgibt. Kann weggelassen werden, wenn `done` den Wert `true` hat.

In der Praxis ist keine der beiden Eigenschaften zwingend erforderlich. Wird ein Objekt ohne diese Eigenschaften zurückgegeben, entspricht dies im Ergebnis `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, sollten auch alle späteren Aufrufe von `next()` `done: true` zurückgeben. Dies wird allerdings nicht auf Sprachebene erzwungen.

Die Methode `next` kann einen Wert entgegennehmen, der ihrem Funktionskörper zur Verfügung steht. Die einzige Sprachfunktion, die einen Wert übergibt, ist {{jsxref("Operators/yield*", "yield*")}}. Der an die Methode `next` eines [Generators](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren. Wenn sie aufgerufen werden, teilen sie dem Iterator mit, dass der Aufrufer die Iteration beendet, sodass der Iterator notwendige Bereinigungsarbeiten ausführen kann, beispielsweise eine Datenbankverbindung schließen.

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument entgegennimmt und ein Objekt zurückgibt, das der Schnittstelle `IteratorResult` entspricht. Üblicherweise entspricht dessen `value` dem übergebenen `value`, und `done` ist `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer keine weiteren Aufrufe von `next()` beabsichtigt und Bereinigungsarbeiten durchgeführt werden können. Wenn integrierte Sprachfunktionen `return()` zur Bereinigung aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument entgegennimmt und ein Objekt zurückgibt, das der Schnittstelle `IteratorResult` entspricht. Üblicherweise ist `done` dabei `true`. Der Aufruf dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlerzustand festgestellt hat. `exception` ist üblicherweise eine {{jsxref("Error")}}-Instanz. Keine integrierte Sprachfunktion ruft `throw()` zur Bereinigung auf – es ist eine besondere Eigenschaft von Generatoren, die der Symmetrie von `return` und `throw` dient.

> [!NOTE]
> Es lässt sich nicht durch Introspektion feststellen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert. Dazu müssen Sie `next()` tatsächlich aufrufen und das zurückgegebene Ergebnis überprüfen.

Es ist sehr einfach, einen Iterator zugleich iterierbar zu machen: Implementieren Sie einfach eine Methode `[Symbol.iterator]()`, die `this` zurückgibt.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann der Iterator mit den verschiedenen Syntaxformen verwendet werden, die iterierbare Objekte erwarten. Deshalb ist es selten sinnvoll, das Iterator-Protokoll zu implementieren, ohne das Objekt zugleich iterierbar zu machen. (Tatsächlich erwarten fast alle Syntaxformen und APIs _iterierbare Objekte_ und keine _Iteratoren_.) Das [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle integrierten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}. Dort ist die Methode `[Symbol.iterator]()` so implementiert, dass sie `this` zurückgibt. Somit sind integrierte Iteratoren auch iterierbar.

Wenn möglich, ist es jedoch besser, wenn `iterable[Symbol.iterator]()` jeweils unterschiedliche Iteratoren zurückgibt, die immer am Anfang beginnen, wie es beispielsweise [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die Protokolle für asynchrone Iteratoren und asynchrone Iterables

Für die asynchrone Iteration gibt es ein weiteres Protokollpaar: das Protokoll für **asynchrone Iteratoren** und das für **asynchrone Iterables**. Ihre Schnittstellen ähneln denen des Iterable- und des Iterator-Protokolls stark. Der Unterschied besteht darin, dass jeder Rückgabewert eines Aufrufs einer Iteratormethode in ein Promise eingebettet ist.

Ein Objekt implementiert das Protokoll für asynchrone Iterables, wenn es die folgende Methode implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem Protokoll für asynchrone Iteratoren entspricht.

Ein Objekt implementiert das Protokoll für asynchrone Iteratoren, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument entgegennimmt und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der Schnittstelle `IteratorResult` entspricht. Dessen Eigenschaften haben dieselbe Semantik wie bei einem synchronen Iterator.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument entgegennimmt und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der Schnittstelle `IteratorResult` entspricht. Dessen Eigenschaften haben dieselbe Semantik wie bei einem synchronen Iterator.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument entgegennimmt und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der Schnittstelle `IteratorResult` entspricht. Dessen Eigenschaften haben dieselbe Semantik wie bei einem synchronen Iterator.

## Zusammenspiel der Sprache mit den Iterationsprotokollen

Die Sprache definiert APIs, die iterierbare Objekte und Iteratoren erzeugen oder verwenden.

### Integrierte Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind integrierte Iterables, weil ihre jeweiligen `prototype`-Objekte eine Methode `[Symbol.iterator]()` implementieren. Auch das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Collection-Typen wie [`NodeList`](/de/docs/Web/API/NodeList) sind iterierbar.
Abgesehen von {{jsxref("AsyncGenerator")}} gibt es in der JavaScript-Kernsprache kein Objekt, das asynchron iterierbar ist. Bei manchen Web-APIs, beispielsweise [`ReadableStream`](/de/docs/Web/API/ReadableStream), ist die Methode `Symbol.asyncIterator` standardmäßig vorhanden.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchron iterierbare Iteratoren sind.

Die von integrierten Iterables zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse, {{jsxref("Iterator")}}. Diese implementiert die zuvor erwähnte Methode `[Symbol.iterator]() { return this; }`, wodurch sie alle iterierbare Iteratoren sind. Die Klasse `Iterator` stellt neben der vom Iterator-Protokoll geforderten Methode `next()` zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) bereit. Sie können die Prototypenkette eines Iterators untersuchen, indem Sie ihn in einer grafischen Konsole ausgeben.

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

### Integrierte APIs, die Iterables akzeptieren

Viele APIs akzeptieren iterierbare Objekte. Beispiele sind:

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

### Syntaxformen, die Iterables erwarten

Einige Anweisungen und Ausdrücke erwarten iterierbare Objekte, beispielsweise {{jsxref("Statements/for...of", "for...of")}}-Schleifen, die [Spread-Syntax für Arrays und Parameter](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}} und die [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn integrierte Syntaxformen einen Iterator durchlaufen und `done` im letzten Ergebnis `false` ist (der Iterator also weitere Werte erzeugen kann), aber keine weiteren Werte benötigt werden, wird die Methode `return` aufgerufen, sofern sie vorhanden ist. Das kann beispielsweise geschehen, wenn in einer `for...of`-Schleife ein `break` oder `return` erreicht wird oder bei einer Array-Destrukturierung bereits alle Bezeichner gebunden sind.

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

Die Verwendung von `for...of`, der Spread-Syntax für Arrays usw. mit einem asynchronen Iterable, das nicht zugleich synchron iterierbar ist (also `[Symbol.asyncIterator]()`, aber kein `[Symbol.iterator]()` besitzt), löst einen TypeError aus: x is not iterable. Sie müssen Syntaxformen verwenden, die für asynchrone Iterables vorgesehen sind, darunter [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht in [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) und {{jsxref("Array.fromAsync()")}}. Umgekehrt können diese Syntaxformen auch synchrone Iterables verarbeiten und deren Ergebnisse implizit in Promises umwandeln.

## Fehlerbehandlung

Bei einer Iteration wechselt die Kontrolle zwischen dem Iterator und dem aufrufenden Code. Deshalb spielt die Fehlerbehandlung in beide Richtungen eine Rolle: wie der aufrufende Code mit Fehlern umgeht, die der Iterator auslöst, und wie der Iterator mit Fehlern umgeht, die der aufrufende Code auslöst. Wenn Sie eine der integrierten Iterationsmöglichkeiten verwenden, kann die Sprache auch Fehler auslösen, weil das Iterable bestimmte {{Glossary("invariant", "Invarianten")}} verletzt. Im Folgenden wird beschrieben, wie integrierte Syntaxformen Fehler erzeugen und behandeln. Dies kann Ihnen als Orientierung dienen, wenn Sie einen Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterables

Beim Abrufen des Iterators aus einem Iterable können Fehler auftreten. Die Sprache erzwingt dabei die Invariante, dass das Iterable einen gültigen Iterator bereitstellen muss:

- Es besitzt eine aufrufbare Methode `[Symbol.iterator]()`.
- Die Methode `[Symbol.iterator]()` gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt besitzt eine aufrufbare Methode `next()`.

Wenn Sie mit integrierter Syntax eine Iteration über ein nicht wohlgeformtes Iterable beginnen, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Hat bei einem asynchronen Iterable dessen Eigenschaft `[Symbol.asyncIterator]()` den Wert `undefined` oder `null`, verwendet JavaScript stattdessen die Eigenschaft `[Symbol.iterator]` und umhüllt den resultierenden Iterator mit einem asynchronen Iterator, indem es dessen Methoden [weiterleitet](#weiterleitung_von_fehlern). Andernfalls muss auch die Eigenschaft `[Symbol.asyncIterator]` die oben genannten Invarianten erfüllen.

Sie können diese Art von Fehler vermeiden, indem Sie das Iterable vor Beginn der Iteration prüfen. Solche Fehler sind allerdings recht selten, da Ihnen der Typ des Objekts, über das Sie iterieren, normalerweise bekannt ist. Wenn Sie das Iterable von anderem Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weitergeben, damit dieser erkennt, dass eine ungültige Eingabe übergeben wurde.

### Fehler während der Iteration

Die meisten Fehler treten beim Fortschreiten des Iterators auf, also beim Aufruf von `next()`. Die Sprache erzwingt dabei die Invariante, dass die Methode `next()` ein Objekt zurückgeben muss (bei asynchronen Iteratoren nach dem Abwarten). Andernfalls wird ein TypeError ausgelöst.

Wenn diese Invariante verletzt wird oder die Methode `next()` einen Fehler auslöst (bei asynchronen Iteratoren kann sie auch ein zurückgewiesenes Promise zurückgeben), wird der Fehler an den Aufrufer weitergegeben. Bei integrierten Syntaxformen wird die laufende Iteration ohne erneuten Versuch und ohne Bereinigung abgebrochen. Dabei wird angenommen, dass die Methode `next()` bereits selbst aufgeräumt hat, wenn sie den Fehler ausgelöst hat. Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und `next()` erneut aufrufen. Im Allgemeinen sollten Sie jedoch davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der aufrufende Code die Iteration aus einem anderen Grund als den im vorigen Absatz genannten Fehlern beendet, beispielsweise weil in seinem eigenen Code ein Fehlerzustand eintritt (etwa bei der Verarbeitung eines ungültigen Werts aus dem Iterator), sollte er die Methode `return()` des Iterators aufrufen, sofern sie vorhanden ist. Dadurch kann der Iterator notwendige Bereinigungsarbeiten ausführen. Die Methode `return()` wird nur bei einem vorzeitigen Abbruch aufgerufen. Gibt `next()` `done: true` zurück, wird `return()` nicht aufgerufen, da angenommen wird, dass der Iterator bereits aufgeräumt hat.

Auch die Methode `return()` kann ungültig sein! Die Sprache erzwingt ebenfalls, dass `return()` ein Objekt zurückgibt, und löst andernfalls einen TypeError aus. Wenn die Methode `return()` einen Fehler auslöst, wird dieser an den Aufrufer weitergegeben. Wird `return()` jedoch aufgerufen, weil im eigenen Code des Aufrufers ein Fehler aufgetreten ist, hat dieser ursprüngliche Fehler Vorrang vor dem Fehler aus `return()`.

Üblicherweise implementiert der aufrufende Code die Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // …
  }
} catch (e) {
  // Handle the error
}
```

Der `catch`-Block kann Fehler abfangen, die auftreten, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (falls die `for`-Schleife vorzeitig endet) und wenn im Rumpf der `for`-Schleife ein Fehler ausgelöst wird.

Die meisten Iteratoren werden mit Generatorfunktionen implementiert. Daher zeigen wir, wie Generatorfunktionen typischerweise mit Fehlern umgehen:

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

Da hier kein `catch`-Block vorhanden ist, werden Fehler, die `doSomething()` oder `doSomethingElse()` auslösen, an den Aufrufer von `gen` weitergegeben. Werden diese Fehler innerhalb der Generatorfunktion abgefangen (was ebenfalls ratsam sein kann), kann die Generatorfunktion entscheiden, ob sie weitere Werte bereitstellt oder vorzeitig beendet wird. Für Generatoren, die Ressourcen offen halten, ist der `finally`-Block jedoch notwendig. Seine Ausführung ist gewährleistet: entweder beim letzten Aufruf von `next()` oder beim Aufruf von `return()`.

### Weiterleitung von Fehlern

Einige integrierte Syntaxformen umhüllen einen Iterator mit einem weiteren Iterator. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()` und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) sowie ein nicht sichtbarer Wrapper, der entsteht, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) mit synchronen Iteratoren verwenden. Der umhüllende Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Umhüllende Iteratoren leiten die Methode `next()` des inneren Iterators im Allgemeinen direkt weiter, einschließlich ihres Rückgabewerts und ausgelöster Fehler. Der asynchrone Wrapper eines synchronen Iterators wartet auf die Eigenschaft `value` des zurückgegebenen Objekts und wandelt ausgelöste Fehler in Promise-Zurückweisungen um. Wird ein bereitgestelltes Promise zurückgewiesen, ruft der Wrapper die Methode `return()` des inneren Iterators auf, sofern sie vorhanden ist, bevor er sein eigenes Promise zurückweist. Löst dagegen die Methode `next()` des inneren Iterators selbst einen Fehler aus, weist der Wrapper sein Promise zurück, ohne `return()` aufzurufen.
- Umhüllende Iteratoren leiten die Methode `return()` des inneren Iterators im Allgemeinen direkt weiter. Wenn der innere Iterator keine Methode `return()` besitzt, geben sie stattdessen `{ done: true, value: undefined }` zurück. Bei Iterator-Hilfsmethoden gilt: Wurde die Methode `next()` der Hilfsmethode noch nicht aufgerufen, gibt der umhüllende Iterator nach einem gegebenenfalls versuchten Aufruf von `return()` des inneren Iterators immer `{ done: true, value: undefined }` zurück. Dies entspricht dem Verhalten von Generatorfunktionen, bei denen die Ausführung den Ausdruck `yield*` noch nicht erreicht hat.
- `yield*` ist die einzige integrierte Syntaxform, die die Methode `throw()` an den inneren Iterator weiterleitet. Wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die Methoden `return()` und `throw()` weiterleitet, erfahren Sie in der zugehörigen Referenz.

## Beispiele

### Benutzerdefinierte Iterables

So können Sie eigene Iterables erstellen:

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

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie den Iterator nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie im obigen Beispiel), sollten Sie den Zustand wahrscheinlich in einer Closure kapseln.

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

Der Zustand lässt sich auch mithilfe [privater Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) kapseln.

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

### Integrierte Iterables überschreiben

Ein {{jsxref("String")}} ist beispielsweise ein integriertes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

Der [Standarditerator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) von `String` gibt die Codepunkte des Strings einzeln zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten neu definieren, indem Sie eine eigene Methode `[Symbol.iterator]()` bereitstellen:

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

Beachten Sie, wie sich die Neudefinition von `[Symbol.iterator]()` auf das Verhalten integrierter Konstrukte auswirkt, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen während der Iteration

Fast alle Iterables haben dieselbe grundlegende Semantik: Sie kopieren die Daten nicht zu Beginn der Iteration. Stattdessen halten sie einen Zeiger vor und verschieben ihn. Wenn Sie also während der Iteration Elemente einer Collection hinzufügen, löschen oder ändern, können Sie unbeabsichtigt beeinflussen, ob andere, _unveränderte_ Elemente der Collection besucht werden. Das ähnelt stark der Funktionsweise [iterativer Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

Betrachten Sie das folgende Beispiel mit [`URLSearchParams`](/de/docs/Web/API/URLSearchParams):

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

Beachten Sie, dass `key2` nie ausgegeben wird. Das liegt daran, dass `URLSearchParams` intern eine Liste von Schlüssel-Wert-Paaren verwendet. Wenn `deleteme1` besucht und gelöscht wird, rücken alle anderen Einträge um eine Position nach links. Dadurch nimmt `key2` die bisherige Position von `deleteme1` ein. Wenn der Zeiger zum nächsten Schlüssel weiterwandert, landet er bei `key3`.

Einige Implementierungen von Iterables vermeiden dieses Problem, indem sie gelöschte Einträge mit einem Platzhalterwert markieren, statt die übrigen Werte zu verschieben. Betrachten Sie dazu ähnlichen Code mit einer `Map`:

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

Beachten Sie, dass alle Schlüssel ausgegeben werden. Das liegt daran, dass `Map` die übrigen Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte das so aussehen:

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
> Gleichzeitige Änderungen sind im Allgemeinen fehleranfällig und verwirrend. Wenn Sie nicht genau wissen, wie das Iterable implementiert ist, sollten Sie die Collection während der Iteration möglichst nicht verändern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Leitfaden zu [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
