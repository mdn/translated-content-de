---
title: Intl.DurationFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.DurationFormat")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung dieses `DurationFormat`-Objekts ermittelten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die bei der Initialisierung dieses `DurationFormat`-Objekts ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Der {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wurde. In der Ausgabe darf nur der Unicode-Erweiterungsschlüssel `nu` enthalten sein, sofern er angefordert wurde.
- `numberingSystem`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"nu"` angegebene Wert, wobei bei Bedarf ein Standardwert eingesetzt wird. Es handelt sich um ein für diese Locale unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Der Standardwert hängt von der Locale ab.
- `style`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, wobei bei Bedarf ein Standardwert eingesetzt wird. Der Wert ist entweder `"long"`, `"short"`, `"narrow"` oder `"digital"`. Der Standardwert ist `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `microseconds`, `microsecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte, wobei bei Bedarf Standardwerte eingesetzt werden. Die gültigen Werte und Standardwerte für die einzelnen Eigenschaften finden Sie beim Argument [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) des Konstruktors.
- `fractionalDigits` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Die Eigenschaft ist nur vorhanden, wenn sie in `options` angegeben wurde. Ihr Wert ist eine ganze Zahl von 0 bis einschließlich 9.

## Beispiele

### Verwendung der Methode resolvedOptions

```js
const duration = new Intl.DurationFormat("en");
const usedOptions = duration.resolvedOptions();

usedOptions.locale; // "en"
usedOptions.numberingSystem; // "latn"
usedOptions.years; // "short"
usedOptions.yearsDisplay; // "auto"
usedOptions.style; // "short"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
