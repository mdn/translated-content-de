---
title: Temporal.ZonedDateTime.prototype.startOfDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`startOfDay()`** Methode von Instanzen des Objekts {{jsxref("Temporal.ZonedDateTime")}} gibt ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Uhrzeit von `00:00:00`, kann jedoch unterschiedlich sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert. In diesem Fall wird die erste existierende Uhrzeit zurückgegeben.

Es ist gleichbedeutend mit einem Aufruf von {{jsxref("Temporal/ZonedDateTime/withPlainTime", "withPlainTime()")}} ohne Argumente.

## Syntax

```js-nolint
startOfDay()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt mit dem Moment `t`, sodass:

- Das Datum bei `t` sich von dem Datum eine Nanosekunde vor `t` unterscheidet.
- Das Datum bei `t` dasselbe ist wie das Datum von `this`.

## Beispiele

### Verwendung von startOfDay()

```js
// In the US, DST transitions happen at 2am, so the midnight exists
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T12:00:00-04:00[America/New_York]",
);
console.log(dt.startOfDay().toString()); // "2024-03-10T00:00:00-05:00[America/New_York]"

// In Brazil, DST transitions happened at midnight, so the midnight didn't exist
const dt2 = Temporal.ZonedDateTime.from(
  "2015-10-18T12:00-02:00[America/Sao_Paulo]",
);
console.log(dt2.startOfDay().toString()); // "2015-10-18T01:00:00-02:00[America/Sao_Paulo]"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal.ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal.ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal.ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
- {{jsxref("Temporal.ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
- {{jsxref("Temporal.ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
- {{jsxref("Temporal.ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
