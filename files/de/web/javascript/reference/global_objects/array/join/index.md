---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 3b555f8a0f1a4bbd80e69c3219fda86c94dd0cee
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt und gibt einen neuen String zurück, indem sie alle Elemente in diesem Array zusammenführt und durch Kommas oder einen angegebenen Trennzeichen-String trennt. Wenn das Array nur ein Element hat, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, um jedes Paar benachbarter Elemente des Arrays zu trennen. Wird er weggelassen, werden die Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String mit allen verbundenen Array-Elementen. Wenn `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Die String-Konvertierungen aller Array-Elemente werden zu einem String verbunden. Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String umgewandelt, anstatt in den String `"null"` oder `"undefined"`.

Die `join`-Methode wird intern von [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) ohne Argumente aufgerufen. Das Überschreiben von `join` einer Array-Instanz wird auch ihr `toString`-Verhalten überschreiben.

`Array.prototype.join` konvertiert rekursiv jedes Element, einschließlich anderer Arrays, zu Strings. Da der von `Array.prototype.toString` zurückgegebene String (der dem Aufruf von `join()` entspricht) keine Trennzeichen hat, sehen geschachtelte Arrays aus, als wären sie abgeflacht. Sie können nur das Trennzeichen der ersten Ebene steuern, während tiefere Ebenen immer das Standardkomma verwenden.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

Wenn ein Array zyklisch ist (es enthält ein Element, das es selbst ist), vermeiden Browser eine Endlosschleife, indem sie die zyklische Referenz ignorieren.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

Wenn `join()` bei [sparsame Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, werden leere Slots so behandelt, als hätten sie den Wert `undefined`.

Die `join()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und Integer-Schlüssel-Eigenschaften hat.

## Beispiele

### Ein Array auf vier verschiedene Arten verbinden

Im folgenden Beispiel wird ein Array `a` mit drei Elementen erstellt und dann viermal verbunden: mit dem Standard-Trennzeichen, dann mit einem Komma und einem Leerzeichen, dann mit einem Pluszeichen und einem leeren String.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### Verwendung von join() bei sparsamen Arrays

`join()` behandelt leere Slots genauso wie `undefined` und erzeugt einen zusätzlichen Trennzeichen:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Aufruf von join() bei Nicht-Array-Objekten

Die `join()`-Methode liest die `length`-Eigenschaft von `this` und greift anschließend auf jede Eigenschaft zu, deren Schlüssel ein nichtnegativer Integer kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // von join() ignoriert, da die Länge 3 ist
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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
