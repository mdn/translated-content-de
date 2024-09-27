---
title: Intl.RelativeTimeFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

Der **`Intl.RelativeTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.RelativeTimeFormat")}}-Objekte.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> **Note:** `Intl.RelativeTimeFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Sprachkennungen. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Sprachkennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, wie z.B. `"arab"`, `"hans"`, `"mathsans"` und so weiter. Eine Liste unterstützter Nummerierungssystemtypen finden Sie unter [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten relativen Zeit. Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B. "in 1 Monat"
        - `"short"`
          - : Z.B. "in 1 Mo."
        - `"narrow"`
          - : Z.B. "in 1 Mo.". Der schmale Stil könnte bei einigen Locales dem kurzen Stil ähneln.
    - `numeric`
      - : Ob in der Ausgabe numerische Werte verwendet werden sollen. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"always"`. Wenn auf `"auto"` gesetzt, kann die Ausgabe eine idiomatischere Formulierung verwenden, wie z.B. `"gestern"` anstelle von `"vor 1 Tag"`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Formatverwendung

Das folgende Beispiel zeigt, wie ein Zeitformatter für relativen Zeitbezug mit der englischen Sprache erstellt wird.

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

Wenn die Option `numeric:auto` verwendet wird, erzeugt sie den String `gestern` oder `morgen` anstelle von `vor 1 Tag` oder `in 1 Tag`. Dies ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

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
