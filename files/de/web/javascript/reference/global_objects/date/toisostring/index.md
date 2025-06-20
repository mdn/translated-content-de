---
title: Date.prototype.toISOString()
short-title: toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toISOString()`** Methode von {{jsxref("Date")}} Instanzen gibt eine Zeichenkette zurück, die dieses Datum im [Datumszeit-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) darstellt. Dieses _vereinfachte_ Format basiert auf [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) und hat immer eine Länge von 24 oder 27 Zeichen (`YYYY-MM-DDTHH:mm:ss.sssZ` bzw. `±YYYYYY-MM-DDTHH:mm:ss.sssZ`). Die Zeitzone ist immer UTC, wie durch das Suffix `Z` angezeigt.

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

Eine Zeichenkette, die das gegebene Datum im [Datumszeit-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß der Weltzeit darstellt. Es ist das gleiche Format, das von {{jsxref("Date.parse()")}} erkannt werden muss.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist oder wenn es einem Jahr entspricht, das im Datumszeitcharakterformat nicht dargestellt werden kann.

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
