---
title: Temporal.Duration.prototype.total()
short-title: total()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`total()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Zahl zurück, die die Gesamtdauer in der angegebenen Einheit darstellt.

## Syntax

```js-nolint
total(unit)
total(options)
```

### Parameter

- `unit`
  - : Ein String, der die [`unit`](#unit_2)-Option darstellt. Dies ist eine bequeme Überladung, sodass `total(unit)` gleichbedeutend mit `total({ unit })` ist, wobei `unit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder normales Datum(Zeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (sehen Sie sich den Link für die allgemeine Interpretation dieser Option an). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist oder `unit` eine Kalendereinheit ist.
    - `unit`
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder ihre Einzelformen.

### Rückgabewert

Eine Gleitkommazahl, die die Gesamtdauer in der angegebenen Einheit darstellt. Kann aufgrund von Gleitkomma-Präzisionsgrenzen ungenau sein.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `unit` wird nicht angegeben oder ist keine gültige Einheit.
    - Entweder `this` oder `other` ist eine Kalenderdauer, oder `unit` ist eine Kalendereinheit, und `relativeTo` wird nicht angegeben.

## Beschreibung

Wenn ein `relativeTo` angegeben wird, wird das Ergebnis berechnet, indem die Dauer zum Startpunkt hinzugefügt, die Differenz zwischen dem Ergebnis und dem Startpunkt (in Nanosekunden) ermittelt und die Differenz durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird, um die angeforderte Einheit zu erhalten. Wenn ein zoniertes Datum-Uhrzeit angegeben wird, können auch die Sommerzeit und andere Zeitzonenänderungen berücksichtigt werden; andernfalls werden 24-Stunden-Tage angenommen.

Wenn `relativeTo` nicht angegeben wird, wird das Ergebnis berechnet, indem die Dauer in Nanosekunden umgewandelt und durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird.

## Beispiele

### Verwendung von total()

```js
const d = Temporal.Duration.from({ hours: 1, minutes: 30 });

console.log(d.total("minutes")); // 90
console.log(d.total("hours")); // 1.5
```

### Gesamtdauer einer Kalenderdauer

```js
const d = Temporal.Duration.from({ months: 1 });

console.log(
  d.total({ unit: "days", relativeTo: Temporal.PlainDate.from("2021-01-01") }),
); // 31
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
