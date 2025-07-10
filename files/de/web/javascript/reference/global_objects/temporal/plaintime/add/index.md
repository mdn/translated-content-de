---
title: Temporal.PlainTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit, vorwärts verschoben um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandlungsfähig ist), darstellt, wobei, falls nötig, das Zifferblatt überläuft.

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine hinzuzufügende Dauer zu dieser Zeit darstellt. Sie wird in ein `Temporal.Duration`-Objekt umgewandelt, wobei derselbe Algorithmus verwendet wird wie in {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die Zeit, spezifiziert durch das ursprüngliche `PlainTime`, plus der Dauer darstellt. Alle Einheiten über `hours` werden ignoriert, und wenn die Zeit über Mitternacht hinausgeht, wird sie auf den nächsten Tag zurückgesetzt.

Das Hinzufügen einer Dauer ist gleichbedeutend mit [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

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

### Zeitüberlauf

Wenn die Zeit über Mitternacht hinausgeht, wird sie auf den nächsten Tag übergesetzt:

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
