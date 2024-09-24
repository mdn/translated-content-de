---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`flatMap()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues Array zurück, das durch Anwenden einer gegebenen Callback-Funktion auf jedes Element des Arrays gebildet wird und dann das Ergebnis um eine Ebene abflacht. Sie ist identisch zu einer {{jsxref("Array/map", "map()")}} gefolgt von einer {{jsxref("Array/flat", "flat()")}} mit einer Tiefe von 1 (`arr.map(...args).flat()`), aber geringfügig effizienter als der separate Aufruf dieser beiden Methoden.

{{EmbedInteractiveExample("pages/js/array-flatmap.html", "shorter")}}

## Syntax

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte ein Array zurückgeben, das neue Elemente des neuen Arrays enthält, oder einen einzelnen Nicht-Array-Wert, der dem neuen Array hinzugefügt werden soll. Die Funktion wird mit den folgenden Argumenten aufgerufen:
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

Die `flatMap()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Siehe {{jsxref("Array.prototype.map()")}} für eine detaillierte Beschreibung der Callback-Funktion. Die `flatMap()`-Methode ist identisch zu [`map(callbackFn, thisArg)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gefolgt von [`flat(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) — für jedes Element erzeugt sie ein Array neuer Elemente und konkateniert die resultierenden Arrays miteinander, um ein neues Array zu bilden. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

Die `flatMap()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat. Der Wert, der von `callbackFn` zurückgegeben wird, muss jedoch ein Array sein, wenn er abgeflacht werden soll.

### Alternative

#### Vorausverteilung und explizite Iteration

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// entspricht
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

Beachten Sie, dass in diesem speziellen Fall der `flatMap`-Ansatz langsamer als der For-Schleifen-Ansatz ist — aufgrund der Erstellung temporärer Arrays, die vom Garbage Collector gesammelt werden müssen, sowie des Rückgabe-Arrays, das nicht ständig in der Größe angepasst werden muss. Dennoch kann `flatMap` die richtige Lösung in Fällen sein, in denen seine Flexibilität und Lesbarkeit gewünscht sind.

## Beispiele

### map() und flatMap()

```js
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// nur eine Ebene wird abgeflacht
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

Während das oben Genannte durch die Nutzung von map selbst erreicht werden könnte, ist hier ein Beispiel, das die Verwendung von `flatMap()` besser veranschaulicht.

Lassen Sie uns eine Liste von Wörtern aus einer Liste von Sätzen erzeugen.

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Beachten Sie, dass sich die Länge der Ausgabeliste von der Länge der Eingabeliste unterscheiden kann.

### Hinzufügen und Entfernen von Elementen während eines map()

`flatMap` kann verwendet werden, um Elemente hinzuzufügen und zu entfernen (die Anzahl der Elemente zu ändern) während eines `map`. Mit anderen Worten, es ermöglicht Ihnen, _viele Elemente zu vielen Elementen_ abzubilden (indem jedes Eingabeelement separat behandelt wird), anstatt immer _eins-zu-eins_. In diesem Sinne funktioniert es wie das Gegenteil von [filter](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Geben Sie ein Array mit einem Element zurück, um das Element zu behalten, ein Array mit mehreren Elementen, um Elemente hinzuzufügen, oder ein Array mit keiner Elemente, um das Element zu entfernen.

```js
// Nehmen wir an, wir wollen alle negativen Zahlen entfernen
// und die ungeraden Zahlen in eine gerade Zahl und eine 1 aufteilen
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  |  \   x   x  |
//        [4,1, 4,  20, 16, 1,      18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(result); // [4, 1, 4, 20, 16, 1, 18]
```

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um funktionierende Stationen herauszufiltern, und verwendet dann `flatMap()`, um ein neues Array zu erstellen, bei dem jedes Element eine Station und ihre nächste Station enthält. Bei der letzten Station wird ein leeres Array zurückgegeben, um sie aus dem finalen Array auszuschließen.

```js
const stations = ["New Haven", "West Haven", "Milford (closed)", "Stratford"];
const line = stations
  .filter((name) => !name.endsWith("(closed)"))
  .flatMap((name, idx, arr) => {
    // Ohne das arr-Argument gibt es keine Möglichkeit, auf das
    // Zwischen-Array zuzugreifen, ohne es einer Variablen zuzuweisen.
    if (idx === arr.length - 1) return []; // letzte Station hat keine nächste Station
    return [`${name} - ${arr[idx + 1]}`];
  });
console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']
```

Das `array`-Argument ist _nicht_ das Array, das erstellt wird — es gibt keine Möglichkeit, auf das aus der Callback-Funktion heraus erstellte Array zuzugreifen.

### Verwendung von flatMap() auf spärlichen Arrays

Die `callbackFn` wird bei leeren Slots im Quell-Array nicht aufgerufen, da `map()` das nicht tut, während `flat()` leere Slots in den zurückgegebenen Arrays ignoriert.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Aufrufen von flatMap() auf nicht-Array-Objekten

Die `flatMap()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist. Wenn der Rückgabewert der Callback-Funktion kein Array ist, wird er immer direkt dem Ergebnisarray hinzugefügt.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // von flatMap() ignoriert, da Länge 3
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// Arrays-ähnliche Objekte, die von der Callback zurückgegeben werden, werden nicht abgeflacht
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.flatMap` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
