---
title: Temporal.PlainDate.prototype.toPlainDateTime()
short-title: toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainDateTime
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`toPlainDateTime()`** von Instanzen des {{jsxref("Temporal.PlainDate")}} gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das dieses Datum und eine angegebene Uhrzeit im selben Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainDateTime()
toPlainDateTime(plainTime)
```

### Parameter

- `plainTime` {{optional_inline}}
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.PlainTime")}}, die die Zeitkomponente des resultierenden `PlainDateTime` darstellt. Es wird in ein `Temporal.PlainTime` Objekt konvertiert, wobei derselbe Algorithmus wie in {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} verwendet wird. Standardmäßig ist dies `"00:00:00"`.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das das durch dieses Datum und `plainTime` angegebene Datum und die Uhrzeit darstellt, interpretiert im Kalendersystem dieses Datums.

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
