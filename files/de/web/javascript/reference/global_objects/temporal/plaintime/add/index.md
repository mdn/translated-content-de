---
title: Temporal.PlainTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`** Methode von Instanzen von {{jsxref("Temporal.PlainTime")}} gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit verschoben um eine gegebene Dauer darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), wobei wenn nötig der Tag umschlagen wird.

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine hinzuzufügende Dauer zu dieser Zeit darstellt. Diese wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch das ursprüngliche `PlainTime` angegebene Zeit plus der Dauer darstellt. Alle Einheiten über `hours` hinaus werden ignoriert, und wenn die Zeit über Mitternacht hinausgeht, wird sie auf den nächsten Tag umgeschlagen.

Eine Dauer hinzuzufügen ist gleichbedeutend mit dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract) der [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) derselben.

## Beispiele

### Eine Dauer hinzufügen

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

### Zeitüberschlag

Wenn die Zeit über Mitternacht hinausgeht, wird sie auf den nächsten Tag umgeschlagen:

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
