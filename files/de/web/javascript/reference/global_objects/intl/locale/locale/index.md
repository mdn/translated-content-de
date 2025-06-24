---
title: Intl.Locale() Konstruktor
short-title: Intl.Locale()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Intl.Locale()`** Konstruktor erstellt Objekte vom Typ {{jsxref("Intl.Locale")}}.

{{InteractiveExample("JavaScript Demo: Intl.Locale() Konstruktor")}}

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

> [!NOTE] > `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) instanziiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `tag`
  - : Der Unicode-Locale-Identifikator-String. Für die Syntax der Locale-Identifikator-Strings siehe die [Hauptseite von Intl](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass der `Intl.Locale` Konstruktor, im Gegensatz zu den meisten anderen `Intl` Konstruktoren, kein Array von Locales oder `undefined` akzeptiert.
- `options`
  - : Ein Objekt, das die Konfiguration für die Locale enthält. Optionswerte hier haben Vorrang vor Erweiterungsschlüsseln im Locale-Identifikator. Mögliche Eigenschaften sind:
    - `language`
      - : Die Sprache. Jeder syntaktisch gültige String, der der [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) Grammatik folgt (2–3 oder 5–8 Buchstaben), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `script`
      - : Das Skript. Jeder syntaktisch gültige String, der der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik folgt (4 Buchstaben), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `region`
      - : Die Region. Jeder syntaktisch gültige String, der der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik folgt (entweder 2 Buchstaben oder 3 Ziffern), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `calendar`
      - : Der Kalender. Jeder syntaktisch gültige String, der der [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) Grammatik folgt (ein oder mehrere Segmente von 3–8 alphanumerischen Zeichen, verbunden durch Bindestriche), wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) aufgelistet sind.
    - `collation`
      - : Die Sortierung. Jeder syntaktisch gültige String, der der `type`-Grammatik folgt, wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) aufgelistet sind.
    - `numberingSystem`
      - : Das Nummerierungssystem. Jeder syntaktisch gültige String, der der `type`-Grammatik folgt, wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) aufgelistet sind.
    - `caseFirst`
      - : Die Sortieroption, die die Groß-/Kleinschreibung berücksichtigt. Mögliche Werte sind `"upper"`, `"lower"` oder `"false"`.
    - `hourCycle`
      - : Der Stundentakt. Mögliche Werte sind `"h23"`, `"h12"`, `"h11"` oder das praktisch unbenutzte `"h24"`, die in [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erklärt werden.
    - `numeric`
      - : Die numerische Sortieroption. Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der `Intl.Locale()` Konstruktor einen Locale-Identifikator-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor akzeptiert auch ein optionales Konfigurationsobjekt, das eine beliebige Anzahl von Erweiterungstypen enthalten kann. Setzen Sie zum Beispiel die [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundentakt und übergeben Sie sie dann dem Konstruktor:

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
- [Kanonische Unicode-Locale-Identifikatoren](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markup-Sprachspezifikation
