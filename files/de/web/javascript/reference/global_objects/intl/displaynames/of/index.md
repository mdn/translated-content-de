---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: fca3d118b765a990f223308b712fc78bc159043f
---

{{JSRef}}

Die **`of()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen erhält einen Code und gibt einen String basierend auf dem bei der Instanziierung dieses `Intl.DisplayNames` Objekts bereitgestellten Locale und Optionen zurück.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Syntax

```js-nolint
of(code)
```

### Parameter

- `code`

  - : Der zu bereitstellende `code` hängt vom `type` ab:

    - Wenn der Typ "region" ist, sollte `code` entweder ein [zwei-Buchstaben ISO 3166 Regionscode](https://www.iso.org/iso-3166-country-codes.html) oder ein [drei-stellige UN M49 geografische Region](https://unstats.un.org/unsd/methodology/m49/) sein. Es muss der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik folgen.
    - Wenn der Typ "script" ist, sollte `code` ein [vier-Buchstaben ISO 15924 Skriptcode](https://unicode.org/iso15924/iso15924-codes.html) sein. Es muss der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik folgen.
    - Wenn der Typ "language" ist, sollte `code` dem [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nichtterminal entsprechen.
    - Wenn der Typ "currency" ist, sollte `code` ein [drei-Buchstaben ISO 4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Es muss genau drei alphabetische Zeichen haben.
    - Wenn der Typ "dateTimeField" ist, sollte `code` einer der folgenden Werte sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Wenn der Typ "calendar" ist, sollte `code` ein [Kalenderschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Es muss der `type` Grammatik eines [Unicode-Locale-Identifier](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) folgen.

### Rückgabewert

Ein sprachspezifischer formatierter String oder `undefined`, wenn keine Daten für die Eingabe vorhanden sind und `fallback` `"none"` ist.

> **Hinweis:** `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [Fallback verwenden](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` strukturell nicht gültig für den angegebenen `type` ist.

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

Wenn der `Intl.DisplayNames` mit `fallback: "code"` erstellt wird, gibt die `of()` Methode den `code` zurück, wenn die Eingabe strukturell gültig aussieht, aber keine Daten für die Eingabe vorhanden sind. Wenn `fallback` `"none"` ist, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn der `code` strukturell gültig ist. Zum Beispiel, wenn `type` `"region"` ist, aber `code` nicht der `unicode_region_subtag` Grammatik folgt (2 alphabetische Zeichen oder 3 numerische Zeichen), wird ein {{jsxref("RangeError")}} direkt ausgelöst, anstatt den Fallback zu verwenden.

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
