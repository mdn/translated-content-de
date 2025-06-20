---
title: Array.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt und gibt eine neue Zeichenkette zurück, indem alle Elemente in diesem Array verkettet werden, getrennt durch Kommas oder ein angegebenes Trennzeichen. Wenn das Array nur ein Element hat, wird dieses Element ohne das Trennzeichen zurückgegeben.

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
  - : Eine Zeichenkette, die jedes Paar angrenzender Elemente des Arrays trennt. Wenn sie weggelassen wird, werden die Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Eine Zeichenkette mit allen verbundenen Array-Elementen. Wenn `array.length` `0` ist, wird die leere Zeichenkette zurückgegeben.

## Beschreibung

Die Zeichenketten-Konvertierungen aller Array-Elemente werden in eine Zeichenkette zusammengeführt. Wenn ein Element `undefined` oder `null` ist, wird es in eine leere Zeichenkette umgewandelt, anstatt in die Zeichenketten `"null"` oder `"undefined"`.

Die `join`-Methode wird intern von [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) ohne Argumente aufgerufen. Das Überschreiben von `join` einer Array-Instanz wird auch das Verhalten von `toString` überschreiben.

`Array.prototype.join` konvertiert rekursiv jedes Element, einschließlich anderer Arrays, in Zeichenketten. Da die von `Array.prototype.toString` zurückgegebene Zeichenkette (die dasselbe ist wie ein Aufruf von `join()`) keine Trennzeichen besitzt, sehen geschachtelte Arrays so aus, als wären sie flach. Sie können nur das Trennzeichen der ersten Ebene steuern, während tiefere Ebenen immer das Standardkomma verwenden.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

Wenn ein Array zyklisch ist (es enthält ein Element, das es selbst ist), vermeiden Browser eine unendliche Rekursion, indem sie den zyklischen Verweis ignorieren.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

Wenn die Methode bei [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, iteriert die `join()`-Methode über leere Plätze, als hätten sie den Wert `undefined`.

Die `join()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Integer-Schlüsseleigenschaften besitzt.

## Beispiele

### Vier verschiedene Weisen, ein Array zu verbinden

Das folgende Beispiel erstellt ein Array `a` mit drei Elementen und verbindet dann das Array viermal: Mit dem Standardtrennzeichen, dann mit einem Komma und einem Leerzeichen, dann mit einem Plus und einer leeren Zeichenkette.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### Verwenden von join() bei spärlichen Arrays

`join()` behandelt leere Plätze genauso wie `undefined` und erzeugt ein zusätzliches Trennzeichen:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Aufruf von join() auf Nicht-Array-Objekten

Die `join()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
