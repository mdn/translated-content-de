---
title: Temporal.Duration.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt ein neues `Temporal.Duration`-Objekt zurück, das die Summe dieser Dauer und einer angegebenen Dauer darstellt. Das Ergebnis wird [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing).

## Syntax

```js-nolint
add(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die zu dieser Dauer hinzugefügt werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, das die Summe dieser Dauer und von `other` darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `this` oder `other` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie enthält einen Wert ungleich null für `years`, `months` oder `weeks`), da Kalenderdauern ohne Kalender und Zeitreferenz mehrdeutig sind.
    - Die Summe von `this` und `other` überschreitet die maximal darstellbare Dauer oder unterschreitet die minimal darstellbare Dauer, was ±2<sup>53</sup> Sekunden sind.

## Beschreibung

Nicht-Kalender-Dauern stellen eine feste Zeitspanne eindeutig dar. Intern werden `this` und `other` beide in Nanosekunden konvertiert (unter der Annahme, dass Tage 24 Stunden lang sind) und zusammengezählt. Das Ergebnis wird dann zurück in ein `Temporal.Duration`-Objekt konvertiert, sodass das Ergebnis stets [ausgeglichen oder feldübergreifend](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist, wobei die größte mögliche Einheit `days` ist.

Wenn Sie eine Addition oder Subtraktion mit einer Kalenderdauer durchführen möchten, können Sie beide Dauern zu einem Ausgangspunkt hinzufügen und dann die Differenz zwischen den beiden resultierenden Zeitpunkten ermitteln; das bedeutet, `dur1 + dur2` entspricht `(start + dur1 + dur2) - start`.

Um eine Dauer zu einem Datum oder einer Zeit hinzuzufügen, verwenden Sie die Methode `add()` des jeweiligen Datums- oder Zeitobjekts.

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
