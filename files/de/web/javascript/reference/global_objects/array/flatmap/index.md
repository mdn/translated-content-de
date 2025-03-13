---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`flatMap()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues Array zurück, das gebildet wird, indem eine gegebene Rückruffunktion auf jedes Element des Arrays angewendet und das Ergebnis dann um eine Ebene abgeflacht wird. Sie ist identisch mit einer {{jsxref("Array/map", "map()")}}, gefolgt von einem {{jsxref("Array/flat", "flat()")}} mit einer Tiefe von 1 (`arr.map(...args).flat()`), jedoch etwas effizienter als die separate Aufruf dieser beiden Methoden.

{{InteractiveExample("JavaScript Demo: Array.prototype.flatMap()", "shorter")}}

```js interactive-example
const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
```

## Syntax

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte ein Array zurückgeben, das neue Elemente für das neue Array enthält, oder einen einzelnen Nicht-Array-Wert, der dem neuen Array hinzugefügt werden soll. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `flatMap()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [Iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, bei dem jedes Element das Ergebnis der Rückruffunktion ist und das um eine Tiefe von 1 abgeflacht ist.

## Beschreibung

Die `flatMap()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Siehe {{jsxref("Array.prototype.map()")}} für eine detaillierte Beschreibung der Rückruffunktion. Die `flatMap()`-Methode ist identisch mit [`map(callbackFn, thisArg)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gefolgt von [`flat(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) — für jedes Element produziert sie ein Array neuer Elemente und verknüpft die resultierenden Arrays miteinander, um ein neues Array zu bilden. Lesen Sie den Abschnitt [Iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

Die `flatMap()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat. Der von `callbackFn` zurückgegebene Wert muss jedoch ein Array sein, wenn er abgeflacht werden soll.

### Alternative

#### Vorab zuweisen und explizit iterieren

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// is equivalent to
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

Beachten Sie, dass in diesem speziellen Fall der `flatMap`-Ansatz langsamer ist als der
for-loop-Ansatz — aufgrund der Erstellung temporärer Arrays, die
vom Garbage Collector gesammelt werden müssen, sowie des Rückgabearrays, das nicht häufig
größer gemacht werden muss. `flatMap` kann jedoch immer noch die richtige Lösung sein in Fällen, in denen
seine Flexibilität und Lesbarkeit gewünscht sind.

## Beispiele

### map() und flatMap()

```js
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

Während das obige mit map selbst erreicht werden könnte, ist hier ein Beispiel, das
die Verwendung von `flatMap()` besser veranschaulicht.

Lassen Sie uns eine Liste von Wörtern aus einer Liste von Sätzen erstellen.

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Beachten Sie, dass die Länge der Ausgabeliste von der Länge der Eingangsliste abweichen kann.

### Zum Hinzufügen und Entfernen von Elementen während einer map()

`flatMap` kann verwendet werden, um Elemente während einer `map` hinzuzufügen oder zu entfernen (die Anzahl der
Elemente zu ändern). Mit anderen Worten, es ermöglicht Ihnen, _viele Elemente auf viele Elemente_ abzubilden (indem jedes Eingabeelement separat behandelt wird), anstatt immer _eins zu eins_. In diesem Sinne funktioniert es wie das Gegenteil von [filter](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
Geben Sie ein 1-Element-Array zurück, um das Element zu behalten, ein Array mit mehreren Elementen, um Elemente hinzuzufügen, oder ein
0-Element-Array, um das Element zu entfernen.

```js
// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(result); // [4, 1, 4, 20, 16, 1, 18]
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um betriebene Stationen zu extrahieren, und verwendet dann `flatMap()`, um ein neues Array zu erstellen, bei dem jedes Element eine Station und ihre nächste Station enthält. Bei der letzten Station gibt es ein leeres Array zurück, um es von dem endgültigen Array auszuschließen.

```js
const stations = ["New Haven", "West Haven", "Milford (closed)", "Stratford"];
const line = stations
  .filter((name) => !name.endsWith("(closed)"))
  .flatMap((name, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === arr.length - 1) return []; // last station has no next station
    return [`${name} - ${arr[idx + 1]}`];
  });
console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']
```

Das `array`-Argument ist _nicht_ das Array, das erstellt wird — es gibt keine Möglichkeit, aus der Rückruffunktion auf das erstellte Array zuzugreifen.

### Verwenden von flatMap() auf spärlichen Arrays

Das `callbackFn` wird für leere Felder im Quellarray nicht aufgerufen, da `map()` dies nicht tut, während `flat()` leere Felder in den zurückgegebenen Arrays ignoriert.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Aufrufen von flatMap() auf Nicht-Array-Objekten

Die `flatMap()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist. Wenn der Rückgabewert der Rückruffunktion kein Array ist, wird er immer direkt zum Ergebnisarray hinzugefügt.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignored by flatMap() since length is 3
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// Array-like objects returned from the callback won't be flattened
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.flatMap` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.flatMap`](https://www.npmjs.com/package/array.prototype.flatmap)
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
