---
title: Intl.Locale() Konstruktor
short-title: Intl.Locale()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

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

> [!NOTE]
> `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `tag`
  - : Der Unicode-Locale-Bezeichner-String. Für die Syntax von Locale-Bezeichner-Strings siehe die [Intl Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass der `Intl.Locale` Konstruktor, im Gegensatz zu den meisten anderen `Intl` Konstruktoren, kein Array von Locales oder `undefined` akzeptiert.
- `options`
  - : Ein Objekt, das die Konfiguration für die Locale enthält. Die hier angegebenen Optionswerte haben Vorrang vor Erweiterungsschlüsseln im Locale-Bezeichner. Mögliche Eigenschaften sind:
    - `language`
      - : Die [Sprache](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language). Jeder syntaktisch gültige String entsprechend der [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) Grammatik (2–3 oder 5–8 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `script`
      - : Das [Schrift-System](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script). Jeder syntaktisch gültige String entsprechend der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik (4 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `region`
      - : Die [Region](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region). Jeder syntaktisch gültige String entsprechend der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik (entweder 2 Buchstaben oder 3 Ziffern) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `variants`
      - : Die [Varianten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants). Es sollte eine durch Bindestriche (`-`) getrennte Liste von _einzigartigen_ Varianten-Tags sein, wobei jedes Tag ein syntaktisch gültiger String entsprechend der [`unicode_variant_subtag`](https://unicode.org/reports/tr35/#unicode_variant_subtag) Grammatik ist (entweder 5–8 alphanumerische Zeichen oder eine Ziffer gefolgt von 3 alphanumerischen Zeichen), aber die Implementierung erkennt nur bestimmte Arten.
    - `calendar`
      - : Der [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar). Jeder syntaktisch gültige String entsprechend der [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) Grammatik (ein oder mehrere Segmente von 3–8 alphanumerischen Zeichen, verbunden durch Bindestriche) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) aufgelistet sind.
    - `collation`
      - : Die [Kollation](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation). Jeder syntaktisch gültige String entsprechend der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) aufgelistet sind.
    - `numberingSystem`
      - : Das [Zahlsystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem). Jeder syntaktisch gültige String entsprechend der `type` Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) aufgelistet sind.
    - `caseFirst`
      - : Die [Case-First-Sortieroption](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst). Mögliche Werte sind `"upper"`, `"lower"`, oder `"false"`.
    - `hourCycle`
      - : Der [Stundenzyklus](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle). Mögliche Werte sind `"h23"`, `"h12"`, `"h11"`, oder das praktisch unbenutzte `"h24"`, welche in [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erklärt werden.
    - `numeric`
      - : Die [numerische Sortieroption](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric). Ein boolean.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der `Intl.Locale()` Konstruktor einen Locale-Bezeichner-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor kann auch ein optionales Konfigurationsobjekt als Argument nehmen, das verschiedene Erweiterungstypen enthalten kann. Setzen Sie zum Beispiel die [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundenzylus-Typ und übergeben Sie es dann an den Konstruktor:

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
- [Kanonische Unicode-Locale-Identifikatoren](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Datenmarkupsprache-Spezifikation
