---
title: Temporal.Duration.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/with
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`with()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt ein neues `Temporal.Duration`-Objekt zurück, das diese Dauer mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden. Da alle `Temporal`-Objekte so gestaltet sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder der Dauer.

## Syntax

```js-nolint
with(info)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} anerkannten Eigenschaften enthält: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Nicht angegebene Eigenschaften verwenden die Werte aus der ursprünglichen Dauer.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden, und der Rest der Felder von der ursprünglichen Dauer kopiert wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine der anerkannten Eigenschaften im `info`-Objekt ist keine ganze Zahl (einschließlich nicht endlicher Werte).
    - Eine [Kalendereinheit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (Jahre, Monate, Wochen) hat einen Absolutwert ≥ 2<sup>32</sup>.
    - Der nicht kalenderbasierte Teil der Dauer (Tage und darunter), ausgedrückt in Sekunden, hat einen Absolutwert ≥ 2<sup>53</sup>.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das `info`-Objekt ist kein Objekt.
    - Alle anerkannten Eigenschaften im `info`-Objekt sind `undefined`.

## Beispiele

### Verwendung von with()

Sie können `with()` verwenden, um eine fein abgestimmte Kontrolle über die Felder eines `Temporal.Duration`-Objekts zu erreichen. Zum Beispiel können Sie eine Dauer manuell nur auf einer Einheit [ausgleichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), was `round()` nicht bietet:

```js
function balanceMinutes(duration) {
  const { hours, minutes } = duration;
  const totalMinutes = hours * 60 + minutes;
  const balancedMinutes = totalMinutes % 60;
  const balancedHours = (totalMinutes - balancedMinutes) / 60;
  return duration.with({ hours: balancedHours, minutes: balancedMinutes });
}

const d1 = Temporal.Duration.from({ hours: 100, minutes: 100, seconds: 100 });
const d2 = balanceMinutes(d1);
console.log(d2.hours); // 101
console.log(d2.minutes); // 40
console.log(d2.seconds); // 100; remains unbalanced
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
