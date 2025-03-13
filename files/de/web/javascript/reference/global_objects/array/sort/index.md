---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("Array")}} Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe, nun sortierte, Array zurück. Die Standard-Sortierreihenfolge ist aufsteigend und basiert darauf, die Elemente in Strings umzuwandeln und dann ihre Sequenzen von UTF-16-Codeeinheitwerten zu vergleichen.

Die Zeit- und Speicherkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

Um die Elemente in einem Array zu sortieren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toSorted", "toSorted()")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype.sort()")}}

```js interactive-example
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
```

## Syntax

```js-nolint
sort()
sort(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}

  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `a`
      - : Das erste Element zum Vergleich. Wird niemals `undefined` sein.
    - `b`
      - : Das zweite Element zum Vergleich. Wird niemals `undefined` sein.

    Sie sollte eine Zahl zurückgeben, bei der:

    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich angesehen werden.

    Um sich dies zu merken, denken Sie daran, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wird die Funktion weggelassen, werden die Array-Elemente in Strings konvertiert und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, das nun sortiert ist. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wird `compareFn` nicht übergeben, werden alle nicht-`undefined` Array-Elemente sortiert, indem sie in Strings konvertiert und in der Reihenfolge der UTF-16-Codeeinheiten verglichen werden. Zum Beispiel kommt "banana" vor "cherry". In einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Strings konvertiert werden, kommt "80" vor "9" in der Unicode-Ordnung. Alle `undefined`-Elemente werden am Ende des Arrays sortiert.

Die `sort()`-Methode bewahrt leere Plätze. Wenn das Quell-Array [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Plätze ans Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen oberhalb von `\uFFFF` als zwei surrogat Codeeinheiten kodiert, im Bereich von `\uD800` - `\uDFFF`. Der Wert jeder Codeeinheit wird separat für den Vergleich berücksichtigt. Somit wird das Zeichen, das durch das Surrogatpaar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle nicht-`undefined`-Array-Elemente gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden ans Ende sortiert, ohne Aufruf von `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                                    |
| ------------------------------ | ----------------------------------------------------- |
| > 0                            | sortiere `a` nach `b`, z. B. `[b, a]`                 |
| < 0                            | sortiere `a` vor `b`, z. B. `[a, b]`                  |
| === 0                          | behalte die ursprüngliche Reihenfolge von `a` und `b` |

Daher hat die Vergleichsfunktion die folgende Form:

```js-nolint
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  } else if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

Formell wird vom Comparator erwartet, dass er die folgenden Eigenschaften besitzt, um ein korrektes Sortierverhalten zu gewährleisten:

- _Rein_: Der Comparator verändert nicht die Objekte, die verglichen werden, oder einen externen Zustand. (Dies ist wichtig, da keine Garantie besteht, _wann_ und _wie_ der Comparator aufgerufen wird, sodass kein spezieller Aufruf sichtbare Effekte nach außen hervorrufen sollte.)
- _Stabil_: Der Comparator gibt bei denselben Eingabepaaren dasselbe Ergebnis zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, hat `compareFn(a, c)` die gleiche Positivität wie die vorherigen beiden.

Ein Comparator, der die oben genannten Beschränkungen erfüllt, kann immer alle von `1`, `0` und `-1` zurückgeben oder konsistent `0` zurückgeben. Ein Comparator, der immer `0` zurückgibt, wird dazu führen, dass das Array überhaupt nicht geändert wird, ist aber trotzdem zuverlässig.

Der Standard-Lexikographische Comparator erfüllt alle oben genannten Anforderungen.

Um Zahlen statt Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (wenn es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-gekennzeichnete Eigenschaften hat. Obwohl Strings auch array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche Array, dann die sortierten Arrays. Die numerischen Arrays werden ohne eine Vergleichsfunktion und dann mit einer sortiert.

```js
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
```

### Sortierung von Arrays von Objekten

Arrays von Objekten können sortiert werden, indem der Wert einer ihrer Eigenschaften verglichen wird.

```js
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

