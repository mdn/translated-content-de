---
title: Intl.Locale() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: 4436acdeb5087c7fc5afc58fc8b475e30481c801
---

{{JSRef}}

Der **`Intl.Locale()`** Konstruktor erstellt {{jsxref("Intl.Locale")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Syntax

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> **Note:** `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `tag`
  - : Der Unicode-Lokalisierungsbezeichner-String. Für die Syntax von Lokalisierungsbezeichner-Strings, siehe die [Hauptseite von Intl](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass der `Intl.Locale` Konstruktor, im Gegensatz zu den meisten anderen `Intl` Konstruktoren, kein Array von Lokalisierungen oder `undefined` akzeptiert.
- `options`
  - : Ein Objekt, das die Konfiguration für die Lokalisierung enthält. Optionen hier haben Vorrang gegenüber Erweiterungsschlüsseln im Lokalisierungsbezeichner. Mögliche Eigenschaften sind:
    - `language`
      - : Die Sprache. Jeder syntaktisch gültige String nach der [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) Grammatik (2–3 oder 5–8 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `script`
      - : Das Skript. Jeder syntaktisch gültige String nach der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik (4 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `region`
      - : Die Region. Jeder syntaktisch gültige String nach der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik (entweder 2 Buchstaben oder 3 Ziffern) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `calendar`
      - : Der Kalender. Jeder syntaktisch gültige String nach der [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) Grammatik (eine oder mehrere Segmente von 3–8 alphanumerischen Zeichen, durch Bindestriche verbunden) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.Locale.prototype.getCalendars`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types) aufgelistet sind.
    - `collation`
      - : Die Kollation. Jeder syntaktisch gültige String nach der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.Locale.prototype.getCollations`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types) aufgelistet sind.
    - `numberingSystem`
      - : Das Nummerierungssystem. Jeder syntaktisch gültige String nach der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.Locale.prototype.getNumberingSystems`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types) aufgelistet sind.
    - `caseFirst`
      - : Die Sortieroption für die Großschreibung. Mögliche Werte sind `"upper"`, `"lower"` oder `"false"`.
    - `hourCycle`
      - : Der Stundenturnus. Mögliche Werte sind `"h23"`, `"h12"`, `"h11"` oder das praktisch ungenutzte `"h24"`, die in [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erklärt werden.
    - `numeric`
      - : Die numerische Sortieroption. Ein Boolescher Wert.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der `Intl.Locale()` Konstruktor
einen Lokalisierungsbezeichner-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor akzeptiert auch ein optionales Konfigurationsobjekt-Argument, das
eine beliebige Anzahl von Erweiterungstypen enthalten kann. Zum Beispiel, setzen Sie die
[`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundenturnus und übergeben Sie es
dann an den Konstruktor:

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl.Collator")}}
- [Kanonische Unicode-Lokalisierungsbezeichner](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Lokalisierungsdaten-Markupsprache Spec
