---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 76bdd4e01dc2b1aa09da861f345cf21368bc83b6
---

{{jsSidebar("More")}}

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntax, sondern _Protokolle_. Diese Protokolle können von jedem Objekt durch Beachten bestimmter Konventionen implementiert werden.

Es gibt zwei Protokolle: Das [iterable Protokoll](#das_iterable_protokoll) und das [iterator Protokoll](#das_iterator_protokoll).

## Das iterable Protokoll

**Das iterable Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, beispielsweise welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterables](#eingebaute_iterables) mit einem Standard-Iterationsverhalten, wie etwa {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) dies nicht sind.

Um **iterable** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]` Schlüssel haben muss, der über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine null-argumentierte Funktion, die ein Objekt zurückgibt, das dem [iterator Protokoll](#das_iterator_protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (zum Beispiel am Anfang einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass diese null-argumentierte Funktion als Methode auf dem iterierbaren Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine normale Funktion sein oder eine Generatorfunktion, sodass beim Aufruf ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mit `yield` bereitgestellt werden.

## Das iterator Protokoll

**Das iterator Protokoll** definiert eine Standardmethode zur Erzeugung einer Wertesequenz (entweder endlich oder unendlich) und potenziell einen Rückgabewert, wenn alle Werte generiert wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument annimmt und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein Nicht-Objekt-Wert zurückgegeben wird (wie `false` oder `undefined`), wenn ein eingebautes Sprachfeature (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein Boolean, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies entspricht dem vollständigen Fehlen der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder von dem Iterator zurückgegebene JavaScript-Wert. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis sind keine der Eigenschaften streng erforderlich; wenn ein Objekt ohne eine dieser Eigenschaften zurückgegeben wird, ist es effektiv gleichwertig mit `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird von allen nachfolgenden Aufrufen von `next()` erwartet, dass sie ebenfalls `done: true` zurückgeben, obwohl dies auf Sprachebene nicht erzwungen wird.

Die `next`-Methode kann einen Wert erhalten, der dem Methodeninhalt zur Verfügung gestellt wird. Kein eingebautes Sprachfeature wird einen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird der Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die, wenn aufgerufen, dem Iterator mitteilen, dass der Anrufer mit dem Iterieren fertig ist und gegebenenfalls Bereinigungsvorgänge durchführen kann (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument annimmt und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value`, das dem übergebenen `value` entspricht, und `done`, das `true` ist. Wenn eingebauten Sprachfunktionen `return()` für Bereinigungen aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument annimmt und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done`, das `true` ist. Wenn eingebauten Sprachfunktionen `throw()` für Bereinigungszwecke aufrufen, wird eine Ausnahme als Argument übergeben, normalerweise eine {{jsxref("Error")}} Instanz.

> [!NOTE]
> Es ist nicht möglich, reflektiv (d. h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) festzustellen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

Es ist sehr einfach, einen Iterator auch iterierbar zu machen: Implementieren Sie einfach eine `[Symbol.iterator]()`-Methode, die `this` zurückgibt.

```js
// Erfüllt sowohl das Iterator-Protokoll als auch Iterable
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von verschiedenen Syntaxen konsumiert werden, die Iterables erwarten – es ist daher selten nützlich, das Iterator-Protokoll ohne auch das Iterable zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _Iterables_, keine _Iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

```js
const aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof aGeneratorObject.next);
// "function" — es hat eine next-Methode (die das richtige Ergebnis zurückgibt), also ist es ein Iterator

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function" — es hat eine [Symbol.iterator]-Methode (die den richtigen Iterator zurückgibt), also ist es ein Iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true – seine [Symbol.iterator]-Methode gibt sich selbst zurück (ein Iterator), also ist es ein iterierbarer Iterator
```

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, welches die `[Symbol.iterator]()`-Methode als `this` zurückgebend implementiert, sodass eingebaute Iteratoren auch iterierbar sind.

Es ist jedoch, wenn möglich, besser, dass `iterable[Symbol.iterator]()` unterschiedliche Iteratoren zurückgibt, die immer von Anfang an beginnen, wie es [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) tut.

## Die async iterator und async iterable Protokolle

Es gibt ein weiteres Paar von Protokollen für die asynchrone Iteration, die **async iterator** und **async iterable** Protokolle genannt werden. Sie haben sehr ähnliche Schnittstellen gegenüber den iterable und iterator Protokollen, außer dass jeder Rückgabewert von den Aufrufen der Iterator-Methoden in ein Versprechen (Promise) eingehüllt ist.

Ein Objekt implementiert das async iterable Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine null-argumentierte Funktion, die ein Objekt zurückgibt, das dem async iterator Protokoll entspricht.

Ein Objekt implementiert das async iterator Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument annimmt und ein Versprechen zurückgibt. Das Versprechen erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument annimmt und ein Versprechen zurückgibt. Das Versprechen erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument annimmt und ein Versprechen zurückgibt. Das Versprechen erfüllt ein Objekt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterables erzeugen oder konsummieren.

### Eingebaute Iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterables, da jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Außerdem sind das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt und einige DOM-Sammlungstypen wie {{domxref("NodeList")}} auch Iterables.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterable ist. Einige Web-APIs, wie {{domxref("ReadableStream")}}, haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generatorobjekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die Iteratoren, die von eingebauten Iterables zurückgegeben werden, erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die zuvor erwähnte `[Symbol.iterator]() { return this; }`-Methode implementiert und sie zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet auch zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zusätzlich zur `next()`-Methode, die das Iterator-Protokoll erfordert. Sie können die Prototypkette eines Iterators inspizieren, indem Sie sie in einer grafischen Konsole protokollieren.

```plain
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> Dies ist der Prototyp, den alle Array-Iteratoren teilen
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> Dies ist der Prototyp, den alle eingebauten Iteratoren teilen
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> Dies ist Object.prototype
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

