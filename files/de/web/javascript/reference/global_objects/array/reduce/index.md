---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`reduce()`** Methode von {{jsxref("Array")}} -Instanzen führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion für jedes Element des Arrays in Reihenfolge aus und übergibt den Rückgabewert der Berechnung des vorhergehenden Elements. Das Endergebnis des Durchlaufs des Reducers über alle Elemente des Arrays ist ein einzelner Wert.

Beim ersten Ausführen des Rückrufs gibt es keinen "Rückgabewert der vorherigen Berechnung". Falls angegeben, kann stattdessen ein Startwert verwendet werden. Andernfalls wird das Array-Element am Index 0 als Startwert verwendet und die Iteration beginnt beim nächsten Element (Index 1 statt Index 0).

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben ist; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, falls `initialValue` angegeben ist; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `0`, falls `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das Array, auf das `reduce()` angewendet wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den der `accumulator` beim ersten Aufruf des Rückrufs initialisiert wird.
    Falls `initialValue` angegeben ist, beginnt `callbackFn` die Ausführung mit dem ersten Wert im Array als `currentValue`.
    Falls `initialValue` _nicht_ angegeben ist, wird der `accumulator` auf den ersten Wert im Array initialisiert und `callbackFn` beginnt die Ausführung mit dem zweiten Wert im Array als `currentValue`. In diesem Fall wird ein Fehler ausgelöst, wenn das Array leer ist (sodass kein erster Wert als `accumulator` zurückgegeben werden kann).

### Rückgabewert

Der Wert, der aus der vollständigen Ausführung der "Reducer"-Callback-Funktion über das gesamte Array resultiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Array keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Die `reduce()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reducer"-Callback-Funktion über alle Elemente im Array in aufsteigender Indexreihenfolge aus und sammelt sie in einem einzelnen Wert. Jedes Mal wird der Rückgabewert von `callbackFn` beim nächsten Aufruf wieder als `accumulator` in `callbackFn` übergeben. Der Endwert des `accumulator` (der Wert, der von `callbackFn` bei der letzten Iteration des Arrays zurückgegeben wird) wird zum Rückgabewert von `reduce()`. Lesen Sie den [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)-Abschnitt, um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen arbeiten.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Es wird nicht für leere Elemente in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Anders als andere [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduce()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, was durch `globalThis` ersetzt wird, wenn `callbackFn` nicht strikt ist.

