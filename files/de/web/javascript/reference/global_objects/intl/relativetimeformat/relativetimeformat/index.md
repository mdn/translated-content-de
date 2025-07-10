---
title: Intl.RelativeTimeFormat() Konstruktor
short-title: Intl.RelativeTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Intl.RelativeTimeFormat()`** Konstruktor erstellt {{jsxref("Intl.RelativeTimeFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.RelativeTimeFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachtag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifizierer. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifizierer unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der Algorithmus zur Abstimmung der Locale. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das Nummernsystem, das für die Zahlformatierung verwendet werden soll, wie `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste der unterstützten Nummernsystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten relativen Zeit. Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B., "in 1 Monat"
        - `"short"`
          - : Z.B., "in 1 Mo."
        - `"narrow"`
          - : Z.B., "in 1 Mo.". Der schmale Stil könnte für einige Locales dem kurzen Stil ähnlich sein.
    - `numeric`
      - : Ob numerische Werte in der Ausgabe verwendet werden sollen. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"always"`. Wenn auf `"auto"` gesetzt, kann die Ausgabe idiomatischere Formulierungen verwenden, wie `"gestern"` anstelle von `"vor 1 Tag"`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung der Formatierung

Das folgende Beispiel zeigt, wie ein Relativzeitformatierer mit der englischen Sprache erstellt wird.

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

### Verwendung der Auto-Option

Wenn die `numeric: "auto"` Option übergeben wird, erzeugt sie die Zeichenfolge `yesterday` oder `tomorrow` anstelle von `1 day ago` oder `in 1 day`. Dies ist nützlich, wenn Sie keine numerischen Werte in der Ausgabe verwenden möchten.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

Wenn der Wert `0` ist, kann die Ausgabe abhängig von der Einheit variieren. "0 Sekunden" wird durch die lokalisierte Version von "now" dargestellt.

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
