---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
l10n:
  sourceCommit: bcad8171fa4acb38d2b9069fdff134da1d36c7ee
---

{{JSRef}}

Die **`getTimezoneOffset()`** Methode von {{jsxref("Date")}} Instanzen gibt den Unterschied in Minuten zwischen diesem Datum, berechnet in der UTC-Zeitzone, und demselben Datum, berechnet in der lokalen Zeitzone, zurück.

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## Syntax

```js-nolint
getTimezoneOffset()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den Unterschied in Minuten zwischen dem Datum, berechnet in der UTC-Zeitzone, und dem in der lokalen Zeitzone, darstellt. Der tatsächliche Algorithmus für die lokale Zeit ist implementierungsabhängig, und der Rückgabewert kann in Ausführungsumgebungen ohne entsprechende Daten null sein. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`date.getTimezoneOffset()` gibt den Unterschied in Minuten zwischen `date`, berechnet in der UTC-Zeitzone, und in der lokalen Zeitzone — das ist die Zeitzone des Hostsystems, in dem der Browser verwendet wird (wenn der Code aus dem Web in einem Browser ausgeführt wird), oder anderweitig des Hostsystems jeder JavaScript-Ausführungsumgebung (zum Beispiel eine Node.js-Umgebung), in der der Code ausgeführt wird, zurück.

### Negative und positive Werte

Die Anzahl der Minuten, die von `getTimezoneOffset()` zurückgegeben wird, ist positiv, wenn die lokale Zeitzone hinter UTC liegt, und negativ, wenn die lokale Zeitzone vor UTC liegt. Zum Beispiel wird für UTC+10 `-600` zurückgegeben.

| Aktuelle Zeitzone | Rückgabewert |
| ----------------- | ------------ |
| UTC-8             | 480          |
| UTC               | 0            |
| UTC+3             | -180         |

### Variierende Ergebnisse in Regionen mit Sommerzeit (DST)

In einer Region, die jährlich zwischen Sommerzeit (DST) hin und her wechselt, kann sich die Anzahl der Minuten, die durch Aufrufen von `getTimezoneOffset()` zurückgegeben wird, ändern, wenn sich `date` ändert.

> [!NOTE]
> Das Verhalten von `getTimezoneOffset()` wird niemals je nach der Zeit, zu der der Code ausgeführt wird, unterschiedlich sein — sein Verhalten ist immer konsistent, wenn es in derselben Region ausgeführt wird. Nur der Wert von `date` beeinflusst das Ergebnis.

> [!NOTE]
> [Viele Länder haben damit experimentiert, die Zeit nicht zweimal im Jahr zu ändern](https://en.wikipedia.org/wiki/Daylight_saving_time_by_country#Past_observance), was bedeutet, dass die Sommerzeit auch im Winter fortgesetzt wurde. Zum Beispiel dauerte die Sommerzeit im Vereinigten Königreich von 2:00 Uhr am 18. Februar 1968 bis 3:00 Uhr am 31. Oktober 1971, daher wurden die Uhren im Winter nicht zurückgestellt.

In den meisten Implementierungen wird die [IANA-Zeitzonendatenbank](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) verwendet, um die Abweichung der lokalen Zeitzone zum Zeitpunkt des `date` genau zu bestimmen. Wenn solche Informationen jedoch nicht verfügbar sind, kann eine Implementierung null zurückgeben.

## Beispiele

### Verwendung von getTimezoneOffset()

```js
// Erstellen Sie eine Date-Instanz für die aktuelle Zeit
const currentLocalDate = new Date();
// Erstellen Sie eine Date-Instanz für 03:24 GMT-0200 am 1. Mai 2016
const laborDay2016at0324GMTminus2 = new Date("2016-05-01T03:24:00-02:00");
currentLocalDate.getTimezoneOffset() ===
  laborDay2016at0324GMTminus2.getTimezoneOffset();
// immer wahr in jeder Zeitzone, die nicht jährlich in und aus der Sommerzeit wechselt
// manchmal falsch in jeder Zeitzone, die jährlich in und aus der Sommerzeit wechselt
```

### getTimezoneOffset() und Sommerzeit

In Regionen, die Sommerzeit verwenden, kann sich der Rückgabewert je nach Jahreszeit von `date` ändern. Unten ist die Ausgabe in einer Laufzeit in New York, wo die Zeitzone UTC-05:00 ist.

```js
const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() und historische Daten

Aus historischen Gründen kann sich die Zeitzone einer Region kontinuierlich ändern, selbst ohne Berücksichtigung der Sommerzeit. Zum Beispiel ist unten die Ausgabe in einer Laufzeit in Shanghai, wo die Zeitzone UTC+08:00 ist.

```js
const shModernOffset = new Date("2022-01-27").getTimezoneOffset(); // -480
const shHistoricalOffset = new Date("1943-01-27").getTimezoneOffset(); // -540
```

Dies liegt daran, dass während des [Sino-Japanischen Krieges](https://en.wikipedia.org/wiki/Second_Sino-Japanese_War), als Shanghai unter japanischer Kontrolle war, die Zeitzone auf UTC+09:00 geändert wurde, um sie an die von Japan anzupassen (in der Praxis war es eine "ganzjährige Sommerzeit"), und dies wurde in der IANA-Datenbank aufgezeichnet.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date")}}
