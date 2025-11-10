---
title: Intl.RelativeTimeFormat()-Konstruktor
short-title: Intl.RelativeTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Der **`Intl.RelativeTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.RelativeTimeFormat")}}-Objekte.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.RelativeTimeFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Eine Zeichenkette mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder einer {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Sprachbezeichner. Die Standardlocale zur Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprachbezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` gesetzt werden (wie unten angegeben). Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Lokalisierungsabgleichs-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option, siehe [Lokalisierung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das zu verwendende Nummernsystem für die Zahlenformatierung, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste unterstützter Nummernsystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standard ist von der Locale abhängig. Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten relativen Zeit. Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B. "in 1 month"
        - `"short"`
          - : Z.B. "in 1 mo."
        - `"narrow"`
          - : Z.B. "in 1 mo.". Der enge Stil könnte für einige Locales dem kurzen Stil ähnlich sein.
    - `numeric`
      - : Ob numerische Werte in der Ausgabe verwendet werden sollen. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"always"`. Wenn auf `"auto"` gesetzt, kann die Ausgabe idiomatischere Formulierungen wie `"yesterday"` anstelle von `"1 day ago"` verwenden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Nutzung der Formatierung

Das folgende Beispiel zeigt, wie ein relativer Zeitformatierer mit der englischen Sprache erstellt wird.

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

Wenn die `numeric: "auto"`-Option übergeben wird, wird sie den String `yesterday` oder `tomorrow` anstelle von `1 day ago` oder `in 1 day` erzeugen. Dies ist nützlich, wenn Sie keine numerischen Werte in der Ausgabe verwenden möchten.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

Wenn der Wert `0` ist, kann die Ausgabe von der Einheit abhängen. "0 seconds" wird durch die lokalisierte Version von "now" dargestellt.

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
