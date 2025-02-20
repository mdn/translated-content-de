---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("Array")}}-Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe Array zurück, nun sortiert. Die Standardsortierreihenfolge ist aufsteigend, basierend auf der Konvertierung der Elemente in Strings und dem Vergleich ihrer Sequenzen von UTF-16-Code-Einheiten.

Die zeitliche und räumliche Komplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

Um die Elemente eines Arrays zu sortieren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toSorted", "toSorted()")}}.

{{InteractiveExample("JavaScript Demo: Array.sort()")}}

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
      - : Das erste Element zum Vergleich. Wird nie `undefined` sein.
    - `b`
      - : Das zweite Element zum Vergleich. Wird nie `undefined` sein.

    Sie sollte eine Zahl zurückgeben, wobei gilt:

    - Ein negativer Wert bedeutet, dass `a` vor `b` positioniert werden sollte.
    - Ein positiver Wert bedeutet, dass `a` nach `b` positioniert werden sollte.
    - `0` oder `NaN` bedeuten, dass `a` und `b` als gleich betrachtet werden.

    Zum Merken: `(a, b) => a - b` sortiert Zahlen in aufsteigender Reihenfolge.

    Falls weggelassen, werden die Array-Elemente in Strings konvertiert und dann nach jedem Unicode-Codepunktwert sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, nun sortiert. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird, und keine Kopie erstellt wird.

## Beschreibung

Falls `compareFn` nicht bereitgestellt wird, werden alle nicht `undefined`-Elemente des Arrays sortiert, indem sie in Strings konvertiert und nach der Reihenfolge der UTF-16-Codepunkte der Zeichen verglichen werden. Zum Beispiel kommt "banana" vor "cherry". In einer numerischen Sortierung kommt 9 vor 80, da Zahlen in Strings umgewandelt werden, aber in der Unicode-Reihenfolge kommt "80" vor "9". Alle `undefined`-Elemente werden am Ende des Arrays positioniert.

