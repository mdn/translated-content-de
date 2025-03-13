---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt und gibt eine neue Zeichenkette zurück, indem alle Elemente in diesem Array durch Kommas oder eine angegebene Trennzeichen-Zeichenkette verbunden werden. Wenn das Array nur ein Element hat, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben.

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
  - : Eine Zeichenkette, um jedes Paar benachbarter Elemente des Arrays zu trennen. Wenn nicht angegeben, werden die Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Eine Zeichenkette, die alle Array-Elemente verbindet. Wenn `array.length` `0` ist, wird die leere Zeichenkette zurückgegeben.

## Beschreibung

Die Zeichenkettenkonvertierungen aller Array-Elemente werden zu einer Zeichenkette verbunden. Wenn ein Element `undefined` oder `null` ist, wird es in eine leere Zeichenkette anstelle der Zeichenkette `"null"` oder `"undefined"` konvertiert.

Die `join`-Methode wird intern von [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) ohne Argumente aufgerufen. Das Überschreiben von `join` einer Array-Instanz wird auch ihr `toString`-Verhalten überschreiben.

`Array.prototype.join` konvertiert rekursiv jedes Element, einschließlich anderer Arrays, zu Zeichenketten. Da die von `Array.prototype.toString` zurückgegebene Zeichenkette (die der Aufruf von `join()` entspricht) keine Trennzeichen hat, wirken verschachtelte Arrays wie flach. Sie können nur das Trennzeichen der ersten Ebene steuern, während tiefere Ebenen immer das Standardkomma verwenden.

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

Wenn die Methode bei [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, iteriert die `join()`-Methode leere Slots, als ob sie den Wert `undefined` hätten.

Die `join()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat.

## Beispiele

### Ein Array auf vier verschiedene Weisen verbinden

Das folgende Beispiel erstellt ein Array `a` mit drei Elementen und verbindet es dann viermal: einmal mit dem Standardtrennzeichen, dann mit einem Komma und einem Leerzeichen, dann mit einem Pluszeichen und einer leeren Zeichenkette.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### Verwenden von join() bei sparsamen Arrays

`join()` behandelt leere Slots genauso wie `undefined` und erzeugt ein zusätzliches Trennzeichen:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Aufrufen von join() auf Nicht-Array-Objekten

Die `join()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist.

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
- [Anleitung zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
