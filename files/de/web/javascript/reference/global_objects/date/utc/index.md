---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: d2feb0d3fb7d89c8bb389ceafd2a0c60e64e343a
---

{{JSRef}}

Die statische Methode **`Date.UTC()`** akzeptiert Parameter, die Datum und Uhrzeit ähnlich wie der {{jsxref("Date")}}-Konstruktor repräsentieren, behandelt sie jedoch als UTC. Sie gibt die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00 UTC zurück.

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

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
  - : Ganzzahlwert, der das Jahr darstellt. Werte von `0` bis `99` werden auf die Jahre `1900` bis `1999` abgebildet. Alle anderen Werte entsprechen dem tatsächlichen Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex` {{optional_inline}}
  - : Ganzzahlwert, der den Monat repräsentiert. `0` entspricht Januar und `11` entspricht Dezember. Standardmäßig `0`.
- `day` {{optional_inline}}
  - : Ganzzahlwert, der den Tag des Monats repräsentiert. Standardmäßig `1`.
- `hours` {{optional_inline}}
  - : Ganzzahlwert zwischen `0` und `23`, der die Stunde des Tages angibt. Standardmäßig `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahlwert, der das Minuten-Segment einer Zeit angibt. Standardmäßig `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahlwert, der das Sekunden-Segment einer Zeit angibt. Standardmäßig `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahlwert, der das Millisekunden-Segment einer Zeit angibt. Standardmäßig `0`.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Jahre zwischen `0` und `99` werden in ein Jahr im 20. Jahrhundert umgewandelt `(1900 + year)`. Zum Beispiel wird `95` in das Jahr `1995` umgewandelt.

Die Methode `UTC()` unterscheidet sich in drei Punkten vom {{jsxref("Date/Date", "Date()")}}-Konstruktor:

1. `Date.UTC()` verwendet die Weltzeit anstelle der lokalen Zeit.
2. `Date.UTC()` gibt einen Zeitwert als Zahl zurück, anstatt ein {{jsxref("Date")}}-Objekt zu erstellen.
3. Wenn eine einzige Zahl übergeben wird, interpretiert `Date.UTC()` sie als Jahr anstelle eines Zeitstempels.

Wenn ein Parameter außerhalb des erwarteten Bereichs liegt, aktualisiert die Methode `UTC()` die anderen Parameter, um den Wert anzupassen. Zum Beispiel wird bei Verwendung von `15` für `monthIndex` das Jahr um 1 erhöht `(year + 1)` und `3` wird für den Monat verwendet.

Da `UTC()` eine statische Methode von `Date` ist, verwenden Sie immer `Date.UTC()` und nicht als eine Methode eines erstellten `Date` Objekts.

## Beispiele

### Verwendung von Date.UTC()

Die folgende Anweisung erstellt ein {{jsxref("Date")}}-Objekt, indem die Argumente als UTC statt als lokal behandelt werden:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Verhalten von Date.UTC() mit einem Argument

`Date.UTC()`, wenn ein Argument übergeben wird, hatte früher inkonsistentes Verhalten, da Implementierungen nur das Verhalten mit dem {{jsxref("Date/Date", "Date()")}}-Konstruktor konsistent hielten, der ein einzelnes Argument nicht als Jahreszahl interpretiert. Implementierungen sind jetzt verpflichtet, `monthIndex` als `0` zu behandeln, anstatt es zu `NaN` zu zwingen.

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
