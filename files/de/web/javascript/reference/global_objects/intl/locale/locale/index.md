---
title: Intl.Locale()-Konstruktor
short-title: Intl.Locale()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Der **`Intl.Locale()`**-Konstruktor erstellt {{jsxref("Intl.Locale")}}-Objekte.

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
> `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, den Konstruktor ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `tag`
  - : Ein Unicode-Locale-Identifier-String. Informationen zur Syntax von Locale-Identifier-Strings finden Sie auf der [Intl-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass der `Intl.Locale`-Konstruktor im Gegensatz zu den meisten anderen `Intl`-Konstruktoren weder ein Array von Locales noch `undefined` akzeptiert.
- `options`
  - : Ein Objekt mit Konfigurationseinstellungen für die Locale. Die hier angegebenen Optionswerte haben Vorrang vor Erweiterungsschlüsseln im Locale-Identifier. Folgende Eigenschaften sind möglich:
    - `language`
      - : Die [Sprache](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language). Jeder syntaktisch gültige String gemäß der [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag)-Grammatik (2–3 oder 5–8 Buchstaben) wird akzeptiert, die Implementierung erkennt jedoch nur bestimmte Werte.
    - `script`
      - : Die [Schrift](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script). Jeder syntaktisch gültige String gemäß der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag)-Grammatik (4 Buchstaben) wird akzeptiert, die Implementierung erkennt jedoch nur bestimmte Werte.
    - `region`
      - : Die [Region](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region). Jeder syntaktisch gültige String gemäß der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag)-Grammatik (entweder 2 Buchstaben oder 3 Ziffern) wird akzeptiert, die Implementierung erkennt jedoch nur bestimmte Werte.
    - `variants`
      - : Die [Varianten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants). Der Wert sollte eine durch Bindestriche (`-`) getrennte Liste _eindeutiger_ Varianten-Tags sein. Jeder Tag muss ein syntaktisch gültiger String gemäß der [`unicode_variant_subtag`](https://unicode.org/reports/tr35/#unicode_variant_subtag)-Grammatik sein (entweder 5–8 alphanumerische Zeichen oder eine Ziffer gefolgt von 3 alphanumerischen Zeichen). Die Implementierung erkennt jedoch nur bestimmte Werte.
    - `calendar`
      - : Der [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar). Jeder syntaktisch gültige String gemäß der [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier)-Grammatik (ein oder mehrere durch Bindestriche verbundene Segmente mit jeweils 3–8 alphanumerischen Zeichen) wird akzeptiert. Die Implementierung erkennt jedoch nur bestimmte Werte, die unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) aufgeführt sind.
    - `collation`
      - : Die [Sortierreihenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation). Jeder syntaktisch gültige String gemäß der `type`-Grammatik wird akzeptiert. Die Implementierung erkennt jedoch nur bestimmte Werte, die unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) aufgeführt sind.
    - `numberingSystem`
      - : Das [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem). Jeder syntaktisch gültige String gemäß der `type`-Grammatik wird akzeptiert. Die Implementierung erkennt jedoch nur bestimmte Werte, die unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) aufgeführt sind.
    - `caseFirst`
      - : Die [Sortieroption für Groß- und Kleinschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst). Mögliche Werte sind `"upper"`, `"lower"` und `"false"`.
    - `firstDayOfWeek`
      - : Der [erste Tag der Woche](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/firstDayOfWeek). Mögliche Werte sind `"mon"`, `"tue"`, `"wed"`, `"thu"`, `"fri"`, `"sat"` und `"sun"` oder die entsprechenden numerischen Werte: `"1"`, `"2"`, `"3"`, `"4"`, `"5"`, `"6"` sowie `"0"` oder `"7"` für Sonntag.
    - `hourCycle`
      - : Der [Stundenzyklus](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle). Mögliche Werte sind `"h23"`, `"h12"`, `"h11"` und das in der Praxis kaum verwendete `"h24"`. Diese werden unter [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erläutert.
    - `numeric`
      - : Die [numerische Sortieroption](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric). Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

In seiner einfachsten Form nimmt der `Intl.Locale()`-Konstruktor einen Locale-Identifier-String als Argument entgegen:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor akzeptiert außerdem ein optionales Konfigurationsobjekt, das verschiedene Erweiterungstypen enthalten kann. Setzen Sie beispielsweise die Eigenschaft [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) des Konfigurationsobjekts auf den gewünschten Stundenzyklus und übergeben Sie das Objekt anschließend an den Konstruktor:

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
- [Kanonische Unicode-Locale-Identifier](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Spezifikation der Unicode Locale Data Markup Language
