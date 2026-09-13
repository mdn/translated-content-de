---
title: Iterator.zip()
short-title: zip()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zip
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{JSRef}}

Die statische Methode **`Iterator.zip()`** erstellt ein neues {{jsxref("Iterator")}}-Objekt, das Elemente aus mehreren iterierbaren Objekten durch das Ausgeben von Arrays aggregiert, die Elemente an der gleichen Position enthalten. Es „zipt“ im Wesentlichen die Eingabeiterables zusammen und ermöglicht das gleichzeitige Durchlaufen dieser.

Die Methode {{jsxref("Iterator.zipKeyed()")}} ist ähnlich, gibt jedoch Objekte statt Arrays aus, wobei Sie die Schlüssel angeben können.

## Syntax

```js-nolint
Iterator.zip(iterables)
Iterator.zip(iterables, options)
```

### Parameter

- `iterables`
  - : Ein Iterable von Iterables, dessen Elemente aggregiert werden. Es muss [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) sein und kann kein [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) sein. Es sollte endlich sein, obwohl seine Elemente unendliche Iterables sein können. Jedes Element muss entweder das [iterierbare](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Protokoll oder, falls dies nicht der Fall ist, das [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Protokoll implementieren. Zeichenfolgen werden abgelehnt: Um Zeichenfolgen zu zippen, konvertieren Sie sie explizit mit {{jsxref("Iterator.from()")}} in Iteratoren.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten bei inkonsistenten Eingabelängen angibt. Es kann die folgenden Eigenschaften haben:
    - `mode` {{optional_inline}}
      - : Eine der folgenden:
        - `"shortest"` (Standard): Der resultierende Iterator stoppt, wenn ein Eingabe-Iterable erschöpft ist.
        - `"longest"`: Der resultierende Iterator stoppt, wenn alle Eingabe-Iterables erschöpft sind. Fehlende Werte aus kürzeren Iterables werden gemäß der `padding`-Option ausgefüllt.
        - `"strict"`: Ein {{jsxref("TypeError")}} wird geworfen, wenn nicht alle Eingabe-Iterables gleichzeitig enden.
    - `padding` {{optional_inline}}
      - : Ein iterierbares Objekt (kein Iterator). Nur abgerufen und validiert, wenn `mode` `"longest"` ist. Wenn `undefined` oder nicht vorhanden, werden fehlende Werte aus kürzeren Iterables mit `undefined` gefüllt (was dem Übergeben eines leeren Iterables entspricht). Wenn ein Iterable bereitgestellt wird, wird es für die Anzahl der Elemente in `iterables` durchlaufen, _sobald `Iterator.zip()` aufgerufen wird_. `padding[i]` wird für fehlende Werte für `iterables[i]` verwendet (angenommen, `padding` und `iterables` werden als Arrays angegeben; das müssen sie nicht). Wenn `padding` kürzer ist als `iterables`, wird `undefined` für die verbleibenden Iterables verwendet.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt. Jedes seiner Elemente ist ein Array mit der Länge, die der Anzahl der Eingabe-Iterables entspricht, und enthält die Elemente jedes Eingabe-Iterables an der entsprechenden Position. Wenn das `iterables`-Objekt leer ist, wird der resultierende Iterator als abgeschlossen erstellt.

## Beschreibung

Die Funktion `Iterator.zip()` verhält sich wie eine [Transposition](https://en.wikipedia.org/wiki/Transpose)-Operation und gibt Arrays aus, die die Elemente an übereinstimmenden Positionen in jedem der Eingaben enthalten. Wenn wir die Iterables als Arrays darstellen, mag die Eingabe so aussehen:

```js
[
  [a1, a2, a3, a4], // Iterable a
  [b1, b2, b3], // Iterable b
  [c1, c2, c3, c4, c5], // Iterable c
];
```

Der resultierende Iterator, unabhängig von den Optionen, beginnt mit der Ausgabe der folgenden Arrays:

```js
[a1, b1, c1];
[a2, b2, c2];
[a3, b3, c3];
```

Nachdem die ersten drei Arrays ausgegeben wurden, ist das Eingabe-Iterable `b` bei der vierten `next()`-Aufruf erschöpft—es gibt `{ done: true }` zurück. Was als nächstes passiert, hängt von der `mode`-Option ab. Wenn `mode` `"shortest"` (der Standard) ist, stoppt der resultierende Iterator hier: die beiden anderen Eingabe-Iteratoren werden [geschlossen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Wenn `mode` `"strict"` ist, wird ein Fehler geworfen, weil die beiden anderen Iterables _nicht_ abgeschlossen sind, wenn das zweite das Ergebnis `{ done: true }` liefert. Wenn `mode` `"longest"` ist, setzt der resultierende Iterator fort, Arrays auszugeben und fehlende Werte zu füllen. Zum Beispiel, wenn `padding` nicht bereitgestellt wird, standardmäßig auf `undefined`:

```js
[a4, undefined, c4];
[undefined, undefined, c5];
```

Wenn `padding` als Iterable bereitgestellt wird, weil es drei Eingabe-Iterables gibt, werden die ersten drei Werte aus dem `padding`-Iterable verwendet, um fehlende Werte zu füllen. Nehmen wir an, dass `padding` ein Array mit Werten `[p1, p2, p3]` ist. Dann wird `p2` verwendet, um den fehlenden Wert aus dem Eingabe-Iterable `b` zu füllen, und `p1` wird verwendet, um den fehlenden Wert aus dem Eingabe-Iterable `a` zu füllen:

```js
[a4, p2, c4];
[p1, p2, c5];
```

Wenn das `padding`-Iterable weniger als drei Werte hat, werden die verbleibenden fehlenden Werte mit `undefined` gefüllt.

## Beispiele

### Iteration über eine Karte mit Indizes

Mit `Iterator.zip()` können Sie über ein beliebiges iterierbares Objekt interieren (Zeichenfolgen werden standardmäßig nicht unterstützt) und gleichzeitig auf einen inkrementierenden Zähler zugreifen:

```js
const ages = new Map([
  ["Caroline", 30],
  ["Danielle", 25],
  ["Evelyn", 35],
]);

const numbers = (function* () {
  let n = 0;
  while (true) {
    yield n++;
  }
})();
for (const [index, [name, age]] of Iterator.zip([numbers, ages])) {
  console.log(`${index}: ${name} is ${age} years old.`);
}

// Output:
// 0: Caroline is 30 years old.
// 1: Danielle is 25 years old.
// 2: Evelyn is 35 years old.
```

`numbers` ist ein unendlicher Iterator, der inkrementierende Zahlen ab `0` generiert. Da `Iterator.zip()` standardmäßig stoppt, wenn das kürzeste Eingabe-Iterable erschöpft ist, wird die Schleife genau dreimal durchlaufen. Der `numbers`-Iterator wird ordnungsgemäß geschlossen, nachdem die Schleife beendet ist; es verursacht keine Endlosschleife.

### Erstellen einer Map aus Listen von Schlüsseln und Werten

Angenommen, Sie haben zwei Arrays: eins mit Schlüsseln und ein anderes mit Werten. Sie können `Iterator.zip()` verwenden, um sie in eine {{jsxref("Map")}} zu kombinieren:

```js
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const temperatures = [22, 21, 23, 20, 19];

const dayTemperatureMap = new Map(Iterator.zip([days, temperatures]));
console.log(dayTemperatureMap);
// Map(5) { 'Mon' => 22, 'Tue' => 21, 'Wed' => 23, 'Thu' => 20, 'Fri' => 19 }
```

### Gemeinsame Iteration über mehrere Datenquellen

Angenommen, Sie haben Daten aus mehreren Quellen, wie z.B. aus mehreren Microservices oder Datenbanken. Sie wissen, dass jede Quelle verwandte Daten in der gleichen Reihenfolge bereitstellt, und möchten diese zusammen verarbeiten. Sie können `Iterator.zip()` verwenden, um dies zu erreichen:

```js
const names = fetchNames(); // e.g., ["Caroline", "Danielle", "Evelyn"]
const ages = fetchAges(); // e.g., [30, 25, 35]
const cities = fetchCities(); // e.g., ["New York", "London", "Hong Kong"]

for (const [name, age, city] of Iterator.zip([names, ages, cities])) {
  console.log(`${name}, aged ${age}, lives in ${city}.`);
}

// Output:
// Caroline, aged 30, lives in New York.
// Danielle, aged 25, lives in London.
// Evelyn, aged 35, lives in Hong Kong.
```

### Bereitstellen eines Paddings für ungleichmäßige Iterables

Beim Zippen von Iterables unterschiedlicher Längen und mit `mode` auf `"longest"` gesetzt, können Sie ein `padding`-Iterable bereitstellen, um die Werte anzugeben, die zum Füllen fehlender Einträge verwendet werden:

```js
const letters = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3];

// One padding value per iterable
const padding = ["[Letter missing]", "[Number missing]"];
const it = Iterator.zip([letters, numbers], { mode: "longest", padding });
for (const [letter, number] of it) {
  console.log(`${letter}: ${number}`);
}
// Output:
// a: 1
// b: 2
// c: 3
// d: [Number missing]
// e: [Number missing]
```

### Zipping von Zeichenfolgen

Zeichenfolgen werden nicht als Eingabe-Iterables für `Iterator.zip()` akzeptiert, da es jetzt als Fehler betrachtet wird, Zeichenfolgen implizit iterierbar zu machen. Um Zeichenfolgen zu zippen, konvertieren Sie sie explizit mit {{jsxref("Iterator.from()")}} in Iteratoren:

```js
const str1 = "abc";
const str2 = "1234";
const it = Iterator.zip([Iterator.from(str1), Iterator.from(str2)]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// Output:
// a - 1
// b - 2
// c - 3
```

In einigen Fällen möchten Sie möglicherweise nach [Graphem-Clustern](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) anstatt nach Code-Einheiten aufteilen. In diesem Fall können Sie die {{jsxref("Intl.Segmenter")}}-API verwenden:

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
const str1 = "🤷‍♂️🤷‍♀️🤷";
const str2 = "123";
const it = Iterator.zip([
  segmenter.segment(str1).map(({ segment }) => segment),
  segmenter.segment(str2).map(({ segment }) => segment),
]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// Output:
// 🤷‍♂️ - 1
// 🤷‍♀️ - 2
// 🤷 - 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.zip` in `core-js`](https://core-js.io/docs/features/proposals/joint-iteration)
- [es-shims Polyfill von `Iterator.zip`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zipKeyed()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