`reduce()` ist ein zentrales Konzept in der [funktionalen Programmierung](https://en.wikipedia.org/wiki/Functional_programming), bei der es nicht möglich ist, einen Wert zu mutieren. Man muss daher bei jeder Iteration einen neuen Akkumulatorwert zurückgeben, um alle Werte in einem Array zu sammeln. Diese Konvention setzt sich in JavaScripts `reduce()` fort: Sie sollten [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder andere Kopiermethoden verwenden, um neue Arrays und Objekte als Akkumulator zu erstellen, anstatt das bestehende zu mutieren. Wenn Sie sich entscheiden, den Akkumulator zu ändern, anstatt ihn zu kopieren, denken Sie daran, das geänderte Objekt trotzdem im Rückruf zurückzugeben, oder die nächste Iteration erhält undefined. Beachten Sie jedoch, dass das Kopieren des Akkumulators zu erhöhtem Speicherverbrauch und schlechter Leistung führen kann — siehe [Wann man reduce() nicht verwenden sollte](#when_to_not_use_reduce) für weitere Details. In solchen Fällen ist es besser, um schlechter Leistung und unleserlichem Code vorzubeugen, eine `for`-Schleife zu verwenden.

Die `reduce()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der Wert von `this` über eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften verfügt.

### Spezialfälle

Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` angegeben ist, oder wenn `initialValue` angegeben ist, aber das Array leer ist, wird der Einzelwert _ohne_ Aufruf von `callbackFn` zurückgegeben.

Wenn `initialValue` angegeben ist und das Array nicht leer ist, wird die Callback-Funktion vom Reduce-Methodenaufruf immer bei Index 0 beginnen.

Wenn `initialValue` nicht angegeben wird, verhält sich die Reduce-Methode unterschiedlich für Arrays mit einer Länge größer als 1, gleich 1 und 0, wie im folgenden Beispiel gezeigt:

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

### Wie reduce() ohne Startwert funktioniert

Der folgende Code zeigt, was passiert, wenn `reduce()` mit einem Array und ohne Startwert aufgerufen wird.

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

Der Rückruf würde viermal aufgerufen, wobei die Argumente und Rückgabewerte bei jedem Aufruf wie folgt sind:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `15`          | `16`           | `1`     | `31`         |
| Zweiter Aufruf | `31`          | `17`           | `2`     | `48`         |
| Dritter Aufruf | `48`          | `18`           | `3`     | `66`         |
| Vierter Aufruf | `66`          | `19`           | `4`     | `85`         |

Der `array`-Parameter ändert sich während des Prozesses nie – er ist immer `[15, 16, 17, 18, 19]`. Der von `reduce()` zurückgegebene Wert wäre der des letzten Rückrufaufrufs (`85`).

### Wie reduce() mit einem Startwert funktioniert

Hier reduzieren wir das gleiche Array mit demselben Algorithmus, aber mit einem `initialValue` von `10`, der als zweites Argument an `reduce()` übergeben wird:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

Der Rückruf würde fünfmal aufgerufen, wobei die Argumente und Rückgabewerte bei jedem Aufruf wie folgt sind:

|                | `accumulator` | `currentValue` | `index` | Rückgabewert |
| -------------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `15`           | `0`     | `25`         |
| Zweiter Aufruf | `25`          | `16`           | `1`     | `41`         |
| Dritter Aufruf | `41`          | `17`           | `2`     | `58`         |
| Vierter Aufruf | `58`          | `18`           | `3`     | `76`         |
| Fünfter Aufruf | `76`          | `19`           | `4`     | `95`         |

Der von `reduce()` in diesem Fall zurückgegebene Wert wäre `95`.

### Summe der Werte in einem Objekt-Array

Um die Werte in einem Array von Objekten zusammenzufassen, **müssen** Sie einen `initialValue` bereitstellen, damit jedes Element Ihre Funktion durchläuft.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Funktionale Verkettung

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

### Ausführung von Promises in Folge

[Promise-Sequencing](/de/docs/Web/JavaScript/Guide/Using_promises#composition) ist im Wesentlichen die funktionale Verkettung, die im vorherigen Abschnitt demonstriert wurde, nur asynchron.

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

`asyncPipe` kann auch mit `async`/`await` implementiert werden, was seine Ähnlichkeit mit `pipe` besser demonstriert:

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### Verwendung von reduce() mit spärlich besetzten Arrays

`reduce()` überspringt fehlende Elemente in spärlich besetzten Arrays, aber es überspringt nicht `undefined`-Werte.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Aufruf von reduce() für Objekte, die keine Arrays sind

Die `reduce()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl kleiner als `length` ist.

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

Vielseitige Funktionen höherer Ordnung wie `reduce()` können mächtig, aber manchmal schwer verständlich sein, besonders für weniger erfahrene JavaScript-Entwickler. Wenn der Code klarer wird, wenn andere Array-Methoden verwendet werden, müssen Entwickler den Abwägung zwischen Lesbarkeit und den anderen Vorteilen der Verwendung von `reduce()` berücksichtigen.

Beachten Sie, dass `reduce()` immer zu einer `for...of` Schleife äquivalent ist, außer dass anstelle einer Variablen im äußeren Bereich zu mutieren, wir jetzt den neuen Wert für jede Iteration zurückgeben:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// Is equivalent to:
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Wie bereits erwähnt, warum Leute `reduce()` verwenden möchten, ist, um Praktiken der funktionalen Programmierung mit immutable Daten zu imitieren. Daher kopieren Entwickler, die die Unveränderlichkeit des Akkumulators beibehalten, oft den gesamten Akkumulator bei jeder Iteration, so:

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

Dieser Code ist leistungsschwach, da bei jeder Iteration das gesamte `allNames`-Objekt kopiert werden muss, das je nach Anzahl der eindeutigen Namen groß sein könnte. Dieser Code hat im schlimmsten Fall `O(N^2)`-Leistung, wobei `N` die Länge von `names` ist.

Eine bessere Alternative ist es, das `allNames`-Objekt bei jeder Iteration zu _mutieren_. Wenn jedoch `allNames` ohnehin mutiert wird, möchten Sie möglicherweise das `reduce()` in eine `for`-Schleife umwandeln, die wesentlich klarer ist:

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

Wenn also Ihr Akkumulator ein Array oder ein Objekt ist und Sie das Array oder Objekt bei jeder Iteration kopieren, könnten Sie versehentlich eine quadratische Komplexität in Ihren Code einführen, was die Leistung bei großen Daten schnell verschlechtern kann. Dies ist in echten Codes vorgekommen – siehe zum Beispiel [Making Tanstack Table 1000x faster with a 1 line change](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Einige der akzeptablen Anwendungsfälle von `reduce()` werden oben angegeben (vor allem das Aufsummieren eines Arrays, das Sequenzieren von Promises und die funktionale Verkettung). Es gibt jedoch andere Fälle, in denen bessere Alternativen zu `reduce()` existieren.

- Das Flatten eines Arrays von Arrays. Verwenden Sie stattdessen {{jsxref("Array/flat", "flat()")}}.

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- Gruppieren von Objekten nach einer Eigenschaft. Verwenden Sie stattdessen {{jsxref("Object.groupBy()")}}.

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

- Konkatenation von Arrays, die in einem Array von Objekten enthalten sind. Verwenden Sie stattdessen {{jsxref("Array/flatMap", "flatMap()")}}.

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

- Entfernen doppelter Elemente in einem Array. Verwenden Sie stattdessen {{jsxref("Set")}} und {{jsxref("Array.from()")}}.

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

- Suchen von Elementen oder Testen, ob Elemente eine Bedingung erfüllen. Verwenden Sie statt dessen {{jsxref("Array/find", "find()")}} und {{jsxref("Array/find", "findIndex()")}}, oder {{jsxref("Array/some", "some()")}} und {{jsxref("Array/every", "every()")}}. Diese Methoden haben den zusätzlichen Vorteil, dass sie zurückgegeben werden, sobald das Ergebnis sicher ist, ohne das gesamte Array zu iterieren.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

In Fällen, in denen `reduce()` die beste Wahl ist, können Dokumentation und semantische Variablennamen helfen, Lesbarkeitseinbußen zu mildern.

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
