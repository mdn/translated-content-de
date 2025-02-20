---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Array.from()`** statische Methode erstellt eine neue, flach kopierte `Array`-Instanz aus einem [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

{{InteractiveExample("JavaScript Demo: Array.from()", "shorter")}}

```js interactive-example
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
```

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
  - : Eine Funktion, die auf jedes Element des Arrays angewendet wird. Wenn angegeben, wird jeder Wert, der dem Array hinzugefügt werden soll, zuerst durch diese Funktion übergeben, und der Rückgabewert von `mapFn` wird stattdessen dem Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

`Array.from()` ermöglicht es Ihnen, `Array`s aus folgenden Datentypen zu erstellen:

- [Iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (Objekte wie {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- array-ähnliche Objekte (Objekte mit einer `length`-Eigenschaft und indizierten Elementen).

Um ein gewöhnliches Objekt, das weder iterierbar noch array-ähnlich ist, in ein Array zu konvertieren (indem seine Eigenschaften, Werte oder beides aufgezählt werden), verwenden Sie {{jsxref("Object.keys()")}}, {{jsxref("Object.values()")}} oder {{jsxref("Object.entries()")}}. Um ein [asynchron iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) in ein Array zu konvertieren, verwenden Sie {{jsxref("Array.fromAsync()")}}.

`Array.from()` erstellt niemals ein spärliches Array. Wenn dem `arrayLike`-Objekt einige Indexeigenschaften fehlen, werden diese im neuen Array zu `undefined`.

`Array.from()` hat einen optionalen Parameter `mapFn`, der es Ihnen ermöglicht, eine Funktion auf jedes Element des erstellten Arrays anzuwenden, ähnlich wie {{jsxref("Array/map", "map()")}}. Genauer gesagt, hat `Array.from(obj, mapFn, thisArg)` das gleiche Ergebnis wie `Array.from(obj).map(mapFn, thisArg)`, außer dass es kein Zwischen-Array erstellt, und `mapFn` nur zwei Argumente erhält (`element`, `index`), da das Array noch erstellt wird.

> [!NOTE]
> Dieses Verhalten ist besonders wichtig für [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays), da das Zwischen-Array notwendigerweise Werte abschneiden müsste, um in den entsprechenden Typ zu passen. `Array.from()` ist so implementiert, dass es die gleiche Signatur wie {{jsxref("TypedArray.from()")}} hat.

Die `Array.from()`-Methode ist eine generische Fabrikmethode. Wenn zum Beispiel eine Unterklasse von `Array` die `from()`-Methode erbt, gibt die geerbte `from()`-Methode neue Instanzen der Unterklasse statt der `Array`-Instanzen zurück. Tatsächlich kann der `this`-Wert jede Konstruktorfunktion sein, die ein einziges Argument akzeptiert, das die Länge des neuen Arrays darstellt. Wenn ein iterierbares Objekt als `arrayLike` übergeben wird, wird der Konstruktor ohne Argumente aufgerufen. Wenn ein array-ähnliches Objekt übergeben wird, wird der Konstruktor mit der [normalisierten Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) des array-ähnlichen Objekts aufgerufen. Die endgültige `length`-Eigenschaft wird erneut gesetzt, wenn die Iteration abgeschlossen ist. Wenn der `this`-Wert keine Konstruktorfunktion ist, wird stattdessen der einfache `Array`-Konstruktor verwendet.

## Beispiele

### Array aus einem String

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### Array aus einem Set

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Array aus einer Map

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

### Array aus einer NodeList

```js
// Create an array based on a property of DOM Elements
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```

### Array aus einem array-ähnlichen Objekt (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Verwendung von Arrow-Funktionen und Array.from()

```js
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### Sequenzgenerator (Bereich)

```js
// Sequence generator function (commonly referred to as "range", cf. Python, Clojure, etc.)
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

// Generate a sequence of numbers from 0 (inclusive) to 5 (exclusive), incrementing by 1
range(0, 5, 1);
// [0, 1, 2, 3, 4]

// Generate a sequence of numbers from 1 (inclusive) to 10 (exclusive), incrementing by 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the Latin alphabet making use of it being ordered as a sequence
range("A".charCodeAt(0), "Z".charCodeAt(0) + 1, 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### Aufruf von from() für Nicht-Array-Konstruktoren

Die `from()`-Methode kann für jede Konstruktorfunktion aufgerufen werden, die ein einziges Argument akzeptiert, das die Länge des neuen Arrays darstellt.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

// Iterable
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray called with length undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// Array-like
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
