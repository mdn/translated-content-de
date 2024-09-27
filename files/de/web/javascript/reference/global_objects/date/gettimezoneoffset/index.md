---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
l10n:
  sourceCommit: bcad8171fa4acb38d2b9069fdff134da1d36c7ee
---

{{JSRef}}

Die Methode **`getTimezoneOffset()`** von {{jsxref("Date")}}-Instanzen gibt die Differenz in Minuten zwischen diesem Datum, ausgewertet in der UTC-Zeitzone, und demselben Datum, ausgewertet in der lokalen Zeitzone, zurück.

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## Syntax

```js-nolint
getTimezoneOffset()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die die Differenz in Minuten zwischen dem in der UTC-Zeitzone und dem in der lokalen Zeitzone ausgewerteten Datum darstellt. Der tatsächliche lokale Zeit-Algorithmus ist implementierungsspezifisch, und der Rückgabewert darf in Laufzeiten ohne geeignete Daten null sein. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`date.getTimezoneOffset()` gibt die Differenz in Minuten zwischen `date`, ausgewertet in der UTC-Zeitzone, und ausgewertet in der lokalen Zeitzone zurück — d.h. der Zeitzone des Host-Systems, in dem der Browser verwendet wird (wenn der Code im Web in einem Browser ausgeführt wird), oder anderweitig des Host-Systems der JavaScript-Laufzeit (zum Beispiel einer Node.js-Umgebung), in der der Code ausgeführt wird.

### Negative und positive Werte

Die von `getTimezoneOffset()` zurückgegebene Anzahl von Minuten ist positiv, wenn die lokale Zeitzone hinter UTC liegt, und negativ, wenn die lokale Zeitzone vor UTC liegt. Zum Beispiel wird für UTC+10 `-600` zurückgegeben.

| Aktuelle Zeitzone | Rückgabewert |
| ----------------- | ------------ |
| UTC-8             | 480          |
| UTC               | 0            |
| UTC+3             | -180         |

### Unterschiedliche Ergebnisse in Regionen mit Sommerzeit (DST)

In einer Region, die jährlich zur Sommerzeit (DST) wechselt, kann die Anzahl der Minuten, die durch Aufrufen von `getTimezoneOffset()` zurückgegeben wird, bei variierendem `date` uneinheitlich sein.

> **Note:** Die Funktionsweise von `getTimezoneOffset()` wird niemals je nach Zeitpunkt der Codeausführung unterschiedlich sein — sie ist immer konsistent, wenn sie in derselben Region ausgeführt wird. Nur der Wert von `date` beeinflusst das Ergebnis.

> **Note:** [Viele Länder haben damit experimentiert, die Zeit nicht zweimal jährlich umzustellen](https://en.wikipedia.org/wiki/Daylight_saving_time_by_country#Past_observance), und dies bedeutete, dass die DST auch im Winter fortgesetzt wurde. Zum Beispiel dauerte in Großbritannien die DST vom 18. Februar 1968, 2:00 Uhr bis zum 31. Oktober 1971, 3:00 Uhr, daher wurden die Uhren im Winter nicht zurückgestellt.

In den meisten Implementierungen wird die [IANA-Zeitzonendatenbank](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) verwendet, um den Offset der lokalen Zeitzone zum Zeitpunkt des `date` genau zu bestimmen. Ist dieser Wert nicht verfügbar, kann eine Implementierung null zurückgeben.

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

In Regionen, die DST verwenden, kann sich der Rückgabewert je nach Jahreszeit des `date` ändern. Nachfolgend ist die Ausgabe in einer Laufzeitumgebung in New York, wo die Zeitzone UTC-05:00 ist.

```js
const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() und historische Daten

Aus historischen Gründen kann sich die Zeitzone einer Region ständig ändern, selbst abgesehen von DST. Zum Beispiel ist nachfolgend die Ausgabe in einer Laufzeitumgebung in Shanghai, wo die Zeitzone UTC+08:00 ist.

```js
const shModernOffset = new Date("2022-01-27").getTimezoneOffset(); // -480
const shHistoricalOffset = new Date("1943-01-27").getTimezoneOffset(); // -540
```

Dies liegt daran, dass während des [Sino-Japanischen Krieges](https://en.wikipedia.org/wiki/Second_Sino-Japanese_War), als Shanghai unter japanischer Kontrolle war, die Zeitzone auf UTC+09:00 geändert wurde, um sie an die japanische anzupassen (in der Praxis war es eine "ganzjährige DST") und dies wurde in der IANA-Datenbank aufgezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date")}}
