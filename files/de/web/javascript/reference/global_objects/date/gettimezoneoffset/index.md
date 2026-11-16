---
title: Date.prototype.getTimezoneOffset()
short-title: getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`getTimezoneOffset()`** von {{jsxref("Date")}}-Instanzen gibt die Differenz in Minuten zwischen diesem Datum in der UTC-Zeitzone und demselben Datum in der lokalen Zeitzone zurück.

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

Eine Zahl, die die Differenz in Minuten zwischen dem Datum in der UTC-Zeitzone und dem Datum in der lokalen Zeitzone angibt. Der Algorithmus zur Bestimmung der lokalen Zeit ist implementierungsabhängig. In Laufzeitumgebungen ohne geeignete Daten darf der Rückgabewert null sein. Ist das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), wird `NaN` zurückgegeben.

## Beschreibung

`date.getTimezoneOffset()` gibt die Differenz in Minuten zwischen `date` in der UTC-Zeitzone und `date` in der lokalen Zeitzone zurück. Die lokale Zeitzone ist die Zeitzone des Hostsystems, auf dem der Browser verwendet wird (wenn der Code im Webbrowser ausgeführt wird), beziehungsweise des Hostsystems der JavaScript-Laufzeitumgebung (beispielsweise einer Node.js-Umgebung), in der der Code ausgeführt wird.

### Negative und positive Werte

Die von `getTimezoneOffset()` zurückgegebene Minutenzahl ist positiv, wenn die lokale Zeitzone hinter UTC liegt, und negativ, wenn sie vor UTC liegt. Für UTC+10 wird beispielsweise `-600` zurückgegeben.

| Aktuelle Zeitzone | Rückgabewert |
| ----------------- | ------------ |
| UTC-8             | 480          |
| UTC               | 0            |
| UTC+3             | -180         |

### Unterschiedliche Ergebnisse in Regionen mit Sommerzeit (DST)

In einer Region, die jährlich zwischen Sommerzeit (DST) und Normalzeit wechselt, kann die von `getTimezoneOffset()` zurückgegebene Minutenzahl je nach Wert von `date` unterschiedlich sein.

> [!NOTE]
> Das Verhalten von `getTimezoneOffset()` hängt niemals davon ab, wann der Code ausgeführt wird – bei Ausführung in derselben Region ist es stets konsistent. Nur der Wert von `date` beeinflusst das Ergebnis.

> [!NOTE]
> [Viele Länder haben damit experimentiert, die Uhrzeit nicht zweimal im Jahr umzustellen](https://en.wikipedia.org/wiki/Daylight_saving_time_by_country#Past_observance). Dadurch blieb die Sommerzeit auch im Winter bestehen. Im Vereinigten Königreich beispielsweise galt die Sommerzeit vom 18. Februar 1968 um 2:00 Uhr bis zum 31. Oktober 1971 um 3:00 Uhr; die Uhren wurden im Winter also nicht zurückgestellt.

In den meisten Implementierungen wird die [IANA-Zeitzonendatenbank](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) verwendet, um den Zeitunterschied zur lokalen Zeitzone zum Zeitpunkt von `date` genau zu bestimmen. Sind diese Informationen nicht verfügbar, kann eine Implementierung null zurückgeben.

## Beispiele

### getTimezoneOffset() verwenden

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

In Regionen mit Sommerzeit kann sich der Rückgabewert je nach Jahreszeit, in die `date` fällt, ändern. Im Folgenden sehen Sie die Ausgabe einer Laufzeitumgebung in New York, wo die Zeitzone UTC-05:00 ist.

```js
const nyOffsetWinter = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetSummer = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() und historische Daten

Aus historischen Gründen kann sich die Zeitzone einer Region auch unabhängig von der Sommerzeit immer wieder ändern. Im Folgenden sehen Sie beispielsweise die Ausgabe einer Laufzeitumgebung in Shanghai, wo die Zeitzone UTC+08:00 ist.

```js
const shModernOffset = new Date("2022-01-27").getTimezoneOffset(); // -480
const shHistoricalOffset = new Date("1943-01-27").getTimezoneOffset(); // -540
```

Der Grund dafür ist, dass Shanghais Zeitzone während des [Zweiten Japanisch-Chinesischen Kriegs](https://en.wikipedia.org/wiki/Second_Sino-Japanese_War), als die Stadt unter japanischer Kontrolle stand, auf UTC+09:00 umgestellt wurde, um sie an die Zeitzone Japans anzugleichen. Dies entsprach praktisch einer ganzjährigen Sommerzeit und wurde in der IANA-Datenbank erfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date")}}
