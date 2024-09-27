---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`sort()`** Methode von {{jsxref("Array")}} Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe, nun sortierte Array zurück. Die Standardsortierung ist aufsteigend, indem die Elemente in Strings umgewandelt und dann ihre Reihenfolgen der UTF-16-Code-Einheitenwerte verglichen werden.

Die Zeit- und Speicherkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

Um die Elemente in einem Array zu sortieren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toSorted", "toSorted()")}}.

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
      - : Das erste Element zum Vergleich. Wird niemals `undefined` sein.
    - `b`
      - : Das zweite Element zum Vergleich. Wird niemals `undefined` sein.

    Sie sollte eine Zahl zurückgeben, bei der:

    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen soll.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen soll.
    - Null oder `NaN` bedeutet, dass `a` und `b` als gleich betrachtet werden.

    Um sich das zu merken, denken Sie daran, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wenn diese nicht angegeben ist, werden die Array-Elemente in Strings umgewandelt und dann nach dem Unicode-Codepunkt-Wert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche, nun sortierte Array. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie angefertigt wird.

## Beschreibung

Wenn `compareFn` nicht angegeben wird, werden alle nicht-`undefined` Array-Elemente nach ihrer Umwandlung in Strings und deren Vergleich in UTF-16-Code-Einheiten-Reihenfolge sortiert. Zum Beispiel kommt "banana" vor "cherry". Bei einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Strings umgewandelt werden, kommt "80" vor "9" in der Unicode-Reihenfolge. Alle `undefined`-Elemente werden am Ende des Arrays sortiert.

