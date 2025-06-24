---
title: Array() Konstruktor
short-title: Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Array()`** Konstruktor erstellt {{jsxref("Array")}} Objekte.

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

> [!NOTE] > `Array()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Array` Instanz.

### Parameter

- `element1`, …, `elementN`
  - : Ein JavaScript-Array wird mit den angegebenen Elementen initialisiert, außer in dem Fall, dass ein einzelnes Argument an den `Array` Konstruktor übergeben wird und dieses Argument
    eine Zahl ist (siehe den `arrayLength` Parameter unten). Beachten Sie, dass dieser Sonderfall nur für JavaScript-Arrays gilt, die mit dem `Array` Konstruktor erstellt wurden, nicht für Array-Literale, die mit der eckigen Klammer-Syntax erstellt werden.
- `arrayLength`
  - : Wenn das einzige an den `Array` Konstruktor übergebene Argument eine Ganzzahl zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) ist, wird ein neues JavaScript-Array mit seiner `length` Eigenschaft erstellt, die auf diese Zahl gesetzt ist (**Hinweis:** dies
    impliziert ein Array von `arrayLength` leeren Slots, nicht Slots mit tatsächlichen `undefined` Werten — siehe [dünnbesetzte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn es nur ein Argument (`arrayLength`) gibt, das eine Zahl ist, ihr Wert jedoch keine Ganzzahl ist oder nicht zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) liegt.

## Beispiele

### Array-Literalnotation

Arrays können mit der [Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
Notation erstellt werden:

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array-Konstruktor mit einem einzelnen Parameter

Arrays können mit einem Konstruktor erstellt werden, der einen einzigen Zahlenparameter hat. Ein Array wird erstellt mit
seiner `length` Eigenschaft, die auf diese Zahl gesetzt ist, und die Array-Elemente sind leere
Slots.

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

Wenn mehr als ein Argument an den Konstruktor übergeben wird, wird ein neues {{jsxref("Array")}} mit
den angegebenen Elementen erstellt.

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

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
