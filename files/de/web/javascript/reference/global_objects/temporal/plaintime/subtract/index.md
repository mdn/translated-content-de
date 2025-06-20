---
title: Temporal.PlainTime.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`subtract()`** von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine angegebene Dauer in der Vergangenheit verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), wobei es bei Bedarf um die Uhr wickelt.

Wenn Sie zwei Zeiten subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainTime/since", "since()")}} oder {{jsxref("Temporal/PlainTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine von dieser Zeit abzuziehende Dauer darstellt. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die Zeit darstellt, die durch die ursprüngliche `PlainTime` minus der Dauer bestimmt wird.

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add) seiner [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

## Beispiele

### Subtrahieren einer Dauer

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
