---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 3b555f8a0f1a4bbd80e69c3219fda86c94dd0cee
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt und gibt einen neuen String zurück, indem alle Elemente in diesem Array verkettet werden, getrennt durch Kommas oder einen angegebenen Trennzeichen-String. Wenn das Array nur ein Element hat, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, um jedes Paar benachbarter Elemente des Arrays zu trennen. Wird dieser weggelassen, werden die Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String mit allen verbundenen Array-Elementen. Wenn `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Die String-Konvertierungen aller Array-Elemente werden zu einem String verbunden. Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String umgewandelt, anstatt in die Strings `"null"` oder `"undefined"`.

Die `join`-Methode wird intern von [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) ohne Argumente aufgerufen. Das Überschreiben von `join` einer Array-Instanz überschreibt auch ihr `toString`-Verhalten.

`Array.prototype.join` konvertiert rekursiv jedes Element, einschließlich anderer Arrays, in Strings. Da der von `Array.prototype.toString` zurückgegebene String (der gleiche wie der Aufruf von `join()`) keine Trennzeichen hat, sehen verschachtelte Arrays wie abgeflacht aus. Sie können nur das Trennzeichen der ersten Ebene steuern, während tiefere Ebenen immer das Standardkomma verwenden.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

Wenn ein Array zyklisch ist (es enthält ein Element, das es selbst ist), vermeiden Browser eine unendliche Rekursion, indem sie die zyklische Referenz ignorieren.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

Wenn sie auf [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, iteriert die `join()`-Methode leere Stellen, als hätten sie den Wert `undefined`.

Die `join()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-gekoppelte Eigenschaften hat.

## Beispiele

### Ein Array auf vier verschiedene Arten verbinden

Das folgende Beispiel erstellt ein Array `a` mit drei Elementen und verbindet das Array dann viermal: einmal mit dem Standardtrennzeichen, dann einem Komma und einem Leerzeichen, dann einem Plus und einem leeren String.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### Verwendung von join() auf sparse Arrays

`join()` behandelt leere Stellen wie `undefined` und erzeugt einen zusätzlichen Separator:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Aufrufen von join() für Nicht-Array-Objekte

Die `join()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by join() since length is 3
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.join` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
