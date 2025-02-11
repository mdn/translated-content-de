---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getTimezoneOffset()`** von {{jsxref("Date")}}-Instanzen gibt den Unterschied in Minuten zwischen diesem Datum, wie es in der UTC-Zeitzone ausgewertet wird, und dem gleichen Datum, wie es in der lokalen Zeitzone ausgewertet wird, zurück.

{{InteractiveExample("JavaScript Demo: Date.getTimezoneOffset()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+07:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-02:00");

console.log(date1.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Expected output: true
```

## Syntax

```js-nolint
getTimezoneOffset()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den Unterschied in Minuten zwischen dem Datum, wie es in der UTC-Zeitzone ausgewertet wird, und wie es in der lokalen Zeitzone ausgewertet wird, darstellt. Der tatsächliche lokale Zeit-Algorithmus ist implementierungsabhängig, und der Rückgabewert kann in Laufzeitumgebungen ohne entsprechende Informationen null sein. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`date.getTimezoneOffset()` gibt den Unterschied in Minuten zwischen `date`, wie es in der UTC-Zeitzone ausgewertet wird, und wie es in der lokalen Zeitzone ausgewertet wird, zurück — das heißt, der Zeitzone des Hostsystems, in dem der Browser verwendet wird (falls der Code im Web ausgeführt wird), oder anderweitig des Hostsystems der jeweiligen JavaScript-Laufzeitumgebung (zum Beispiel einer Node.js-Umgebung), in der der Code ausgeführt wird.

### Negative und positive Werte

Die von `getTimezoneOffset()` zurückgegebene Minutenanzahl ist positiv, wenn die lokale Zeitzone hinter UTC liegt, und negativ, wenn die lokale Zeitzone vor UTC liegt. Zum Beispiel wird für UTC+10 `-600` zurückgegeben.

| Aktuelle Zeitzone | Rückgabewert |
| ----------------- | ------------ |
| UTC-8             | 480          |
| UTC               | 0            |
| UTC+3             | -180         |

### Unterschiedliche Ergebnisse in Regionen mit Sommerzeit (DST)

In einer Region, die jährlich zwischen Sommerzeit (DST) und Normalzeit wechselt, kann die Anzahl der Minuten, die durch Aufruf von `getTimezoneOffset()` zurückgegeben wird, nicht einheitlich sein, wenn sich `date` ändert.

> **Note:** Das Verhalten von `getTimezoneOffset()` ändert sich nie in Abhängigkeit von der Zeit, zu der der Code ausgeführt wird — sein Verhalten ist immer konsistent, wenn es in der gleichen Region ausgeführt wird. Nur der Wert von `date` beeinflusst das Ergebnis.

> **Note:** [Viele Länder haben experimentiert, die Zeitumstellung zweimal im Jahr abzuschaffen](https://en.wikipedia.org/wiki/Daylight_saving_time_by_country#Past_observance). Das bedeutete, dass die Sommerzeit in einigen Fällen auch im Winter fortgeführt wurde. Beispielsweise dauerte in Großbritannien die Sommerzeit von 2:00 Uhr am 18. Februar 1968 bis 3:00 Uhr am 31. Oktober 1971, sodass die Uhren im Winter nicht zurückgestellt wurden.

In den meisten Implementierungen wird die [IANA-Zeitzonendatenbank](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) verwendet, um den Offset der lokalen Zeitzone zum Zeitpunkt des `date` präzise zu bestimmen. Falls solche Informationen nicht verfügbar sind, kann eine Implementierung null zurückgeben.

## Beispiele

### Verwendung von getTimezoneOffset()

```js
// Create a Date instance for the current time
const currentLocalDate = new Date();
// Create a Date instance for 03:24 GMT-0200 on May 1st in 2016
const laborDay2016at0324GMTminus2 = new Date("2016-05-01T03:24:00-02:00");
currentLocalDate.getTimezoneOffset() ===
  laborDay2016at0324GMTminus2.getTimezoneOffset();
// true, always, in any timezone that doesn't annually shift in and out of DST
// false, sometimes, in any timezone that annually shifts in and out of DST
```

### getTimezoneOffset() und DST

In Regionen, die DST verwenden, kann der Rückgabewert sich abhängig von der Jahreszeit, in der sich `date` befindet, ändern. Unten ist die Ausgabe in einer Laufzeitumgebung in New York, wo die Zeitzone UTC-05:00 ist.

```js
const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() und historische Daten

Aus historischen Gründen kann sich die Zeitzone einer Region ständig ändern, selbst abgesehen von der Sommerzeit. Unten ist die Ausgabe in einer Laufzeitumgebung in Shanghai, wo die Zeitzone UTC+08:00 ist.

```js
const shModernOffset = new Date("2022-01-27").getTimezoneOffset(); // -480
const shHistoricalOffset = new Date("1943-01-27").getTimezoneOffset(); // -540
```

Dies liegt daran, dass während des [Sino-Japanischen Kriegs](https://en.wikipedia.org/wiki/Second_Sino-Japanese_War), als Shanghai unter japanischer Kontrolle stand, die Zeitzone auf UTC+09:00 geändert wurde, um sich an die japanische Zeitzone anzupassen (in der Praxis war es eine "ganzjährige Sommerzeit"), und dies wurde in der IANA-Datenbank aufgezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date")}}
