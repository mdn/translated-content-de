---
title: Temporal.ZonedDateTime.prototype.toPlainDateTime()
short-title: toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toPlainDateTime()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das die Datums- und Zeitanteile dieses Datums-Zeitpunkts darstellt. Nur die Zeitzoneninformationen werden entfernt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainDateTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht für Sommerzeit (DST) angepasst und können möglicherweise nicht die gleichen Ergebnisse liefern wie gleichwertige Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Es sei denn, Sie führen diese Operationen über einen Zeitzonenwechsel durch, wodurch der Unterschied nicht erkennbar ist. Daher sollten Sie bei dieser Umwandlung sehr vorsichtig sein, da die nachfolgenden Ergebnisse meistens korrekt sein können, aber nur bei Überquerung von Offset-Übergängen, wie beim Beginn oder Ende der Sommerzeit, falsch sein könnten.

## Syntax

```js-nolint
toPlainDateTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt, das die Datums- und Zeitanteile dieses Datums-Zeitpunkts darstellt.

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
