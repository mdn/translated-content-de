---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: 3ed94a520e98ab711f5b808d14ae1dbd9033eda0
---

{{JSRef}}

Die **`of()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen empfängt einen Code und gibt einen String zurück, basierend auf der Sprache und den Optionen, die beim Erstellen dieses `Intl.DisplayNames` Objekts bereitgestellt wurden.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Syntax

```js-nolint
of(code)
```

### Parameter

- `code`

  - : Der bereitgestellte `code` hängt von dem `type` ab:

    - Wenn der Typ "region" ist, sollte `code` entweder ein [zweibuchstabiger ISO 3166 Region Code](https://www.iso.org/iso-3166-country-codes.html) oder ein [dreistelliger UN M49 geografischer Region Code](https://unstats.un.org/unsd/methodology/m49/) sein. Es muss der [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) Grammatik folgen.
    - Wenn der Typ "script" ist, sollte `code` ein [vierbuchstabiger ISO 15924 Skript Code](https://unicode.org/iso15924/iso15924-codes.html) sein. Es muss der [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) Grammatik folgen.
    - Wenn der Typ "language" ist, sollte `code` eine _languageCode_ \["-" _scriptCode_] \["-" _regionCode_ ] \*("-" _variant_) Teilfolge der [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier) Grammatik sein. _languageCode_ ist entweder ein zweibuchstabiger ISO 639-1 Sprachcode oder ein dreibuchstabiger ISO 639-2 Sprachcode.
    - Wenn der Typ "currency" ist, sollte `code` ein [dreibuchstabiger ISO 4217 Währungscode](https://www.iso.org/iso-4217-currency-codes.html) sein. Es muss genau drei alphabetische Zeichen enthalten.
    - Wenn der Typ "dateTimeField" ist, sollte `code` einer der folgenden sein: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Wenn der Typ "calendar" ist, sollte `code` ein [Kalender-Schlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) sein. Es muss der `type` Grammatik eines [Unicode-Locale-Identifier](https://unicode.org/reports/tr35/#32-unicode-locale-identifier) folgen.

### Rückgabewert

Ein sprachspezifisch formatierter String oder `undefined`, wenn keine Daten für die Eingabe vorhanden sind und `fallback` `"none"` ist.

> **Note:** `fallback` wird nur genutzt, wenn `code` strukturell gültig ist. Siehe [Verwendung von Fallback](#verwendung_von_fallback).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `code` nicht strukturell gültig für den gegebenen `type` ist.

## Beispiele

### Verwendung der of Methode

```js
const regionNames = new Intl.DisplayNames("en", { type: "region" });
regionNames.of("419"); // "Latin America"

const languageNames = new Intl.DisplayNames("en", { type: "language" });
languageNames.of("fr"); // "French"

const currencyNames = new Intl.DisplayNames("en", { type: "currency" });
currencyNames.of("EUR"); // "Euro"
```

### Verwendung von Fallback

Wenn das `Intl.DisplayNames` mit `fallback: "code"` erstellt wird, gibt die `of()` Methode den `code` zurück, wenn die Eingabe strukturell gültig aussieht, aber keine Daten für die Eingabe vorhanden sind. Wenn `fallback` `"none"` ist, wird `undefined` zurückgegeben.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Dies gilt jedoch nur, wenn der `code` strukturell gültig ist. Wenn zum Beispiel `type` `"region"` ist, aber `code` nicht der `unicode_region_subtag` Grammatik folgt (2 alphabetische Zeichen oder 3 numerische Zeichen), wird ein {{jsxref("RangeError")}} direkt ausgelöst, anstatt den Fallback zu verwenden.

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
