---
title: Array.prototype.sort()
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`sort()`** von {{jsxref("Array")}}-Instanzen sortiert die Elemente eines Arrays _[direkt im Array](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt eine Referenz auf dasselbe, nun sortierte Array zurück. Standardmäßig wird aufsteigend sortiert. Dazu werden die Elemente in Zeichenfolgen umgewandelt und anschließend anhand der Werte ihrer UTF-16-Codeeinheiten verglichen.

Die Zeit- und Speicherkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

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
  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Sie wird mit den folgenden Argumenten aufgerufen:
    - `a`
      - : Das erste zu vergleichende Element. Es ist niemals `undefined`.
    - `b`
      - : Das zweite zu vergleichende Element. Es ist niemals `undefined`.

    Die Funktion sollte eine Zahl zurückgeben, wobei gilt:
    - Ein negativer Wert bedeutet, dass `a` vor `b` stehen soll.
    - Ein positiver Wert bedeutet, dass `a` nach `b` stehen soll.
    - Null oder `NaN` bedeutet, dass `a` und `b` als gleich gelten.

    Als Merkhilfe: `(a, b) => a - b` sortiert Zahlen in aufsteigender Reihenfolge.

    Wird die Funktion weggelassen, werden die Array-Elemente in Zeichenfolgen umgewandelt und anschließend nach dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Eine Referenz auf das ursprüngliche, nun sortierte Array. Beachten Sie, dass das Array _[direkt im Array](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht angegeben wird, werden alle Array-Elemente außer `undefined` in Zeichenfolgen umgewandelt und in der Reihenfolge der UTF-16-Codeeinheiten verglichen. Beispielsweise steht „banana“ vor „cherry“. Bei einer numerischen Sortierung steht 9 vor 80. Da Zahlen jedoch in Zeichenfolgen umgewandelt werden, steht „80“ in der Unicode-Reihenfolge vor „9“. Alle `undefined`-Elemente werden an das Ende des Arrays sortiert.

Die Methode `sort()` erhält leere Plätze. Wenn das Quellarray [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Plätze an das Ende des Arrays verschoben und stehen stets hinter allen `undefined`-Elementen.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen oberhalb von `\uFFFF` als zwei Surrogat-Codeeinheiten im Bereich `\uD800` - `\uDFFF` codiert. Beim Vergleich wird der Wert jeder Codeeinheit einzeln berücksichtigt. Daher wird das aus dem Surrogatpaar `\uD855\uDE51` gebildete Zeichen vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` angegeben wird, werden alle Array-Elemente außer `undefined` entsprechend dem Rückgabewert der Vergleichsfunktion sortiert. Alle `undefined`-Elemente werden an das Ende des Arrays sortiert, ohne dass `compareFn` für sie aufgerufen wird.

| Rückgabewert von `compareFn(a, b)` | Sortierreihenfolge                                    |
| ---------------------------------- | ----------------------------------------------------- |
| > 0                                | `a` nach `b` sortieren, z. B. `[b, a]`                |
| < 0                                | `a` vor `b` sortieren, z. B. `[a, b]`                 |
| === 0                              | Ursprüngliche Reihenfolge von `a` und `b` beibehalten |

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

Formal betrachtet sollte die Vergleichsfunktion die folgenden Eigenschaften erfüllen, damit eine korrekte Sortierung gewährleistet ist:

- _Rein_: Die Vergleichsfunktion verändert weder die verglichenen Objekte noch einen externen Zustand. (Das ist wichtig, weil nicht garantiert ist, _wann_ und _wie_ die Vergleichsfunktion aufgerufen wird. Ein einzelner Aufruf sollte daher keine von außen sichtbaren Auswirkungen haben.)
- _Stabil_: Die Vergleichsfunktion gibt für dasselbe Eingabepaar dasselbe Ergebnis zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen entweder beide `0` sein oder unterschiedliche Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, hat `compareFn(a, c)` dasselbe Vorzeichen beziehungsweise ist ebenfalls null.

Eine Vergleichsfunktion, die die obigen Bedingungen erfüllt, kann stets jeden der Werte `1`, `0` und `-1` zurückgeben oder durchgehend `0` zurückgeben. Gibt sie beispielsweise nur `1` und `0` oder nur `0` und `-1` zurück, kann sie nicht zuverlässig sortieren, weil die _Antisymmetrie_ verletzt ist. Eine Vergleichsfunktion, die immer `0` zurückgibt, verändert das Array überhaupt nicht, verhält sich aber dennoch zuverlässig.

Die standardmäßige lexikografische Vergleichsfunktion erfüllt alle oben genannten Bedingungen.

Um Zahlen statt Zeichenfolgen zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge, sofern es kein `NaN` enthält:

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die Methode `sort()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat. Obwohl Zeichenfolgen ebenfalls arrayähnlich sind, eignet sich diese Methode nicht für sie, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Ein Array erstellen, anzeigen und sortieren

Das folgende Beispiel erstellt vier Arrays und zeigt zunächst das ursprüngliche Array, danach die sortierten Arrays an. Die numerischen Arrays werden zuerst ohne und anschließend mit einer Vergleichsfunktion sortiert.

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

### Ein Array von Objekten sortieren

Arrays von Objekten können sortiert werden, indem die Werte einer ihrer Eigenschaften verglichen werden.

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

### Nicht-ASCII-Zeichen sortieren

Zum Sortieren von Zeichenfolgen mit Nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen – etwa Zeichenfolgen mit Akzenten (e, é, è, a, ä usw.) oder Zeichenfolgen aus anderen Sprachen als Englisch – verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann solche Zeichen so vergleichen, dass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit map

`compareFn` kann für jedes Element im Array mehrfach aufgerufen werden. Je nach Art von `compareFn` kann dies einen hohen Aufwand verursachen. Je aufwendiger die Berechnungen von `compareFn` sind und je mehr Elemente sortiert werden müssen, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) zum Sortieren zu verwenden. Die Idee besteht darin, das Array einmal zu durchlaufen und die für die Sortierung tatsächlich verwendeten Werte in einem temporären Array zu speichern. Anschließend wird das temporäre Array sortiert und erneut durchlaufen, um die richtige Reihenfolge herzustellen.

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

Die Open-Source-Bibliothek [mapsort](https://github.com/Pimm/mapsort) setzt diesen Ansatz um.

### sort() gibt eine Referenz auf dasselbe Array zurück

Die Methode `sort()` gibt eine Referenz auf das ursprüngliche Array zurück. Wird das zurückgegebene Array verändert, ändert sich daher auch das ursprüngliche Array.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Wenn `sort()` das ursprüngliche Array nicht verändern, sondern wie andere Array-Methoden (z. B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array zurückgeben soll, verwenden Sie die Methode {{jsxref("Array/toSorted", "toSorted()")}}. Alternativ können Sie vor dem Aufruf von `sort()` mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) eine flache Kopie erstellen.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Stabilität der Sortierung

Seit Version 10 (beziehungsweise ECMAScript 2019) schreibt die Spezifikation vor, dass `Array.prototype.sort` stabil ist.

Angenommen, Sie haben eine Liste von Lernenden mit ihren Noten. Beachten Sie, dass die Liste bereits alphabetisch nach Namen vorsortiert ist:

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

hat die Variable `students` den folgenden Wert:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Wichtig ist, dass Lernende mit derselben Note (beispielsweise Alex und Devlin) in derselben Reihenfolge bleiben wie vor dem Sortieren. Genau das garantiert ein stabiler Sortieralgorithmus.

Vor Version 10 (beziehungsweise ECMAScript 2019) war eine stabile Sortierung nicht garantiert. Das Ergebnis konnte beispielsweise so aussehen:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### Sortieren mit einer nicht korrekt definierten Vergleichsfunktion

Wenn eine Vergleichsfunktion nicht alle in der [Beschreibung](#beschreibung) erläuterten Bedingungen für Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität erfüllt, ist das Verhalten des Programms nicht eindeutig definiert.

Betrachten Sie beispielsweise diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die Funktion `compareFn` ist hier nicht korrekt definiert, weil sie die Antisymmetrie nicht erfüllt: Wenn `a > b` gilt, gibt sie `1` zurück. Werden `a` und `b` vertauscht, gibt sie jedoch `0` statt eines negativen Werts zurück. Daher unterscheidet sich das resultierende Array je nach Engine. V8 (verwendet von Chrome, Node.js usw.) und JavaScriptCore (verwendet von Safari) würden das Array beispielsweise überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben. SpiderMonkey (verwendet von Firefox) würde dagegen das aufsteigend sortierte Array `[1, 1, 3, 4, 5, 9]` zurückgeben.

Wenn `compareFn` jedoch leicht geändert wird, sodass die Funktion `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

sortieren V8 und JavaScriptCore das Array absteigend zu `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert als `[3, 1, 4, 1, 5, 9]` zurückgibt.

Wegen dieser Unterschiede zwischen den Implementierungen sollten Sie Ihre Vergleichsfunktion stets so gestalten, dass sie die fünf Bedingungen erfüllt.

### sort() auf spärliche Arrays anwenden

Leere Plätze werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### sort() für Nicht-Array-Objekte aufrufen

Die Methode `sort()` liest die `length`-Eigenschaft von `this`. Anschließend erfasst sie alle vorhandenen Eigenschaften mit ganzzahligen Schlüsseln im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn in diesem Bereich Eigenschaften fehlen, werden die entsprechenden Eigenschaften am Ende [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) – so, als würden die nicht vorhandenen Eigenschaften an das Ende sortiert.

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

- [Polyfill für `Array.prototype.sort` mit modernem Verhalten wie stabiler Sortierung in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Sortieren in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabiles `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [Stabilität von `Array.prototype.sort`](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
