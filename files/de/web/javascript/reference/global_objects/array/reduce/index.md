---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`reduce()`** von {{jsxref("Array")}}-Instanzen führt eine vom Nutzer bereitgestellte "Reducer"-Callback-Funktion auf jedes Element des Arrays in Reihenfolge aus und gibt den Rückgabewert der Berechnung über das vorherige Element weiter. Das Endergebnis des Reducers über alle Elemente des Arrays ist ein einzelner Wert.

Beim ersten Aufruf des Callbacks gibt es keinen "Rückgabewert der vorherigen Berechnung". Falls angegeben, kann ein Anfangswert anstelle dessen verwendet werden. Andernfalls wird das Array-Element am Index 0 als Anfangswert verwendet und die Iteration beginnt mit dem nächsten Element (Index 1 statt Index 0).

{{InteractiveExample("JavaScript Demo: Array.reduce()")}}

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der vom vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben ist; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, falls `initialValue` angegeben ist, andernfalls `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `0`, falls `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf des Callbacks initialisiert wird.  
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert im Array als `currentValue`.  
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` mit dem ersten Wert im Array initialisiert, und `callbackFn` beginnt mit dem zweiten Wert im Array als `currentValue`. In diesem Fall, falls das Array leer ist (sodass kein erster Wert als `accumulator` zurückgegeben werden kann), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der vom vollständigen Durchlauf der "Reducer"-Callback-Funktion über das gesamte Array resultiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Array keine Elemente enthält und `initialValue` nicht angegeben wurde.

## Beschreibung

Die Methode `reduce()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reducer"-Callback-Funktion für alle Elemente im Array in aufsteigender Indexreihenfolge aus und akkumuliert diese zu einem einzigen Wert. Jedes Mal wird der Rückgabewert von `callbackFn` bei der nächsten Iteration als `accumulator` weitergegeben. Der Endwert von `accumulator` (der Wert, den `callbackFn` bei der letzten Iteration des Arrays zurückgibt) wird zum Rückgabewert von `reduce()`. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um weitere Informationen darüber zu erhalten, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Es wird nicht für leere Stellen in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduce()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, was durch `globalThis` ersetzt wird, wenn `callbackFn` nicht strikt ist.

