---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`flatMap()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues Array zurück, das durch Anwenden einer gegebenen Callback-Funktion auf jedes Element des Arrays gebildet wird und das Ergebnis dann um eine Ebene flach macht. Sie ist identisch mit einem {{jsxref("Array/map", "map()")}} gefolgt von einem {{jsxref("Array/flat", "flat()")}} der Tiefe 1 (`arr.map(...args).flat()`), ist jedoch etwas effizienter, als diese beiden Methoden separat aufzurufen.

{{EmbedInteractiveExample("pages/js/array-flatmap.html", "shorter")}}

## Syntax

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte ein Array zurückgeben, das neue Elemente des neuen Arrays enthält, oder einen einzelnen Wert, der dem neuen Array hinzugefügt wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das derzeit verarbeitete Element im Array.
    - `index`
      - : Der Index des derzeit verarbeiteten Elements im Array.
    - `array`
      - : Das Array, auf das `flatMap()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, bei dem jedes Element das Ergebnis der Callback-Funktion ist und um eine Tiefe von 1 flach gemacht wurde.

## Beschreibung

Die `flatMap()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Siehe {{jsxref("Array.prototype.map()")}} für eine detaillierte Beschreibung der Callback-Funktion. Die `flatMap()`-Methode ist identisch mit [`map(callbackFn, thisArg)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gefolgt von [`flat(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) – für jedes Element erzeugt sie ein Array neuer Elemente und fügt die resultierenden Arrays zu einem neuen Array zusammen. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

Die `flatMap()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length`-Eigenschaft und Integer-gezählte Eigenschaften hat. Der von `callbackFn` zurückgegebene Wert muss jedoch ein Array sein, wenn er flach gemacht werden soll.

### Alternative

#### Vorab allokieren und explizit iterieren

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

Beachten Sie, dass in diesem speziellen Fall der Ansatz von `flatMap` langsamer ist als der Ansatz mit der for-Schleife – aufgrund der Erstellung temporärer Arrays, die vom Garbage Collector verwaltet werden müssen, sowie des Rückgabearrays, das nicht häufig in seiner Größe geändert werden muss. Trotzdem kann `flatMap` in Fällen, in denen seine Flexibilität und Lesbarkeit gewünscht sind, die richtige Lösung sein.

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

Obwohl das Obige mit map selbst erreicht werden könnte, hier ein Beispiel, das die Verwendung von `flatMap()` besser veranschaulicht.

Lassen Sie uns eine Liste von Wörtern aus einer Liste von Sätzen generieren.

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Beachten Sie, dass die Länge der Ausgabeliste von der Länge der Eingabeliste abweichen kann.

### Zum Hinzufügen und Entfernen von Elementen während eines map()

`flatMap` kann verwendet werden, um Elemente hinzuzufügen oder zu entfernen (die Anzahl der Elemente zu ändern) während eines `map`. Mit anderen Worten, es ermöglicht Ihnen, _viele Elemente zu vielen Elementen_ zuzuordnen (indem jedes Eingabeelement separat behandelt wird), anstatt immer _eins-zu-eins_. In diesem Sinne funktioniert es wie das Gegenteil von [filter](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
Geben Sie ein Array mit einem Element zurück, um das Element beizubehalten, ein Array mit mehreren Elementen, um Elemente hinzuzufügen, oder ein Array mit 0 Elementen, um das Element zu entfernen.

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

### Verwendung des dritten Arguments von CallbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Im folgenden Beispiel wird zunächst `filter()` verwendet, um betriebsbereite Stationen zu extrahieren, und dann `flatMap()`, um ein neues Array zu erstellen, in dem jedes Element eine Station und ihre nächste Station enthält. Bei der letzten Station wird ein leeres Array zurückgegeben, um sie aus dem endgültigen Array auszuschließen.

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

Das `array`-Argument ist _nicht_ das Array, das aufgebaut wird – es gibt keine Möglichkeit, von der Callback-Funktion aus auf das Array zuzugreifen, das aufgebaut wird.

### Verwendung von flatMap() bei dünn besetzten Arrays

Das `callbackFn` wird für leere Plätze im Quellarray nicht aufgerufen, da `map()` dies nicht tut, während `flat()` leere Plätze in den zurückgegebenen Arrays ignoriert.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Aufruf von flatMap() auf Nicht-Array-Objekten

Die `flatMap()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist. Wenn der Rückgabewert der Callback-Funktion kein Array ist, wird er immer direkt an das Ergebnisarray angehängt.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
