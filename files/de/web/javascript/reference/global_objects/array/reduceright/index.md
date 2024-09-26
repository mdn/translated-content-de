---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{JSRef}}

Die **`reduceRight()`** Methode von {{jsxref("Array")}} Instanzen wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um es auf einen einzigen Wert zu reduzieren.

Siehe auch {{jsxref("Array.prototype.reduce()")}} für von links nach rechts.

{{EmbedInteractiveExample("pages/js/array-reduce-right.html")}}

## Syntax

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator` Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben ist; andernfalls ist es der letzte Wert des Arrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das letzte Element, wenn `initialValue` angegeben ist; andernfalls ist es das vorletzte Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `array.length - 1`, wenn `initialValue` angegeben ist; andernfalls `array.length - 2`.
    - `array`
      - : Das Array, auf das `reduceRight()` angewendet wurde.
- `initialValue` {{optional_inline}}
  - : Wert, der als Akkumulator beim ersten Aufruf von `callbackFn` verwendet wird. Wird kein Initialwert übergeben, wird das letzte Element im Array verwendet und übersprungen. Der Aufruf von `reduceRight()` auf einem leeren Array ohne Initialwert erzeugt einen `TypeError`.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

Die `reduceRight()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine „Reducer“-Callback-Funktion über alle Elemente im Array in absteigender Indexreihenfolge aus und akkumuliert sie zu einem einzigen Wert. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Es wird nicht für leere Stellen in [dünnbesetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduceRight()` kein `thisArg` Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, das durch `globalThis` ersetzt wird, wenn `callbackFn` nicht strikt ist.

Die `reduceRight()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-indizierte Eigenschaften hat.

Alle in [wann man reduce() nicht verwenden sollte](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce) beschriebenen Vorbehalte gelten auch für `reduceRight`. Da JavaScript keine Semantik der verzögerten Auswertung hat, gibt es keinen Leistungsunterschied zwischen `reduce` und `reduceRight`.

## Beispiele

### Wie reduceRight() ohne einen Anfangswert funktioniert

Der Aufruf des `callbackFn` von reduceRight würde ungefähr so aussehen:

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

Beim ersten Aufruf der Funktion können der `accumulator` und der `currentValue` einen von zwei Werten haben. Wenn ein `initialValue` im Aufruf von `reduceRight` übergeben wurde, wird `accumulator` gleich `initialValue` und `currentValue` gleich dem letzten Wert im Array sein. Wenn kein `initialValue` übergeben wurde, wird `accumulator` gleich dem letzten Wert im Array sein und `currentValue` wird gleich dem vorletzten Wert sein.

Wenn das Array leer ist und kein `initialValue` übergeben wurde, wird {{jsxref("TypeError")}} ausgelöst. Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` übergeben wurde, oder wenn `initialValue` übergeben wird, aber das Array leer ist, wird der Einzelwert ohne Aufruf von `callbackFn` zurückgegeben.

Einige Beispiel-Durchläufe der Funktion würden so aussehen:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

Der Callback würde viermal aufgerufen, wobei die Argumente und Rückgabewerte bei jedem Aufruf wie folgt sind:

|             | `accumulator` | `currentValue` | `index` | Rückgabewert |
| ----------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `4`           | `3`            | `3`     | `7`          |
| Zweiter Aufruf | `7`           | `2`            | `2`     | `9`          |
| Dritter Aufruf | `9`           | `1`            | `1`     | `10`         |
| Vierter Aufruf | `10`          | `0`            | `0`     | `10`         |

Der `array` Parameter ändert sich nie während des Prozesses — es ist immer `[0, 1, 2, 3, 4]`. Der von `reduceRight` zurückgegebene Wert wäre der des letzten Callback-Aufrufs (`10`).

### Wie reduceRight() mit einem Anfangswert funktioniert

Hier reduzieren wir dasselbe Array mit demselben Algorithmus, aber mit einem `initialValue` von `10`, der als zweites Argument an `reduceRight()` übergeben wird:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10,
);
```

|             | `accumulator` | `currentValue` | `index` | Rückgabewert |
| ----------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `4`            | `4`     | `14`         |
| Zweiter Aufruf | `14`          | `3`            | `3`     | `17`         |
| Dritter Aufruf | `17`          | `2`            | `2`     | `19`         |
| Vierter Aufruf | `19`          | `1`            | `1`     | `20`         |
| Fünfter Aufruf | `20`          | `0`            | `0`     | `20`         |

Der von `reduceRight` zurückgegebene Wert wäre diesmal natürlich `20`.

### Alle Werte innerhalb eines Arrays summieren

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum ist 6
```

### Eine Liste von asynchronen Funktionen mit Callbacks in Reihe ausführen, wobei jede ihre Ergebnisse an die nächste übergibt

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
const mult3 = (callback, x) => {
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

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5); // Gibt 14 aus

// dasselbe wie:

const computation2 = (input, callback) => {
  const f6 = (x) => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = (x) => split(f5, x);
  const f3 = (x) => sub2(f4, x);
  const f2 = (x) => mult3(f3, x);
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

### Definieren von zusammensetzbaren Funktionen

Funktionskomposition ist ein Mechanismus zur Kombination von Funktionen, bei dem die Ausgabe jeder Funktion der nächsten übergeben wird und die Ausgabe der letzten Funktion das Endergebnis ist. In diesem Beispiel verwenden wir `reduceRight()`, um Funktionskomposition zu implementieren.

Siehe auch [Funktionskomposition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) auf Wikipedia.

```js
const compose =
  (...args) =>
  (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

// Erhöht die übergebene Zahl
const inc = (n) => n + 1;

// Verdoppelt den übergebenen Wert
const double = (n) => n * 2;

// Verwendung der Kompositionsfunktion
console.log(compose(double, inc)(2)); // 6

// Verwendung der Kompositionsfunktion
console.log(compose(inc, double)(2)); // 5
```

### Verwendung von reduceRight() mit dünnbesetzten Arrays

`reduceRight()` überspringt fehlende Elemente in dünnbesetzten Arrays, überspringt jedoch nicht `undefined` Werte.

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### Aufrufen von reduceRight() auf Nicht-Array-Objekten

Die `reduceRight()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // wird von reduceRight() ignoriert, da length 3 ist
};
console.log(Array.prototype.reduceRight.call(arrayLike, (x, y) => x - y));
// -1, das ist 4 - 3 - 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.reduceRight` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Anleitung zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}