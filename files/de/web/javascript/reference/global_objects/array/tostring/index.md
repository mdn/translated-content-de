---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Array")}} Instanzen gibt einen String zurück, der das angegebene Array und dessen Elemente darstellt.

{{EmbedInteractiveExample("pages/js/array-tostring.html", "shorter")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die Elemente des Arrays darstellt.

## Beschreibung

Das {{jsxref("Array")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}. Die `toString`-Methode von Arrays ruft intern [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) auf, das das Array verbindet und einen String zurückgibt, der jedes Array-Element durch Kommas getrennt enthält. Wenn die `join`-Methode nicht verfügbar ist oder keine Funktion ist, wird [`Object.prototype.toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) stattdessen verwendet, welches `[object Array]` zurückgibt.

```js
const arr = [];
arr.join = 1; // `join` mit einer Nicht-Funktion überschreiben
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

JavaScript ruft die `toString`-Methode automatisch auf, wenn ein Array als Textwert dargestellt werden soll oder wenn ein Array in einem String-Zusammenhang erwähnt wird.

`Array.prototype.toString` wandelt jedes Element, einschließlich anderer Arrays, rekursiv in Strings um. Da der von `Array.prototype.toString` zurückgegebene String keine Trennzeichen hat, sehen verschachtelte Arrays aus, als wären sie abgeflacht.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
```

Wenn ein Array zyklisch ist (es enthält ein Element, das es selbst ist), vermeiden Browser eine unendliche Rekursion, indem sie die zyklische Referenz ignorieren.

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

### Verwendung von toString() bei spärlichen Arrays

Entsprechend dem Verhalten von `join()` behandelt `toString()` leere Slots genauso wie `undefined` und erzeugt ein zusätzliches Trennzeichen:

```js
console.log([1, , 3].toString()); // '1,,3'
```

### Aufruf von toString() auf Nicht-Array-Objekten

`toString()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Es erwartet, dass `this` über eine `join()`-Methode verfügt; oder, falls nicht, wird stattdessen `Object.prototype.toString()` verwendet.

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; eine Zahl
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
