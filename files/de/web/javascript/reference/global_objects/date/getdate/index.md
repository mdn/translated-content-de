---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`getDate()`**-Methode von {{jsxref("Date")}} Instanzen gibt den Tag des Monats für dieses Datum gemäß der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-getdate.html", "shorter")}}

## Syntax

```js-nolint
getDate()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl zwischen 1 und 31, die den Tag des Monats für das angegebene Datum gemäß der Ortszeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getDate()

Die Variable `day` hat den Wert `25`, basierend auf dem Wert des {{jsxref("Date")}} Objekt `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const day = xmas95.getDate();

console.log(day); // 25
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
