---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("Array")}}-Instanzen gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} eines Abschnitts eines Arrays als neues Array-Objekt zurück. Dieser Abschnitt wird von `start` bis `end` ausgewählt (`end` nicht eingeschlossen), wobei `start` und `end` die Indizes der Elemente in diesem Array repräsentieren. Das ursprüngliche Array wird nicht verändert.

{{InteractiveExample("JavaScript Demo: Array.slice()", "taller")}}

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
  - : Der nullbasierte Index, an dem die Extraktion beginnt, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays. Wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird ein leeres Array zurückgegeben.
- `end` {{optional_inline}}
  - : Der nullbasierte Index, an dem die Extraktion endet, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich, `end`.
    - Ein negativer Index zählt rückwärts vom Ende des Arrays. Wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, was dazu führt, dass alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position angibt, die vor oder an der Position liegt, die `start` angibt, wird ein leeres Array zurückgegeben.

### Rückgabewert

Ein neues Array, das die extrahierten Elemente enthält.

## Beschreibung

Die `slice()`-Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert `this` nicht, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die einige der gleichen Elemente wie das ursprüngliche Array enthält.

Die `slice()`-Methode bewahrt leere Positionen. Wenn der extrahierte Abschnitt [lückenhaft](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist das zurückgegebene Array ebenfalls lückenhaft.

Die `slice()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert über eine `length`-Eigenschaft und integer-indizierte Eigenschaften verfügt.

## Beispiele

### Einen Abschnitt eines bestehenden Arrays zurückgeben

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

In diesem Beispiel extrahiert `slice(1, 3)` Elemente vom Index `1` bis, aber nicht einschließlich, des Indexes `3`. Das Ergebnis ist ein neues Array `['Orange', 'Lemon']`.

### Das Endparameter weglassen

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(2)` Elemente vom Index `2` bis zum Ende des Arrays.

### Negative Indizes verwenden

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(-2)` die letzten zwei Elemente des Arrays. Bei der Verwendung eines negativen Indexes mit der Methode `slice` wird von hinten gezählt, wobei `-1` das letzte Element, `-2` das vorletzte Element usw. ist. Der negative Index `-2` selbst ist enthalten, da er der Startpunkt der Extraktion ist.

```plain
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Positiven Startindex und negativen Endindex verwenden

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -1);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
```

In diesem Beispiel beginnt `slice(1, -1)` mit der Extraktion bei Index `1` und geht bis, aber nicht einschließlich, des Elements bei Index `-1` (das letzte Element). Das Ergebnis ist ein neues Array mit `['Banana', 'Orange', 'Mango']`. Die `slice`-Methode schließt das Element am letzten angegebenen Index immer aus, unabhängig davon, ob er positiv oder negativ ist.

```plain
read from start --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### `slice` bei Arrays von Objekten verwenden

Im folgenden Beispiel erstellt `slice` ein neues Array `newCar` aus `myCar`. Beide enthalten eine Referenz auf das Objekt `myHonda`. Wenn die Farbe von `myHonda` auf Lila geändert wird, spiegelt sich dies in beiden Arrays wider.

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

### `slice()` bei Nicht-Array-Objekten aufrufen

Die `slice()`-Methode liest die `length`-Eigenschaft von `this`. Danach liest sie die integer-indizierten Eigenschaften von `start` bis `end` und definiert diese in einem neu erstellten Array.

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

### `slice()` verwenden, um Array-ähnliche Objekte in Arrays umzuwandeln

Die `slice()`-Methode wird häufig mit {{jsxref("Function/bind", "bind()")}} und {{jsxref("Function/call", "call()")}} verwendet, um eine Hilfsmethode zu erstellen, die ein Array-ähnliches Objekt in ein Array umwandelt.

```js
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### `slice()` bei lückenhaften Arrays verwenden

Das von `slice()` zurückgegebene Array kann lückenhaft sein, wenn die Quelle lückenhaft ist.

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.slice` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
