---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`sort()`** Methode von {{jsxref("Array")}} Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe Array zurück, das jetzt sortiert ist. Die Standardsortierreihenfolge ist aufsteigend, wobei die Elemente in Strings umgewandelt und dann deren Sequenzen von UTF-16-Codeeinheitwerten verglichen werden.

Die Zeit- und Raumkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

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

    Sie sollte eine Zahl zurückgeben, wobei:

    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich angesehen werden.

    Um sich das zu merken: `(a, b) => a - b` sortiert Zahlen in aufsteigender Reihenfolge.

    Wenn nicht angegeben, werden die Array-Elemente in Strings umgewandelt und dann entsprechend dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, jetzt sortiert. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht angegeben ist, werden alle Nicht-`undefined`-Array-Elemente, indem sie in Strings umgewandelt und die Strings in der Reihenfolge der UTF-16-Codeeinheiten verglichen werden, sortiert. Zum Beispiel kommt "banana" vor "cherry". Bei einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Strings umgewandelt werden, kommt "80" vor "9" in der Unicode-Reihenfolge. Alle `undefined`-Elemente werden an das Ende des Arrays sortiert.

Die `sort()` Methode bewahrt leere Slots. Wenn das Quellarray [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Slots an das Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen oberhalb von `\uFFFF` als zwei Surrogatcodeeinheiten kodiert, aus dem Bereich `\uD800` - `\uDFFF`. Der Wert jeder Codeeinheit wird separat für den Vergleich berücksichtigt. So wird das Zeichen, das durch das Surrogatpaar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle Nicht-`undefined`-Array-Elemente entsprechend dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden an das Ende des Arrays sortiert, ohne Aufruf von `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                                    |
| ------------------------------ | ----------------------------------------------------- |
| > 0                            | sortiere `a` nach `b`, z.B. `[b, a]`                  |
| < 0                            | sortiere `a` vor `b`, z.B. `[a, b]`                   |
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

Formaler erwartet man, dass der Comparator die folgenden Eigenschaften hat, um ein korrektes Sortierverhalten zu gewährleisten:

- _Reinheit_: Der Comparator verändert nicht die zu vergleichenden Objekte oder irgendeinen externen Zustand. (Dies ist wichtig, da es keine Garantie gibt, _wann_ und _wie_ der Comparator aufgerufen wird, sodass ein bestimmter Aufruf keine erkennbaren Effekte nach außen produzieren sollte.)
- _Stabilität_: Der Comparator gibt dasselbe Ergebnis bei demselben Paar von Eingaben zurück.
- _Reflexivität_: `compareFn(a, a) === 0`.
- _Antisymmetrie_: `compareFn(a, b)` und `compareFn(b, a)` müssen entweder beide `0` oder entgegengesetzte Vorzeichen haben.
- _Transitivität_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, dann hat `compareFn(a, c)` die gleiche Positivität wie die beiden vorherigen.

Ein Comparator, der die oben genannten Einschränkungen erfüllt, wird immer in der Lage sein, alle von `1`, `0` und `-1` zurückzugeben oder konsequent `0` zurückzugeben. Zum Beispiel, wenn ein Comparator nur `1` und `0` oder nur `0` und `-1` zurückgibt, wird er nicht zuverlässig sortieren können, da die _Antisymmetrie_ verletzt ist. Ein Comparator, der immer `0` zurückgibt, wird dazu führen, dass das Array überhaupt nicht verändert wird, ist jedoch trotzdem zuverlässig.

Der Standard-Lehnschreib-Comparator erfüllt alle oben genannten Einschränkungen.

Um Zahlen anstelle von Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion wird das Array in aufsteigender Reihenfolge sortieren (wenn es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlenschlüsselbasierte Eigenschaften hat. Obwohl Strings auch Array-ähnlich sind, ist diese Methode nicht dafür geeignet, auf sie angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Im folgenden Beispiel werden vier Arrays erstellt und das ursprüngliche Array angezeigt, dann die sortierten Arrays. Die numerischen Arrays werden ohne eine Vergleichsfunktion sortiert, dann mit einer.

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

Arrays von Objekten können durch Vergleichen des Wertes einer ihrer Eigenschaften sortiert werden.

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

### Sortieren von nicht-ASCII-Zeichen

Um Strings mit nicht-{{Glossary("ASCII", "ASCII")}} Zeichen zu sortieren, d.h. Strings mit Akzentzeichen (e, é, è, a, ä, usw.), Strings von anderen als der englischen Sprache, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, damit sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit Map

Die `compareFn` kann mehrmals pro Element innerhalb des Arrays aufgerufen werden. Abhängig von der Natur der `compareFn` kann dies zu einem hohen Overhead führen. Je mehr Arbeit eine `compareFn` leistet und je mehr Elemente zu sortieren sind, desto effizienter könnte es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) für das Sortieren zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlich zum Sortieren verwendeten Werte in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

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

Die `sort()` Methode gibt eine Referenz auf das ursprüngliche Array zurück, sodass das Verändern des zurückgegebenen Arrays auch das ursprüngliche Array verändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Wenn Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein {{Glossary("Shallow_copy", "flachkopiertes")}} Array wie andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) zurückgibt, verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}} Methode. Alternativ können Sie eine flache Kopie vor dem Aufruf von `sort()` erstellen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Sortierstabilität

Seit Version 10 (oder ECMAScript 2019) besagt die Spezifikation, dass `Array.prototype.sort` stabil ist.

Angenommen, Sie hätten eine Liste von Studenten zusammen mit ihren Noten. Beachten Sie, dass die Liste der Studenten bereits nach Namen in alphabetischer Reihenfolge vorab sortiert ist:

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

Wird die `students`-Variable den folgenden Wert haben:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig zu beachten, dass Studenten, die die gleiche Note haben (zum Beispiel Alex und Devlin), in derselben Reihenfolge wie vor dem Aufruf der Sortierung bleiben. Das ist, was ein stabiler Sortieralgorithmus garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Sortierstabilität nicht garantiert, was bedeutete, dass Sie das folgende Ergebnis erhalten könnten:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit nicht wohlgeformtem Comparator

Wenn eine Vergleichsfunktion nicht alle Regeln der Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität erfüllt, wie im [Beschreibung](#beschreibung) Abschnitt erklärt, ist das Verhalten des Programms nicht eindeutig definiert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn`-Funktion hier ist nicht wohlgeformt, da sie die Antisymmetrie nicht erfüllt: Wenn `a > b`, gibt sie `1` zurück; aber wenn man `a` und `b` vertauscht, gibt sie `0` anstelle eines negativen Werts zurück. Daher wird das resultierende Array in verschiedenen Engines unterschiedlich sein. Zum Beispiel werden V8 (verwendet von Chrome, Node.js, usw.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array in aufsteigender Reihenfolge sortiert und `[1, 1, 3, 4, 5, 9]` zurückgibt.

Wenn jedoch die `compareFn`-Funktion leicht geändert wird, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortieren V8 und JavaScriptCore es absteigend als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Wegen dieser Implementierungskonsistenz wird immer geraten, Ihren Comparator gut geformt zu machen, indem Sie die fünf Einschränkungen befolgen.

### Verwendung von sort() auf spärlichen Arrays

Leere Slots werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufruf von sort() auf Nicht-Array-Objekten

Die `sort()` Methode liest die `length`-Eigenschaft von `this`. Dann sammelt sie alle vorhandenen ganzzahlschlüssel-basierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn es im Bereich fehlende Eigenschaften gibt, werden die entsprechenden nachlaufenden Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht existierenden Eigenschaften ans Ende sortiert werden.

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
- [Leitfaden zu Indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Sortierung in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort` Stabilität](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