Einige Anweisungen und Ausdrücke erwarten Iterables, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}} Schleifen, [Array und Parameter Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done` ist `false` (d. h. der Iterator ist in der Lage, mehr Werte zu erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, sofern vorhanden. Dies kann passieren, beispielsweise wenn eine `break`- oder `return`-Anweisung in einer `for...of`-Schleife auftritt, oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

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
// Bereits das Ende erreicht (der letzte Aufruf hat `done: true` zurückgegeben),
// deshalb wird `return` nicht aufgerufen

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Möglichkeiten, um mit asynchronen Iterables zu interagieren. Die Verwendung von `for...of`, Array-Spreading usw. auf einem asynchronen Iterable, das nicht auch ein synchrones Iterable ist (d. h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), wird einen TypeError werfen: x is not iterable.

## Fehlerbehandlung

Da die Iteration das Hin- und Herwechseln der Kontrolle zwischen dem Iterator und dem Konsumenten beinhaltet, erfolgt die Fehlerbehandlung in beide Richtungen: wie der Konsument Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Konsumenten geworfen werden. Wenn Sie eine der eingebauten Möglichkeiten zur Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterable bestimmte Invarianten verletzt. Wir werden beschreiben, wie eingebauter Syntaxen Fehler erzeugen und behandeln, die als Richtlinie für Ihren eigenen Code verwendet werden können, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterables

Fehler können auftreten, wenn der Iterator aus dem Iterable erlangt wird. Die hier durchgesetzte Sprachinvariante ist, dass das Iterable einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das von `[Symbol.iterator]()` zurückgegebene Objekt hat eine aufrufbare `next()`-Methode.

Wenn eingebauter Syntax verwendet wird, um eine Iteration auf einem nicht wohlgeformten Iterable zu initiieren, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterables, wenn ihr `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript zurück auf die Verwendung der `[Symbol.iterator]`-Eigenschaft (und umhüllt den resultierenden Iterator in einen asynchronen Iterator, indem die Methoden [weitergeleitet](#fehlerweiterleitung) werden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft ebenfalls die oben genannten Invarianten erfüllen.

Diese Fehlerart kann verhindert werden, indem das Iterable zuerst validiert wird, bevor versucht wird, es zu iterieren. Es ist jedoch ziemlich selten, weil man normalerweise den Typ des Objekts kennt, über das man iteriert. Wenn Sie dieses Iterable von einem anderen Code erhalten, sollten Sie einfach den Fehler zum Anrufer propagieren lassen, damit dieser weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn der Iterator fortgeschritten wird (`next()` aufgerufen wird). Die hier durchgesetzte Sprachinvariante ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Awaiting). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante gebrochen wird oder die `next()`-Methode einen Fehler auslöst (für asynchrone Iteratoren kann sie auch ein abgelehntes Versprechen zurückgeben), wird der Fehler an den Anrufer weitergegeben. Für eingebauten Syntaxen wird die laufende Iteration abgebrochen, ohne dass ein erneuter Versuch oder eine Bereinigung erfolgt (mit der Annahme, dass, wenn die `next()`-Methode den Fehler verursacht hat, sie bereits eine Bereinigung durchgeführt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und `next()` erneut aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Anrufer beschließt, die Iteration aus anderen Gründen als den in den vorangegangenen Absätzen genannten Fehlern zu beenden, zum Beispiel wenn er in seinem eigenen Code einen Fehlerzustand eingeht (zum Beispiel beim Umgang mit einem ungültigen Wert, der vom Iterator erzeugt wird), sollte er die `return()`-Methode des Iterators aufrufen, wenn eine vorhanden ist. Dies ermöglicht es dem Iterator, etwaige Bereinigungen durchzuführen. Die `return()` Methode wird nur bei verfrühter Beendigung aufgerufen – wenn `next()` `done: true` zurückgibt, wird die `return()` Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte ebenfalls ungültig sein! Die Sprache erzwingt auch, dass die `return()` Methode ein Objekt zurückgibt und andernfalls einen TypeError auslöst. Wenn die `return()`-Methode einen Fehler auslöst, wird dieser an den Anrufer weitergegeben. Wenn jedoch die `return()` Methode aufgerufen wird, weil der Anrufer in seinem eigenen Code auf einen Fehler gestoßen ist, dann überschreibt dieser Fehler den von der `return()` Methode geworfenen Fehler.

In der Regel implementiert der Anrufer die Fehlerbehandlung wie folgt:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Fehler behandeln
}
```

Der `catch`-Block kann Fehler abfangen, die beim Versuch, `iterable` zu iterieren, auftreten, wenn `next()` einen Fehler auslöst, wenn `return()` einen Fehler auslöst (wenn die `for`-Schleife vorzeitig endet), und wenn der Schleifenkörper einen Fehler auslöst.

Die meisten Iteratoren sind mit Generatorfunktionen implementiert, daher werden wir demonstrieren, wie Generatorfunktionen typischerweise Fehler behandeln:

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

Das Fehlen eines `catch`-Blocks hier verursacht, dass Fehler, die von `doSomething()` oder `doSomethingElse()` ausgelöst werden, an den Anrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenfalls ratsam ist), kann die Generatorfunktion entscheiden, ob sie weiterhin Werte erzeugt oder vorzeitig endet. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen halten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn das letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Fehlerweiterleitung

Einige eingebaute Syntaxen umhüllen einen Iterator in einen anderen Iterator. Diese umfassen den Iterator, der von {{jsxref("Iterator.from()")}}, [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und einen versteckten Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umschlossene Iterator ist dann für die Weiterleitung von Fehlern zwischen dem inneren Iterator und dem Anrufer verantwortlich.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, einschließlich ihres Rückgabewertes und ausgelöster Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht existiert, wird stattdessen `{ done: true, value: undefined }` zurückgegeben. Im Falle der Iterator-Helfer: Wenn die `next()`-Methode des Iterator-Helfers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit der Funktionsweise von Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck noch nicht erreicht hat.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, finden Sie in seinen eigenen Referenzen.

## Beispiele

### Benutzerdefinierte Iterables

Sie können Ihre eigenen Iterables so erzeugen:

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

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie im obigen Beispiel gezeigt), möchten Sie wahrscheinlich den Zustand in einem Abschluss kapseln.

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

### Definieren eines Iterables mit einer Klasse

Der Zustand kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) gekapselt werden.

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // Verwenden Sie für jeden Iterator einen neuen Index. Dies macht mehrere
    // Iterationen über das Iterable sicher für nicht-triviale Fälle,
    // wie die Verwendung von break oder verschachtelten Schleifen über dasselbe Iterable.
    let index = 0;

    return {
      // Hinweis: Durch die Verwendung einer Pfeilfunktion kann `this` auf die
      // des `[Symbol.iterator]()` und nicht auf `next()`
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

Der [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) von `String` gibt die Codepunkte des Strings nacheinander zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten durch Bereitstellung eines eigenen `[Symbol.iterator]()` neu definieren:

```js
// ein String-Objekt explizit konstruieren, um Auto-Boxing zu vermeiden
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // dies ist das Iterator-Objekt, das ein einzelnes Element (den String "bye") zurückgibt
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

### Gleichzeitige Modifikationen beim Iterieren

Fast alle Iterables haben dieselbe zugrunde liegende Semantik: Sie kopieren die Daten nicht zum Zeitpunkt des Beginns der Iteration. Stattdessen behalten sie einen Zeiger und bewegen ihn. Daher, wenn Sie Elemente in der Sammlung hinzufügen, löschen oder modifizieren, während Sie die Sammlung durchlaufen, können Sie unbeabsichtigt beeinflussen, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Das ist sehr ähnlich wie [iterative Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) funktionieren.

Betrachten Sie den folgenden Fall unter Verwendung eines {{domxref("URLSearchParams")}}:

```js
const searchParams = new URLSearchParams(
  "deleteme1=value1&key2=value2&key3=value3",
);

// Unerwünschte Schlüssel löschen
for (const [key, value] of searchParams) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    searchParams.delete(key);
  }
}

// Ausgabe:
// deleteme1
// key3
```

Beachten Sie, dass es `key2` nie ausgibt. Dies liegt daran, dass ein `URLSearchParams` zugrundeliegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um eins nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` früher hatte, und wenn der Zeiger auf den nächsten Schlüssel verschiebt, landet er auf `key3`.

Bestimmte Iterable-Implementierungen vermeiden dieses Problem, indem sie "Grabstein"-Werte setzen, um ein Verschieben der verbleibenden Werte zu vermeiden. Berücksichtigen Sie den ähnlichen Code mit einer `Map`:

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

// Ausgabe:
// deleteme1
// key2
// key3
```

Beachten Sie, dass es alle Schlüssel ausgibt. Das liegt daran, dass `Map` die verbleibenden Schlüssel beim Löschen eines Schlüssels nicht verschiebt. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

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
> Gleichzeitige Modifikationen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es sei denn, Sie wissen genau, wie das Iterable implementiert ist, es ist am besten zu vermeiden, die Sammlung zu ändern, während Sie sie durchlaufen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators and generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
