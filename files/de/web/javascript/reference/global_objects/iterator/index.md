---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: 5a140a2b41f4fc2631bfb94bd53ba6370b270004
---

{{JSRef}}

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird. Außerdem bietet sie einige Hilfsmethoden für die Arbeit mit Iteratoren an.

## Beschreibung

Die folgenden sind alles eingebaute JavaScript-Iteratoren:

- Der _Array Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp String Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts zurückgegeben wird, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Web-APIs können ebenfalls Iteratoren zurückgeben. Einige verwenden die zentralen JavaScript-Iteratoren, während andere ihre eigenen Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte von Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp wie _Headers Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte von Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp wie _FontFaceSet Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.

> **Note:** [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen sind zwar so benannt, entsprechen aber nicht dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder [iterierbaren Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototyp-Objekt, welches die `next()` Methode definiert, die von dem bestimmten Iterator verwendet wird. Zum Beispiel erben alle String-Iterator-Objekte von einem versteckten Objekt `StringIteratorPrototype`, das eine `next()` Methode hat, die diese Zeichenkette nach Codepunkten iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ebenso haben andere Iterator-Prototypen ihre eigenen `[Symbol.toStringTag]` Werte, die denen der oben genannten Namen entsprechen.

Alle diese Prototyp-Objekte erben von `Iterator.prototype`, welche eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird.

### Iterator-Hilfen

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfen, keine _iterierbaren_ Hilfen, da die einzige Anforderung an ein Objekt, iterierbar zu sein, lediglich die Anwesenheit einer `[Symbol.iterator]()`-Methode ist. Es gibt kein gemeinsames Prototyp, um diese Methoden zu installieren.

Die `Iterator`-Klasse selbst bietet einige Hilfsmethoden für die Arbeit mit Iteratoren. Beispielsweise könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies konvertiert zunächst den Iterator, der von {{jsxref("Map.prototype.values()")}} zurückgegeben wird, in ein Array und verwendet dann die {{jsxref("Array.prototype.reduce()")}}-Methode, um die Summe zu berechnen. Dies erzeugt jedoch sowohl ein Zwischen-Array als auch iteriert das Array zweimal. Stattdessen können Sie die `reduce()`-Methode des Iteratoren selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode ist möglicherweise effizienter, insbesondere speichermäßig, da sie den Iterator nur einmal durchläuft, ohne irgendwelche Zwischenwerte zu speichern. Iterator-Hilfsmethoden sind notwendig, um mit unendlichen Iteratoren zu arbeiten:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci();
const firstThreeDigitTerm = seq.find((n) => n >= 100);
```

Sie können `seq` nicht in ein Array konvertieren, weil es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iteratoren selbst verwenden, die nur `seq` so weit durchläuft, wie es nötig ist, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie werden viele Iterator-Methoden finden, die analog zu Array-Methoden sind, wie:

| Iterator-Methode                           | Array-Methode                            |
| ------------------------------------------ | --------------------------------------- |
| {{jsxref("Iterator.prototype.every()")}}   | {{jsxref("Array.prototype.every()")}}   |
| {{jsxref("Iterator.prototype.filter()")}}  | {{jsxref("Array.prototype.filter()")}}  |
| {{jsxref("Iterator.prototype.find()")}}    | {{jsxref("Array.prototype.find()")}}    |
| {{jsxref("Iterator.prototype.flatMap()")}} | {{jsxref("Array.prototype.flatMap()")}} |
| {{jsxref("Iterator.prototype.forEach()")}} | {{jsxref("Array.prototype.forEach()")}} |
| {{jsxref("Iterator.prototype.map()")}}     | {{jsxref("Array.prototype.map()")}}     |
| {{jsxref("Iterator.prototype.reduce()")}}  | {{jsxref("Array.prototype.reduce()")}}  |
| {{jsxref("Iterator.prototype.some()")}}    | {{jsxref("Array.prototype.some()")}}    |

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} zusammen sind ein wenig analog zu {{jsxref("Array.prototype.slice()")}}.

Unter diesen Methoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator Helper_-Objekt zurück. Der Iterator-Helper ist auch eine `Iterator`-Instanz, wodurch die Hilfsmethoden kaskadierbar werden. Alle Iterator-Helper-Objekte erben von einem gemeinsamen Prototyp-Objekt, das das Iterator-Protokoll umsetzt:

- `next()`
  - : Ruft die `next()`-Methode des zugrundeliegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrundeliegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator-Helper teilt dieselbe Datenquelle wie der zugrunde liegende Iterator, sodass das Iterieren des Iterator-Helpers auch dazu führt, dass der zugrunde liegende Iterator durchlaufen wird. Es gibt keine Möglichkeit, einen Iterator zu "verzweigen", um ihn mehrmals zu durchlaufen.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Richtige Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (welches im Minimalfall nur die Anwesenheit einer `next()`-Methode erfordert), und Objekte, die von der `Iterator`-Klasse erben, welche die Hilfsmethoden genießen. Sie bedingen sich nicht gegenseitig – Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt selbst eine `next()`-Methode definieren. Ein _richtiger Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meiste Software erwartet, dass Iteratoren richtige Iteratoren sind und dass Iterables richtige Iteratoren zurückgeben. Um richtige Iteratoren zu erstellen, definieren Sie eine Klasse, die von {{jsxref("Iterator/Iterator", "Iterator")}} erbt, oder verwenden Sie die {{jsxref("Iterator.from()")}} Methode.

```js
class MyIterator extends Iterator {
  next() {
    // …
  }
}

const myIterator = Iterator.from({
  next() {
    // …
  },
});
```

## Konstruktor

- {{jsxref("Iterator/Iterator", "Iterator()")}}
  - : Soll von anderen Klassen, die Iteratoren erstellen, [erweitert](/de/docs/Web/JavaScript/Reference/Classes/extends) werden. Wirft einen Fehler, wenn es selbst konstruiert wird.

## Statische Methoden

- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder iterierbaren Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`

  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Im Gegensatz zum `[Symbol.toStringTag]` in den meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` aus Gründen der Webkompatibilität beschreibbar.

## Instanzmethoden

- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt einen neuen Iterator-Helper zurück, der die gegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Testet, ob alle vom Iterator erzeugten Elemente den vom bereitgestellten Funktionstext implementierten Test bestehen.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt einen neuen Iterator-Helper zurück, der nur diejenigen Elemente des Iterators liefert, für die die bereitgestellte Callback-Funktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste vom Iterator erzeugte Element zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt einen neuen Iterator-Helper zurück, der jedes Element im ursprünglichen Iterator nimmt, es durch eine Mapping-Funktion laufen lässt und die von der Mapping-Funktion zurückgegebenen Elemente liefert (die sich in einem anderen Iterator oder iterierbaren Objekt befinden).
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes vom Iterator erzeugte Element aus.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt einen neuen Iterator-Helper zurück, der Elemente des Iterators liefert, die jeweils von einer Mapping-Funktion transformiert wurden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion auf jedem vom Iterator erzeugten Element aus und übergibt den Rückgabewert der Berechnung des vorhergehenden Elements. Das endgültige Ergebnis der Ausführung des Reducers über alle Elemente ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Testet, ob mindestens ein Element im Iterator den vom bereitgestellten Funktionstext implementierten Test bestehen. Es wird ein boolescher Wert zurückgegeben.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt einen neuen Iterator-Helper zurück, der die angegebene Anzahl von Elementen in diesem Iterator liefert und dann beendet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es Iterator-Objekten, auch iterierbar zu sein.

## Beispiele

### Einen Iterator als iterierbar verwenden

Alle eingebauten Iteratoren sind auch iterierbar, sodass Sie sie in einer `for...of` Schleife verwenden können:

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [Iteration-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
