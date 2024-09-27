---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: 9908467d2685cbfd23bec420735fa1e846ba862a
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("Array")}} Instanzen gibt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) eines Teils eines Arrays in ein neues Array-Objekt zurück, ausgewählt von `start` bis `end` (`end` nicht eingeschlossen), wobei `start` und `end` die Indizes der Elemente in diesem Array repräsentieren. Das ursprüngliche Array wird nicht verändert.

{{EmbedInteractiveExample("pages/js/array-slice.html", "taller")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion beginnt, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird ein leeres Array zurückgegeben.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion endet, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich, `end`.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position vor oder an der von `start` implizierten Position bedeutet, wird ein leeres Array zurückgegeben.

### Rückgabewert

Ein neues Array, das die extrahierten Elemente enthält.

## Beschreibung

Die `slice()`-Methode ist eine [Kopiermethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert `this` nicht, sondern gibt stattdessen eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die einige der gleichen Elemente wie das ursprüngliche Array enthält.

Die `slice()`-Methode bewahrt leere Slots. Wenn der geschnittene Teil [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist das zurückgegebene Array ebenfalls spärlich.

Die `slice()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlschlüsselbasierte Eigenschaften hat.

## Beispiele

### Einen Teil eines vorhandenen Arrays zurückgeben

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

In diesem Beispiel extrahiert `slice(1, 3)` Elemente von Index `1` bis, aber nicht einschließlich, Index `3`, was zu einem neuen Array `['Orange', 'Lemon']` führt.

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

In diesem Beispiel extrahiert `slice(-2)` die letzten zwei Elemente des Arrays. Wenn der `slice`-Methode ein negativer Index übergeben wird, werden negative Indizes vom Ende des Arrays gezählt, beginnend bei `-1` für das letzte Element, `-2` für das vorletzte Element usw. Der negative Index `-2` selbst ist eingeschlossen, da er der Ausgangspunkt der Extraktion ist.

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

In diesem Beispiel beginnt `slice(1, -1)` mit der Extraktion ab Index `1` und geht bis, aber schließt das Element bei Index `-1` (welches das letzte Element ist) nicht ein. Dies führt zu einem neuen Array mit `['Banana', 'Orange', 'Mango']`. Die `slice`-Methode schließt immer das Element beim angegebenen Endindex aus, unabhängig davon, ob dieser positiv oder negativ ist.

```plain
read from start --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Slice mit Arrays von Objekten verwenden

Im folgenden Beispiel erstellt `slice` ein neues Array, `newCar`, aus `myCar`. Beide beinhalten eine Referenz auf das Objekt `myHonda`. Wenn die Farbe von `myHonda` auf Lila geändert wird, spiegeln beide Arrays die Änderung wider.

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

### Aufrufen von slice() bei Nicht-Array-Objekten

Die `slice()`-Methode liest die `length`-Eigenschaft von `this`. Sie liest dann die ganzzahlschlüsselbasierten Eigenschaften von `start` bis `end` und definiert sie in einem neu erstellten Array.

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

### Verwenden von slice(), um array-ähnliche Objekte in Arrays zu konvertieren

Die `slice()`-Methode wird häufig zusammen mit {{jsxref("Function/bind", "bind()")}} und {{jsxref("Function/call", "call()")}} verwendet, um eine Utility-Methode zu erstellen, die ein array-ähnliches Objekt in ein Array umwandelt.

```js
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### Verwenden von slice() bei spärlichen Arrays

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
