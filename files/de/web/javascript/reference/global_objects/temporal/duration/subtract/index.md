---
title: Temporal.Duration.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`subtract()`** Methode der {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, das die Differenz zwischen dieser Dauer und einer gegebenen Dauer darstellt. Sie ist äquivalent dazu, den [negierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Wert der anderen Dauer [hinzuzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add).

## Syntax

```js-nolint
subtract(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die zu dieser Dauer hinzugefügt werden soll. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, das die Differenz zwischen dieser Dauer und `other` darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Entweder `this` oder `other` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat ein nicht-null Jahre, Monate oder Wochen), da Kalenderdauern ohne Kalender- und Zeitreferenz mehrdeutig sind.
    - Die Differenz von `this` und `other` überschreitet die maximale oder unterschreitet die minimale darstellbare Dauer, die ±2<sup>53</sup> Sekunden beträgt.

## Beispiele

### Verwendung von subtract()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.subtract(d2);
console.log(d3.toString()); // "PT2H50M"
```

Für weitere Beispiele und Hinweise siehe die [`add()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
