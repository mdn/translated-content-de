---
title: Temporal.Duration.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration`-Objekt zurück, das die Summe dieser Dauer und einer gegebenen Dauer darstellt. Das Ergebnis ist [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing).

## Syntax

```js-nolint
add(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine zu dieser Dauer hinzuzufügende Dauer darstellt. Sie wird mit demselben Algorithmus in ein `Temporal.Duration`-Objekt konvertiert wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, das die Summe dieser Dauer und `other` darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Entweder `this` oder `other` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie besitzt einen von Null verschiedenen Wert für `years`, `months` oder `weeks`), da Kalenderdauern ohne Kalender und Zeitreferenz mehrdeutig sind.
    - Die Summe von `this` und `other` überschreitet das maximale oder unterschreitet das minimale darstellbare Dauervolumen, welches ±2<sup>53</sup> Sekunden ist.

## Beschreibung

Nicht-Kalender-Dauern repräsentieren eindeutig eine feste Zeitspanne. Intern werden `this` und `other` beide in Nanosekunden (unter Annahme von 24-Stunden-Tagen) umgerechnet und zusammenaddiert. Das Ergebnis wird dann in ein `Temporal.Duration`-Objekt zurückkonvertiert, sodass das Ergebnis immer [ausgeglichen oder top-heavy](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist, wobei die größtmögliche Einheit `days` ist.

Wenn Sie eine Addition oder Subtraktion mit einer Kalenderdauer durchführen möchten, können Sie beide Dauern zu einem Startpunkt hinzufügen und dann den Unterschied zwischen den beiden resultierenden Zeitpunkten ermitteln; das heißt, `dur1 + dur2` ist äquivalent zu `(start + dur1 + dur2) - start`.

Um eine Dauer zu einem Datum oder einer Zeit hinzuzufügen, verwenden Sie stattdessen die `add()`-Methode des Datums- oder Zeitobjekts.

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

d1.add(d2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

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
