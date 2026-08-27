---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse bietet eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator ebenfalls [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird. Sie bietet auch einige Hilfsmethoden für die Arbeit mit Iteratoren.

## Beschreibung

Die folgenden sind alle eingebauten JavaScript-Iteratoren:

- Der _Array-Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator), und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String-Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map-Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}}, und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set-Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}}, und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp-String-Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments-Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Auch Web-APIs können Iteratoren zurückgeben. Einige verwenden Kern-JavaScript-Iteratoren wieder, während andere ihre eigenen Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array-Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()`, und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte von Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp wie _Headers-Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()`, und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte von Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp wie _FontFaceSet-Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()`, und `[Symbol.iterator]()` zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen sind zwar namentlich so benannt, erfüllen jedoch nicht das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototyp-Objekt, das die `next()`-Methode definiert, die von dem spezifischen Iterator verwendet wird. Beispielsweise erben alle String-Iterator-Objekte von einem versteckten Objekt `StringIteratorPrototype`, das eine `next()`-Methode hat, die diesen String durch Codepunkte iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ebenso haben andere Iterator-Prototypen auch ihre eigenen `[Symbol.toStringTag]`-Werte, die den oben gegebenen Namen entsprechen.

Alle diese Prototyp-Objekte erben von `Iterator.prototype`, das eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator ebenfalls [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird.

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfen, nicht _iterierbare_ Hilfen, da die einzige Anforderung für ein Objekt, iterierbar zu sein, nur das Vorhandensein einer `[Symbol.iterator]()`-Methode ist. Es gibt keinen gemeinsamen Prototyp, um diese Methoden zu installieren.

Die `Iterator`-Klasse selbst bietet einige Hilfsmethoden für die Arbeit mit Iteratoren. Zum Beispiel könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies konvertiert zuerst den Iterator, der von {{jsxref("Map.prototype.values()")}} zurückgegeben wird, in ein Array und verwendet dann die Methode {{jsxref("Array.prototype.reduce()")}}, um die Summe zu berechnen. Dies erzeugt jedoch sowohl ein Zwischenarray als auch iteriert das Array zweimal. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode könnte effizienter sein, insbesondere speicherbezogen, da sie den Iterator nur einmal iteriert, ohne Zwischenwerte zu speichern. Iterator-Hilfsmethoden sind notwendig, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array konvertieren, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit iteriert, wie es notwendig ist, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie werden viele Iterator-Methoden finden, die analog zu Array-Methoden sind, wie zum Beispiel:

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

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} kombiniert sind in gewisser Hinsicht analog zu {{jsxref("Array.prototype.slice()")}}.

### Iterator-Hilfeobjekte

> [!NOTE]
> _Iterator-Hilfeobjekte_ und _Iterator-Hilfsmethoden_ sind zwei verschiedene Konzepte. Ein Iterator-Hilfeobjekt ist zur Laufzeit erkennbar, während "Iterator-Hilfsmethode" nur ein Name für eine Menge von Methoden zur Verständniserleichterung ist. _Iterator Helper_ kann je nach Kontext entweder das Objekt oder die Methode bezeichnen.

Unter den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}}, und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator-Hilfeobjekt_ zurück. Der Iterator-Helfer ist ebenfalls eine `Iterator`-Instanz, wodurch diese Hilfsmethoden verkettbar sind. Alle Iterator-Hilfeobjekte erben von einem gemeinsamen Prototyp-Objekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator-Helfer teilt die gleiche Datenquelle wie der zugrunde liegende Iterator, sodass das Iterieren des Iterator-Helfers auch dazu führt, dass der zugrunde liegende Iterator iteriert wird. Es gibt keine Möglichkeit, einen Iterator zu "verzweigen", um ihn mehrmals zu iterieren.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Richtige Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was im Minimalen nur die Anwesenheit einer `next()`-Methode erfordert), und Objekte, die von der `Iterator`-Klasse erben, welche die Hilfsmethoden nutzen. Sie bedingen sich nicht gegenseitig — Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt selbst eine `next()`-Methode definieren. Ein _richtiger Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meisten Codes erwarten, dass Iteratoren richtige Iteratoren sind und Iterables richtige Iteratoren zurückgeben. Um richtige Iteratoren zu erstellen, definieren Sie eine Klasse, die von {{jsxref("Iterator/Iterator", "Iterator")}} erweitert, oder verwenden Sie die Methode {{jsxref("Iterator.from()")}}.

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
  - : Soll [erweitert](/de/docs/Web/JavaScript/Reference/Classes/extends) werden von anderen Klassen, die Iteratoren erstellen. Wirft einen Fehler, wenn sie selbst erstellt wird.

## Statische Methoden

- {{jsxref("Iterator.concat()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einer Liste iterierbarer Objekte. Der neue Iterator liefert die Werte aus jedem der Eingabe-Iterables der Reihe nach.
- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder iterierbaren Objekt.
- {{jsxref("Iterator.zip()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Arrays mit Elementen an derselben Position liefert.
- {{jsxref("Iterator.zipKeyed()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Objekte mit Elementen an derselben Position liefert, wobei die Schlüssel durch die Eingabe spezifiziert werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Im Gegensatz zu dem `[Symbol.toStringTag]` bei den meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` beschreibbar aus Gründen der Web-Kompatibilität.

