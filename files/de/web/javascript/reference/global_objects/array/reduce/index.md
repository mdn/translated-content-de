---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: 60f0dfbbd23c41062d0839376fae0ac0b3342ba9
---

{{JSRef}}

Die **`reduce()`**-Methode von {{jsxref("Array")}}-Instanzen führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion auf jedem Element des Arrays in Reihenfolge aus und übergibt den Rückgabewert der Berechnung des vorhergehenden Elements. Das Endergebnis der Ausführung des Reducers über alle Elemente des Arrays ist ein einzelner Wert.

Beim ersten Aufruf des Callbacks gibt es keinen "Rückgabewert der vorherigen Berechnung". Wenn angegeben, kann ein Anfangswert an seiner Stelle verwendet werden. Andernfalls wird das Array-Element an Index 0 als Anfangswert verwendet und die Iteration beginnt mit dem nächsten Element (Index 1 anstelle von Index 0).

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert der Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, wenn dieser angegeben ist, andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, wenn `initialValue` angegeben ist, andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Array. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den `accumulator` beim ersten Aufruf des Callbacks initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert im Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf den ersten Wert im Array initialisiert und `callbackFn` beginnt mit dem zweiten Wert im Array als `currentValue`. In diesem Fall wird, wenn das Array leer ist (sodass es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann), ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der aus der vollständigen Ausführung der "Reducer"-Callback-Funktion über das gesamte Array resultiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Array keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Die `reduce()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie führt eine "Reducer"-Callback-Funktion über alle Elemente im Array in aufsteigender Indexreihenfolge aus und akkumuliert sie zu einem einzelnen Wert. Jedes Mal wird der Rückgabewert von `callbackFn` beim nächsten Aufruf als `accumulator` wieder an `callbackFn` übergeben. Der endgültige Wert von `accumulator` (der Wert, der von `callbackFn` bei der letzten Iteration des Arrays zurückgegeben wird) wird zum Rückgabewert von `reduce()`. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Es wird nicht für leere Stellen in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Im Gegensatz zu anderen [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) akzeptiert `reduce()` kein `thisArg`-Argument. `callbackFn` wird immer mit `undefined` als `this` aufgerufen, was durch `globalThis` ersetzt wird, wenn `callbackFn` nicht strikt ist.

`reduce()` ist ein zentrales Konzept in der [funktionalen Programmierung](https://en.wikipedia.org/wiki/Functional_programming), wo es nicht möglich ist, einen Wert zu ändern, sodass zur Akkumulation aller Werte in einem Array bei jeder Iteration ein neuer Akkumulatorwert zurückgegeben werden muss. Diese Konvention propagiert sich auch auf das JavaScript-`reduce()`: Sie sollten [Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder andere Kopiermethoden verwenden, wo möglich, um neue Arrays und Objekte als Akkumulator zu erstellen, anstatt das vorhandene zu ändern. Wenn Sie sich entscheiden, den Akkumulator anstelle von einer Kopie zu mutieren, denken Sie daran, das geänderte Objekt im Callback zurückzugeben, ansonsten erhält die nächste Iteration `undefined`. Beachten Sie jedoch, dass das Kopieren des Akkumulators seinerseits zu erhöhtem Speicherverbrauch und verminderter Performance führen kann — siehe [Wann man reduce() nicht verwenden sollte](#when_to_not_use_reduce) für weitere Details. In solchen Fällen ist es besser, eine einfache `for`-Schleife zu verwenden, um schlechte Performance und unlesbaren Code zu vermeiden.

Die `reduce()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat.

### Edge-Cases

Wenn das Array nur ein Element hat (unabhängig von der Position) und kein `initialValue` angegeben wird, oder wenn `initialValue` angegeben wird, das Array jedoch leer ist, wird der einzelne Wert zurückgegeben _ohne_ `callbackFn` aufzurufen.

Wenn `initialValue` angegeben ist und das Array nicht leer ist, wird die Reduce-Methode immer die Callback-Funktion ab Index 0 aufrufen.

Wenn `initialValue` nicht angegeben wird, verhält sich die Reduce-Methode bei Arrays mit einer Länge größer als 1, gleich 1 und 0 unterschiedlich, wie im folgenden Beispiel gezeigt:

```js
const getMax = (a, b) => Math.max(a, b);

// callback wird für jedes Element im Array ab Index 0 aufgerufen
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback wird einmal für Element an Index 1 aufgerufen
[1, 100].reduce(getMax); // 100

// callback wird nicht aufgerufen
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

Der Callback würde viermal aufgerufen, wobei die Argumente und Rückgabewerte in jedem Aufruf wie folgt sind:

|             | `accumulator` | `currentValue` | `index` | Rückgabewert |
| ----------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `15`          | `16`           | `1`     | `31`         |
| Zweiter Aufruf | `31`          | `17`           | `2`     | `48`         |
| Dritter Aufruf | `48`          | `18`           | `3`     | `66`         |
| Vierter Aufruf | `66`          | `19`           | `4`     | `85`         |

Der `array`-Parameter ändert sich nie während des Prozesses — er bleibt immer `[15, 16, 17, 18, 19]`. Der von `reduce()` zurückgegebene Wert wäre der des letzten Callback-Aufrufs (`85`).

### Wie reduce() mit einem Anfangswert funktioniert

Hier reduzieren wir das gleiche Array mit dem gleichen Algorithmus, aber mit einem `initialValue` von `10`, der als zweites Argument an `reduce()` übergeben wird:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

Der Callback würde fünfmal aufgerufen, wobei die Argumente und Rückgabewerte in jedem Aufruf wie folgt sind:

|             | `accumulator` | `currentValue` | `index` | Rückgabewert |
| ----------- | ------------- | -------------- | ------- | ------------ |
| Erster Aufruf  | `10`          | `15`           | `0`     | `25`         |
| Zweiter Aufruf | `25`          | `16`           | `1`     | `41`         |
| Dritter Aufruf | `41`          | `17`           | `2`     | `58`         |
| Vierter Aufruf | `58`          | `18`           | `3`     | `76`         |
| Fünfter Aufruf | `76`          | `19`           | `4`     | `95`         |

Der von `reduce()` zurückgegebene Wert in diesem Fall wäre `95`.

### Summe der Werte in einem Objektarray

Um die in einem Array von Objekten enthaltenen Werte zu summieren, **müssen** Sie einen `initialValue` angeben, damit jedes Element Ihre Funktion durchläuft.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Funktionale Verkettung

Die `pipe`-Funktion nimmt eine Sequenz von Funktionen und gibt eine neue Funktion zurück. Wenn die neue Funktion mit einem Argument aufgerufen wird, werden die Funktionen der Reihe nach aufgerufen, wobei jede den Rückgabewert der vorherigen Funktion erhält.

```js
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Bausteine für die Verwendung zur Komposition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Zusammengesetzte Funktionen für die Multiplikation von bestimmten Werten
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Verwendung
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Ausführung von Promises in Folge

