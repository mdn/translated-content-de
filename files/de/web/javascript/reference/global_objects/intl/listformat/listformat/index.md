---
title: Intl.ListFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: 56beb40c68076030d1812fcec837c89910b58373
---

{{JSRef}}

Der **`Intl.ListFormat()`**-Konstruktor erstellt {{jsxref("Intl.ListFormat")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat", "taller")}}

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

> **Note:** `Intl.ListFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konzipiert werden. Der Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Sprachkennungen. Die Standard-Locale des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Kennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der Locale-Matching-Algorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; die Standardeinstellung ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Gibt den Typ der Gruppierung an. Mögliche Werte sind:
        - `"conjunction"` (Standard)
          - : Für "und"-basierte Gruppierung der Listenelemente: "A, B, and C"
        - `"disjunction"`
          - : Für "oder"-basierte Gruppierung der Listenelemente: "A, B, or C"
        - `"unit"`
          - : Für die Gruppierung der Listenelemente als zusammengesetzte Einheit (weder "und"-basiert noch "oder"-basiert): "A, B, C"
    - `style`
      - : Der Gruppierungsstil (zum Beispiel, ob Listentrenner und Konjunktionen enthalten sind). Mögliche Werte sind:
        - `"long"` (Standard)
          - : Das typische Listenformat. Zum Beispiel: "A, B, and C"
        - `"short"`
          - : Der Abstand, die Länge oder das Vorhandensein einer Konjunktion und die Trennzeichen können sich ändern. Normalerweise möchten Sie auch, dass die Eingabeelemente abgekürzt werden. Zum Beispiel: "A, B, & C"
        - `"narrow"`
          - : Wo möglich, wird das Listenformat weiter abgekürzt, sodass die Ausgabe so kurz wie möglich ist. Zum Beispiel: "A, B, C"

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie ein Listenformatierer für die englische Sprache erstellt wird.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { type: "disjunction" }).format(list));
// Motorcycle, Bus or Car
```

### Oxford-Komma

Das [Oxford-Komma](https://en.wikipedia.org/wiki/Serial_comma) ist ein Komma, das unmittelbar vor der koordinierenden Konjunktion (normalerweise "and" oder "or") in einer Liste von drei oder mehr Begriffen steht. Etwas umstritten verwendet die `en-US`-Locale das Oxford-Komma, während die `en-GB`-Locale es nicht tut.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
// Motorcycle, Bus, and Car
```

### Einheit Formatierung

Verwenden Sie `style: "unit"`, um die Listenelemente als zusammengesetzte Einheit zu formatieren. Tatsächlich verwendet {{jsxref("Intl.DurationFormat")}} intern einheitliches Listenformat, um Zeitdauern zu formatieren.

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

Die `"short"` und `"narrow"` Stile sind nützlich für kompakte Darstellungen von Listen.

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

Die Eingabeelemente werden nicht transformiert, aber häufig möchten Sie diese auch abkürzen.

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

Das verwendete Konjunktionswort kann von den String-Werten der Listenelemente abhängen. Zum Beispiel ist im Spanischen die Konjunktion `"y"` für die meisten Wörter, aber `"e"` für Wörter, die mit dem Vokal `"i"` beginnen.

```js
const words = ["fuerte", "indomable"];
const formatter = new Intl.ListFormat("es-ES", { type: "conjunction" });

console.log(formatter.format(words));
// fuerte e indomable
console.log(formatter.format(words.toReversed()));
// indomable y fuerte
```

Der Algorithmus zur Bestimmung der Konjunktion ist nicht perfekt (zum Beispiel kann er nicht immer die Aussprache eines Wortes anhand seiner Schreibweise erkennen), sollte aber im Allgemeinen funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl")}}
