---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`getSeconds()`** Methode von {{jsxref("Date")}} Instanzen gibt die Sekunden für dieses Datum entsprechend der Ortszeit zurück.

{{EmbedInteractiveExample("pages/js/date-getseconds.html", "shorter")}}

## Syntax

```js-nolint
getSeconds()
```

### Parameter

Keine.

### Rückgabewert

Eine Ganzzahl zwischen 0 und 59, die die Sekunden für das angegebene Datum entsprechend der Ortszeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getSeconds()

Die Variable `seconds` hat den Wert `30`, basierend auf dem Wert des {{jsxref("Date")}} Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
