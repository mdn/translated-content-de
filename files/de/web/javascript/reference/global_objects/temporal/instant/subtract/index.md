---
title: Temporal.Instant.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Methode **`subtract()`** von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Zeitpunkt um eine bestimmte Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) zurückversetzt darstellt.

Wenn Sie zwei Instants subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/since", "since()")}} oder {{jsxref("Temporal/Instant/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine Dauer darstellt, die von diesem Zeitpunkt subtrahiert werden soll. Es wird unter Verwendung desselben Algorithmus wie bei {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}} Objekt, das `duration` von diesem Zeitpunkt subtrahiert darstellt. Wenn `duration` positiv ist, dann ist der zurückgegebene Zeitpunkt früher als dieser Zeitpunkt; wenn `duration` negativ ist, dann ist der zurückgegebene Zeitpunkt später als dieser Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (es hat einen ungleich 0 stehenden Wert für `years`, `months` oder `weeks`) oder hat einen ungleich 0 stehenden Wert für `days`, da Kalenderdauern ohne Kalender- und Zeitreferenz mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche beträgt.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

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
