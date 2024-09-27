---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`toISOString()`** Methode von {{jsxref("Date")}} Instanzen gibt einen String zurück, der dieses Datum im [Datum-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) darstellt, einem _vereinfachten_ Format basierend auf [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), welches immer 24 oder 27 Zeichen lang ist (`YYYY-MM-DDTHH:mm:ss.sssZ` bzw. `±YYYYYY-MM-DDTHH:mm:ss.sssZ`). Die Zeitzone ist immer UTC, wie durch das Suffix `Z` angezeigt.

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Syntax

```js-nolint
toISOString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das gegebene Datum im [Datum-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß der universellen Zeit darstellt. Es ist dasselbe Format, das erforderlich ist, um von {{jsxref("Date.parse()")}} erkannt zu werden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist oder einem Jahr entspricht, das im Datum-String-Format nicht dargestellt werden kann.

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
