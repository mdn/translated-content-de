---
title: Temporal.Duration.prototype.total()
short-title: total()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`total()`**-Methode der {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Zahl zurück, die die Gesamtdauer in der angegebenen Einheit darstellt.

## Syntax

```js-nolint
total(unit)
total(options)
```

### Parameter

- `unit`
  - : Ein String, der die [`unit`](#unit_2)-Option darstellt. Dies ist eine Komfortüberladung, sodass `total(unit)` äquivalent zu `total({ unit })` ist, wobei `unit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder einfaches Datum(Zeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `dies` oder `andere` eine Kalenderdauer ist oder `unit` eine Kalendereinheit ist.
    - `unit`
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder ihre Singularformen.

### Rückgabewert

Eine Fließkommazahl, die die Gesamtdauer in der angegebenen Einheit darstellt. Kann aufgrund von Begrenzungen der Fließkommagenauigkeit ungenau sein.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - `unit` wird nicht angegeben oder ist keine gültige Einheit.
    - Entweder `dies` oder `andere` ist eine Kalenderdauer, oder `unit` ist eine Kalendereinheit, und `relativeTo` wird nicht angegeben.

## Beschreibung

Wenn ein `relativeTo` angegeben wird, wird das Ergebnis berechnet, indem die Dauer zum Ausgangspunkt addiert wird, die Differenz zwischen dem Ergebnis und dem Ausgangspunkt (in Nanosekunden) ermittelt wird und dann die Differenz in die angeforderte Einheit umgewandelt wird, indem sie durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird. Die Angabe eines zonierten Datums-Zeitpunktes ermöglicht es, die Sommerzeit und andere Zeitzonenänderungen zu berücksichtigen; andernfalls werden 24-Stunden-Tage angenommen.

Wenn `relativeTo` nicht angegeben wird, wird das Ergebnis berechnet, indem die Dauer in Nanosekunden umgerechnet und durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird.

## Beispiele

### Verwendung von total()

```js
const d = Temporal.Duration.from({ hours: 1, minutes: 30 });

console.log(d.total("minutes")); // 90
console.log(d.total("hours")); // 1.5
```

### Gesamt einer Kalenderdauer

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
