---
title: Temporal.Instant.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: b4696c099a33202f1ce2063f14648de398703774
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`subtract()`** der {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine angegebene Dauer (in einer Form, die mit {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben darstellt.

Wenn Sie zwei Zeitpunkte voneinander subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/since", "since()")}} oder {{jsxref("Temporal/Instant/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die von diesem Zeitpunkt subtrahiert werden soll. Es wird mithilfe des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das die Subtraktion von `duration` von diesem Zeitpunkt darstellt. Wenn `duration` positiv ist, liegt der zurückgegebene Zeitpunkt vor diesem Zeitpunkt; wenn `duration` negativ ist, liegt der zurückgegebene Zeitpunkt nach diesem Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (hat einen nicht-null `years`, `months` oder `weeks` Wert) oder hat einen nicht-null `days` Wert, da Kalenderdauern ohne Kalender und Zeitreferenz mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), welcher ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre, ab der Unix-Epoche umfasst.

## Beschreibung

Das Subtrahieren einer Dauer ist äquivalent zum [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) der [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), sodass alle gleichen Überlegungen gelten.

## Beispiele

### Subtrahieren eines Temporal.Duration

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
