---
title: Array.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`join()`** von {{jsxref("Array")}}-Instanzen gibt einen neuen String zurück, der aus der Verkettung aller Elemente des Arrays besteht. Die Elemente werden durch Kommas oder einen angegebenen Trennstring getrennt. Enthält das Array nur ein Element, wird dessen String-Darstellung ohne Trennzeichen zurückgegeben.

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
  - : Ein String, der jeweils zwei benachbarte Elemente des Arrays trennt. Wird er weggelassen, werden die Array-Elemente durch ein Komma (",") getrennt.

### Rückgabewert

Ein String, der alle Array-Elemente miteinander verbindet. Ist `array.length` gleich `0`, wird der leere String zurückgegeben.

## Beschreibung

Die String-Darstellungen aller Array-Elemente werden zu einem String verbunden. Ist ein Element `undefined` oder `null`, wird es anstelle des Strings `"null"` oder `"undefined"` in einen leeren String umgewandelt.

Die Methode `join` wird intern von [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) ohne Argumente aufgerufen. Wenn Sie `join` für eine Array-Instanz überschreiben, ändert sich dadurch auch das Verhalten ihrer Methode `toString`.

`Array.prototype.join` wandelt jedes Element rekursiv in einen String um, auch Elemente, die selbst Arrays sind. Da der von `Array.prototype.toString` zurückgegebene String (der dem Ergebnis eines Aufrufs von `join()` entspricht) keine Begrenzungszeichen für verschachtelte Arrays enthält, wirken diese, als wären sie abgeflacht worden. Sie können nur das Trennzeichen der obersten Ebene festlegen; auf tieferen Ebenen wird immer das standardmäßige Komma verwendet.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

Wenn ein Array zyklisch ist (also sich selbst als Element enthält), vermeiden Browser eine unendliche Rekursion, indem sie den zyklischen Verweis ignorieren.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

Bei [Arrays mit leeren Einträgen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behandelt die Methode `join()` leere Positionen so, als hätten sie den Wert `undefined`.

Die Methode `join()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Ein Array auf vier verschiedene Arten verbinden

Das folgende Beispiel erstellt ein Array `a` mit drei Elementen und verbindet dessen Elemente anschließend viermal: zuerst mit dem standardmäßigen Trennzeichen, dann mit einem Komma und einem Leerzeichen, danach mit einem Pluszeichen und schließlich mit einem leeren String.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### join() bei Arrays mit leeren Einträgen verwenden

`join()` behandelt leere Positionen genauso wie `undefined` und erzeugt dadurch ein zusätzliches Trennzeichen:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### join() für Objekte aufrufen, die keine Arrays sind

Die Methode `join()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.join` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.join` von es-shims](https://www.npmjs.com/package/array.prototype.join)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
