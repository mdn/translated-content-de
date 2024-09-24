---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("Array")}} Instanzen sortiert die Elemente eines Arrays _[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf das gleiche, nun sortierte Array zurück. Die Standardsortierreihenfolge ist aufsteigend, basierend auf der Umwandlung der Elemente in Zeichenketten und dem Vergleich ihrer UTF-16-Codeeinheitenwerte.

Die Zeit- und Platzkomplexität der Sortierung kann nicht garantiert werden, da sie von der Implementierung abhängt.

Um die Elemente eines Arrays zu sortieren, ohne das Originalarray zu verändern, verwenden Sie {{jsxref("Array/toSorted", "toSorted()")}}.

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

    - Ein negativer Wert bedeutet, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert bedeutet, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` bedeutet, dass `a` und `b` als gleich angesehen werden.

    Um sich das zu merken, denken Sie daran, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wird die Funktion weggelassen, werden die Array-Elemente in Zeichenketten umgewandelt und dann gemäß dem Unicode-Codepunktwert jedes Zeichens sortiert.

### Rückgabewert

Die Referenz auf das Originalarray, das nun sortiert ist. Beachten Sie, dass das Array _[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Wenn `compareFn` nicht bereitgestellt wird, werden alle nicht-`undefined`-Array-Elemente durch Umwandeln in Zeichenketten und Vergleichen von Zeichenfolgen in UTF-16 Code-Einheiten-Reihenfolge sortiert. Zum Beispiel kommt "banana" vor "cherry". Bei einer numerischen Sortierung kommt 9 vor 80, aber da Zahlen in Zeichenketten umgewandelt werden, kommt "80" vor "9" in der Unicode-Reihenfolge. Alle `undefined`-Elemente werden an das Ende des Arrays sortiert.

Die `sort()`-Methode bewahrt leere Plätze. Wenn das Quellarray [dünn besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Plätze an das Ende des Arrays verschoben und kommen immer nach allen `undefined`.

> [!NOTE]
> In UTF-16 werden Unicode-Zeichen oberhalb `\uFFFF` als zwei Surrogat-Codeeinheiten kodiert, im Bereich von `\uD800` - `\uDFFF`. Der Wert jeder Codeeinheit wird separat für den Vergleich berücksichtigt. Daher wird das durch das Surrogatpaar `\uD855\uDE51` geformte Zeichen vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFn` bereitgestellt wird, werden alle nicht-`undefined`-Array-Elemente gemäß dem Rückgabewert der Vergleichsfunktion sortiert (alle `undefined`-Elemente werden an das Ende des Arrays sortiert, ohne Aufruf von `compareFn`).

| `compareFn(a, b)` Rückgabewert | Sortierreihenfolge                  |
| ------------------------------ | ---------------------------------- |
| > 0                            | sortiere `a` nach `b`, z. B. `[b, a]` |
| < 0                            | sortiere `a` vor `b`, z. B. `[a, b]` |
| === 0                          | behalte die ursprüngliche Reihenfolge von `a` und `b` |

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

Formal erwartet man von dem Comparator, dass er die folgenden Eigenschaften hat, um ein korrektes Sortierverhalten zu gewährleisten:

- _Rein_: Der Comparator verändert weder die verglichenen Objekte noch einen externen Zustand. (Dies ist wichtig, da es keine Garantie gibt, _wann_ und _wie_ der Comparator aufgerufen wird, sodass ein bestimmter Aufruf keine sichtbaren Effekte nach außen haben sollte.)
- _Stabil_: Der Comparator gibt mit demselben Paar von Eingaben das gleiche Ergebnis zurück.
- _Reflexiv_: `compareFn(a, a) === 0`.
- _Antisymmetrisch_: `compareFn(a, b)` und `compareFn(b, a)` müssen beide `0` sein oder entgegengesetzte Vorzeichen haben.
- _Transitiv_: Wenn `compareFn(a, b)` und `compareFn(b, c)` beide positiv, null oder negativ sind, hat `compareFn(a, c)` dieselbe Positivität wie die vorherigen beiden.

Ein Comparator, der die obigen Einschränkungen erfüllt, wird immer in der Lage sein, alle von `1`, `0` und `-1` zurückzugeben oder konsequent `0` zurückzugeben. Wenn ein Comparator beispielsweise nur `1` und `0` oder nur `0` und `-1` zurückgibt, kann er nicht zuverlässig sortieren, da _Antisymmetrie_ verletzt ist. Ein Comparator, der immer `0` zurückgibt, bewirkt, dass das Array gar nicht verändert wird, ist aber trotzdem zuverlässig.

Der standardmäßige lexikografische Comparator erfüllt alle oben genannten Einschränkungen.

Um Zahlen anstelle von Zeichenfolgen zu vergleichen, kann die Vergleichsfunktion `b` von `a` subtrahieren. Die folgende Funktion sortiert das Array in aufsteigender Reihenfolge (sofern es kein `NaN` enthält):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Es wird nur erwartet, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat. Obwohl Zeichenketten ebenfalls array-artig sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Zeichenketten unveränderlich sind.

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Das folgende Beispiel erstellt vier Arrays und zeigt das ursprüngliche und dann die sortierten Arrays. Die numerischen Arrays werden ohne und dann mit einer Vergleichsfunktion sortiert.

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

Arrays von Objekten können durch den Vergleich des Wertes einer ihrer Eigenschaften sortiert werden.

```js
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sortieren nach Wert
items.sort((a, b) => a.value - b.value);

// sortieren nach Name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // Groß- und Kleinschreibung ignorieren
  const nameB = b.name.toUpperCase(); // Groß- und Kleinschreibung ignorieren
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // Namen müssen gleich sein
  return 0;
});
```

### Sortieren von nicht-ASCII-Zeichen

Zum Sortieren von Zeichenfolgen mit nicht {{Glossary("ASCII")}}-Zeichen, d.h. Zeichenfolgen mit Akzenten (e, é, è, a, ä usw.), und Zeichenfolgen aus anderen Sprachen als Englisch, verwenden Sie {{jsxref("String.prototype.localeCompare()")}}. Diese Funktion kann diese Zeichen vergleichen, sodass sie in der richtigen Reihenfolge erscheinen.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items ist ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Sortieren mit map

Die `compareFn` kann pro Element innerhalb des Arrays mehrmals aufgerufen werden. Abhängig von der Natur der `compareFn` kann dies zu einem hohen Overhead führen. Je mehr Arbeit `compareFn` leistet und je mehr Elemente sortiert werden müssen, desto effizienter kann es sein, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) zur Sortierung zu verwenden. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlich zur Sortierung verwendeten Werte in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erhalten.

