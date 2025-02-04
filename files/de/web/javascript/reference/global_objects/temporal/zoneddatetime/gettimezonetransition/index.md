---
title: Temporal.ZonedDateTime.prototype.getTimeZoneTransition()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/getTimeZoneTransition
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`getTimeZoneTransition()`** von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein {{jsxref("Temporal.ZonedDateTime")}} Objekt zurück, das den nächsten oder vorherigen Zeitpunkt repräsentiert, an dem sich der UTC-Offset der Zeitzone ändert (der zurückgegebene Zeitpunkt ist der erste nach der Änderung), oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, beispielsweise das Muster der Sommerzeit.

Beachten Sie, dass zurückgegebene Zeitpunkte in der Zukunft möglicherweise unzuverlässig sind, zum Beispiel aufgrund von Änderungen an den Zeitzonendefinitionen.

## Syntax

```js-nolint
getTimeZoneTransition(direction)
getTimeZoneTransition(options)
```

### Parameter

- `direction`
  - : Ein String, der die [`direction`](#direction_2) Option repräsentiert. Dies ist eine bequeme Überladung, sodass `getTimeZoneTransition(direction)` gleichbedeutend ist mit `getTimeZoneTransition({ direction })`, wobei `direction` ein String ist.
- `options`
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `direction`
      - : Ob vor oder nach dem aktuellen Zeitpunkt gesucht werden soll. Muss entweder `"next"` oder `"previous"` sein.

### Rückgabewert

Ein {{jsxref("Temporal.ZonedDateTime")}} Objekt mit dem Zeitpunkt `t`, so dass:

- Der Zeitzonen-Offset bei `t` sich von dem Offset eine Nanosekunde vor `t` unterscheidet.
- `t < this.epochNanoseconds`, wenn `direction` `"previous"` ist, oder `t > this.epochNanoseconds`, wenn `direction` `"next"` ist.
- Für alle Zeitpunkte zwischen `this.epochNanoseconds` und `t`, ausschließlich, ist der Offset konstant.

Wenn es keinen solchen Übergang gibt, wird `null` zurückgegeben.

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
