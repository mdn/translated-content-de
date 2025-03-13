---
title: Intl.ListFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`Intl.ListFormat()`** Konstruktor erstellt {{jsxref("Intl.ListFormat")}} Objekte.

{{InteractiveExample("JavaScript-Demo: Intl.ListFormat() Konstruktor", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Syntax

```js-nolint
new Intl.ListFormat()
new Intl.ListFormat(locales)
new Intl.ListFormat(locales, options)
```

> **Note:** `Intl.ListFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprachcode oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Sprachidentifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprachidentifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der Locale-Abgleichalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Erkennung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Bezeichnet die Art der Gruppierung. Mögliche Werte sind:
        - `"conjunction"` (Standard)
          - : Für "und"-basierte Gruppierung der Listenelemente: "A, B, und C"
        - `"disjunction"`
          - : Für "oder"-basierte Gruppierung der Listenelemente: "A, B, oder C"
        - `"unit"`
          - : Für die Gruppierung der Listenelemente als zusammengesetzte Einheit (weder "und"-basiert noch "oder"-basiert): "A, B, C"
    - `style`
      - : Der Gruppierungsstil (zum Beispiel, ob Listentrennzeichen und Konjunktionen enthalten sind). Mögliche Werte sind:
        - `"long"` (Standard)
          - : Das typische Listenformat. Zum Beispiel: "A, B, und C"
        - `"short"`
          - : Der Abstand, die Länge oder das Vorhandensein einer Konjunktion sowie die Trennzeichen können variieren. Normalerweise möchten Sie auch, dass die Eingabeelemente abgekürzt werden. Zum Beispiel: "A, B, & C"
        - `"narrow"`
          - : Wo möglich, wird das Listenformat weiter verkürzt, sodass die Ausgabe so kurz wie möglich ist. Zum Beispiel: "A, B, C"

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie ein Listenformatierer mit der englischen Sprache erstellt wird.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { type: "disjunction" }).format(list));
// Motorcycle, Bus or Car
```

### Oxfordkomma

Das [Oxfordkomma](https://en.wikipedia.org/wiki/Serial_comma) ist ein Komma, das unmittelbar vor der koordinierenden Konjunktion (normalerweise "und" oder "oder") in einer Liste von drei oder mehr Begriffen gesetzt wird. Etwas kontrovers verwendet die `en-US` Locale das Oxfordkomma, während die `en-GB` Locale dies nicht tut.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
// Motorcycle, Bus, and Car
```

### Einheitsformatierung

Verwenden Sie `style: "unit"`, um die Listenelemente als zusammengesetzte Einheit zu formatieren. Tatsächlich verwendet {{jsxref("Intl.DurationFormat")}} die listenartige Einheitsformatierung intern zur Formatierung von Zeitdauern.

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

console.log(
  new Intl.ListFormat("en-US", { type: "unit" }).format(
    marathon.map((component) =>
      component[0].toLocaleString("en-US", {
        style: "unit",
        unit: component[1],
        unitDisplay: "long",
      }),
    ),
  ),
);
// 42 kilometers, 195 meters
```

### Kurzer und enger Stil

Die `"short"` und `"narrow"` Styles sind nützlich für kompakte Darstellungen von Listen.

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(new Intl.ListFormat("en-US", { style: "short" }).format(list));
// Motorcycle, Bus, & Car

console.log(new Intl.ListFormat("en-US", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car

console.log(new Intl.ListFormat("en-GB", { style: "short" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car
```

Die Eingabeelemente werden nicht transformiert, aber oft möchten Sie diese auch abkürzen.

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

function formatDistance(locale, distance, style) {
  return new Intl.ListFormat(locale, { type: "unit", style }).format(
    marathon.map((component) =>
      component[0].toLocaleString(locale, {
        style: "unit",
        unit: component[1],
        unitDisplay: style,
      }),
    ),
  );
}

console.log(formatDistance("en-US", marathon, "long"));
// 42 kilometers, 195 meters
console.log(formatDistance("en-US", marathon, "short"));
// 42 km, 195 m
console.log(formatDistance("en-US", marathon, "narrow"));
// 42km 195m
```

### Auswahl der Konjunktion

Das verwendete Konjunktionswort kann von den Zeichenfolgewerten der Listenelemente abhängen. Zum Beispiel ist die Konjunktion im Spanischen `"y"` für die meisten Wörter, aber `"e"` für Wörter, die mit dem Vokal `"i"` beginnen.

```js
const words = ["fuerte", "indomable"];
const formatter = new Intl.ListFormat("es-ES", { type: "conjunction" });

console.log(formatter.format(words));
// fuerte e indomable
console.log(formatter.format(words.toReversed()));
// indomable y fuerte
```

Der Algorithmus, der zur Bestimmung der Konjunktion verwendet wird, ist nicht perfekt (zum Beispiel kann er die Aussprache eines Wortes nicht immer von seiner Schreibweise ableiten), sollte aber in den meisten Fällen funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl")}}
