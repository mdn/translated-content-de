---
title: Intl.RelativeTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

Der **`Intl.RelativeTimeFormat()`** Konstruktor erstellt {{jsxref("Intl.RelativeTimeFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> **Note:** `Intl.RelativeTimeFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachkennzeichen oder einer {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale zur Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des Arguments `locales`, siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der Algorithmus zur Übereinstimmung der Locale, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; Standard ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das Zählsystem, das für die Zahlenformatierung verwendet werden soll, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste unterstützter Zählsystem-Typen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten relativen Zeit. Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B. "in 1 Monat"
        - `"short"`
          - : Z.B. "in 1 Mo."
        - `"narrow"`
          - : Z.B. "in 1 Mo.". Der schmale Stil könnte für einige Locales dem kurzen Stil ähneln.
    - `numeric`
      - : Ob numerische Werte in der Ausgabe verwendet werden sollen. Mögliche Werte sind `"always"` und `"auto"`; Standard ist `"always"`. Wenn auf `"auto"` gesetzt, kann die Ausgabe idiomatischere Formulierungen wie `"yesterday"` anstelle von `"1 day ago"` verwenden.

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

Wenn die Option `numeric:auto` übergeben wird, wird die Zeichenfolge `yesterday` oder `tomorrow` anstelle von `1 day ago` oder `in 1 day` erzeugt. Dies ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

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
