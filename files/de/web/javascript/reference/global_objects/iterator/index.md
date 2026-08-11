---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: d43ba33e72afa135ce782e2c0ca19fe32a93bb13
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle eingebauten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse bietet eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode, die das Iterator-Objekt selbst zurückgibt, was den Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) macht. Sie bietet auch einige Hilfsmethoden für den Umgang mit Iteratoren.

## Beschreibung

Folgende sind alle eingebauten JavaScript-Iteratoren:

- Der _Array-Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String-Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map-Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set-Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp String-Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments-Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts zurückgegeben wird, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Auch Web-APIs können Iteratoren zurückgeben. Einige verwenden Kern-JavaScript-Iteratoren, während andere ihre eigenen Iteratoren definieren. Beispielsweise:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben einen _Array-Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte von Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben ihren eigenen Iteratortyp wie _Headers Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte von Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben ihren eigenen Iteratortyp wie _FontFaceSet Iterator_ von ihren jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen sind so benannt, entsprechen jedoch nicht dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) oder dem [iterierbaren Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototyp-Objekt, das die `next()`-Methode implementiert, die vom jeweiligen Iterator verwendet wird. Zum Beispiel erben alle String-Iterator-Objekte von einem versteckten Objekt `StringIteratorPrototype`, das eine `next()`-Methode hat, die diesen String anhand von Codepunkten iteriert. `StringIteratorPrototype` hat auch eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ähnlich haben andere Iterator-Prototypen auch ihre eigenen `[Symbol.toStringTag]`-Werte, die denselben Namen haben wie die oben genannten.

Alle diese Prototyp-Objekte erben von `Iterator.prototype`, die eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bietet, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird.

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfen, keine _iterierbaren_ Hilfen, da die einzige Anforderung, dass ein Objekt iterierbar ist, das Vorhandensein einer `[Symbol.iterator]()`-Methode ist. Es gibt kein gemeinsames Prototype, um diese Methoden zu installieren.

Die `Iterator`-Klasse bietet einige Hilfsmethoden für den Umgang mit Iteratoren. Zum Beispiel könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dies konvertiert zunächst den von {{jsxref("Map.prototype.values()")}} zurückgegebenen Iterator in ein Array und verwendet dann die {{jsxref("Array.prototype.reduce()")}}-Methode, um die Summe zu berechnen. Dies erstellt jedoch sowohl ein Zwischen-Array als auch iteriert das Array zweimal. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann effizienter sein, besonders speicherseitig, da sie den Iterator nur einmal durchläuft, ohne Zwischenwerte zu speichern. Iterator-Hilfsmethoden sind notwendig, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array umwandeln, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit iteriert, wie es nötig ist, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie finden viele Iterator-Methoden analog zu Array-Methoden, wie:

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

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} zusammen sind in gewissem Maße analog zu {{jsxref("Array.prototype.slice()")}}.

### Iterator-Hilfsobjekte

> [!NOTE]
> _Iterator-Hilfsobjekte_ und _Iterator-Hilfsmethoden_ sind zwei verschiedene Konzepte. Ein Iterator-Hilfsobjekt ist zur Laufzeit erkennbar, während "Iterator-Hilfsmethode" nur ein Name für eine Gruppe von Methoden zum Verständnis ist. _Iterator Helper_ kann sich je nach Kontext entweder auf das Objekt oder die Methode beziehen.

Unter den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator Help_ Objekt zurück. Der Iterator Helper ist auch eine `Iterator`-Instanz, was diese Hilfsmethoden verkettbar macht. Alle Iterator-Hilfsobjekte erben von einem gemeinsamen Prototyp-Objekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator Helper teilt dieselbe Datenquelle wie der zugrunde liegende Iterator, daher führt das Iterieren des Iterator Helpers auch zur Iteration des zugrunde liegenden Iterators. Es gibt keine Möglichkeit, einen Iterator zu "verzweigen", um ihn mehrmals iterieren zu können.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Richtige Iteratoren

