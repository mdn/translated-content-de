---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: 160cbdef0fae0bd8361757d46bf916fdfbc9fd97
---

Ein **`Iterator`**-Objekt ist ein Objekt, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht: Es stellt eine `next()`-Methode bereit, die ein Iterator-Ergebnisobjekt zurückgibt. Alle integrierten Iteratoren erben von der Klasse `Iterator`. Die Klasse `Iterator` stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt. Dadurch ist der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Außerdem bietet die Klasse einige Hilfsmethoden für die Arbeit mit Iteratoren.

## Beschreibung

Die folgenden Objekte sind allesamt integrierte JavaScript-Iteratoren:

- Der _Array Iterator_, der von {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) und [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) zurückgegeben wird.
- Der _String Iterator_, der von [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) zurückgegeben wird.
- Der _Map Iterator_, der von {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}} und [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) zurückgegeben wird.
- Der _Set Iterator_, der von {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}} und [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) zurückgegeben wird.
- Der _RegExp String Iterator_, der von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) und {{jsxref("String.prototype.matchAll()")}} zurückgegeben wird.
- Das {{jsxref("Generator")}}-Objekt, das von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben wird.
- Der _Segments Iterator_, der von der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)-Methode des [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekts zurückgegeben wird, das [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) liefert.
- Der _Iterator Helper_, der von Iterator-Hilfsmethoden wie {{jsxref("Iterator.prototype.filter()")}} und {{jsxref("Iterator.prototype.map()")}} zurückgegeben wird.

Auch Web-APIs können Iteratoren zurückgeben. Einige verwenden JavaScript-Iteratoren wieder, während andere eigene Iteratoren definieren. Zum Beispiel:

- [Array-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) Objekte wie [`NodeList`](/de/docs/Web/API/NodeList) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen _Array Iterator_ zurück.
- [Map-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) Objekte aus Web-APIs wie [`Headers`](/de/docs/Web/API/Headers) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen eigenen Iteratortyp wie den _Headers Iterator_ zurück.
- [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) Objekte aus Web-APIs wie [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geben über ihre jeweiligen Methoden `keys()`, `values()`, `entries()` und `[Symbol.iterator]()` einen eigenen Iteratortyp wie den _FontFaceSet Iterator_ zurück.

> [!NOTE]
> [`NodeIterator`](/de/docs/Web/API/NodeIterator) und andere ältere Schnittstellen tragen zwar entsprechende Namen, entsprechen aber weder dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) noch dem [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Jeder dieser Iteratoren hat ein eigenes Prototypobjekt, das die vom jeweiligen Iterator verwendete `next()`-Methode definiert. Beispielsweise erben alle String-Iterator-Objekte von einem verborgenen Objekt namens `StringIteratorPrototype`. Dessen `next()`-Methode iteriert über den String nach Codepunkten. `StringIteratorPrototype` besitzt außerdem eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft, deren Anfangswert der String `"String Iterator"` ist. Diese Eigenschaft wird von {{jsxref("Object.prototype.toString()")}} verwendet. Auch die anderen Iterator-Prototypen besitzen jeweils eigene `[Symbol.toStringTag]`-Werte, die den oben genannten Namen entsprechen.

Alle diese Prototypobjekte erben von `Iterator.prototype`. Dieses stellt eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode bereit, die das Iterator-Objekt selbst zurückgibt. Dadurch ist der Iterator auch [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

### Iterator-Hilfsmethoden

> [!NOTE]
> Diese Methoden sind Hilfsmethoden für _Iteratoren_, nicht für _iterierbare Objekte_. Damit ein Objekt iterierbar ist, muss es lediglich eine `[Symbol.iterator]()`-Methode besitzen. Es gibt keinen gemeinsamen Prototyp, auf dem sich diese Hilfsmethoden bereitstellen ließen.

Die Klasse `Iterator` selbst stellt einige Hilfsmethoden für die Arbeit mit Iteratoren bereit. Beispielsweise könnten Sie versucht sein, Folgendes zu tun:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

Dabei wird der von {{jsxref("Map.prototype.values()")}} zurückgegebene Iterator zunächst in ein Array umgewandelt. Anschließend wird mit der Methode {{jsxref("Array.prototype.reduce()")}} die Summe berechnet. Dadurch entsteht jedoch ein Zwischenarray, und die Werte werden zweimal durchlaufen. Stattdessen können Sie die `reduce()`-Methode des Iterators selbst verwenden:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

Diese Methode kann insbesondere hinsichtlich des Speicherbedarfs effizienter sein, weil sie den Iterator nur einmal durchläuft und keine Zwischenwerte speichert. Für die Arbeit mit unendlichen Iteratoren sind Iterator-Hilfsmethoden erforderlich:

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

Sie können `seq` nicht in ein Array umwandeln, da der Iterator unendlich ist. Stattdessen können Sie die `find()`-Methode des Iterators selbst verwenden. Sie durchläuft `seq` nur so weit, wie es nötig ist, um den ersten Wert zu finden, der die Bedingung erfüllt.

Viele Iterator-Methoden entsprechen sinngemäß Array-Methoden, zum Beispiel:

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

{{jsxref("Iterator.prototype.drop()")}} und {{jsxref("Iterator.prototype.take()")}} entsprechen zusammen in gewisser Weise {{jsxref("Array.prototype.slice()")}}.

### Iterator-Hilfsobjekte

> [!NOTE]
> _Iterator-Hilfsobjekte_ und _Iterator-Hilfsmethoden_ sind zwei verschiedene Konzepte. Ein Iterator-Hilfsobjekt lässt sich zur Laufzeit erkennen, während „Iterator-Hilfsmethode“ lediglich eine Bezeichnung für eine Gruppe von Methoden ist. Je nach Kontext kann sich _Iterator Helper_ auf das Objekt oder die Methode beziehen.

Von den Iterator-Hilfsmethoden geben {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}} und {{jsxref("Iterator/take", "take()")}} ein neues _Iterator Helper_-Objekt zurück. Dieses Hilfsobjekt ist ebenfalls eine `Iterator`-Instanz, sodass sich die Hilfsmethoden verketten lassen. Alle Iterator-Hilfsobjekte erben von einem gemeinsamen Prototypobjekt, das das Iterator-Protokoll implementiert:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf, wendet die Hilfsmethode auf das Ergebnis an und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.

Das Iterator-Hilfsobjekt verwendet dieselbe Datenquelle wie der zugrunde liegende Iterator. Wird das Hilfsobjekt durchlaufen, wird daher auch der zugrunde liegende Iterator durchlaufen. Es gibt keine Möglichkeit, einen Iterator zu „verzweigen“, um ihn mehrfach durchlaufen zu können.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Vollwertige Iteratoren

Es gibt zwei Arten von „Iteratoren“: Objekte, die dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entsprechen (wofür mindestens eine `next()`-Methode erforderlich ist), und Objekte, die von der Klasse `Iterator` erben und damit über die Hilfsmethoden verfügen. Das eine bedingt nicht das andere: Objekte, die von `Iterator` erben, werden nicht automatisch zu Iteratoren, da die Klasse `Iterator` keine `next()`-Methode definiert. Das Objekt muss selbst eine `next()`-Methode definieren. Ein _vollwertiger Iterator_ entspricht sowohl dem Iterator-Protokoll als auch dem Erbschaftsmodell von `Iterator`. Der meiste Code erwartet vollwertige Iteratoren und setzt voraus, dass iterierbare Objekte vollwertige Iteratoren zurückgeben. Um einen vollwertigen Iterator zu erstellen, definieren Sie eine Klasse, die {{jsxref("Iterator/Iterator", "Iterator")}} [erweitert](/de/docs/Web/JavaScript/Reference/Classes/extends), oder verwenden Sie die Methode {{jsxref("Iterator.from()")}}.

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
  - : Ist dafür vorgesehen, von anderen Klassen [erweitert](/de/docs/Web/JavaScript/Reference/Classes/extends) zu werden, die Iteratoren erzeugen. Wird der Konstruktor direkt aufgerufen, wird ein Fehler ausgelöst.

## Statische Methoden

- {{jsxref("Iterator.concat()")}}
  - : Erstellt aus einer Liste iterierbarer Objekte ein neues `Iterator`-Objekt. Der neue Iterator liefert nacheinander die Werte jedes iterierbaren Eingabeobjekts.
- {{jsxref("Iterator.from()")}}
  - : Erstellt aus einem Iterator oder einem iterierbaren Objekt ein neues `Iterator`-Objekt.
- {{jsxref("Iterator.zip()")}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten zusammenfasst. Es liefert Arrays mit den Elementen an der jeweils gleichen Position.
- {{jsxref("Iterator.zipKeyed()")}}
  - : Erstellt ein neues `Iterator`-Objekt, das Elemente aus mehreren iterierbaren Objekten zusammenfasst. Es liefert Objekte mit den Elementen an der jeweils gleichen Position, wobei die Schlüssel durch die Eingabe vorgegeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Iterator.prototype` definiert und werden von allen `Iterator`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Iterator`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Iterator/Iterator", "Iterator")}}.
- `Iterator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Iterator"`. Diese Eigenschaft wird von {{jsxref("Object.prototype.toString()")}} verwendet.

> [!NOTE]
> Anders als bei den meisten anderen integrierten Klassen sind die Eigenschaften `constructor` und `[Symbol.toStringTag]` von `Iterator.prototype` als Getter-Setter-Paare und nicht als gewöhnliche Dateneigenschaften implementiert. Der Grund dafür ist ein [Problem mit der Web-Kompatibilität](https://github.com/tc39/proposal-iterator-helpers/issues/286). Der Setter verhält sich wie eine nicht beschreibbare Dateneigenschaft (eine Zuweisung schlägt fehl), erlaubt Unterklassen aber, durch Zuweisung eigene entsprechende Eigenschaften anzulegen.

## Instanzmethoden

- {{jsxref("Iterator.prototype.chunks()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Blöcke aufteilt. Bei jedem Iterationsschritt entnimmt das Hilfsobjekt dem zugrunde liegenden Iterator die angegebene Anzahl von Elementen und liefert sie gemeinsam.
- {{jsxref("Iterator.prototype.drop()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.
- {{jsxref("Iterator.prototype.every()")}}
  - : Gibt `false` zurück, wenn ein Element gefunden wird, das die bereitgestellte Prüffunktion nicht erfüllt. Andernfalls wird `true` zurückgegeben, wenn der Iterator vollständig durchlaufen wurde, ohne ein solches Element zu finden.
- {{jsxref("Iterator.prototype.filter()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das nur die Elemente des Iterators liefert, für die die bereitgestellte Callback-Funktion `true` zurückgibt.
- {{jsxref("Iterator.prototype.find()")}}
  - : Gibt das erste vom Iterator gelieferte Element zurück, das die bereitgestellte Prüffunktion erfüllt. Erfüllt kein Wert die Prüffunktion, wird {{jsxref("undefined")}} zurückgegeben.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das jedes Element des ursprünglichen Iterators an eine Abbildungsfunktion übergibt und die von dieser Funktion zurückgegebenen Elemente liefert. Diese Elemente sind in einem anderen Iterator oder iterierbaren Objekt enthalten.
- {{jsxref("Iterator.prototype.forEach()")}}
  - : Führt eine bereitgestellte Funktion für jedes vom Iterator gelieferte Element einmal aus.
- {{jsxref("Iterator.prototype.includes()")}}
  - : Gibt `true` zurück, wenn ein vom Iterator geliefertes Element dem angegebenen Wert entspricht. Andernfalls wird `false` zurückgegeben, wenn der Iterator vollständig durchlaufen wurde, ohne ein solches Element zu finden.
- {{jsxref("Iterator.prototype.join()")}}
  - : Gibt einen String zurück, der durch Verkettung aller vom Iterator gelieferten Elemente entsteht. Die Elemente werden durch Kommas oder einen angegebenen Trennstring getrennt.
- {{jsxref("Iterator.prototype.map()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die Elemente des Iterators liefert, nachdem sie jeweils durch eine Abbildungsfunktion umgewandelt wurden.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : Führt für jedes vom Iterator gelieferte Element eine vom Benutzer bereitgestellte „Reducer“-Callback-Funktion aus und übergibt ihr das Ergebnis der Berechnung für das vorherige Element. Das Endergebnis der Anwendung des Reducers auf alle Elemente ist ein einzelner Wert.
- {{jsxref("Iterator.prototype.some()")}}
  - : Gibt `true` zurück, wenn ein Element gefunden wird, das die bereitgestellte Prüffunktion erfüllt. Andernfalls wird `false` zurückgegeben, wenn der Iterator vollständig durchlaufen wurde, ohne ein solches Element zu finden.
- {{jsxref("Iterator.prototype.take()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das die angegebene Anzahl von Elementen dieses Iterators liefert und danach endet.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : Erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.
- {{jsxref("Iterator.prototype.windows()")}}
  - : Gibt ein neues Iterator-Hilfsobjekt zurück, das ein gleitendes Fenster von Elementen liefert. Bei jedem Iterationsschritt liefert es ein Array, bei dem gegenüber dem vorherigen Schritt das erste Element entfernt und das nächste Element des ursprünglichen Iterators hinzugefügt wurde.
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Ruft die `return()`-Methode von `this` auf, sofern sie vorhanden ist. Dadurch wird das _Disposable-Protokoll_ implementiert und ermöglicht die Freigabe bei Verwendung mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}}.
- [`Iterator.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dadurch können Iterator-Objekte zugleich iterierbar sein.

## Beispiele

### Einen Iterator als iterierbares Objekt verwenden

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
