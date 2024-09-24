---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die statische Methode **`Date.UTC()`** nimmt Parameter an, die die Datums- und Zeitkomponenten ähnlich dem {{jsxref("Date")}} Konstruktor darstellen, behandelt diese jedoch als UTC. Sie gibt die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC zurück.

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
  - : Ganzzahlwert, der das Jahr darstellt. Werte von `0` bis `99` werden den Jahren `1900` bis `1999` zugeordnet. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex` {{optional_inline}}
  - : Ganzzahlwert, der den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember. Standardwert ist `0`.
- `day` {{optional_inline}}
  - : Ganzzahlwert, der den Tag des Monats darstellt. Standardwert ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahlwert zwischen `0` und `23`, der die Stunde des Tages darstellt. Standardwert ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahlwert, der das Minutensegment einer Zeit darstellt. Standardwert ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahlwert, der das Sekundensegment einer Zeit darstellt. Standardwert ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahlwert, der das Millisekundensegment einer Zeit darstellt. Standardwert ist `0`.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Jahre zwischen `0` und `99` werden in ein Jahr im 20. Jahrhundert umgewandelt `(1900 + year)`. Zum Beispiel wird `95` in das Jahr `1995` umgewandelt.

Die Methode `UTC()` unterscheidet sich vom {{jsxref("Date/Date", "Date()")}} Konstruktor in drei Punkten:

1. `Date.UTC()` verwendet die universelle Zeit anstelle der lokalen Zeit.
2. `Date.UTC()` gibt einen Zeitwert als Zahl zurück, anstatt ein {{jsxref("Date")}} Objekt zu erstellen.
3. Wenn eine einzelne Zahl übergeben wird, interpretiert `Date.UTC()` sie als Jahr anstelle eines Zeitstempels.

Wenn ein Parameter außerhalb des erwarteten Bereichs liegt, aktualisiert die Methode `UTC()` die anderen Parameter, um den Wert anzupassen. Zum Beispiel, wenn `15` für `monthIndex` verwendet wird, wird das Jahr um `1` erhöht `(year + 1)` und `3` wird für den Monat verwendet.

Da `UTC()` eine statische Methode von `Date` ist, wird sie immer als `Date.UTC()` verwendet, anstatt als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.UTC()

Die folgende Anweisung erstellt ein {{jsxref("Date")}}-Objekt, bei dem die Argumente als UTC statt als lokal behandelt werden:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Verhalten von Date.UTC() mit einem Argument

`Date.UTC()` hatte bei Übergabe eines Arguments früher inkonsistentes Verhalten, da Implementierungen nur das Verhalten im Einklang mit dem {{jsxref("Date/Date", "Date()")}} Konstruktor gehalten haben, welcher ein einzelnes Argument nicht als Jahreszahl interpretiert. Implementierungen sind jetzt verpflichtet, `monthIndex` als `0` zu behandeln, anstatt es zu `NaN` zu zwingen.

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
