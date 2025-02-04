---
title: Temporal.Instant.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`**-Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment rückwärts verschoben durch eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) darstellt.

Wenn Sie zwei Instanzen subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/since", "since()")}} oder {{jsxref("Temporal/Instant/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die von diesem Moment subtrahiert werden soll. Es wird in ein `Temporal.Duration`-Objekt konvertiert, indem derselbe Algorithmus wie bei {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} verwendet wird.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das die Subtraktion von `duration` von diesem Moment repräsentiert. Wenn `duration` positiv ist, dann ist das zurückgegebene Moment früher als dieses; wenn `duration` negativ ist, ist das zurückgegebene Moment später als dieses.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat einen ungleichen `years`, `months` oder `weeks`), oder hat einen ungleichen `days`, da Kalenderdauern ohne einen Kalender und Zeitreferenz mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre ab der Unix-Epoche beträgt.

## Beschreibung

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Hinzufügen](Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) ihrer [Negation](Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), sodass die gleichen Überlegungen gelten.

## Beispiele

### Subtraktion einer Temporal.Duration

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1000);
const duration = Temporal.Duration.from("PT1S"); // One-second duration
const newInstant = instant.subtract(duration);
console.log(newInstant.epochMilliseconds); // 0
```

Für weitere Beispiele, siehe {{jsxref("Temporal/Instant/add", "add()")}}.

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
