---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: 029012efe3d242fa5c1105e6917800cc80fca0d4
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
  - : Ein iterierbares oder array-ähnliches Objekt, das in ein Array umgewandelt werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Arrays angewendet wird. Wird diese Funktion bereitgestellt, wird jeder Wert, der zum Array hinzugefügt werden soll, zuerst durch diese Funktion gefiltert, und der Rückgabewert der `mapFn` wird stattdessen dem Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell im Array verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Array.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

`Array.from()` ermöglicht es Ihnen, `Array`s aus:

- [iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (Objekte wie {{jsxref("Map")}} und {{jsxref("Set")}}) zu erstellen; oder, wenn das Objekt nicht iterierbar ist,
- array-ähnlichen Objekten (Objekte mit einer `length` Eigenschaft und indizierten Elementen).

Um ein gewöhnliches Objekt, das nicht iterierbar oder array-ähnlich ist, in ein Array umzuwandeln (indem seine Eigenschaften, Werte oder beides aufgezählt werden), verwenden Sie {{jsxref("Object.keys()")}}, {{jsxref("Object.values()")}} oder {{jsxref("Object.entries()")}}. Um ein [asynchrones iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) Objekt in ein Array umzuwandeln, verwenden Sie {{jsxref("Array.fromAsync()")}}.

`Array.from()` erstellt niemals ein lückenhaftes Array. Wenn dem `arrayLike`-Objekt einige Indizeigenschaften fehlen, werden diese im neuen Array zu `undefined`.

`Array.from()` hat einen optionalen Parameter `mapFn`, der es Ihnen ermöglicht, eine Funktion auf jedes Element des erstellten Arrays anzuwenden, ähnlich wie {{jsxref("Array/map", "map()")}}. Genauer gesagt hat `Array.from(obj, mapFn, thisArg)` dasselbe Ergebnis wie `Array.from(obj).map(mapFn, thisArg)`, außer dass es kein Zwischenarray erstellt, und `mapFn` nur zwei Argumente erhält (`element`, `index`) ohne das gesamte Array, da das Array noch im Aufbau ist.

> [!NOTE]
> Dieses Verhalten ist für [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) von größerer Bedeutung, da das Zwischenarray notwendigerweise Werte abgeschnitten hätte, um in den entsprechenden Typ zu passen. `Array.from()` ist so implementiert, dass es dieselbe Signatur wie {{jsxref("TypedArray.from()")}} hat.

Die Methode `Array.from()` ist eine generische Fabrikmethode. Zum Beispiel, wenn eine Unterklasse von `Array` die Methode `from()` erbt, wird die geerbte `from()`-Methode neue Instanzen der Unterklasse statt `Array`-Instanzen zurückgeben. Tatsächlich kann der `this`-Wert jede Konstruktorfunktion sein, die ein einziges Argument als Länge des neuen Arrays akzeptiert. Wenn ein iterierbares als `arrayLike` übergeben wird, wird der Konstruktor ohne Argumente aufgerufen; wenn ein array-ähnliches Objekt übergeben wird, wird der Konstruktor mit der [normalisierten Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) des array-ähnlichen Objekts aufgerufen. Die endgültige `length` wird erneut festgelegt, wenn die Iteration abgeschlossen ist. Wenn der `this`-Wert keine Konstruktorfunktion ist, wird der einfache `Array`-Konstruktor stattdessen verwendet.

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

### Nutzung von Pfeilfunktionen und Array.from()

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
// Sequence generator function (commonly referred to as "range", e.g. Python, Clojure, etc.)
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

// Generate numbers from 0 (inclusive) to 4 (exclusive) with step 1
range(0, 5, 1);
// [0, 1, 2, 3, 4]

// Generate numbers from 1 (inclusive) to 10 (exclusive) with step 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet making use of it being ordered as a sequence
range("A".charCodeAt(0), "Z".charCodeAt(0) + 1, 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### Aufruf von from() auf Nicht-Array-Konstruktoren

Die `from()`-Methode kann auf jede Konstruktorfunktion aufgerufen werden, die ein einziges Argument für die Länge des neuen Arrays akzeptiert.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.fromAsync()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
