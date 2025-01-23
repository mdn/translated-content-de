---
title: Temporal.Duration.prototype.total()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`total()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Zahl zurück, die die gesamte Dauer in der angegebenen Einheit darstellt.

## Syntax

```js-nolint
total(unit)
total(options)
```

### Parameter

- `unit`
  - : Ein String, der die [`unit`](#unit_2)-Option darstellt. Dies ist eine praktische Überladung, sodass `total(unit)` gleichbedeutend ist mit `total({ unit })`, wobei `unit` ein String ist.
- `options`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder einfaches Datum (Uhrzeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) zu lösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `this` oder `other` eine Kalenderdauer ist oder `unit` eine Kalendereinheit ist.
    - `unit`
      - : Eine der temporalen Einheiten: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen.

### Rückgabewert

Eine Gleitkommazahl, die die gesamte Dauer in der angegebenen Einheit darstellt. Kann aufgrund von Grenzen der Gleitkommapräzision ungenau sein.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `unit` wird nicht bereitgestellt oder ist keine gültige Einheit.
    - Entweder `this` oder `other` ist eine Kalenderdauer oder `unit` ist eine Kalendereinheit und `relativeTo` wird nicht bereitgestellt.

## Beschreibung

Wenn ein `relativeTo` bereitgestellt wird, wird das Ergebnis berechnet, indem die Dauer zum Ausgangspunkt hinzugefügt, die Differenz zwischen dem Ergebnis und dem Ausgangspunkt (in Nanosekunden) ermittelt und die Differenz dann in die angeforderte Einheit umgerechnet wird, indem durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird. Wenn eine zonierte Datum-Uhrzeit bereitgestellt wird, können auch Sommerzeit und andere Zeitzonenänderungen berücksichtigt werden; andernfalls wird von 24-Stunden-Tagen ausgegangen.

Wenn `relativeTo` nicht bereitgestellt wird, wird das Ergebnis berechnet, indem die Dauer in Nanosekunden umgewandelt und durch die entsprechende Anzahl von Nanosekunden pro Einheit geteilt wird.

## Beispiele

### Verwendung von total()

```js
const d = Temporal.Duration.from({ hours: 1, minutes: 30 });

console.log(d.total("minutes")); // 90
console.log(d.total("hours")); // 1.5
```

### Gesamtzeit einer Kalenderdauer

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
