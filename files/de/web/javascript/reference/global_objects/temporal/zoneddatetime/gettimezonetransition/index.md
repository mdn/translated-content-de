---
title: Temporal.ZonedDateTime.prototype.getTimeZoneTransition()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/getTimeZoneTransition
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`getTimeZoneTransition()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein {{jsxref("Temporal.ZonedDateTime")}} Objekt zurück, das den nächsten oder vorhergehenden Punkt darstellt, an dem sich der UTC-Offset der Zeitzone ändert (der zurückgegebene Punkt ist der erste Punkt nach der Änderung), oder `null`, wenn es einen solchen Übergang nicht gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, wie etwa das Muster für Sommerzeit.

Bitte beachten Sie, dass die in Bezug auf die Zukunft zurückgegebenen Momente möglicherweise unzuverlässig sind, zum Beispiel durch Änderungen der Zeitzonendefinitionen.

## Syntax

```js-nolint
getTimeZoneTransition(direction)
getTimeZoneTransition(options)
```

### Parameter

- `direction`
  - : Ein String, der die [`direction`](#direction_2) Option darstellt. Dies ist eine bequeme Überladung, sodass `getTimeZoneTransition(direction)` äquivalent zu `round({ direction })` ist, wobei `direction` ein String ist.
- `options`
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `direction`
      - : Ob vor oder nach dem aktuellen Zeitpunkt gesucht werden soll. Muss einer von `"next"` oder `"previous"` sein.

### Rückgabewert

Ein {{jsxref("Temporal.ZonedDateTime")}} Objekt mit dem Zeitpunkt `t`, sodass:

- Der Zeitzonen-Offset bei `t` sich von dem Offset eine Nanosekunde vor `t` unterscheidet.
- `t < this.epochNanoseconds`, wenn `direction` `"previous"` ist, oder `t > this.epochNanoseconds`, wenn `direction` `"next"` ist.
- Für alle Zeitpunkte zwischen `this.epochNanoseconds` und `t`, exklusiv, ist der Offset konstant.

Falls es einen solchen Übergang nicht gibt, wird `null` zurückgegeben.

## Beispiele

### Finden des nächsten Zeitzonenübergangs

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
