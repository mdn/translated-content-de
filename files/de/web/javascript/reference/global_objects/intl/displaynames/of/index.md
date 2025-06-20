---
title: Intl.DisplayNames.prototype.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`of()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen erhält einen Code und gibt einen String basierend auf der beim Erstellen dieses `Intl.DisplayNames` Objekts angegebenen Locale und Options zurück.

{{InteractiveExample("JavaScript Demo: Intl.DisplayNames.prototype.of()")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Expected output: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Expected output: "美國"
```

## Syntax

```js-nolint
of(code)
```

### Parameter

- `code`

  - : Der bereitzustellende `code` hängt vom `type` ab:

    - Ist der Typ "region", sollte `code` entweder ein [zwei-buchstabiger ISO 3166 Regions-Code](https://www.iso.org/iso-3166-country-codes.html) oder ein [drei-stelliger UN M49 geografischer Regionencode](https://unstats.un.org/unsd/methodology/m49/) sein. Es muss der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik folgen. Verwenden Sie Großbuchstabencodes (z. B. `"US"`), da Kleinbuchstabencodes (z. B. `"us"`) möglicherweise nicht überall zuverlässig funktionieren.
    - Ist der Typ "script", sollte `code` ein [vier-buchstabiger ISO 15924 Schreibschrift-Code](https://unicode.org/iso15924/iso15924-codes.html) sein. Es muss der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik folgen.
    - Ist der Typ "language", sollte `code` dem [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nonterminal entsprechen.
    - Ist der Typ "currency", sollte `code` ein [drei-buchstabiger ISO 4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Es ist erforderlich, dass es genau drei alphabetische Zeichen enthält.
    - Ist der Typ "dateTimeField", sollte `code` einer der folgenden sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Ist der Typ "calendar", sollte `code` ein [Kalender-Schlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Es muss der `type` Grammatik eines [Unicode-Locale-Identifiers](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) folgen.

### Rückgabewert

Ein sprachspezifisch formatierter String oder `undefined`, wenn keine Daten für die Eingabe vorhanden sind und `fallback` auf `"none"` gesetzt ist.

> **Note:** `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [using fallback](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` für den gegebenen `type` strukturell ungültig ist.

## Beispiele

### Verwendung der Methode of

```js
const regionNames = new Intl.DisplayNames("en", { type: "region" });
regionNames.of("419"); // "Latin America"

const languageNames = new Intl.DisplayNames("en", { type: "language" });
languageNames.of("fr"); // "French"

const currencyNames = new Intl.DisplayNames("en", { type: "currency" });
currencyNames.of("EUR"); // "Euro"

const languageNamesStandard = new Intl.DisplayNames("fr", {
  type: "language",
  languageDisplay: "standard",
});
languageNamesStandard.of("fr-CA"); // "français (Canada)"

const languageNamesDialect = new Intl.DisplayNames("fr", {
  type: "language",
  languageDisplay: "dialect",
});
languageNamesDialect.of("fr-CA"); // "français canadien"
```

### Verwendung von Fallback

Wenn `Intl.DisplayNames` mit `fallback: "code"` erstellt wurde, wird die `of()`-Methode den `code` zurückgeben, wenn die Eingabe strukturell gültig aussieht, aber keine Daten für die Eingabe vorhanden sind. Ist `fallback` auf `"none"` gesetzt, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn der `code` strukturell gültig ist. Zum Beispiel, wenn der `type` `"region"` ist, aber `code` nicht der `unicode_region_subtag` Grammatik folgt (2 alphabetische Zeichen oder 3 numerische Zeichen), wird direkt ein {{jsxref("RangeError")}} geworfen, anstatt den Fallback zu verwenden.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZLC"),
); // throws RangeError: invalid value "ZLC" for option region
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DisplayNames")}}
