---
title: Iterator.zip()
short-title: zip()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zip
l10n:
  sourceCommit: b1cbaa2fd91b9624e8a686d6a7323fbe79254b29
---

{{JSRef}}

Die statische Methode **`Iterator.zip()`** erstellt ein neues {{jsxref("Iterator")}}-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Arrays erzeugt, die Elemente an der gleichen Position enthalten. Es "zippt" im Wesentlichen die Eingabe-Iterables zusammen und ermöglicht so eine gleichzeitige Iteration über diese.

Die Methode {{jsxref("Iterator.zipKeyed()")}} ist ähnlich, gibt jedoch Objekte statt Arrays zurück, mit Schlüsseln, die Sie angeben können.

## Syntax

```js-nolint
Iterator.zip(iterables)
Iterator.zip(iterables, options)
```

### Parameter

- `iterables`
  - : Ein Iterable von Iterables, dessen Elemente aggregiert werden. Es muss [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) sein und darf kein [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) sein. Es sollte endlich sein, obwohl seine Elemente unendliche Iterables sein können. Jedes Element muss entweder das [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Protokoll implementieren oder, falls nicht, das [iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Protokoll. Strings werden abgelehnt: Um Strings zu zippen, konvertieren Sie sie explizit zu Iteratoren mit {{jsxref("Iterator.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten bei inkonsistenten Eingabelängen angibt. Es kann die folgenden Eigenschaften haben:
    - `mode` {{optional_inline}}
      - : Eines der folgenden:
        - `"shortest"` (Standard): Der resultierende Iterator stoppt, wenn ein Eingabe-Iterable erschöpft ist.
        - `"longest"`: Der resultierende Iterator stoppt, wenn alle Eingabe-Iterables erschöpft sind. Fehlende Werte von kürzeren Iterables werden entsprechend der `padding`-Option gefüllt.
        - `"strict"`: Ein {{jsxref("TypeError")}} wird ausgelöst, wenn nicht alle Eingabe-Iterables gleichzeitig enden.
    - `padding` {{optional_inline}}
      - : Ein iterierbares Objekt (kein Iterator). Wird nur abgerufen und validiert, wenn `mode` auf `"longest"` gesetzt ist. Wenn `undefined` oder nicht vorhanden, werden fehlende Werte von kürzeren Iterables mit `undefined` gefüllt (was dem Übergeben eines leeren Iterables entspricht). Wenn ein Iterable bereitgestellt wird, wird es für die Anzahl von Zeiten iteriert, die der Anzahl der Elemente in `iterables` entspricht, _sobald `Iterator.zip()` aufgerufen wird_. `padding[i]` wird für fehlende Werte für `iterables[i]` verwendet (angenommen, `padding` und `iterables` werden als Arrays bereitgestellt; sie müssen nicht). Wenn `padding` kürzer als `iterables` ist, wird `undefined` für die verbleibenden Iterables verwendet.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt. Jedes seiner Elemente ist ein Array mit einer Länge, die der Anzahl der Eingabe-Iterables entspricht und die Elemente von jedem Eingabe-Iterable an der entsprechenden Position enthält. Wenn das `iterables`-Objekt leer ist, wird der resultierende Iterator als abgeschlossen erstellt.

## Beschreibung

Die `Iterator.zip()`-Funktion verhält sich wie eine [Transpose](<https://de.wikipedia.org/wiki/Transposition_(Matrix)>) Operation, bei der Arrays erzeugt werden, die die Elemente an den übereinstimmenden Positionen in jedem der Eingaben enthalten. Wenn wir Iterables als Arrays darstellen, könnte die Eingabe so aussehen:

```js
[
  [a1, a2, a3, a4], // Iterable a
  [b1, b2, b3], // Iterable b
  [c1, c2, c3, c4, c5], // Iterable c
];
```

Der resultierende Iterator wird unabhängig von den Optionen damit beginnen, die folgenden Arrays zu erzeugen:

```js
[a1, b1, c1];
[a2, b2, c2];
[a3, b3, c3];
```

Nachdem die ersten drei Arrays erzeugt wurden, ist das Eingabe-Iterable `b` bei dem vierten Aufruf von `next()` erschöpft — es gibt `{ done: true }` zurück. Was als nächstes passiert, hängt von der `mode`-Option ab. Wenn `mode` auf `"shortest"` (dem Standard) gesetzt ist, stoppt der resultierende Iterator hier: die anderen beiden Eingabe-Iteratoren werden [geschlossen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Wenn `mode` auf `"strict"` gesetzt ist, wird ein Fehler ausgelöst, da die anderen beiden Iterables _nicht_ beendet sind, wenn das zweite das Ergebnis `{ done: true }` liefert. Wenn `mode` auf `"longest"` gesetzt ist, bleibt der resultierende Iterator weiterhin Arrays zu erzeugen, und füllt fehlende Werte. Wenn beispielsweise `padding` nicht bereitgestellt wird, ist es standardmäßig `undefined`:

```js
[a4, undefined, c4];
[undefined, undefined, c5];
```

Wenn `padding` als Iterable bereitgestellt wird, werden, da es drei Eingabe-Iterables gibt, die ersten drei Werte aus dem `padding`-Iterable verwendet, um fehlende Werte zu füllen. Angenommen, `padding` ist ein Array mit den Werten `[p1, p2, p3]`. Dann wird `p2` verwendet, um den fehlenden Wert aus dem Eingabe-Iterable `b` zu füllen, und `p1` wird verwendet, um den fehlenden Wert aus dem Eingabe-Iterable `a` zu füllen:

```js
[a4, p2, c4];
[p1, p2, c5];
```

Wenn das `padding`-Iterable weniger als drei Werte hat, werden die verbleibenden fehlenden Werte mit `undefined` gefüllt.

## Beispiele

### Iteration über eine Map mit Indizes

Mit `Iterator.zip()` können Sie über jedes iterierbare Objekt iterieren (Strings werden standardmäßig nicht unterstützt), während Sie auch auf einen inkrementierenden Zähler zugreifen können:

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
for (const [index, [name, age]] of Iterator.zip([numbers(), ages])) {
  console.log(`${index}: ${name} is ${age} years old.`);
}

// Output:
// 0: Caroline is 30 years old.
// 1: Danielle is 25 years old.
// 2: Evelyn is 35 years old.
```

`numbers()` ist ein unendlicher Iterator, der inkrementierende Zahlen ab `0` erzeugt. Da `Iterator.zip()` standardmäßig stoppt, wenn das kürzeste Eingabe-Iterable erschöpft ist, wird die Schleife genau dreimal durchlaufen. Der `numbers()`-Iterator wird ordnungsgemäß geschlossen, nachdem die Schleife endet; es führt nicht zu einer Endlosschleife.

### Eine Map aus Listen von Schlüsseln und Werten erstellen

Angenommen, Sie haben zwei Arrays: eines mit Schlüsseln und ein weiteres mit Werten. Sie können `Iterator.zip()` verwenden, um sie zu einer {{jsxref("Map")}} zu kombinieren:

```js
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const temperatures = [22, 21, 23, 20, 19];

const dayTemperatureMap = new Map(Iterator.zip([days, temperatures]));
console.log(dayTemperatureMap);
// Map(5) { 'Mon' => 22, 'Tue' => 21, 'Wed' => 23, 'Thu' => 20, 'Fri' => 19 }
```

### Gemeinsame Iteration über mehrere Datenquellen

Angenommen, Sie haben Daten, die aus mehreren Quellen stammen, wie z. B. Mikroservices oder Datenbanken. Sie wissen, dass jede Quelle verwandte Daten in der gleichen Reihenfolge bereitstellt, und Sie möchten diese gemeinsam verarbeiten. Sie können `Iterator.zip()` verwenden, um dies zu erreichen:

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

### Füllen von Padding für ungleiche Iterables

Wenn Sie Iterables unterschiedlicher Längen mit `mode` auf `"longest"` zippen, können Sie ein `padding`-Iterable bereitstellen, um die Werte anzugeben, die zum Ausfüllen fehlender Einträge verwendet werden:

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

### Strings zippen

Strings werden nicht als Eingabe-Iterables zu `Iterator.zip()` akzeptiert, da es jetzt als Fehler angesehen wird, Strings implizit iterierbar zu machen. Um Strings zu zippen, konvertieren Sie sie explizit zu Iteratoren mit {{jsxref("Iterator.from()")}}:

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

In einigen Fällen möchten Sie vielleicht nach [Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) statt nach Codeeinheiten aufteilen. In diesem Fall können Sie die {{jsxref("Intl.Segmenter")}} API verwenden:

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
