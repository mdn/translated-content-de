---
title: Temporal.Duration.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`subtract()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt mit der Differenz zwischen dieser Dauer und einer gegebenen Dauer zurück. Dies entspricht dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [negierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Werts der anderen Dauer.

## Syntax

```js-nolint
subtract(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die zu dieser Dauer addiert werden soll. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt umgewandelt.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, das die Differenz dieser Dauer und `other` darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Entweder `this` oder `other` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat eine nicht-null `years`, `months` oder `weeks`), da Kalenderdauern ohne Kalender- und Zeitreferenz mehrdeutig sind.
    - Die Differenz von `this` und `other` überschreitet den maximal oder unterschreitet den minimal darstellbaren Zeitraum, welcher ±2<sup>53</sup> Sekunden beträgt.

## Beispiele

### Verwendung von subtract()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.subtract(d2);
console.log(d3.toString()); // "PT2H50M"
```

Für mehr Beispiele und Hinweise sehen Sie die [`add()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
