---
title: Array.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`join()`** Methode von {{jsxref("Array")}} Instanzen erstellt und
gibt einen neuen String zurück, indem alle Elemente in diesem Array verkettet werden,
getrennt durch Kommas oder einem angegebenen Trennzeichen-String. Wenn das Array
nur ein Element hat, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben.

{{InteractiveExample("JavaScript Demo: Array.prototype.join()")}}

```js interactive-example
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, der jedes Paar von benachbarten Elementen des Arrays trennt. Wenn weggelassen, werden die Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String mit allen verknüpften Array-Elementen. Wenn `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Die String-Konvertierungen aller Array-Elemente werden zu einem String zusammengefügt. Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String konvertiert, anstatt in den String `"null"` oder `"undefined"`.

Die `join` Methode wird intern von [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) ohne Argumente aufgerufen. Ein Überschreiben von `join` einer Array-Instanz wird das `toString` Verhalten ebenfalls überschreiben.

`Array.prototype.join` konvertiert rekursiv jedes Element, einschließlich anderer Arrays, in Strings. Da der durch `Array.prototype.toString` zurückgegebene String (was dasselbe ist wie `join()` aufzurufen) keine Trennzeichen hat, sehen geschachtelte Arrays so aus, als ob sie abgeflacht wären. Man kann nur das Trennzeichen der ersten Ebene steuern, während tiefere Ebenen immer das Standard-Komma verwenden.

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

Wenn `join()` auf [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, durchläuft die Methode leere Slots, als hätten sie den Wert `undefined`.

Die `join()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length` Eigenschaft und integer-schlüsselbasierte Eigenschaften besitzt.

## Beispiele

### Ein Array auf vier verschiedene Arten verbinden

Das folgende Beispiel erstellt ein Array `a` mit drei Elementen und verbindet
das Array vier Mal: mit dem Standard-Trennzeichen, dann mit einem Komma und einem Leerzeichen, dann mit einem Pluszeichen und einem leeren String.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### Verwendung von join() auf sparse arrays

`join()` behandelt leere Slots genauso wie `undefined` und erzeugt einen zusätzlichen Trenner:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Aufruf von join() bei Nicht-Array-Objekten

Die `join()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nicht-negativer Integer kleiner als `length` ist.

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
- [es-shims Polyfill von `Array.prototype.join`](https://www.npmjs.com/package/array.prototype.join)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
