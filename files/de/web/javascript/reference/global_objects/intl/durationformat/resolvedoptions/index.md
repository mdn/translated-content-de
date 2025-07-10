---
title: Intl.DurationFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.DurationFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DurationFormat`-Objekts berechneten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DurationFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das BCP 47-Sprachtag für die tatsächlich verwendete Locale, bestimmt durch den [Locale-Verhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wird, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit Standardeinstellungen nach Bedarf. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Locale. Der Standard ist von der Locale abhängig.
- `style`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wird, mit Standardeinstellungen nach Bedarf. Er ist entweder `"long"`, `"short"`, `"narrow"` oder `"digital"`. Der Standard ist `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : Die für diese Eigenschaften im `options`-Argument angegebenen Werte, mit Standardeinstellungen nach Bedarf. Für die gültigen Werte und Standardeinstellungen für jede Eigenschaft siehe das [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Argument des Konstruktors.
- `fractionalDigits` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wird. Er ist nur vorhanden, wenn er in `options` angegeben wurde. Es ist eine Ganzzahl von 0 bis 9, einschließlich.

## Beispiele

### Verwendung der Methode resolvedOptions

```js
const duration = new Intl.DurationFormat("en");
const usedOptions = duration.resolvedOptions();

usedOptions.locale; // "en"
usedOptions.numberingSystem; // "latn"
usedOptions.years; // "long"
usedOptions.yearsDisplay; // "auto"
usedOptions.style; // "long"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
