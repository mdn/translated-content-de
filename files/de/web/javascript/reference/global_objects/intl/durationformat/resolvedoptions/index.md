---
title: Intl.DurationFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die **`resolvedOptions()`** Methode der {{jsxref("Intl.DurationFormat")}} Instanzen gibt ein neues Objekt zurück, das Eigenschaften enthält, die die während der Initialisierung dieses `DurationFormat` Objekts berechneten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DurationFormat` Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Der BCP 47 Sprach-Tag für die tatsächlich genutzte Locale, bestimmt durch den [Locale-Verhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `numberingSystem`
  - : Der in das `options` Argument übergebene Wert oder der Unicode-Erweiterungsschlüssel `"nu"`, mit standardmäßig ausgefüllten Werten bei Bedarf. Es ist ein unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types) für diese Locale. Der Standard ist von der Locale abhängig.
- `style`
  - : Der in das `options` Argument übergebene Wert, mit standardmäßig ausgefüllten Werten bei Bedarf. Er ist entweder `"long"`, `"short"`, `"narrow"`, oder `"digital"`. Der Standard ist `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : Die für diese Eigenschaften in das `options` Argument übergebenen Werte, mit standardmäßig ausgefüllten Werten bei Bedarf. Für die gültigen Werte und Standards für jeden, siehe das [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) Argument des Konstruktors.
- `fractionalDigits` {{optional_inline}}
  - : Der in das `options` Argument übergebene Wert. Er ist nur vorhanden, wenn er in `options` angegeben wurde. Es ist eine ganze Zahl von 0 bis 9, inklusive.

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
