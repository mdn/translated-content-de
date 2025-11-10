---
title: Date.UTC()
short-title: UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **statische Methode `Date.UTC()`** akzeptiert Parameter, die die Komponenten von Datum und Uhrzeit ähnlich dem {{jsxref("Date")}}-Konstruktor darstellen, behandelt sie jedoch als UTC. Sie gibt die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC zurück.

{{InteractiveExample("JavaScript Demo: Date.UTC()")}}

```js interactive-example
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// Expected output: "Fri, 02 Feb 1996 03:04:05 GMT"

console.log(utcDate2.toUTCString());
// Expected output: "Sun, 31 Dec 1899 00:00:00 GMT"
```

## Syntax

```js-nolint
Date.UTC(year)
Date.UTC(year, monthIndex)
Date.UTC(year, monthIndex, day)
Date.UTC(year, monthIndex, day, hours)
Date.UTC(year, monthIndex, day, hours, minutes)
Date.UTC(year, monthIndex, day, hours, minutes, seconds)
Date.UTC(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

### Parameter

- `year`
  - : Ganzzahl, die das Jahr darstellt. Werte von `0` bis `99` werden den Jahren `1900` bis `1999` zugeordnet. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex` {{optional_inline}}
  - : Ganzzahl, die den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember. Standardmäßig `0`.
- `day` {{optional_inline}}
  - : Ganzzahl, die den Tag des Monats darstellt. Standardmäßig `1`.
- `hours` {{optional_inline}}
  - : Ganzzahl zwischen `0` und `23`, die die Stunde des Tages darstellt. Standardmäßig `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahl, die das Minutensegment einer Uhrzeit darstellt. Standardmäßig `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahl, die das Sekundensegment einer Uhrzeit darstellt. Standardmäßig `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahl, die das Millisekundensegment einer Uhrzeit darstellt. Standardmäßig `0`.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Jahre zwischen `0` und `99` werden in ein Jahr des 20. Jahrhunderts `(1900 + year)` konvertiert. Zum Beispiel wird `95` in das Jahr `1995` konvertiert.

Die Methode `UTC()` unterscheidet sich vom {{jsxref("Date/Date", "Date()")}}-Konstruktor in drei Punkten:

1. `Date.UTC()` verwendet die koordinierte Weltzeit anstelle der lokalen Zeit.
2. `Date.UTC()` gibt einen Zeitwert als Zahl zurück, anstatt ein {{jsxref("Date")}}-Objekt zu erzeugen.
3. Wenn nur eine Zahl übergeben wird, interpretiert `Date.UTC()` sie als Jahr statt als Zeitstempel.

Wenn ein Parameter außerhalb des erwarteten Bereichs liegt, aktualisiert die Methode `UTC()` die anderen Parameter, um den Wert auszugleichen. Zum Beispiel wird, wenn `15` für `monthIndex` verwendet wird, das Jahr um 1 erhöht `(year + 1)` und `3` wird für den Monat verwendet.

Da `UTC()` eine statische Methode von `Date` ist, verwenden Sie sie immer als `Date.UTC()` und nicht als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.UTC()

Die folgende Anweisung erstellt ein {{jsxref("Date")}}-Objekt mit den als UTC behandelten Argumenten anstelle der lokalen:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Verhalten von Date.UTC() mit einem Argument

`Date.UTC()`, wenn es mit einem Argument aufgerufen wird, hatte früher inkonsistentes Verhalten, weil Implementierungen nur das Verhalten mit dem {{jsxref("Date/Date", "Date()")}}-Konstruktor konsistent hielten, der ein einzelnes Argument nicht als Jahreszahl interpretiert. Implementierungen müssen nun den ausgelassenen `monthIndex` als `0` behandeln, anstatt ihn in `NaN` zu erzwingen.

```js
Date.UTC(2017); // 1483228800000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.parse()")}}
- {{jsxref("Date")}}
