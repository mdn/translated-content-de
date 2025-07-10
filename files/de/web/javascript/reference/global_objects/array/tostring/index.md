---
title: Array.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`** Methode von {{jsxref("Array")}}-Instanzen gibt einen String zurück, der das angegebene Array und dessen Elemente repräsentiert.

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

Ein String, der die Elemente des Arrays darstellt.

## Beschreibung

Das {{jsxref("Array")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}. Die `toString`-Methode von Arrays ruft intern [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) auf, welches das Array verbindet und einen String zurückgibt, der jedes Array-Element durch Kommas getrennt enthält. Wenn die `join`-Methode nicht verfügbar ist oder keine Funktion ist, wird stattdessen [`Object.prototype.toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) verwendet, das `[object Array]` zurückgibt.

```js
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

JavaScript ruft die `toString`-Methode automatisch auf, wenn ein Array als Textwert dargestellt werden soll oder wenn ein Array in einer String-Konkatenation referenziert wird.

`Array.prototype.toString` konvertiert rekursiv jedes Element, einschließlich anderer Arrays, zu Strings. Da der von `Array.prototype.toString` zurückgegebene String keine Trennzeichen hat, sehen verschachtelte Arrays aus, als wären sie abgeflacht.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
```

Wenn ein Array zyklisch ist (es ein Element enthält, das es selbst ist), vermeiden Browser eine unendliche Rekursion, indem sie die zyklische Referenz ignorieren.

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

### Verwendung von toString() bei lückenhaften Arrays

Dem Verhalten von `join()` folgend, behandelt `toString()` leere Plätze genauso wie `undefined` und erzeugt einen zusätzlichen Separator:

```js
console.log([1, , 3].toString()); // '1,,3'
```

### Aufruf von toString() bei Nicht-Array-Objekten

`toString()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Es erwartet, dass `this` eine `join()`-Methode hat; oder, falls dies fehlschlägt, wird stattdessen `Object.prototype.toString()` verwendet.

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

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
