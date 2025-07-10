---
title: Array.prototype.slice()
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`slice()`** Methode von {{jsxref("Array")}} Instanzen gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} eines Teils eines Arrays in ein neues Array-Objekt zurück, das von `start` bis `end` ausgewählt wurde (`end` nicht eingeschlossen), wobei `start` und `end` den Index der Elemente in diesem Array darstellen. Das Originalarray wird nicht verändert.

{{InteractiveExample("JavaScript Demo: Array.prototype.slice()", "taller")}}

```js interactive-example
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Nullbasierter Index, ab dem die Extraktion beginnt, [konvertiert in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird ein leeres Array zurückgegeben.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion endet, [konvertiert in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen oder `undefined` ist, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird ein leeres Array zurückgegeben.

### Rückgabewert

Ein neues Array, das die extrahierten Elemente enthält.

## Beschreibung

Die `slice()` Methode ist eine [Kopiermethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert nicht `this`, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die einige der gleichen Elemente wie die des Originalarrays enthält.

Die `slice()` Methode bewahrt leere Slots. Wenn der geschnittene Teil [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist das zurückgegebene Array ebenfalls spärlich.

Die `slice()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length`-Eigenschaft und integer-basierte Eigenschaften hat.

## Beispiele

### Einen Teil eines vorhandenen Arrays zurückgeben

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

In diesem Beispiel extrahiert `slice(1, 3)` Elemente vom Index `1` bis, aber nicht einschließlich, Index `3`, was in einem neuen Array `['Orange', 'Lemon']` resultiert.

### Den Endparameter weglassen

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(2)` Elemente vom Index `2` bis zum Ende des Arrays.

### Verwenden von negativen Indizes

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(-2)` die letzten zwei Elemente des Arrays. Bei Verwendung eines negativen Index mit der `slice` Methode werden negative Indizes vom Ende des Arrays gezählt, beginnend bei `-1` für das letzte Element, `-2` für das vorletzte Element usw. Der negative Index `-2` selbst wird eingeschlossen, da er der Startpunkt der Extraktion ist.

```plain
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Verwenden eines positiven Startindex und eines negativen Endindex

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -1);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
```

In diesem Beispiel beginnt `slice(1, -1)` mit der Extraktion ab Index `1` und geht bis, aber nicht einschließlich, zum Element bei Index `-1` (welches das letzte Element ist). Dies führt zu einem neuen Array mit `['Banana', 'Orange', 'Mango']`. Die `slice` Methode schließt immer das Element am angegebenen Endindex aus, unabhängig davon, ob es positiv oder negativ ist.

```plain
read from start --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Verwenden von slice mit Arrays von Objekten

Im folgenden Beispiel erstellt `slice` ein neues Array, `newCar`, aus `myCar`. Beide enthalten einen Verweis auf das Objekt `myHonda`. Wenn die Farbe von `myHonda` zu Lila geändert wird, spiegeln beide Arrays die Änderung wider.

```js
// Using slice, create newCar from myCar.
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
```

Dieses Skript schreibt:

```plain
myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [ { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

### Aufrufen von slice() auf Nicht-Array-Objekten

Die `slice()` Methode liest die `length` Eigenschaft von `this`. Sie liest dann die integer-basierten Eigenschaften von `start` bis `end` und definiert sie in einem neu erstellten Array.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignored by slice() since length is 3
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]
```

### Verwenden von slice() zum Konvertieren von array-ähnlichen Objekten in Arrays

Die `slice()` Methode wird oft mit {{jsxref("Function/bind", "bind()")}} und {{jsxref("Function/call", "call()")}} verwendet, um eine Hilfsmethode zu erstellen, die ein array-ähnliches Objekt in ein Array konvertiert.

```js
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### Verwendung von slice() auf spärlichen Arrays

Das von `slice()` zurückgegebene Array kann spärlich sein, wenn die Quelle spärlich ist.

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.slice` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.slice`](https://www.npmjs.com/package/array.prototype.slice)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
