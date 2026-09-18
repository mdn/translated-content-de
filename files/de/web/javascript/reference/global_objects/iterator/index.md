---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Iterator-Ergebnisobjekt zurückgibt. Alle integrierten Iteratoren erben von der Klasse `Iterator`. Die Klasse `Iterator` stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt, wodurch der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) wird. Sie stellt außerdem einige Hilfsmethoden für die Arbeit mit Iteratoren bereit.

## Beschreibung

Die folgenden sind allesamt integrierte JavaScript-Iteratoren:

- Der _Array Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp String Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegebene {{jsxref("Generator")}}-Objekt.
- Der _Segments Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts zurückgegeben wird, das von [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgegeben wird.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Web-APIs können ebenfalls Iteratoren zurückgeben. Einige verwenden JavaScript-Kerniteratoren wieder, während andere eigene Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen _Array Iterator_ zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte aus Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen eigenen Iteratortyp wie _Headers Iterator_ zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte aus Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen eigenen Iteratortyp wie _FontFaceSet Iterator_ zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere alte Schnittstellen tragen zwar diesen Namen, entsprechen jedoch weder dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) noch dem [iterierbaren Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren verfügt über ein eigenes Prototypobjekt, das die vom jeweiligen Iterator verwendete `next()`-Methode definiert. Beispielsweise erben alle String-Iteratorobjekte von einem verborgenen Objekt `StringIteratorPrototype`, das über eine `next()`-Methode verfügt, welche diesen String anhand von Codepunkten iteriert. `StringIteratorPrototype` verfügt außerdem über eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Ebenso besitzen andere Iterator-Prototypen eigene `[Symbol.toStringTag]`-Werte, die den oben angegebenen Namen entsprechen.

Alle diese Prototypobjekte erben von `Iterator.prototype`, das eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereitstellt, die das Iterator-Objekt selbst zurückgibt. Dadurch wird der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind _Iterator_-Hilfsmethoden und keine _iterierbaren_ Hilfsmethoden, da die einzige Voraussetzung dafür, dass ein Objekt iterierbar ist, lediglich das Vorhandensein einer `[Symbol.iterator]()`-Methode ist. Es gibt keinen gemeinsamen Prototyp, auf dem diese Methoden installiert werden könnten.

Die Klasse `Iterator` selbst stellt einige Hilfsmethoden für die Arbeit mit Iteratoren bereit. Beispielsweise könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dadurch wird der von {{jsxref("Map.prototype.values()")}} zurückgegebene Iterator zunächst in ein Array umgewandelt und dann die Methode {{jsxref("Array.prototype.reduce()")}} verwendet, um die Summe zu berechnen. Dies erzeugt jedoch sowohl ein Zwischenarray als auch eine zweimalige Iteration über das Array. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann effizienter sein, insbesondere hinsichtlich des Speicherverbrauchs, da sie den Iterator nur einmal durchläuft, ohne Zwischenwerte zu speichern. Iterator-Hilfsmethoden sind notwendig, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array umwandeln, weil es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden, die `seq` nur so weit durchläuft, wie es nötig ist, um den ersten Wert zu finden, der die Bedingung erfüllt.

Sie finden viele Iterator-Methoden, die Array-Methoden entsprechen, beispielsweise:

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

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} entsprechen in Kombination in gewisser Weise {{jsxref("Array.prototype.slice()")}}.

### Iterator-Hilfsobjekte

> [!NOTE]
> _Iterator-Hilfsobjekte_ und _Iterator-Hilfsmethoden_ sind zwei unterschiedliche Konzepte. Ein Iterator-Hilfsobjekt kann zur Laufzeit erkannt werden, während „Iterator-Hilfsmethode“ lediglich eine Bezeichnung für eine Reihe von Methoden zum besseren Verständnis ist. _Iterator-Hilfsmethode_ kann je nach Kontext entweder das Objekt oder die Methode bezeichnen.

Unter den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator Helper_-Objekt zurück. Der Iterator Helper ist ebenfalls eine `Iterator`-Instanz, wodurch diese Hilfsmethoden verkettbar sind. Alle Iterator-Hilfsobjekte erben von einem gemeinsamen Prototypobjekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Der Iterator Helper verwendet dieselbe Datenquelle wie der zugrunde liegende Iterator, sodass das Iterieren des Iterator Helper auch zur Iteration des zugrunde liegenden Iterators führt. Es gibt keine Möglichkeit, einen Iterator „aufzuspalten“, damit er mehrfach iteriert werden kann.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Korrekte Iteratoren

