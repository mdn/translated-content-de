---
title: Array.prototype.flatMap()
short-title: flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`flatMap()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues Array zurück, das durch Anwenden einer gegebenen Callback-Funktion auf jedes Element des Arrays gebildet wird und dann das Ergebnis um eine Ebene abflacht. Es ist identisch mit einem {{jsxref("Array/map", "map()")}} gefolgt von einem {{jsxref("Array/flat", "flat()")}} mit einer Tiefe von 1 (`arr.map(...args).flat()`), aber etwas effizienter als das separate Aufrufen dieser beiden Methoden.

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte ein Array mit neuen Elementen des neuen Arrays zurückgeben oder einen einzelnen Nicht-Array-Wert, der dem neuen Array hinzugefügt werden soll. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `flatMap()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, bei dem jedes Element das Ergebnis der Callback-Funktion ist und um eine Tiefe von 1 abgeflacht wurde.

## Beschreibung

Die `flatMap()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Siehe {{jsxref("Array.prototype.map()")}} für eine ausführliche Beschreibung der Callback-Funktion. Die `flatMap()`-Methode ist identisch mit [`map(callbackFn, thisArg)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gefolgt von [`flat(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) — für jedes Element erzeugt sie ein Array neuer Elemente und verkettet die daraus resultierenden Arrays zu einem neuen Array. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

Die `flatMap()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Eigenschaften hat. Jedoch muss der von `callbackFn` zurückgegebene Wert ein Array sein, wenn er abgeflacht werden soll.

### Alternative

#### Vorabzuweisung und explizites Iterieren

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

Beachten Sie, dass in diesem speziellen Fall der `flatMap`-Ansatz langsamer ist als der Schleifenansatz — aufgrund der Erstellung temporärer Arrays, die vom Garbage Collector gesammelt werden müssen, sowie des Rückgabe-Arrays, das nicht häufig resized werden muss. Trotzdem könnte `flatMap` die richtige Lösung in Fällen sein, in denen Flexibilität und Lesbarkeit gewünscht werden.

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

Obwohl das oben Genannte durch die Verwendung von map selbst erreicht werden könnte, ist hier ein Beispiel, das die Verwendung von `flatMap()` besser veranschaulicht.

Erstellen wir eine Liste von Wörtern aus einer Liste von Sätzen.

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Beachten Sie, dass die Länge der Ausgabeliste von der Länge der Eingabeliste abweichen kann.

### Zum Hinzufügen und Entfernen von Elementen während eines map()

`flatMap` kann als Mittel verwendet werden, um während eines `map` Elemente hinzuzufügen und zu entfernen (die Anzahl der Elemente zu ändern). Mit anderen Worten, es ermöglicht Ihnen, _viele Elemente zu vielen Elementen_ zuzuordnen (indem jedes Eingabeelement separat behandelt wird), anstatt immer _eins-zu-eins_. In diesem Sinne funktioniert es wie das Gegenteil von [filter](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Geben Sie ein 1-Element-Array zurück, um das Element zu behalten, ein mehrfach-Element-Array, um Elemente hinzuzufügen, oder ein 0-Element-Array, um das Element zu entfernen.

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

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um betriebsfähige Stationen herauszufiltern, und dann `flatMap()`, um ein neues Array zu erstellen, bei dem jedes Element eine Station und ihre nächste Station enthält. Bei der letzten Station gibt es ein leeres Array zurück, um sie aus dem endgültigen Array auszuschließen.

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

Das `array`-Argument ist _nicht_ das Array, das gerade aufgebaut wird — es gibt keine Möglichkeit, aus der Callback-Funktion auf das aufzubauende Array zuzugreifen.

### Verwendung von flatMap() auf spärlichen Arrays

Die `callbackFn` wird nicht für leere Plätze im Quell-Array aufgerufen, da `map()` dies nicht tut, während `flat()` leere Plätze in den zurückgegebenen Arrays ignoriert.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Aufruf von flatMap() auf Nicht-Array-Objekten

Die `flatMap()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl ist, die kleiner als `length` ist. Wenn der Rückgabewert der Callback-Funktion kein Array ist, wird er immer direkt dem Ergebnis-Array hinzugefügt.

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
- [es-shims polyfill von `Array.prototype.flatMap`](https://www.npmjs.com/package/array.prototype.flatmap)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
