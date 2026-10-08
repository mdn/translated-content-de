---
title: Array()-Konstruktor
short-title: Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: 06f8ebf948372dfb6c3c22d26d4f672c99cd4e0d
---

Der **`Array()`**-Konstruktor erstellt {{jsxref("Array")}}-Objekte.

## Syntax

```js-nolint
new Array()
new Array(element1)
new Array(element1, element2)
new Array(element1, element2, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element1)
Array(element1, element2)
Array(element1, element2, /* …, */ elementN)
Array(arrayLength)
```

> [!NOTE]
> `Array()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `Array`-Instanz erstellt.

### Parameter

- `element1`, …, `elementN`
  - : Ein JavaScript-Array wird mit den angegebenen Elementen initialisiert. Eine Ausnahme gilt, wenn dem `Array`-Konstruktor nur ein Argument übergeben wird und dieses eine Zahl ist (siehe den Parameter `arrayLength` weiter unten). Dieser Sonderfall gilt nur für JavaScript-Arrays, die mit dem `Array`-Konstruktor erstellt werden, nicht für Array-Literale mit eckigen Klammern.
- `arrayLength`
  - : Wenn das einzige an den `Array`-Konstruktor übergebene Argument eine Ganzzahl zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) ist, wird ein neues JavaScript-Array zurückgegeben, dessen `length`-Eigenschaft auf diese Zahl gesetzt ist.

    > [!NOTE]
    > Das bedeutet, dass das Array `arrayLength` leere Plätze enthält, nicht Plätze mit tatsächlichen `undefined`-Werten – siehe [Arrays mit leeren Plätzen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nur ein Argument (`arrayLength`) übergeben wird, das eine Zahl ist, deren Wert aber keine Ganzzahl ist oder nicht zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) liegt.

## Beispiele

### Array-Literalnotation

Arrays können mit der [Literalnotation](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) erstellt werden:

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array-Konstruktor mit einem einzelnen Parameter

Arrays können mit einem Konstruktor erstellt werden, dem eine einzelne Zahl als Parameter übergeben wird. Dabei entsteht ein Array, dessen `length`-Eigenschaft auf diese Zahl gesetzt ist und dessen Elemente leere Plätze sind.

```js
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false
```

```js
const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

### Array-Konstruktor mit mehreren Parametern

Wenn dem Konstruktor mehr als ein Argument übergeben wird, wird ein neues {{jsxref("Array")}} mit den angegebenen Elementen erstellt.

```js
const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) – Leitfaden
- {{jsxref("Array")}}
