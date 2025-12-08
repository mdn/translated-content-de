---
title: Temporal.PlainDate.prototype.toPlainDateTime()
short-title: toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toPlainDateTime()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das dieses Datum und eine angegebene Zeit im selben Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainDateTime()
toPlainDateTime(plainTime)
```

### Parameter

- `plainTime` {{optional_inline}}
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die die Zeitkomponente des resultierenden `PlainDateTime` darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime` Objekt konvertiert. Standardmäßig ist dies `"00:00:00"`.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das das durch dieses Datum und `plainTime` spezifizierte Datum und Zeit darstellt, interpretiert im Kalendersystem dieses Datums.

## Beispiele

### Verwendung von toPlainDateTime()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const dateTime = date.toPlainDateTime("12:34:56");
console.log(dateTime.toString()); // 2021-07-01T12:34:56

const midnight = date.toPlainDateTime();
console.log(midnight.toString()); // 2021-07-01T00:00:00

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
const dateTime2 = date2.toPlainDateTime("12:34:56");
console.log(dateTime2.toString()); // 2021-07-01T12:34:56[u-ca=chinese]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
