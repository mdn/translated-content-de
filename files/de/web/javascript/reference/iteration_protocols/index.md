---
title: Iterationsprotokolle
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("Mehr")}}

**Iterationsprotokolle** sind keine neuen eingebauten Funktionen oder Syntaxen, sondern _Protokolle_. Diese Protokolle können von jedem Objekt durch das Befolgen bestimmter Konventionen implementiert werden.

Es gibt zwei Protokolle: Das [iterierbare Protokoll](#das_iterierbare_protokoll) und das [Iterator-Protokoll](#das_iterator-protokoll).

## Das iterierbare Protokoll

**Das iterierbare Protokoll** ermöglicht es JavaScript-Objekten, ihr Iterationsverhalten zu definieren oder anzupassen, wie zum Beispiel welche Werte in einer {{jsxref("Statements/for...of", "for...of")}}-Konstruktion durchlaufen werden. Einige eingebaute Typen sind [eingebaute Iterierbare](#eingebaute_iterierbare) mit einem Standard-Iterationsverhalten, wie {{jsxref("Array")}} oder {{jsxref("Map")}}, während andere Typen (wie {{jsxref("Object")}}) nicht iterierbar sind.

Um **iterierbar** zu sein, muss ein Objekt die Methode **`[Symbol.iterator]()`** implementieren, was bedeutet, dass das Objekt (oder eines der Objekte in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit einem `[Symbol.iterator]`-Schlüssel haben muss, der über die Konstante {{jsxref("Symbol.iterator")}} verfügbar ist:

- `[Symbol.iterator]()`
  - : Eine Funktion ohne Argumente, die ein Objekt zurückgibt, das dem [Iterator-Protokoll](#das_iterator-protokoll) entspricht.

Wann immer ein Objekt iteriert werden muss (wie zu Beginn einer {{jsxref("Statements/for...of", "for...of")}}-Schleife), wird seine `[Symbol.iterator]()`-Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Beachten Sie, dass, wenn diese Methode ohne Argumente aufgerufen wird, sie als Methode für das iterierbare Objekt aufgerufen wird. Daher kann innerhalb der Funktion das `this`-Schlüsselwort verwendet werden, um auf die Eigenschaften des iterierbaren Objekts zuzugreifen und zu entscheiden, was während der Iteration bereitgestellt werden soll.

Diese Funktion kann eine normale Funktion sein oder eine Generatorfunktion, sodass beim Aufrufen ein Iterator-Objekt zurückgegeben wird. Innerhalb dieser Generatorfunktion kann jeder Eintrag mithilfe von `yield` bereitgestellt werden.

## Das Iterator-Protokoll

**Das Iterator-Protokoll** definiert eine standardisierte Methode, um eine Sequenz von Werten zu erzeugen (entweder endlich oder unendlich) und potenziell einen Rückgabewert, wenn alle Werte erzeugt wurden.

Ein Objekt ist ein Iterator, wenn es eine **`next()`**-Methode mit den folgenden Semantiken implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht (siehe unten). Wenn ein Nicht-Objektwert zurückgegeben wird (wie `false` oder `undefined`), wenn eine eingebaute Sprachfunktion (wie `for...of`) den Iterator verwendet, wird ein {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) ausgelöst.

Alle Methoden des Iterator-Protokolls (`next()`, `return()`, und `throw()`) sollen ein Objekt zurückgeben, das die `IteratorResult`-Schnittstelle implementiert. Es muss die folgenden Eigenschaften haben:

- `done` {{optional_inline}}

  - : Ein boolescher Wert, der `false` ist, wenn der Iterator in der Lage war, den nächsten Wert in der Sequenz zu erzeugen. (Dies entspricht dem vollständigen Weglassen der `done`-Eigenschaft.)

    Hat den Wert `true`, wenn der Iterator seine Sequenz abgeschlossen hat. In diesem Fall gibt `value` optional den Rückgabewert des Iterators an.

- `value` {{optional_inline}}
  - : Jeder JavaScript-Wert, der vom Iterator zurückgegeben wird. Kann weggelassen werden, wenn `done` `true` ist.

In der Praxis sind beide Eigenschaften nicht strikt erforderlich; wenn ein Objekt ohne eine der beiden Eigenschaften zurückgegeben wird, entspricht es effektiv `{ done: false, value: undefined }`.

Wenn ein Iterator ein Ergebnis mit `done: true` zurückgibt, wird erwartet, dass alle nachfolgenden Aufrufe von `next()` ebenfalls `done: true` zurückgeben, obwohl dies nicht auf der Sprachebene erzwungen wird.

Die `next`-Methode kann einen Wert empfangen, der dem Methodenrumpf zur Verfügung gestellt wird. Keine eingebaute Sprachfunktion wird einen Wert übergeben. Der an die `next`-Methode von [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) übergebene Wert wird der Wert des entsprechenden `yield`-Ausdrucks.

Optional kann der Iterator auch die Methoden **`return(value)`** und **`throw(exception)`** implementieren, die, wenn sie aufgerufen werden, dem Iterator mitteilen, dass der Aufrufer mit der Iteration fertig ist und Säuberungsaktionen durchführen kann (wie das Schließen einer Datenbankverbindung).

- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `value`, das dem übergebenen `value` entspricht und `done`, das `true` ist. Das Aufrufen dieser Methode teilt dem Iterator mit, dass der Aufrufer keine weiteren `next()`-Aufrufe mehr durchführen möchte und alle Reinigungsaktionen vorgenommen werden können. Wenn eingebaute Sprachfunktionen `return()` zur Reinigung aufrufen, ist `value` immer `undefined`.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Objekt zurückgibt, das der `IteratorResult`-Schnittstelle entspricht, typischerweise mit `done`, das `true` ist. Das Aufrufen dieser Methode teilt dem Iterator mit, dass der Aufrufer einen Fehlerzustand erkannt hat, und `exception` ist typischerweise eine {{jsxref("Error")}}-Instanz. Keine eingebaute Sprachfunktion ruft `throw()` zu Reinigungszwecken auf - es handelt sich um ein besonderes Merkmal von Generatoren für die Symmetrie von `return`/`throw`.

> [!NOTE]
> Es ist nicht möglich, reflektiv (d.h. ohne tatsächlich `next()` aufzurufen und das zurückgegebene Ergebnis zu validieren) zu wissen, ob ein bestimmtes Objekt das Iterator-Protokoll implementiert.

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

Ein solches Objekt wird als _iterierbarer Iterator_ bezeichnet. Dadurch kann ein Iterator von den verschiedenen Syntaxen konsumiert werden, die iterierbare Objekte erwarten – daher ist es selten nützlich, das Iterator-Protokoll ohne gleichzeitige Implementierung von Iterierbar zu implementieren. (Tatsächlich erwarten fast alle Syntaxen und APIs _iterierbare_ und keine _Iteratoren_.) Das [Generator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist ein Beispiel:

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

Alle eingebauten Iteratoren erben von {{jsxref("Iterator", "Iterator.prototype")}}, der die `[Symbol.iterator]()`-Methode als Rückgabe von `this` implementiert, sodass eingebaute Iteratoren ebenfalls iterierbar sind.

Jedoch ist es, wann immer möglich, besser, dass `iterable[Symbol.iterator]()` verschiedene Iteratoren zurückgibt, die immer vom Anfang beginnen, wie [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) es tut.

## Die asynchronen Iterator- und iterierbaren Protokolle

Es gibt ein weiteres Paar Protokolle, das für asynchrone Iterationen verwendet wird, genannt **asynchroner Iterator** und **asynchrones iterierbares Protokoll**. Sie haben sehr ähnliche Schnittstellen im Vergleich zu den iterierbaren und Iterator-Protokollen, außer dass jeder Rückgabewert der Anrufe auf die Iterator-Methoden in ein Promise eingebettet ist.

Ein Objekt implementiert das asynchrone iterierbare Protokoll, wenn es die folgenden Methoden implementiert:

- [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Eine Funktion ohne Argumente, die ein Objekt, das dem asynchronen Iterator-Protokoll entspricht, zurückgibt.

Ein Objekt implementiert das asynchrone Iterator-Protokoll, wenn es die folgenden Methoden implementiert:

- `next()`
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `return(value)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.
- `throw(exception)` {{optional_inline}}
  - : Eine Funktion, die null oder ein Argument akzeptiert und ein Promise zurückgibt. Das Promise wird mit einem Objekt erfüllt, das der `IteratorResult`-Schnittstelle entspricht, und die Eigenschaften haben dieselbe Semantik wie die des synchronen Iterators.

## Interaktionen zwischen der Sprache und den Iterationsprotokollen

Die Sprache spezifiziert APIs, die entweder Iterierbare oder Iteratoren erzeugen oder konsumieren.

### Eingebaute Iterierbare

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, und [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (zurückgegeben von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sind alle eingebaute Iterierbare, weil jedes ihrer `prototype`-Objekte eine `[Symbol.iterator]()`-Methode implementiert. Zusätzlich sind auch das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt und einige DOM-Sammeltypen wie [`NodeList`](/de/docs/Web/API/NodeList) iterierbar.
Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterierbar ist. Einige Web-APIs, wie etwa [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die `Symbol.asyncIterator`-Methode standardmäßig gesetzt.

[Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) geben [Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) zurück, die iterierbare Iteratoren sind. [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) geben [asynchrone Generator-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) zurück, die asynchrone iterierbare Iteratoren sind.

Die von eingebauten Iterierbaren zurückgegebenen Iteratoren erben tatsächlich alle von einer gemeinsamen Klasse {{jsxref("Iterator")}}, die die zuvor erwähnte Methode `[Symbol.iterator]() { return this; }` implementiert und sie somit alle zu iterierbaren Iteratoren macht. Die `Iterator`-Klasse bietet zusätzliche [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) zusätzlich zu der vom Iterator-Protokoll geforderten `next()`-Methode. Sie können die Prototypenkette eines Iterators inspizieren, indem Sie ihn in einer grafischen Konsole protokollieren.

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

### Eingebaute APIs, die Iterierbare akzeptieren

Es gibt viele APIs, die Iterierbare akzeptieren. Einige Beispiele beinhalten:

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

### Syntaxen, die Iterierbare erwarten

Einige Anweisungen und Ausdrücke erwarten Iterierbare, zum Beispiel die {{jsxref("Statements/for...of", "for...of")}}-Schleifen, [Array- und Parameterverbreitung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, und [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring):

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

Wenn eingebaute Syntaxen einen Iterator iterieren und das letzte Ergebnis `done: false` ist (d.h. der Iterator kann weitere Werte erzeugen), aber keine weiteren Werte benötigt werden, wird die `return`-Methode aufgerufen, wenn vorhanden. Dies kann beispielsweise passieren, wenn ein `break` oder `return` in einer `for...of`-Schleife auftaucht oder wenn alle Bezeichner bereits in einer Array-Destrukturierung gebunden sind.

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

Die [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) in [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) (aber nicht in [synchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*)) sind die einzigen Wege, mit asynchronen Iterierbaren zu interagieren. Die Verwendung von `for...of`, Array-Verbreitung, etc. für ein asynchrones Iterierbares, das nicht auch ein synchrones Iterierbares ist (d.h. es hat `[Symbol.asyncIterator]()` aber kein `[Symbol.iterator]()`), führt zu einem TypeError: x is not iterable.

## Fehlerbehandlung

Da Iteration die Übergabe der Kontrolle zwischen dem Iterator und dem Verbraucher beinhaltet, erfolgt das Fehler-Handling in beide Richtungen: wie der Verbraucher Fehler behandelt, die vom Iterator geworfen werden, und wie der Iterator Fehler behandelt, die vom Verbraucher geworfen werden. Wenn Sie eine der eingebauten Methoden der Iteration verwenden, kann die Sprache auch Fehler werfen, weil das Iterierbare bestimmte Invarianten verletzt. Wir beschreiben, wie eingebaute Syntaxen Fehler erzeugen und behandeln, was als Leitfaden für Ihren eigenen Code dienen kann, wenn Sie den Iterator manuell durchlaufen.

### Nicht wohlgeformte Iterierbare

Fehler können beim Abrufen des Iterators vom Iterierbaren auftreten. Die hier durchgesetzte Sprachinvariante ist, dass das Iterierbare einen gültigen Iterator erzeugen muss:

- Es hat eine aufrufbare `[Symbol.iterator]()`-Methode.
- Die `[Symbol.iterator]()`-Methode gibt ein Objekt zurück.
- Das Objekt, das von `[Symbol.iterator]()` zurückgegeben wird, hat eine aufrufbare `next()`-Methode.

Wenn die eingebaute Syntax verwendet wird, um eine Iteration auf einem nicht wohlgeformten Iterierbaren zu starten, wird ein TypeError ausgelöst.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

Für asynchrone Iterierbare, wenn seine `[Symbol.asyncIterator]()`-Eigenschaft den Wert `undefined` oder `null` hat, fällt JavaScript auf die Verwendung der `[Symbol.iterator]`-Eigenschaft zurück (und umwickelt den resultierenden Iterator in einen asynchronen Iterator durch [Weiterleitung](#weiterleitung_von_fehlern) der Methoden). Andernfalls muss die `[Symbol.asyncIterator]`-Eigenschaft ebenfalls den oben genannten Invarianten entsprechen.

Diese Art von Fehlern kann verhindert werden, indem das Iterierbare zuerst validiert wird, bevor es versucht wird, es zu iterieren. Es ist jedoch relativ selten, da man normalerweise den Typ des Objekts kennt, über das man iteriert. Wenn Sie dieses Iterierbare von einem anderen Code erhalten, sollten Sie den Fehler einfach an den Aufrufer weiterleiten, damit dieser weiß, dass eine ungültige Eingabe bereitgestellt wurde.

### Fehler während der Iteration

Die meisten Fehler treten auf, wenn Sie den Iterator (d.h. `next()` aufrufen) weiterschalten. Die hier durchgesetzte Sprachinvariante ist, dass die `next()`-Methode ein Objekt zurückgeben muss (für asynchrone Iteratoren ein Objekt nach dem Warten). Andernfalls wird ein TypeError ausgelöst.

Wenn die Invariante verletzt wird oder die `next()`-Methode einen Fehler wirft (für asynchrone Iteratoren kann es auch ein abgelehntes Promise zurückgeben), wird der Fehler an den Aufrufer weitergegeben. Bei eingebauten Syntaxen wird die laufende Iteration ohne erneuten Versuch oder Aufräumen abgebrochen (mit der Annahme, dass, wenn die `next()`-Methode den Fehler geworfen hat, sie bereits aufgeräumt hat). Wenn Sie `next()` manuell aufrufen, können Sie den Fehler abfangen und `next()` erneut aufrufen, aber im Allgemeinen sollten Sie davon ausgehen, dass der Iterator bereits geschlossen ist.

Wenn der Aufrufer aus anderen Gründen als den Fehlern in den vorherigen Abschnitten entscheiden sollte, die Iteration zu beenden, z. B. wenn er in seinem eigenen Code in einen Fehlerzustand gerät (z. B. beim Umgang mit einem ungültigen Wert, der vom Iterator erzeugt wird), sollte er die `return()`-Methode des Iterators aufrufen, falls diese vorhanden ist. Dadurch kann der Iterator alle Säuberungen vornehmen. Die `return()`-Methode wird nur bei vorzeitigem Abbruch aufgerufen - wenn `next()` `done: true` zurückgibt, wird die `return()`-Methode nicht aufgerufen, mit der Annahme, dass der Iterator bereits aufgeräumt hat.

Die `return()`-Methode könnte auch ungültig sein! Die Sprache erzwingt auch, dass die `return()`-Methode ein Objekt zurückgeben muss und wirft einen TypeError, wenn dies nicht der Fall ist. Wenn die `return()`-Methode einen Fehler wirft, wird der Fehler an den Aufrufer weitergegeben. Wenn jedoch die `return()`-Methode aufgerufen wird, weil der Aufrufer in seinem eigenen Code auf einen Fehler gestoßen ist, überschreibt dieser Fehler den von der `return()`-Methode geworfenen Fehler.

In der Regel implementiert der Aufrufer das Fehler-Handling wie folgt:

```js
try {
  for (const value of iterable) {
    // …
  }
} catch (e) {
  // Handle the error
}
```

Mit `catch` kann man Fehler abfangen, die geworfen werden, wenn `iterable` kein gültiges Iterierbares ist, wenn `next()` einen Fehler wirft, wenn `return()` einen Fehler wirft (falls die `for`-Schleife frühzeitig beendet wird) und wenn der Körper der `for`-Schleife einen Fehler wirft.

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

Das Fehlen von `catch` hier verursacht, dass Fehler, die von `doSomething()` oder `doSomethingElse()` geworfen werden, an den Aufrufer von `gen` weitergegeben werden. Wenn diese Fehler innerhalb der Generatorfunktion abgefangen werden (was ebenso ratsam ist), kann die Generatorfunktion entscheiden, ob sie weiterhin Werte yieldet oder frühzeitig beendet wird. Der `finally`-Block ist jedoch notwendig für Generatoren, die offene Ressourcen behalten. Der `finally`-Block wird garantiert ausgeführt, entweder wenn der letzte `next()` aufgerufen wird oder wenn `return()` aufgerufen wird.

### Weiterleitung von Fehlern

Einige eingebaute Syntaxen wickeln einen Iterator in einen anderen ein. Dazu gehören der durch {{jsxref("Iterator.from()")}} erzeugte Iterator, [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, und `flatMap()`), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), und ein verborgener Wrapper, wenn Sie asynchrone Iteration (`for await...of`, `Array.fromAsync`) auf synchronen Iteratoren verwenden. Der umwickelte Iterator ist dann dafür verantwortlich, Fehler zwischen dem inneren Iterator und dem Aufrufer weiterzuleiten.

- Alle Wrapper-Iteratoren leiten die `next()`-Methode des inneren Iterators direkt weiter, inklusive ihres Rückgabewertes und geworfener Fehler.
- Wrapper-Iteratoren leiten im Allgemeinen die `return()`-Methode des inneren Iterators direkt weiter. Wenn die `return()`-Methode auf dem inneren Iterator nicht existiert, gibt sie stattdessen `{ done: true, value: undefined }` zurück. Im Fall von Iterator-Helpern: Wenn die `next()`-Methode des Iterator-Helpers nicht aufgerufen wurde, gibt der aktuelle Iterator nach dem Versuch, `return()` auf dem inneren Iterator aufzurufen, immer `{ done: true, value: undefined }` zurück. Dies ist konsistent mit Generatorfunktionen, bei denen die Ausführung den `yield*`-Ausdruck noch nicht betreten hat.
- `yield*` ist die einzige eingebaute Syntax, die die `throw()`-Methode des inneren Iterators weiterleitet. Informationen darüber, wie [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) die `return()`- und `throw()`-Methoden weiterleitet, finden Sie im eigenen Referenzabschnitt.

## Beispiele

### Benutzerdefinierte Iterierbare

Sie können Ihre eigenen Iterierbaren wie folgt erstellen:

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

Iteratoren sind von Natur aus zustandsbehaftet. Wenn Sie ihn nicht als [Generator-Funktion](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren (wie das obige Beispiel zeigt), möchten Sie den Zustand wahrscheinlich in einem Abschluss kapseln.

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

### Definieren eines Iterierbaren mit einem Generator

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

### Definieren eines Iterierbaren mit einer Klasse

Die Kapselung von Zuständen kann auch mit [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erfolgen.

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

### Überschreiben eingebauter Iterierbarer

Zum Beispiel ist ein {{jsxref("String")}} ein eingebautes iterierbares Objekt:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String`'s [Standard-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) gibt die Codepunkte des Strings nacheinander zurück:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Sie können das Iterationsverhalten neu definieren, indem Sie unser eigenes `[Symbol.iterator]()` bereitstellen:

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

Beachten Sie, wie die Neudefinition von `[Symbol.iterator]()` das Verhalten von eingebauten Konstrukten beeinflusst, die das Iterationsprotokoll verwenden:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Gleichzeitige Modifikationen bei der Iteration

Fast alle Iterierbaren haben dieselbe grundlegende Semantik: Sie kopieren die Daten nicht zu dem Zeitpunkt, zu dem die Iteration startet. Vielmehr behalten sie einen Zeiger und bewegen ihn herum. Wenn Sie also Elemente in der Sammlung hinzufügen, löschen oder ändern, während Sie die Sammlung durchlaufen, können Sie unbeabsichtigt ändern, ob andere _unveränderte_ Elemente in der Sammlung besucht werden. Dies ist sehr ähnlich dem Verhalten von [iterativen Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods).

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

Beachten Sie, wie es nie `key2` protokolliert. Dies liegt daran, dass ein `URLSearchParams` zugrunde liegend eine Liste von Schlüssel-Wert-Paaren ist. Wenn `deleteme1` besucht und gelöscht wird, werden alle anderen Einträge um einen nach links verschoben, sodass `key2` die Position einnimmt, die `deleteme1` zuvor hatte, und wenn der Zeiger zum nächsten Schlüssel bewegt wird, landet er auf `key3`.

Bestimmte iterierbare Implementierungen vermeiden dieses Problem, indem sie „Grabstein“-Werte setzen, um ein Verschieben der verbleibenden Werte zu vermeiden. Betrachten Sie den ähnlichen Code mit einer `Map`:

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

Beachten Sie, wie es alle Schlüssel protokolliert. Das liegt daran, dass `Map` die verbleibenden Schlüssel nicht verschiebt, wenn einer gelöscht wird. Wenn Sie etwas Ähnliches implementieren möchten, könnte es so aussehen:

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
> Gleichzeitige Modifikationen sind im Allgemeinen sehr fehleranfällig und verwirrend. Es sei denn, Sie wissen genau, wie das Iterierbare implementiert ist, ist es am besten, zu vermeiden, die Sammlung während der Iteration zu ändern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Iterators and generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
