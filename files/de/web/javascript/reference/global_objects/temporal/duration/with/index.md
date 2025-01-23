---
title: Temporal.Duration.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/with
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`with()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, das diese Dauer mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal` Objekte so gestaltet sind, dass sie unveränderlich sind, funktioniert diese Methode im Wesentlichen als Setter für die Felder der Dauer.

## Syntax

```js-nolint
with(info)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} anerkannten Eigenschaften enthält: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Nicht angegebene Eigenschaften verwenden die Werte der ursprünglichen Dauer.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden, und die restlichen Felder aus der ursprünglichen Dauer kopiert werden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine der anerkannten Eigenschaften im `info` Objekt ist keine ganze Zahl (einschließlich nicht-endlicher Werte).
    - Eine [Kalendereinheit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (Jahre, Monate, Wochen) hat einen absoluten Wert ≥ 2<sup>32</sup>.
    - Der nicht-kalenderbezogene Teil der Dauer (Tage und darunter), wenn er in Sekunden ausgedrückt wird, hat einen absoluten Wert ≥ 2<sup>53</sup>.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das `info` Objekt ist kein Objekt.
    - Alle anerkannten Eigenschaften im `info` Objekt sind `undefined`.

## Beispiele

### Verwendung von with()

Sie können `with()` verwenden, um eine fein abgestimmte Kontrolle über die Felder eines `Temporal.Duration` Objekts zu erreichen. Beispielsweise können Sie eine Dauer nur auf einer Einheit manuell [ausgleichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), was `round()` nicht bietet:

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
