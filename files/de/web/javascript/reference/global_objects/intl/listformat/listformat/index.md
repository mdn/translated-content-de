---
title: Intl.ListFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
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

> **Note:** `Intl.ListFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachcode oder einer {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Sprachcode-Kennungen. Die Standardlocale des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Sprachkennungen unterstützt wird. Für die allgemeine Form und Interpretation des Parameters `locales` siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für weitere Informationen zu dieser Option siehe [Lokale Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Gibt den Typ der Gruppierung an. Mögliche Werte sind:
        - `"conjunction"` (Standard)
          - : Für "und"-basierte Gruppierung der Listenelemente: "A, B, and C"
        - `"disjunction"`
          - : Für "oder"-basierte Gruppierung der Listenelemente: "A, B, or C"
        - `"unit"`
          - : Für die Gruppierung der Listenelemente als Einheit (weder "und"-basiert noch "oder"-basiert): "A, B, C"
    - `style`
      - : Der Gruppierungsstil (zum Beispiel, ob Listen-Trennzeichen und Konjunktionen enthalten sind). Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B. "A, B, and C"
        - `"short"`
          - : Z.B. "A, B, C"
        - `"narrow"`
          - : Z.B. "A B C"

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie man einen List-Formatter mit der englischen Sprache erstellt.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { style: "long" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { style: "long" }).format(list));
// Motorcycle, Bus, and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-US", { style: "short", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus, & Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus, Car

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(new Intl.ListFormat("en-US", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car

console.log(
  new Intl.ListFormat("en-US", { style: "long" }).format([
    "30 degrees",
    "15 minutes",
    "50 seconds",
  ]),
);
// 30 degrees, 15 minutes, and 50 seconds

console.log(
  new Intl.ListFormat("en-US", { style: "narrow" }).format([
    "30 degrees",
    "15 minutes",
    "50 seconds",
  ]),
);
// 30 degrees, 15 minutes, 50 seconds

console.log(
  new Intl.ListFormat("en-US", { style: "narrow", type: "unit" }).format([
    "30°",
    "15′",
    "50″",
  ]),
);
// 30° 15′ 50″
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl")}}
