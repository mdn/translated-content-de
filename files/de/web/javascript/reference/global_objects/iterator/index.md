---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht: Es stellt eine `next()`-Methode bereit, die ein Iterator-Ergebnisobjekt zurückgibt. Alle integrierten Iteratoren erben von der `Iterator`-Klasse. Die `Iterator`-Klasse stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt. Dadurch ist der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Außerdem stellt die Klasse einige Hilfsmethoden für die Arbeit mit Iteratoren bereit.

## Beschreibung

Die folgenden Iteratoren sind in JavaScript integriert:

- Der _Array Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp String Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments Iterator_, der von der Methode [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator) des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts zurückgegeben wird, das [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) zurückgibt.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Auch Web-APIs können Iteratoren zurückgeben. Einige verwenden die grundlegenden JavaScript-Iteratoren wieder, während andere eigene Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen _Array Iterator_ zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte aus Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen eigenen Iterator-Typ wie _Headers Iterator_ zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte aus Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen eigenen Iterator-Typ wie _FontFaceSet Iterator_ zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere ältere Schnittstellen tragen zwar entsprechende Namen, entsprechen aber weder dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) noch dem [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototypobjekt, das die für den jeweiligen Iterator verwendete `next()`-Methode definiert. Beispielsweise erben alle String-Iterator-Objekte von einem verborgenen Objekt namens `StringIteratorPrototype`, dessen `next()`-Methode den String nach Codepunkten durchläuft. `StringIteratorPrototype` besitzt außerdem eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Entsprechend haben auch die anderen Iterator-Prototypen eigene `[Symbol.toStringTag]`-Werte, die den oben genannten Namen entsprechen.

Alle diese Prototypobjekte erben von `Iterator.prototype`. Dieser Prototyp stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt. Dadurch ist der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind Hilfsmethoden für _Iteratoren_, nicht für _Iterables_: Damit ein Objekt iterierbar ist, muss es lediglich eine `[Symbol.iterator]()`-Methode besitzen. Es gibt keinen gemeinsamen Prototyp, auf dem diese Methoden installiert werden könnten.

Die `Iterator`-Klasse selbst stellt einige Hilfsmethoden für die Arbeit mit Iteratoren bereit. Beispielsweise könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dabei wird der von {{jsxref("Map.prototype.values()")}} zurückgegebene Iterator zuerst in ein Array umgewandelt. Anschließend wird mit der Methode {{jsxref("Array.prototype.reduce()")}} die Summe berechnet. Dadurch wird jedoch ein temporäres Array erstellt und das Array zweimal durchlaufen. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann insbesondere hinsichtlich des Speicherverbrauchs effizienter sein, da sie den Iterator nur einmal durchläuft, ohne Zwischenwerte zu speichern. Iterator-Hilfsmethoden sind erforderlich, um mit unendlichen Iteratoren zu arbeiten:

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

Sie können `seq` nicht in ein Array umwandeln, da es unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden. Sie durchläuft `seq` nur so weit, wie es nötig ist, um den ersten Wert zu finden, der die Bedingung erfüllt.

Viele Iterator-Methoden haben Entsprechungen bei Array-Methoden, zum Beispiel:

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

Die Kombination aus {{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} entspricht in gewisser Weise {{jsxref("Array.prototype.slice()")}}.

### Iterator-Hilfsobjekte

> [!NOTE]
> _Iterator-Hilfsobjekte_ und _Iterator-Hilfsmethoden_ sind zwei unterschiedliche Konzepte. Ein Iterator-Hilfsobjekt lässt sich zur Laufzeit erkennen, während „Iterator-Hilfsmethode“ lediglich eine Bezeichnung für eine Gruppe von Methoden zum besseren Verständnis ist. _Iterator Helper_ kann sich je nach Kontext auf das Objekt oder die Methode beziehen.

Von den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} jeweils ein neues _Iterator Helper_-Objekt zurück. Dieses ist ebenfalls eine `Iterator`-Instanz, sodass sich die Hilfsmethoden verketten lassen. Alle Iterator-Hilfsobjekte erben von einem gemeinsamen Prototypobjekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Das Iterator-Hilfsobjekt nutzt dieselbe Datenquelle wie der zugrunde liegende Iterator. Wenn das Hilfsobjekt durchlaufen wird, wird daher auch der zugrunde liegende Iterator durchlaufen. Es gibt keine Möglichkeit, einen Iterator zu „verzweigen“, um ihn mehrfach durchlaufen zu können.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Vollwertige Iteratoren

Es gibt zwei Arten von „Iteratoren“: Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (wofür mindestens eine `next()`-Methode vorhanden sein muss), und Objekte, die von der `Iterator`-Klasse erben und damit über die Hilfsmethoden verfügen. Die eine Eigenschaft folgt nicht aus der anderen: Objekte, die von `Iterator` erben, sind nicht automatisch Iteratoren, da die `Iterator`-Klasse keine `next()`-Methode definiert. Das Objekt muss daher selbst eine `next()`-Methode definieren. Ein _vollwertiger Iterator_ entspricht sowohl dem Iterator-Protokoll als auch der Vererbung von `Iterator`. Der meiste Code erwartet, dass Iteratoren vollwertige Iteratoren sind und dass Iterables vollwertige Iteratoren zurückgeben. Um vollwertige Iteratoren zu erstellen, definieren Sie eine Klasse, die {{jsxref("Iterator/Iterator", "Iterator")}} [erweitert](/de/docs/Web/JavaScript/Reference/Classes/extends), oder verwenden Sie die Methode {{jsxref("Iterator.from()")}}.

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
  - : Dafür vorgesehen, von anderen Klassen [erweitert](/de/docs/Web/JavaScript/Reference/Classes/extends) zu werden, die Iteratoren erstellen. Bei direkter Instanziierung wird ein Fehler ausgelöst.

## Statische Methoden

- {{jsxref("Iterator.concat()")}}
  - : Erstellt aus einer Liste iterierbarer Objekte ein neues `Iterator`-Objekt. Der neue Iterator gibt die Werte der übergebenen Iterables nacheinander aus.
- {{jsxref("Iterator.from()")}}
  - : Erstellt aus einem Iterator oder einem iterierbaren Objekt ein neues `Iterator`-Objekt.
- {{jsxref("Iterator.zip()")}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten zusammenfasst. Es gibt Arrays aus, die jeweils die Elemente an derselben Position enthalten.
- {{jsxref("Iterator.zipKeyed()")}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten zusammenfasst. Es gibt Objekte aus, die jeweils die Elemente an derselben Position enthalten und deren Schlüssel durch die Eingabe festgelegt werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Iterator`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Iterator/Iterator", "Iterator")}}.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Iterator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

    > [!NOTE]
    > Anders als `[Symbol.toStringTag]` bei den meisten integrierten Klassen ist `Iterator.prototype[Symbol.toStringTag]` aus Gründen der Webkompatibilität beschreibbar.

## Instanzmethoden

- {{jsxref("Iterator.prototype.chunks()")}} {{experimental_inline}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Blöcke aufteilt. Bei jedem Iterationsschritt entnimmt das Hilfsobjekt dem zugrunde liegenden Iterator die angegebene Anzahl von Elementen und gibt sie gemeinsam aus.
- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Gibt `false` zurück, wenn ein Element gefunden wird, das die angegebene Prüffunktion nicht erfüllt. Andernfalls gibt die Methode `true` zurück, wenn der Iterator erschöpft ist, ohne dass ein solches Element gefunden wurde.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das nur die Elemente des Iterators ausgibt, für die die angegebene Callback-Funktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste vom Iterator ausgegebene Element zurück, das die angegebene Prüffunktion erfüllt. Wenn kein Wert die Prüffunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das jedes Element des ursprünglichen Iterators an eine Mapping-Funktion übergibt und die von ihr zurückgegebenen Elemente ausgibt. Diese befinden sich in einem anderen Iterator oder Iterable.
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine angegebene Funktion einmal für jedes vom Iterator ausgegebene Element aus.
- {{jsxref("Iterator.prototype.includes()")}}
  - : Gibt `true` zurück, wenn ein vom Iterator ausgegebenes Element dem angegebenen Wert entspricht. Andernfalls gibt die Methode `false` zurück, wenn der Iterator erschöpft ist, ohne dass ein solches Element gefunden wurde.
- {{jsxref("Iterator.prototype.join()")}}
  - : Gibt einen String zurück, der aus der Verkettung aller vom Iterator ausgegebenen Elemente besteht. Die Elemente werden durch Kommas oder einen angegebenen Trennstring getrennt.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die Elemente des Iterators ausgibt, nachdem sie jeweils durch eine Mapping-Funktion transformiert wurden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt für jedes vom Iterator ausgegebene Element eine vom Benutzer bereitgestellte „Reducer“-Callback-Funktion aus und übergibt dabei den Rückgabewert der Berechnung für das vorherige Element. Das Endergebnis der Anwendung des Reducers auf alle Elemente ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Gibt `true` zurück, wenn ein Element gefunden wird, das die angegebene Prüffunktion erfüllt. Andernfalls gibt die Methode `false` zurück, wenn der Iterator erschöpft ist, ohne dass ein solches Element gefunden wurde.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die angegebene Anzahl von Elementen dieses Iterators ausgibt und dann endet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator ausgegebenen Elementen gefüllt ist.
- {{jsxref("Iterator.prototype.windows()")}} {{experimental_inline}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das ein gleitendes Fenster von Elementen ausgibt. Bei jedem Iterationsschritt gibt das Hilfsobjekt ein Array aus, bei dem das erste Element des vorherigen Schritts entfernt und das nächste Element des ursprünglichen Iterators hinzugefügt wurde.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, sofern sie vorhanden ist. Dadurch wird das _Disposable-Protokoll_ implementiert und eine Bereinigung ermöglicht, wenn der Iterator mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} verwendet wird.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dadurch sind Iterator-Objekte auch iterierbar.

## Beispiele

### Einen Iterator als Iterable verwenden

Alle integrierten Iteratoren sind auch iterierbar. Sie können sie daher in einer `for...of`-Schleife verwenden:

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

- [Polyfill für `Iterator` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [es-shims-Polyfill für `Iterator` und zugehörige Hilfsmethoden](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
