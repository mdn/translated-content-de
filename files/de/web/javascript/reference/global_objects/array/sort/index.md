---
title: Array.prototype.sort()
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`sort()`**-Methode von {{jsxref("Array")}}-Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe, nun sortierte Array zurück. Die Standard-Sortierreihenfolge ist aufsteigend und basiert darauf, die Elemente in Strings zu konvertieren und dann ihre Folge von UTF-16-Codeeinheitwerten zu vergleichen.

Die Zeit- und Platzkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

Um die Elemente eines Arrays zu sortieren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toSorted", "toSorted()")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype.sort()")}}

```js interactive-example
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
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
    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen soll.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen soll.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich betrachtet werden.

    Um sich dies zu merken: `(a, b) => a - b` sortiert Zahlen in aufsteigender Reihenfolge.

    Wenn nicht angegeben, werden die Array-Elemente in Strings konvertiert und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche, nun sortierte Array. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht angegeben ist, werden alle nicht-`undefined` Array-Elemente durch Konvertieren in Strings und Vergleichen der Strings in UTF-16-Codeeinheitenreihenfolge sortiert. Zum Beispiel kommt "banana" vor "cherry". Bei einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Strings konvertiert werden, kommt "80" im Unicode vor "9". Alle `undefined`-Elemente werden an das Ende des Arrays sortiert.

Die `sort()`-Methode bewahrt leere Slots. Wenn das Quell-Array [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Slots an das Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen oberhalb von `\uFFFF` als zwei Surrogat-Codeeinheiten enkodiert, im Bereich von `\uD800` bis `\uDFFF`. Der Wert jeder Codeeinheit wird separat bei der Vergleichung berücksichtigt. Somit wird das durch das Surrogatpaar `\uD855\uDE51` gebildete Zeichen vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle nicht-`undefined` Array-Elemente gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden ans Ende des Arrays sortiert, ohne dass `compareFn` aufgerufen wird).

| Rückgabewert von `compareFn(a, b)` | Sortierreihenfolge                                    |
| ---------------------------------- | ----------------------------------------------------- |
| > 0                                | sortiere `a` nach `b`, z.B., `[b, a]`                 |
| < 0                                | sortiere `a` vor `b`, z.B., `[a, b]`                  |
| === 0                              | behalte die ursprüngliche Reihenfolge von `a` und `b` |

Die Vergleichsfunktion hat somit die folgende Form:

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

Formell sollte der Vergleich folgende Eigenschaften haben, um das korrekte Sortierverhalten zu gewährleisten:

- _Pure_: Der Vergleich verändert nicht die zu vergleichenden Objekte oder einen anderen äußeren Zustand. (Dies ist wichtig, weil es keine Garantie gibt, _wann_ und _wie_ der Vergleich aufgerufen wird, daher sollte ein bestimmter Aufruf keine sichtbaren Effekte nach außen haben.)
- _Stabil_: Der Vergleich gibt für dasselbe Paar von Eingaben dasselbe Ergebnis zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Anti-symmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, hat `compareFn(a, c)` dieselbe Positivität wie die vorherigen zwei.

Ein Vergleich, der die oben genannten Einschränkungen erfüllt, kann immer `1`, `0` und `-1` zurückgeben, oder konsistent `0` zurückgeben. Ein Vergleich, der immer `0` zurückgibt, führt dazu, dass das Array nicht verändert wird, ist aber dennoch zuverlässig.

Der Standard-Lexikografische-Vergleich entspricht allen oben genannten Einschränkungen.

Um Zahlen anstelle von Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (sofern es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Strings auch array-ähnlich sind, eignet sich diese Methode nicht dafür, auf ihnen angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche Array, dann die sortierten Arrays an. Die numerischen Arrays werden ohne Vergleichsfunktion sortiert und danach mit einer.

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

### Sortieren von Arrays von Objekten

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

Um Strings mit nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen zu sortieren, das heißt Strings mit Akzentbuchstaben (e, é, è, a, ä usw.), Strings aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, sodass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit map

Die `compareFn` kann innerhalb des Arrays mehrmals pro Element aufgerufen werden. Abhängig von der Art der `compareFn` kann dies einen hohen Overhead verursachen. Je mehr Arbeit eine `compareFn` leistet und je mehr Elemente es zu sortieren gibt, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) für das Sortieren zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlichen Werte in ein temporäres Array zu extrahieren, das für das Sortieren verwendet wird, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

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

Es gibt eine Open-Source-Bibliothek namens [mapsort](https://github.com/Pimm/mapsort), die diesen Ansatz verfolgt.

### sort() gibt die Referenz auf dasselbe Array zurück

Die `sort()`-Methode gibt eine Referenz auf das ursprüngliche Array zurück, sodass die Änderung des zurückgegebenen Arrays auch das ursprüngliche Array ändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das ursprüngliche Array nicht modifiziert, sondern ein {{Glossary("Shallow_copy", "flach-kopiertes")}} Array zurückgibt, wie es andere Array-Methoden tun (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}}-Methode. Alternativ können Sie eine flache Kopie erstellen, bevor Sie `sort()` aufrufen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Stabilität der Sortierung

Seit Version 10 (oder ECMAScript 2019) gibt die Spezifikation vor, dass `Array.prototype.sort` stabil ist.

Zum Beispiel, nehmen Sie an, Sie hätten eine Liste von Schülern zusammen mit ihren Noten. Beachten Sie, dass die Schülerliste bereits nach Namen in alphabetischer Reihenfolge vorsortiert ist:

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

Der `students`-Variable wird dann den folgenden Wert haben:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig zu beachten, dass Schüler mit derselben Note (zum Beispiel Alex und Devlin) in derselben Reihenfolge wie vor dem Aufruf der Sortierung bleiben. Dies ist, was ein stabiler Sortieralgorithmus garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Stabilität der Sortierung nicht garantiert, was bedeutete, dass Sie möglicherweise das folgende Ergebnis erhalten könnten:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit nicht gut geformtem Vergleichsoperator

Wenn eine Vergleichsfunktion nicht alle Regeln von Reinheit, Stabilität, Reflexivität, Anti-Symmetrie und Transitivität, wie in der [Beschreibung](#beschreibung) erklärt, einhält, ist das Verhalten des Programms nicht wohldefiniert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn`-Funktion hier ist nicht gut geformt, da sie nicht die Anti-Symmetrie erfüllt: Wenn `a > b`, gibt sie `1` zurück; aber wenn `a` und `b` vertauscht werden, gibt sie `0` anstelle eines negativen Werts zurück. Daher wird das resultierende Array je nach Engine unterschiedlich sein. Zum Beispiel würden V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortiert zurückgeben wird, als `[1, 1, 3, 4, 5, 9]`.

Wenn die `compareFn`-Funktion jedoch leicht so geändert wird, dass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortieren V8 und JavaScriptCore es absteigend, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Implementierungskonsistenz wird immer empfohlen, Ihren Vergleich so zu gestalten, dass er den fünf Einschränkungen entspricht.

### Verwenden von sort() auf sparsamen Arrays

Leere Slots werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufrufen von sort() auf Nicht-Array-Objekten

Die `sort()`-Methode liest die `length`-Eigenschaft von `this`. Sie sammelt dann alle vorhandenen integer-indizierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn es fehlende Eigenschaften in dem Bereich gibt, werden die entsprechenden angehängten Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht existierenden Eigenschaften zum Ende sortiert wurden.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Konzepte der Sortierung in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort`-Stabilität](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