```js
// das zu sortierende Array
const data = ["delta", "alpha", "charlie", "bravo"];

// temporäres Array speichert Objekte mit Position und Sortierwert
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

// das gemappte Array sortieren, das die reduzierten Werte enthält
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

Die `sort()`-Methode gibt eine Referenz auf das Originalarray zurück, sodass eine Veränderung des zurückgegebenen Arrays das Originalarray ebenfalls verändert.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers und sorted sind beide [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Falls Sie möchten, dass `sort()` das Originalarray nicht verändert, sondern ein [flachkopiertes](/de/docs/Glossary/Shallow_copy) Array wie andere Array-Methoden (z. B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) zurückgibt, verwenden Sie die {{jsxref("Array/toSorted", "toSorted()")}}-Methode. Alternativ können Sie eine flache Kopie erstellen, bevor Sie `sort()` aufrufen, unter Verwendung der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] erzeugt eine flache Kopie, sodass sort() das Original nicht verändert
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Stabilität der Sortierung

Seit Version 10 (oder ECMAScript 2019) gibt die Spezifikation vor, dass `Array.prototype.sort` stabil ist.

Angenommen, Sie hätten eine Liste von Schülern zusammen mit ihren Noten. Beachten Sie, dass die Liste der Schüler bereits nach Namen in alphabetischer Reihenfolge vorgesortiert ist:

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

Die Variable `students` wird dann den folgenden Wert haben:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // Original beibehalten bei ähnlicher Note (stabile Sortierung)
  { name: "Devlin", grade: 15 }, // Original beibehalten bei ähnlicher Note (stabile Sortierung)
];
```

Es ist wichtig zu beachten, dass Schüler, die die gleiche Note haben (zum Beispiel Alex und Devlin), in der gleichen Reihenfolge bleiben, wie vor dem Aufruf der Sortierung. Dies garantiert ein stabiler Sortieralgorithmus.

Vor Version 10 (oder ECMAScript 2019) war die Sortierstabilität nicht garantiert, was bedeutet, dass Sie am Ende Folgendes haben könnten:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // Originalreihenfolge nicht beibehalten
  { name: "Alex", grade: 15 }, // Originalreihenfolge nicht beibehalten
];
```

### Sortieren mit nicht wohlgeformtem Comparator

Wenn eine Vergleichsfunktion nicht alle Regeln der Reinheit, Stabilität, Reflexivität, Antisymmetrie und Transitivität erfüllt, wie in der [Beschreibung](#beschreibung) erklärt wird, ist das Verhalten des Programms nicht wohldefiniert.

Beispielsweise betrachten Sie diesen Code:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

Die `compareFn`-Funktion hier ist nicht wohlgeformt, weil sie die Antisymmetrie nicht erfüllt: Wenn `a > b`, gibt sie `1` zurück; beim Vertauschen von `a` und `b` gibt sie jedoch `0` statt eines negativen Werts zurück. Daher wird das resultierende Array in verschiedenen Engines unterschiedlich sein. Zum Beispiel würden V8 (verwendet von Chrome, Node.js usw.) und JavaScriptCore (verwendet von Safari) das Array überhaupt nicht sortieren und `[3, 1, 4, 1, 5, 9]` zurückgeben, während SpiderMonkey (verwendet von Firefox) das Array aufsteigend sortieren würde, als `[1, 1, 3, 4, 5, 9]`.

Wenn jedoch die `compareFn`-Funktion geringfügig geändert wird, sodass sie `-1` oder `0` zurückgibt:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

Dann sortiert V8 und JavaScriptCore es absteigend, als `[9, 5, 4, 3, 1, 1]`, während SpiderMonkey es unverändert zurückgibt: `[3, 1, 4, 1, 5, 9]`.

Aufgrund dieser Implementierungsinkonsistenz wird Ihnen immer empfohlen, Ihren Comparator ordnungsgemäß zu gestalten, indem Sie die fünf Einschränkungen befolgen.

### Verwenden von sort() bei dünn besetzten Arrays

Leere Plätze werden an das Ende des Arrays verschoben.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Aufrufen von sort() auf Nicht-Array-Objekten

Die `sort()`-Methode liest die `length`-Eigenschaft von `this`. Dann sammelt sie alle vorhandenen ganzzahlig indizierten Eigenschaften im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie zurück. Wenn es fehlende Eigenschaften im Bereich gibt, werden die entsprechenden nachlaufenden Eigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), als ob die nicht existierenden Eigenschaften gegen Ende sortiert werden.

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
- [Getting things sorted in V8](https://v8.dev/blog/array-sort) auf v8.dev (2018)
- [Stabile `Array.prototype.sort`](https://v8.dev/features/stable-sort) auf v8.dev (2019)
- [`Array.prototype.sort` Stabilität](https://mathiasbynens.be/demo/sort-stability) von Mathias Bynens
