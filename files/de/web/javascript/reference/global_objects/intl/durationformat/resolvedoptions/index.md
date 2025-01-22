---
title: Intl.DurationFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.DurationFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DurationFormat`-Objekts berechneten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DurationFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgeführt sind:

- `locale`
  - : Das BCP 47-Sprach-Tag für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Gebietsschema-Verhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu`-Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `numberingSystem`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit standardmäßiger Auffüllung nach Bedarf. Es ist ein unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für dieses Gebietsschema. Die Standardeinstellung ist gebietsschemaabhängig.
- `style`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit standardmäßiger Auffüllung nach Bedarf. Es ist entweder `"long"`, `"short"`, `"narrow"` oder `"digital"`. Die Standardeinstellung ist `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : Die für diese Eigenschaften im `options`-Argument bereitgestellten Werte, mit standardmäßiger Auffüllung nach Bedarf. Für die gültigen Werte und Standardwerte für jede Eigenschaft siehe das [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Argument des Konstruktors.
- `fractionalDigits` {{optional_inline}}
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert. Es ist nur vorhanden, wenn es in `options` angegeben ist. Es ist eine Ganzzahl von 0 bis 9, einschließlich.

## Beispiele

### Verwendung der resolvedOptions-Methode

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
