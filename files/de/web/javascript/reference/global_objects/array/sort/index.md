---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`sort()`** Methode von {{jsxref("Array")}} Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe jetzt sortierte Array zurück. Die Standardsortierreihenfolge ist aufsteigend, basiert auf der Umwandlung der Elemente in Strings und vergleicht dann ihre Sequenzen der UTF-16-Codeunits.

Die Zeit- und Speicherkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

Um die Elemente eines Arrays zu sortieren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toSorted", "toSorted()")}}.

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

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

    Sie sollte eine Zahl zurückgeben, bei der:

    - Ein negativer Wert angibt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert angibt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` angibt, dass `a` und `b` als gleich angesehen werden.

    Um dies zu merken, denken Sie daran, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wenn weggelassen, werden die Array-Elemente in Strings umgewandelt und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, jetzt sortiert. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht angegeben ist, werden alle nicht `undefined` Array-Elemente sortiert, indem sie in Strings umgewandelt und in der Reihenfolge der UTF-16-Codeunits verglichen werden. Zum Beispiel kommt "banana" vor "cherry". In einer numerischen Sortierung kommt 9 vor 80, aber weil Zahlen in Strings umgewandelt werden, kommt "80" vor "9" in der Unicode-Reihenfolge. Alle `undefined` Elemente werden ans Ende des Arrays sortiert.

Die `sort()` Methode bewahrt leere Slots. Wenn das Quellarray [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Slots ans Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen über `\uFFFF` als zwei Surrogat-Codeunits kodiert, im Bereich von `\uD800` - `\uDFFF`. Der Wert jeder Codeunit wird separat für den Vergleich berücksichtigt. Daher wird das Zeichen, das durch das Surrogat-Paar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle nicht `undefined` Array-Elemente entsprechend dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined` Elemente werden ans Ende des Arrays sortiert, ohne Aufruf von `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                |
| ------------------------------ | --------------------------------- |
| > 0                            | sortiere `a` nach `b`, z.B. `[b, a]` |
| < 0                            | sortiere `a` vor `b`, z.B. `[a, b]` |
| === 0                          | behalte die ursprüngliche Reihenfolge von `a` und `b` |

Die Vergleichsfunktion hat also die folgende Form:

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

Formal wird erwartet, dass der Komparator die folgenden Eigenschaften hat, um ein korrektes Sortierverhalten sicherzustellen:

- _Pure_: Der Komparator verändert nicht die Objekte, die verglichen werden, oder irgendeinen externen Zustand. (Dies ist wichtig, da es keine Garantie gibt, _wann_ und _wie_ der Komparator aufgerufen wird, sodass jeder Aufruf keine sichtbaren Auswirkungen auf das Äußere haben sollte.)
- _Stabil_: Der Komparator gibt das gleiche Ergebnis mit dem gleichen Paar von Eingaben zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen entweder beide `0` sein oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, hat `compareFn(a, c)` die gleiche Vorzeichen wie die beiden vorherigen.

Ein Komparator, der den oben genannten Bedingungen entspricht, kann immer `1`, `0` und `-1` zurückgeben oder konsistent `0` zurückgeben. Beispielsweise kann ein Komparator, der nur `1` und `0` oder nur `0` und `-1` zurückgibt, nicht zuverlässig sortieren, da die _Antisymmetrie_ verletzt wird. Ein Komparator, der immer `0` zurückgibt, bewirkt, dass das Array überhaupt nicht verändert wird, ist aber dennoch zuverlässig.

Der standardmäßige lexikografische Komparator erfüllt alle obigen Bedingungen.

Um Zahlen anstelle von Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (wenn es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Strings auch array-ähnlich sind, ist diese Methode nicht geeignet, auf sie angewendet zu werden, da Strings unveränderbar sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche Array an, gefolgt von den sortierten Arrays. Die numerischen Arrays werden ohne Vergleichsfunktion sortiert und dann mithilfe einer sortiert.

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

### Sortieren von nicht-ASCII-Zeichen

Um Strings mit nicht-[ASCII](/de/docs/Glossary/ASCII)-Zeichen zu sortieren, also Strings mit Akzentzeichen (e, é, è, a, ä, usw.), Strings aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen so vergleichen, dass sie in die richtige Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit map

Die `compareFn` kann für jedes Element innerhalb des Arrays mehrmals aufgerufen werden. Abhängig von der Natur der `compareFn` kann dies zu einem hohen Overhead führen. Je mehr Arbeit eine `compareFn` leistet und je mehr Elemente es zu sortieren gibt, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) für das Sortieren zu verwenden. Die Idee ist, einmal durch das Array zu traversieren, um die tatsächlichen Werte zu extrahieren, die zum Sortieren verwendet werden, in ein temporäres Array, das temporäre Array zu sortieren und dann das temporäre Array zu traversieren, um die richtige Reihenfolge zu erreichen.

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

Die `sort()` Methode gibt eine Referenz auf das ursprüngliche Array zurück, sodass das Verändern des zurückgegebenen Arrays das ursprüngliche Array ebenfalls verändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein [flach kopiertes](/de/docs/Glossary/Shallow_copy) Array zurückgibt wie andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}} Methode. Alternativ können Sie eine flache Kopie vor dem Aufruf von `sort()` erstellen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Stabilität der Sortierung

Seit Version 10 (oder ECMAScript 2019) schreibt die Spezifikation vor, dass `Array.prototype.sort` stabil ist.

Zum Beispiel, sagen wir, Sie hätten eine Liste von Schülern zusammen mit ihren Noten. Beachten Sie, dass die Liste der Schüler bereits vorab nach Namen alphabetisch sortiert ist:

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

Hat die `students` Variable dann den folgenden Wert:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig, darauf hinzuweisen, dass Schüler, die die gleiche Note haben (zum Beispiel Alex und Devlin), in der gleichen Reihenfolge bleiben wie vor dem Aufruf der Sortierung. Dies ist das, was ein stabiler Sortieralgorithmus garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Stabilität der Sortierung nicht garantiert, was bedeutet, dass Sie mit dem folgenden Ergebnis enden könnten:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit schlecht geformten Komparator

Wenn eine Vergleichsfunktion nicht alle Regeln der Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität, wie in der [Beschreibung](#beschreibung) erläutert, erfüllt, ist das Verhalten des Programms nicht wohldefiniert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn` Funktion ist hier nicht gut geformt, weil sie nicht die Antisymmetrie erfüllt: Wenn `a > b`, gibt sie `1` zurück; aber durch Vertauschen von `a` und `b` gibt sie `0` zurück anstelle eines negativen Wertes. Daher wird das resultierende Array in verschiedenen Engines unterschiedlich sein. Zum Beispiel würden V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortiert zurückgeben würde, als `[1, 1, 3, 4, 5, 9]`.

Wenn jedoch die `compareFn` Funktion leicht geändert wird, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortiert V8 und JavaScriptCore es absteigend, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Implementierungsinkonsistenz wird dringend empfohlen, dass Ihr Komparator gut geformt ist, indem er den fünf Bedingungen folgt.

### Verwendung von sort() auf spärlichen Arrays

Leere Slots werden ans Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufrufen von sort() auf Nicht-Array-Objekten

Die `sort()` Methode liest die `length` Eigenschaft von `this`. Sie sammelt dann alle existierenden integer-indizierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn es fehlende Eigenschaften im Bereich gibt, werden die entsprechenden folgenden Eigenschaften wie gelöscht, als ob die nicht existierenden Eigenschaften ans Ende sortiert werden.

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Getting things sorted in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort` Stabilität](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
