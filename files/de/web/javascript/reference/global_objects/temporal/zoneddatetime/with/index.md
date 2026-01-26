---
title: Temporal.ZonedDateTime.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`with()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diesen Zeitpunkt mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal` Objekte unveränderlich gestaltet sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Datums und der Uhrzeit.

Um die Eigenschaft {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} zu ersetzen, verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}. Um die Eigenschaft {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zu ersetzen, verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} erkannten Eigenschaften (außer `calendar` und `timeZone`) enthält: `day`, `era` und `eraYear`, `hour`, `microsecond`, `millisecond`, `minute`, `month`, `monthCode`, `nanosecond`, `offset`, `second`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Datums und der ursprünglichen Uhrzeit. Sie müssen nur eines von `month` oder `monthCode` und eines von `era` und `eraYear` oder `year` angeben, der andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `disambiguation` {{optional_inline}}
      - : Was zu tun ist, wenn die lokale Datum-Uhrzeit in der gegebenen Zeitzone mehrdeutig ist (es gibt mehr als einen Zeitpunkt mit dieser lokalen Zeit oder die lokale Zeit existiert nicht). Mögliche Werte sind `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Standardmäßig `"compatible"`. Für weitere Informationen über diese Werte siehe [Mehrdeutigkeit und Lücken von der lokalen Zeit zur UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).
    - `offset` {{optional_inline}}
      - : Was zu tun ist, wenn der Offset in `info` explizit angegeben wird, aber für die gegebene Zeitzone zu der gegebenen lokalen Zeit ungültig ist. Mögliche Werte sind `"use"`, `"ignore"`, `"reject"` und `"prefer"`. Standardmäßig `"prefer"`. Für weitere Informationen über diese Werte siehe [Offset-Mehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity).
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten beschreibt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden, und die restlichen Felder vom ursprünglichen Zeitpunkt kopiert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.
    - Die durch die bereitgestellten Eigenschaften dargestellte Wanduhrenzeit ist in der Zeitzone mehrdeutig, und `options.disambiguation` ist auf `"reject"` gesetzt.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche beträgt.

## Beispiele

### Verwendung von with()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);
const newZDT = zdt.with({ hour: 13 });
console.log(newZDT.toString()); // "2021-07-01T13:34:56-04:00[America/New_York]"
```

Für weitere Beispiele siehe die Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

### Offset während Datumsänderungen

Standardmäßig ist die Option `offset` auf `"prefer"` gesetzt, was bedeutet, dass wir den ursprünglichen Offset (oder den in `info` bereitgestellten) verwenden, wenn er gültig ist, und andernfalls neu berechnen. Das bedeutet, wenn Sie auf ein anderes Datum setzen, das aufgrund einer Sommerzeitumstellung einen anderen Offset hat, wird der Offset neu berechnet:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ month: 12 });
// The offset is recalculated to -05:00
console.log(newZDT.toString()); // "2021-12-01T12:00:00-05:00[America/New_York]"
```

Und wenn Sie die Zeit innerhalb der Sommerzeitumstellung einstellen, wird der Offset verwendet, um die Mehrdeutigkeit zu lösen:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2024-11-02T01:05:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ day: 3 });
console.log(newZDT.toString()); // "2024-11-03T01:05:00-04:00[America/New_York]"

const zdt2 = Temporal.ZonedDateTime.from(
  "2024-11-04T01:05:00-05:00[America/New_York]",
);
const newZDT2 = zdt2.with({ day: 3 });
console.log(newZDT2.toString()); // "2024-11-03T01:05:00-05:00[America/New_York]"
```

Wenn Sie `offset: "use"` verwenden, wird der Offset als solcher verwendet, um zuerst die genaue Zeit zu erhalten, und _dann_ wird der Offset neu berechnet:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ month: 12 }, { offset: "use" });
// The offset is recalculated to -05:00, but the wall-clock time changes
console.log(newZDT.toString()); // "2021-12-01T11:00:00-05:00[America/New_York]"
```

Sie können auch `offset: "reject"` verwenden, um einen Fehler auszulösen, wenn der ursprüngliche Offset ungültig ist, wodurch ein expliziter neuer Offset angegeben werden muss:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-04:00[America/New_York]",
);
zdt.with({ month: 12 }, { offset: "reject" });
// RangeError: date-time can't be represented in the given time zone
zdt.with({ month: 12, offset: "-05:00" }, { offset: "reject" }).toString();
// "2021-12-01T12:00:00-05:00[America/New_York]"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
