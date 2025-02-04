---
title: Temporal.ZonedDateTime.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/from
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.ZonedDateTime.from()`** erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datums-, Zeit- und Zeitzoneneigenschaften oder einer [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format)-Zeichenkette.

## Syntax

```js-nolint
Temporal.ZonedDateTime.from(info)
Temporal.ZonedDateTime.from(info, options)
```

### Parameter

- `info`
  - : Eines der folgenden:
    - Eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Eine [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format)-Zeichenkette, die ein Datum, optional eine Uhrzeit, optional einen Offset, eine Zeitzonenanmerkung und optional einen Kalender enthält.
    - Ein Objekt, das Eigenschaften enthält, die entweder von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) oder {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`) akzeptiert werden. Die Angaben sollten explizit ein Jahr (als `year` oder als `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag spezifizieren; andere sind optional und werden auf ihre Standardwerte gesetzt. Die folgenden Eigenschaften sollten ebenfalls angegeben werden:
      - `timeZone`
        - : Entweder eine Zeichenkette oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone repräsentiert. Wenn eine `Temporal.ZonedDateTime`-Instanz, wird deren Zeitzone verwendet. Wenn eine Zeichenkette, kann es sich um einen benannten Zeitzonen-Identifikator, einen Offset-Zeitzonen-Identifikator oder eine Datum-Uhrzeit-Zeichenkette handeln, die einen Zeitzonen-Identifikator oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen). Die Zeitangaben werden in dieser Zeitzone interpretiert.
      - `offset` {{optional_inline}}
        - : Eine Offset-Zeichenkette, im selben Format wie der [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format)-Offset, jedoch mit optionalen Sekunden und Untersekunden (`±HH:mm:ss.sssssssss`), die den Abstand zur UTC darstellt. Wenn weggelassen, wird er aus der Zeitzone und der Datum-Uhrzeit berechnet. `"Z"` ist nicht erlaubt.
- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `disambiguation` {{optional_inline}}
      - : Was zu tun ist, wenn die lokale Datum-Uhrzeit in der angegebenen Zeitzone mehrdeutig ist (es gibt mehr als einen Zeitpunkt mit dieser lokalen Zeit oder die lokale Zeit existiert nicht). Mögliche Werte sind `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Standardmäßig `"compatible"`. Weitere Informationen zu diesen Werten finden Sie unter [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).
    - `offset` {{optional_inline}}
      - : Was zu tun ist, wenn der Offset in `info` ausdrücklich angegeben wird, der Offset jedoch für die angegebene Zeitzone in der angegebenen lokalen Zeit ungültig ist. Mögliche Werte sind `"use"`, `"ignore"`, `"reject"` und `"prefer"`. Standardmäßig `"reject"`. Weitere Informationen zu diesen Werten finden Sie unter [Offset-Mehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity).
    - `overflow` {{optional_inline}}
      - : Eine Zeichenkette, die das Verhalten angibt, wenn ein Datumsbestandteil außerhalb des gültigen Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Der Datumsbestandteil wird auf den [gültigen Bereich begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Es wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Datumsbestandteil außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das das Datum und die Uhrzeit darstellt, die durch `info` im angegebenen `calendar` und `timeZone` festgelegt sind.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder eine Zeichenkette.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um ein Datum eindeutig zu bestimmen. In der Regel müssen Sie ein `year` (oder `era` und `eraYear`), ein `month` (oder `monthCode`) und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die denselben Bestandteil spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind ungültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des gültigen Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Informationen liegen nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage, oder etwa ±273,972.6 Jahre, ab dem Unix-Epoch umfasst.

## Beispiele

### Erstellen eines ZonedDateTime aus einem Objekt

```js
// Year + month + day + hour + minute + second
const zdt = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2021,
  month: 7,
  day: 1,
  hour: 12,
  minute: 34,
  second: 56,
});
console.log(zdt.toString()); // "2021-07-01T12:34:56-04:00[America/New_York]"
```

### Erstellen eines ZonedDateTime aus einer Zeichenkette

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56-04:00[America/New_York]",
);
console.log(zdt.toLocaleString()); // "7/1/2021, 12:34:56 PM EDT" (assuming en-US locale)

// Time given as UTC, and converted to local
const zdt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56Z[America/New_York]",
);
console.log(zdt2.toString()); // "2021-07-01T08:34:56-04:00[America/New_York]"
```

### Erstellen eines ZonedDateTime aus einer ISO 8601 / RFC 3339-Zeichenkette

Beachten Sie, dass `Temporal.ZonedDateTime.from()` ISO 8601-Zeichenketten ablehnt, die keinen Zeitzonen-Identifikator enthalten. Dies soll sicherstellen, dass die Zeitzone immer bekannt ist und verwendet werden kann, um verschiedene Offsets abzuleiten, wenn sich die lokale Zeit ändert.

Wenn Sie eine ISO 8601-Zeichenkette analysieren möchten, konstruieren Sie zuerst ein {{jsxref("Temporal.Instant")}}-Objekt und konvertieren Sie es dann in ein `Temporal.ZonedDateTime`-Objekt. Sie können jede Zeitzone angeben, auch wenn sie nicht mit dem ursprünglich in der Zeichenkette angegebenen Offset übereinstimmt, und die lokale Zeit wird entsprechend angepasst.

```js
const isoString = "2021-07-01T12:34:56+02:00";
const instant = Temporal.Instant.from(isoString);
const zdt = instant.toZonedDateTimeISO("America/New_York");
console.log(zdt.toString()); // "2021-07-01T06:34:56-04:00[America/New_York]"
```

### Lokale Zeitmehrdeutigkeit

Siehe [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) für eine Einführung in diese Situation.

```js
const localTimeNotExist = "2024-03-10T02:05:00[America/New_York]";
// For non-existent times, "compatible" is equivalent to "later"
const zdt = Temporal.ZonedDateTime.from(localTimeNotExist);
console.log(zdt.toString()); // "2024-03-10T03:05:00-04:00[America/New_York]"

const zdt2 = Temporal.ZonedDateTime.from(localTimeNotExist, {
  disambiguation: "earlier",
});
console.log(zdt2.toString()); // "2024-03-10T01:05:00-05:00[America/New_York]"

const localTimeAmbiguous = "2024-11-03T01:05:00[America/New_York]";
// For ambiguous times, "compatible" is equivalent to "earlier"
const zdt3 = Temporal.ZonedDateTime.from(localTimeAmbiguous);
console.log(zdt3.toString()); // "2024-11-03T01:05:00-04:00[America/New_York]"

const zdt4 = Temporal.ZonedDateTime.from(localTimeAmbiguous, {
  disambiguation: "later",
});
console.log(zdt4.toString()); // "2024-11-03T01:05:00-05:00[America/New_York]"
```

### Auflösen der Offset-Mehrdeutigkeit

Siehe [Offset-Mehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity) für eine Einführung in diese Situation.

```js
const offsetAmbiguous = "2019-12-23T12:00:00-02:00[America/Sao_Paulo]";

Temporal.ZonedDateTime.from(offsetAmbiguous);
// RangeError: date-time can't be represented in the given time zone
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "use" }).toString();
// "2019-12-23T11:00:00-03:00[America/Sao_Paulo]"
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "ignore" }).toString();
// "2019-12-23T12:00:00-03:00[America/Sao_Paulo]"
```

Für weitere Beispiele, insbesondere bezüglich verschiedener Kalender und Overflow-Einstellungen, siehe {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} und {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
