---
title: Temporal.Duration.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, das die Differenz zwischen dieser Dauer und einer angegebenen Dauer darstellt. Es ist gleichbedeutend mit [adding](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) der [negated](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Wert der anderen Dauer.

## Syntax

```js-nolint
subtract(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine hinzuzufügende Dauer zu dieser Dauer darstellt. Es wird in ein `Temporal.Duration` Objekt umgewandelt, indem derselbe Algorithmus wie bei {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} verwendet wird.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, das die Differenz dieser Dauer und `other` darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Entweder `this` oder `other` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (es hat eine nicht null `years`, `months` oder `weeks`), da Kalenderdauern ohne einen Kalender und Zeitbezug mehrdeutig sind.
    - Die Differenz von `this` und `other` übersteigt die maximal darstellbare Dauer oder unterschreitet die minimal darstellbare Dauer, die ±2<sup>53</sup> Sekunden beträgt.

## Beispiele

### Verwendung von subtract()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.subtract(d2);
console.log(d3.toString()); // "PT2H50M"
```

Für weitere Beispiele und Besonderheiten siehe die [`add()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
