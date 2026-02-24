---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse bietet eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) ist. Sie bietet auch einige Hilfsmethoden für die Arbeit mit Iteratoren.

## Beschreibung

Die folgenden sind alle eingebauten JavaScript-Iteratoren:

- Der _Array-Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String-Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map-Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}}, und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set-Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}}, und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp-String-Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments-Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts zurückgegeben wird, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, der von iterator Helper-Methoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Web-APIs können ebenfalls Iteratoren zurückgeben. Einige wiederverwenden core JavaScript-Iteratoren, während andere ihre eigenen Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array-Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte aus Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp wie _Headers-Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte aus Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp wie _FontFaceSet-Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen sind zwar so benannt, entsprechen aber nicht dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder [iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eindeutiges Prototyp-Objekt, das die `next()`-Methode definiert, die vom jeweiligen Iterator verwendet wird. Zum Beispiel erben alle String-Iterator-Objekte von einem versteckten Objekt `StringIteratorPrototype`, das eine `next()`-Methode hat, die diesen String durch Codepunkte iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ähnlich haben andere Iterator-Prototypen auch ihre eigenen `[Symbol.toStringTag]`-Werte, die mit den oben genannten Namen übereinstimmen.

Alle diese Prototyp-Objekte erben von `Iterator.prototype`, der eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) ist.

### Iterator Helper-Methoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfsmethoden, nicht _iterable_-Hilfsmethoden, da die einzige Voraussetzung für ein Objekt, um iterable zu sein, nur das Vorhandensein einer `[Symbol.iterator]()`-Methode ist. Es gibt keinen gemeinsamen Prototyp, auf dem diese Methoden installiert werden können.

Die `Iterator`-Klasse selbst bietet einige Hilfsmethoden für die Arbeit mit Iteratoren. Zum Beispiel könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies konvertiert zuerst den von {{jsxref("Map.prototype.values()")}} zurückgegebenen Iterator in ein Array und verwendet dann die {{jsxref("Array.prototype.reduce()")}}-Methode, um die Summe zu berechnen. Dies erstellt jedoch sowohl ein Zwischenarray als auch iteriert das Array zweimal. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann effizienter sein, insbesondere speichermäßig, da sie den Iterator nur einmal iteriert, ohne Zwischenwerte zu speichern. Iterator-Hilfsmethoden sind erforderlich, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array konvertieren, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit iteriert, wie notwendig, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie werden viele Iterator-Methoden finden, die analog zu Array-Methoden sind, wie:

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

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} kombiniert sind in gewisser Weise analog zu {{jsxref("Array.prototype.slice()")}}.

### Iterator Helper-Objekte

> [!NOTE]
> _Iterator Helper-Objekte_ und _Iterator Helper-Methoden_ sind zwei verschiedene Konzepte. Ein Iterator Helper-Objekt ist zur Laufzeit erkennbar, während "Iterator Helper-Methode" nur ein Name für eine Reihe von Methoden zur Veranschaulichung ist. _Iterator Helper_ kann sich je nach Kontext entweder auf das Objekt oder die Methode beziehen.

Unter den Iterator Helper-Methoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}}, und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator Helper_-Objekt zurück. Der Iterator Helper ist ebenfalls eine `Iterator`-Instanz, wodurch diese Hilfsmethoden kaskadierbar sind. Alle Iterator Helper-Objekte erben von einem gemeinsamen Prototyp-Objekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator Helper teilt die gleiche Datenquelle wie der zugrunde liegende Iterator, sodass das Iterieren des Iterator Helpers auch den zugrunde liegenden Iterator iteriert. Es gibt keine Möglichkeit, einen Iterator zu "verzweigen", um ihn mehrmals zu iterieren.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Richtige Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was mindestens nur das Vorhandensein einer `next()`-Methode erfordert), und Objekte, die von der `Iterator`-Klasse erben, die die Hilfsmethoden genießen. Sie schließen sich nicht gegenseitig ein — Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt selbst eine `next()`-Methode definieren. Ein _richtiger Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meisten Codes erwarten, dass Iteratoren richtige Iteratoren sind und Iterable richtige Iteratoren zurückgeben. Um richtige Iteratoren zu erstellen, definieren Sie eine Klasse, die von {{jsxref("Iterator/Iterator", "Iterator")}} erbt, oder verwenden Sie die {{jsxref("Iterator.from()")}}-Methode.

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
  - : Soll von anderen Klassen erweitert werden, die Iteratoren erstellen. Löst einen Fehler aus, wenn es alleine konstruiert wird.

## Statische Methoden

- {{jsxref("Iterator.concat()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einer Liste iterabler Objekte. Der neue Iterator gibt die Werte aus jedem der Eingabe-Iterables in der Reihenfolge zurück.
- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder iterablem Objekt.
- {{jsxref("Iterator.zip()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Arrays zurückgibt, die Elemente an derselben Position enthalten.
- {{jsxref("Iterator.zipKeyed()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Objekte mit Elementen an derselben Position zurückgibt, wobei die Schlüssel von der Eingabe spezifiziert werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Im Gegensatz zum `[Symbol.toStringTag]` bei den meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` aus Gründen der Webkompatibilität beschreibbar.

## Instanz-Methoden

- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator Helper-Objekt zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls, wenn der Iterator ohne ein solches Element erschöpft ist, wird `true` zurückgegeben.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator Helper-Objekt zurück, das nur diejenigen Elemente des Iterators liefert, für die die bereitgestellte Rückruffunktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste Element zurück, das vom Iterator produziert wird und die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator Helper-Objekt zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Mapping-Funktion laufen lässt und die von der Mapping-Funktion zurückgegebenen Elemente liefert (die sich in einem anderen Iterator oder Iterable befinden).
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes vom Iterator produzierte Element aus.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator Helper-Objekt zurück, das Elemente des Iterators liefert, die jeweils durch eine Mapping-Funktion transformiert werden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Rückruffunktion auf jedes vom Iterator produzierte Element aus und übergibt den Rückgabewert aus der Berechnung am vorhergehenden Element. Das Endergebnis des Durchlaufs des Reducers über alle Elemente ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls, wenn der Iterator ohne ein solches Element erschöpft ist, wird `false` zurückgegeben.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator Helper-Objekt zurück, das die angegebene Anzahl von Elementen in diesem Iterator liefert und dann beendet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, falls vorhanden. Dies implementiert das _disposable-Protokoll_ und erlaubt es, beim Verwenden mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} entsorgt zu werden.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es, dass Iterator-Objekte auch iterable sind.

## Beispiele

### Einen Iterator als Iterable verwenden

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
- [es-shims Polyfill von `Iterator` und zugehörigen Helfern](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [Iterator-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
