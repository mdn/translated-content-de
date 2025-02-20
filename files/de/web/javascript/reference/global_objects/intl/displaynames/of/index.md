---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`of()`** von {{jsxref("Intl.DisplayNames")}}-Instanzen nimmt einen Code entgegen und gibt eine Zeichenkette basierend auf der beim Erstellen dieses `Intl.DisplayNames`-Objekts angegebenen Sprache und Optionen zurück.

{{InteractiveExample("JavaScript Demo: Intl.DisplayNames")}}

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

  - : Der `code`, der angegeben werden muss, hängt vom `type` ab:

    - Wenn der Typ "region" ist, sollte `code` entweder ein [zwei-buchstabiger ISO 3166-Regionen-Code](https://www.iso.org/iso-3166-country-codes.html) oder ein [drei-stelliger UN M49 geografischer Code](https://unstats.un.org/unsd/methodology/m49/) sein. Er muss der Grammatik des [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) folgen. Verwenden Sie Großbuchstaben-Codes (z. B. `"US"`), da Kleinbuchstaben (z. B. `"us"`) möglicherweise nicht überall zuverlässig funktionieren.
    - Wenn der Typ "script" ist, sollte `code` ein [vier-buchstabiger ISO 15924-Schriftart-Code](https://unicode.org/iso15924/iso15924-codes.html) sein. Er muss der Grammatik des [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) folgen.
    - Wenn der Typ "language" ist, sollte `code` mit der [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nichtterminal übereinstimmen.
    - Wenn der Typ "currency" ist, sollte `code` ein [drei-buchstabiger ISO 4217-Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Er muss genau drei alphabetische Zeichen enthalten.
    - Wenn der Typ "dateTimeField" ist, sollte `code` einer der folgenden Werte sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Wenn der Typ "calendar" ist, sollte `code` ein [Kalenderschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Er muss der `type`-Grammatik eines [Unicode-Sprachbezeichners](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) folgen.

### Rückgabewert

Eine sprachspezifisch formatierte Zeichenkette oder `undefined`, wenn keine Daten für die Eingabe vorhanden sind und `fallback` den Wert `"none"` hat.

> **Hinweis:** `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [Verwendung von Fallback](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` für den angegebenen `type` strukturell ungültig ist.

## Beispiele

### Die Methode of verwenden

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

Wenn `Intl.DisplayNames` mit `fallback: "code"` erstellt wurde, gibt die Methode `of()` den `code` zurück, wenn die Eingabe strukturell gültig aussieht, aber keine Daten für die Eingabe vorhanden sind. Hat `fallback` den Wert `"none"`, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn `code` strukturell gültig ist. Wenn zum Beispiel `type` `"region"` ist, aber `code` nicht der Grammatik des `unicode_region_subtag` (2 alphabetische Zeichen oder 3 numerische Zeichen) entspricht, wird ein {{jsxref("RangeError")}} direkt ausgelöst, anstatt den Fallback zu verwenden.

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
