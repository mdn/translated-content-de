---
title: Temporal.ZonedDateTime.prototype.getTimeZoneTransition()
short-title: getTimeZoneTransition()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/getTimeZoneTransition
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`getTimeZoneTransition()`** von Instanzen des Objekts {{jsxref("Temporal.ZonedDateTime")}} gibt ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das den nächstgelegenen Zeitpunkt nach oder vor diesem Moment darstellt, zu dem sich der UTC-Offset der Zeitzone ändert (der zurückgegebene Moment ist der erste Moment nach der Änderung), oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, wie zum Beispiel das Muster der Sommerzeit.

Beachten Sie, dass zurückgegebene Momente in der Zukunft möglicherweise nicht zuverlässig sind, zum Beispiel aufgrund von Änderungen in den Zeitzonendefinitionen.

## Syntax

```js-nolint
getTimeZoneTransition(direction)
getTimeZoneTransition(options)
```

### Parameter

- `direction`
  - : Ein String, der die [`direction`](#direction_2)-Option darstellt. Dies ist eine praktische Überladung, sodass `getTimeZoneTransition(direction)` äquivalent zu `getTimeZoneTransition({ direction })` ist, wobei `direction` ein String ist.
- `options`
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `direction`
      - : Ob vor oder nach dem aktuellen Moment gesucht werden soll. Muss einer von `"next"` oder `"previous"` sein.

### Rückgabewert

Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt mit dem Moment `t`, sodass:

- Der Zeitzonenoffset bei `t` sich von dem Offset eine Nanosekunde vor `t` unterscheidet.
- `t < this.epochNanoseconds`, wenn `direction` `"previous"` ist, oder `t > this.epochNanoseconds`, wenn `direction` `"next"` ist.
- Für alle Momente zwischen `this.epochNanoseconds` und `t`, ausschließlich, ist der Offset konstant.

Falls es keinen solchen Übergang gibt, wird `null` zurückgegeben.

## Beispiele

### Die nächste Zeitzonenänderung finden

```js
const dt = Temporal.ZonedDateTime.from("2024-01-01T00-05:00[America/New_York]");
const transition = dt.getTimeZoneTransition("next");
console.log(transition.toString()); // "2024-03-10T03:00:00-04:00[America/New_York]"

const transition2 = transition.getTimeZoneTransition("next");
console.log(transition2.toString()); // "2024-11-03T01:00:00-05:00[America/New_York]"

const transition3 = dt.getTimeZoneTransition("previous");
console.log(transition3.toString()); // "2023-11-05T01:00:00-05:00[America/New_York]"

const dt2 = Temporal.ZonedDateTime.from("2024-01-01T00Z[UTC]");
console.log(dt2.getTimeZoneTransition("next")); // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
