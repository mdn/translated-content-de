---
title: Temporal.PlainTime.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`subtract()`** Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt ein neues `Temporal.PlainTime` Objekt zurück, das die Zeit darstellt, die um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) zurückverschoben wurde, wobei bei Bedarf die Uhr umgangen wird.

Wenn Sie zwei Zeiten subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainTime/since", "since()")}} oder {{jsxref("Temporal/PlainTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine von dieser Zeit abzuziehende Dauer repräsentiert. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.

### Rückgabewert

Ein neues `Temporal.PlainTime` Objekt, das die durch das ursprüngliche `PlainTime` angegebene Zeit minus der Dauer darstellt.

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

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
