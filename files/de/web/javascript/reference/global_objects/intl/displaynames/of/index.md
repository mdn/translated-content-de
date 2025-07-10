---
title: Intl.DisplayNames.prototype.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`of()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen nimmt einen Code entgegen und gibt einen Zeichenkettenwert zurück, basierend auf der beim Erstellen des `Intl.DisplayNames` Objekts angegebenen Lokale und Optionen.

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
  - : Der zu übergebende `code` hängt vom `type` ab:
    - Wenn der Typ "region" ist, sollte `code` entweder ein [zwei-Buchstaben-ISO-3166 Regionscode](https://www.iso.org/iso-3166-country-codes.html) oder ein [drei-stelliger UN M49 geografischer Regionencode](https://unstats.un.org/unsd/methodology/m49/) sein. Es muss der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik folgen. Verwenden Sie Großbuchstabencodes (z.B. `"US"`), da Kleinbuchstabencodes (z.B. `"us"`) nicht überall zuverlässig funktionieren könnten.
    - Wenn der Typ "script" ist, sollte `code` ein [vier-Buchstaben-ISO-15924 Schriftcode](https://unicode.org/iso15924/iso15924-codes.html) sein. Es muss der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik folgen.
    - Wenn der Typ "language" ist, sollte `code` vom [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nichtterminal übereinstimmen.
    - Wenn der Typ "currency" ist, sollte `code` ein [drei-Buchstaben-ISO-4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Es muss genau drei alphabetische Zeichen haben.
    - Wenn der Typ "dateTimeField" ist, sollte `code` einer der folgenden sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Wenn der Typ "calendar" ist, sollte `code` ein [Kalender-Schlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Es muss der `type` Grammatik eines [Unicode-Locale-Identifiers](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) folgen.

### Rückgabewert

Ein sprachspezifisch formatierter String oder `undefined`, falls keine Daten für die Eingabe verfügbar sind und `fallback` auf `"none"` gesetzt ist.

> [!NOTE]
> `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [Verwendung von Fallback](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` für den gegebenen `type` nicht strukturell gültig ist.

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

Wenn `Intl.DisplayNames` mit `fallback: "code"` konstruiert wird, gibt die `of()` Methode den `code` zurück, wenn die Eingabe strukturell gültig aussieht, aber keine Daten für die Eingabe vorhanden sind. Wenn `fallback` `"none"` ist, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn der `code` strukturell gültig ist. Zum Beispiel, wenn `type` `"region"` ist, aber `code` nicht der `unicode_region_subtag` Grammatik folgt (2 alphabetische Zeichen oder 3 numerische Zeichen), wird direkt ein {{jsxref("RangeError")}} ausgelöst, anstatt den Fallback zu verwenden.

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
