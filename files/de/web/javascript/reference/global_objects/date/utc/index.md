---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Date.UTC()`** akzeptiert Parameter, die die Datums- und Zeitkomponenten ähnlich wie der {{jsxref("Date")}}-Konstruktor darstellen, behandelt sie jedoch als UTC. Sie gibt die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC zurück.

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
  - : Ganzzahl, die das Jahr darstellt. Werte von `0` bis `99` entsprechen den Jahren `1900` bis `1999`. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex` {{optional_inline}}
  - : Ganzzahl, die den Monat darstellt, beginnend bei `0` für Januar bis `11` für Dezember. Standardwert ist `0`.
- `day` {{optional_inline}}
  - : Ganzzahl, die den Tag des Monats darstellt. Standardwert ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahl zwischen `0` und `23`, die die Stunde des Tages darstellt. Standardwert ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahl, die den Minutenanteil einer Zeit darstellt. Standardwert ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahl, die den Sekundenanteil einer Zeit darstellt. Standardwert ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahl, die den Millisekundenanteil einer Zeit darstellt. Standardwert ist `0`.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Jahre zwischen `0` und `99` werden in ein Jahr im 20. Jahrhundert umgewandelt `(1900 + year)`. Beispielsweise wird `95` in das Jahr `1995` umgewandelt.

Die Methode `UTC()` unterscheidet sich vom {{jsxref("Date/Date", "Date()")}}-Konstruktor in drei Punkten:

1. `Date.UTC()` verwendet universelle Zeit (UTC) anstelle der lokalen Zeit.
2. `Date.UTC()` gibt einen Zeitwert als Zahl zurück, anstelle eines {{jsxref("Date")}}-Objekts.
3. Wenn nur eine Zahl übergeben wird, interpretiert `Date.UTC()` diese als Jahr und nicht als Zeitstempel.

Wenn ein Parameter außerhalb des erwarteten Bereichs liegt, aktualisiert die Methode `UTC()` die anderen Parameter, um den Wert zu berücksichtigen. Wenn beispielsweise `15` für `monthIndex` verwendet wird, wird das Jahr um 1 erhöht `(year + 1)` und `3` wird für den Monat verwendet.

Da `UTC()` eine statische Methode von `Date` ist, wird sie immer als `Date.UTC()` verwendet, anstatt als Methode eines erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.UTC()

Die folgende Anweisung erstellt ein {{jsxref("Date")}}-Objekt, wobei die Argumente als UTC anstelle der lokalen Zeit behandelt werden:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Verhalten von Date.UTC() mit einem Argument

`Date.UTC()` hatte früher bei einem Argument inkonsistentes Verhalten, da Implementierungen nur das Verhalten beibehielten, das mit dem {{jsxref("Date/Date", "Date()")}}-Konstruktor konsistent war. Dieser interpretiert ein einzelnes Argument nicht als Jahr. Implementierungen müssen nun ein weggelassenes `monthIndex` als `0` behandeln, anstatt es in `NaN` zu erzwingen.

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
