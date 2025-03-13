---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`of()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen erhält einen Code und gibt einen String basierend auf dem Gebietsschema und den bereitgestellten Optionen zurück, die beim Instanziieren dieses `Intl.DisplayNames` Objekts angegeben wurden.

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

  - : Der zu bereitstellende `code` hängt vom `type` ab:

    - Wenn der Typ "region" ist, sollte `code` entweder ein [zweibuchstabiger ISO 3166 Regionscode](https://www.iso.org/iso-3166-country-codes.html) oder ein [dreistelliger UN M49 geografischer Code](https://unstats.un.org/unsd/methodology/m49/) sein. Es muss der Grammatik des [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) folgen. Verwenden Sie Großbuchstabencodes (z. B. `"US"`), da Kleinbuchstabencodes (z. B. `"us"`) möglicherweise nicht überall zuverlässig funktionieren.
    - Wenn der Typ "script" ist, sollte `code` ein [vierbuchstabiger ISO 15924 Skriptcode](https://unicode.org/iso15924/iso15924-codes.html) sein. Es muss der Grammatik des [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) folgen.
    - Wenn der Typ "language" ist, sollte `code` durch das [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nonterminal übereinstimmen.
    - Wenn der Typ "currency" ist, sollte `code` ein [dreibuchstabiger ISO 4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Es muss genau drei alphabetische Zeichen enthalten.
    - Wenn der Typ "dateTimeField" ist, sollte `code` einer der folgenden sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Wenn der Typ "calendar" ist, sollte `code` ein [Kalenderschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Es muss der `type` Grammatik eines [Unicode-Ortsbezeichners](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) folgen.

### Rückgabewert

Ein sprachspezifisch formatierter String oder `undefined`, wenn keine Daten für die Eingabe vorhanden sind und `fallback` `"none"` ist.

> **Hinweis:** `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [Verwendung des Fallbacks](#verwendung_des_fallbacks).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` für den gegebenen `type` strukturell ungültig ist.

## Beispiele

### Verwendung der of-Methode

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

### Verwendung des Fallbacks

Wenn `Intl.DisplayNames` mit `fallback: "code"` konstruiert wird, gibt die Methode `of()` den `code` zurück, wenn die Eingabe strukturell gültig aussieht, aber keine Daten für die Eingabe vorhanden sind. Wenn `fallback` `"none"` ist, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn `code` strukturell gültig ist. Beispielsweise, wenn `type` `"region"` ist, aber `code` nicht der `unicode_region_subtag` Grammatik entspricht (2 alphabetische oder 3 numerische Zeichen), wird direkt ein {{jsxref("RangeError")}} ausgelöst, anstatt den Fallback zu verwenden.

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
