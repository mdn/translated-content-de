---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 16ab284e13c340defe7317d8c600fc5d28c76fb0
---

{{JSRef}}

Die **`sort()`**-Methode der {{jsxref("Array")}}-Instanzen sortiert die Elemente eines Arrays _[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe Array zurück, jetzt sortiert. Die Standardsortierreihenfolge ist aufsteigend und basiert darauf, die Elemente in Strings umzuwandeln und dann ihre Sequenzen von UTF-16-Codeeinheitenwerten zu vergleichen.

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

    Es sollte eine Zahl zurückgeben, wobei:

    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich betrachtet werden.

    Zum Merken: `(a, b) => a - b` sortiert Zahlen in aufsteigender Reihenfolge.

    Wenn diese weggelassen wird, werden die Array-Elemente in Strings umgewandelt und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, jetzt sortiert. Beachten Sie, dass das Array _[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wird `compareFn` nicht angegeben, werden alle nicht `undefined`-Array-Elemente sortiert, indem sie in Strings umgewandelt und Strings in der Reihenfolge der UTF-16-Codeeinheiten verglichen werden. Zum Beispiel kommt „banana“ vor „cherry“. Bei einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Strings umgewandelt werden, kommt "80" im Unicodesystem vor "9". Alle `undefined`-Elemente werden ans Ende des Arrays sortiert.

Die `sort()`-Methode bewahrt leere Plätze. Wenn das Ausgangsarray [lückenhaft](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Plätze an das Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen über `\uFFFF` als zwei Stellvertreter-Codeeinheiten kodiert, im Bereich
> `\uD800` - `\uDFFF`. Der Wert jeder Codeeinheit wird separat für den Vergleich berücksichtigt. Somit wird das Zeichen, das durch das Stellvertreterpaar `\uD855\uDE51` gebildet wird, vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben ist, werden alle nicht `undefined`-Array-Elemente gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden ans Ende des Arrays sortiert, ohne einen Aufruf von `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                                    |
| ------------------------------ | ----------------------------------------------------- |
| > 0                            | sortiere `a` nach `b`, z.B. `[b, a]`                  |
| < 0                            | sortiere `a` vor `b`, z.B. `[a, b]`                   |
| === 0                          | behalte die ursprüngliche Reihenfolge von `a` und `b` |

Daher hat die Vergleichsfunktion folgende Form:

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

Formeller ausgedrückt sollte der Vergleich mit den folgenden Eigenschaften ausgestattet sein, um ein korrektes Sortierverhalten sicherzustellen:

- _Rein_: Der Vergleich verändert nicht die zu vergleichenden Objekte oder einen externen Zustand. (Dies ist wichtig, da es keine Garantie gibt, _wann_ und _wie oft_ der Vergleich aufgerufen wird, daher sollte jeder Aufruf keine sichtbaren Effekte nach außen hin erzeugen.)
- _Stabil_: Der Vergleich gibt dasselbe Ergebnis mit demselben Paar von Eingaben zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, dann hat `compareFn(a, c)` die gleiche Positivität wie die vorherigen beiden.

Ein Vergleich, der die obigen Einschränkungen erfüllt, kann immer `1`, `0` und `-1` zurückgeben oder konsistent `0` zurückgeben. Wenn ein Vergleich beispielsweise nur `1` und `0` zurückgibt oder nur `0` und `-1`, wird er nicht zuverlässig sortieren, da die _Antisymmetrie_ verletzt wird. Ein Vergleich, der immer `0` zurückgibt, führt dazu, dass das Array überhaupt nicht verändert wird, ist jedoch trotzdem zuverlässig.

Der standardmäßige lexikografische Vergleich erfüllt alle oben genannten Einschränkungen.

Um Zahlen anstelle von Strings zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (wenn es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganze Zahl-eingefasste Eigenschaften hat. Obwohl Zeichenfolgen auch array-ähnlich sind, ist diese Methode nicht geeignet, auf sie angewendet zu werden, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche Array, dann die sortierten Arrays an. Die numerischen Arrays werden ohne Vergleichsfunktion und dann unter Verwendung einer solchen sortiert.

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

Um Zeichenfolgen mit nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen zu sortieren, d.h. Zeichenfolgen mit Akzentzeichen (e, é, è, a, ä, etc.), Zeichenfolgen aus anderen als der englischen Sprache, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, damit sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit map

Die `compareFn` kann mehrfach pro Element im Array aufgerufen werden. Je nach Art von `compareFn` kann dies zu einem hohen Overhead führen. Je mehr Arbeit ein `compareFn` verrichtet und je mehr Elemente zu sortieren sind, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) zum Sortieren zu verwenden. Die Idee besteht darin, das Array einmal zu durchlaufen, um die tatsächlich zum Sortieren verwendeten Werte in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

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

Eine Open-Source-Bibliothek namens [mapsort](https://github.com/Pimm/mapsort) steht zur Verfügung, die diesen Ansatz anwendet.

### sort() gibt die Referenz auf dasselbe Array zurück

Die `sort()`-Methode gibt eine Referenz auf das ursprüngliche Array zurück, daher verändert das Verändern des zurückgegebenen Arrays auch das ursprüngliche Array.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das ursprüngliche Array nicht verändert, sondern ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array wie andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) zurückgibt, verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}}-Methode. Alternativ können Sie vor dem Aufruf von `sort()` eine flache Kopie erstellen, indem Sie die [spread syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Sortier-Stabilität

Seit Version 10 (oder ECMAScript 2019) diktiert die Spezifikation, dass `Array.prototype.sort` stabil ist.

Angenommen, Sie hätten eine Liste von Studenten zusammen mit ihren Noten. Beachten Sie, dass die Liste der Studenten bereits im Voraus nach Namen in alphabetischer Reihenfolge sortiert ist:

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

Es ist wichtig zu beachten, dass Studenten, die die gleiche Note haben (zum Beispiel Alex und Devlin), in der gleichen Reihenfolge wie vor dem Sortieren bleiben. Dies ist das, was ein stabiles Sortierverfahren garantiert.

Vor Version 10 (oder ECMAScript 2019) war die Stabilität des Sortierens nicht garantiert, was bedeutete, dass man mit dem folgenden enden konnte:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit fehlerhaftem Vergleich

Wenn eine Vergleichsfunktion nicht alle in der [Beschreibung](#beschreibung) erklärten Anforderungen an Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität erfüllt, ist das Verhalten des Programms nicht vordefiniert.

Beispielsweise betrachten Sie diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn`-Funktion hier ist nicht richtig geformt, weil sie die Antisymmetrie nicht erfüllt: Wenn `a > b`, gibt sie `1` zurück; aber durch Austauschen von `a` und `b` gibt sie `0` statt eines negativen Wertes zurück. Daher wird das resultierende Array in verschiedenen Engines unterschiedlich sein. Zum Beispiel würden V8 (verwendet von Chrome, Node.js, etc.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array in aufsteigender Reihenfolge zurückgeben wird, als `[1, 1, 3, 4, 5, 9]`.

Wird die `compareFn`-Funktion jedoch leicht geändert, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortieren V8 und JavaScriptCore es in absteigender Reihenfolge, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert lässt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Inkonsistenz der Implementierung wird immer empfohlen, Ihr Vergleich richtig zu formen, indem Sie die fünf Einschränkungen befolgen.

### Verwenden von sort() auf lückenhaften Arrays

Leere Plätze werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufrufen von sort() auf Nicht-Array-Objekten

Die `sort()`-Methode liest die `length`-Eigenschaft von `this`. Sie sammelt dann alle existierenden ganzzahligeigenschlüsselten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn im Bereich fehlende Eigenschaften vorhanden sind, werden die entsprechenden nachfolgenden Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht existenten Eigenschaften zum Ende hin sortiert werden.

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

- [Polyfill von `Array.prototype.sort` mit modernem Verhalten wie stabilem Sortieren in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden für indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Dinge in V8 sortieren](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabiles `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort`-Stabilität](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
