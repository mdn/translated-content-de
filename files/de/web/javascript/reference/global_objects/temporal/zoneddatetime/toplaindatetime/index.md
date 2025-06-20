---
title: Temporal.ZonedDateTime.prototype.toPlainDateTime()
short-title: toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDateTime
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainDateTime()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das das Datum und die Uhrzeit dieses Datums-Zeitpunkts repräsentiert. Nur die Zeitzoneninformationen werden entfernt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainDateTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht für die Sommerzeit angepasst und können nicht die gleichen Ergebnisse liefern wie die entsprechenden Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Allerdings ist es unmöglich, den Unterschied zu bemerken, es sei denn, Sie führen diese Operationen über eine Zeitzonen-Offset-Änderung aus. Seien Sie daher sehr vorsichtig bei dieser Umwandlung, da die nachfolgenden Ergebnisse meistens korrekt sein können, aber nur dann falsch werden, wenn Offset-Übergänge wie der Beginn oder das Ende der Sommerzeit überschritten werden.

## Syntax

```js-nolint
toPlainDateTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt, das das Datum und die Uhrzeit dieses Datums-Zeitpunkts repräsentiert.

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
