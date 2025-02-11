---
title: Temporal.ZonedDateTime.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/from
l10n:
  sourceCommit: b4696c099a33202f1ce2063f14648de398703774
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.ZonedDateTime.from()`** erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, aus einem Objekt mit Eigenschaften für Datum, Uhrzeit und Zeitzone, oder aus einer [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format)-Zeichenkette.

## Syntax

```js-nolint
Temporal.ZonedDateTime.from(info)
Temporal.ZonedDateTime.from(info, options)
```

### Parameter

- `info`
  - : Einer der folgenden Werte:
    - Eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, um eine Kopie der Instanz zu erstellen.
    - Eine [RFC 9557 format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format)-Zeichenkette, die ein Datum, optional eine Uhrzeit, optional einen Offset, eine Zeitzonenanmerkung und optional einen Kalender enthält.
    - Ein Objekt mit Eigenschaften, die von entweder {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) oder {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`) akzeptiert werden. Die Informationen sollten explizit ein Jahr (als `year` oder als `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag angeben; andere sind optional und werden auf ihre Standardwerte gesetzt. Außerdem sollten folgende Eigenschaften bereitgestellt werden:
      - `timeZone`
        - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Wenn es eine `Temporal.ZonedDateTime`-Instanz ist, wird deren Zeitzone verwendet. Falls ein String, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder einen Datum-Uhrzeit-String mit einem Zeitzonenbezeichner oder einem Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen). Die Zeitangaben werden in dieser Zeitzone interpretiert.
      - `offset` {{optional_inline}}
        - : Ein Offset-String, im selben Format wie der [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format)-Offset, jedoch mit optionalen Sekunden und Subsekunden (`±HH:mm:ss.sssssssss`), der den Offset von UTC darstellt. Falls nicht angegeben, wird er aus der Zeitzone und dem Datum-Uhrzeit berechnet. `"Z"` ist nicht erlaubt.
- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `disambiguation` {{optional_inline}}
      - : Was zu tun ist, wenn das lokale Datum und die lokale Uhrzeit in der angegebenen Zeitzone mehrdeutig sind (es gibt mehr als einen Zeitpunkt mit solchem lokalen Datum und solcher Uhrzeit, oder die lokale Uhrzeit existiert nicht). Mögliche Werte sind `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Standardwert ist `"compatible"`. Weitere Informationen zu diesen Werten finden Sie unter [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).
    - `offset` {{optional_inline}}
      - : Was zu tun ist, wenn der Offset explizit in `info` angegeben wird, aber für die angegebene Zeitzone in der angegebenen lokalen Zeit ungültig ist. Mögliche Werte sind `"use"`, `"ignore"`, `"reject"` und `"prefer"`. Standardwert ist `"reject"`. Weitere Informationen zu diesen Werten finden Sie unter [Offset-Mehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity).
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datumskomponente außerhalb des zulässigen Bereichs liegt (wenn das Objekt `info` verwendet wird). Mögliche Werte sind:
        - `"constrain"` (Standardwert)
          - : Die Datumskomponente wird auf den gültigen Bereich [geklammert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das das durch `info` und die angegebenen `calendar`- und `timeZone`-Werte definierte Datum und die Zeit repräsentiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in folgenden Fällen ausgelöst:
    - `info` ist kein Objekt oder keine Zeichenkette.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um ein Datum eindeutig zu bestimmen. Normalerweise müssen Sie ein `year` (oder `era` und `eraYear`), einen `month` (oder `monthCode`) und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in folgenden Fällen ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nichtnumerischen Eigenschaften sind ungültig; beispielsweise ist `monthCode` kein gültiger Monatscode in diesem Kalender.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des zulässigen Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Wanduhrzeit ist in der Zeitzone mehrdeutig, und `options.disambiguation` ist auf `"reject"` gesetzt.
    - Die Informationen liegen nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273,972.6 Jahre ab der Unix-Epoche umfasst.

## Beispiele

### Erstellung eines ZonedDateTime aus einem Objekt

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

### Erstellung eines ZonedDateTime aus einer Zeichenkette

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

### Erstellung eines ZonedDateTime aus einer ISO 8601 / RFC 3339-Zeichenkette

Beachten Sie, dass `Temporal.ZonedDateTime.from()` ISO 8601-Zeichenketten ablehnt, die keinen Zeitzonenbezeichner enthalten. Dies stellt sicher, dass die Zeitzone immer bekannt ist und verwendet werden kann, um verschiedene Offsets abzuleiten, wenn sich die lokale Zeit ändert.

Wenn Sie eine ISO 8601-Zeichenkette analysieren möchten, erstellen Sie zuerst ein {{jsxref("Temporal.Instant")}}-Objekt und konvertieren Sie es dann in ein `Temporal.ZonedDateTime`-Objekt. Sie können jede Zeitzone angeben, selbst wenn sie nicht mit dem im ursprünglichen String angegebenen Offset übereinstimmt, und die lokale Zeit wird entsprechend angepasst.

```js
const isoString = "2021-07-01T12:34:56+02:00";
const instant = Temporal.Instant.from(isoString);
const zdt = instant.toZonedDateTimeISO("America/New_York");
console.log(zdt.toString()); // "2021-07-01T06:34:56-04:00[America/New_York]"
```

### Lokale Zeit-Mehrdeutigkeit

Weitere Informationen zu diesem Thema finden Sie unter [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

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

### Auflösung von Offset-Mehrdeutigkeit

Weitere Informationen zu diesem Thema finden Sie unter [Offset-Mehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity).

```js
const offsetAmbiguous = "2019-12-23T12:00:00-02:00[America/Sao_Paulo]";

Temporal.ZonedDateTime.from(offsetAmbiguous);
// RangeError: date-time can't be represented in the given time zone
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "use" }).toString();
// "2019-12-23T11:00:00-03:00[America/Sao_Paulo]"
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "ignore" }).toString();
// "2019-12-23T12:00:00-03:00[America/Sao_Paulo]"
```

Für weitere Beispiele, insbesondere in Bezug auf unterschiedliche Kalender und Überlauf-Einstellungen, siehe {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} und {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
