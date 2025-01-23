---
title: Temporal.ZonedDateTime.prototype.toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainTime
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainTime()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainTime")}} Objekt zurück, das den Zeitanteil dieses Datums-Zeit Objekts darstellt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` zu `Temporal.PlainTime` konvertiert wurde, ist es nicht mehr auf die Zeitzone bezogen. Nachfolgende Operationen wie Arithmetik oder `with()` Operationen werden nicht für Sommerzeit (DST) angepasst und könnten nicht die gleichen Ergebnisse liefern wie äquivalente Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Es ist jedoch unmöglich, den Unterschied zu bemerken, es sei denn, Sie führen diese Operationen über eine Zeitzonen-Offset-Übergang durch. Seien Sie daher sehr vorsichtig bei dieser Umwandlung, da nachfolgende Ergebnisse die meiste Zeit korrekt sein könnten, jedoch nur dann falsch sein könnten, wenn Sie über Offset-Übergänge wie den Beginn oder das Ende der Sommerzeit gehen.

## Syntax

```js-nolint
toPlainTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainTime")}} Objekt, das den Zeitanteil dieses Datums-Zeit Objekts darstellt.

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
