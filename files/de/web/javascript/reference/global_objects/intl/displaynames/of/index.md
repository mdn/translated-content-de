---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: fca3d118b765a990f223308b712fc78bc159043f
---

{{JSRef}}

Die **`of()`**-Methode von {{jsxref("Intl.DisplayNames")}}-Instanzen empfängt einen Code und gibt einen String basierend auf der beim Erstellen dieses `Intl.DisplayNames`-Objekts angegebenen Locale und den Optionen zurück.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Syntax

```js-nolint
of(code)
```

### Parameter

- `code`

  - : Der bereitgestellte `code` hängt vom `type` ab:

    - Wenn der Typ "region" ist, sollte `code` entweder ein [zwei-buchstabiger ISO 3166 Regionscode](https://www.iso.org/iso-3166-country-codes.html) oder ein [dreiziffriger UN M49 geografischer Region](https://unstats.un.org/unsd/methodology/m49/) sein. Es ist erforderlich, der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik zu folgen.
    - Wenn der Typ "script" ist, sollte `code` ein [vier-buchstabiger ISO 15924 Skriptcode](https://unicode.org/iso15924/iso15924-codes.html) sein. Es ist erforderlich, der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik zu folgen.
    - Wenn der Typ "language" ist, sollte `code` durch die [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Nicht-Terminale übereinstimmen.
    - Wenn der Typ "currency" ist, sollte `code` ein [drei-buchstabiger ISO 4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Es ist erforderlich, genau drei alphabetische Zeichen zu haben.
    - Wenn der Typ "dateTimeField" ist, sollte `code` eines der folgenden sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Wenn der Typ "calendar" ist, sollte `code` ein [Kalenderschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Es ist erforderlich, der `type` Grammatik eines [Unicode-Locale-Identifiers](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) zu folgen.

### Rückgabewert

Ein sprachspezifisch formatierter String oder `undefined`, wenn keine Daten für die Eingabe vorhanden sind und `fallback` `"none"` ist.

> **Note:** `fallback` wird nur verwendet, wenn `code` strukturell gültig ist. Siehe [Verwendung von Fallback](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` für den angegebenen `type` nicht strukturell gültig ist.

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

Wenn `Intl.DisplayNames` mit `fallback: "code"` erstellt wird, gibt die `of()`-Methode den `code` zurück, wenn die Eingabe strukturell gültig aussieht, jedoch keine Daten für die Eingabe vorhanden sind. Wenn `fallback` `"none"` ist, wird `undefined` zurückgegeben.

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
