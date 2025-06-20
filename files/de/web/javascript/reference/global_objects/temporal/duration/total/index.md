---
title: Temporal.Duration.prototype.total()
short-title: total()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`total()`**-Methode von Instanzen des {{jsxref("Temporal.Duration")}} gibt eine Zahl zurück, die die Gesamtdauer in der angegebenen Einheit darstellt.

## Syntax

```js-nolint
total(unit)
total(options)
```

### Parameter

- `unit`
  - : Ein String, der die [`Einheit`](#unit_2) Option darstellt. Dies ist eine Komfortüberladung, daher ist `total(unit)` gleichbedeutend mit `total({ unit })`, wobei `unit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `relativeTo` {{optional_inline}}
      - : Ein zonenbezogenes oder einfaches Datum(Zeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist oder `unit` eine Kalendereinheit ist.
    - `unit`
      - : Eine der temporalen Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Einzahlformen.

### Rückgabewert

Eine Fließkommazahl, die die Gesamtdauer in der angegebenen Einheit darstellt. Kann aufgrund von Fließkommagenauigkeitsgrenzen ungenau sein.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `unit` wird nicht bereitgestellt oder ist keine gültige Einheit.
    - Entweder `this` oder `other` ist eine Kalenderdauer, oder `unit` ist eine Kalendereinheit und `relativeTo` wird nicht bereitgestellt.

## Beschreibung

Wenn ein `relativeTo` bereitgestellt wird, wird das Ergebnis berechnet, indem die Dauer zum Startpunkt hinzugefügt wird, die Differenz zwischen dem Ergebnis und dem Startpunkt (in Nanosekunden) ermittelt wird und dann die Differenz in die angeforderte Einheit umgerechnet wird, indem durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird. Das Bereitstellen einer zonengebundenen Uhrzeit ermöglicht auch die Berücksichtigung von Sommerzeit und anderen Zeitzonenänderungen; andernfalls werden 24-Stunden-Tage angenommen.

Wenn `relativeTo` nicht bereitgestellt wird, wird das Ergebnis berechnet, indem die Dauer in Nanosekunden umgerechnet und dann durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird.

## Beispiele

### Verwendung von total()

```js
const d = Temporal.Duration.from({ hours: 1, minutes: 30 });

console.log(d.total("minutes")); // 90
console.log(d.total("hours")); // 1.5
```

### Summe einer Kalenderdauer

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
