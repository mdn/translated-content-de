---
title: Temporal.Instant.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`subtract()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Moment um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben darstellt.

Wenn Sie zwei Instanzen subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/since", "since()")}} oder {{jsxref("Temporal/Instant/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die von diesem Moment subtrahiert werden soll. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}} Objekt, das das Subtrahieren von `duration` von diesem Moment darstellt. Wenn `duration` positiv ist, dann ist der zurückgegebene Moment früher als dieser Moment; wenn `duration` negativ ist, dann ist der zurückgegebene Moment später als dieser Moment.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat eine nicht null `years`, `months` oder `weeks`), oder hat eine nicht null `days`, da Kalenderdauern ohne einen Kalender und Zeitreferenz mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche umfasst.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

## Beispiele

### Subtrahieren einer Temporal.Duration

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1000);
const duration = Temporal.Duration.from("PT1S"); // One-second duration
const newInstant = instant.subtract(duration);
console.log(newInstant.epochMilliseconds); // 0
```

Für weitere Beispiele siehe {{jsxref("Temporal/Instant/add", "add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