Die [Promise-Sequenzierung](/de/docs/Web/JavaScript/Guide/Using_promises#composition) ist im Wesentlichen funktionale Verkettung, wie im vorigen Abschnitt gezeigt, allerdings asynchron durchgeführt.

```js
// Vergleichen Sie dies mit pipe: fn(acc) wird zu acc.then(fn),
// und initialValue wird als Promise sichergestellt
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// Bausteine für die Verwendung zur Komposition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// Die zusammengesetzten Funktionen können auch keine Promises zurückgeben, da die Werte
// schließlich alle in Promises gehüllt sind
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

### Verwendung von reduce() mit sparse Arrays

`reduce()` überspringt fehlende Elemente in leeren Arrays, aber es überspringt nicht `undefined`-Werte.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Aufruf von reduce() auf Non-Array-Objekten

Die `reduce()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // wird von reduce() ignoriert, da length 3 ist
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
```

### Wann sollte man reduce() nicht verwenden

Vielzweck-Höherordnungsfunktionen wie `reduce()` können mächtig, aber manchmal schwer zu verstehen sein, besonders für weniger erfahrene JavaScript-Entwickler. Wenn der Code klarer wird, wenn andere Array-Methoden verwendet werden, müssen Entwickler die Lesbarkeit im Vergleich zu den anderen Vorteilen der Verwendung von `reduce()` abwägen.

Beachten Sie, dass `reduce()` immer gleichwertig zu einer `for...of`-Schleife ist, außer dass anstelle einer Variablen im oberen Scope zu mutieren, der neue Wert für jede Iteration zurückgegeben wird:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// Ist gleichwertig zu:
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Wie bereits erwähnt, verwenden Menschen `reduce()`, um funktionale Programmierpraktiken unveränderlicher Daten zu imitieren. Aus diesem Grund kopieren Entwickler, die die Unveränderlichkeit des Akkumulators einhalten, den gesamten Akkumulator bei jeder Iteration, wie folgt:

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

Dieser Code ist schlecht darin, Leistung zu bringen, da bei jeder Iteration das gesamte `allNames`-Objekt kopiert werden muss, was groß sein könnte, abhängig davon, wie viele einzigartige Namen vorhanden sind. Dieser Code hat eine Worst-Case-Leistung von `O(N^2)`, wobei `N` die Länge von `names` ist.

Eine bessere Alternative ist es, das `allNames`-Objekt bei jeder Iteration zu _mutieren_. Falls `allNames` aber sowieso mutiert wird, möchte man vielleicht das `reduce()` in eine einfache `for`-Schleife umwandeln, was viel klarer ist:

```js example-bad
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  allNames[name] = currCount + 1;
  // allNames returnen, andernfalls erhält die nächste Iteration undefined
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

Daher, wenn Ihr Akkumulator ein Array oder ein Objekt ist und Sie das Array oder Objekt bei jeder Iteration kopieren, könnten Sie versehentlich quadratische Komplexität in Ihren Code einführen, was zu schnell abnehmender Leistung bei großen Daten führt. Dies ist in realem Code geschehen — siehe beispielsweise [Making Tanstack Table 1000x faster with a 1 line change](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Einige der akzeptablen Anwendungsfälle von `reduce()` wurden oben gegeben (insbesondere die Summierung eines Arrays, die Promise-Sequenzierung und die funktionale Verkettung). Es gibt andere Fälle, in denen bessere Alternativen zu `reduce()` vorhanden sind.

- Flachmachen eines Arrays von Arrays. Verwenden Sie stattdessen {{jsxref("Array/flat", "flat()")}}.

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

- Verketten von Arrays, die in einem Array von Objekten enthalten sind. Verwenden Sie stattdessen {{jsxref("Array/flatMap", "flatMap()")}}.

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
  // Nimmt ein Array von Zahlen und teilt perfekte Quadrate in ihre Quadratwurzeln auf
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

- Suche nach Elementen oder Testen, ob Elemente eine Bedingung erfüllen. Verwenden Sie {{jsxref("Array/find", "find()")}} und {{jsxref("Array/find", "findIndex()")}} oder {{jsxref("Array/some", "some()")}} und {{jsxref("Array/every", "every()")}} stattdessen. Diese Methoden haben den zusätzlichen Vorteil, dass sie zurückkehren, sobald das Ergebnis sicher ist, ohne das gesamte Array zu durchlaufen.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

In Fällen, in denen `reduce()` die beste Wahl ist, können Dokumentation und semantische Variablenbenennung dazu beitragen, die Lesbarkeit zu verbessern.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
