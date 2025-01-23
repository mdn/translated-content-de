---
title: Temporal.ZonedDateTime.prototype.getTimeZoneTransition()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/getTimeZoneTransition
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`getTimeZoneTransition()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das den nächstgelegenen Zeitpunkt nach oder vor diesem Zeitpunkt darstellt, zu dem sich der UTC-Offset der Zeitzone ändert (der zurückgegebene Zeitpunkt ist der erste Zeitpunkt nach der Änderung), oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie z.B. deren Sommerzeitmuster.

Beachten Sie, dass die über die Zukunft zurückgegebenen Zeitpunkte unzuverlässig sein können, zum Beispiel aufgrund von Änderungen in den Zeitzonendefinitionen.

## Syntax

```js-nolint
getTimeZoneTransition(direction)
getTimeZoneTransition(options)
```

### Parameter

- `direction`
  - : Ein String, der die [`direction`](#direction_2)-Option darstellt. Dies ist eine praktische Überladung, sodass `getTimeZoneTransition(direction)` äquivalent zu `round({ direction })` ist, wobei `direction` ein String ist.
- `options`
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `direction`
      - : Ob vor oder nach dem aktuellen Zeitpunkt gesucht werden soll. Muss einer der Werte `"next"` oder `"previous"` sein.

### Rückgabewert

Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt mit dem Zeitpunkt `t`, der folgende Bedingungen erfüllt:

- Der Zeitzonenoffset bei `t` unterscheidet sich vom Offset eine Nanosekunde vor `t`.
- `t < this.epochNanoseconds`, wenn `direction` `"previous"` ist, oder `t > this.epochNanoseconds`, wenn `direction` `"next"` ist.
- Für alle Zeitpunkte zwischen `this.epochNanoseconds` und `t`, exklusiv, bleibt der Offset konstant.

Wenn es keinen solchen Übergang gibt, wird `null` zurückgegeben.

## Beispiele

### Den nächsten Zeitzonenübergang finden

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
