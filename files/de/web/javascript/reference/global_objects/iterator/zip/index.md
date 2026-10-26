---
title: Iterator.zip()
short-title: zip()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zip
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{JSRef}}

Die statische Methode **`Iterator.zip()`** erstellt ein neues {{jsxref("Iterator")}}-Objekt, das Elemente aus mehreren iterierbaren Objekten zusammenfasst, indem es Arrays mit den Elementen an derselben Position liefert. Sie führt die Eingabe-Iterables damit gewissermaßen wie mit einem Reißverschluss zusammen und ermöglicht es, sie gleichzeitig zu durchlaufen.

Die Methode {{jsxref("Iterator.zipKeyed()")}} ist ähnlich, liefert aber statt Arrays Objekte mit Schlüsseln, die Sie angeben können.

## Syntax

```js-nolint
Iterator.zip(iterables)
Iterator.zip(iterables, options)
```

### Parameter

- `iterables`
  - : Ein Iterable aus Iterables, deren Elemente zusammengefasst werden. Es muss [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) sein und darf kein [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) sein. Es sollte endlich sein, seine Elemente dürfen jedoch unendliche Iterables sein. Jedes Element muss entweder das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder, falls nicht, das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementieren. Strings werden abgelehnt: Um Strings zusammenzuführen, konvertieren Sie sie mit {{jsxref("Iterator.from()")}} ausdrücklich in Iteratoren.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten bei unterschiedlichen Eingabelängen festlegt. Es kann die folgenden Eigenschaften haben:
    - `mode` {{optional_inline}}
      - : Einer der folgenden Werte:
        - `"shortest"` (Standard): Der resultierende Iterator endet, sobald ein Eingabe-Iterable erschöpft ist.
        - `"longest"`: Der resultierende Iterator endet, sobald alle Eingabe-Iterables erschöpft sind. Fehlende Werte kürzerer Iterables werden gemäß der Option `padding` aufgefüllt.
        - `"strict"`: Ein {{jsxref("TypeError")}} wird ausgelöst, wenn nicht alle Eingabe-Iterables gleichzeitig enden.
    - `padding` {{optional_inline}}
      - : Ein iterierbares Objekt (kein Iterator). Wird nur abgerufen und validiert, wenn `mode` den Wert `"longest"` hat. Ist der Wert `undefined` oder fehlt er, werden fehlende Werte kürzerer Iterables mit `undefined` aufgefüllt (was der Übergabe eines leeren Iterables entspricht). Wird ein Iterable angegeben, werden daraus _unmittelbar beim Aufruf von `Iterator.zip()`_ so viele Werte entnommen, wie `iterables` Elemente enthält. `padding[i]` wird für fehlende Werte von `iterables[i]` verwendet (unter der Annahme, dass `padding` und `iterables` als Arrays angegeben werden; das ist nicht erforderlich). Ist `padding` kürzer als `iterables`, wird für die übrigen Iterables `undefined` verwendet.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt. Jedes seiner Elemente ist ein Array, dessen Länge der Anzahl der Eingabe-Iterables entspricht und das die Elemente aus den einzelnen Eingabe-Iterables an der jeweiligen Position enthält. Ist das Objekt `iterables` leer, wird der resultierende Iterator im abgeschlossenen Zustand erstellt.

## Beschreibung

