---
title: "Array: Länge"
slug: Web/JavaScript/Reference/Global_Objects/Array/length
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`length`** Daten-Eigenschaft einer {{jsxref("Array")}}-Instanz repräsentiert die Anzahl der Elemente in diesem Array. Der Wert ist eine nicht negative, 32-Bit-Integer-Zahl, die immer numerisch größer ist als der höchste Index im Array.

{{EmbedInteractiveExample("pages/js/array-length.html", "shorter")}}

## Wert

Eine nichtnegative ganze Zahl kleiner als 2<sup>32</sup>.

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Der Wert der `length` Eigenschaft ist eine nichtnegative ganze Zahl mit einem Wert kleiner als 2<sup>32</sup>.

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // Negative Zahlen sind nicht erlaubt
// RangeError: Invalid array length
```

Das Array-Objekt beobachtet die `length` Eigenschaft und synchronisiert den `length`-Wert automatisch mit dem Inhalt des Arrays. Das bedeutet:

- Das Setzen von `length` auf einen Wert, der kleiner ist als die aktuelle Länge, kürzt das Array — Elemente jenseits der neuen `length` werden gelöscht.
- Das Setzen eines Array-Index (eine nichtnegative ganze Zahl kleiner als 2<sup>32</sup>) jenseits der aktuellen `length` erweitert das Array — die `length`-Eigenschaft wird erhöht, um den neuen höchsten Index widerzuspiegeln.
- Das Setzen von `length` auf einen ungültigen Wert (z. B. eine negative Zahl oder eine Nicht-Ganze Zahl) löst eine `RangeError` Ausnahme aus.

Wenn `length` auf einen größeren Wert als die aktuelle Länge gesetzt wird, wird das Array durch das Hinzufügen von [leeren Slots](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) erweitert, nicht durch tatsächliche `undefined` Werte. Leere Slots haben spezielle Interaktionen mit Array-Methoden; siehe [array methods and empty slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // Array-Länge wird auf 5 gesetzt, während sie aktuell 2 ist.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

Siehe auch [Beziehung zwischen `length` und numerischen Eigenschaften](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties).

## Beispiele

### Über ein Array iterieren

Im folgenden Beispiel wird das Array `numbers` durchlaufen, indem die `length` Eigenschaft betrachtet wird. Der Wert in jedem Element wird anschließend verdoppelt.

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers ist jetzt [2, 4, 6, 8, 10]
```

### Ein Array verkürzen

Im folgenden Beispiel wird das Array `numbers` auf eine Länge von 3 verkürzt, wenn die aktuelle Länge größer als 3 ist.

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined; die zusätzlichen Elemente werden gelöscht
```

### Leeres Array fester Länge erstellen

Das Setzen von `length` auf einen Wert größer als die aktuelle Länge erzeugt ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

### Array mit nicht beschreibbarer Länge

Die `length` Eigenschaft wird automatisch durch das Array aktualisiert, wenn Elemente über die aktuelle Länge hinaus hinzugefügt werden. Wenn die `length` Eigenschaft nicht beschreibbar gemacht wird, kann das Array sie nicht aktualisieren. Dies verursacht einen Fehler im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

```js
"use strict";

const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Anleitungen zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- [`TypedArray.prototype.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
- [`String`: `length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [RangeError: ungültige Array-Länge](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
