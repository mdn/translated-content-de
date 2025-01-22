---
title: Intl.Locale() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Der **`Intl.Locale()`** Konstruktor erstellt {{jsxref("Intl.Locale")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Syntax

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> **Hinweis:** `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `tag`
  - : Die Unicode-Locale-Identifikatorzeichenfolge. Für die Syntax von Locale-Identifikatorzeichenfolgen siehe die [Intl Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass der `Intl.Locale` Konstruktor, im Gegensatz zu den meisten anderen `Intl` Konstruktoren, kein Array von Locales oder `undefined` akzeptiert.
- `options`
  - : Ein Objekt, das die Konfiguration für die Locale enthält. Optionswerte hier haben Vorrang vor Erweiterungsschlüsseln im Locale-Identifikator. Mögliche Eigenschaften sind:
    - `language`
      - : Die Sprache. Jede syntaktisch gültige Zeichenfolge gemäß der [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) Grammatik (2–3 oder 5–8 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `script`
      - : Das Skript. Jede syntaktisch gültige Zeichenfolge gemäß der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik (4 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `region`
      - : Die Region. Jede syntaktisch gültige Zeichenfolge gemäß der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik (entweder 2 Buchstaben oder 3 Ziffern) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `calendar`
      - : Der Kalender. Jede syntaktisch gültige Zeichenfolge gemäß der [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) Grammatik (ein oder mehrere Segmente aus 3–8 alphanumerischen Zeichen, verbunden durch Bindestriche) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) aufgelistet sind.
    - `collation`
      - : Die Sortierung. Jede syntaktisch gültige Zeichenfolge gemäß der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) aufgelistet sind.
    - `numberingSystem`
      - : Das Zahlensystem. Jede syntaktisch gültige Zeichenfolge gemäß der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) aufgelistet sind.
    - `caseFirst`
      - : Die Groß-Klein-Schreibung als Sortieroption. Mögliche Werte sind `"upper"`, `"lower"` oder `"false"`.
    - `hourCycle`
      - : Der Stundenzyklus. Mögliche Werte sind `"h23"`, `"h12"`, `"h11"` oder das praktisch ungenutzte `"h24"`, welche in [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erklärt werden.
    - `numeric`
      - : Die numerische Sortieroption. Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der `Intl.Locale()` Konstruktor eine Locale-Identifikatorzeichenfolge als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor kann auch ein optionales Konfigurationsobjekt als Argument annehmen, das verschiedene Erweiterungstypen enthalten kann. Setzen Sie zum Beispiel die [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundenzyklustyp und übergeben Sie es dann an den Konstruktor:

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- [Kanonische Unicode Locale Identifikatoren](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markup-Sprachspezifikation
