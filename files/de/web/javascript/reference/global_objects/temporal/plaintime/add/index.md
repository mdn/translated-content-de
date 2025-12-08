---
title: Temporal.PlainTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`add()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) nach vorne verschoben darstellt und wenn nötig den Tag wechselt.

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine Dauer repräsentiert, die zu dieser Zeit hinzugefügt werden soll. Sie wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch die ursprüngliche `PlainTime` angegebene Zeit plus der Dauer repräsentiert. Alle Einheiten über `Stunden` hinaus werden ignoriert, und wenn die Zeit über Mitternacht hinausgeht, geht sie am nächsten Tag weiter.

Das Hinzufügen einer Dauer entspricht dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Hinzufügen einer Dauer

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.add({ hours: 1, minutes: 30 });
console.log(end.toString()); // 14:04:56

const end2 = start.add({ hours: -1, minutes: -30 });
console.log(end2.toString()); // 11:04:56

const distance = Temporal.PlainTime.from("00:00:00").until("01:23:45"); // 1h 23m 45s
const end3 = start.add(distance);
console.log(end3.toString()); // 13:58:41
```

### Zeitübertragung

Wenn die Zeit über Mitternacht hinausgeht, wechselt sie zum nächsten Tag:

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.add({ hours: 12 });
console.log(end.toString()); // 00:34:56
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
