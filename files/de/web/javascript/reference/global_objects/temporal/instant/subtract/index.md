---
title: Temporal.Instant.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`subtract()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Zeitpunkt um eine angegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) zurückversetzt darstellt.

Wenn Sie zwei Zeitpunkte subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/since", "since()")}} oder {{jsxref("Temporal/Instant/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine von diesem Zeitpunkt zu subtrahierende Dauer darstellt. Die Umwandlung erfolgt in ein `Temporal.Duration` Objekt unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}} Objekt, das die Subtraktion von `duration` von diesem Zeitpunkt darstellt. Wenn `duration` positiv ist, ist der zurückgegebene Zeitpunkt früher als dieser Zeitpunkt; wenn `duration` negativ ist, ist der zurückgegebene Zeitpunkt später als dieser Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat einen von Null verschiedenen `years`, `months` oder `weeks` Wert) oder hat einen von Null verschiedenen `days` Wert, da Kalenderdauern ohne Kalender- und Zeitreferenz mehrdeutig sind.
    - Die Differenz von `this` und `duration` überschreitet das Maximum oder unterschreitet das Minimum des darstellbaren Zeitpunkts, welcher ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) beträgt.

## Beschreibung

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Addieren](Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) ihrer [Negation](Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten die gleichen Überlegungen.

## Beispiele

### Subtraktion einer Temporal.Duration

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
