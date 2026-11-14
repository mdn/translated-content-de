---
title: Intl.ListFormat()-Konstruktor
short-title: Intl.ListFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Der Konstruktor **`Intl.ListFormat()`** erstellt {{jsxref("Intl.ListFormat")}}-Objekte.

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
> `Intl.ListFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}, eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Kennungen. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keine der angegebenen Locale-Kennungen unterstützt wird. Informationen zur allgemeinen Form und Interpretation des Arguments `locales` finden Sie in der [Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Algorithmus für den Locale-Abgleich. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Identifizierung und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Gibt die Art der Gruppierung an. Mögliche Werte sind:
        - `"conjunction"` (Standardwert)
          - : Für eine auf „und“ basierende Gruppierung der Listenelemente: „A, B und C“
        - `"disjunction"`
          - : Für eine auf „oder“ basierende Gruppierung der Listenelemente: „A, B oder C“
        - `"unit"`
          - : Für die Gruppierung der Listenelemente als zusammengesetzte Einheit (weder auf „und“ noch auf „oder“ basierend): „A, B, C“
    - `style`
      - : Der Gruppierungsstil (beispielsweise, ob Listentrennzeichen und Konjunktionen enthalten sind). Mögliche Werte sind:
        - `"long"` (Standardwert)
          - : Das übliche Listenformat. Zum Beispiel „A, B und C“
        - `"short"`
          - : Die Abstände, die Länge oder das Vorhandensein einer Konjunktion sowie die Trennzeichen können sich ändern. In der Regel sollten Sie auch die Eingabeelemente abkürzen. Zum Beispiel „A, B & C“
        - `"narrow"`
          - : Wo möglich, wird das Listenformat weiter verkürzt, sodass die Ausgabe so kurz wie möglich ist. Zum Beispiel „A, B, C“

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie Sie einen Listenformatierer für die englische Sprache erstellen.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { type: "disjunction" }).format(list));
// Motorcycle, Bus or Car
```

### Oxford-Komma

Das [Oxford-Komma](https://en.wikipedia.org/wiki/Serial_comma) ist ein Komma, das in einer Liste mit drei oder mehr Elementen unmittelbar vor der verbindenden Konjunktion (üblicherweise „und“ oder „oder“) steht. Die Verwendung ist nicht unumstritten: Die Locale `en-US` verwendet das Oxford-Komma, die Locale `en-GB` hingegen nicht.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
// Motorcycle, Bus, and Car
```

### Formatierung als Einheit

Verwenden Sie `type: "unit"`, um die Listenelemente als zusammengesetzte Einheit zu formatieren. Auch {{jsxref("Intl.DurationFormat")}} verwendet intern Listenformatierung im Stil `"unit"`, um Zeitspannen zu formatieren.

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

Die Stile `"short"` und `"narrow"` eignen sich für kompakte Darstellungen von Listen.

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

Die Eingabeelemente werden nicht verändert; häufig ist es jedoch sinnvoll, auch sie abzukürzen.

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

function formatDistance(locale, distance, style) {
  return new Intl.ListFormat(locale, { type: "unit", style }).format(
    distance.map((component) =>
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

Welche Konjunktion verwendet wird, kann von den Stringwerten der Listenelemente abhängen. Im Spanischen beispielsweise lautet die Konjunktion bei den meisten Wörtern `"y"`, bei Wörtern, die mit dem Vokal `"i"` beginnen, jedoch `"e"`.

```js
const words = ["fuerte", "indomable"];
const formatter = new Intl.ListFormat("es-ES", { type: "conjunction" });

console.log(formatter.format(words));
// fuerte e indomable
console.log(formatter.format(words.toReversed()));
// indomable y fuerte
```

Der Algorithmus zur Bestimmung der Konjunktion ist nicht perfekt (beispielsweise lässt sich die Aussprache eines Wortes nicht immer aus seiner Schreibweise ableiten), sollte aber im Allgemeinen funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl")}}
