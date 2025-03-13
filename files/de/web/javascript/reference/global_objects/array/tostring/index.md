---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Array")}} Instanzen gibt eine Zeichenkette zurück, die das angegebene Array und seine Elemente repräsentiert.

{{InteractiveExample("JavaScript Demo: Array.prototype.toString()", "shorter")}}

```js interactive-example
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die die Elemente des Arrays repräsentiert.

## Beschreibung

Das {{jsxref("Array")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}. Die `toString` Methode von Arrays ruft intern [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) auf, das das Array verbindet und eine Zeichenkette zurückgibt, die jedes Array-Element durch Kommas getrennt enthält. Sollte die `join` Methode nicht verfügbar sein oder keine Funktion sein, wird [`Object.prototype.toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) anstelle dessen verwendet, was `[object Array]` zurückgibt.

```js
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

JavaScript ruft die `toString` Methode automatisch auf, wenn ein Array als Textwert dargestellt werden soll oder wenn auf ein Array in einer Zeichenkettenverkettung verwiesen wird.

`Array.prototype.toString` konvertiert rekursiv jedes Element, einschließlich anderer Arrays, in Zeichenketten. Da die von `Array.prototype.toString` zurückgegebene Zeichenkette keine Trennzeichen hat, sehen verschachtelte Arrays aus, als wären sie flach dargestellt.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
```

Wenn ein Array zyklisch ist (es enthält ein Element, das es selbst ist), vermeiden Browser unendliche Rekursion, indem sie den zyklischen Verweis ignorieren.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.toString()); // 1,3,,4,2
```

## Beispiele

### Verwendung von toString()

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString()); // "1,2,a,1a"
```

### Verwendung von toString() auf spärlichen Arrays

Entsprechend dem Verhalten von `join()` behandelt `toString()` leere Slots genauso wie `undefined` und erzeugt einen zusätzlichen Trenner:

```js
console.log([1, , 3].toString()); // '1,,3'
```

### Aufruf von toString() bei Nicht-Array Objekten

`toString()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Es erwartet, dass `this` eine `join()` Methode hat; andernfalls wird `Object.prototype.toString()` verwendet.

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; a number
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
