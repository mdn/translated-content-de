---
title: Array.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`reduce()`**-Methode von {{jsxref("Array")}}-Instanzen führt eine benutzerdefinierte "Reducer"-Callback-Funktion für jedes Element des Arrays in Reihenfolge aus und übergibt dabei den Rückgabewert aus der Berechnung des vorhergehenden Elements. Das Endergebnis der Ausführung des Reducers über alle Elemente des Arrays ist ein einzelner Wert.

Beim ersten Aufruf des Callbacks gibt es keinen "Rückgabewert der vorherigen Berechnung". Wenn angegeben, kann stattdessen ein Anfangswert verwendet werden. Andernfalls wird das Array-Element an Index 0 als Anfangswert verwendet und die Iteration beginnt mit dem nächsten Element (Index 1 statt Index 0).

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Für den letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, wenn dieser angegeben ist; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, wenn `initialValue` angegeben ist; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das Array, auf das `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf des Callbacks initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert im Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` mit dem ersten Wert im Array initialisiert und `callbackFn` beginnt mit dem zweiten Wert im Array als `currentValue`. In diesem Fall, wenn das Array leer ist (sodass es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der aus der vollständigen Ausführung der "Reducer"-Callback-Funktion über das gesamte Array resultiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Array keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Die `reduce()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reducer"-Callback-Funktion für alle Elemente im Array in aufsteigender Index-Reihenfolge aus und akkumuliert sie zu einem einzigen Wert. Jedes Mal wird der Rückgabewert von `callbackFn` beim nächsten Aufruf erneut an `callbackFn` als `accumulator` übergeben. Der endgültige Wert von `accumulator` (der der Wert ist, der von `callbackFn` bei der letzten Iteration des Arrays zurückgegeben wird) wird zum Rückgabewert von `reduce()`. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Es wird nicht für leere Stellen in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduce()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, das durch `globalThis` ersetzt wird, wenn `callbackFn` nicht strikt ist.

`reduce()` ist ein zentrales Konzept in der [funktionalen Programmierung](https://en.wikipedia.org/wiki/Functional_programming), wo es nicht möglich ist, Werte zu verändern, sodass um alle Werte in einem Array zu akkumulieren, ein neuer Akkumulatorwert bei jeder Iteration zurückgegeben werden muss. Diese Konvention überträgt sich auf JavaScripts `reduce()`: Sie sollten [Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder andere Kopiermethoden verwenden, wo möglich, um neue Arrays und Objekte als Akkumulator zu erstellen, anstatt das bestehende zu verändern. Wenn Sie sich entscheiden, den Akkumulator anstelle dessen zu verändern, denken Sie daran, das modifizierte Objekt dennoch im Callback zurückzugeben, andernfalls erhält die nächste Iteration undefined. Beachten Sie jedoch, dass das Kopieren des Akkumulators wiederum zu erhöhtem Speicherverbrauch und verschlechterter Leistung führen kann – siehe [Wann reduce() nicht verwendet werden sollte](#when_to_not_use_reduce) für weitere Details. In solchen Fällen ist es besser, eine `for`-Schleife zu verwenden, um schlechte Leistung und unleserlichen Code zu vermeiden.

Die `reduce()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsselwerten hat.

### Grenzfälle

Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` bereitgestellt wird, oder wenn `initialValue` bereitgestellt wird, aber das Array leer ist, wird der Einzelwert _ohne_ einen Aufruf von `callbackFn` zurückgegeben.

Wenn `initialValue` bereitgestellt wird und das Array nicht leer ist, wird die Reduce-Methode immer die Callback-Funktion beginnend an Index 0 aufrufen.

Wenn `initialValue` nicht bereitgestellt wird, wird die Reduce-Methode für Arrays mit einer Länge größer als 1, gleich 1 und 0 unterschiedlich agieren, wie im folgenden Beispiel gezeigt:

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

### Wie reduce() ohne Anfangswert funktioniert

Der folgende Code zeigt, was passiert, wenn wir `reduce()` mit einem Array und ohne Anfangswert aufrufen.

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

Das Callback würde viermal aufgerufen werden, mit den Argumenten und Rückgabewerten in jedem Aufruf wie folgt:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `15`          | `16`           | `1`     | `31`         |
| Zweiter Aufruf | `31`          | `17`           | `2`     | `48`         |
| Dritter Aufruf | `48`          | `18`           | `3`     | `66`         |
| Vierter Aufruf | `66`          | `19`           | `4`     | `85`         |

Der `array`-Parameter ändert sich während des Prozesses nie – er bleibt immer `[15, 16, 17, 18, 19]`. Der von `reduce()` zurückgegebene Wert wäre der Wert aus dem letzten Callback-Aufruf (`85`).

### Wie reduce() mit einem Anfangswert funktioniert

Hier reduzieren wir das gleiche Array mit demselben Algorithmus, jedoch mit einem `initialValue` von `10`, der als zweites Argument zu `reduce()` übergeben wird:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

Das Callback würde fünfmal aufgerufen werden, mit den Argumenten und Rückgabewerten in jedem Aufruf wie folgt:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `15`           | `0`     | `25`         |
| Zweiter Aufruf | `25`          | `16`           | `1`     | `41`         |
| Dritter Aufruf | `41`          | `17`           | `2`     | `58`         |
| Vierter Aufruf | `58`          | `18`           | `3`     | `76`         |
| Fünfter Aufruf | `76`          | `19`           | `4`     | `95`         |

Der Wert, der in diesem Fall von `reduce()` zurückgegeben würde, wäre `95`.

### Summe der Werte in einem Objekt-Array

Um die Werte in einem Array von Objekten zu summieren, **müssen** Sie einen `initialValue` angeben, sodass jedes Element Ihre Funktion durchläuft.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Funktionale sequentielle Verknüpfung

Die `pipe`-Funktion nimmt eine Sequenz von Funktionen und gibt eine neue Funktion zurück. Wenn die neue Funktion mit einem Argument aufgerufen wird, werden die Funktionen in der Reihenfolge aufgerufen, wobei jede den Rückgabewert der vorherigen Funktion erhält.

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

### Promises in Reihenfolge ausführen

[Promise-Sequenzierung](/de/docs/Web/JavaScript/Guide/Using_promises#composition) ist im Wesentlichen die funktionale Verknüpfung, die im vorherigen Abschnitt erläutert wurde, jedoch asynchron.

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

`asyncPipe` kann auch unter Verwendung von `async`/`await` implementiert werden, was seine Ähnlichkeit mit `pipe` besser demonstriert:

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### Verwendung von reduce() mit dünn besetzten Arrays

`reduce()` überspringt fehlende Elemente in dünn besetzten Arrays, es überspringt jedoch keine `undefined`-Werte.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Aufrufen von reduce() bei Nicht-Array-Objekten

Die `reduce()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nichtnegativer Ganzzahlwert kleiner als `length` ist.

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

### Wann reduce() nicht verwendet werden sollte

Mehrzweck-Higher-Order-Funktionen wie `reduce()` können mächtig, aber manchmal schwierig zu verstehen sein, besonders für weniger erfahrene JavaScript-Entwickler. Wenn der Code durch die Verwendung anderer Array-Methoden klarer wird, müssen Entwickler den Kompromiss bei der Lesbarkeit gegen die anderen Vorteile von `reduce()` abwägen.

Beachten Sie, dass `reduce()` immer äquivalent zu einer `for...of`-Schleife ist, außer dass anstelle der Änderung einer Variablen im übergeordneten Bereich, wir jetzt den neuen Wert bei jeder Iteration zurückgeben:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// Is equivalent to:
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Wie zuvor erwähnt, möchten Menschen `reduce()` verwenden, um funktionale Programmierpraktiken immutablen Daten zu imitieren. Daher kopieren Entwickler, die die Unveränderlichkeit des Akkumulators aufrechterhalten, oft den gesamten Akkumulator bei jeder Iteration, so wie hier:

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

Dieser Code ist leistungsschwach, weil bei jeder Iteration das gesamte `allNames`-Objekt kopiert werden muss, welches groß sein könnte, je nachdem, wie viele eindeutige Namen es gibt. Dieser Code hat ein schlechtestes Fall `O(N^2)` Leistungsprofil, wobei `N` die Länge der `names` ist.

Eine bessere Alternative besteht darin, das `allNames`-Objekt bei jeder Iteration zu _verändern_. Wenn jedoch `allNames` ohnehin verändert wird, möchten Sie vielleicht das `reduce()` in eine `for`-Schleife umwandeln, was viel klarer ist:

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

Daher, wenn Ihr Akkumulator ein Array oder ein Objekt ist und Sie das Array oder Objekt bei jeder Iteration kopieren, können Sie versehentlich eine quadratische Komplexität in Ihren Code einführen, die dazu führt, dass die Leistung bei großen Daten schnell abnimmt. Dies ist in realem Code passiert – siehe zum Beispiel [Making Tanstack Table 1000x faster with a 1 line change](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Einige der akzeptablen Anwendungsfälle von `reduce()` wurden oben genannt (insbesondere das Summieren eines Arrays, Promise-Sequenzierung und Funktionsverknüpfung). Es gibt andere Fälle, in denen bessere Alternativen als `reduce()` existieren.

- Einflachen eines Arrays von Arrays. Verwenden Sie {{jsxref("Array/flat", "flat()")}} stattdessen.

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- Gruppierung von Objekten nach einer Eigenschaft. Verwenden Sie {{jsxref("Object.groupBy()")}} stattdessen.

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

- Verkettung von Arrays, die in einem Array von Objekten enthalten sind. Verwenden Sie {{jsxref("Array/flatMap", "flatMap()")}} stattdessen.

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

- Entfernen von doppelten Einträgen in einem Array. Verwenden Sie {{jsxref("Set")}} und {{jsxref("Array.from()")}} stattdessen.

  ```js example-bad
  const uniqArray = array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  ```

  ```js example-good
  const uniqArray = Array.from(new Set(array));
  ```

- Eliminierung oder Hinzufügen von Elementen in einem Array. Verwenden Sie {{jsxref("Array/flatMap", "flatMap()")}} stattdessen.

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

  Wenn Sie nur Elemente aus einem Array entfernen, können Sie auch {{jsxref("Array/filter", "filter()")}} verwenden.

- Suche nach Elementen oder Testen, ob Elemente eine Bedingung erfüllen. Verwenden Sie {{jsxref("Array/find", "find()")}} und {{jsxref("Array/find", "findIndex()")}}, oder {{jsxref("Array/some", "some()")}} und {{jsxref("Array/every", "every()")}} stattdessen. Diese Methoden haben den zusätzlichen Vorteil, dass sie zurückkehren, sobald das Ergebnis sicher ist, ohne das gesamte Array zu durchlaufen.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

In Fällen, in denen `reduce()` die beste Wahl ist, können Dokumentation und semantische Variablennamen helfen, Lesbarkeitsnachteile zu mildern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims polyfill von `Array.prototype.reduce`](https://www.npmjs.com/package/array.prototype.reduce)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
