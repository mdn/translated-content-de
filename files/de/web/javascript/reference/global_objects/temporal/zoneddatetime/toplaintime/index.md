---
title: Temporal.ZonedDateTime.prototype.toPlainTime()
short-title: toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toPlainTime()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieses Datums-Zeitpunktes darstellt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht auf die Sommerzeit (DST) abgestimmt und könnten nicht die gleichen Ergebnisse liefern wie entsprechende Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Es sei denn, Sie führen diese Operationen über einen Zeitzonenoffset-Übergang aus, dann ist es unmöglich, den Unterschied zu bemerken. Seien Sie daher sehr vorsichtig bei dieser Umwandlung, da nachfolgende Ergebnisse die meiste Zeit korrekt sein können, aber nur dann inkorrekt, wenn Sie über Offset-Übergänge wechseln, wie wenn die Sommerzeit beginnt oder endet.

## Syntax

```js-nolint
toPlainTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainTime")}}-Objekt, das den Zeitanteil dieses Datums-Zeitpunktes darstellt.

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
