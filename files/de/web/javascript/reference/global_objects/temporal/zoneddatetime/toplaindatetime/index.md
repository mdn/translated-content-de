---
title: Temporal.ZonedDateTime.prototype.toPlainDateTime()
short-title: toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDateTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toPlainDateTime()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das das Datum und die Zeitanteile dieses Datum-Zeitpunkts darstellt. Nur die Zeitzoneninformationen werden entfernt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainDateTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht für Sommerzeitkorrekturen angepasst und könnten nicht die gleichen Ergebnisse liefern wie äquivalente Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Es sei denn, Sie führen diese Operationen über eine Zeitzonenversatzänderung hinweg aus, ist es unmöglich, den Unterschied zu bemerken. Daher sollten Sie bei dieser Umwandlung sehr vorsichtig sein, da nachfolgende Ergebnisse meist korrekt sein können, jedoch nur dann falsch sind, wenn sie über Versatzänderungen hinweg ausgeführt werden, wie wenn die Sommerzeit beginnt oder endet.

## Syntax

```js-nolint
toPlainDateTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt, das die Datum- und Zeitanteile dieses Datum-Zeitpunkts darstellt.

## Beispiele

### Verwendung von toPlainDateTime()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainDateTime = zdt.toPlainDateTime();
console.log(plainDateTime.toString()); // 2021-07-01T12:34:56.987654321
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