Es gibt zwei Arten von "Iteratoren": Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was im Minimum nur das Vorhandensein einer `next()`-Methode erfordert), und Objekte, die von der `Iterator`-Klasse erben, die die Hilfsmethoden genießen. Diese implizieren sich nicht gegenseitig — Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Stattdessen muss das Objekt selbst eine `next()`-Methode definieren. Ein _richtiger Iterator_ ist einer, der sowohl dem Iterator-Protokoll entspricht als auch von `Iterator` erbt, und die meisten Codes erwarten, dass Iteratoren richtige Iteratoren sind und Iterables richtige Iteratoren zurückgeben. Um richtige Iteratoren zu erstellen, definieren Sie eine Klasse, die {{jsxref("Iterator/Iterator", "Iterator")}} erweitert, oder verwenden Sie die {{jsxref("Iterator.from()")}}-Methode.

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

- {{jsxref("Iterator.concat()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einer Liste von iterierbaren Objekten. Der neue Iterator liefert die Werte aus jedem der Eingabewerte nacheinander.
- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder iterierbaren Objekt.
- {{jsxref("Iterator.zip()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten durch das Übergeben von Arrays, die Elemente an der gleichen Position enthalten, aggregiert.
- {{jsxref("Iterator.zipKeyed()")}} {{experimental_inline}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten durch das Übergeben von Objekten, die Elemente an der gleichen Position enthalten, aggregiert, mit Schlüsseln, die durch die Eingabe spezifiziert sind.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der anfängliche Wert der {{jsxref("Iterator/Iterator", "Iterator")}}-Konstruktor.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Anders als der `[Symbol.toStringTag]` bei den meisten eingebauten Klassen ist `Iterator.prototype[Symbol.toStringTag]` beschreibbar aus Gründen der Web-Kompatibilität.

## Instanz-Methoden

- {{jsxref("Iterator.prototype.chunks()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Teile aufteilt. Jedes Mal, wenn der Helper durchlaufen wird, erhält er die angegebene Anzahl von Elementen aus dem zugrunde liegenden Iterator und gibt sie zusammen zurück.
- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die gegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, gibt er `true` zurück.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das nur diejenigen Elemente des Iterators liefert, für die die bereitgestellte Rückruffunktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste Element zurück, das vom Iterator produziert wird und die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Abbildungsfunktion ausführt und Elemente liefert, die von der Abbildungsfunktion zurückgegeben werden (die in einem anderen Iterator oder einer anderen Iteration enthalten sind).
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes Element aus, das vom Iterator produziert wird.
- {{jsxref("Iterator.prototype.includes()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn ein vom Iterator produziertes Element dem gegebenen Wert entspricht. Andernfalls gibt es, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, `false` zurück.
- {{jsxref("Iterator.prototype.join()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der die Verkettung aller Elemente darstellt, die durch den Iterator produziert werden, getrennt durch Kommata oder einen angegebenen Trennzeichen-String.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das Elemente des Iterators liefert, wobei jedes durch eine Abbildungsfunktion transformiert wird.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducing"-Rückruffunktion auf jedem vom Iterator produzierten Element aus und übergibt den Rückgabewert aus der Berechnung am vorherigen Element. Das Endergebnis des Ausführens des Reducers über alle Elemente hinweg ist ein einziger Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls gibt es, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, `false` zurück.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die gegebene Anzahl von Elementen in diesem Iterator liefert und dann endet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den Elementen gefüllt ist, die vom Iterator geliefert werden.
- {{jsxref("Iterator.prototype.windows()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das ein gleitendes Fenster von Elementen liefert. Jedes Mal, wenn der Helper durchlaufen wird, liefert er ein Array, das das erste Element der vorherigen Iteration entfernt und das nächste Element des ursprünglichen Iterators hinzufügt.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, wenn sie existiert. Dies implementiert das _disposable protocol_ und erlaubt, dass es entsorgt wird, wenn es mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} verwendet wird.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es, dass Iterator-Objekte auch iterierbar sind.

## Beispiele

### Einen Iterator als iterierbar verwenden

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
- [es-shims Polyfill von `Iterator` und zugehörigen Helfern](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [Iterator-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
