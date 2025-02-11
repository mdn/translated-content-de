---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt und gibt einen neuen String zurück, indem alle Elemente dieses Arrays miteinander verkettet werden, getrennt durch Kommata oder eine angegebene Trennzeichen-Zeichenkette. Wenn das Array nur ein Element hat, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben.

{{InteractiveExample("JavaScript Demo: Array.join()")}}

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
  - : Eine Zeichenkette, die jedes Paar benachbarter Elemente des Arrays trennt. Wird dieser Parameter ausgelassen, werden die Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String, in dem alle Array-Elemente verbunden sind. Falls `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Die String-Konvertierungen aller Array-Elemente werden zu einem einzigen String zusammengefügt. Wenn ein Element `undefined` oder `null` ist, wird es zu einem leeren String konvertiert, anstatt zur Zeichenkette `"null"` oder `"undefined"`.

Die `join`-Methode wird intern von [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) ohne Argumente aufgerufen. Das Überschreiben der `join`-Methode einer Array-Instanz überschreibt auch deren `toString`-Verhalten.

`Array.prototype.join` konvertiert jedes Element, einschließlich anderer Arrays, rekursiv in Strings. Da der von `Array.prototype.toString` zurückgegebene String (der gleich ist wie bei einem Aufruf von `join()` ohne Argument) keine Trennzeichen hat, wirken verschachtelte Arrays flach. Man kann nur das Trennzeichen der ersten Ebene steuern, während tiefere Ebenen immer das Standard-Komma verwenden.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

Wenn ein Array zyklisch ist (es enthält ein Element, das es selbst ist), vermeiden Browser eine Endlosrekursion, indem sie die zyklische Referenz ignorieren.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

Wird `join()` auf [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet, behandelt die Methode leere Stellen so, als hätten sie den Wert `undefined`.

Die `join()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat.

## Beispiele

### Verbinden eines Arrays auf vier verschiedene Arten

Im folgenden Beispiel wird ein Array `a` mit drei Elementen erstellt. Das Array wird dann viermal verbunden: mit dem Standard-Trennzeichen, einem Komma und einem Leerzeichen, einem Pluszeichen und einer leeren Zeichenkette.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### Verwendung von join() auf sparse arrays

`join()` behandelt leere Stellen wie `undefined` und erzeugt ein zusätzliches Trennzeichen:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Aufruf von join() bei Nicht-Array-Objekten

Die Methode `join()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.join` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
