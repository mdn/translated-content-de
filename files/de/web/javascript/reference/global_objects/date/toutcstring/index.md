---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`toUTCString()`** von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Datum im [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1)-Format repräsentiert, wobei negative Jahre erlaubt sind. Die Zeitzone ist immer UTC. `toGMTString()` ist ein Alias für diese Methode.

{{InteractiveExample("JavaScript Demo: Date.prototype.toUTCString()", "shorter")}}

```js interactive-example
const event = new Date("14 Jun 2017 00:00:00 PDT");

console.log(event.toUTCString());
// Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"
```

## Syntax

```js-nolint
toUTCString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die das gegebene Datum in der UTC-Zeitzone darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der von `toUTCString()` zurückgegebene Wert ist eine Zeichenkette in der Form `Www, dd Mmm yyyy HH:mm:ss GMT`, wobei:

| Format Zeichenkette | Beschreibung                                                             |
| ------------------- | ------------------------------------------------------------------------ |
| `Www`               | Wochentag, als drei Buchstaben (z.B. `Sun`, `Mon`)                       |
| `dd`                | Tag des Monats, als zwei Ziffern mit führender Null, wenn erforderlich   |
| `Mmm`               | Monat, als drei Buchstaben (z.B. `Jan`, `Feb`)                           |
| `yyyy`              | Jahr, als vier oder mehr Ziffern mit führenden Nullen, wenn erforderlich |
| `HH`                | Stunde, als zwei Ziffern mit führender Null, wenn erforderlich           |
| `mm`                | Minute, als zwei Ziffern mit führender Null, wenn erforderlich           |
| `ss`                | Sekunden, als zwei Ziffern mit führender Null, wenn erforderlich         |

### Aliasing

Die `Date`-API von JavaScript wurde von der `java.util.Date`-Bibliothek von Java inspiriert (während letztere seit Java 1.1 im Jahr 1997 de facto veraltet ist). Insbesondere hatte die Java-`Date`-Klasse eine Methode namens `toGMTString`, die schlecht benannt war, da die [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) nicht gleich der [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) ist, während JavaScript-Daten immer nach der UTC-Zeit arbeiten. Aus Gründen der Webkompatibilität bleibt `toGMTString` als Alias für `toUTCString` bestehen, und sie beziehen sich auf dasselbe Funktionsobjekt. Das bedeutet:

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
