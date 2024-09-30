---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: 9908467d2685cbfd23bec420735fa1e846ba862a
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("Array")}}-Instanzen gibt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) eines Abschnitts eines Arrays als neues Array-Objekt zurück, ausgewählt von `start` bis `end` (`end` nicht inbegriffen), wobei `start` und `end` die Indizes der Elemente in diesem Array darstellen. Das Originalarray wird nicht verändert.

{{EmbedInteractiveExample("pages/js/array-slice.html", "taller")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Nullbasierter Index zum Start der Extraktion, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` ausgelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length` ist, wird ein leeres Array zurückgegeben.
- `end` {{optional_inline}}
  - : Nullbasierter Index zum Ende der Extraktion, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length` ist, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` ausgelassen wird, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn durch `end` eine Position vor oder an der Position angegeben wird, die durch `start` impliziert ist, wird ein leeres Array zurückgegeben.

### Rückgabewert

Ein neues Array, das die extrahierten Elemente enthält.

## Beschreibung

Die `slice()`-Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert `this` nicht, sondern gibt stattdessen eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die einige der gleichen Elemente wie das Originalarray enthält.

Die `slice()`-Methode bewahrt leere Plätze. Wenn der geschnittene Abschnitt [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist das zurückgegebene Array ebenfalls spärlich.

Die `slice()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Eigenschaften hat.

## Beispiele

### Einen Abschnitt eines vorhandenen Arrays zurückgeben

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

In diesem Beispiel extrahiert `slice(1, 3)` die Elemente von Index `1` bis, aber nicht einschließlich, Index `3`, was zu einem neuen Array `['Orange', 'Lemon']` führt.

### Den Endparameter auslassen

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(2)` die Elemente von Index `2` bis zum Ende des Arrays.

### Verwendung negativer Indizes

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(-2)` die letzten zwei Elemente des Arrays. Bei der Verwendung eines negativen Indexes mit der `slice`-Methode werden negative Indizes vom Ende des Arrays gezählt, beginnend bei `-1` für das letzte Element, `-2` für das vorletzte Element und so weiter. Der negative Index `-2` selbst wird eingeschlossen, da er der Startpunkt der Extraktion ist.

```plain
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Verwendung eines positiven Startindex und eines negativen Endindex

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -1);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
```

In diesem Beispiel beginnt `slice(1, -1)` mit dem Extrahieren ab Index `1` und reicht bis, aber schließt nicht ein, das Element an Index `-1` (was das letzte Element ist). Dies führt zu einem neuen Array mit `['Banana', 'Orange', 'Mango']`. Die `slice`-Methode schließt stets das Element am letzten angegebenen Index aus, unabhängig davon, ob dieser positiv oder negativ ist.

```plain
read from start --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Verwendung von Slice mit Arrays von Objekten

Im folgenden Beispiel erstellt `slice` ein neues Array, `newCar`, aus `myCar`. Beide enthalten einen Verweis auf das Objekt `myHonda`. Wenn die Farbe von `myHonda` auf Lila geändert wird, reflektieren beide Arrays die Änderung.

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

### Aufruf von slice() auf Nicht-Array-Objekten

Die `slice()`-Methode liest die `length`-Eigenschaft von `this`. Dann liest sie die integerbasierten Eigenschaften von `start` bis `end` und definiert sie auf einem neu erstellten Array.

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

### Verwendung von slice() zur Umwandlung von arrayähnlichen Objekten in Arrays

Die `slice()`-Methode wird oft mit {{jsxref("Function/bind", "bind()")}} und {{jsxref("Function/call", "call()")}} verwendet, um eine Hilfsmethode zu erstellen, die ein arrayähnliches Objekt in ein Array umwandelt.

```js
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### Verwendung von slice() in spärlichen Arrays

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
