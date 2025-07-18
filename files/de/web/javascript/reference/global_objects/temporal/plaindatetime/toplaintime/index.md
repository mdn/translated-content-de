---
title: Temporal.PlainDateTime.prototype.toPlainTime()
short-title: toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toPlainTime()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainTime")}} Objekt zurück, das den Zeitanteil (Stunde, Minute, Sekunde und Untersekundenkomponenten) dieser Datum-Uhrzeit darstellt.

## Syntax

```js-nolint
toPlainTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.PlainTime` Objekt, das den Zeitanteil (Stunde, Minute, Sekunde und Untersekundenkomponenten) dieser Datum-Uhrzeit darstellt.

## Beispiele

### Verwendung von toPlainTime()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const time = dt.toPlainTime();
console.log(time.toString()); // '12:34:56'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
