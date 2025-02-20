---
title: "Array: length"
slug: Web/JavaScript/Reference/Global_Objects/Array/length
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`length`** Dateneigenschaft einer {{jsxref("Array")}}-Instanz stellt die Anzahl der Elemente in diesem Array dar. Der Wert ist eine vorzeichenlose 32-Bit-Ganzzahl, die immer numerisch größer ist als der höchste Index im Array.

{{InteractiveExample("JavaScript Demo: Array.length", "shorter")}}

```js interactive-example
const clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// Expected output: 4
```

## Wert

Eine nicht-negative Ganzzahl kleiner als 2<sup>32</sup>.

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Der Wert der `length`-Eigenschaft ist eine nicht-negative Ganzzahl mit einem Wert kleiner als 2<sup>32</sup>.

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // Negative numbers are not allowed
// RangeError: Invalid array length
```

Das Array-Objekt beachtet die `length`-Eigenschaft und synchronisiert den `length`-Wert automatisch mit dem Inhalt des Arrays. Das bedeutet:

- Das Setzen von `length` auf einen Wert, der kleiner ist als die aktuelle Länge, kürzt das Array – Elemente nach der neuen `length`-Grenze werden gelöscht.
- Das Setzen eines Array-Index (eine nicht-negative Ganzzahl kleiner als 2<sup>32</sup>) über den aktuellen `length`-Wert hinaus erweitert das Array – die `length`-Eigenschaft wird erhöht, um den neuen höchsten Index widerzuspiegeln.
- Das Setzen von `length` auf einen ungültigen Wert (z. B. eine negative Zahl oder eine Nicht-Ganzzahl) löst eine `RangeError`-Ausnahme aus.

Wenn `length` auf einen größeren Wert als die aktuelle Länge gesetzt wird, wird das Array durch das Hinzufügen von [leeren Slots](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) erweitert, nicht durch tatsächliche `undefined`-Werte. Leere Slots haben spezielle Interaktionen mit Array-Methoden; siehe [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

Siehe auch [Beziehung zwischen `length` und numerischen Eigenschaften](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties).

## Beispiele

### Iterieren über ein Array

Im folgenden Beispiel wird das Array `numbers` durch Iteration über die `length`-Eigenschaft durchlaufen. Der Wert jedes Elements wird anschließend verdoppelt.

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
```

### Ein Array verkürzen

Im nächsten Beispiel wird das Array `numbers` auf eine Länge von 3 verkürzt, wenn die aktuelle Länge größer als 3 ist.

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined; the extra elements are deleted
```

### Leeres Array mit fester Länge erstellen

Das Setzen von `length` auf einen Wert, der größer als die aktuelle Länge ist, erstellt ein [spärliches Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

### Array mit nicht beschreibbarer Länge

Die `length`-Eigenschaft wird automatisch vom Array aktualisiert, wenn Elemente über die aktuelle Länge hinaus hinzugefügt werden. Wenn die `length`-Eigenschaft schreibgeschützt gemacht wird, kann das Array sie nicht aktualisieren. Dies führt zu einem Fehler im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

```js
"use strict";

const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- [`TypedArray.prototype.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
- [`String`: `length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [RangeError: ungültige Array-Länge](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
