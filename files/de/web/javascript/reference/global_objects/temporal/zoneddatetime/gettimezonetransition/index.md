---
title: Temporal.ZonedDateTime.prototype.getTimeZoneTransition()
short-title: getTimeZoneTransition()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/getTimeZoneTransition
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`getTimeZoneTransition()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das den nächstliegenden Zeitpunkt nach oder vor diesem Zeitpunkt darstellt, an dem sich der UTC-Offset der Zeitzone ändert (der zurückgegebene Zeitpunkt ist der erste nach der Änderung), oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, wie zum Beispiel ihr Muster für die Sommerzeit.

Beachten Sie, dass die für die Zukunft zurückgegebenen Zeitpunkte möglicherweise unzuverlässig sind, beispielsweise aufgrund von Änderungen in den Zeitzonendefinitionen.

## Syntax

```js-nolint
getTimeZoneTransition(direction)
getTimeZoneTransition(options)
```

### Parameter

- `direction`
  - : Ein String, der die [`direction`](#direction_2)-Option darstellt. Dies ist eine komfortable Überladung, daher ist `getTimeZoneTransition(direction)` äquivalent zu `getTimeZoneTransition({ direction })`, wobei `direction` ein String ist.
- `options`
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `direction`
      - : Gibt an, ob vor oder nach dem aktuellen Zeitpunkt gesucht werden soll. Muss entweder `"next"` oder `"previous"` sein.

### Rückgabewert

Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt mit dem Zeitpunkt `t`, so dass:

- Der Zeitzonen-Offset bei `t` unterscheidet sich von dem Offset eine Nanosekunde vor `t`.
- `t < this.epochNanoseconds`, wenn `direction` `"previous"` ist, oder `t > this.epochNanoseconds`, wenn `direction` `"next"` ist.
- Für alle Zeitpunkte zwischen `this.epochNanoseconds` und `t`, exklusiv, ist der Offset konstant.

Wenn es keinen solchen Übergang gibt, wird `null` zurückgegeben.

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