Es gibt zwei Arten von „Iteratoren“: Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (was mindestens nur das Vorhandensein einer `next()`-Methode erfordert), und Objekte, die von der Klasse `Iterator` erben und die Hilfsmethoden nutzen können. Das eine bedingt nicht das andere — Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die Klasse `Iterator` keine `next()`-Methode definiert. Stattdessen muss das Objekt selbst eine `next()`-Methode definieren. Ein _korrekter Iterator_ entspricht sowohl dem Iterator-Protokoll als auch erbt er von `Iterator`. Der meiste Code erwartet, dass Iteratoren korrekte Iteratoren sind und iterierbare Objekte korrekte Iteratoren zurückgeben. Um korrekte Iteratoren zu erstellen, definieren Sie eine Klasse, die {{jsxref("Iterator/Iterator", "Iterator")}} erweitert, oder verwenden Sie die Methode {{jsxref("Iterator.from()")}}.

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
  - : Dazu vorgesehen, von anderen Klassen [erweitert](/de/docs/Web/JavaScript/Reference/Classes/extends) zu werden, die Iteratoren erstellen. Löst einen Fehler aus, wenn er eigenständig konstruiert wird.

## Statische Methoden

- {{jsxref("Iterator.concat()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einer Liste iterierbarer Objekte. Der neue Iterator liefert die Werte jedes Eingabe-Iterables nacheinander.
- {{jsxref("Iterator.from()")}}
  - : Erstellt ein neues `Iterator`-Objekt aus einem Iterator oder iterierbaren Objekt.
- {{jsxref("Iterator.zip()")}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente mehrerer iterierbarer Objekte zusammenfasst, indem es Arrays mit Elementen an derselben Position liefert.
- {{jsxref("Iterator.zipKeyed()")}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente mehrerer iterierbarer Objekte zusammenfasst, indem es Objekte mit Elementen an derselben Position und den durch die Eingabe angegebenen Schlüsseln liefert.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen gemeinsam verwendet.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Iterator/Iterator", "Iterator")}}.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Im Gegensatz zu `[Symbol.toStringTag]` bei den meisten integrierten Klassen ist `Iterator.prototype[Symbol.toStringTag]` aus Gründen der Webkompatibilität beschreibbar.

## Instanzmethoden

- {{jsxref("Iterator.prototype.chunks()")}} {{experimental_inline}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Blöcke aufteilt. Jedes Mal, wenn das Hilfsobjekt iteriert wird, ruft es die angegebene Anzahl an Elementen vom zugrunde liegenden Iterator ab und liefert sie gemeinsam.
- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Gibt `false` zurück, wenn ein Element gefunden wird, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls wird `true` zurückgegeben, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das nur jene Elemente des Iterators liefert, für die die bereitgestellte Callback-Funktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste vom Iterator erzeugte Element zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das jedes Element im ursprünglichen Iterator durch eine Mapping-Funktion verarbeitet und die von der Mapping-Funktion zurückgegebenen Elemente liefert, die in einem anderen Iterator oder iterierbaren Objekt enthalten sind.
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes vom Iterator erzeugte Element aus.
- {{jsxref("Iterator.prototype.includes()")}}
  - : Gibt `true` zurück, wenn ein vom Iterator erzeugtes Element dem angegebenen Wert entspricht. Andernfalls wird `false` zurückgegeben, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden.
- {{jsxref("Iterator.prototype.join()")}}
  - : Gibt einen String zurück, der die Verkettung aller vom Iterator erzeugten Elemente darstellt, getrennt durch Kommas oder einen angegebenen Trennzeichen-String.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das Elemente des Iterators liefert, die jeweils durch eine Mapping-Funktion transformiert wurden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt für jedes vom Iterator erzeugte Element eine benutzerdefinierte „Reducer“-Callback-Funktion aus und übergibt dabei den Rückgabewert aus der Berechnung des vorhergehenden Elements. Das Endergebnis der Ausführung des Reducers über alle Elemente ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Gibt `true` zurück, wenn ein Element gefunden wird, das die bereitgestellte Testfunktion erfüllt. Andernfalls wird `false` zurückgegeben, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die angegebene Anzahl von Elementen dieses Iterators liefert und anschließend beendet wird.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.
- {{jsxref("Iterator.prototype.windows()")}} {{experimental_inline}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das ein gleitendes Fenster von Elementen liefert. Jedes Mal, wenn das Hilfsobjekt iteriert wird, liefert es ein Array, indem es das erste Element aus der vorherigen Iteration entfernt und das nächste Element aus dem ursprünglichen Iterator hinzufügt.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, sofern sie existiert. Dies implementiert das _Disposable-Protokoll_ und ermöglicht die Freigabe bei Verwendung mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}}.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dadurch können Iterator-Objekte auch iterierbar sein.

## Beispiele

### Einen Iterator als iterierbares Objekt verwenden

Alle integrierten Iteratoren sind auch iterierbar, sodass Sie sie in einer `for...of`-Schleife verwenden können:

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
- [es-shims-Polyfill von `Iterator` und zugehörigen Hilfsfunktionen](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
