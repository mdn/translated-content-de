---
title: Array.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`reduce()`**-Methode von {{jsxref("Array")}}-Instanzen führt eine vom Benutzer bereitgestellte "Reducer"-Rückruffunktion für jedes Element des Arrays in der vorgegebenen Reihenfolge aus, wobei der Rückgabewert der Berechnung des vorhergehenden Elements übergeben wird. Das Endergebnis des Ausführens des Reducers über alle Elemente des Arrays ist ein einzelner Wert.

Beim ersten Ausführen des Rückrufs gibt es keinen "Rückgabewert der vorherigen Berechnung". Wenn bereitgestellt, kann stattdessen ein Initialwert verwendet werden. Andernfalls wird das Array-Element am Index 0 als Initialwert verwendet und die Iteration beginnt mit dem nächsten Element (Index 1 statt Index 0).

{{InteractiveExample("JavaScript Demo: Array.prototype.reduce()")}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt werden soll. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert der Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der das Ergebnis des vorherigen Aufrufs von `callbackFn` ist. Beim ersten Aufruf ist sein Wert `initialValue`, falls letzterer angegeben ist; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, wenn `initialValue` angegeben ist; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den der `accumulator` beim ersten Aufruf des Rückrufs initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt die Ausführung von `callbackFn` mit dem ersten Wert im Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf den ersten Wert im Array initialisiert, und die Ausführung von `callbackFn` beginnt mit dem zweiten Wert im Array als `currentValue`. In diesem Fall wird ein Fehler ausgelöst, wenn das Array leer ist (so dass kein erster Wert zurückgegeben werden kann als `accumulator`).

### Rückgabewert

Der Wert, der aus der vollständigen Ausführung der "Reducer"-Rückruffunktion über das gesamte Array entsteht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Array keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Die `reduce()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reducer"-Rückruffunktion über alle Elemente im Array in aufsteigender Indexreihenfolge aus und kumuliert sie in einen einzigen Wert. Jedes Mal wird der Rückgabewert von `callbackFn` beim nächsten Aufruf erneut in `callbackFn` als `accumulator` übergeben. Der Endwert von `accumulator` (der Wert, der bei der letzten Iteration des Arrays von `callbackFn` zurückgegeben wird) wird zum Rückgabewert von `reduce()`. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, die zugewiesene Werte haben. Es wird nicht für leere Slots in [dünn besiedelten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduce()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, was durch `globalThis` ersetzt wird, wenn `callbackFn` nicht im strikten Modus ist.

`reduce()` ist ein zentrales Konzept in der [funktionalen Programmierung](https://en.wikipedia.org/wiki/Functional_programming), wo es nicht möglich ist, irgendeinen Wert zu verändern, daher muss man, um alle Werte in einem Array zu kumulieren, bei jeder Iteration einen neuen Akkumulatorwert zurückgeben. Diese Konvention überträgt sich auf das JavaScript-`reduce()`: Sie sollten [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder andere Kopiermethoden verwenden, wo möglich, um neue Arrays und Objekte als den Akkumulator zu erstellen, anstatt das vorhandene zu ändern. Wenn Sie sich entscheiden, den Akkumulator zu verändern, anstatt ihn zu kopieren, denken Sie daran, das modifizierte Objekt im Rückruf dennoch zurückzugeben, oder die nächste Iteration erhält undefined. Beachten Sie jedoch, dass das Kopieren des Akkumulators zu einem höheren Speicherverbrauch und einer verringerten Leistung führen kann — siehe [Wann Sie reduce() nicht verwenden sollten](#when_to_not_use_reduce) für weitere Details. In solchen Fällen, um schlechte Leistung und unlesbaren Code zu vermeiden, ist es besser, eine `for`-Schleife zu verwenden.

Die `reduce()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

### Randfälle

Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` bereitgestellt wird, oder wenn `initialValue` bereitgestellt wird, aber das Array leer ist, wird der Einzelwert _ohne_ Aufruf von `callbackFn` zurückgegeben.

Wenn `initialValue` bereitgestellt wird und das Array nicht leer ist, wird die Reduce-Methode die Rückruffunktion immer beginnend bei Index 0 aufrufen.

Wenn `initialValue` nicht bereitgestellt wird, verhält sich die Reduce-Methode für Arrays mit einer Länge größer als 1, gleich 1 und 0 wie im folgenden Beispiel gezeigt:

```js
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

## Beispiele

### Wie reduce() ohne einen Initialwert funktioniert

Der untenstehende Code zeigt, was passiert, wenn wir `reduce()` mit einem Array und ohne Initialwert aufrufen.

```js
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
```

Der Rückruf würde viermal aufgerufen werden, wobei die Argumente und Rückgabewerte bei jedem Aufruf wie folgt wären:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `15`          | `16`           | `1`     | `31`         |
| Zweiter Aufruf | `31`          | `17`           | `2`     | `48`         |
| Dritter Aufruf | `48`          | `18`           | `3`     | `66`         |
| Vierter Aufruf | `66`          | `19`           | `4`     | `85`         |

Der `array`-Parameter ändert sich während des Prozesses nie — er bleibt immer `[15, 16, 17, 18, 19]`. Der Wert, der von `reduce()` zurückgegeben wird, wäre der des letzten Rückrufs (`85`).

### Wie reduce() mit einem Initialwert funktioniert

Hier reduzieren wir dasselbe Array mit demselben Algorithmus, aber mit einem `initialValue` von `10`, der als zweites Argument an `reduce()` übergeben wird:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

Der Rückruf würde fünfmal aufgerufen werden, wobei die Argumente und Rückgabewerte bei jedem Aufruf wie folgt wären:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `15`           | `0`     | `25`         |
| Zweiter Aufruf | `25`          | `16`           | `1`     | `41`         |
| Dritter Aufruf | `41`          | `17`           | `2`     | `58`         |
| Vierter Aufruf | `58`          | `18`           | `3`     | `76`         |
| Fünfter Aufruf | `76`          | `19`           | `4`     | `95`         |

Der Wert, der in diesem Fall von `reduce()` zurückgegeben wird, wäre `95`.

### Summe der Werte in einem Objektarray

Um die Werte in einem Array von Objekten zusammenzufassen, müssen Sie einen `initialValue` angeben, damit jedes Element durch Ihre Funktion geleitet wird.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Funktionale Verkettung

Die `pipe`-Funktion nimmt eine Reihenfolge von Funktionen und gibt eine neue Funktion zurück. Wenn die neue Funktion mit einem Argument aufgerufen wird, werden die Funktionen in der Reihenfolge aufgerufen, wobei jede Funktion den Rückgabewert der vorherigen Funktion erhält.

```js
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Ausführung von Promises in Reihe

[Promise-Sequenzierung](/de/docs/Web/JavaScript/Guide/Using_promises#composition) ist im Wesentlichen wie funktionale Verkettung, die im vorherigen Abschnitt gezeigt wurde, jedoch asynchron.

```js
// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// Building blocks to use for composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// The composed functions can also return non-promises, because the values are
// all eventually wrapped in promises
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200
```

`asyncPipe` kann auch unter Verwendung von `async`/`await` implementiert werden, was ihre Ähnlichkeit zur `pipe` besser demonstriert:

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### Verwendung von reduce() mit dünn besiedelten Arrays

`reduce()` überspringt fehlende Elemente in dünn besiedelten Arrays, aber es überspringt keine `undefined`-Werte.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Aufruf von reduce() auf Nicht-Array-Objekten

Die `reduce()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // ignored by reduce() since length is 3
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
```

### Wann man reduce() nicht verwenden sollte

Höher geordnete Funktionen wie `reduce()` können mächtig, aber manchmal schwer verständlich sein, besonders für weniger erfahrene JavaScript-Entwickler. Wenn der Code klarer wird, wenn andere Array-Methoden verwendet werden, müssen Entwickler den Lesbarkeitskompromiss im Vergleich zu anderen Vorteilen der Verwendung von `reduce()` abwägen.

Beachten Sie, dass `reduce()` immer äquivalent zu einer `for...of`-Schleife ist, außer dass anstatt eine Variable im äußeren Bereich zu mutieren, wir nun den neuen Wert für jede Iteration zurückgeben:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// Is equivalent to:
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Wie zuvor erwähnt, verwenden Menschen `reduce()`, um funktionale Programmierungspraxen von nicht veränderbaren Daten zu imitieren. Daher kopieren Entwickler, die die Unveränderlichkeit des Akkumulators wahren, oft den gesamten Akkumulator für jede Iteration, wie hier:

```js example-bad
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = Object.hasOwn(allNames, name) ? allNames[name] : 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
```

Dieser Code ist schlecht in der Leistung, weil bei jeder Iteration das gesamte `allNames`-Objekt kopiert werden muss, was je nach Anzahl der eindeutigen Namen groß sein könnte. Dieser Code hat im schlimmsten Fall eine `O(N^2)`-Leistung, wobei `N` die Länge von `names` ist.

Eine bessere Alternative ist, das `allNames`-Objekt bei jeder Iteration zu _mutieren_. Wenn `allNames` allerdings sowieso mutiert wird, sollten Sie vielleicht `reduce()` in eine `for`-Schleife umwandeln, was viel klarer ist:

```js example-bad
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  allNames[name] = currCount + 1;
  // return allNames, otherwise the next iteration receives undefined
  return allNames;
}, Object.create(null));
```

```js example-good
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = Object.create(null);
for (const name of names) {
  const currCount = countedNames[name] ?? 0;
  countedNames[name] = currCount + 1;
}
```

Daher, wenn Ihr Akkumulator ein Array oder ein Objekt ist und Sie das Array oder das Objekt bei jeder Iteration kopieren, könnten Sie möglicherweise versehentlich quadratische Komplexität in Ihren Code einführen, was die Leistung bei großen Daten schnell verschlechtern kann. Dies ist bereits in echtem Code passiert — siehe zum Beispiel [Making Tanstack Table 1000x faster with a 1 line change](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Einige der akzeptablen Anwendungsfälle von `reduce()` sind oben angegeben (insbesondere das Summieren eines Arrays, die Sequenzierung von Promises und die funktionale Verkettung). Es gibt andere Fälle, in denen bessere Alternativen als `reduce()` existieren.

- Zusammenführen eines Arrays von Arrays. Verwenden Sie stattdessen {{jsxref("Array/flat", "flat()")}}.

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- Gruppierung von Objekten nach einer Eigenschaft. Verwenden Sie stattdessen {{jsxref("Object.groupBy()")}}.

  ```js example-bad
  const groups = array.reduce((acc, obj) => {
    const key = obj.name;
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
  ```

  ```js example-good
  const groups = Object.groupBy(array, (obj) => obj.name);
  ```

- Zusammenfügen von Arrays, die in einem Array von Objekten enthalten sind. Verwenden Sie stattdessen {{jsxref("Array/flatMap", "flatMap()")}}.

  ```js example-bad
  const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
  ];
  const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);
  ```

  ```js example-good
  const allBooks = friends.flatMap((person) => person.books);
  ```

- Entfernen von Duplikaten in einem Array. Verwenden Sie stattdessen {{jsxref("Set")}} und {{jsxref("Array.from()")}}.

  ```js example-bad
  const uniqArray = array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  ```

  ```js example-good
  const uniqArray = Array.from(new Set(array));
  ```

- Eliminieren oder Hinzufügen von Elementen in einem Array. Verwenden Sie stattdessen {{jsxref("Array/flatMap", "flatMap()")}}.

  ```js example-bad
  // Takes an array of numbers and splits perfect squares into its square roots
  const roots = array.reduce((acc, cur) => {
    if (cur < 0) return acc;
    const root = Math.sqrt(cur);
    if (Number.isInteger(root)) return [...acc, root, root];
    return [...acc, cur];
  }, []);
  ```

  ```js example-good
  const roots = array.flatMap((val) => {
    if (val < 0) return [];
    const root = Math.sqrt(val);
    if (Number.isInteger(root)) return [root, root];
    return [val];
  });
  ```

  Wenn Sie nur Elemente aus einem Array eliminieren, können Sie auch {{jsxref("Array/filter", "filter()")}} verwenden.

- Suchen nach Elementen oder Überprüfen, ob Elemente eine Bedingung erfüllen. Verwenden Sie {{jsxref("Array/find", "find()")}} und {{jsxref("Array/find", "findIndex()")}}, oder {{jsxref("Array/some", "some()")}} und {{jsxref("Array/every", "every()")}}, die zusätzlich den Vorteil haben, dass sie zurückkehren, sobald das Ergebnis sicher ist, ohne das gesamte Array zu durchlaufen.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

In Fällen, in denen `reduce()` die beste Wahl ist, können Dokumentation und semantische Variablennamen helfen, die Lesbarkeitsnachteile zu mindern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.reduce`](https://www.npmjs.com/package/array.prototype.reduce)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
