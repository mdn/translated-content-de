---
title: Array.prototype.reduceRight()
short-title: reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`reduceRight()`** Methode von {{jsxref("Array")}} Instanzen wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um es auf einen einzigen Wert zu reduzieren.

Siehe auch {{jsxref("Array.prototype.reduce()")}} für von links nach rechts.

{{InteractiveExample("JavaScript Demo: Array.prototype.reduceRight()")}}

```js interactive-example
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
```

## Syntax

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben ist; andernfalls ist sein Wert das letzte Element des Arrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das letzte Element, falls `initialValue` angegeben ist; andernfalls ist sein Wert das vorletzte Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `array.length - 1`, falls `initialValue` angegeben ist, andernfalls `array.length - 2`.
    - `array`
      - : Das Array, auf dem `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Wert, der als Akkumulator beim ersten Aufruf der `callbackFn` verwendet wird. Wenn kein Initialwert angegeben ist, wird das letzte Element im Array verwendet und übersprungen. Der Aufruf von `reduceRight()` auf einem leeren Array ohne Initialwert erzeugt einen `TypeError`.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

Die `reduceRight()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reduzierer"-Callbackfunktion über alle Elemente im Array in absteigender Index-Reihenfolge aus und akkumuliert sie zu einem einzigen Wert. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Sie wird nicht für leere Slots in [sparsely arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduceRight()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, das mit `globalThis` ersetzt wird, wenn `callbackFn` nicht strikt ist.

Die `reduceRight()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und Integer-Index-Eigenschaften hat.

Alle Warnhinweise zu `reduce`, die in [wann man reduce nicht verwenden sollte](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce) diskutiert werden, gelten auch für `reduceRight`. Da JavaScript keine Lazy-Evaluations-Semantik hat, besteht kein Leistungsunterschied zwischen `reduce` und `reduceRight`.

## Beispiele

### Wie reduceRight() ohne einen Initialwert funktioniert

Der Aufruf der `reduceRight` `callbackFn` sähe ungefähr so aus:

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

Beim ersten Aufruf der Funktion können `accumulator` und `currentValue` einen von zwei Werten haben. Wenn ein `initialValue` bei dem Aufruf von `reduceRight` angegeben wurde, wird `accumulator` gleich `initialValue` und `currentValue` gleich dem letzten Wert im Array sein. Wenn kein `initialValue` angegeben wurde, wird `accumulator` gleich dem letzten Wert im Array und `currentValue` gleich dem vorletzten Wert sein.

Wenn das Array leer ist und kein `initialValue` angegeben wurde, würde ein {{jsxref("TypeError")}} ausgelöst. Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` angegeben wurde, oder wenn `initialValue` angegeben ist, aber das Array leer ist, wird der Solo-Wert zurückgegeben, ohne dass `callbackFn` aufgerufen wird.

Einige exemplarische Durchläufe der Funktion würden so aussehen:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

Der Callback würde viermal aufgerufen werden, mit den Argumenten und Rückgabewerten in jedem Aufruf wie folgt:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `4`           | `3`            | `3`     | `7`          |
| Zweiter Aufruf | `7`           | `2`            | `2`     | `9`          |
| Dritter Aufruf | `9`           | `1`            | `1`     | `10`         |
| Vierter Aufruf | `10`          | `0`            | `0`     | `10`         |

Der `array`-Parameter ändert sich während des Prozesses nie – es ist immer `[0, 1, 2, 3, 4]`. Der von `reduceRight` zurückgegebene Wert wäre der des letzten Callback-Aufrufs (`10`).

### Wie reduceRight() mit einem Initialwert funktioniert

Hier reduzieren wir dasselbe Array mit demselben Algorithmus, aber mit einem `initialValue` von `10`, der als zweites Argument an `reduceRight()` übergeben wird:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10,
);
```

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `4`            | `4`     | `14`         |
| Zweiter Aufruf | `14`          | `3`            | `3`     | `17`         |
| Dritter Aufruf | `17`          | `2`            | `2`     | `19`         |
| Vierter Aufruf | `19`          | `1`            | `1`     | `20`         |
| Fünfter Aufruf | `20`          | `0`            | `0`     | `20`         |

Der von `reduceRight` zurückgegebene Wert wäre dieses Mal natürlich `20`.

### Alle Werte innerhalb eines Arrays summieren

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6
```

### Eine Liste von asynchronen Funktionen mit Rückruffunktionen in Serie ausführen, wobei die Ergebnisse an die nächste Funktion weitergegeben werden

```js
const waterfall =
  (...functions) =>
  (callback, ...args) =>
    functions.reduceRight(
      (composition, fn) =>
        (...results) =>
          fn(composition, ...results),
      callback,
    )(...args);

const randInt = (max) => Math.floor(Math.random() * max);

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mul3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mul3, sub2, split, add, div4);
computation(console.log, 5); // Logs 14

// same as:

const computation2 = (input, callback) => {
  const f6 = (x) => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = (x) => split(f5, x);
  const f3 = (x) => sub2(f4, x);
  const f2 = (x) => mul3(f3, x);
  add5(f2, input);
};
```

### Unterschied zwischen reduce und reduceRight

```js
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left); // "12345"
console.log(right); // "54321"
```

### Komponierbare Funktionen definieren

Funktionskomposition ist ein Mechanismus zum Kombinieren von Funktionen, bei dem die Ausgabe jeder Funktion in die nächste übergeben wird und die Ausgabe der letzten Funktion das Endergebnis ist. In diesem Beispiel verwenden wir `reduceRight()`, um eine Funktionskomposition zu implementieren.

Siehe auch [Funktionskomposition](https://de.wikipedia.org/wiki/Funktionskomposition) in der Wikipedia.

```js
const compose =
  (...args) =>
  (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

// Increment passed number
const inc = (n) => n + 1;

// Doubles the passed value
const double = (n) => n * 2;

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
```

### Verwendung von reduceRight() mit Sparse Arrays

`reduceRight()` überspringt fehlende Elemente in Sparse Arrays, jedoch nicht `undefined`-Werte.

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### Aufruf von reduceRight() auf Nicht-Array-Objekten

Die `reduceRight()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // ignored by reduceRight() since length is 3
};
console.log(Array.prototype.reduceRight.call(arrayLike, (x, y) => x - y));
// -1, which is 4 - 3 - 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.reduceRight` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.reduceRight`](https://www.npmjs.com/package/array.prototype.reduceright)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
