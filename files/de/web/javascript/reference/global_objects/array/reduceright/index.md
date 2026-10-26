---
title: Array.prototype.reduceRight()
short-title: reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`reduceRight()`** von {{jsxref("Array")}}-Instanzen wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays an (von rechts nach links), um das Array auf einen einzelnen Wert zu reduzieren.

Für die Verarbeitung von links nach rechts siehe {{jsxref("Array.prototype.reduce()")}}.

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
  - : Eine Funktion, die für jedes Element des Arrays ausgeführt wird. Ihr Rückgabewert wird beim nächsten Aufruf von `callbackFn` zum Wert des Parameters `accumulator`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben wurde; andernfalls ist es das letzte Element des Arrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das letzte Element, falls `initialValue` angegeben wurde; andernfalls ist es das vorletzte Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `array.length - 1`, falls `initialValue` angegeben wurde; andernfalls ist es `array.length - 2`.
    - `array`
      - : Das Array, für das `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Der Wert, der beim ersten Aufruf von `callbackFn` als Akkumulator verwendet wird. Wenn kein Anfangswert angegeben wird, wird das letzte Element des Arrays dafür verwendet und bei der Verarbeitung übersprungen. Ein Aufruf von `reduceRight()` für ein leeres Array ohne Anfangswert löst einen `TypeError` aus.

### Rückgabewert

Der Wert, der sich aus der Reduktion ergibt.

## Beschreibung

Die Methode `reduceRight()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine „Reducer“-Callback-Funktion für alle Elemente des Arrays in absteigender Indexreihenfolge aus und fasst sie zu einem einzelnen Wert zusammen. Im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) erfahren Sie mehr darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Für leere Positionen in [spärlich besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird die Funktion nicht aufgerufen.

Anders als andere [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduceRight()` kein Argument `thisArg`. `callbackFn` wird immer mit `undefined` als `this` aufgerufen. Wenn `callbackFn` nicht im Strict Mode ausgeführt wird, wird `undefined` durch `globalThis` ersetzt.

Die Methode `reduceRight()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat.

Alle Hinweise zu `reduce` unter [Wann Sie reduce() nicht verwenden sollten](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce) gelten auch für `reduceRight`. Da JavaScript keine Lazy-Evaluation-Semantik hat, gibt es keinen Leistungsunterschied zwischen `reduce` und `reduceRight`.

## Beispiele

### Wie reduceRight() ohne Anfangswert funktioniert

Der Aufruf von `callbackFn` durch `reduceRight` sieht ungefähr so aus:

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

Beim ersten Aufruf der Funktion können `accumulator` und `currentValue` jeweils einen von zwei Werten haben. Wurde beim Aufruf von `reduceRight` ein `initialValue` angegeben, ist `accumulator` gleich `initialValue` und `currentValue` gleich dem letzten Wert im Array. Wurde kein `initialValue` angegeben, ist `accumulator` gleich dem letzten Wert im Array und `currentValue` gleich dem vorletzten Wert.

Ist das Array leer und wurde kein `initialValue` angegeben, wird ein {{jsxref("TypeError")}} ausgelöst. Hat das Array nur ein Element (unabhängig von dessen Position) und wurde kein `initialValue` angegeben, oder wurde `initialValue` angegeben, aber das Array ist leer, wird der einzige Wert zurückgegeben, ohne `callbackFn` aufzurufen.

Einige beispielhafte Abläufe der Funktion sehen so aus:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

Die Callback-Funktion wird viermal aufgerufen. Die Argumente und Rückgabewerte der einzelnen Aufrufe sind wie folgt:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `4`           | `3`            | `3`     | `7`          |
| Zweiter Aufruf | `7`           | `2`            | `2`     | `9`          |
| Dritter Aufruf | `9`           | `1`            | `1`     | `10`         |
| Vierter Aufruf | `10`          | `0`            | `0`     | `10`         |

Der Parameter `array` ändert sich während des Vorgangs nicht – er ist immer `[0, 1, 2, 3, 4]`. Der von `reduceRight` zurückgegebene Wert ist der Rückgabewert des letzten Callback-Aufrufs (`10`).

### Wie reduceRight() mit einem Anfangswert funktioniert

Hier reduzieren wir dasselbe Array mit demselben Algorithmus, übergeben aber `10` als `initialValue` im zweiten Argument an `reduceRight()`:

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

Der von `reduceRight` zurückgegebene Wert ist diesmal `20`.

### Alle Werte in einem Array summieren

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6
```

### Eine Liste asynchroner Funktionen mit Callbacks nacheinander ausführen und die Ergebnisse jeweils an die nächste Funktion weitergeben

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

### Kombinierbare Funktionen definieren

Funktionskomposition ist ein Mechanismus zum Kombinieren von Funktionen, bei dem die Ausgabe jeder Funktion an die nächste übergeben wird und die Ausgabe der letzten Funktion das Endergebnis ist. In diesem Beispiel verwenden wir `reduceRight()`, um Funktionskomposition zu implementieren.

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

### reduceRight() mit spärlich besetzten Arrays verwenden

`reduceRight()` überspringt fehlende Elemente in spärlich besetzten Arrays, aber keine `undefined`-Werte.

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### reduceRight() für Objekte aufrufen, die keine Arrays sind

Die Methode `reduceRight()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.reduceRight` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.reduceRight` von es-shims](https://www.npmjs.com/package/array.prototype.reduceright)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
