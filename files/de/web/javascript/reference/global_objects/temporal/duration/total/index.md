---
title: Temporal.Duration.prototype.total()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`total()`** von Instanzen von {{jsxref("Temporal.Duration")}} gibt eine Zahl zurück, die die Gesamtdauer in der angegebenen Einheit darstellt.

## Syntax

```js-nolint
total(unit)
total(options)
```

### Parameter

- `unit`
  - : Ein String, der die [`unit`](#unit_2)-Option repräsentiert. Dies ist eine Komfortüberladung, sodass `total(unit)` gleichbedeutend mit `total({ unit })` ist, wobei `unit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder einfaches Datum(Zeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist oder `unit` eine Kalendereinheit ist.
    - `unit`
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder ihre Singularformen.

### Rückgabewert

Eine Gleitkommazahl, die die Gesamtdauer in der angegebenen Einheit darstellt. Kann aufgrund von Präzisionsgrenzen bei Gleitkommazahlen ungenau sein.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `unit` wird nicht bereitgestellt oder ist keine gültige Einheit.
    - Entweder `this` oder `other` ist eine Kalenderdauer, oder `unit` ist eine Kalendereinheit, und `relativeTo` wird nicht bereitgestellt.

## Beschreibung

Wenn ein `relativeTo` angegeben wird, wird das Ergebnis berechnet, indem die Dauer zum Ausgangspunkt addiert wird, der Unterschied zwischen dem Ergebnis und dem Ausgangspunkt (in Nanosekunden) ermittelt und der Unterschied dann in die angeforderte Einheit umgewandelt wird, indem durch die entsprechende Anzahl von Nanosekunden pro Einheit dividiert wird. Das Bereitstellen eines zonierten Datums-Zeitpunkts ermöglicht es, auch Sommerzeit und andere Zeitzonenänderungen zu berücksichtigen; andernfalls wird von 24-Stunden-Tagen ausgegangen.

Wenn `relativeTo` nicht bereitgestellt wird, wird das Ergebnis berechnet, indem die Dauer in Nanosekunden umgewandelt und durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird.

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
