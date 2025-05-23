---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("Array")}}-Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe, nun sortierte, Array zurück. Die Standardsortierreihenfolge ist aufsteigend, wobei die Elemente in Zeichenfolgen umgewandelt und deren Reihenfolgen der UTF-16-Codeeinheiten verglichen werden.

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
      - : Das erste Element für den Vergleich. Wird niemals `undefined` sein.
    - `b`
      - : Das zweite Element für den Vergleich. Wird niemals `undefined` sein.

    Es sollte eine Zahl zurückgegeben werden, wobei:

    - Ein negativer Wert bedeutet, dass `a` vor `b` stehen sollte.
    - Ein positiver Wert bedeutet, dass `a` nach `b` stehen sollte.
    - Null oder `NaN` bedeutet, dass `a` und `b` als gleich angesehen werden.

    Merken Sie sich, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wenn weggelassen, werden die Array-Elemente in Zeichenfolgen umgewandelt und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche, nun sortierte Array. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht angegeben ist, werden alle nicht-`undefined`-Array-Elemente durch Umwandlung in Zeichenfolgen sortiert und die Zeichenfolgen in UTF-16-Codeeinheiten Reihenfolge verglichen. Zum Beispiel kommt "banana" vor "cherry". In einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Zeichenfolgen umgewandelt werden, kommt "80" vor "9" in der Unicode-Reihenfolge. Alle `undefined`-Elemente werden ans Ende des Arrays sortiert.

Die `sort()`-Methode bewahrt leere Stellen. Wenn das Quellarray [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Stellen ans Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen über `\uFFFF` als zwei Surrogat-Codeeinheiten codiert, im Bereich `\uD800` - `\uDFFF`. Der Wert jeder Codeeinheit wird separat für den Vergleich berücksichtigt. Daher wird das durch das Surrogatpaar `\uD855\uDE51` gebildete Zeichen vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle nicht-`undefined`-Array-Elemente gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden ans Ende des Arrays sortiert, ohne Aufruf von `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                                    |
| ------------------------------ | ----------------------------------------------------- |
| > 0                            | sortiere `a` nach `b`, z.B., `[b, a]`                 |
| < 0                            | sortiere `a` vor `b`, z.B., `[a, b]`                  |
| === 0                          | ursprüngliche Reihenfolge von `a` und `b` beibehalten |

Die Vergleichsfunktion hat daher die folgende Form:

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

Formal erwartet man, dass der Komparator die folgenden Eigenschaften besitzt, um ein korrektes Sortierverhalten zu gewährleisten:

- _Pur_: Der Komparator verändert nicht die zu vergleichenden Objekte oder einen externen Zustand. (Das ist wichtig, weil nicht garantiert ist, _wann_ und _wie_ der Komparator aufgerufen wird, also sollte ein bestimmter Aufruf keine sichtbaren Auswirkungen nach außen haben.)
- _Stabil_: Der Komparator gibt bei demselben Paar von Eingabewerten dasselbe Ergebnis zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` sein oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, hat `compareFn(a, c)` dieselbe Positivität wie die beiden vorherigen.

Ein Komparator, der die oben genannten Bedingungen einhält, kann immer sowohl `1`, `0` und `-1` zurückgeben oder konsistent `0` zurückgeben. Wenn ein Komparator beispielsweise nur `1` und `0` oder nur `0` und `-1` zurückgibt, kann er nicht zuverlässig sortieren, weil die _Antisymmetrie_ gebrochen ist. Ein Komparator, der immer `0` zurückgibt, führt dazu, dass das Array überhaupt nicht verändert wird, ist aber dennoch zuverlässig.

Der standardmäßige lexikographische Komparator erfüllt alle obigen Bedingungen.

Um Zahlen statt Zeichenfolgen zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (sofern es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Zeichenfolgen auch array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche Array, dann die sortierten Arrays. Die numerischen Arrays werden ohne Vergleichsfunktion sortiert, dann mit einer.

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

### Sortieren eines Arrays von Objekten

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

### Sortieren von Nicht-ASCII-Zeichen

Um Zeichenfolgen mit Nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen zu sortieren, d.h. Zeichenfolgen mit Akzenten (e, é, è, a, ä, etc.), Zeichenfolgen aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, sodass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit map

Der `compareFn` kann pro Element innerhalb des Arrays mehrfach aufgerufen werden. Abhängig von der Natur des `compareFn` kann dies einen hohen Overhead verursachen. Je mehr Arbeit ein `compareFn` verrichtet und je mehr Elemente es zu sortieren gibt, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) für das Sortieren zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlichen Werte, die zum Sortieren verwendet werden, in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

```js
// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => ({ i, value: someSlowOperation(v) }));

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

Die `sort()`-Methode gibt eine Referenz auf das ursprüngliche Array zurück, sodass das Mutieren des zurückgegebenen Arrays auch das ursprüngliche Array verändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array zurückgibt wie andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}}-Methode. Alternativ können Sie vor dem Aufrufen von `sort()` eine flache Kopie erstellen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Sortier-Stabilität

Seit Version 10 (oder ECMAScript 2019) schreibt die Spezifikation vor, dass `Array.prototype.sort` stabil ist.

Angenommen, Sie haben eine Liste von Schülern zusammen mit ihren Noten. Beachten Sie, dass die Liste der Schüler bereits alphabetisch nach Namen vorgesortiert ist:

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

Die `students`-Variable hat dann den folgenden Wert:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig zu beachten, dass Schüler, die die gleiche Note haben (zum Beispiel Alex und Devlin), in der gleichen Reihenfolge wie vor dem Sortieren bleiben. Dies ist es, was ein stabiler Sortieralgorithmus garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Sortier-Stabilität nicht garantiert, was bedeutete, dass Sie am Ende das folgende hatten können:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit nicht wohlgeformtem Komparator

Wenn eine Vergleichsfunktion nicht alle der folgenden Regeln zur Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität, wie in der [Beschreibung](#beschreibung) erläutert, erfüllt, ist das Verhalten des Programms nicht eindeutig definiert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die hier verwendete `compareFn`-Funktion ist nicht wohlgeformt, da sie die Antisymmetrie nicht erfüllt: Wenn `a > b`, gibt sie `1` zurück; aber durch den Austausch von `a` und `b`, gibt sie `0` anstelle eines negativen Wertes zurück. Daher wird das resultierende Array über die Engines hinweg unterschiedlich sein. Beispielsweise würden V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortiert zurückgeben würde, als `[1, 1, 3, 4, 5, 9]`.

Wenn jedoch die `compareFn`-Funktion leicht geändert wird, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Sortiert V8 und JavaScriptCore es absteigend, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es so belässt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Implementierungsinkonsistenz wird immer empfohlen, Ihren Komparator wohlgeformt zu machen, indem Sie die fünf Bedingungen befolgen.

### Verwenden von sort() auf spärlichen Arrays

Leere Stellen werden ans Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufruf von sort() auf Nicht-Array-Objekten

Die `sort()`-Methode liest die `length`-Eigenschaft von `this`. Dann sammelt sie alle existierenden integer-indizierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn es fehlende Eigenschaften im Bereich gibt, werden die entsprechenden schließenden Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht existierenden Eigenschaften gegen das Ende sortiert werden.

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
- [Getting things sorted in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stable `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort` stability](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
