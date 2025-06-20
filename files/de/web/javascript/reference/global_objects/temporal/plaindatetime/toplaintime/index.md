---
title: Temporal.PlainDateTime.prototype.toPlainTime()
short-title: toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainTime
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainTime()`**-Methode von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitteil (Stunden-, Minuten-, Sekunden- und Subsekundenkomponenten) dieses Datums-Zeitwertes darstellt.

## Syntax

```js-nolint
toPlainTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das den Zeitteil (Stunden-, Minuten-, Sekunden- und Subsekundenkomponenten) dieses Datums-Zeitwertes darstellt.

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
