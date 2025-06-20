---
title: Temporal.Instant.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist) rückwärts verschoben darstellt.

Wenn Sie zwei Zeitpunkte subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/since", "since()")}} oder {{jsxref("Temporal/Instant/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die von diesem Zeitpunkt subtrahiert werden soll. Es wird unter Verwendung desselben Algorithmus in ein `Temporal.Duration`-Objekt umgewandelt wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das die Subtraktion von `duration` von diesem Zeitpunkt darstellt. Wenn `duration` positiv ist, liegt der zurückgegebene Zeitpunkt vor diesem Zeitpunkt; wenn `duration` negativ ist, liegt der zurückgegebene Zeitpunkt nach diesem Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat ein von null abweichendes `years`, `months` oder `weeks`), oder hat ein von null abweichendes `days`, da Kalenderdauern ohne einen Kalender und Zeitbezug mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche umfasst.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten dieselben Überlegungen.

## Beispiele

### Eine Temporal.Duration subtrahieren

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
