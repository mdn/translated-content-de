---
title: Intl.DurationFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.DurationFormat")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die Optionen widerspiegeln, die während der Initialisierung dieses `DurationFormat`-Objekts berechnet wurden.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Optionen widerspiegeln, die während der Initialisierung dieses `DurationFormat`-Objekts berechnet wurden. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgeführt sind:

- `locale`
  - : Das {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel kann in der Ausgabe enthalten sein, falls angefordert.
- `numberingSystem`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, wobei Standardwerte bei Bedarf aufgefüllt werden. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Sprache. Der Standard ist sprachabhängig.
- `style`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, wobei Standardwerte bei Bedarf aufgefüllt werden. Es ist entweder `"long"`, `"short"`, `"narrow"` oder `"digital"`. Der Standard ist `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : Die für diese Eigenschaften im `options`-Argument bereitgestellten Werte, wobei Standardwerte bei Bedarf aufgefüllt werden. Für die gültigen Werte und Standardwerte für jede Eigenschaft siehe das [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Argument des Konstruktors.
- `fractionalDigits` {{optional_inline}}
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert. Es ist nur vorhanden, wenn es in `options` angegeben wird. Es ist eine ganze Zahl von 0 bis einschließlich 9.

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