### Sortierung von nicht-ASCII-Zeichen

Zum Sortieren von Strings mit nicht-{{Glossary("ASCII", "ASCII")}} Zeichen, also Strings mit Akzentzeichen (e, é, è, a, ä, etc.), Strings aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, sodass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortierung mit `map`

Der `compareFn` kann für jedes Element innerhalb des Arrays mehrfach aufgerufen werden. Je nach Natur der `compareFn` kann dies einen hohen Overhead darstellen. Je mehr Arbeit eine `compareFn` erledigt und je mehr Elemente es zu sortieren gibt, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) für das Sortieren zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die aktuellen Werte für die Sortierung in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

```js
// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);
```

Es gibt eine Open-Source-Bibliothek namens [mapsort](https://github.com/Pimm/mapsort), die diesen Ansatz anwendet.

### sort() gibt die Referenz auf dasselbe Array zurück

Die `sort()`-Methode gibt eine Referenz auf das ursprüngliche Array zurück, daher wird das Mutieren des zurückgegebenen Arrays das ursprüngliche Array ebenfalls verändern.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array wie andere Array-Methoden (z. B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) zurückgibt, verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}}-Methode. Alternativ können Sie eine flache Kopie machen, bevor Sie `sort()` aufrufen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Sortier-Stabilität

Seit Version 10 (oder ECMAScript 2019) diktiert die Spezifikation, dass `Array.prototype.sort` stabil ist.

Zum Beispiel, stellen Sie sich vor, Sie hätten eine Liste von Schülern zusammen mit ihren Noten. Beachten Sie, dass die Liste der Schüler bereits alphabetisch nach Namen vorsortiert ist:

```js
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
```

Nach dem Sortieren dieses Arrays nach `grade` in aufsteigender Reihenfolge:

```js
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

Wird die `students`-Variable dann den folgenden Wert haben:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig zu beachten, dass Schüler, die dieselbe Note haben (zum Beispiel Alex und Devlin), in der gleichen Reihenfolge bleiben wie vor dem Aufruf der Sortierung. Dies ist es, was ein stabiles Sortierverfahren garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Sortier-Stabilität nicht garantiert, was bedeuten könnte, dass Sie am Ende das Folgende erhalten:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortierung mit einem nicht wohlgeformten Comparator

Wenn eine Vergleichsfunktion nicht alle Regeln von Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität erfüllt, wie in der [Beschreibung](#beschreibung) erklärt, ist das Verhalten des Programms nicht wohldefiniert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn`-Funktion ist hier nicht wohlgeformt, weil sie nicht die Antisymmetrie erfüllt: wenn `a > b`, gibt sie `1` zurück; aber wenn man `a` und `b` vertauscht, gibt sie `0` statt eines negativen Werts zurück. Daher wird das resultierende Array in verschiedenen Engines unterschiedlich sein. Zum Beispiel würden V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortieren würde, als `[1, 1, 3, 4, 5, 9]`.

Wenn jedoch die `compareFn`-Funktion geringfügig geändert wird, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortiert V8 und JavaScriptCore sie absteigend, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey sie unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Implementierungsinkonsistenz wird immer empfohlen, Ihren Comparator wohlförmig zu gestalten, indem Sie die fünf Einschränkungen befolgen.

### Verwendung von sort() auf spärlichen Arrays

Leere Slots werden ans Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufruf von sort() auf Nicht-Array-Objekten

Die `sort()`-Methode liest die `length`-Eigenschaft von `this`. Sie sammelt dann alle vorhandenen integer-gekennzeichneten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn es fehlende Eigenschaften im Bereich gibt, werden die entsprechenden nachfolgenden Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht vorhandenen Eigenschaften zum Ende hin sortiert werden.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.sort.call(arrayLike));
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.sort` mit modernem Verhalten wie stabile Sortierung in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Dinge in V8 sortiert bekommen](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [Stabilität von `Array.prototype.sort`](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
