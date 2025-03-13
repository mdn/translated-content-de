---
title: Intl.Locale() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`Intl.Locale()`** Konstruktor erstellt {{jsxref("Intl.Locale")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.Locale() constructor")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## Syntax

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> **Note:** `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `tag`
  - : Der Unicode-Locale-Bezeichner-String. Für die Syntax von Locale-Bezeichner-Strings, siehe die [Hauptseite von Intl](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass im Gegensatz zu den meisten anderen `Intl`-Konstruktoren der `Intl.Locale` Konstruktor kein Array von Locales oder `undefined` akzeptiert.
- `options`
  - : Ein Objekt, das die Konfiguration für die Locale enthält. Optionswerte hier haben Vorrang vor Erweiterungsschlüsseln im Locale-Bezeichner. Mögliche Eigenschaften sind:
    - `language`
      - : Die Sprache. Jeder syntaktisch gültige String gemäß der [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) Grammatik (2–3 oder 5–8 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `script`
      - : Das Skript. Jeder syntaktisch gültige String gemäß der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik (4 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `region`
      - : Die Region. Jeder syntaktisch gültige String gemäß der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik (entweder 2 Buchstaben oder 3 Ziffern) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `calendar`
      - : Der Kalender. Jeder syntaktisch gültige String gemäß der [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) Grammatik (ein oder mehrere Segmente aus 3–8 Alphanumerika, durch Bindestriche verbunden) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) aufgelistet sind.
    - `collation`
      - : Die Sortierung. Jeder syntaktisch gültige String gemäß der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) aufgelistet sind.
    - `numberingSystem`
      - : Das Nummerierungssystem. Jeder syntaktisch gültige String gemäß der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) aufgelistet sind.
    - `caseFirst`
      - : Die Groß-Klein-Schreibungssortieroption. Mögliche Werte sind `"upper"`, `"lower"` oder `"false"`.
    - `hourCycle`
      - : Der Stundentakt. Mögliche Werte sind `"h23"`, `"h12"`, `"h11"` oder das praktisch ungenutzte `"h24"`, die in [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erklärt werden.
    - `numeric`
      - : Die numerische Sortieroption. Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der `Intl.Locale()` Konstruktor
einen Locale-Bezeichner-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjekt-Argument, das jede der mehreren Erweiterungsarten enthalten kann. Beispiel: Setzen Sie die
[`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundentakt-Typ und übergeben Sie
es dann an den Konstruktor:

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
- [Kanonische Unicode-Locale-Bezeichner](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markup-Sprachspezifikation
