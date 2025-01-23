---
title: Temporal.PlainTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/equals
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`**-Methode von Instanzen von {{jsxref("Temporal.PlainTime")}} gibt `true` zurück, wenn diese Zeit in ihrem Wert äquivalent zu einer anderen Zeit ist (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden anhand ihrer Zeitwerte verglichen. Es ist gleichbedeutend mit `Temporal.PlainTime.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}}-Instanz, die die andere zu vergleichende Zeit darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime`-Objekt konvertiert.

### Rückgabewert

`true`, wenn diese Zeit sowohl in ihrem Zeitwert als auch in ihrem Kalender gleich `other` ist, andernfalls `false`.

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
