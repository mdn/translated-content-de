---
title: Date.prototype.toISOString()
short-title: toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toISOString()`** Methode von {{jsxref("Date")}} Instanzen gibt einen String zurück, der dieses Datum im [Datum-Uhrzeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) darstellt, einem _vereinfachten_ Format basierend auf [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), das immer 24 oder 27 Zeichen lang ist (`YYYY-MM-DDTHH:mm:ss.sssZ` oder `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, jeweils). Die Zeitzone ist immer UTC, wie durch den Suffix `Z` angegeben.

{{InteractiveExample("JavaScript Demo: Date.prototype.toISOString()")}}

```js interactive-example
const event = new Date("05 October 2011 14:48 UTC");
console.log(event.toString());
// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toISOString());
// Expected output: "2011-10-05T14:48:00.000Z"
```

## Syntax

```js-nolint
toISOString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das gegebene Datum im [Datum-Uhrzeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß Weltzeit darstellt. Es ist das gleiche Format, das erforderlich ist, um von {{jsxref("Date.parse()")}} erkannt zu werden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist oder wenn es einem Jahr entspricht, das im Datumsstring-Format nicht dargestellt werden kann.

## Beispiele

### Verwendung von toISOString()

```js
const d = new Date(0);

console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
