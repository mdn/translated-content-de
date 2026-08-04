---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird. Sie bietet auch einige Hilfsmethoden für die Arbeit mit Iteratoren.

## Beschreibung

Dies sind alle eingebauten JavaScript-Iteratoren:

- Der _Array-Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String-Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map-Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set-Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp String Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments-Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Web-APIs können ebenfalls Iteratoren zurückgeben. Einige verwenden Kern-JavaScript-Iteratoren wieder, während andere ihre eigenen Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array-Iterator_ aus ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte von Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp wie _Headers-Iterator_ aus ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte von Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp wie _FontFaceSet-Iterator_ aus ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere ältere Schnittstellen sind so benannt, entsprechen jedoch nicht dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder dem [iterierbaren Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein unterschiedliches Prototypobjekt, das die `next()`-Methode definiert, die von dem jeweiligen Iterator verwendet wird. Beispielsweise erben alle String-Iterator-Objekte von einem versteckten Objekt `StringIteratorPrototype`, das eine `next()`-Methode hat, die diesen String nach Codepunkten iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert die Zeichenkette `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ähnlich haben andere Iterator-Prototypen auch ihre eigenen `[Symbol.toStringTag]`-Werte, die den oben genannten Namen entsprechen.

Alle diese Prototypobjekte erben von `Iterator.prototype`, das eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird.

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfen, keine _iterierbaren_ Hilfen, da die einzige Anforderung für ein Objekt, iterierbar zu sein, nur das Vorhandensein einer `[Symbol.iterator]()`-Methode ist. Es gibt keinen gemeinsamen Prototypen, um diese Methoden zu installieren.

Die `Iterator`-Klasse selbst bietet einige Hilfsmethoden zur Arbeit mit Iteratoren. Zum Beispiel könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies konvertiert zuerst den Iterator, der von {{jsxref("Map.prototype.values()")}} zurückgegeben wird, in ein Array und verwendet dann die {{jsxref("Array.prototype.reduce()")}}-Methode, um die Summe zu berechnen. Allerdings wird hierbei sowohl ein Zwischen-Array erstellt als auch das Array zweimal durchlaufen. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann speichertechnisch effizienter sein, da sie den Iterator nur einmal durchläuft, ohne Zwischenwerte zu speichern. Iterator-Hilfsmethoden sind notwendig, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array konvertieren, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit durchläuft, wie nötig, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie finden viele Iterator-Methoden, die analog zu Array-Methoden sind, wie:

| Iterator-Methode                            | Array-Methode                            |
| ------------------------------------------- | ---------------------------------------- |
| {{jsxref("Iterator.prototype.every()")}}    | {{jsxref("Array.prototype.every()")}}    |
| {{jsxref("Iterator.prototype.filter()")}}   | {{jsxref("Array.prototype.filter()")}}   |
| {{jsxref("Iterator.prototype.find()")}}     | {{jsxref("Array.prototype.find()")}}     |
| {{jsxref("Iterator.prototype.flatMap()")}}  | {{jsxref("Array.prototype.flatMap()")}}  |
| {{jsxref("Iterator.prototype.forEach()")}}  | {{jsxref("Array.prototype.forEach()")}}  |
| {{jsxref("Iterator.prototype.includes()")}} | {{jsxref("Array.prototype.includes()")}} |
| {{jsxref("Iterator.prototype.join()")}}     | {{jsxref("Array.prototype.join()")}}     |
| {{jsxref("Iterator.prototype.map()")}}      | {{jsxref("Array.prototype.map()")}}      |
| {{jsxref("Iterator.prototype.reduce()")}}   | {{jsxref("Array.prototype.reduce()")}}   |
| {{jsxref("Iterator.prototype.some()")}}     | {{jsxref("Array.prototype.some()")}}     |

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} zusammen sind etwas analog zu {{jsxref("Array.prototype.slice()")}}.

### Iterator-Hilfeobjekte

> [!NOTE]
> _Iterator-Hilfeobjekte_ und _Iterator-Hilfsmethoden_ sind zwei verschiedene Konzepte. Ein Iterator-Hilfeobjekt kann zur Laufzeit erkannt werden, während "Iterator-Hilfsmethode" nur ein Begriff für eine Menge von Methoden zur Verständnishilfe ist. _Iterator Helper_ kann sich je nach Kontext auf das Objekt oder die Methode beziehen.

Unter den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator-Hilfeobjekt_ zurück. Der Iterator-Helper ist auch eine `Iterator`-Instanz, wodurch diese Hilfsmethoden kaskadierbar sind. Alle Iterator-Hilfeobjekte erben von einem gemeinsamen Prototypobjekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator-Helper teilt die gleiche Datenquelle wie der zugrunde liegende Iterator, sodass das Iterieren des Iterator-Helpers dazu führt, dass der zugrunde liegende Iterator ebenfalls iteriert wird. Es gibt keine Möglichkeit, einen Iterator zu "verzweigen", um ihn mehrmals iterieren zu lassen.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Richtige Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was im Mindestmaß nur die Anwesenheit einer `next()`-Methode erfordert), und Objekte, die von der `Iterator`-Klasse erben, welche die Hilfsmethoden bereitstellt. Sie bedingen einander nicht — Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt selbst eine `next()`-Methode definieren. Ein _richtiger Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meiste Software erwartet, dass Iteratoren richtige Iteratoren sind und iterierbare Objekte richtige Iteratoren zurückgeben. Um richtige Iteratoren zu erstellen, definieren Sie eine Klasse, die von {{jsxref("Iterator/Iterator", "Iterator")}} erbt, oder verwenden Sie die {{jsxref("Iterator.from()")}}-Methode.

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
  - : Soll von anderen Klassen, die Iteratoren erstellen, erweitert werden. Löst einen Fehler aus, wenn sie selbst konstruiert wird.

## Statische Methoden

- {{jsxref("Iterator.concat()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einer Liste von iterierbaren Objekten. Der neue Iterator liefert die Werte aus jedem der Eingabe-Iterables der Reihe nach.
- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder iterierbaren Objekt.
- {{jsxref("Iterator.zip()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Arrays zurückgibt, die Elemente an der gleichen Position enthalten.
- {{jsxref("Iterator.zipKeyed()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Objekte zurückgibt, die Elemente an der gleichen Position mit den von der Eingabe angegebenen Schlüsseln enthalten.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Anders als das `[Symbol.toStringTag]` der meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` aus Gründen der Webkompatibilität beschreibbar.

## Instanz-Methoden

- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element gefunden zu haben, wird `true` zurückgegeben.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das nur jene Elemente des Iterators liefert, für die die bereitgestellte Rückruffunktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste Element zurück, das vom Iterator produziert wird und die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Abbildungsfunktion laufen lässt und die Elemente liefert, die von der Abbildungsfunktion (die sich in einem anderen Iterator oder iterierbaren Objekt befinden) zurückgegeben werden.
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes vom Iterator produzierte Element aus.
- {{jsxref("Iterator.prototype.includes()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn ein vom Iterator produziertes Element dem angegebenen Wert entspricht. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element gefunden zu haben, wird `false` zurückgegeben.
- {{jsxref("Iterator.prototype.join()")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die die Verkettung aller vom Iterator produzierten Elemente ist, getrennt durch Kommata oder einen angegebenen Trennzeichen-String.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das Elemente des Iterators liefert, die jeweils durch eine Abbildungsfunktion transformiert werden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Rückruffunktion auf jedem vom Iterator produzierten Element aus und übergibt den Rückgabewert der Berechnung des vorherigen Elements. Das endgültige Ergebnis des Reducers über alle Elemente hinweg ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element gefunden zu haben, wird `false` zurückgegeben.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das die angegebene Anzahl von Elementen in diesem Iterator liefert und dann endet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, falls sie existiert. Dies implementiert das _Disposable-Protokoll_ und erlaubt es, beim Gebrauch mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} entsorgt zu werden.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es, dass Iterator-Objekte auch iterierbar sind.

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
- [es-shims Polyfill von `Iterator` und zugehörige Hilfsmittel](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
