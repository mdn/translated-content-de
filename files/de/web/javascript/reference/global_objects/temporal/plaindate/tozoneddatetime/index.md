---
title: Temporal.PlainDate.prototype.toZonedDateTime()
short-title: toZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toZonedDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toZonedDateTime()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues {{jsxref("Temporal.ZonedDateTime")}} Objekt zurück, das dieses Datum, eine angegebene Zeit und eine angegebene Zeitzone im gleichen Kalendersystem darstellt.

## Syntax

```js-nolint
toZonedDateTime(timeZone)
toZonedDateTime(info)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die [`timeZone`](#timezone_2) Option darstellt. Dies ist eine bequeme Überladung, sodass `toZonedDateTime(timeZone)` äquivalent zu `toZonedDateTime({ timeZone })` ist, wobei `timeZone` ein String oder {{jsxref("Temporal.ZonedDateTime")}} ist. Diese Überladung wird gewählt, wenn das erste Argument kein Objekt ist oder die `timeZone`-Eigenschaft des Objekts `undefined` ist (da `ZonedDateTime` Instanzen stattdessen eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} Eigenschaft haben).
- `info`
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `plainTime` {{optional_inline}}
      - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die die Zeitkomponente des resultierenden `ZonedDateTime` darstellt. Es wird in ein `Temporal.PlainTime` Objekt umgewandelt, indem derselbe Algorithmus wie bei {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} verwendet wird. Standardmäßig wird die erste gültige Zeit in dieser Zeitzone an diesem Kalenderdatum verwendet, die normalerweise `"00:00:00"` ist, sich aber unterscheiden kann, wenn beispielsweise die Sommerzeit Mitternacht überspringt.
    - `timeZone`
      - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die zu verwendende Zeitzone darstellt. Wenn eine `Temporal.ZonedDateTime` Instanz vorliegt, wird deren Zeitzone verwendet. Wenn ein String, kann es sich um einen benannten Zeitzonenidentifikator, einen Offset-Zeitzonenidentifikator oder einen Datum-Zeit-String mit einem Zeitzonenidentifikator oder einem Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das das durch dieses Datum, `plainTime` und `timeZone` angegebene Datum und die Zeit im Kalendersystem dieses Datums darstellt.

Im Fall von [Mehrdeutigkeiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) wird immer das `compatible` Verhalten verwendet: wenn die Zeit in eine Lücke fällt, bewegen wir uns um die Länge der Lücke vorwärts; wenn die Zeit in eine Mehrdeutigkeit fällt, wählen wir die frühere der beiden Möglichkeiten. Das bedeutet, dass das resultierende `ZonedDateTime` möglicherweise ein potenziell anderes Datum oder eine andere Uhrzeit als die Eingabe hat.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` weder ein String noch eine `Temporal.ZonedDateTime` Instanz ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `timeZone` ein String ist, der kein gültiger Zeitzonenidentifikator ist.

## Beispiele

### Verwendung von toZonedDateTime()

```js
const summer = Temporal.PlainDate.from("2021-07-01");
// Just time zone
const summerTime = summer.toZonedDateTime("America/New_York");
console.log(summerTime.toString()); // 2021-07-01T00:00:00-04:00[America/New_York]

const winter = Temporal.PlainDate.from("2021-01-01");
// Time zone and time
const winterTime = winter.toZonedDateTime({
  plainTime: "12:34:56",
  timeZone: "America/New_York",
});
console.log(winterTime.toString()); // 2021-01-01T12:34:56-05:00[America/New_York]

const spring = Temporal.PlainDate.from("2021-03-01");
// Time zone as object and time as object
const springTime = spring.toZonedDateTime({
  plainTime: summerTime.toPlainTime(),
  timeZone: winterTime,
});
console.log(springTime.toString()); // 2021-03-01T00:00:00-05:00[America/New_York]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
