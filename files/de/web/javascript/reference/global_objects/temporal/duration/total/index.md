---
title: Temporal.Duration.prototype.total()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`total()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Zahl zurück, die die Gesamtdauer in der angegebenen Einheit darstellt.

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
      - : Ein zonierter oder einfacher Datum(Zeit), der die Zeit- und Kalenderinformationen bereitstellt, um [Kalanderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalanderdauer ist, oder `unit` eine Kalendereinheit ist.
    - `unit`
      - : Eine der temporalen Einheiten: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen.

### Rückgabewert

Eine Gleitkommazahl, die die Gesamtdauer in der angegebenen Einheit darstellt. Kann aufgrund von Gleitkommagenauigkeitsgrenzen ungenau sein.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `unit` wird nicht übergeben oder ist keine gültige Einheit.
    - Entweder `this` oder `other` ist eine Kalendardauer, oder `unit` ist eine Kalendereinheit, und `relativeTo` wird nicht bereitgestellt.

## Beschreibung

Wenn ein `relativeTo` angegeben wird, wird das Ergebnis berechnet, indem die Dauer zum Ausgangspunkt hinzugefügt wird, die Differenz zwischen dem Ergebnis und dem Ausgangspunkt (in Nanosekunden) ermittelt wird und dann die Differenz in die angeforderte Einheit umgerechnet wird, indem durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird. Die Angabe einer zonierten Datum-Zeit berücksichtigt auch die Sommerzeit und andere Zeitzonenänderungen; andernfalls werden 24-Stunden-Tage angenommen.

Wenn `relativeTo` nicht angegeben wird, wird das Ergebnis berechnet, indem die Dauer in Nanosekunden umgerechnet und durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird.

## Beispiele

### Verwendung von total()

```js
const d = Temporal.Duration.from({ hours: 1, minutes: 30 });

console.log(d.total("minutes")); // 90
console.log(d.total("hours")); // 1.5
```

### Gesamt einer Kalendardauer

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
