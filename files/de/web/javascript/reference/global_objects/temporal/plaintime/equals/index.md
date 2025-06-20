---
title: Temporal.PlainTime.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/equals
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`** Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt `true` zurück, wenn diese Zeit gleichwertig in Wert zu einer anderen Zeit ist (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden anhand ihrer Zeitwerte verglichen. Es ist äquivalent zu `Temporal.PlainTime.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die die andere Zeit, die verglichen werden soll, darstellt. Es wird unter Verwendung desselben Algorithmus zu einem `Temporal.PlainTime` Objekt konvertiert wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

### Rückgabewert

`true`, wenn diese Zeit sowohl in ihrem Zeitwert als auch in ihrem Kalender gleich `other` ist, `false` andernfalls.

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
