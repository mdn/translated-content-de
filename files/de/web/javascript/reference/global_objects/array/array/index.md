---
title: Array()-Konstruktor
short-title: Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

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

> **Note:** `Array()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erstellen eine neue `Array`-Instanz.

### Parameter

- `element1`, …, `elementN`
  - : Ein JavaScript-Array wird mit den angegebenen Elementen initialisiert, außer in dem Fall, in dem
    ein einziger Parameter an den `Array`-Konstruktor übergeben wird und dieser Parameter
    eine Zahl ist (siehe den `arrayLength`-Parameter unten). Beachten Sie, dass dieser Sonderfall nur
    für JavaScript-Arrays gilt, die mit dem `Array`-Konstruktor erstellt wurden, nicht
    für Array-Literale, die mit der eckigen Klammer-Syntax erstellt wurden.
- `arrayLength`
  - : Wenn das einzige Argument, das an den `Array`-Konstruktor übergeben wird, ein ganzzahliger Wert
    zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) ist, gibt dies ein neues JavaScript-Array zurück, bei dem
    die `length`-Eigenschaft auf diesen Wert gesetzt ist (**Hinweis:** dies
    impliziert ein Array von `arrayLength` leeren Slots, nicht von Slots mit tatsächlichen
    `undefined`-Werten — siehe [dünn besetzte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nur ein Argument (`arrayLength`) übergeben wird, das eine Zahl ist, aber dessen Wert kein ganzzahliger Wert oder nicht zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) ist.

## Beispiele

### Array-Literal-Notation

Arrays können mit der [Literalnotation](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) erstellt werden:

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array-Konstruktor mit einem einzigen Parameter

Arrays können mit einem Konstruktor erstellt werden, der einen einzigen Zahlenparameter verwendet. Ein Array wird erstellt, bei dem die `length`-Eigenschaft auf diese Zahl gesetzt ist, und die Array-Elemente sind leere Slots.

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

Wenn mehr als ein Argument an den Konstruktor übergeben wird, wird ein neues {{jsxref("Array")}} mit den angegebenen Elementen erstellt.

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
