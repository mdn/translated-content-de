---
title: Temporal.ZonedDateTime.prototype.toPlainTime()
short-title: toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toPlainTime()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieses Datum-Uhrzeit-Werts darstellt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht für Sommerzeit (DST) angepasst und könnten nicht dieselben Ergebnisse liefern wie gleichwertige Operationen mit dem originalen `Temporal.ZonedDateTime`. Es sei denn, Sie führen diese Operationen über einen Zeitzonenoffset-Übergang aus; es ist unmöglich, den Unterschied zu bemerken. Seien Sie daher sehr vorsichtig bei dieser Umwandlung, da nachfolgende Ergebnisse die meiste Zeit korrekt sein können, aber nur dann falsch werden, wenn ein Offset-Übergang wie der Beginn oder das Ende der Sommerzeit stattfindet.

## Syntax

```js-nolint
toPlainTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainTime")}}-Objekt, das den Zeitanteil dieses Datum-Uhrzeit-Werts darstellt.

## Beispiele

### Verwendung von toPlainTime()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainTime = zdt.toPlainTime();
console.log(plainTime.toString()); // 12:34:56.987654321
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
