---
title: Temporal.Instant.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`**-Methode von Instanzen des {{jsxref("Temporal.Instant")}} gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben darstellt.

Wenn Sie zwei Instanzen subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/since", "since()")}} oder {{jsxref("Temporal/Instant/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die von diesem Moment subtrahiert werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das die Subtraktion von `duration` von diesem Moment darstellt. Wenn `duration` positiv ist, dann ist der zurückgegebene Moment früher als dieser Moment; wenn `duration` negativ ist, dann ist der zurückgegebene Moment später als dieser Moment.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat ein von null verschiedenes `years`, `months` oder `weeks`) oder hat ein von null verschiedenes `days`, da Kalenderdauern ohne Kalender und Zeitreferenz mehrdeutig sind.
    - Der Unterschied von `this` und `duration` überschreitet das maximale oder unterschreitet das minimale darstellbare Moment, das ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) beträgt.

## Beschreibung

Das Subtrahieren einer Dauer ist äquivalent zum [Addieren](Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) ihrer [Negation](Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

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
