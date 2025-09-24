---
title: Intl.ListFormat() Konstruktor
short-title: Intl.ListFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Der **`Intl.ListFormat()`**-Konstruktor erstellt {{jsxref("Intl.ListFormat")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat() constructor", "taller")}}

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

> [!NOTE]
> `Intl.ListFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder einer {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Gibt den Gruppierungstyp an. Mögliche Werte sind:
        - `"conjunction"` (Standard)
          - : Für "und"-basierte Gruppierung der Listenelemente: "A, B, und C"
        - `"disjunction"`
          - : Für "oder"-basierte Gruppierung der Listenelemente: "A, B, oder C"
        - `"unit"`
          - : Für die Gruppierung der Listenelemente als Kompositum (weder "und"-basiert noch "oder"-basiert): "A, B, C"
    - `style`
      - : Der Gruppierungsstil (z.B. ob Listentrennzeichen und Konjunktionen enthalten sind). Mögliche Werte sind:
        - `"long"` (Standard)
          - : Das typische Listenformat. Zum Beispiel "A, B, und C"
        - `"short"`
          - : Der Abstand, die Länge oder das Vorhandensein einer Konjunktion und die Trennzeichen können sich ändern. Üblicherweise möchten Sie auch die Eingabeelemente abkürzen. Zum Beispiel "A, B, & C"
        - `"narrow"`
          - : Wo möglich, wird das Listenformat weiter abgekürzt, sodass die Ausgabe so kurz wie möglich ist. Zum Beispiel "A, B, C"

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Format

Das folgende Beispiel zeigt, wie ein Listenformatierer für die englische Sprache erstellt wird.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { type: "disjunction" }).format(list));
// Motorcycle, Bus or Car
```

### Oxford-Komma

[Oxford-Komma](https://en.wikipedia.org/wiki/Serial_comma) ist ein Komma, das unmittelbar vor der koordinierenden Konjunktion (gewöhnlich "und" oder "oder") in einer Liste von drei oder mehr Begriffen steht. Etwas umstritten verwendet die `en-US`-Locale das Oxford-Komma, während die `en-GB`-Locale dies nicht tut.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
// Motorcycle, Bus, and Car
```

### Einheitenformatierung

Verwenden Sie `style: "unit"`, um die Listenelemente als Komponenteinheit zu formatieren. Tatsächlich verwendet {{jsxref("Intl.DurationFormat")}} unter der Haube die einheitenbasierte Listenformatierung, um Zeitdauern zu formatieren.

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

### Kurzer und schmaler Stil

Die `"short"`- und `"narrow"`-Stile sind nützlich für kompakte Darstellungen von Listen.

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

Die Eingabeelemente werden nicht verändert, aber es ist oft wünschenswert, sie ebenfalls abzubkürzen.

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

Das verwendete Konjunktionswort kann von den String-Werten der Listenelemente abhängen. Zum Beispiel ist die Konjunktion im Spanischen `"y"` für die meisten Wörter, aber `"e"` für Wörter, die mit dem Vokal `"i"` beginnen.

```js
const words = ["fuerte", "indomable"];
const formatter = new Intl.ListFormat("es-ES", { type: "conjunction" });

console.log(formatter.format(words));
// fuerte e indomable
console.log(formatter.format(words.toReversed()));
// indomable y fuerte
```

Der Algorithmus zur Bestimmung der Konjunktion ist nicht perfekt (zum Beispiel kann er nicht immer die Aussprache eines Wortes aus seiner Schreibweise ableiten), aber im Allgemeinen sollte er funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl")}}
