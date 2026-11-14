---
title: Intl.RelativeTimeFormat()-Konstruktor
short-title: Intl.RelativeTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Der **`Intl.RelativeTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.RelativeTimeFormat")}}-Objekte.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.RelativeTimeFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}}, eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Bezeichner. Wird `undefined` übergeben oder wird keiner der angegebenen Locale-Bezeichner unterstützt, wird die Standard-Locale der Laufzeitumgebung verwendet. Informationen zur allgemeinen Form und Interpretation des Arguments `locales` finden Sie in der [Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch über `options` festgelegt werden (siehe unten). Wenn beide festgelegt sind, hat die Eigenschaft in `options` Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Algorithmus für den Locale-Abgleich. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das für die Zahlenformatierung zu verwendende Zahlensystem, beispielsweise `"arab"`, `"hanidec"` oder `"mathsans"`. Eine Liste der unterstützten Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert hängt von der Locale ab. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` festgelegt werden. Werden beide angegeben, hat diese Eigenschaft in `options` Vorrang.
    - `style`
      - : Der Stil der formatierten relativen Zeitangabe. Mögliche Werte sind:
        - `"long"` (Standardwert)
          - : Z. B. „in 1 month“
        - `"short"`
          - : Z. B. „in 1 mo.“
        - `"narrow"`
          - : Z. B. „in 1 mo.“ Bei manchen Locales kann der schmale Stil dem kurzen Stil ähneln.
    - `numeric`
      - : Ob in der Ausgabe numerische Werte verwendet werden. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"always"`. Bei `"auto"` kann die Ausgabe idiomatischere Formulierungen wie `"yesterday"` statt `"1 day ago"` verwenden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung der Formatierung

Das folgende Beispiel zeigt, wie Sie einen Formatierer für relative Zeitangaben mit Englisch als Sprache erstellen.

```js
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en-US", {
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day"); // "in 1 day"
```

### Verwendung der Option „auto“

Wenn die Option `numeric: "auto"` übergeben wird, wird der String `yesterday` oder `tomorrow` statt `1 day ago` oder `in 1 day` ausgegeben. Das ist nützlich, wenn Sie in der Ausgabe keine numerischen Werte verwenden möchten.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

Wenn der Wert `0` ist, kann die Ausgabe von der Einheit abhängen. „0 Sekunden“ wird durch die lokalisierte Version von „jetzt“ dargestellt.

```js
rtf.format(0, "second"); // "now"
rtf.format(0, "day"); // "today"
rtf.format(0, "minute"); // "this minute"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) auf v8.dev (2018)
