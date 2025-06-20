---
title: Date.UTC()
short-title: UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Date.UTC()`** akzeptiert Parameter, die die Datums- und Zeitkomponenten ähnlich wie der {{jsxref("Date")}} Konstruktor repräsentieren, behandelt sie jedoch als UTC. Sie gibt die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC zurück.

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
  - : Ganzzahlwert, der das Jahr darstellt. Werte von `0` bis `99` entsprechen den Jahren `1900` bis `1999`. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex` {{optional_inline}}
  - : Ganzzahlwert, der den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember. Standard ist `0`.
- `day` {{optional_inline}}
  - : Ganzzahlwert, der den Tag des Monats darstellt. Standard ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahlwert zwischen `0` und `23`, der die Stunde des Tages darstellt. Standard ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahlwert, der das Minuten-Segment einer Zeit darstellt. Standard ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahlwert, der das Sekunden-Segment einer Zeit darstellt. Standard ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahlwert, der das Millisekunden-Segment einer Zeit darstellt. Standard ist `0`.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums repräsentiert. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Jahre zwischen `0` und `99` werden in ein Jahr des 20. Jahrhunderts umgewandelt `(1900 + year)`. Zum Beispiel wird `95` in das Jahr `1995` umgewandelt.

Die Methode `UTC()` unterscheidet sich vom {{jsxref("Date/Date", "Date()")}} Konstruktor in drei Punkten:

1. `Date.UTC()` verwendet die universelle Zeit anstelle der lokalen Zeit.
2. `Date.UTC()` gibt einen Zeitwert als Zahl zurück, anstatt ein {{jsxref("Date")}} Objekt zu erstellen.
3. Wenn nur eine Zahl übergeben wird, interpretiert `Date.UTC()` diese als Jahr und nicht als Zeitstempel.

Wenn ein Parameter außerhalb des erwarteten Bereichs liegt, passt die Methode `UTC()` die anderen Parameter an, um den Wert aufzunehmen. Wenn beispielsweise `15` für `monthIndex` verwendet wird, wird das Jahr (year + 1) erhöht und `3` für den Monat verwendet.

Da `UTC()` eine statische Methode von `Date` ist, verwenden Sie sie immer als `Date.UTC()`, anstatt sie als Methode eines erstellten `Date`-Objekts zu verwenden.

## Beispiele

### Verwendung von Date.UTC()

Die folgende Anweisung erstellt ein {{jsxref("Date")}} Objekt, wobei die Argumente als UTC und nicht als lokal behandelt werden:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Verhalten von Date.UTC() mit einem Argument

`Date.UTC()`, wenn es mit einem Argument übergeben wird, hatte früher inkonsistentes Verhalten, weil Implementierungen das Verhalten nur im Einklang mit dem {{jsxref("Date/Date", "Date()")}} Konstruktor einhielten, der ein einzelnes Argument nicht als Jahreszahl interpretiert. Implementierungen sind nun verpflichtet, einen ausgelassenen `monthIndex` als `0` zu behandeln, anstatt ihn zu `NaN` zu zwingen.

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