## Instanz-Methoden

- {{jsxref("Iterator.prototype.chunks()")}} {{experimental_inline}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Arrays aufteilt. Jedes Mal, wenn der Helfer iteriert wird, erhält er die angegebene Anzahl von Elementen vom zugrunde liegenden Iterator und gibt sie gemeinsam zurück.
- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, gibt er `true` zurück.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das nur die Elemente des Iterators liefert, für die die bereitgestellte Callback-Funktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste vom Iterator produzierte Element zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Mapping-Funktion laufen lässt und die Elemente liefert, die von der Mapping-Funktion zurückgegeben werden (die in einem anderen Iterator oder Iterable enthalten sind).
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes vom Iterator produzierte Element aus.
- {{jsxref("Iterator.prototype.includes()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn ein vom Iterator produziertes Element gleich dem gegebenen Wert ist. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, gibt er `false` zurück.
- {{jsxref("Iterator.prototype.join()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der die Verkettung aller vom Iterator produzierten Elemente darstellt, getrennt durch Kommas oder einen angegebenen Trennzeichen-String.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das Elemente des Iterators liefert, wobei jedes durch eine Mapping-Funktion transformiert wird.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine benutzerdefinierte "Reducer"-Callback-Funktion auf jedem vom Iterator produzierten Element aus, wobei der Rückgabewert der Berechnung auf das vorherige Element übergeben wird. Das Endergebnis der Ausführung des Reducers über alle Elemente ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, gibt er `false` zurück.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das die angegebene Anzahl von Elementen in diesem Iterator liefert und dann beendet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.
- {{jsxref("Iterator.prototype.windows()")}} {{experimental_inline}}
  - : Gibt ein neues Iterator-Hilfeobjekt zurück, das ein gleitendes Fenster von Elementen liefert. Jedes Mal, wenn der Helfer iteriert wird, liefert er ein Array, das das erste Element aus der vorherigen Iteration entfernt und das nächste Element aus dem ursprünglichen Iterator hinzufügt.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, falls sie existiert. Dies implementiert das _disposable-Protokoll_ und ermöglicht es, es zu entsorgen, wenn es mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} verwendet wird.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es, dass Iterator-Objekte ebenfalls iterierbar sind.

## Beispiele

### Verwenden eines Iterators als Iterierbares

Alle eingebauten Iteratoren sind ebenfalls iterierbar, sodass Sie sie in einer `for...of`-Schleife verwenden können:

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
