---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die Methode **`getMinutes()`** von {{jsxref("Date")}} Instanzen gibt die Minuten dieses Datums gemäß der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-getminutes.html", "shorter")}}

## Syntax

```js-nolint
getMinutes()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl zwischen 0 und 59, die die Minuten des angegebenen Datums gemäß der Ortszeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getMinutes()

Die Variable `minutes` hat den Wert `15`, basierend auf dem Wert des {{jsxref("Date")}} Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
