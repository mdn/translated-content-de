---
title: Temporal.Duration.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt ein neues `Temporal.Duration`-Objekt mit der Summe dieser Dauer und einer gegebenen Dauer zurück. Das Ergebnis ist [ausbalanciert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing).

## Syntax

```js-nolint
add(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die zu dieser Dauer hinzugefügt werden soll. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, das die Summe dieser Dauer und `other` darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Entweder `this` oder `other` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat einen nicht-null `years`, `months` oder `weeks`), da Kalenderdauern ohne einen Kalender und Zeitbezug mehrdeutig sind.
    - Die Summe von `this` und `other` überschreitet die maximal darstellbare Dauer oder unterschreitet die minimal darstellbare Dauer, welche ±2<sup>53</sup> Sekunden beträgt.

## Beschreibung

Nicht-Kalenderdauern repräsentieren eindeutig eine feste Zeitspanne. Intern werden sowohl `this` als auch `other` in Nanosekunden umgewandelt (unter Annahme von 24-Stunden-Tagen) und zusammen addiert. Das Ergebnis wird dann in ein `Temporal.Duration`-Objekt zurückkonvertiert, sodass das Ergebnis immer [ausbalanciert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist mit der größtmöglichen Einheit als `days`.

Wenn Sie eine Addition oder Subtraktion mit einer Kalenderdauer durchführen möchten, können Sie beide Dauern zu einem Startpunkt hinzufügen und dann die Differenz zwischen den beiden resultierenden Zeitpunkten ermitteln; das heißt `dur1 + dur2` ist äquivalent zu `(start + dur1 + dur2) - start`.

Um eine Dauer zu einem Datum oder einer Uhrzeit hinzuzufügen, verwenden Sie stattdessen die `add()`-Methode des Datums- oder Zeitobjekts.

## Beispiele

### Verwendung von add()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.add(d2);
console.log(d3.toString()); // "PT10M"
```

### Hinzufügen von Kalenderdauern

```js
const d1 = Temporal.Duration.from({ days: 1 });
const d2 = Temporal.Duration.from({ months: 1 });

d1.add(d2); // RangeError: can't compare durations when "relativeTo" is undefined

const start = Temporal.PlainDateTime.from("2022-01-01T00:00"); // ISO 8601 calendar
const result = start.add(d1).add(d2).since(start);
console.log(result.toString()); // "P32D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
