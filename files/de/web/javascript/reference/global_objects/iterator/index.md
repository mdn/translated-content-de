---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse bietet eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird. Außerdem bietet sie einige Hilfsmethoden für die Arbeit mit Iteratoren.

## Beschreibung

Folgende sind alle eingebauten JavaScript-Iteratoren:

- Der _Array Iterator_, zurückgegeben durch {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator).
- Der _String Iterator_, zurückgegeben durch [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).
- Der _Map Iterator_, zurückgegeben durch {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Der _Set Iterator_, zurückgegeben durch {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).
- Der _RegExp String Iterator_, zurückgegeben durch [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}}.
- Das {{jsxref("Generator")}}-Objekt, zurückgegeben durch [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*).
- Der _Segments Iterator_, zurückgegeben durch die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts, das durch [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, zurückgegeben durch Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}}.

Auch Web-APIs können Iteratoren zurückgeben. Einige verwenden die Kern-JavaScript-Iteratoren, während andere ihre eigenen Iteratoren definieren. Beispielsweise:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte aus Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp wie _Headers Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte aus Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp wie _FontFaceSet Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen sind so benannt, entsprechen aber nicht dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototypobjekt, das die `next()`-Methode definiert, die vom jeweiligen Iterator verwendet wird. Beispielsweise erben alle String-Iterator-Objekte von einem versteckten Objekt `StringIteratorPrototype`, das eine `next()`-Methode hat, die diese Zeichenkette durch Codepunkte iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft, deren Anfangswert die Zeichenkette `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ebenso haben andere Iterator-Prototypen auch ihre eigenen `[Symbol.toStringTag]`-Werte, die mit den oben genannten Namen übereinstimmen.

Alle diese Prototypobjekte erben von `Iterator.prototype`, das eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird.

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Helfer, keine _Iterable_-Helfer, da die einzige Voraussetzung für ein Objekt, um iterable zu sein, nur die Anwesenheit einer `[Symbol.iterator]()`-Methode ist. Es gibt keinen gemeinsamen Prototyp, um diese Methoden zu installieren.

Die `Iterator`-Klasse selbst bietet einige Hilfsmethoden zum Arbeiten mit Iteratoren. Beispielsweise könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies konvertiert zuerst den von {{jsxref("Map.prototype.values()")}} zurückgegebenen Iterator in ein Array und verwendet dann die {{jsxref("Array.prototype.reduce()")}}-Methode, um die Summe zu berechnen. Dies erzeugt jedoch sowohl ein Zwischen-Array als auch durchläuft das Array zweimal. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode ist möglicherweise effizienter, insbesondere speichermäßig, da sie den Iterator nur einmal durchläuft, ohne irgendwelche Zwischenwerte zu merken. Iterator-Hilfsmethoden sind notwendig, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array konvertieren, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit durchläuft, wie nötig ist, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie werden viele Iterator-Methoden finden, die den Array-Methoden analog sind, wie zum Beispiel:

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

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} kombiniert sind etwas analog zu {{jsxref("Array.prototype.slice()")}}.

### Iterator-Helferobjekte

> [!NOTE]
> _Iterator-Helferobjekte_ und _Iterator-Hilfsmethoden_ sind zwei unterschiedliche Konzepte. Ein Iterator-Helferobjekt ist zur Laufzeit erkennbar, während der Begriff "Iterator-Hilfsmethode" nur ein Name für eine Gruppe von Methoden zur Veranschaulichung ist. _Iterator-Helfer_ kann je nach Kontext entweder auf das Objekt oder die Methode verweisen.

Unter den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator-Helfer_-Objekt zurück. Der Iterator-Helfer ist auch eine `Iterator`-Instanz, was diese Hilfsmethoden kaskadierbar macht. Alle Iterator-Helferobjekte erben von einem gemeinsamen Prototypobjekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator-Helfer teilt die gleiche Datenquelle wie der zugrunde liegende Iterator, sodass das Durchlaufen des Iterator-Helfers auch den zugrunde liegenden Iterator durchläuft. Es gibt keine Möglichkeit, einen Iterator zu "forken", um ihn mehrfach durchlaufbar zu machen.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Richtige Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was im Minimum nur die Anwesenheit einer `next()`-Methode erfordert), und Objekte, die von der `Iterator`-Klasse erben, die die Hilfsmethoden haben. Sie bedingen sich nicht gegenseitig – Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt eine `next()`-Methode selbst definieren. Ein _richtiger Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meisten Code erwarten, dass Iteratoren richtige Iteratoren sind und Iterables richtige Iteratoren zurückgeben. Um richtige Iteratoren zu erstellen, definieren Sie eine Klasse, die {{jsxref("Iterator/Iterator", "Iterator")}} erweitert, oder verwenden Sie die {{jsxref("Iterator.from()")}}-Methode.

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
  - : Soll von anderen Klassen erweitert werden, die Iteratoren erstellen. Löst einen Fehler aus, wenn er von sich selbst konstruiert wird.

## Statische Methoden

- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder Iterable-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Im Gegensatz zu dem `[Symbol.toStringTag]` in den meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` beschreibbar aus Gründen der Webkompatibilität.

## Instanzmethoden

- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Helferobjekt zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Prüft, ob alle Elemente, die vom Iterator erzeugt werden, den in der bereitgestellten Funktion implementierten Test bestehen.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Helferobjekt zurück, das nur diejenigen Elemente des Iterators ausgibt, für die die bereitgestellte Callback-Funktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste Element zurück, das vom Iterator erzeugt wird und die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Helferobjekt zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Abbildungsfunktion laufen lässt und Elemente ausgibt, die von der Abbildungsfunktion zurückgegeben werden (die in einem anderen Iterator oder Iterable enthalten sind).
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes vom Iterator erzeugte Element aus.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Helferobjekt zurück, das die vom Iterator erzeugten Elemente ausgibt, wobei jedes durch eine Abbildungsfunktion transformiert wird.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion für jedes vom Iterator erzeugte Element aus und übergibt den Rückgabewert der Berechnung des vorhergehenden Elements. Das endgültige Ergebnis des Reduzierens aller Elemente ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Prüft, ob mindestens ein Element im Iterator den in der bereitgestellten Funktion implementierten Test besteht. Es gibt einen Booleschen Wert zurück.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Helferobjekt zurück, das die angegebene Anzahl von Elementen in diesem Iterator ausgibt und dann beendet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den aus dem Iterator ausgegebenen Elementen gefüllt ist.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, falls sie existiert. Dies implementiert das _Disposable-Protokoll_ und ermöglicht es, beim Gebrauch mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} entsorgt zu werden.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es Iterator-Objekten, auch iterable zu sein.

## Beispiele

### Verwenden eines Iterators als Iterable

Alle eingebauten Iteratoren sind auch iterable, sodass Sie sie in einer `for...of`-Schleife verwenden können:

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
