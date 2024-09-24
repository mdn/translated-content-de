---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`toISOString()`** Methode von {{jsxref("Date")}} Instanzen gibt eine Zeichenkette zurück, die dieses Datum im [Datums-Zeit-Zeichenkettenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) darstellt. Dies ist ein _vereinfachtes_ Format basierend auf [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), das immer 24 oder 27 Zeichen lang ist (`YYYY-MM-DDTHH:mm:ss.sssZ` oder `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, entsprechend). Die Zeitzone ist immer UTC, was durch das Suffix `Z` angezeigt wird.

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Syntax

```js-nolint
toISOString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die das gegebene Datum im [Datums-Zeit-Zeichenkettenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß der Weltzeit darstellt. Es ist dasselbe Format, das von {{jsxref("Date.parse()")}} erkannt werden muss.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist oder wenn es einem Jahr entspricht, das im Datums-Zeichenkettenformat nicht dargestellt werden kann.

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
