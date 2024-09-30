---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die Methode **`getMilliseconds()`** von {{jsxref("Date")}}-Instanzen gibt die Millisekunden für dieses Datum entsprechend der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html", "shorter")}}

## Syntax

```js-nolint
getMilliseconds()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, zwischen 0 und 999, die die Millisekunden für das angegebene Datum entsprechend der Ortszeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getMilliseconds()

Die Variable `milliseconds` hat den Wert `0`, basierend auf dem Wert des {{jsxref("Date")}}-Objekts `xmas95`, das die Millisekunden-Komponente nicht angibt, sodass es standardmäßig auf 0 gesetzt wird.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const milliseconds = xmas95.getMilliseconds();

console.log(milliseconds); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
