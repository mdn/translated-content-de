---
title: Intl.DurationFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.DurationFormat")}} Instanzen gibt ein neues Objekt zurück, das Eigenschaften enthält, die die während der Initialisierung dieses `DurationFormat`-Objekts berechneten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DurationFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der angegebenen Reihenfolge:

- `locale`
  - : Der BCP 47-Sprach-Tag für die tatsächlich verwendete Locale, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `numberingSystem`
  - : Der in dem `options`-Argument angegebene Wert oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit Standardeinstellungen, die bei Bedarf ausgefüllt werden. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Locale. Die Standardeinstellung ist lokalisierungsabhängig.
- `style`
  - : Der in dem `options`-Argument angegebene Wert, mit Standardeinstellungen, die bei Bedarf ausgefüllt werden. Es ist entweder `"long"`, `"short"`, `"narrow"` oder `"digital"`. Die Standardeinstellung ist `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : Die in dem `options`-Argument angegebenen Werte mit Standardeinstellungen, die bei Bedarf ausgefüllt werden. Für die gültigen Werte und Standardeinstellungen für jeden einzelnen Wert, siehe das [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Argument des Konstruktors.
- `fractionalDigits` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde. Er ist nur vorhanden, wenn er in `options` angegeben ist. Es handelt sich um eine ganze Zahl zwischen 0 und 9, einschließlich.

## Beispiele

### Verwenden der resolvedOptions-Methode

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
