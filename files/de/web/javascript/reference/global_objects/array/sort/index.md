---
title: Array.prototype.sort()
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`sort()`** Methode von {{jsxref("Array")}} Instanzen sortiert die Elemente eines Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe, nun sortierte Array zurück. Die Standardsortierreihenfolge ist aufsteigend, basierend auf der Umwandlung der Elemente in Strings, die dann nach ihren UTF-16-Code-Einheit-Werten verglichen werden.

Die Zeit- und Platzkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

Um die Elemente eines Arrays zu sortieren, ohne das Original-Array zu verändern, verwenden Sie {{jsxref("Array/toSorted", "toSorted()")}}.

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

    Die Funktion sollte eine Zahl zurückgeben, bei der:
    - Ein negativer Wert anzeigt, dass `a` vor `b` kommt.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommt.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich betrachtet werden.

    Um sich das zu merken, bedenken Sie, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wenn die Funktion nicht angegeben wird, werden die Array-Elemente in Strings umgewandelt und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das Original-Array, das nun sortiert ist. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht angegeben wird, werden alle nicht-`undefined`-Array-Elemente durch Umwandeln in Strings sortiert und die Strings gemäß der Reihenfolge ihrer UTF-16-Codes verglichen. Zum Beispiel kommt "banana" vor "cherry". In einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Strings umgewandelt werden, kommt "80" im Unicode vor "9". Alle `undefined`-Elemente werden ans Ende des Arrays sortiert.

