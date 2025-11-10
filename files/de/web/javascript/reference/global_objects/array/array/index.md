---
title: Array() Konstruktor
short-title: Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

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

> [!NOTE]
> `Array()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beides erstellt eine neue `Array` Instanz.

### Parameter

- `element1`, …, `elementN`
  - : Ein JavaScript-Array wird mit den angegebenen Elementen initialisiert, außer im Fall, dass ein einzelnes Argument an den `Array` Konstruktor übergeben wird und dieses Argument eine Zahl ist (siehe den `arrayLength` Parameter unten). Beachten Sie, dass sich dieser Sonderfall nur auf mit dem `Array` Konstruktor erstellte JavaScript-Arrays bezieht, nicht auf mit der eckigen Klammer-Syntax erstellte Array-Literale.
- `arrayLength`
  - : Wenn das einzige Argument, das an den `Array` Konstruktor übergeben wird, eine ganze Zahl zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) ist, wird ein neues JavaScript-Array zurückgegeben, bei dem die `length` Eigenschaft auf diese Zahl gesetzt ist.

    > [!NOTE]
    > Dies impliziert ein Array mit `arrayLength` leeren Plätzen, nicht Plätze mit tatsächlichen `undefined` Werten — siehe [dünn besetzte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn es nur ein Argument (`arrayLength`) gibt, das eine Zahl ist, aber dessen Wert keine ganze Zahl ist oder nicht zwischen 0 und 2<sup>32</sup> - 1 (einschließlich) liegt.

## Beispiele

### Array-Literal-Notation

Arrays können mit der [Literal-Notation](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) erstellt werden:

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array-Konstruktor mit einem einzelnen Parameter

Arrays können mit einem Konstruktor erstellt werden, der einen einzelnen numerischen Parameter hat. Ein Array wird erstellt, dessen `length` Eigenschaft auf diese Zahl gesetzt ist, und die Array-Elemente sind leere Plätze.

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

Wenn mehr als ein Argument an den Konstruktor übergeben wird, wird ein neuer {{jsxref("Array")}} mit den angegebenen Elementen erstellt.

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

- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
