---
title: Array.prototype.reduceRight()
short-title: reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`reduceRight()`**-Methode von {{jsxref("Array")}}-Instanzen wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um es auf einen einzelnen Wert zu reduzieren.

Siehe auch {{jsxref("Array.prototype.reduce()")}} für von links nach rechts.

{{InteractiveExample("JavaScript Demo: Array.prototype.reduceRight()")}}

```js interactive-example
const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array.reduceRight((accumulator, currentValue) =>
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
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls letzterer angegeben ist; andernfalls ist sein Wert das letzte Element des Arrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das letzte Element, wenn `initialValue` angegeben ist; andernfalls ist sein Wert das vorletzte Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `array.length - 1`, wenn `initialValue` angegeben ist, andernfalls `array.length - 2`.
    - `array`
      - : Das Array, auf dem `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Wert, der als Akkumulator beim ersten Aufruf von `callbackFn` verwendet wird. Wenn kein Anfangswert angegeben wird, wird das letzte Element im Array verwendet und übersprungen. `reduceRight()` auf einem leeren Array ohne Anfangswert aufzurufen, erzeugt einen `TypeError`.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

Die `reduceRight()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reducer"-Callback-Funktion über alle Elemente im Array in absteigender Indexreihenfolge aus und akkumuliert sie zu einem einzigen Wert. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden allgemein funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Es wird nicht für leere Stellen in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduceRight()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, das ersetzt wird durch `globalThis`, wenn `callbackFn` nicht "strict" ist.

Die `reduceRight()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

Alle Vorbehalte zu `reduce`, die in [when to not use reduce()](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce) diskutiert werden, gelten auch für `reduceRight`. Da JavaScript keine Lazy-Evaluation-Semantik hat, gibt es keinen Leistungsunterschied zwischen `reduce` und `reduceRight`.

## Beispiele

### Wie reduceRight() ohne Anfangswert funktioniert

Der Aufruf der reduceRight-`callbackFn` könnte folgendermaßen aussehen:

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

Das erste Mal, wenn die Funktion aufgerufen wird, können der `accumulator` und `currentValue` einen von zwei Werten annehmen. Wenn ein `initialValue` im Aufruf von `reduceRight` angegeben wurde, wird `accumulator` gleich `initialValue` und `currentValue` wird gleich dem letzten Wert im Array. Wenn kein `initialValue` angegeben wurde, wird `accumulator` gleich dem letzten Wert im Array und `currentValue` gleich dem vorletzten Wert.

Wenn das Array leer ist und kein `initialValue` angegeben wurde, wird {{jsxref("TypeError")}} ausgelöst. Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` angegeben wurde oder wenn `initialValue` angegeben ist, aber das Array leer ist, würde der einzelne Wert ohne Aufruf von `callbackFn` zurückgegeben.

Einige Beispiel-Durchläufe der Funktion könnten so aussehen:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

Das Callback würde viermal aufgerufen, wobei die Argumente und Rückgabewerte bei jedem Aufruf wie folgt sind:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `4`           | `3`            | `3`     | `7`          |
| Zweiter Aufruf | `7`           | `2`            | `2`     | `9`          |
| Dritter Aufruf | `9`           | `1`            | `1`     | `10`         |
| Vierter Aufruf | `10`          | `0`            | `0`     | `10`         |

Der `array`-Parameter ändert sich während des Prozesses nie - es ist immer `[0, 1, 2, 3, 4]`. Der von `reduceRight` zurückgegebene Wert würde der des letzten Callback-Aufrufs sein (`10`).

### Wie reduceRight() mit einem Anfangswert funktioniert

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

Der von `reduceRight` zurückgegebene Wert wäre diesmal natürlich `20`.

### Alle Werte innerhalb eines Arrays aufsummieren

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6
```

### Eine Liste von asynchronen Funktionen mit Callbacks in Serie ausführen, wobei ihre Ergebnisse an die nächste weitergegeben werden

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

### Definition von komponierbaren Funktionen

Funktionskomposition ist ein Mechanismus zum Kombinieren von Funktionen, bei dem die Ausgabe jeder Funktion in die nächste eingespeist wird und die Ausgabe der letzten Funktion das Endergebnis ist. In diesem Beispiel verwenden wir `reduceRight()`, um die Funktionskomposition zu implementieren.

Siehe auch [Funktionskomposition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) auf Wikipedia.

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

### Verwendung von reduceRight() mit Sparse-Arrays

`reduceRight()` überspringt fehlende Elemente in Sparse-Arrays, aber es überspringt nicht `undefined`-Werte.

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### Aufruf von reduceRight() bei Nicht-Array-Objekten

Die `reduceRight()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl kleiner als `length` ist.

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
