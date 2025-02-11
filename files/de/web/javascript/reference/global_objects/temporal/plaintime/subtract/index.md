---
title: Temporal.PlainTime.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract
l10n:
  sourceCommit: b4696c099a33202f1ce2063f14648de398703774
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`**-Methode der {{jsxref("Temporal.PlainTime")}}-Instanzen gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit darstellt, rückwärts verschoben um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), und dabei bei Bedarf die Uhr umwickelt.

Wenn Sie zwei Zeiten voneinander abziehen und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainTime/since", "since()")}} oder {{jsxref("Temporal/PlainTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer repräsentiert, die von dieser Zeit abgezogen wird. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch das ursprüngliche `PlainTime` angegebene Zeit minus der Dauer darstellt.

Das Abziehen einer Dauer entspricht dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), sodass alle gleichen Überlegungen gelten.

## Beispiele

### Eine Dauer abziehen

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.subtract({ hours: 1, minutes: 30 });
console.log(end.toString()); // 11:04:56
```

Weitere Beispiele finden Sie unter {{jsxref("Temporal/PlainTime/add", "add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
