---
title: Date.prototype.getTimezoneOffset()
short-title: getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getTimezoneOffset()`** Methode von {{jsxref("Date")}} Instanzen gibt die Differenz in Minuten zwischen diesem Datum, ausgewertet in der UTC-Zeitzone, und demselben Datum, ausgewertet in der lokalen Zeitzone, zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getTimezoneOffset()")}}

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

Eine Zahl, die die Differenz in Minuten zwischen dem Datum, ausgewertet in der UTC-Zeitzone, und ausgewertet in der lokalen Zeitzone, repräsentiert. Der tatsächliche lokale Zeit-Algorithmus ist implementationsspezifisch und der Rückgabewert kann in Laufzeiten ohne entsprechende Daten null sein. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`date.getTimezoneOffset()` gibt die Differenz in Minuten zwischen `date`, ausgewertet in der UTC-Zeitzone, und ausgewertet in der lokalen Zeitzone zurück — das heißt, die Zeitzone des Host-Systems, in dem der Browser verwendet wird (wenn der Code im Web in einem Browser ausgeführt wird), oder ansonsten das Host-System, egal in welchem JavaScript-Laufzeitsystem (zum Beispiel eine Node.js-Umgebung) der Code ausgeführt wird.

### Negative und positive Werte

Die Anzahl der Minuten, die von `getTimezoneOffset()` zurückgegeben wird, ist positiv, wenn die lokale Zeitzone hinter UTC liegt, und negativ, wenn die lokale Zeitzone vor UTC liegt. Zum Beispiel wird für UTC+10 `-600` zurückgegeben.

| Aktuelle Zeitzone | Rückgabewert |
| ----------------- | ------------ |
| UTC-8             | 480          |
| UTC               | 0            |
| UTC+3             | -180         |

### Unterschiedliche Ergebnisse in Regionen mit Sommerzeit (DST)

In einer Region, die jährlich zwischen Sommer- und Normalzeit (DST) wechselt, kann die Anzahl der Minuten, die durch Aufrufen von `getTimezoneOffset()` zurückgegeben wird, ungleichmäßig sein, wenn sich `date` ändert.

> **Note:** Das Verhalten von `getTimezoneOffset()` wird niemals auf der Grundlage der Zeit, zu der der Code ausgeführt wird, unterschiedlich sein – sein Verhalten ist immer konsistent, wenn es in derselben Region läuft. Nur der Wert von `date` beeinflusst das Ergebnis.

> **Note:** [Viele Länder haben ausprobiert, die Zeit nicht zweimal im Jahr zu ändern](https://en.wikipedia.org/wiki/Daylight_saving_time_by_country#Past_observance) und dies bedeutete, dass die Sommerzeit auch im Winter fortgesetzt wurde. Zum Beispiel dauerte die Sommerzeit im Vereinigten Königreich vom 18. Februar 1968 um 2:00 Uhr bis zum 31. Oktober 1971 um 3:00 Uhr, daher wurden die Uhren im Winter nicht zurückgestellt.

In den meisten Implementierungen wird die [IANA-Zeitzonendatenbank](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) verwendet, um den Offset der lokalen Zeitzone zum Zeitpunkt des `date` genau zu bestimmen. Ist solche Information jedoch nicht verfügbar, kann eine Implementierung null zurückgeben.

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

### getTimezoneOffset() und Sommerzeit

In Regionen, die DST verwenden, kann sich der Rückgabewert basierend auf der Jahreszeit, in der sich `date` befindet, ändern. Unten ist die Ausgabe in einer Laufzeit in New York, wo die Zeitzone UTC-05:00 ist.

```js
const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() und historische Daten

Aus historischen Gründen kann sich die Zeitzone, in der sich eine Region befindet, ständig ändern, auch wenn DST nicht berücksichtigt wird. Zum Beispiel ist unten die Ausgabe in einer Laufzeit in Shanghai, wo die Zeitzone UTC+08:00 ist.

```js
const shModernOffset = new Date("2022-01-27").getTimezoneOffset(); // -480
const shHistoricalOffset = new Date("1943-01-27").getTimezoneOffset(); // -540
```

Dies liegt daran, dass während des [Sino-Japanischen Kriegs](https://en.wikipedia.org/wiki/Second_Sino-Japanese_War), als Shanghai unter japanischer Kontrolle stand, die Zeitzone auf UTC+09:00 geändert wurde, um sich an Japans Zeiten anzupassen (effektiv war es eine „ganzjährige Sommerzeit“), und dies wurde in der IANA-Datenbank verzeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date")}}
