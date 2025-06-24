---
title: Intl.DisplayNames.prototype.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die **`of()`** Methode von Instanzen von {{jsxref("Intl.DisplayNames")}} erhält einen Code und gibt einen String zurück, basierend auf der beim Erstellen dieses `Intl.DisplayNames` Objekts bereitgestellten Lokalisierung und den Optionen.

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
  - : Der anzugebende `code` hängt vom `type` ab:
    - Wenn der Typ "region" ist, sollte `code` entweder ein [zweibuchstabiger ISO 3166 Regionscode](https://www.iso.org/iso-3166-country-codes.html) oder eine [dreistellige UN M49 geografische Region](https://unstats.un.org/unsd/methodology/m49/) sein. Es ist erforderlich, der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik zu folgen. Verwenden Sie Großbuchstaben (z. B. `"US"`), da Kleinbuchstaben (z. B. `"us"`) möglicherweise nicht überall zuverlässig funktionieren.
    - Wenn der Typ "script" ist, sollte `code` ein [vierbuchstabiger ISO 15924 Skriptcode](https://unicode.org/iso15924/iso15924-codes.html) sein. Es ist erforderlich, der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik zu folgen.
    - Wenn der Typ "language" ist, sollte `code` mit dem [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nichtterminal übereinstimmen.
    - Wenn der Typ "currency" ist, sollte `code` ein [dreibuchstabiger ISO 4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Es ist erforderlich, genau drei alphabetische Zeichen zu haben.
    - Wenn der Typ "dateTimeField" ist, sollte `code` einer der folgenden sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Wenn der Typ "calendar" ist, sollte `code` ein [Kalenderschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Es ist erforderlich, der `type` Grammatik eines [Unicode Lokalisierungsidentifikators](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) zu folgen.

### Rückgabewert

Ein sprachspezifisch formatierter String oder `undefined`, wenn es keine Daten für die Eingabe gibt und `fallback` `"none"` ist.

> [!NOTE] > `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [Verwendung von Fallback](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` nicht strukturell gültig für den gegebenen `type` ist.

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

### Verwendung von Fallback

Wenn der `Intl.DisplayNames` mit `fallback: "code"` konstruiert ist, gibt die `of()` Methode den `code` zurück, wenn die Eingabe strukturell gültig aussieht, aber es keine Daten für die Eingabe gibt. Wenn `fallback` `"none"` ist, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn `code` strukturell gültig ist. Wenn zum Beispiel `type` `"region"` ist, aber `code` nicht der `unicode_region_subtag` Grammatik folgt (2 alphabetische Zeichen oder 3 numerische Zeichen), wird direkt ein {{jsxref("RangeError")}} ausgelöst, anstatt den Fallback zu verwenden.

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
