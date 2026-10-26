---
title: Array.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Array.from()`** erstellt aus einem [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [arrayähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt eine neue, flach kopierte `Array`-Instanz.

{{InteractiveExample("JavaScript Demo: Array.from()", "shorter")}}

```js interactive-example
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
```

## Syntax

```js-nolint
Array.from(items)
Array.from(items, mapFn)
Array.from(items, mapFn, thisArg)
```

### Parameter

- `items`
  - : Ein iterierbares oder arrayähnliches Objekt, das in ein Array umgewandelt werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die für jedes Element des Arrays aufgerufen wird. Falls angegeben, wird jeder Wert vor dem Hinzufügen zum Array an diese Funktion übergeben. Statt des ursprünglichen Werts wird der Rückgabewert von `mapFn` zum Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Der Wert, der bei der Ausführung von `mapFn` als `this` verwendet wird.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Mit `Array.from()` können Sie `Array`-Instanzen aus Folgendem erstellen:

- [iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (beispielsweise {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- arrayähnlichen Objekten (Objekten mit einer `length`-Eigenschaft und indizierten Elementen).

Um ein gewöhnliches Objekt, das weder iterierbar noch arrayähnlich ist, durch Auflisten seiner Eigenschaftsschlüssel, Werte oder beider in ein Array umzuwandeln, verwenden Sie {{jsxref("Object.keys()")}}, {{jsxref("Object.values()")}} oder {{jsxref("Object.entries()")}}. Um ein [asynchron iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) in ein Array umzuwandeln, verwenden Sie {{jsxref("Array.fromAsync()")}}.

`Array.from()` erstellt niemals ein Array mit Lücken. Wenn dem `items`-Objekt Eigenschaften für bestimmte Indizes fehlen, erhalten diese im neuen Array den Wert `undefined`.

`Array.from()` hat den optionalen Parameter `mapFn`, mit dem Sie für jedes Element des zu erstellenden Arrays eine Funktion ausführen können, ähnlich wie bei {{jsxref("Array/map", "map()")}}. Genauer gesagt liefert `Array.from(obj, mapFn, thisArg)` dasselbe Ergebnis wie `Array.from(obj).map(mapFn, thisArg)`. Allerdings wird kein Zwischenarray erstellt, und `mapFn` erhält nur zwei Argumente (`element`, `index`), nicht das gesamte Array, da dieses noch erstellt wird.

> [!NOTE]
> Dieses Verhalten ist für [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) besonders wichtig, da die Werte im Zwischenarray zwangsläufig auf den jeweiligen Typ zugeschnitten würden. `Array.from()` hat dieselbe Signatur wie {{jsxref("TypedArray.from()")}}.

Die Methode `Array.from()` ist eine generische Factory-Methode. Wenn beispielsweise eine Unterklasse von `Array` die Methode `from()` erbt, gibt die geerbte Methode `from()` neue Instanzen der Unterklasse statt `Array`-Instanzen zurück. Tatsächlich kann der `this`-Wert jede Konstruktorfunktion sein, die ein einzelnes Argument für die Länge des neuen Arrays akzeptiert. Wird ein iterierbares Objekt als `items` übergeben, wird der Konstruktor ohne Argumente aufgerufen; bei einem arrayähnlichen Objekt wird der Konstruktor mit dessen [normalisierter Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) aufgerufen. Nach Abschluss der Iteration wird die endgültige `length` erneut festgelegt. Ist der `this`-Wert keine Konstruktorfunktion, wird stattdessen der gewöhnliche `Array`-Konstruktor verwendet.

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

### Array aus einem arrayähnlichen Objekt (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Pfeilfunktionen mit Array.from() verwenden

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

### from() auf Konstruktoren aufrufen, die keine Array-Konstruktoren sind

Die Methode `from()` kann auf jeder Konstruktorfunktion aufgerufen werden, die ein einzelnes Argument für die Länge des neuen Arrays akzeptiert.

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

Wenn der `this`-Wert kein Konstruktor ist, wird ein gewöhnliches `Array`-Objekt zurückgegeben.

```js
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.from` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.from` von es-shims](https://www.npmjs.com/package/array.from)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.fromAsync()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
