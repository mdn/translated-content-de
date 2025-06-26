---
title: Array() Konstruktor
short-title: Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
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
  - : Ein JavaScript-Array wird mit den angegebenen Elementen initialisiert, außer in dem Fall, dass
    ein einzelnes Argument an den `Array` Konstruktor übergeben wird und dieses Argument
    eine Zahl ist (siehe den Parameter `arrayLength` unten). Beachten Sie, dass dieser Sonderfall nur
    für JavaScript-Arrays gilt, die mit dem `Array` Konstruktor erstellt wurden, nicht für
    Array-Literale, die mit der Klammernotation erstellt wurden.
- `arrayLength`

  - : Wenn das einzige Argument, das an den `Array` Konstruktor übergeben wird, eine Ganzzahl
    zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) ist, gibt dies ein neues JavaScript-Array zurück, dessen
    `length` Eigenschaft auf diese Zahl gesetzt ist.

    > [!NOTE]
    > Dies bedeutet ein Array mit `arrayLength` leeren Slots, nicht Slots mit tatsächlichen `undefined` Werten — siehe [Sparse Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn es nur ein Argument (`arrayLength`) gibt, das eine Zahl ist, aber dessen Wert keine Ganzzahl oder nicht zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) ist.

## Beispiele

### Array-Literal-Notation

Arrays können mit der [Literal-Notation](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
erstellt werden:

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array-Konstruktor mit einem einzelnen Parameter

Arrays können mit einem Konstruktor und einem einzigen Zahlenparameter erstellt werden. Ein Array wird erstellt, dessen `length` Eigenschaft auf diese Zahl gesetzt ist, und die Array-Elemente sind leere
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

Wenn dem Konstruktor mehr als ein Argument übergeben wird, wird ein neues {{jsxref("Array")}} mit
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
