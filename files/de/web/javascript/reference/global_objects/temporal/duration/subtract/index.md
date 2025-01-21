---
title: Temporal.Duration.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`subtract()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, das die Differenz zwischen dieser Dauer und einer angegebenen Dauer darstellt. Es ist gleichbedeutend mit dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [invertierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Wertes der anderen Dauer.

## Syntax

```js-nolint
subtract(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die zu dieser Dauer hinzugefügt werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, das die Differenz dieser Dauer und `other` darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Entweder `this` oder `other` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat nicht-null `years`, `months` oder `weeks`), da Kalenderdauern ohne einen Kalender- und Zeitbezug unklar sind.
    - Die Differenz von `this` und `other` überschreitet die maximal oder unterschreitet die minimal darstellbare Dauer, die ±2<sup>53</sup> Sekunden beträgt.

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