Die Funktion `Iterator.zip()` verhält sich wie eine [Transposition](https://en.wikipedia.org/wiki/Transpose): Sie liefert Arrays mit den Elementen an übereinstimmenden Positionen der Eingaben. Wenn wir die Iterables als Arrays darstellen, könnte die Eingabe so aussehen:

```js
[
  [a1, a2, a3, a4], // Iterable a
  [b1, b2, b3], // Iterable b
  [c1, c2, c3, c4, c5], // Iterable c
];
```

Der resultierende Iterator beginnt unabhängig von den Optionen damit, die folgenden Arrays zu liefern:

```js
[a1, b1, c1];
[a2, b2, c2];
[a3, b3, c3];
```

Nachdem die ersten drei Arrays geliefert wurden, ist das Eingabe-Iterable `b` beim vierten Aufruf von `next()` erschöpft – es gibt `{ done: true }` zurück. Was danach geschieht, hängt von der Option `mode` ab. Ist `mode` auf `"shortest"` gesetzt (der Standardwert), endet der resultierende Iterator an dieser Stelle: Die beiden anderen Eingabe-Iteratoren werden [geschlossen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Ist `mode` auf `"strict"` gesetzt, wird ein Fehler ausgelöst, weil die beiden anderen Iterables _noch nicht_ beendet sind, wenn das zweite `{ done: true }` liefert. Ist `mode` auf `"longest"` gesetzt, liefert der resultierende Iterator weitere Arrays und füllt fehlende Werte auf. Wenn beispielsweise `padding` nicht angegeben wird, wird standardmäßig `undefined` verwendet:

```js
[a4, undefined, c4];
[undefined, undefined, c5];
```

Wenn `padding` als Iterable angegeben wird, werden dessen erste drei Werte zum Auffüllen fehlender Werte verwendet, da es drei Eingabe-Iterables gibt. Nehmen wir an, `padding` ist ein Array mit den Werten `[p1, p2, p3]`. Dann wird `p2` verwendet, um den fehlenden Wert des Eingabe-Iterables `b` aufzufüllen, und `p1` für den fehlenden Wert des Eingabe-Iterables `a`:

```js
[a4, p2, c4];
[p1, p2, c5];
```

Hat das Iterable `padding` weniger als drei Werte, werden die übrigen fehlenden Werte mit `undefined` aufgefüllt.

## Beispiele

### Eine Map mit Indizes durchlaufen

Mit `Iterator.zip()` können Sie jedes iterierbare Objekt durchlaufen (Strings werden standardmäßig nicht unterstützt) und dabei zugleich auf einen hochzählenden Zähler zugreifen:

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

`numbers` ist ein unendlicher Iterator, der aufsteigende Zahlen ab `0` erzeugt. Da `Iterator.zip()` standardmäßig endet, sobald das kürzeste Eingabe-Iterable erschöpft ist, wird die Schleife genau dreimal durchlaufen. Der Iterator `numbers` wird nach Ende der Schleife ordnungsgemäß geschlossen; er verursacht keine Endlosschleife.

### Eine Map aus Listen von Schlüsseln und Werten erstellen

Angenommen, Sie haben zwei Arrays: eines mit Schlüsseln und eines mit Werten. Mit `Iterator.zip()` können Sie diese zu einer {{jsxref("Map")}} zusammenfügen:

```js
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const temperatures = [22, 21, 23, 20, 19];

const dayTemperatureMap = new Map(Iterator.zip([days, temperatures]));
console.log(dayTemperatureMap);
// Map(5) { 'Mon' => 22, 'Tue' => 21, 'Wed' => 23, 'Thu' => 20, 'Fri' => 19 }
```

### Mehrere Datenquellen gemeinsam durchlaufen

Angenommen, Sie erhalten Daten aus mehreren Quellen, etwa aus verschiedenen Microservices oder Datenbanken. Sie wissen, dass jede Quelle zusammengehörige Daten in derselben Reihenfolge liefert, und möchten diese gemeinsam verarbeiten. Dazu können Sie `Iterator.zip()` verwenden:

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

### Fehlende Werte bei unterschiedlich langen Iterables auffüllen

Wenn Sie Iterables unterschiedlicher Länge zusammenführen und `mode` auf `"longest"` gesetzt ist, können Sie mit einem Iterable für `padding` festlegen, welche Werte für fehlende Einträge verwendet werden:

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

### Strings zusammenführen

Strings werden von `Iterator.zip()` nicht als Eingabe-Iterables akzeptiert, da es inzwischen als Fehler angesehen wird, Strings implizit als Iterables zu behandeln. Um Strings zusammenzuführen, konvertieren Sie sie mit {{jsxref("Iterator.from()")}} ausdrücklich in Iteratoren:

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

In manchen Fällen möchten Sie möglicherweise nach [Graphemclustern](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) statt nach Codeeinheiten aufteilen. Dafür können Sie die API {{jsxref("Intl.Segmenter")}} verwenden:

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

- [Polyfill für `Iterator.zip` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.zip` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zipKeyed()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
