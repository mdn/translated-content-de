---
title: Temporal.PlainDateTime.prototype.toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainDate
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainDate()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das den Datumsanteil (Jahr, Monat, Tag) dieses Datums-Zeitraums im selben Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainDate()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das den Datumsanteil (Jahr, Monat, Tag) dieses Datums-Zeitraums im selben Kalendersystem darstellt.

## Beispiele

### Verwendung von toPlainDate()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const date = dt.toPlainDate();
console.log(date.toString()); // '2021-07-01'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
