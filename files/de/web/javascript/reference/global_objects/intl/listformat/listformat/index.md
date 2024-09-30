---
title: Intl.ListFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

Der **`Intl.ListFormat()`** Konstruktor erstellt {{jsxref("Intl.ListFormat")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Syntax

```js-nolint
new Intl.ListFormat()
new Intl.ListFormat(locales)
new Intl.ListFormat(locales, options)
```

> **Note:** `Intl.ListFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der einzusetzende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Lokalisierung und Verhandlung von Locale-Informationen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Gibt die Art der Gruppierung an. Mögliche Werte sind:
        - `"conjunction"` (Standard)
          - : Für "und"-basierte Gruppierung der Listenelemente: "A, B, und C"
        - `"disjunction"`
          - : Für "oder"-basierte Gruppierung der Listenelemente: "A, B, oder C"
        - `"unit"`
          - : Für die Gruppierung der Listenelemente als Einheit (weder "und"-basiert noch "oder"-basiert): "A, B, C"
    - `style`
      - : Der Gruppierungsstil (beispielsweise, ob Listentrenner und Konjunktionen eingeschlossen sind). Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B. "A, B, und C"
        - `"short"`
          - : Z.B. "A, B, C"
        - `"narrow"`
          - : Z.B. "A B C"

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Format verwenden

Das folgende Beispiel zeigt, wie ein Listformator für die englische Sprache erstellt wird.

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
