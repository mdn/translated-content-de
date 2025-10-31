---
title: Intl.DisplayNames.prototype.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`of()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen erhält einen Code und gibt einen String basierend auf der beim Erstellen des `Intl.DisplayNames` Objekts angegebenen Lokalisierung und Optionen zurück.

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
    - Ist der Typ "region", sollte `code` entweder ein [zwei-buchstabiger ISO 3166 Regionscode](https://www.iso.org/iso-3166-country-codes.html) oder ein [drei-ziffriger UN M49 geografischer Regionen-Code](https://unstats.un.org/unsd/methodology/m49/) sein. Er muss der Grammatik des [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) folgen. Verwenden Sie Großbuchstabencodes (z.B. `"US"`), da Kleinbuchstabencodes (z.B. `"us"`) möglicherweise nicht überall zuverlässig funktionieren.
    - Ist der Typ "script", sollte `code` ein [vier-buchstabiger ISO 15924 Skriptcode](https://unicode.org/iso15924/iso15924-codes.html) sein. Er muss der Grammatik des [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) folgen.
    - Ist der Typ "language", sollte `code` mit dem [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nichtterminal übereinstimmen.
    - Ist der Typ "currency", sollte `code` ein [drei-buchstabiger ISO 4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Er muss genau drei alphabetische Zeichen haben.
    - Ist der Typ "dateTimeField", sollte `code` einer der folgenden sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Ist der Typ "calendar", sollte `code` ein [Kalenderschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Er muss der `type`-Grammatik eines [Unicode-Lokalisierungsidentifikators](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) folgen.

### Rückgabewert

Ein sprachspezifisch formatierter String oder `undefined`, wenn keine Daten für die Eingabe vorhanden sind und `fallback` `"none"` ist.

> [!NOTE]
> `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [die Verwendung von Fallback](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` strukturell ungültig für den angegebenen `type` ist.

## Beispiele

### Verwendung der of Methode

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

Wenn `Intl.DisplayNames` mit `fallback: "code"` erstellt wird, gibt die `of()` Methode den `code` zurück, wenn die Eingabe strukturell gültig aussieht, aber keine Daten für die Eingabe vorhanden sind. Ist `fallback` `"none"`, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn der `code` strukturell gültig ist. Wenn z.B. `type` `"region"` ist, aber `code` nicht der Grammatik des `unicode_region_subtag` (2 alphabetische Zeichen oder 3 numerische Zeichen) folgt, wird ein {{jsxref("RangeError")}} direkt geworfen, anstatt den Fallback zu verwenden.

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
