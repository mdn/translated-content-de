---
title: Array.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`reduce()`** von {{jsxref("Array")}}-Instanzen führt für jedes Element des Arrays der Reihe nach eine bereitgestellte „Reducer“-Callback-Funktion aus. Dabei übergibt sie jeweils den Rückgabewert der Berechnung für das vorherige Element. Das Ergebnis der Verarbeitung aller Array-Elemente ist ein einzelner Wert.

Beim ersten Aufruf der Callback-Funktion gibt es noch keinen „Rückgabewert der vorherigen Berechnung“. Falls ein Anfangswert angegeben wurde, wird stattdessen dieser verwendet. Andernfalls dient das Array-Element an Index 0 als Anfangswert, und die Iteration beginnt beim nächsten Element (Index 1 statt Index 0).

{{InteractiveExample("JavaScript Demo: Array.prototype.reduce()")}}

```js interactive-example
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
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
  - : Eine Funktion, die für jedes Element des Arrays ausgeführt wird. Ihr Rückgabewert wird beim nächsten Aufruf von `callbackFn` zum Wert des Parameters `accumulator`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert aus dem vorherigen Aufruf von `callbackFn`. Beim ersten Aufruf ist sein Wert `initialValue`, sofern dieser angegeben wurde; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, wenn `initialValue` angegeben wurde; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben wurde, andernfalls `1`.
    - `array`
      - : Das Array, für das `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf der Callback-Funktion initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert des Arrays als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` mit dem ersten Wert des Arrays initialisiert, und `callbackFn` beginnt mit dem zweiten Wert des Arrays als `currentValue`. Ist das Array in diesem Fall leer, wird ein Fehler ausgelöst, da kein erster Wert für `accumulator` vorhanden ist.

### Rückgabewert

Der Wert, der entsteht, nachdem die „Reducer“-Callback-Funktion das gesamte Array verarbeitet hat.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Array keine Elemente enthält und `initialValue` nicht angegeben wurde.

## Beschreibung

Die Methode `reduce()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine „Reducer“-Callback-Funktion für alle Elemente des Arrays in aufsteigender Indexreihenfolge aus und fasst sie zu einem einzelnen Wert zusammen. Bei jedem weiteren Aufruf wird der Rückgabewert von `callbackFn` erneut als `accumulator` an `callbackFn` übergeben. Der endgültige Wert von `accumulator` – also der Rückgabewert von `callbackFn` bei der letzten Iteration – wird zum Rückgabewert von `reduce()`. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`callbackFn` wird nur für Array-Indizes aufgerufen, denen ein Wert zugewiesen ist. Für leere Positionen in [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird die Funktion nicht aufgerufen.

Anders als andere [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduce()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen. Wenn `callbackFn` nicht im strikten Modus ausgeführt wird, wird `undefined` durch `globalThis` ersetzt.

`reduce()` ist ein zentrales Konzept der [funktionalen Programmierung](https://en.wikipedia.org/wiki/Functional_programming). Dort dürfen Werte nicht verändert werden. Um alle Werte eines Arrays zusammenzufassen, muss daher bei jeder Iteration ein neuer Wert für den Akkumulator zurückgegeben werden. Diese Konvention gilt auch für `reduce()` in JavaScript: Verwenden Sie nach Möglichkeit die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder andere Methoden zum Kopieren, um neue Arrays und Objekte als Akkumulator zu erstellen, statt den vorhandenen Akkumulator zu verändern. Wenn Sie den Akkumulator dennoch verändern, denken Sie daran, das veränderte Objekt in der Callback-Funktion zurückzugeben. Andernfalls erhält die nächste Iteration `undefined`. Beachten Sie jedoch, dass das Kopieren des Akkumulators den Speicherverbrauch erhöhen und die Leistung verschlechtern kann. Weitere Einzelheiten finden Sie unter [Wann Sie reduce() nicht verwenden sollten](#when_to_not_use_reduce). In solchen Fällen ist eine `for`-Schleife die bessere Wahl, um schlechte Leistung und schwer lesbaren Code zu vermeiden.

Die Methode `reduce()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

### Grenzfälle

Wenn das Array nur ein Element enthält (unabhängig von dessen Position) und kein `initialValue` angegeben wurde, oder wenn `initialValue` angegeben wurde, das Array aber leer ist, wird der einzelne Wert zurückgegeben, _ohne_ `callbackFn` aufzurufen.

Wenn `initialValue` angegeben wurde und das Array nicht leer ist, ruft die Methode `reduce()` die Callback-Funktion immer beginnend bei Index 0 auf.

Wenn `initialValue` nicht angegeben wurde, verhält sich die Methode `reduce()` bei Arrays mit mehr als einem Element, genau einem Element und keinem Element unterschiedlich, wie das folgende Beispiel zeigt:

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

### So funktioniert reduce() ohne Anfangswert

Der folgende Code zeigt, was geschieht, wenn `reduce()` mit einem Array und ohne Anfangswert aufgerufen wird.

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

Die Callback-Funktion wird viermal aufgerufen. Die Argumente und Rückgabewerte der einzelnen Aufrufe sind:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `15`          | `16`           | `1`     | `31`         |
| Zweiter Aufruf | `31`          | `17`           | `2`     | `48`         |
| Dritter Aufruf | `48`          | `18`           | `3`     | `66`         |
| Vierter Aufruf | `66`          | `19`           | `4`     | `85`         |

Der Parameter `array` ändert sich während des gesamten Vorgangs nicht – er ist immer `[15, 16, 17, 18, 19]`. `reduce()` gibt den Wert des letzten Callback-Aufrufs zurück (`85`).

### So funktioniert reduce() mit einem Anfangswert

Hier wird dasselbe Array mit demselben Algorithmus verarbeitet. Als zweites Argument wird jedoch ein `initialValue` von `10` an `reduce()` übergeben:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

Die Callback-Funktion wird fünfmal aufgerufen. Die Argumente und Rückgabewerte der einzelnen Aufrufe sind:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `15`           | `0`     | `25`         |
| Zweiter Aufruf | `25`          | `16`           | `1`     | `41`         |
| Dritter Aufruf | `41`          | `17`           | `2`     | `58`         |
| Vierter Aufruf | `58`          | `18`           | `3`     | `76`         |
| Fünfter Aufruf | `76`          | `19`           | `4`     | `95`         |

In diesem Fall gibt `reduce()` den Wert `95` zurück.

### Werte in einem Array von Objekten summieren

Um die Werte in einem Array von Objekten zu summieren, **müssen** Sie einen `initialValue` angeben, damit jedes Element Ihre Funktion durchläuft.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Funktionen nacheinander verknüpfen

Die Funktion `pipe` nimmt eine Folge von Funktionen entgegen und gibt eine neue Funktion zurück. Wird die neue Funktion mit einem Argument aufgerufen, werden die Funktionen der Reihe nach aufgerufen. Jede erhält dabei den Rückgabewert der vorherigen Funktion.

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

### Promises nacheinander ausführen

Die [sequenzielle Ausführung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#composition) entspricht im Wesentlichen der im vorherigen Abschnitt gezeigten Verknüpfung von Funktionen, erfolgt jedoch asynchron.

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

`asyncPipe` lässt sich auch mit `async`/`await` implementieren. Dadurch wird die Ähnlichkeit mit `pipe` deutlicher:

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### reduce() mit Arrays mit Lücken verwenden

`reduce()` überspringt fehlende Elemente in Arrays mit Lücken, aber keine `undefined`-Werte.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### reduce() für Objekte aufrufen, die keine Arrays sind

Die Methode `reduce()` liest die `length`-Eigenschaft von `this` und greift anschließend auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist.

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

### Wann Sie reduce() nicht verwenden sollten

Vielseitige Funktionen höherer Ordnung wie `reduce()` können leistungsfähig sein, sind aber mitunter schwer zu verstehen – besonders für weniger erfahrene JavaScript-Entwickler. Wenn der Code durch andere Array-Methoden verständlicher wird, sollten Entwickler die bessere Lesbarkeit gegen die übrigen Vorteile von `reduce()` abwägen.

Beachten Sie, dass `reduce()` immer einer `for...of`-Schleife entspricht. Statt eine Variable im äußeren Gültigkeitsbereich zu verändern, geben wir dabei für jede Iteration den neuen Wert zurück:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// Is equivalent to:
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Wie bereits erwähnt, verwenden manche Entwickler `reduce()`, um die unveränderlichen Datenstrukturen der funktionalen Programmierung nachzubilden. Wer den Akkumulator unveränderlich halten möchte, kopiert daher häufig bei jeder Iteration den gesamten Akkumulator, etwa so:

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

Dieser Code ist wenig effizient, weil bei jeder Iteration das gesamte Objekt `allNames` kopiert werden muss. Je nach Anzahl eindeutiger Namen kann dieses Objekt groß sein. Im ungünstigsten Fall hat der Code eine Laufzeitkomplexität von `O(N^2)`, wobei `N` die Länge von `names` ist.

Eine bessere Alternative besteht darin, das Objekt `allNames` bei jeder Iteration zu _verändern_. Wenn `allNames` ohnehin verändert wird, können Sie `reduce()` jedoch auch durch eine deutlich verständlichere `for`-Schleife ersetzen:

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

Wenn Ihr Akkumulator ein Array oder Objekt ist und Sie es bei jeder Iteration kopieren, können Sie Ihrem Code also unbeabsichtigt quadratische Komplexität hinzufügen. Bei großen Datenmengen verschlechtert sich dadurch die Leistung schnell. Das ist bereits in realem Code vorgekommen – siehe beispielsweise [Making Tanstack Table 1000x faster with a 1 line change](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Einige sinnvolle Anwendungsfälle für `reduce()` wurden oben gezeigt, insbesondere das Summieren eines Arrays, die sequenzielle Ausführung von Promises und die Verknüpfung von Funktionen. In anderen Fällen gibt es bessere Alternativen zu `reduce()`.

- Ein Array aus Arrays abflachen. Verwenden Sie stattdessen {{jsxref("Array/flat", "flat()")}}.

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- Objekte nach einer Eigenschaft gruppieren. Verwenden Sie stattdessen {{jsxref("Object.groupBy()")}}.

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

- Arrays verketten, die in einem Array von Objekten enthalten sind. Verwenden Sie stattdessen {{jsxref("Array/flatMap", "flatMap()")}}.

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

- Doppelte Einträge aus einem Array entfernen. Verwenden Sie stattdessen {{jsxref("Set")}} und {{jsxref("Array.from()")}}.

  ```js example-bad
  const uniqArray = array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  ```

  ```js example-good
  const uniqArray = Array.from(new Set(array));
  ```

- Elemente in einem Array entfernen oder hinzufügen. Verwenden Sie stattdessen {{jsxref("Array/flatMap", "flatMap()")}}.

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

  Wenn Sie nur Elemente aus einem Array entfernen möchten, können Sie auch {{jsxref("Array/filter", "filter()")}} verwenden.

- Elemente suchen oder prüfen, ob Elemente eine Bedingung erfüllen. Verwenden Sie stattdessen {{jsxref("Array/find", "find()")}} und {{jsxref("Array/find", "findIndex()")}} oder {{jsxref("Array/some", "some()")}} und {{jsxref("Array/every", "every()")}}. Diese Methoden haben zusätzlich den Vorteil, dass sie zurückkehren, sobald das Ergebnis feststeht, ohne das gesamte Array zu durchlaufen.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

Wenn `reduce()` die beste Wahl ist, können Dokumentation und aussagekräftige Variablennamen die Nachteile für die Lesbarkeit verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.reduce` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.reduce` von es-shims](https://www.npmjs.com/package/array.prototype.reduce)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
