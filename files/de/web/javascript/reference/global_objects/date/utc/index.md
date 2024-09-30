---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die statische Methode **`Date.UTC()`** akzeptiert Parameter, die die Komponenten von Datum und Uhrzeit ähnlich wie der {{jsxref("Date")}} Konstruktor darstellen, behandelt diese jedoch als UTC. Sie gibt die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC zurück.

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

## Syntax

```js-nolint
Date.UTC(year)
Date.UTC(year, monthIndex)
Date.UTC(year, monthIndex, day)
Date.UTC(year, monthIndex, day, hour)
Date.UTC(year, monthIndex, day, hour, minute)
Date.UTC(year, monthIndex, day, hour, minute, second)
Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)
```

### Parameter

- `year`
  - : Ganzzahl, die das Jahr darstellt. Werte von `0` bis `99` werden auf die Jahre `1900` bis `1999` abgebildet. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex` {{optional_inline}}
  - : Ganzzahl, die den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember. Standardwert ist `0`.
- `day` {{optional_inline}}
  - : Ganzzahl, die den Tag des Monats darstellt. Standardwert ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahl zwischen `0` und `23`, die die Stunde des Tages darstellt. Standardwert ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahl, die das Minuten-Segment einer Zeit darstellt. Standardwert ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahl, die das Sekunden-Segment einer Zeit darstellt. Standardwert ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahl, die das Millisekunden-Segment einer Zeit darstellt. Standardwert ist `0`.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Jahre zwischen `0` und `99` werden in ein Jahr des 20. Jahrhunderts umgewandelt `(1900 + year)`. Zum Beispiel wird `95` in das Jahr `1995` umgewandelt.

Die `UTC()` Methode unterscheidet sich vom {{jsxref("Date/Date", "Date()")}} Konstruktor auf drei Arten:

1. `Date.UTC()` verwendet die Weltzeit anstelle der lokalen Zeit.
2. `Date.UTC()` gibt einen Zeitwert als Zahl zurück, anstatt ein {{jsxref("Date")}} Objekt zu erstellen.
3. Wenn eine einzelne Zahl übergeben wird, interpretiert `Date.UTC()` sie als Jahr und nicht als Zeitstempel.

Wenn ein Parameter außerhalb des erwarteten Bereichs liegt, passt die `UTC()` Methode die anderen Parameter an, um den Wert aufzunehmen. Zum Beispiel, wenn `15` für `monthIndex` verwendet wird, wird das Jahr um 1 erhöht `(year + 1)` und `3` wird für den Monat verwendet.

Da `UTC()` eine statische Methode von `Date` ist, wird sie immer als `Date.UTC()` verwendet, und nicht als Methode eines erstellten `Date` Objekts.

## Beispiele

### Verwendung von Date.UTC()

Die folgende Anweisung erstellt ein {{jsxref("Date")}} Objekt mit Argumenten, die als UTC anstelle der lokalen Zeit behandelt werden:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Verhalten von Date.UTC() mit einem Argument

`Date.UTC()` zeigte bei Übergabe eines einzigen Arguments inkonsistentes Verhalten, da Implementierungen das Verhalten nur konsistent mit dem {{jsxref("Date/Date", "Date()")}} Konstruktor hielten, der ein einzelnes Argument nicht als Jahreszahl interpretiert. Implementierungen sind jetzt verpflichtet, einen ausgelassenen `monthIndex` als `0` zu behandeln, anstatt ihn in `NaN` umzuwandeln.

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