Die `sort()`-Methode erhält leere Slots bei. Wenn das Quellarray [dünn](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Slots an das Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen oberhalb von `\uFFFF` als zwei Stellvertreter-Codeeinheiten im Bereich `\uD800` - `\uDFFF` codiert. Der Wert jeder Codeeinheit wird separat für den Vergleich berücksichtigt. Daher wird das Zeichen, das durch das Stellvertreterpaar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle nicht-`undefined` Array-Elemente entsprechend dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden am Ende des Arrays sortiert, ohne Aufruf von `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                                    |
| ------------------------------ | ----------------------------------------------------- |
| > 0                            | sortiere `a` nach `b`, z.B. `[b, a]`                  |
| < 0                            | sortiere `a` vor `b`, z.B. `[a, b]`                   |
| === 0                          | behalte die ursprüngliche Reihenfolge von `a` und `b` |

So hat die Vergleichsfunktion die folgende Form:

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

Formeller wird erwartet, dass der Vergleichsoperator die folgenden Eigenschaften hat, um ein korrektes Sortierverhalten zu gewährleisten:

- _Pure_: Der Operator ändert die zu vergleichenden Objekte oder einen externen Zustand nicht. (Dies ist wichtig, da es keine Garantie gibt, _wann_ und _wie_ der Operator aufgerufen wird, also sollte jeder spezielle Aufruf keine sichtbaren Effekte nach außen hin haben.)
- _Stable_: Der Operator gibt mit demselben Paar Eingaben immer dasselbe Ergebnis zurück.
- _Reflexive_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` oder entgegengesetzte Vorzeichen haben.
- _Transitive_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, dann hat `compareFn(a, c)` dieselbe Positivität wie die vorherigen beiden.

Ein Vergleichsoperator, der den obigen Einschränkungen entspricht, kann immer alle `1`, `0` und `-1` zurückgeben oder konsequent `0` zurückgeben. Zum Beispiel, wenn ein Vergleichsoperator nur `1` und `0` oder nur `0` und `-1` zurückgibt, kann er nicht zuverlässig sortieren, da die _Antisymmetrie_ verletzt wird. Ein Vergleichsoperator, der immer `0` zurückgibt, sorgt dafür, dass das Array überhaupt nicht verändert wird, ist jedoch dennoch zuverlässig.

Die Standardlexikografische Vergleichsfunktion erfüllt alle oben genannten Einschränkungen.

Um Zahlen statt Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (wenn es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die Methode `sort()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel für Eigenschaften hat. Obwohl Strings auch array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Ein Array erstellen, anzeigen und sortieren

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche Array an, gefolgt von den sortierten Arrays. Die numerischen Arrays werden ohne Vergleichsfunktion sortiert und dann mit einer.

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

Zum Sortieren von Strings mit nicht-[ASCII](/de/docs/Glossary/ASCII) Zeichen, d.h. Strings mit Akzentzeichen (e, é, è, a, ä, etc.) und Strings aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, sodass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit map

Die `compareFn` kann für dasselbe Element innerhalb des Arrays mehrmals aufgerufen werden. Abhängig von der Art der `compareFn` kann dies einen hohen Overhead verursachen. Je mehr Arbeit eine `compareFn` verrichtet und je mehr Elemente zu sortieren sind, desto effizienter kann es sein, für die Sortierung [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlichen Werte, die für die Sortierung verwendet werden, in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

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

Die Methode `sort()` gibt eine Referenz auf das ursprüngliche Array zurück, sodass eine Änderung des zurückgegebenen Arrays auch das ursprüngliche Array verändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Wenn Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein [flach kopiertes](/de/docs/Glossary/Shallow_copy) Array zurückgibt, wie es andere Arrays-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) tun, verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}}-Methode. Alternativ können Sie vor dem Aufruf von `sort()` eine flache Kopie anfertigen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Sortierstabilität

Seit Version 10 (oder ECMAScript 2019) diktiert die Spezifikation, dass `Array.prototype.sort` stabil ist.

Nehmen wir zum Beispiel an, Sie hatten eine Liste von Schülern zusammen mit ihren Noten. Beachten Sie, dass die Liste der Schüler bereits vorab alphabetisch nach Namen sortiert ist:

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

Hat die Variable `students` dann den folgenden Wert:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig zu beachten, dass Schüler, die dieselbe Note haben (zum Beispiel Alex und Devlin), in derselben Reihenfolge bleiben wie vor dem Aufruf der Sortierung. Dies ist, was ein stabiler Sortieralgorithmus garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Sortierstabilität nicht garantiert, was bedeutet, dass Sie mit dem folgenden Ergebnis enden konnten:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit nicht wohlgeformtem Vergleichsoperator

Wenn eine Vergleichsfunktion nicht alle Regeln von Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität erfüllt, wie in der [Beschreibung](#beschreibung) erklärt, ist das Verhalten des Programms nicht gut definiert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn`-Funktion hier ist nicht wohlgeformt, weil sie die Antisymmetrie nicht erfüllt: wenn `a > b`, gibt sie `1` zurück; aber durch Vertauschen von `a` und `b` gibt es `0` statt eines negativen Wertes zurück. Daher wird das resultierende Array in verschiedenen Engines unterschiedlich sein. Zum Beispiel würde V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortiert zurückgibt, nämlich `[1, 1, 3, 4, 5, 9]`.

Wenn jedoch die `compareFn`-Funktion leicht geändert wird, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortiert V8 und JavaScriptCore es absteigend als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Implementierungskonsistenz wird immer empfohlen, dass Ihr Vergleichsoperator wohlgeformt ist, indem Sie die fünf Einschränkungen befolgen.

### Verwendung von sort() auf dünnen Arrays

Leere Slots werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufrufen von sort() auf Nicht-Array-Objekten

Die `sort()` Methode liest die `length`-Eigenschaft von `this`. Sie sammelt dann alle vorhandenen ganzzahligen Schlüsseleigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn Eigenschaften im Bereich fehlen, werden die entsprechenden End-Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht vorhandenen Eigenschaften gegen Ende sortiert würden.

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

- [Polyfill von `Array.prototype.sort` mit modernem Verhalten wie stabiles Sortieren in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Getting things sorted in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort` Stabiliät](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
