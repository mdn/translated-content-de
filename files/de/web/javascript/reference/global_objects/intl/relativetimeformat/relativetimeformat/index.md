---
title: Konstruktor Intl.RelativeTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

Der **`Intl.RelativeTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.RelativeTimeFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> **Hinweis:** `Intl.RelativeTimeFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Der Versuch, es ohne `new` zu verwenden, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder einer {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das Nummerierungssystem, das für die Zahlenformatierung verwendet wird, wie zum Beispiel `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste der unterstützten Typen von Nummerierungssystemen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil des formatierten relativen Zeitraums. Mögliche Werte sind:
        - `"long"` (Standard)
          - : Z.B., "in 1 month"
        - `"short"`
          - : Z.B., "in 1 mo."
        - `"narrow"`
          - : Z.B., "in 1 mo.". Der schmale Stil könnte für einige Locales dem kurzen Stil ähneln.
    - `numeric`
      - : Ob numerische Werte in der Ausgabe verwendet werden sollen. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"always"`. Wenn `"auto"` eingestellt ist, kann die Ausgabe eine idiomatischere Formulierung wie `"yesterday"` anstelle von `"1 day ago"` verwenden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung des Formats

Das folgende Beispiel zeigt, wie ein relativer Zeitformatierer in englischer Sprache erstellt wird.

```js
// Erstellen Sie einen relativen Zeitformatierer in Ihrem Locale
// mit explizit angegebenen Standardwerten.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // andere Werte: "lookup"
  numeric: "always", // andere Werte: "auto"
  style: "long", // andere Werte: "short" oder "narrow"
});

// Relativzeit mit negativem Wert (-1) formatieren.
rtf.format(-1, "day"); // "1 day ago"

// Relativzeit mit positivem Wert (1) formatieren.
rtf.format(1, "day"); // "in 1 day"
```

### Verwendung der Auto-Option

Wenn die `numeric:auto`-Option übergeben wird, erzeugt sie die Zeichenkette `yesterday` oder `tomorrow` anstelle von `1 day ago` oder `in 1 day`. Dies ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

```js
// Erstellen Sie einen relativen Zeitformatierer in Ihrem Locale
// mit der Option numeric: "auto".
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Relativzeit mit negativem Wert (-1) formatieren.
rtf.format(-1, "day"); // "yesterday"

// Relativzeit mit positiver Tageinheit (1) formatieren.
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
