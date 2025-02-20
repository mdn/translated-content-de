---
title: Intl.Locale() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Intl.Locale()`** Konstruktor erstellt {{jsxref("Intl.Locale")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.Locale")}}

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

> **Note:** `Intl.Locale()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `tag`
  - : Der Unicode-Locale-Identifier-String. Die Syntax der Locale-Identifier-Strings finden Sie auf der [Intl-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Beachten Sie, dass der `Intl.Locale`-Konstruktor, im Gegensatz zu den meisten anderen `Intl`-Konstruktoren, kein Array von Locales oder `undefined` akzeptiert.
- `options`
  - : Ein Objekt, das die Konfiguration für die Locale enthält. Werte in diesem Objekt haben Vorrang vor Erweiterungsschlüsseln im Locale-Identifier. Mögliche Eigenschaften sind:
    - `language`
      - : Die Sprache. Jeder syntaktisch gültige String gemäß der Grammatik des [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) (2–3 oder 5–8 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `script`
      - : Das Skript. Jeder syntaktisch gültige String gemäß der Grammatik des [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) (4 Buchstaben) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `region`
      - : Die Region. Jeder syntaktisch gültige String gemäß der Grammatik des [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) (entweder 2 Buchstaben oder 3 Ziffern) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten.
    - `calendar`
      - : Der Kalender. Jeder syntaktisch gültige String gemäß der [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier)-Grammatik (ein oder mehrere Segmente von 3–8 alphanumerischen Zeichen, durch Bindestriche verbunden) wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) aufgeführt sind.
    - `collation`
      - : Die Kollation. Jeder syntaktisch gültige String gemäß der `type`-Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) aufgeführt sind.
    - `numberingSystem`
      - : Das Nummerierungssystem. Jeder syntaktisch gültige String gemäß der `type`-Grammatik wird akzeptiert, aber die Implementierung erkennt nur bestimmte Arten, die in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) aufgeführt sind.
    - `caseFirst`
      - : Die Groß-/Kleinschreibung-Priorität bei der Sortierung. Mögliche Werte sind `"upper"`, `"lower"` oder `"false"`.
    - `hourCycle`
      - : Der Stundentakt. Mögliche Werte sind `"h23"`, `"h12"`, `"h11"` oder das praktisch nicht verwendete `"h24"`, welche in [`Intl.Locale.prototype.getHourCycles`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) erklärt werden.
    - `numeric`
      - : Die numerische Sortierung. Ein boolean.

## Beispiele

### Grundlegende Nutzung

Am einfachsten nimmt der `Intl.Locale()`-Konstruktor einen Locale-Identifier-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Nutzung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor akzeptiert auch ein optionales Konfigurationsobjekt als Argument, das verschiedene Erweiterungstypen enthalten kann. Zum Beispiel können Sie die [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundentakt setzen und es dann an den Konstruktor übergeben:

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
- [Canonical Unicode Locale Identifiers](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markup-Sprachspezifikation
