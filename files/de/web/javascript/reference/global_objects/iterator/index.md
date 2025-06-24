---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt und den Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) macht. Sie bietet auch einige Hilfsmethoden zur Arbeit mit Iteratoren.

## Beschreibung

Die folgenden sind alle eingebaute JavaScript-Iteratoren:

- Der _Array Iterator_, zurückgegeben von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator).
- Der _String Iterator_, zurückgegeben von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).
- Der _Map Iterator_, zurückgegeben von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Der _Set Iterator_, zurückgegeben von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).
- Der _RegExp String Iterator_, zurückgegeben von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}}.
- Das {{jsxref("Generator")}}-Objekt, zurückgegeben von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*).
- Der _Segments Iterator_, zurückgegeben von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, zurückgegeben von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}}.

Web-APIs können ebenfalls Iteratoren zurückgeben. Einige nutzen die Kern-JavaScript-Iteratoren wieder, während andere ihre eigenen Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte aus Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp wie _Headers Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte aus Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp wie _FontFaceSet Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.

> [!NOTE] > [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen sind so benannt, entsprechen aber nicht dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder dem [iterierbaren Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototypenobjekt, das die `next()`-Methode definiert, die vom jeweiligen Iterator verwendet wird. Zum Beispiel erben alle String-Iterator-Objekte von einem versteckten Objekt `StringIteratorPrototype`, das eine `next()`-Methode hat, die diesen String durch Codepunkte iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert die Zeichenkette `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ähnlich haben andere Iterator-Prototypen auch ihre eigenen `[Symbol.toStringTag]`-Werte, die mit den oben angegebenen Namen übereinstimmen.

Alle diese Prototyp-Objekte erben von `Iterator.prototype`, das eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt und den Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) macht.

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfen, keine _iterierbaren_ Hilfen, da die einzige Anforderung an ein Objekt, um iterierbar zu sein, nur das Vorhandensein einer `[Symbol.iterator]()`-Methode ist. Es gibt keinen gemeinsamen Prototyp, um diese Methoden zu installieren.

Die `Iterator`-Klasse selbst bietet einige Hilfsmethoden zur Arbeit mit Iteratoren. Zum Beispiel könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies wandelt den vom {{jsxref("Map.prototype.values()")}} zurückgegebenen Iterator zunächst in ein Array um und verwendet dann die {{jsxref("Array.prototype.reduce()")}}-Methode, um die Summe zu berechnen. Dies erstellt jedoch sowohl ein Zwischenarray als auch iteriert das Array zweimal. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann effizienter sein, insbesondere speichermäßig, da sie den Iterator nur einmal durchläuft, ohne irgendwelche Zwischenwerte zu merken. Iterator-Hilfsmethoden sind notwendig für die Arbeit mit unendlichen Iteratoren:

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

Sie können `seq` nicht in ein Array umwandeln, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit durchläuft, wie nötig, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie werden viele Iteratormethoden finden, die analogen Array-Methoden ähneln, wie z. B.:

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

### Iterator-Hilfsobjekte

> [!NOTE] > _Iterator-Hilfsobjekte_ und _Iterator-Hilfsmethoden_ sind zwei verschiedene Konzepte. Ein Iterator-Hilfsobjekt ist zur Laufzeit erkennbar, während "Iterator-Hilfsmethode" nur ein Name für einen Satz von Methoden für das Verständnis ist. _Iterator-Hilfe_ kann je nach Kontext entweder das Objekt oder die Methode bezeichnen.

Unter den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator-Hilfsobjekt_ zurück. Der Iterator-Helfer ist auch eine `Iterator`-Instanz, wodurch diese Hilfsmethoden verkettet werden können. Alle Iterator-Hilfsobjekte erben von einem gemeinsamen Prototyp-Objekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator-Helfer teilt dieselbe Datenquelle wie der zugrunde liegende Iterator, sodass das Iterieren des Iterator-Helfers dazu führt, dass der zugrunde liegende Iterator ebenfalls iteriert wird. Es gibt keine Möglichkeit, einen Iterator zu "verzweigen", um ihn mehrfach zu iterieren.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Korrekte Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was im Minimum nur das Vorhandensein einer `next()`-Methode erfordert) und Objekte, die von der `Iterator`-Klasse erben, die die Hilfsmethoden nutzen können. Sie schließen sich nicht gegenseitig aus — Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt selbst eine `next()`-Methode definieren. Ein _korrekter Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meisten Code erwarten, dass Iteratoren richtige Iteratoren sind und Iterables richtige Iteratoren zurückgeben. Um korrekte Iteratoren zu erstellen, definieren Sie eine Klasse, die von {{jsxref("Iterator/Iterator", "Iterator")}} erweitert oder die {{jsxref("Iterator.from()")}}-Methode verwendet.

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
  - : Soll von anderen Klassen erweitert werden, die Iteratoren erstellen. Wirft einen Fehler, wenn es selbst konstruiert wird.

## Statische Methoden

- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator- oder iterable-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`

  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Im Gegensatz zum `[Symbol.toStringTag]` bei den meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` beschreibbar, aus Gründen der Webkompatibilität.

## Instanzmethoden

- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die gegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Testet, ob alle vom Iterator produzierten Elemente den durch die angegebene Funktion implementierten Test bestehen.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das nur diejenigen Elemente des Iterators liefert, für die die angegebene Rückruffunktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste Element zurück, das vom Iterator produziert wird und die angegebene Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Zuordnungsfunktion laufen lässt und Elemente zurückgibt, die von der Zuordnungsfunktion zurückgegeben werden (welche sich in einem anderen Iterator oder iterable befinden).
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine angegebene Funktion einmal für jedes vom Iterator erzeugte Element aus.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das Elemente des Iterators liefert, die jeweils durch eine Zuordnungsfunktion transformiert wurden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Rückruffunktion auf jedes vom Iterator produzierte Element aus, indem der Rückgabewert aus der Berechnung des vorhergehenden Elements übergeben wird. Das Endergebnis des Reduzierens über alle Elemente hinweg ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Testet, ob mindestens ein Element im Iterator den durch die angegebene Funktion implementierten Test besteht. Es gibt einen booleschen Wert zurück.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die gegebene Anzahl von Elementen in diesem Iterator liefert und dann beendet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen befüllt wird.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es Iterator-Objekten, auch iterierbar zu sein.

## Beispiele

### Verwendung eines Iterators als Iterable

Alle eingebauten Iteratoren sind auch iterierbar, sodass Sie sie in einer `for...of`-Schleife verwenden können:

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
- [es-shims Polyfill von `Iterator` und zugehörigen Hilfsmitteln](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
