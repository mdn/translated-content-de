---
title: Temporal.PlainTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/equals
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt `true` zurück, wenn diese Zeit einem anderen Zeitpunkt entspricht (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden anhand ihrer Zeitwerte verglichen. Es ist äquivalent zu `Temporal.PlainTime.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die den anderen Zeitpunkt repräsentiert, der verglichen werden soll. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime` Objekt konvertiert.

### Rückgabewert

`true`, wenn diese Zeit sowohl im Zeitwert als auch im Kalender gleich `other` ist, `false` andernfalls.

## Beispiele

### Verwendung von equals()

```js
const time1 = Temporal.PlainTime.from("12:34:56");
const time2 = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
console.log(time1.equals(time2)); // true

const time3 = Temporal.PlainTime.from("00:34:56");
console.log(time1.equals(time3)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