`reduce()` ist ein zentrales Konzept in der [funktionalen Programmierung](https://de.wikipedia.org/wiki/Funktionale_Programmierung), in der es nicht möglich ist, Werte zu verändern. Daher muss, um alle Werte in einem Array zu akkumulieren, ein neuer Akkumulator-Wert bei jeder Iteration zurückgegeben werden. Diese Konvention überträgt sich auf JavaScripts `reduce()`-Methode: Es wird empfohlen, [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder andere Kopiermethoden zu nutzen, um neue Arrays und Objekte als Akkumulator zu erstellen, statt das bestehende zu verändern. Wenn Sie sich dafür entscheiden, den Akkumulator zu verändern, anstatt ihn zu kopieren, denken Sie daran, das modifizierte Objekt dennoch im Callback zurückzugeben, da ansonsten die nächste Iteration `undefined` erhält. Beachten Sie jedoch, dass das Kopieren des Akkumulators wiederum zu einer erhöhten Speichernutzung und schlechteren Leistung führen kann – siehe [Wann sollte reduce() nicht verwendet werden](#when_to_not_use_reduce) für weitere Details. In solchen Fällen ist es zur Vermeidung schlechter Leistung und unleserlichen Codes besser, eine `for`-Schleife zu verwenden.

Die Methode `reduce()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Es wird nur erwartet, dass der `this`-Wert eine `length`-Eigenschaft und integer-basierte Schlüssel enthält.

### Sonderfälle

Falls das Array nur ein Element enthält (unabhängig von dessen Position) und kein `initialValue` angegeben ist, oder falls `initialValue` angegeben ist, das Array jedoch leer ist, wird der Einzelwert _ohne_ Aufruf von `callbackFn` zurückgegeben.

Falls `initialValue` angegeben ist und das Array nicht leer ist, wird die `reduce()`-Methode immer die Callback-Funktion ab Index 0 ausführen.

Falls `initialValue` nicht angegeben ist, verhält sich die `reduce()`-Methode für Arrays mit einer Länge größer als 1, gleich 1 und 0 unterschiedlich, wie im folgenden Beispiel gezeigt:

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

### Wie reduce() ohne einen Anfangswert funktioniert

Im folgenden Code sehen Sie, was passiert, wenn `reduce()` mit einem Array und ohne Anfangswert aufgerufen wird.

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

Die Callback-Funktion würde viermal aufgerufen werden, mit folgenden Argumenten und Rückgabewerten bei jedem Aufruf:

|             | `accumulator` | `currentValue` | `index` | Rückgabewert |
| ----------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `15`          | `16`           | `1`     | `31`         |
| Zweiter Aufruf | `31`          | `17`           | `2`     | `48`         |
| Dritter Aufruf | `48`          | `18`           | `3`     | `66`         |
| Vierter Aufruf | `66`          | `19`           | `4`     | `85`         |

Der `array`-Parameter ändert sich während dieses Prozesses nie — er bleibt immer `[15, 16, 17, 18, 19]`. Der von `reduce()` zurückgegebene Wert ist der Rückgabewert des letzten Callback-Aufrufs (`85`).

### Wie reduce() mit einem Anfangswert funktioniert

Hier reduzieren wir dasselbe Array mit demselben Algorithmus, jedoch mit einem `initialValue` von `10`, der als zweites Argument an `reduce()` übergeben wird:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

Die Callback-Funktion würde fünfmal aufgerufen werden, mit folgenden Argumenten und Rückgabewerten bei jedem Aufruf:

|               | `accumulator` | `currentValue` | `index` | Rückgabewert |
| ------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `15`           | `0`     | `25`         |
| Zweiter Aufruf | `25`          | `16`           | `1`     | `41`         |
| Dritter Aufruf | `41`          | `17`           | `2`     | `58`         |
| Vierter Aufruf | `58`          | `18`           | `3`     | `76`         |
| Fünfter Aufruf | `76`          | `19`           | `4`     | `95`         |

Der von `reduce()` in diesem Fall zurückgegebene Wert wäre `95`.

### Summe von Werten in einem Objektarray

Um die Werte aus einem Array von Objekten zu summieren, **müssen** Sie einen `initialValue` angeben, damit jedes Element durch Ihre Funktion läuft.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Sequenzverkettung von Funktionen

Die Funktion `pipe` nimmt eine Sequenz von Funktionen und gibt eine neue Funktion zurück. Wenn die neue Funktion mit einem Argument aufgerufen wird, wird die Sequenz von Funktionen in Reihenfolge ausgeführt, wobei jede den Rückgabewert der vorherigen Funktion erhält.

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

[Promise-Sequenzierung](/de/docs/Web/JavaScript/Guide/Using_promises#composition) ist im Grunde die Demonstration der Funktionenverkettung im vorherigen Abschnitt, jedoch asynchron.

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

`asyncPipe` kann auch unter Verwendung von `async`/`await` implementiert werden, was seine Ähnlichkeit mit `pipe` besser zeigt:

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### Verwendung von reduce() mit lückenhaften Arrays

`reduce()` überspringt fehlende Elemente in lückenhaften Arrays, aber es überspringt keine Werte, die `undefined` sind.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Aufruf von reduce() auf Nicht-Array-Objekten

Die Methode `reduce()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl ist, die kleiner als `length` ist.

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

### Wann sollte reduce() nicht verwendet werden

Mehrzweck-Higher-Order-Funktionen wie `reduce()` können mächtig sein, jedoch manchmal schwer verständlich sein, insbesondere für weniger erfahrene JavaScript-Entwickler. Wenn Code durch die Verwendung anderer Array-Methoden klarer wird, müssen Entwickler den Lesbarkeitshandel gegenüber den anderen Vorteilen von `reduce()` abwägen.

Beachten Sie, dass `reduce()` immer gleichbedeutend mit einer `for...of`-Schleife ist, außer dass anstelle einer Änderung einer Variablen im oberen Bereich jetzt der neue Wert für jede Iteration zurückgegeben wird:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// Is equivalent to:
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Wie zuvor erwähnt, verwenden Entwickler `reduce()`, um funktionale Programmierpraktiken mit unveränderlichen Daten nachzuahmen. Daher kopieren Entwickler, die die Unveränderlichkeit des Akkumulators aufrechterhalten, oft den gesamten Akkumulator bei jeder Iteration, z. B. so:

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

Dieser Code hat schlechte Leistung, weil bei jeder Iteration das gesamte `allNames`-Objekt kopiert werden muss, was groß werden könnte, abhängig davon, wie viele einzigartige Namen es gibt. Dieser Code hat eine Worst-Case-Komplexität von `O(N^2)`, wobei `N` die Länge von `names` ist.

Eine bessere Alternative besteht darin, das `allNames`-Objekt bei jeder Iteration zu _modifizieren_. Wenn `allNames` sowieso verändert wird, könnten Sie die `reduce()`-Methode in eine `for`-Schleife umwandeln, was viel klarer ist:

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

Wenn Ihr Akkumulator ein Array oder ein Objekt ist und Sie dieses bei jeder Iteration kopieren, führen Sie möglicherweise versehentlich eine quadratische Komplexität in Ihren Code ein, was bei großen Daten zu schnell abfallender Leistung führt. Dies ist in der Praxis passiert — siehe z. B. [Making Tanstack Table 1000x faster with a 1 line change](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Einige der akzeptablen Anwendungsfälle von `reduce()` werden oben beschrieben (insbesondere das Summieren eines Arrays, Versprechen-Sequenzierung und Funktionenverkettung). Es gibt jedoch Fälle, in denen bessere Alternativen zu `reduce()` existieren.

- Zum Flachmachen eines Arrays von Arrays. Verwenden Sie {{jsxref("Array/flat", "flat()")}} statt dessen.

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- Gruppieren von Objekten nach einer Eigenschaft. Verwenden Sie {{jsxref("Object.groupBy()")}} stattdessen.

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

- Verketten von Arrays, die in einem Array von Objekten enthalten sind. Verwenden Sie {{jsxref("Array/flatMap", "flatMap()")}} stattdessen.

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

- Entfernen von Duplikaten in einem Array. Verwenden Sie {{jsxref("Set")}} und {{jsxref("Array.from()")}} stattdessen.

  ```js example-bad
  const uniqArray = array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  ```

  ```js example-good
  const uniqArray = Array.from(new Set(array));
  ```

- Eliminieren oder Hinzufügen von Elementen in einem Array. Verwenden Sie {{jsxref("Array/flatMap", "flatMap()")}} stattdessen.

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

- Suchen von Elementen oder Testen, ob Elemente eine Bedingung erfüllen. Verwenden Sie {{jsxref("Array/find", "find()")}}, {{jsxref("Array/find", "findIndex()")}}, {{jsxref("Array/some", "some()")}} und {{jsxref("Array/every", "every()")}}. Diese Methoden haben den Zusatzvorteil, dass sie aufhören, sobald das Ergebnis sicher ist, ohne das gesamte Array zu durchlaufen.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

In Fällen, in denen `reduce()` die beste Wahl ist, können Dokumentation und semantische Variablennamen helfen, Lesbarkeitsnachteile zu minimieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill of `Array.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
