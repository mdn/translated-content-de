---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntax, sondern _Protokolle_. Diese Protokolle können von jedem Objekt implementiert werden, indem bestimmte Konventionen befolgt werden.

Es gibt zwei Protokolle: Das [iterable Protokoll](#das_iterable_protokoll) und das [iterator Protokoll](#das_iterator_protokoll).

## Das iterable Protokoll

**Das iterable Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder zu individualisieren, zum Beispiel, welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie etwa {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterable** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]` Schlüssel haben muss, die über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [iterator Protokoll](#das_iterator_protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (z.B. zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine Methode `[Symbol.iterator]()` ohne Argumente aufgerufen und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Funktion ohne Argumente aufgerufen wird, sie als Methode auf dem iterierbaren Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt wird.

Diese Funktion kann eine gewöhnliche Funktion sein oder sie kann eine Generatorfunktion sein, so dass beim Aufrufen ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag durch die Verwendung von `yield` bereitgestellt werden.

## Das iterator Protokoll

**Das iterator Protokoll** definiert eine Standardmethode zur Erzeugung einer Sequenz von Werten (entweder endlich oder unendlich) und potenziell eines Rückgabewerts, wenn alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein Nicht-Objektwert zurückgegeben wird (wie `false` oder `undefined`), wenn ein eingebautes Sprachfeature (wie `for...of`) den Iterator verwendet, wird eine {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des iterator Protokolls (`next()`, `return()`, und `throw()`) sollten ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Dieses muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}
  - : Ein Boolean, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert der Sequenz zu erzeugen. (Dies entspricht dem vollständigen Weglassen der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis ist keine der Eigenschaften strikt erforderlich; wenn ein Objekt ohne diese Eigenschaften zurückgegeben wird, entspricht es effektiv `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` auch `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der der Methodenkörper verfügbar gemacht wird. Kein eingebautes Sprachfeature wird einen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird zum Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die bei Aufruf dem Iterator mitteilen, dass der Aufrufer mit der Iteration fertig ist und notwendiges Aufräumen durchgeführt werden kann (z. B. Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value` gleich dem übergebenen `value` und `done` gleich `true`. Der Aufruf dieser Methode signalisiert dem Iterator, dass der Aufrufer nicht beabsichtigt, weitere `next()`-Aufrufe zu tätigen und Aufräumaktionen durchführen kann. Wenn eingebaute Sprachfeatures `return()` zum Aufräumen aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done` gleich `true`. Der Aufruf dieser Methode signalisiert dem Iterator, dass der Aufrufer einen Fehlerzustand erkennt, und `exception` ist typischerweise eine {{jsxref("Error")}} Instanz. Kein eingebautes Sprachfeature ruft `throw()` für Aufräumzwecke auf — es ist ein spezielles Feature von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektierend (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das iterator Protokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterable zu machen: Einfach eine `[Symbol.iterator]()`-Methode implementieren, die `this` zurückgibt.

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

Ein solches Objekt wird als ein _iterable Iterator_ bezeichnet. Auf diese Weise kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die Iterables erwarten — daher ist es selten nützlich, das Iterator-Protokoll zu implementieren, ohne auch Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, keine _Iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

```js
const generatorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof generatorObject.next);
// "function" — it has a next method (which returns the right result), so it's an iterator

console.log(typeof generatorObject[Symbol.iterator]);
// "function" — it has an [Symbol.iterator] method (which returns the right iterator), so it's an iterable

console.log(generatorObject[Symbol.iterator]() === generatorObject);
// true — its [Symbol.iterator] method returns itself (an iterator), so it's an iterable iterator
```

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, das die `[Symbol.iterator]()`-Methode implementiert, indem es `this` zurückgibt, sodass eingebaute Iteratoren ebenfalls iterable sind.

Wenn möglich, ist es jedoch besser, dass `iterable[Symbol.iterator]()` unterschiedliche Iteratoren zurückgibt, die immer von Anfang an starten, wie es [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die async Iterator und async Iterable Protokolle

Es gibt ein weiteres Paar von Protokollen für asynchrone Iteration, die als **async Iterator** und **async Iterable** Protokolle bezeichnet werden. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterable und iterator Protokollen, außer dass jeder Rückgabewert der Aufrufe der Iterator-Methoden in ein Versprechen eingebunden ist.

Ein Objekt implementiert das async iterable Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem async iterator Protokoll entspricht.

Ein Objekt implementiert das async iterator Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Versprechen zurückgibt. Das Versprechen erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Versprechen zurückgibt. Das Versprechen erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Versprechen zurückgibt. Das Versprechen erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben die gleiche Semantik wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache gibt APIs an, die entweder Iterables erzeugen oder konsumieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben durch [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Darüber hinaus sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt und einige DOM-Sammlungstypen wie [`NodeList`](/de/docs/Web/API/NodeList) auch Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das async iterable ist. Einige Web-APIs, wie zum Beispiel [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben standardmäßig die Methode `Symbol.asyncIterator`.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterable Iteratoren sind. [Async Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [async Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die async iterable Iteratoren sind.

Die Iteratoren, die von eingebauten Iterables zurückgegeben werden, erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die erwähnte `[Symbol.iterator]() { return this; }`-Methode implementiert und sie dadurch zu iterable Iteratoren macht. Die `Iterator`-Klasse bietet zusätzlich [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) zusätzlich zur `next()`-Methode, die vom Iterator-Protokoll gefordert wird. Sie können die Prototypenkette eines Iterators inspizieren, indem Sie ihn in einer grafischen Konsole protokollieren.

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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameterausbreitung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` `false` ist (d.h. der Iterator ist in der Lage, mehr Werte zu erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, falls vorhanden. Dies kann passieren, zum Beispiel, wenn ein `break` oder `return` in einer `for...of`-Schleife getroffen wird oder wenn alle Bezeichner in einer Array-Destrukturierung bereits gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [async Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, async Iterables zu verwenden. Die Verwendung von `for...of`, Array-Ausbreitung, etc. bei einem async Iterable, das nicht auch synchron iterable ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`) wird einen TypeError werfen: x is not iterable.

## Fehlerbehandlung

Da bei der Iteration die Kontrolle zwischen dem Iterator und dem Verbraucher hin und her übertragen wird, findet die Fehlerbehandlung in beide Richtungen statt: wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Iterationsmethoden verwenden, kann die Sprache auch Fehler auslösen, weil das Iterable bestimmte {{Glossary("invariant", "Invarianten")}} verletzt. Wir werden beschreiben, wie eingebaute Syntaxen Fehler generieren und behandeln, was als Leitfaden für Ihren eigenen Code verwendet werden kann, wenn Sie den Iterator manuell schrittweise aufrufen.

### Nicht wohlgeformte Iterables

Fehler können auftreten, wenn der Iterator vom Iterable erworben wird. Die Sprache-Invariante, die hier durchgesetzt wird, ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das durch `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Wenn die eingebaute Syntax verwendet wird, um die Iteration bei einem nicht wohlgeformten Iterable zu initiieren, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für async Iterables, wenn sein `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript zurück, um die `[Symbol.iterator]`-Eigenschaft stattdessen zu verwenden (und den resultierenden Iterator in einen async Iterator zu verwandeln, indem es die Methoden [weiterleitet](#weiterleitung_von_fehlern)). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft auch die oben genannten Invarianten erfüllen.

Diese Art von Fehlern kann vermieden werden, indem das Iterable zunächst validiert wird, bevor versucht wird, es zu iterieren. Allerdings ist es ziemlich selten, da Sie normalerweise den Typ des Objekts kennen, über das Sie iterieren. Wenn Sie dieses Iterable aus einem anderen Code erhalten, sollten Sie einfach den Fehler an den Aufrufer weiterleiten, damit er weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator fortschreitet (nächsten `next()`-Aufruf). Die Sprache-Invariante, die hier durchgesetzt wird, ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für async Iteratoren ein Objekt nach dem Ausharren). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler auslöst (für async Iteratoren kann sie auch ein abgelehntes Versprechen zurückgeben), wird der Fehler an den Aufrufer weitergegeben. Bei eingebauten Syntaxen wird die laufende Iteration ohne erneutes Versuchen oder Aufräumen abgebrochen (in der Annahme, dass, wenn die `next()`-Methode den Fehler ausgelöst hat, sie bereits aufgeräumt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und versuchen, `next()` erneut aufzurufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer beschließt, die Iteration aus einem anderen Grund als den in den vorherigen Absätzen genannten Fehlern zu beenden, z. B. wenn er in seinem eigenen Code in einen Fehlerstatus gerät (zum Beispiel, während er einen ungültigen Wert verarbeitet, der vom Iterator erzeugt wurde), sollte er die `return()`-Methode auf dem Iterator aufrufen, falls vorhanden. Dies ermöglicht es dem Iterator, alle Aufräumarbeiten durchzuführen. Die `return()`-Methode wird nur für vorzeitige Beendigungen aufgerufen — wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, unter der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache fordert auch, dass die `return()`-Methode ein Objekt zurückgibt und wirft einen TypeError, wenn dies nicht der Fall ist. Wenn die `return()`-Methode einen Fehler auslöst, wird der Fehler an den Aufrufer weitergegeben. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer einen Fehler in seinem eigenen Code festgestellt hat, überschreibt dieser Fehler den von der `return()`-Methode ausgelösten Fehler.

Üblicherweise implementiert der Aufrufer die Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // …
  }
} catch (e) {
  // Handle the error
}
```

Der `catch` kann Fehler abfangen, die ausgelöst werden, wenn `iterable` kein gültiges Iterable ist, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (wenn die `for`-Schleife vorzeitig beendet wird), und wenn der `for`-Schleifenkörper einen Fehler auslöst.

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

Das Fehlen von `catch` hier führt dazu, dass Fehler, die von `doSomething()` oder `doSomethingElse()` erzeugt werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was gleichermaßen ratsam ist), kann die Generatorfunktion entscheiden, ob sie weiterhin Werte erzeugt oder vorzeitig beendet wird. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen beibehalten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn der letzte `next()`-Aufruf erfolgt oder wenn `return()` aufgerufen wird.

### Weiterleitung von Fehlern

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen ein. Dazu gehören der von {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein versteckter Wrapper, wenn Sie async Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umwickelte Iterator ist dann verantwortlich für die Weiterleitung von Fehlern zwischen dem inneren Iterator und dem Aufrufer.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich ihres Rückgabewerts und der ausgelösten Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht existiert, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Fall von Iterator-Hilfsmethoden: Wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck noch nicht betreten hat.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()` und `throw()`-Methoden weiterleitet, finden Sie in dessen eigener Referenz.

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

### Grundlegender Iterator

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), würden Sie wahrscheinlich den Zustand in einer Closure kapseln wollen.

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
// …
```

### Definition eines Iterables mit einer Klasse

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

### Überschreibung von eingebauten Iterables

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes Iterable-Objekt:

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

Beachten Sie, wie das Neudefinieren von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Änderungen beim Iterieren

Fast alle Iterables haben dieselbe zugrunde liegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, an dem die Iteration beginnt. Vielmehr behalten sie einen Zeiger bei und bewegen ihn herum. Daher, wenn Sie Elemente in der Sammlung während der Iteration hinzufügen, löschen oder ändern, können Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ähnelt sehr der Funktionsweise von [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

Betrachten Sie den folgenden Fall, der die Verwendung von [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) zeigt:

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

Beachten Sie, wie es `key2` nie protokolliert. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn der Zeiger zum nächsten Schlüssel bewegt wird, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabsteine" setzen, um ein Verschieben der verbleibenden Werte zu verhindern. Betrachten Sie den ähnlichen Code, der eine `Map` verwendet:

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
> Gleichzeitige Änderungen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es ist am besten, zu vermeiden, die Sammlung während des Iterierens zu ändern, es sei denn, Sie wissen genau, wie das Iterable implementiert ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators and generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
