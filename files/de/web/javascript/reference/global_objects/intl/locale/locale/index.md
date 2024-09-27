---
title: Intl.Locale()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: 4436acdeb5087c7fc5afc58fc8b475e30481c801
---

{{JSRef}}

Der **`Intl.Locale()`**-Konstruktor erstellt {{jsxref("Intl.Locale")}}-Objekte.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Syntax

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> **Note:** `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `tag`
  - : Der Unicode-Locale-Bezeichner-String. Für die Syntax von Locale-Bezeichner-Strings siehe die [Intl-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass der `Intl.Locale`-Konstruktor, anders als die meisten anderen `Intl`-Konstruktoren, kein Array von Locales oder `undefined` akzeptiert.
- `options`
  - : Ein Objekt, das die Konfiguration für das Locale enthält. Optionswerte hier haben Vorrang vor Erweiterungsschlüsseln im Locale-Bezeichner. Mögliche Eigenschaften sind:
    - `language`
      - : Die Sprache. Jeder syntaktisch gültige String, der der Grammatik des [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) folgt (2–3 oder 5–8 Buchstaben), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `script`
      - : Die Schrift. Jeder syntaktisch gültige String, der der Grammatik des [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) folgt (4 Buchstaben), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `region`
      - : Die Region. Jeder syntaktisch gültige String, der der Grammatik des [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) folgt (entweder 2 Buchstaben oder 3 Ziffern), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `calendar`
      - : Der Kalender. Jeder syntaktisch gültige String, der der Grammatik des [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) folgt (ein oder mehrere Segmente aus 3–8 alphanumerischen Zeichen, verbunden durch Bindestriche), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.Locale.prototype.getCalendars`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types) aufgeführt sind.
    - `collation`
      - : Die Sortierung. Jeder syntaktisch gültige String, der der `type`-Grammatik folgt, wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.Locale.prototype.getCollations`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types) aufgeführt sind.
    - `numberingSystem`
      - : Das Zahlensystem. Jeder syntaktisch gültige String, der der `type`-Grammatik folgt, wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.Locale.prototype.getNumberingSystems`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types) aufgeführt sind.
    - `caseFirst`
      - : Die Sortieroption beim ersten Buchstaben. Mögliche Werte sind `"upper"`, `"lower"` oder `"false"`.
    - `hourCycle`
      - : Der Stundenzyklus. Mögliche Werte sind `"h23"`, `"h12"`, `"h11"` oder das praktisch ungenutzte `"h24"`, die in [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erläutert werden.
    - `numeric`
      - : Die numerische Sortieroption. Ein Boolean.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der `Intl.Locale()`-Konstruktor
einen Locale-Bezeichner-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjekt als Argument, das
beliebige Erweiterungstypen enthalten kann. Zum Beispiel kann die
[`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundenzklustyp gesetzt werden und dann
in den Konstruktor übergeben werden:

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
- [Kanonische Unicode-Locale-Bezeichner](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markupsprache-Spezifikation
