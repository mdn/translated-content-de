---
title: Temporal.ZonedDateTime.prototype.toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainTime
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toPlainTime()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieses Datums-Zeitpunkts darstellt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht für DST angepasst und könnten nicht die gleichen Ergebnisse liefern wie äquivalente Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Es sei denn, Sie führen diese Operationen über einen Zeitzonenoffset-Übergang hinaus aus, es ist unmöglich, den Unterschied zu bemerken. Seien Sie also sehr vorsichtig bei dieser Umwandlung, da nachfolgende Ergebnisse die meiste Zeit korrekt sein können, aber nur dann falsch sein werden, wenn sie über Offset-Übergänge hinweg ausgeführt werden, wie wenn die Sommerzeit beginnt oder endet.

## Syntax

```js-nolint
toPlainTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainTime")}}-Objekt, das den Zeitanteil dieses Datums-Zeitpunkts darstellt.

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
