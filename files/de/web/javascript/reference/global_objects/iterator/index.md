---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnis-Objekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse bietet eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird. Sie bietet auch einige Hilfsmethoden für die Arbeit mit Iteratoren.

## Beschreibung

Die folgenden sind alle eingebauten JavaScript-Iteratoren:

- Der _Array Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp String Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts zurückgegeben wird, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Web-APIs können auch Iteratoren zurückgeben. Einige verwenden Kern-JavaScript-Iteratoren wieder, während andere ihre eigenen Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array Iterator_ über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte aus Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp, wie den _Headers Iterator_, über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte aus Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp, wie den _FontFaceSet Iterator_, über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.

> **Note:** [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen sind so benannt, entsprechen jedoch nicht dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder dem [iterierbaren Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototyp-Objekt, das die `next()`-Methode definiert, die von dem speziellen Iterator verwendet wird. Zum Beispiel erben alle String-Iterator-Objekte von einem versteckten Objekt namens `StringIteratorPrototype`, welches eine `next()`-Methode hat, die diesen String durch Codepunkte iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ähnlich haben andere Iterator-Prototypen auch eigene `[Symbol.toStringTag]`-Werte, die mit den oben genannten Namen übereinstimmen.

All diese Prototyp-Objekte erben von `Iterator.prototype`, welches eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt und den Iterator somit auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) macht.

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfsmethoden, keine _iterierbaren_ Hilfsmethoden, da die einzige Anforderung, die ein Objekt erfüllen muss, um iterierbar zu sein, die Präsenz einer `[Symbol.iterator]()`-Methode ist. Es gibt keinen gemeinsamen Prototyp, um diese Methoden zu installieren.

Die `Iterator`-Klasse selbst bietet einige Hilfsmethoden für die Arbeit mit Iteratoren an. Zum Beispiel könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies konvertiert zuerst den von {{jsxref("Map.prototype.values()")}} zurückgegebenen Iterator in ein Array und verwendet dann die {{jsxref("Array.prototype.reduce()")}}-Methode, um die Summe zu berechnen. Dies erstellt jedoch sowohl ein Zwischen-Array als auch iteriert das Array zweimal. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann effizienter sein, insbesondere speichermäßig, da sie den Iterator nur einmal durchläuft, ohne Zwischenergebnisse zu speichern. Iterator-Hilfsmethoden sind notwendig, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array konvertieren, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit iteriert, wie nötig, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie werden viele Iterator-Methoden finden, die den Array-Methoden analog sind, wie:

| Iterator-Methode                           | Array-Methode                           |
| ------------------------------------------ | --------------------------------------- |
| {{jsxref("Iterator.prototype.every()")}}   | {{jsxref("Array.prototype.every()")}}   |
| {{jsxref("Iterator.prototype.filter()")}}  | {{jsxref("Array.prototype.filter()")}}  |
| {{jsxref("Iterator.prototype.find()")}}    | {{jsxref("Array.prototype.find()")}}    |
| {{jsxref("Iterator.prototype.flatMap()")}} | {{jsxref("Array.prototype.flatMap()")}} |
| {{jsxref("Iterator.prototype.forEach()")}} | {{jsxref("Array.prototype.forEach()")}} |
| {{jsxref("Iterator.prototype.map()")}}     | {{jsxref("Array.prototype.map()")}}     |
| {{jsxref("Iterator.prototype.reduce()")}}  | {{jsxref("Array.prototype.reduce()")}}  |
| {{jsxref("Iterator.prototype.some()")}}    | {{jsxref("Array.prototype.some()")}}    |

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} zusammen sind etwas analog zu {{jsxref("Array.prototype.slice()")}}.

### Iterator-Hilfe-Objekte

> **Note:** _Iterator-Hilfe-Objekte_ und _Iterator-Hilfsmethoden_ sind zwei unterschiedliche Konzepte. Ein Iterator-Hilfe-Objekt ist zur Laufzeit erkennbar, während "Iterator-Hilfsmethode" nur ein Name für eine Menge von Methoden zur Verständnis ist. _Iterator-Hilfe_ kann sich entweder auf das Objekt oder die Methode, abhängig vom Kontext, beziehen.

Unter den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator-Hilfe-Objekt_ zurück. Der Iterator-Helfer ist auch eine `Iterator`-Instanz, was diese Hilfsmethoden verkettbar macht. Alle Iterator-Hilfe-Objekte erben von einem gemeinsamen Prototyp-Objekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator-Helfer teilt die gleiche Datenquelle wie der zugrunde liegende Iterator, sodass das Iterieren des Iterator-Helfers auch den zugrunde liegenden Iterator iteriert. Es gibt keine Möglichkeit, einen Iterator zu "verzweigen", damit er mehrfach iteriert werden kann.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Echte Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was mindestens nur das Vorhandensein einer `next()`-Methode erfordert) und Objekte, die von der `Iterator`-Klasse erben und daher die Hilfsmethoden nutzen können. Sie schließen sich nicht gegenseitig ein — Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt eine `next()`-Methode selbst definieren. Ein _richtiger Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meiste Software erwartet, dass Iteratoren richtige Iteratoren sind und iterierbare Objekte richtige Iteratoren zurückgeben. Um richtige Iteratoren zu erstellen, definieren Sie eine Klasse, die {{jsxref("Iterator/Iterator", "Iterator")}} erweitert, oder verwenden Sie die Methode {{jsxref("Iterator.from()")}}.

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
  - : Soll von anderen Klassen erweitert werden, die Iteratoren erstellen. Löst einen Fehler aus, wenn sie von sich selbst konstruiert wird.

## Statische Methoden

- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder iterierbaren Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und von allen `Iterator`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Iterator`-Instanzen ist der Anfangswert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`

  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Im Gegensatz zum `[Symbol.toStringTag]` in den meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` aus Gründen der Web-Kompatibilität beschreibbar.

## Instanz-Methoden

- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfe-Objekt zurück, das die gegebene Anzahl an Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Überprüft, ob alle vom Iterator erzeugten Elemente den durch die bereitgestellte Funktion implementierten Test bestehen.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfe-Objekt zurück, das nur diejenigen Elemente des Iterators ausgibt, für die die bereitgestellte Callback-Funktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste vom Iterator erzeugte Element zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfe-Objekt zurück, das jedes Element im ursprünglichen Iterator durch eine Mapping-Funktion führt und die von der Mapping-Funktion zurückgegebenen Elemente ausgibt (die sich in einem anderen Iterator oder iterierbaren Objekt befinden).
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes vom Iterator erzeugte Element aus.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfe-Objekt zurück, das die Elemente des Iterators ausgibt, die jeweils durch eine Mapping-Funktion transformiert wurden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine benutzerdefinierte "Reducer"-Callback-Funktion auf jedem vom Iterator erzeugten Element aus und übergibt den Rückgabewert der Berechnung des vorhergehenden Elements. Das Endergebnis des Reducers über alle Elemente ist ein einziger Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Überprüft, ob mindestens ein Element im Iterator den durch die bereitgestellte Funktion implementierten Test besteht. Es wird ein Boolescher Wert zurückgegeben.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfe-Objekt zurück, das die gegebene Anzahl von Elementen in diesem Iterator ausgibt und dann terminiert.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator ausgegebenen Elementen populiert ist.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies erlaubt es Iterator-Objekten, auch iterierbar zu sein.

## Beispiele

### Verwenden eines Iterators als iterierbares Objekt

Alle eingebauten Iteratoren sind auch iterierbar, daher können Sie sie in einer `for...of`-Schleife verwenden:

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
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
