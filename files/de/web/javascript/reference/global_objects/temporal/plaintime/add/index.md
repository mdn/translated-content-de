---
title: Temporal.PlainTime.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von Instanzen von {{jsxref("Temporal.PlainTime")}} gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Uhrzeit, verschoben um eine angegebene Dauer (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}), repräsentiert und bei Bedarf um die Uhr herumschlägt.

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine zu dieser Zeit hinzuzufügende Dauer darstellt. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch das ursprüngliche `PlainTime` angegebene Zeit plus die Dauer darstellt. Alle Einheiten über `hours` werden ignoriert, und wenn die Zeit über Mitternacht hinausgeht, schlägt sie zum nächsten Tag um.

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

### Zeitumbruch

Wenn die Zeit über Mitternacht hinausgeht, schlägt sie zum nächsten Tag um:

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
