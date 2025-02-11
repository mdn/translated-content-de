---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`flatMap()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues Array zurück, das durch die Anwendung einer gegebenen Callback-Funktion auf jedes Element des Arrays und anschließendem Abflachen des Ergebnisses um eine Ebene entsteht. Sie ist identisch zu einer Kombination aus {{jsxref("Array/map", "map()")}} und {{jsxref("Array/flat", "flat()")}} mit einer Tiefe von 1 (`arr.map(...args).flat()`), jedoch etwas effizienter als das separate Aufrufen dieser beiden Methoden.

{{InteractiveExample("JavaScript Demo: Array.flatMap()", "shorter")}}

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte ein Array zurückgeben, das neue Elemente für das neue Array enthält, oder einen einzelnen Wert, der dem neuen Array hinzugefügt wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `flatMap()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, bei dem jedes Element das Ergebnis der Callback-Funktion ist und das um eine Tiefe von 1 abgeflacht wurde.

## Beschreibung

Die `flatMap()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Siehe {{jsxref("Array.prototype.map()")}} für eine detaillierte Beschreibung der Callback-Funktion. Die `flatMap()`-Methode ist identisch zu [`map(callbackFn, thisArg)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), gefolgt von [`flat(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) — für jedes Element erzeugt sie ein Array neuer Elemente und verknüpft die resultierenden Arrays zu einem neuen Array. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

Die `flatMap()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Schlüssel-Eigenschaften hat. Allerdings muss der von `callbackFn` zurückgegebene Wert ein Array sein, wenn er abgeflacht werden soll.

### Alternative

#### Vorauszuteilen und explizit iterieren

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

Beachten Sie, dass in diesem speziellen Fall der Ansatz mit `flatMap` langsamer ist als der Ansatz mit der for-Schleife — aufgrund der Erstellung temporärer Arrays, die durch die Garbage Collection entsorgt werden müssen, sowie eines Rückgabe-Arrays, das nicht häufig angepasst werden muss. Jedoch kann `flatMap` dennoch die richtige Lösung sein, wenn seine Flexibilität und Lesbarkeit bevorzugt werden.

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

Während das oben genannte auch mit map möglich gewesen wäre, ist hier ein Beispiel, das die Verwendung von `flatMap()` besser verdeutlicht.

Erstellen wir eine Liste von Wörtern aus einer Liste von Sätzen.

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Beachten Sie, dass die Länge der Ausgangsliste von der Länge der Eingabeliste abweichen kann.

### Hinzufügen und Entfernen von Elementen während eines map()

`flatMap` kann verwendet werden, um Elemente hinzuzufügen oder zu entfernen (die Anzahl der Elemente zu modifizieren) während eines `map`. Mit anderen Worten, es ermöglicht Ihnen, _viele Elemente auf viele Elemente_ abzubilden (indem jedes Eingabeelement separat behandelt wird), anstatt immer _eins-zu-eins_. In diesem Sinne funktioniert es wie das Gegenteil von [filter](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Geben Sie ein Array mit einem Element zurück, um das Element beizubehalten, ein Array mit mehreren Elementen, um Elemente hinzuzufügen, oder ein Array mit null Elementen, um das Element zu entfernen.

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

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine bestehende Variable haben, die auf das Array verweist. Im folgenden Beispiel wird zunächst `filter()` verwendet, um funktionsfähige Stationen herauszufiltern, und anschließend `flatMap()`, um ein neues Array zu erzeugen, in dem jedes Element eine Station und deren nächste Station enthält. Für die letzte Station wird ein leeres Array zurückgegeben, um diese aus dem endgültigen Array auszuschließen.

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

Das `array`-Argument ist _nicht_ das Array, das erstellt wird — es gibt keine Möglichkeit, auf das erstellte Array aus der Callback-Funktion zuzugreifen.

### Verwendung von flatMap() auf sparsamen Arrays

`callbackFn` wird für leere Plätze im Quellarray nicht aufgerufen, da `map()` dies nicht tut, während `flat()` leere Plätze in den zurückgegebenen Arrays ignoriert.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Aufrufen von flatMap() auf Nicht-Array-Objekten

Die `flatMap()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl ist, die kleiner als `length` ist. Wenn der Rückgabewert der Callback-Funktion kein Array ist, wird er immer direkt an das Ergebnis-Array angehängt.

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

- [Polyfill für `Array.prototype.flatMap` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
