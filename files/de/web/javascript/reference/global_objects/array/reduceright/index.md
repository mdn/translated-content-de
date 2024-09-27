---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{JSRef}}

Die **`reduceRight()`**-Methode von {{jsxref("Array")}}-Instanzen wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um es auf einen einzigen Wert zu reduzieren.

Siehe auch {{jsxref("Array.prototype.reduce()")}} für von links nach rechts.

{{EmbedInteractiveExample("pages/js/array-reduce-right.html")}}

## Syntax

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt werden soll. Deren Rückgabewert wird der Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf entspricht sein Wert `initialValue`, wenn letzteres angegeben ist; andernfalls ist es der letzte Wert des Arrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert der letzte Wert, wenn `initialValue` angegeben ist; andernfalls ist es der vorletzte Wert.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf entspricht sein Wert `array.length - 1`, wenn `initialValue` angegeben ist; andernfalls `array.length - 2`.
    - `array`
      - : Das Array, auf dem `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Wert, der als Akkumulator beim ersten Aufruf von `callbackFn` verwendet wird. Wenn kein Initialwert angegeben wird, wird das letzte Element im Array verwendet und übersprungen. Das Aufrufen von `reduceRight()` auf einem leeren Array ohne Initialwert führt zu einem `TypeError`.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

Die `reduceRight()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reducer"-Callbackfunktion über alle Elemente des Arrays aus, in absteigender Indexreihenfolge, und akkumuliert sie zu einem einzigen Wert. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, die zugewiesene Werte haben. Es wird nicht für leere Slots in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduceRight()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, welches durch `globalThis` ersetzt wird, wenn `callbackFn` nicht strikt ist.

Die `reduceRight()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Schlüsselwerteigenschaften hat.

Alle Warnhinweise bezüglich `reduce`, die in [wann man reduce nicht verwenden sollte](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce) besprochen werden, gelten auch für `reduceRight`. Da JavaScript keine Lazy-Evaluation-Semantik hat, gibt es keinen Leistungsunterschied zwischen `reduce` und `reduceRight`.

## Beispiele

### Wie reduceRight() ohne Anfangswert funktioniert

Der Aufruf von `reduceRight` `callbackFn` würde in etwa so aussehen:

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

Beim ersten Aufruf der Funktion können `accumulator` und `currentValue` einen von zwei Werten haben. Wenn ein `initialValue` im Aufruf von `reduceRight` angegeben wurde, ist `accumulator` gleich `initialValue` und `currentValue` gleich dem letzten Wert im Array. Wenn kein `initialValue` angegeben wurde, ist `accumulator` gleich dem letzten Wert im Array und `currentValue` gleich dem vorletzten Wert.

Wenn das Array leer ist und kein `initialValue` angegeben wurde, wird {{jsxref("TypeError")}} ausgelöst. Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` angegeben wurde, oder wenn `initialValue` angegeben wird, das Array jedoch leer ist, wird der Einzelwert ohne Aufruf von `callbackFn` zurückgegeben.

Einige Beispiel-Durchläufe der Funktion würden etwa so aussehen:

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

Der `array`-Parameter ändert sich während des Prozesses nie — er ist immer `[0, 1, 2, 3, 4]`. Der von `reduceRight` zurückgegebene Wert wäre der des letzten Callback-Aufrufs (`10`).

### Wie reduceRight() mit Anfangswert funktioniert

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

### Alle Werte innerhalb eines Arrays summieren

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6
```

### Eine Liste von asynchronen Funktionen mit Callbacks in Serie ausführen, die jeweils ihre Ergebnisse an die nächste weitergeben

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
computation(console.log, 5); // Logs 14

// same as:

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

### Komponierbare Funktionen definieren

Funktionale Komposition ist ein Mechanismus zum Kombinieren von Funktionen, bei dem die Ausgabe jeder Funktion in die nächste übergeben wird und die Ausgabe der letzten Funktion das Endergebnis ist. In diesem Beispiel verwenden wir `reduceRight()`, um die funktionale Komposition zu implementieren.

Siehe auch [Function composition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) auf Wikipedia.

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

### Verwendung von reduceRight() mit lückenhaften Arrays

`reduceRight()` überspringt fehlende Elemente in lückenhaften Arrays, aber es überspringt keine `undefined`-Werte.

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### Aufrufen von reduceRight() auf Nicht-Array-Objekten

Die Methode `reduceRight()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nicht-negativer Integer kleiner als `length` ist.

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
- [Indizierte Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