Die `sort()`-Methode behält leere Plätze bei. Wenn das Quell-Array [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden leere Plätze zum Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen oberhalb von `\uFFFF` als zwei Surrogat-Code-Einheiten codiert, im Bereich von `\uD800` - `\uDFFF`. Der Wert jeder Code-Einheit wird separat für den Vergleich berücksichtigt. Daher wird das Zeichen, das durch das Surrogatpaar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` bereitgestellt wird, werden alle nicht `undefined`-Elemente des Arrays gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden am Ende des Arrays positioniert, ohne dass `compareFn` aufgerufen wird).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                                   |
| ------------------------------ | ---------------------------------------------------- |
| > 0                            | sortiert `a` nach `b`, z. B. `[b, a]`                |
| < 0                            | sortiert `a` vor `b`, z. B. `[a, b]`                 |
| === 0                          | behält die ursprüngliche Reihenfolge von `a` und `b` |

Die Vergleichsfunktion hat also folgende Form:

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

Formaler ausgedrückt, sollte der Comparator folgende Eigenschaften besitzen, um ein korrektes Sortierverhalten zu gewährleisten:

- _Pure_: Der Comparator mutiert weder die verglichenen Objekte noch einen externen Zustand. (Das ist wichtig, da es keine Garantie gibt, _wann_ und _wie_ der Comparator aufgerufen wird, also sollte jeder einzelne Aufruf keine sichtbaren Auswirkungen nach außen hin haben.)
- _Stabil_: Der Comparator liefert das gleiche Ergebnis für das gleiche Eingabe-Paar.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen entweder beide `0` sein oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, dann hat `compareFn(a, c)` dieselbe Polarität wie die vorherigen beiden.

Ein Comparator, der die oben genannten Constraints einhält, wird immer in der Lage sein, alle Werte `1`, `0` und `-1` zurückzugeben, oder durchgehend `0` zurückgeben. Ein Comparator, der beispielsweise nur `1` und `0` oder nur `0` und `-1` zurückgibt, kann nicht zuverlässig sortieren, da _Antisymmetrie_ verletzt ist. Ein Comparator, der immer `0` zurückgibt, bewirkt, dass das Array überhaupt nicht verändert wird, ist aber dennoch zuverlässig.

Der standardmäßige lexikografische Comparator erfüllt alle oben genannten Constraints.

Um Zahlen statt Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (sofern es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generische_array-methoden). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Integer-indizierte Eigenschaften hat. Obwohl Strings ebenfalls array-artig sind, ist diese Methode nicht dafür geeignet, auf ihnen angewandt zu werden, da Strings unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche Array und anschließend die sortierten Arrays an. Die numerischen Arrays werden ohne Vergleichsfunktion und dann mit einer sortiert.

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

Zum Sortieren von Strings mit nicht-[ASCII](/de/docs/Glossar/ASCII)-Zeichen, z. B. Strings mit Akzentzeichen (e, é, è, a, ä, etc.), Strings aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann solche Zeichen vergleichen, sodass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit Map

Die `compareFn` kann pro Element im Array mehrfach aufgerufen werden. Abhängig von der Natur der `compareFn`-Funktion kann dies einen hohen Overhead verursachen. Je mehr Arbeit eine `compareFn`-Funktion leistet und je mehr Elemente es zu sortieren gibt, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) für das Sortieren zu verwenden. Der Gedanke dahinter ist, das Array einmal zu durchlaufen, um die tatsächlichen Werte, die für das Sortieren verwendet werden sollen, in einem temporären Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

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

Die `sort()`-Methode gibt eine Referenz auf das ursprüngliche Array zurück, sodass das Ändern des zurückgegebenen Arrays auch das ursprüngliche Array ändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein [flach-kopiertes](/de/docs/Glossar/Shallow_copy) Array zurückgibt, wie es andere Array-Methoden (z. B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) tun, nutzen Sie die {{jsxref("Array/toSorted", "toSorted()")}}-Methode. Alternativ können Sie eine flache Kopie erstellen, bevor Sie `sort()` aufrufen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Stabilität der Sortierung

Seit Version 10 (oder ECMAScript 2019) schreibt die Spezifikation vor, dass `Array.prototype.sort` stabil sein muss.

Beispielsweise nehmen wir an, Sie hätten eine Liste von Studierenden zusammen mit ihren Noten. Beachten Sie, dass die Liste der Studierenden bereits alphabetisch nach Namen vor-sortiert ist:

```js
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
```

Nach der Sortierung dieses Arrays nach `grade` in aufsteigender Reihenfolge:

```js
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

Hat die `students`-Variable den folgenden Wert:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig zu beachten, dass Studierende mit derselben Note (z. B. Alex und Devlin) in derselben Reihenfolge bleiben wie vor dem Aufruf von sort. Dies garantiert ein stabiler Sortieralgorithmus.

Vor Version 10 (oder ECMAScript 2019) war die Stabilität der Sortierung nicht garantiert, was dazu führen konnte, dass das folgende Ergebnis auftrat:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit einem nicht korrekt aufgebauten Comparator

Falls eine Vergleichsfunktion nicht alle Regeln der Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität einhält, wie in der [Beschreibung](#beschreibung) erklärt, ist das Verhalten des Programms nicht wohldefiniert.

Beispielsweise betrachten wir diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn`-Funktion hier ist nicht korrekt, da sie die Antisymmetrie nicht erfüllt: wenn `a > b`, gibt sie `1` zurück; durch Vertauschen von `a` und `b` gibt sie jedoch `0` statt eines negativen Werts zurück. Daher ist das resultierende Array je nach Engine unterschiedlich. Beispielsweise sortieren V8 (verwendet von Chrome, Node.js usw.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht und geben `[3, 1, 4, 1, 5, 9]` zurück, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortiert als `[1, 1, 3, 4, 5, 9]`.

Durch eine leichte Änderung von `compareFn`, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Sortiert V8 und JavaScriptCore das Array absteigend als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey das Array unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Wegen dieser Inkonsistenz in der Implementierung wird empfohlen, sicherzustellen, dass Ihr Comparator korrekt ist, indem Sie die fünf genannten Regeln einhalten.

### Verwenden von sort() auf spärlichen Arrays

Leere Plätze werden zum Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufruf von sort() auf Nicht-Array-Objekten

Die `sort()`-Methode liest die `length`-Eigenschaft von `this`. Sie sammelt dann alle bestehenden Integer-indizierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert diese und schreibt sie zurück. Falls im Bereich Eigenschaften fehlen, werden die entsprechenden hinteren Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), so als ob die nicht vorhandenen Eigenschaften zum Ende des Arrays sortiert worden wären.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Leitfaden/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Sorting in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile Sortierung `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [Sortierstabilität bei `Array.prototype.sort`](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
