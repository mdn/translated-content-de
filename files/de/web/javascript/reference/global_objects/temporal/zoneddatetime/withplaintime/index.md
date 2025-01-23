---
title: Temporal.ZonedDateTime.prototype.withPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withPlainTime
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`withPlainTime()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das dieses Datum-Uhrzeit-Paar mit dem Zeitanteil, der vollständig durch die neue Zeit ersetzt wird (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist), darstellt.

Diese Methode ersetzt alle Zeiteigenschaften und setzt sie auf `0`, wo Eigenschaften nicht spezifiziert sind. Wenn Sie nur einige der Zeiteigenschaften ersetzen möchten, verwenden Sie stattdessen die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode.

## Syntax

```js-nolint
withPlainTime()
withPlainTime(plainTime)
```

### Parameter

- `plainTime` {{optional_inline}}
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die die neue Zeit darstellt. Sie wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime` Objekt umgewandelt. Wenn nicht angegeben, wird der Zeitanteil auf den [Beginn des Tages](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay) gesetzt (was gewöhnlich `00:00:00` ist, es sei denn, es fehlt aufgrund von Versatzübergängen). [Disambiguierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) erfolgt immer im Modus `"compatible"`; wenn Sie einen anderen Modus verwenden möchten, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, bei dem der Datumsanteil und die Zeitzone von der ursprünglichen Datum-Uhrzeit übernommen werden und der Zeitanteil durch die neue Zeit ersetzt wird.

## Beispiele

### Verwendung von withPlainTime()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);

// You can pass a string
const newZDT = zdt.withPlainTime("13:45:00");
console.log(newZDT.toString()); // "2021-07-01T13:45:00-04:00[America/New_York]"

// You can only specify some time properties, and the rest default to 0;
// for the with() method, they would be copied from the original date-time
const newZDT2 = zdt.withPlainTime({ hour: 13 });
console.log(newZDT2.toString()); // "2021-07-01T13:00:00-04:00[America/New_York]"

// You can pass nothing to set the time to midnight
const newZDT3 = zdt.withPlainTime();
console.log(newZDT3.toString()); // "2021-07-01T00:00:00-04:00[America/New_York]"

// But, if midnight doesn't exist, it may be a different time
const zdt2 = Temporal.ZonedDateTime.from(
  "2015-10-18T12:00-02:00[America/Sao_Paulo]",
);
console.log(zdt2.withPlainTime().toString()); // "2015-10-18T01:00:00-02:00[America/Sao_Paulo]"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
