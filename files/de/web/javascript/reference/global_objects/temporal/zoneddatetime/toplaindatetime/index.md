---
title: Temporal.ZonedDateTime.prototype.toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDateTime
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainDateTime()`**-Methode von Instanzen von {{jsxref("Temporal.ZonedDateTime")}} gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das die Datums- und Uhrzeitanteile dieses Date-Times darstellt. Nur die Zeitzoneninformation wird entfernt.

> [!WARNING]
> Nachdem ein `Temporal.ZonedDateTime` in `Temporal.PlainDateTime` umgewandelt wurde, ist es nicht mehr zeitzonenbewusst. Nachfolgende Operationen wie Arithmetik oder `with()`-Operationen werden nicht für die Sommerzeit (DST) angepasst und könnten nicht die gleichen Ergebnisse liefern wie gleichwertige Operationen mit dem ursprünglichen `Temporal.ZonedDateTime`. Es sei denn, Sie führen diese Operationen über einen Zeitzonenoffset-Übergang hinweg durch, dann wird der Unterschied erkennbar. Seien Sie daher sehr vorsichtig bei dieser Umwandlung, da nachfolgende Ergebnisse die meiste Zeit korrekt sein können, aber nur dann falsch ausfallen, wenn Sie über Offset-Übergänge wie den Beginn oder das Ende der Sommerzeit hinausgehen.

## Syntax

```js-nolint
toPlainDateTime()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt, das die Datums- und Uhrzeitanteile dieses Date-Times darstellt.

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
