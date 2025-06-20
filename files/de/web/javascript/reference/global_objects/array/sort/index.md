---
title: Array.prototype.sort()
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`sort()`** Methode von {{jsxref("Array")}} Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe, nun sortierte, Array zurück. Die Standardsortierreihenfolge ist aufsteigend, basierend darauf, dass die Elemente in Strings umgewandelt und dann ihre Sequenzen von UTF-16-Codeeinheitenwerten verglichen werden.

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

    Sie sollte eine Zahl zurückgeben, wobei:

    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich angesehen werden.

    Um sich dies zu merken, denken Sie daran, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wenn weggelassen, werden die Array-Elemente in Strings umgewandelt und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, nun sortiert. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird, und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht bereitgestellt wird, werden alle nicht-`undefined` Array-Elemente sortiert, indem sie in Strings umgewandelt und die daraus resultierenden Strings in der Reihenfolge der UTF-16-Codeeinheiten verglichen werden. Zum Beispiel kommt "banana" vor "cherry". In einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Strings umgewandelt werden, kommt "80" in der Unicode-Reihenfolge vor "9". Alle `undefined` Elemente werden am Ende des Arrays sortiert.

Die Methode `sort()` bewahrt leere Slots. Wenn das Quell-Array [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Slots an das Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen über `\uFFFF` als zwei Surrogat-Codeeinheiten kodiert, im Bereich
> `\uD800` - `\uDFFF`. Der Wert jeder Codeeinheit wird separat für den Vergleich betrachtet. Daher wird das Zeichen, das durch das Surrogatpaar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` bereitgestellt wird, werden alle nicht-`undefined` Array-Elemente gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined` Elemente werden an das Ende des Arrays sortiert, ohne Aufruf von `compareFn`).

| Rückgabewert von `compareFn(a, b)` | Sortierreihenfolge                                    |
| ---------------------------------- | ----------------------------------------------------- |
| > 0                                | sortiere `a` nach `b`, z.B. `[b, a]`                  |
| < 0                                | sortiere `a` vor `b`, z.B. `[a, b]`                   |
| === 0                              | behalte die ursprüngliche Reihenfolge von `a` und `b` |

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

Formeller ausgedrückt, der Komparator sollte die folgenden Eigenschaften haben, um ein korrektes Sortierverhalten zu gewährleisten:

- _Pure_: Der Komparator verändert nicht die Objekte, die verglichen werden, oder einen externen Zustand. (Dies ist wichtig, da nicht garantiert ist, _wann_ und _wie_ der Komparator aufgerufen wird, daher sollte kein bestimmter Aufruf sichtbare Effekte nach außen erzeugen.)
- _Stabil_: Der Komparator liefert dasselbe Ergebnis mit demselben Paar von Eingaben.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, hat `compareFn(a, c)` dieselbe Positivität wie die vorherigen beiden.

Ein Komparator, der den obigen Beschränkungen entspricht, wird immer in der Lage sein, alle von `1`, `0` und `-1` zurückzugeben oder konsistent `0` zurückzugeben. Wenn ein Komparator beispielsweise nur `1` und `0` zurückgibt oder nur `0` und `-1` zurückgibt, kann er nicht zuverlässig sortieren, da die _Antisymmetrie_ gebrochen ist. Ein Komparator, der immer `0` zurückgibt, wird das Array überhaupt nicht verändern, ist aber dennoch zuverlässig.

Der Standard-leixkografische Komparator erfüllt alle obigen Beschränkungen.

Um Zahlen anstelle von Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (wenn es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Strings ebenfalls Array-ähnlich sind, ist diese Methode nicht geeignet, um auf ihnen angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt die Original-Arrays, dann die sortierten Arrays an. Die numerischen Arrays werden ohne Vergleichsfunktion sortiert und dann mit einer.

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

### Sortieren nicht-ASCII-Zeichen

Zum Sortieren von Strings mit nicht-{{Glossary("ASCII", "ASCII")}} Zeichen, d.h. Strings mit Akzentzeichen (z.B. e, é, è, a, ä usw.), Strings aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen so vergleichen, dass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit `map`

Die `compareFn` kann pro Element im Array mehrfach aufgerufen werden. Abhängig von der Natur der `compareFn` kann dies zu einem hohen Overhead führen. Je mehr Arbeit ein `compareFn` verrichtet und je mehr Elemente es zu sortieren gibt, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) zum Sortieren zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlichen Werte, die für die Sortierung verwendet werden, in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

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

Die `sort()` Methode gibt eine Referenz auf das ursprüngliche Array zurück, daher wird durch das Verändern des zurückgegebenen Arrays auch das ursprüngliche Array verändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array wie andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) zurückgibt, verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}} Methode. Alternativ können Sie vor dem Aufruf von `sort()` eine flache Kopie erstellen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Sortierstabilität

Seit Version 10 (oder ECMAScript 2019) gibt die Spezifikation vor, dass `Array.prototype.sort` stabil ist.

Beispielsweise nehmen Sie an, Sie hätten eine Liste von Schülern zusammen mit ihren Noten. Beachten Sie, dass die Liste der Schüler bereits nach Name alphabetisch sortiert ist:

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

Wird die Variable `students` dann folgenden Wert haben:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Es ist wichtig zu beachten, dass Schüler, die die gleiche Note haben (z.B. Alex und Devlin), in derselben Reihenfolge bleiben wie vor dem Aufrufen der Sortierung. Dies ist, was ein stabiler Sortieralgorithmus garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Sortierstabilität nicht garantiert, was bedeutete, dass Sie mit dem Folgenden enden konnten:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit einem nicht wohldefinierten Komparator

Wenn eine Vergleichsfunktion nicht alle Regeln für Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität, wie in der [Beschreibung](#beschreibung) erklärt, erfüllt, ist das Verhalten des Programms nicht wohldefiniert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn` Funktion hier ist nicht wohldefiniert, weil sie die Antisymmetrie nicht erfüllt: wenn `a > b`, gibt sie `1` zurück; aber durch Vertauschen von `a` und `b` gibt sie `0` anstelle eines negativen Werts zurück. Daher wird das resultierende Array zwischen den Engines unterschiedlich sein. Zum Beispiel würden V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array in aufsteigender Reihenfolge zurückgeben wird, als `[1, 1, 3, 4, 5, 9]`.

Wenn jedoch die `compareFn` Funktion leicht geändert wird, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortiert V8 und JavaScriptCore es absteigend, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser inkonsistenten Implementierung wird stets empfohlen, Ihren Komparator wohldefiniert zu machen, indem Sie die fünf Einschränkungen befolgen.

### Verwendung von sort() auf spärlichen Arrays

Leere Plätze werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### sort() bei nicht-Array-Objekten aufrufen

Die Methode `sort()` liest die `length`-Eigenschaft von `this`. Dann sammelt sie alle vorhandenen integer-indizierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn in diesem Bereich Eigenschaften fehlen, werden die entsprechenden nachfolgenden Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht vorhandenen Eigenschaften ans Ende sortiert würden.

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
- [Sortieren in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort` Stabilität](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
