---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toUTCString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Datum im [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1)-Format darstellt, wobei negative Jahre erlaubt sind. Die Zeitzone ist immer UTC. `toGMTString()` ist ein Alias für diese Methode.

{{InteractiveExample("JavaScript Demo: Date.toUTCString()", "shorter")}}

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

Eine Zeichenkette, die das angegebene Datum unter Verwendung der UTC-Zeitzone darstellt (siehe Beschreibung für das Format). Gibt `"Invalid Date"` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Der von `toUTCString()` zurückgegebene Wert ist eine Zeichenkette in der Form `Www, dd Mmm yyyy HH:mm:ss GMT`, wobei:

| Formatzeichenkette | Beschreibung                                                               |
| ------------------ | -------------------------------------------------------------------------- |
| `Www`              | Wochentag, als drei Buchstaben (z. B. `Sun`, `Mon`)                        |
| `dd`               | Tag des Monats, als zwei Ziffern, mit führender Null, falls erforderlich   |
| `Mmm`              | Monat, als drei Buchstaben (z. B. `Jan`, `Feb`)                            |
| `yyyy`             | Jahr, als vier oder mehr Ziffern, mit führenden Nullen, falls erforderlich |
| `HH`               | Stunde, als zwei Ziffern, mit führender Null, falls erforderlich           |
| `mm`               | Minute, als zwei Ziffern, mit führender Null, falls erforderlich           |
| `ss`               | Sekunden, als zwei Ziffern, mit führender Null, falls erforderlich         |

### Alias-Bildung

Die JavaScript-`Date`-API wurde von Javas `java.util.Date`-Bibliothek inspiriert (während letztere seit Java 1.1 im Jahr 1997 faktisch veraltet wurde). Insbesondere hatte die Java-`Date`-Klasse eine Methode namens `toGMTString` – die schlecht benannt war, da die [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) nicht gleichbedeutend ist mit der [Koordinierten Weltzeit](https://en.wikipedia.org/wiki/Coordinated_Universal_Time), während JavaScript-Daten immer mit UTC-Zeit arbeiten. Aus Gründen der Webkompatibilität bleibt `toGMTString` als Alias für `toUTCString` bestehen, und beide beziehen sich auf dasselbe Funktionsobjekt. Das bedeutet:

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
