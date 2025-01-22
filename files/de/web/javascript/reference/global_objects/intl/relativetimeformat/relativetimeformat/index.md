---
title: Intl.RelativeTimeFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Der **`Intl.RelativeTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.RelativeTimeFormat")}}-Objekte.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> **Note:** `Intl.RelativeTimeFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder einer {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Identifikatoren. Wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird, wird die Standard-Locale der Laufzeitumgebung verwendet. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das Zahlensystem, das für die Zahlenformatierung verwendet wird, wie `"arab"`, `"hans"`, `"mathsans"` und so weiter. Eine Liste unterstützter Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` gesetzt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten relativen Zeit. Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B. "in 1 month"
        - `"short"`
          - : Z.B. "in 1 mo."
        - `"narrow"`
          - : Z.B. "in 1 mo.". Der schmale Stil könnte für einige Locale dem kurzen Stil ähnlich sein.
    - `numeric`
      - : Ob numerische Werte in der Ausgabe verwendet werden sollen. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"always"`. Wenn auf `"auto"` gesetzt, kann die Ausgabe idiomatischere Formulierungen wie `"yesterday"` anstelle von `"1 day ago"` verwenden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Formatnutzung

Das folgende Beispiel zeigt, wie ein relativer Zeitformatierer mit der englischen Sprache erstellt wird.

```js
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day"); // "in 1 day"
```

### Verwendung der Auto-Option

Wenn die Option `numeric:auto` übergeben wird, erzeugt sie den String `yesterday` oder `tomorrow` anstelle von `1 day ago` oder `in 1 day`. Dies ermöglicht, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) auf v8.dev (2018)
