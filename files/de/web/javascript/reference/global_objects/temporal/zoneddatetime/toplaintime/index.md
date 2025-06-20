---
title: Temporal.ZonedDateTime.prototype.toPlainTime()
short-title: toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainTime
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainTime()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieses Datum-Zeit-Wertes darstellt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht an DST angepasst und können möglicherweise nicht die gleichen Ergebnisse liefern wie äquivalente Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Wenn Sie jedoch diese Operationen nicht über einen Zeitzonenoffset-Übergang hinweg durchführen, ist es unmöglich, den Unterschied zu bemerken. Daher sollten Sie bei dieser Umwandlung sehr vorsichtig sein, da nachfolgende Ergebnisse meist korrekt sein können, aber nur dann inkorrekt erscheinen, wenn man über Offset-Übergänge wie den Beginn oder das Ende der Sommerzeit hinweggeht.

## Syntax

```js-nolint
toPlainTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainTime")}}-Objekt, das den Zeitanteil dieses Datum-Zeit-Wertes darstellt.

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
