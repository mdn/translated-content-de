---
title: Array.prototype.slice()
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`slice()`** von {{jsxref("Array")}}-Instanzen gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} eines Teils eines Arrays als neues Array-Objekt zurück. Der Teil reicht von `start` bis `end` (`end` ist nicht eingeschlossen). `start` und `end` bezeichnen Indizes von Elementen im Array. Das ursprüngliche Array wird nicht verändert.

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
  - : Nullbasierter Index, an dem die Extraktion beginnt, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays aus zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` gilt oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length` gilt, wird ein leeres Array zurückgegeben.
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem die Extraktion endet, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert Elemente bis zu `end`, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays aus zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length` gilt, wird `0` verwendet.
    - Wenn `end >= array.length` gilt oder `end` weggelassen wird oder `undefined` ist, wird `array.length` verwendet. Dadurch werden alle Elemente bis zum Ende extrahiert.
    - Wenn `end` eine Position vor oder an der durch `start` angegebenen Position bezeichnet, wird ein leeres Array zurückgegeben.

### Rückgabewert

Ein neues Array mit den extrahierten Elementen.

## Beschreibung

Die Methode `slice()` ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert `this` nicht, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die einige der Elemente des ursprünglichen Arrays enthält.

Die Methode `slice()` erhält leere Positionen. Wenn der ausgewählte Teil [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist auch das zurückgegebene Array sparse.

Die Methode `slice()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Einen Teil eines vorhandenen Arrays zurückgeben

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

In diesem Beispiel extrahiert `slice(1, 3)` Elemente ab Index `1` bis vor Index `3`. Das Ergebnis ist das neue Array `['Orange', 'Lemon']`.

### Den Parameter `end` weglassen

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(2)` die Elemente von Index `2` bis zum Ende des Arrays.

### Negative Indizes verwenden

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(-2)` die letzten beiden Elemente des Arrays. Bei der Verwendung eines negativen Index mit der Methode `slice` werden negative Indizes vom Ende des Arrays aus gezählt: `-1` bezeichnet das letzte Element, `-2` das vorletzte Element und so weiter. Das Element an Index `-2` wird eingeschlossen, da dort die Extraktion beginnt.

```plain
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Einen positiven Startindex und einen negativen Endindex verwenden

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -1);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
```

In diesem Beispiel beginnt `slice(1, -1)` die Extraktion bei Index `1` und reicht bis vor das Element an Index `-1` (das letzte Element). Das Ergebnis ist das neue Array `['Banana', 'Orange', 'Mango']`. Die Methode `slice` schließt das Element am angegebenen Endindex immer aus, unabhängig davon, ob der Index positiv oder negativ ist.

```plain
read from start --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### `slice` mit Arrays von Objekten verwenden

Im folgenden Beispiel erstellt `slice` aus `myCar` ein neues Array namens `newCar`. Beide Arrays enthalten eine Referenz auf das Objekt `myHonda`. Wenn die Farbe von `myHonda` in Violett geändert wird, spiegelt sich die Änderung in beiden Arrays wider.

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

Dieses Skript gibt Folgendes aus:

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

### `slice()` für Objekte aufrufen, die keine Arrays sind

Die Methode `slice()` liest die `length`-Eigenschaft von `this`. Anschließend liest sie die Eigenschaften mit ganzzahligen Schlüsseln von `start` bis `end` und definiert sie in einem neu erstellten Array.

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

### Mit `slice()` arrayähnliche Objekte in Arrays umwandeln

Die Methode `slice()` wird häufig zusammen mit {{jsxref("Function/bind", "bind()")}} und {{jsxref("Function/call", "call()")}} verwendet, um eine Hilfsmethode zu erstellen, die ein arrayähnliches Objekt in ein Array umwandelt.

```js
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const listResult = list(1, 2, 3); // [1, 2, 3]
```

### `slice()` für sparse Arrays verwenden

Das von `slice()` zurückgegebene Array kann sparse sein, wenn das Quellarray sparse ist.

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.slice` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.slice` von es-shims](https://www.npmjs.com/package/array.prototype.slice)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
