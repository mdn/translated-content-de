---
title: Temporal.PlainTime.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`subtract()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann) rückwärts verschoben darstellt und, falls erforderlich, die Uhr umwickelt.

Wenn Sie zwei Zeiten subtrahieren möchten, um eine Dauer zu erhalten, verwenden Sie stattdessen {{jsxref("Temporal/PlainTime/since", "since()")}} oder {{jsxref("Temporal/PlainTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine zu subtrahierende Dauer von dieser Zeit darstellt. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch die ursprüngliche `PlainTime` angegebene Zeit minus der Dauer darstellt.

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

## Beispiele

### Subtrahieren einer Dauer

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
