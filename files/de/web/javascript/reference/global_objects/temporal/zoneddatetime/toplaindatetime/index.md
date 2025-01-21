---
title: Temporal.ZonedDateTime.prototype.toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDateTime
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toPlainDateTime()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das die Datums- und Zeitteile dieses Datums-Zeitpunkts repräsentiert. Nur die Zeitzoneninformation wird entfernt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in ein `Temporal.PlainDateTime` umgewandelt wurde, ist es nicht mehr auf die Zeitzone bezogen. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht für DST angepasst und können nicht die gleichen Ergebnisse wie äquivalente Operationen mit dem ursprünglichen `Temporal.ZonedDateTime` liefern. Wenn Sie diese Operationen jedoch nicht über einen Zeitzonen-Offset-Übergang hinweg ausführen, ist es unmöglich, den Unterschied zu bemerken. Daher sollten Sie sehr vorsichtig sein, wenn Sie diese Umwandlung durchführen, da nachfolgende Ergebnisse die meiste Zeit korrekt sein können, sich aber nur als falsch herausstellen, wenn Sie über Offset-Übergänge hinweggehen, wie wenn DST beginnt oder endet.

## Syntax

```js-nolint
toPlainDateTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt, das die Datums- und Zeitteile dieses Datums-Zeitpunkts repräsentiert.

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