Die `sort()` Methode bewahrt leere Plätze. Wenn das Quell-Array [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Plätze an das Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen über `\uFFFF` als zwei Surrogat-Code-Einheiten kodiert, im Bereich von `\uD800` - `\uDFFF`. Der Wert jeder Code-Einheit wird bei der Vergleichen einzeln berücksichtigt. Somit wird das Zeichen, das durch das Surrogatpaar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle nicht-`undefined`-Array-Elemente gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden ans Ende des Arrays sortiert, ohne Aufruf der `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                                       |
| ------------------------------ | -------------------------------------------------------- |
| > 0                            | sortiert `a` nach `b`, z.B. `[b, a]`                     |
| < 0                            | sortiert `a` vor `b`, z.B. `[a, b]`                      |
| === 0                          | behält die ursprüngliche Reihenfolge von `a` und `b` bei |

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

Formal erwartet man, dass der Komparator die folgenden Eigenschaften aufweist, um ein korrektes Sortierverhalten sicherzustellen:

- _Rein_: Der Komparator verändert die zu vergleichenden Objekte oder irgendeinen äußeren Zustand nicht. (Dies ist wichtig, weil es keine Garantie gibt, _wann_ und _wie_ der Komparator aufgerufen wird, so dass ein bestimmter Anruf keine sichtbaren Effekte nach außen haben sollte.)
- _Stabil_: Der Komparator gibt bei denselben Eingabepaaren dasselbe Ergebnis zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Anti-symmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` sein oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, dann hat `compareFn(a, c)` dieselbe Positivität wie die vorherigen beiden.

Ein Komparator, der den oben genannten Beschränkungen entspricht, kann immer alle von `1`, `0` und `-1` zurückgeben oder konsequent `0` zurückgeben. Wenn ein Komparator beispielsweise nur `1` und `0` oder nur `0` und `-1` zurückgibt, wird er nicht zuverlässig sortieren können, da die _Anti-Symmetrie_ gebrochen ist. Ein Komparator, der stets `0` zurückgibt, wird das Array gar nicht verändern, ist aber dennoch zuverlässig.

Der standardmäßig lexikographische Komparator erfüllt alle oben genannten Bedingungen.

Um Zahlen anstelle von Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (wenn es nicht `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und Integer-Index-Properties hat. Obwohl Strings auch array-ähnlich sind, ist diese Methode nicht geeignet, auf sie angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Ein Array erstellen, anzeigen und sortieren

Das folgende Beispiel erstellt vier Arrays und zeigt das Original-Array, dann die sortierten Arrays. Die numerischen Arrays werden ohne eine Vergleichsfunktion sortiert und dann unter Verwendung einer.

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

Arrays von Objekten können sortiert werden, indem man den Wert einer ihrer Eigenschaften vergleicht.

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

Für das Sortieren von Strings mit nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen, d.h. Zeichenketten mit Akzenten (e, é, è, a, ä, etc.), Strings aus anderen als der englischen Sprache, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, so dass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit `map`

Der `compareFn` kann innerhalb des Arrays mehrfach pro Element aufgerufen werden. Abhängig von der Natur des `compareFn` kann dies zu einem hohen Overhead führen. Je mehr Arbeit ein `compareFn` leistet und je mehr Elemente es zu sortieren gibt, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) für die Sortierung zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlich für das Sortieren verwendeten Werte in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Ordnung zu erreichen.

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

### `sort()` gibt die Referenz auf dasselbe Array zurück

Die `sort()` Methode gibt eine Referenz auf das Original-Array zurück. Das bedeutet, dass das Mutieren des zurückgegebenen Arrays auch das Original-Array ändern wird.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie `sort()` verwenden möchten, ohne das Original-Array zu verändern, aber ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array erhalten möchten, wie dies bei anderen Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) der Fall ist, verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}} Methode. Alternativ können Sie eine flache Kopie vor dem Aufruf von `sort()` machen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Sortierstabilität

Seit Version 10 (oder ECMAScript 2019) schreibt die Spezifikation vor, dass `Array.prototype.sort` stabil ist.

Angenommen, Sie haben eine Liste von Studenten zusammen mit ihren Noten. Beachten Sie, dass die Liste der Studenten bereits alphabetisch nach Namen vorsortiert ist:

```js
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
```

Nachdem Sie dieses Array nach `grade` in aufsteigender Reihenfolge sortiert haben:

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

Es ist wichtig zu beachten, dass Studenten, die die gleiche Note haben (zum Beispiel Alex und Devlin), in der gleichen Reihenfolge bleiben, wie vor dem Aufruf von `sort()`. Das garantiert ein stabiles Sortierverfahren.

Vor Version 10 (oder ECMAScript 2019) war die Sortierstabilität nicht garantiert, was dazu führen konnte, dass das Ergebnis folgendes war:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit einem nicht wohldefinierten Komparator

Wenn eine Vergleichsfunktion nicht alle Regeln der Reinheit, Stabilität, Reflexivität, Anti-Symmetrie und Transitivität erfüllt, wie in der [Beschreibung](#beschreibung) erklärt, ist das Verhalten des Programms nicht wohldefiniert.

Betrachten Sie zum Beispiel diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn` Funktion hier ist nicht wohldefiniert, da sie die Anti-Symmetrie nicht erfüllt: Wenn `a > b`, gibt sie `1` zurück; aber indem man `a` und `b` austauscht, gibt sie `0` anstelle eines negativen Werts zurück. Deshalb wird das resultierende Array in verschiedenen Engines unterschiedlich sein. Zum Beispiel würde V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortieren würde, als `[1, 1, 3, 4, 5, 9]`.

Wird jedoch die `compareFn` Funktion geringfügig geändert, so dass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortieren V8 und JavaScriptCore es absteigend, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Implementierungskonsistenz wird immer empfohlen, Ihren Komparator wohldefiniert zu machen, indem Sie den fünf Bedingungen folgen.

### Verwenden von `sort()` bei spärlichen Arrays

Leere Plätze werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufruf von `sort()` bei Nicht-Array-Objekten

Die `sort()` Methode liest die `length` Eigenschaft von `this`. Dann sammelt sie alle vorhandenen, ganzzahlig indizierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn es in diesem Bereich fehlende Eigenschaften gibt, werden die entsprechenden nachfolgenden Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht vorhandenen Eigenschaften am Ende sortiert würden.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Elemente in V8 sortieren](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort` Stabilität](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
