---
title: Array.prototype.flatMap()
short-title: flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`flatMap()`** von {{jsxref("Array")}}-Instanzen gibt ein neues Array zurück. Dazu wendet sie eine angegebene Callback-Funktion auf jedes Element des Arrays an und verflacht das Ergebnis anschließend um eine Ebene. Dies entspricht einem Aufruf von {{jsxref("Array/map", "map()")}} gefolgt von {{jsxref("Array/flat", "flat()")}} mit Tiefe 1 (`arr.map(...args).flat()`), ist aber etwas effizienter, als die beiden Methoden getrennt aufzurufen.

{{InteractiveExample("JavaScript Demo: Array.prototype.flatMap()", "shorter")}}

```js interactive-example
const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte entweder ein Array mit neuen Elementen für das neue Array oder einen einzelnen Wert, der kein Array ist und dem neuen Array hinzugefügt wird, zurückgeben. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `flatMap()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, dessen Elemente die Ergebnisse der Callback-Funktion sind und das um eine Ebene verflacht wurde.

## Beschreibung

Die Methode `flatMap()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Eine ausführliche Beschreibung der Callback-Funktion finden Sie unter {{jsxref("Array.prototype.map()")}}. Die Methode `flatMap()` entspricht [`map(callbackFn, thisArg)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gefolgt von [`flat(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat): Sie erzeugt für jedes Element ein Array neuer Elemente und verkettet die resultierenden Arrays zu einem neuen Array. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

Die Methode `flatMap()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt. Damit der von `callbackFn` zurückgegebene Wert verflacht wird, muss er allerdings ein Array sein.

### Alternative

#### Speicher vorab reservieren und explizit iterieren

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

Beachten Sie, dass der Ansatz mit `flatMap` in diesem speziellen Fall langsamer ist als der Ansatz mit einer for-Schleife. Der Grund dafür sind temporäre Arrays, die von der Garbage Collection bereinigt werden müssen, sowie die Tatsache, dass die Größe des Ergebnis-Arrays nicht häufig angepasst werden muss. Dennoch kann `flatMap` die richtige Lösung sein, wenn seine Flexibilität und Lesbarkeit gefragt sind.

## Beispiele

### map() und flatMap()

```js
const arr = [1, 2, 3, 4];

arr.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

Das obige Ergebnis hätte sich auch allein mit map erzielen lassen. Das folgende Beispiel veranschaulicht die Verwendung von `flatMap()` besser.

Erstellen wir aus einer Liste von Sätzen eine Liste von Wörtern.

```js
const arr = ["it's Sunny in", "", "California"];

arr.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Beachten Sie, dass die Länge der Ausgabeliste von der Länge der Eingabeliste abweichen kann.

### Elemente während eines map()-Aufrufs hinzufügen und entfernen

Mit `flatMap` können Sie während eines `map`-Aufrufs Elemente hinzufügen und entfernen, also die Anzahl der Elemente ändern. Anders ausgedrückt: Statt Elemente immer _eins zu eins_ abzubilden, können Sie _viele Elemente auf viele Elemente_ abbilden, indem Sie jedes Eingabeelement einzeln verarbeiten. In diesem Sinne funktioniert es wie das Gegenstück zu [filter](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Geben Sie ein Array mit einem Element zurück, um das Element beizubehalten, ein Array mit mehreren Elementen, um Elemente hinzuzufügen, oder ein leeres Array, um das Element zu entfernen.

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

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element des Arrays zugreifen möchten, insbesondere wenn keine Variable vorhanden ist, die auf das Array verweist. Im folgenden Beispiel werden zunächst mit `filter()` betriebsbereite Stationen ausgewählt. Anschließend wird mit `flatMap()` ein neues Array erstellt, dessen Elemente jeweils eine Station und die darauffolgende Station enthalten. Für die letzte Station wird ein leeres Array zurückgegeben, damit sie nicht im Ergebnis-Array erscheint.

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

Das Argument `array` ist _nicht_ das Array, das gerade erstellt wird. Von der Callback-Funktion aus kann nicht auf dieses Array zugegriffen werden.

### flatMap() mit Arrays mit unbelegten Positionen verwenden

`callbackFn` wird für unbelegte Positionen im Quell-Array nicht aufgerufen, da auch `map()` sie überspringt. `flat()` ignoriert außerdem unbelegte Positionen in den zurückgegebenen Arrays.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### flatMap() für Objekte aufrufen, die keine Arrays sind

Die Methode `flatMap()` liest die `length`-Eigenschaft von `this` und greift anschließend auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist. Ist der Rückgabewert der Callback-Funktion kein Array, wird er immer direkt an das Ergebnis-Array angehängt.

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

- [Polyfill für `Array.prototype.flatMap` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.flatMap` von es-shims](https://www.npmjs.com/package/array.prototype.flatmap)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
