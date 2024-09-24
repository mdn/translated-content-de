---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: 9908467d2685cbfd23bec420735fa1e846ba862a
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("Array")}}-Instanzen gibt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) eines Abschnitts eines Arrays in ein neues Array-Objekt zurück, ausgewählt von `start` bis `end` (`end` nicht eingeschlossen), wobei `start` und `end` den Index von Elementen in diesem Array repräsentieren. Das ursprüngliche Array wird nicht verändert.

{{EmbedInteractiveExample("pages/js/array-slice.html", "taller")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Null-basierter Index, bei dem die Extraktion beginnt, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird ein leeres Array zurückgegeben.
- `end` {{optional_inline}}
  - : Null-basierter Index, bei dem die Extraktion endet, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis zu, aber nicht einschließlich `end`.
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, was dazu führt, dass alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position impliziert, die vor oder an der Position liegt, die `start` impliziert, wird ein leeres Array zurückgegeben.

### Rückgabewert

Ein neues Array, das die extrahierten Elemente enthält.

## Beschreibung

Die `slice()`-Methode ist eine [Kopiermethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert `this` nicht, sondern gibt stattdessen eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die einige der gleichen Elemente wie die des ursprünglichen Arrays enthält.

Die `slice()`-Methode behält leere Stellen bei. Wenn der geschnittene Abschnitt [dünn besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist das zurückgegebene Array ebenfalls dünn besetzt.

Die `slice()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und eigenschaftsbasierte Schlüssel hat.

## Beispiele

### Einen Abschnitt eines vorhandenen Arrays zurückgeben

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits enthält ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus enthält ['Orange','Lemon']
```

In diesem Beispiel extrahiert `slice(1, 3)` Elemente von Index `1` bis, aber nicht einschließlich, Index `3`, was zu einem neuen Array `['Orange', 'Lemon']` führt.

### Das End-Parameter weglassen

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(2)` Elemente von Index `2` bis zum Ende des Arrays.

### Verwendung negativer Indizes

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['Mango', 'Pineapple']
```

In diesem Beispiel extrahiert `slice(-2)` die letzten zwei Elemente des Arrays. Bei Verwendung eines negativen Index mit der `slice`-Methode werden negative Indizes vom Ende des Arrays gezählt, beginnend bei `-1` für das letzte Element, `-2` für das vorletzte Element und so weiter. Der negative Index `-2` selbst ist enthalten, da er der Startpunkt der Extraktion ist.

```plain
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- rückwärts lesen
```

### Verwendung eines positiven Start-Indexes und eines negativen End-Indexes

```js
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Verwendung eines positiven Start-Indexes und eines negativen End-Indexes
const sliceExample = fruits.slice(1, -1);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
```

In diesem Beispiel beginnt `slice(1, -1)` mit der Extraktion ab Index `1` und führt bis, aber nicht einschließlich, zum Element bei Index `-1` (was das letzte Element ist). Dies führt zu einem neuen Array mit `['Banana', 'Orange', 'Mango']`. Die `slice`-Methode schließt immer das Element am angegebenen End-Index aus, unabhängig davon, ob es positiv oder negativ ist.

```plain
gehend von Anfang --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- rückwärts lesen
```

### Verwendung von slice mit Arrays von Objekten

Im folgenden Beispiel erstellt `slice` ein neues Array, `newCar`,
aus `myCar`. Beide enthalten eine Referenz zum Objekt `myHonda`.
Wenn die Farbe von `myHonda` auf Lila geändert wird, spiegeln beide Arrays die
Änderung wider.

```js
// Verwenden von slice, um newCar aus myCar zu erstellen.
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

// Ändern Sie die Farbe von myHonda.
myHonda.color = "purple";
console.log("Die neue Farbe meines Hondas ist", myHonda.color);

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
Die neue Farbe meines Hondas ist purple
myCar[0].color = purple
newCar[0].color = purple
```

### Aufrufen von slice() auf Nicht-Array-Objekten

Die `slice()`-Methode liest die `length`-Eigenschaft von `this`. Sie liest dann die ganzzahligen Schlüssel-Eigenschaften von `start` bis `end` und definiert sie in einem neu erstellten Array.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // wird von slice() ignoriert, da length 3 ist
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]
```

### Verwenden von slice() zur Konvertierung von array-ähnlichen Objekten in Arrays

Die `slice()`-Methode wird oft mit {{jsxref("Function/bind", "bind()")}} und {{jsxref("Function/call", "call()")}} verwendet, um eine Hilfsmethode zu erstellen, die ein array-ähnliches Objekt in ein Array umwandelt.

```js
// slice() wird mit `this` als erstem Argument aufgerufen
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### Verwendung von slice() auf dünn besetzten Arrays

Das von `slice()` zurückgegebene Array kann dünn besetzt sein, wenn die Quelle dünn besetzt ist.

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.slice` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Leitfaden zu [Indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
