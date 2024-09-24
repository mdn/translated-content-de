---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Array.from()`** erstellt eine neue, flach kopierte `Array`-Instanz aus einem [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

{{EmbedInteractiveExample("pages/js/array-from.html", "shorter")}}

## Syntax

```js-nolint
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

### Parameter

- `arrayLike`
  - : Ein iterierbares oder array-ähnliches Objekt, das in ein Array konvertiert werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die für jedes Element des Arrays aufgerufen wird. Falls bereitgestellt, wird jeder Wert, der zum Array hinzugefügt werden soll, zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird stattdessen zum Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

`Array.from()` ermöglicht Ihnen `Array`s zu erstellen aus:

- [iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (Objekten wie {{jsxref("Map")}} und {{jsxref("Set")}}); oder, falls das Objekt nicht iterierbar ist,
- array-ähnlichen Objekten (Objekten mit einer `length`-Eigenschaft und indizierten Elementen).

Um ein gewöhnliches Objekt, das nicht iterierbar oder array-ähnlich ist, in ein Array zu konvertieren (indem seine Eigenschaften, Werte oder beides aufgezählt werden), verwenden Sie {{jsxref("Object.keys()")}}, {{jsxref("Object.values()")}}, oder {{jsxref("Object.entries()")}}. Um ein [asynchrones iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) in ein Array zu konvertieren, verwenden Sie {{jsxref("Array.fromAsync()")}}.

`Array.from()` erzeugt nie ein spärliches Array. Wenn dem `arrayLike`-Objekt einige Indexeigenschaften fehlen, werden sie in dem neuen Array zu `undefined`.

`Array.from()` hat einen optionalen Parameter `mapFn`, der es ermöglicht, eine Funktion auf jedes zu erstellende Array-Element auszuführen, ähnlich wie {{jsxref("Array/map", "map()")}}. Klarer gesagt, `Array.from(obj, mapFn, thisArg)` hat dasselbe Ergebnis wie `Array.from(obj).map(mapFn, thisArg)`, mit dem Unterschied, dass kein Zwischen-Array erstellt wird und `mapFn` nur zwei Argumente erhält (`element`, `index`) ohne das ganze Array, da das Array noch in Erstellung ist.

> [!NOTE]
> Dieses Verhalten ist besonders wichtig für [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays), da das Zwischen-Array notwendigerweise Werte enthalten würde, die auf den entsprechenden Typ gekürzt sind. `Array.from()` ist implementiert, um dieselbe Signatur wie {{jsxref("TypedArray.from()")}} zu haben.

Die `Array.from()`-Methode ist eine generische Fabrikmethode. Beispielsweise, wenn eine Unterklasse von `Array` die `from()`-Methode erbt, wird die geerbte `from()`-Methode neue Instanzen der Unterklasse anstelle von `Array`-Instanzen zurückgeben. Die `this`-Wert kann tatsächlich jede Konstruktorfunktion sein, die ein einziges Argument akzeptiert, das die Länge des neuen Arrays darstellt. Wenn ein iterierbares Objekt als `arrayLike` übergeben wird, wird der Konstruktor mit keinen Argumenten aufgerufen; wenn ein array-ähnliches Objekt übergeben wird, wird der Konstruktor mit der [normalisierten Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) des array-ähnlichen Objekts aufgerufen. Die endgültige `length` wird erneut gesetzt, wenn die Iteration abgeschlossen ist. Wenn der `this`-Wert keine Konstruktorfunktion ist, wird stattdessen der einfache `Array`-Konstruktor verwendet.

## Beispiele

### Array von einem String

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### Array von einem Set

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Array von einer Map

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### Array von einer NodeList

```js
// Ein Array basierend auf einer Eigenschaft von DOM-Elementen erstellen
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```

### Array von einem array-ähnlichen Objekt (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Verwendung von Pfeilfunktionen und Array.from()

```js
// Eine Pfeilfunktion als Map-Funktion verwenden,
// um die Elemente zu manipulieren
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Eine Sequenz von Zahlen generieren
// Da das Array mit `undefined` an jeder Position initialisiert wird,
// ist der Wert von `v` unten `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### Sequenzgenerator (Bereich)

```js
// Sequenzgeneratorfunktion (allgemein als "range" bezeichnet, z.B. in Clojure, PHP, etc.)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Nummernsequenz 0..4 generieren
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Nummernsequenz 1..10 mit Schrittweite 2 generieren
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Das Alphabet generieren, indem Array.from verwendet wird, 
// in dem davon Gebrauch gemacht wird, dass es als Sequenz geordnet ist
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### Aufruf von from() bei Nicht-Array-Konstruktoren

Die `from()`-Methode kann auf jeder Konstruktorfunktion aufgerufen werden, die ein einzelnes Argument akzeptiert, das die Länge des neuen Arrays darstellt.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

// Iterierbar
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray called with length undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// Array-ähnlich
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// NotArray called with length 1
// NotArray { '0': 'foo', length: 1 }
```

Wenn der `this`-Wert kein Konstruktor ist, wird ein einfaches `Array`-Objekt zurückgegeben.

```js
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.from` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.fromAsync()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
