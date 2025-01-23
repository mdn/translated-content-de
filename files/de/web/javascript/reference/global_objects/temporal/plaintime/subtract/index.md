---
title: Temporal.PlainTime.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`**-Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Uhrzeit darstellt, um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben, bei Bedarf um die Uhr gewickelt.

Wenn Sie zwei Zeiten subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainTime/since", "since()")}} oder {{jsxref("Temporal/PlainTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die von dieser Uhrzeit subtrahiert werden soll. Diese wird in ein `Temporal.Duration`-Objekt umgewandelt, wobei derselbe Algorithmus wie in {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} verwendet wird.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch das ursprüngliche `PlainTime` angegebene Zeit, minus der Dauer darstellt.

Das Subtrahieren einer Dauer entspricht dem [Addieren](Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add) ihrer [Negation](Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), sodass alle gleichen Überlegungen gelten.

## Beispiele

### Subtraktion einer Dauer

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.subtract({ hours: 1, minutes: 30 });
console.log(end.toString()); // 11:04:56
```

Für weitere Beispiele siehe {{jsxref("Temporal/PlainTime/add", "add()")}}.

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
