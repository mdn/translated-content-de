---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{JSRef}}

Die **`toUTCString()`** Methode von {{jsxref("Date")}} Instanzen gibt einen String zurück, der dieses Datum im [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) Format darstellt, wobei negative Jahre erlaubt sind. Die Zeitzone ist immer UTC. `toGMTString()` ist ein Alias für diese Methode.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html", "shorter")}}

## Syntax

```js-nolint
toUTCString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum in der UTC-Zeitzone darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der von `toUTCString()` zurückgegebene Wert ist ein String in der Form `Www, dd Mmm yyyy HH:mm:ss GMT`, wobei:

| Format-String | Beschreibung                                                |
| ------------- | ------------------------------------------------------------ |
| `Www`         | Wochentag, als drei Buchstaben (z.B. `Sun`, `Mon`)           |
| `dd`          | Tag des Monats, als zwei Ziffern mit führender Null falls erforderlich |
| `Mmm`         | Monat, als drei Buchstaben (z.B. `Jan`, `Feb`)               |
| `yyyy`        | Jahr, als vier oder mehr Ziffern mit führenden Nullen falls erforderlich |
| `HH`          | Stunde, als zwei Ziffern mit führender Null falls erforderlich |
| `mm`          | Minute, als zwei Ziffern mit führender Null falls erforderlich |
| `ss`          | Sekunden, als zwei Ziffern mit führender Null falls erforderlich |

### Aliasing

Die `Date` API von JavaScript wurde von der `java.util.Date` Bibliothek von Java inspiriert (während letztere seit Java 1.1 im Jahr 1997 de facto veraltet war). Insbesondere hatte die Java `Date` Klasse eine Methode namens `toGMTString` — die schlecht benannt war, da die [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) nicht gleich der [koordinierten Weltzeit (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) ist, während JavaScript-Daten immer nach UTC-Zeit arbeiten. Aus Gründen der Webkompatibilität bleibt `toGMTString` als Alias für `toUTCString` bestehen, und sie beziehen sich auf dasselbe Funktionsobjekt. Das bedeutet:

```js
Date.prototype.toGMTString.name === "toUTCString";
```

## Beispiele

### Verwendung von toUTCString()

```js
const d = new Date(0);
console.log(d.toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
