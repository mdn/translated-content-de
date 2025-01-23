---
title: Temporal.ZonedDateTime.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/from
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.ZonedDateTime.from()`** erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datum-, Zeit- und Zeitzoneneigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) Zeichenkette.

## Syntax

```js-nolint
Temporal.ZonedDateTime.from(info)
Temporal.ZonedDateTime.from(info, options)
```

### Parameter

- `info`
  - : Eines der folgenden:
    - Eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die eine Kopie dieser Instanz erstellt.
    - Ein [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) Zeichenkette, die ein Datum, optional eine Uhrzeit, optional einen Offset, eine Zeitzonenanmerkung und optional einen Kalender enthält.
    - Ein Objekt, das Eigenschaften enthält, die entweder von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) oder {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`) akzeptiert werden. Die Informationen sollten explizit ein Jahr (als `year` oder als `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag angeben; andere sind optional und werden auf ihre Standardwerte gesetzt. Die folgenden Eigenschaften sollten ebenfalls bereitgestellt werden:
      - `timeZone`
        - : Entweder eine Zeichenkette oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die zu verwendende Zeitzone repräsentiert. Wenn eine `Temporal.ZonedDateTime`-Instanz, wird deren Zeitzone verwendet. Wenn eine Zeichenkette, kann dies ein benannter Zeitzonenbezeichner, ein Offset-Zeitzonenbezeichner oder eine Datum-Uhrzeit-Zeichenkette sein, die einen Zeitzonenbezeichner oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen). Die Zeiteigenschaften werden in dieser Zeitzone interpretiert.
      - `offset` {{optional_inline}}
        - : Eine Offset-Zeichenkette im selben Format wie der [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) Offset (`±HH:mm:ss.sssssssss`), die den Offset von UTC darstellt. Wenn weggelassen, wird er aus der Zeitzone und der Datum-Uhrzeit berechnet. `"Z"` ist nicht erlaubt.
- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `disambiguation` {{optional_inline}}
      - : Was zu tun ist, wenn die lokale Datum-Uhrzeit in der angegebenen Zeitzone mehrdeutig ist (es gibt mehr als einen Zeitpunkt mit einer solchen lokalen Zeit, oder die lokale Zeit existiert nicht). Mögliche Werte sind `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Standardmäßig `"compatible"`. Für weitere Informationen zu diesen Werten siehe [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).
    - `offset` {{optional_inline}}
      - : Was zu tun ist, wenn der Offset in `info` explizit angegeben ist, aber der Offset für die gegebene Zeitzone in der gegebenen lokalen Zeit ungültig ist. Mögliche Werte sind `"use"`, `"ignore"`, `"reject"` und `"prefer"`. Standardmäßig `"reject"`. Für weitere Informationen zu diesen Werten siehe [Offset-Mehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity).
    - `overflow` {{optional_inline}}
      - : Eine Zeichenkette, die das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das das durch `info` spezifizierte Datum und die Zeit im angegebenen `calendar` und `timeZone` darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - `info` ist kein Objekt oder keine Zeichenkette.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um ein Datum eindeutig zu bestimmen. Normalerweise müssen Sie ein `year` (oder `era` und `eraYear`), ein `month` (oder `monthCode`) und ein `day` bereitstellen.
- {{jsxref("RangeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.

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

### Erstellen eines ZonedDateTime aus einer ISO 8601- / RFC 3339-Zeichenkette

Beachten Sie, dass `Temporal.ZonedDateTime.from()` ISO 8601-Zeichenketten verwirft, die keinen Zeitzonenbezeichner enthalten. Dies soll sicherstellen, dass die Zeitzone immer bekannt ist und verwendet werden kann, um unterschiedliche Offsets abzuleiten, während sich die lokale Zeit ändert.

Wenn Sie eine ISO 8601-Zeichenkette analysieren möchten, konstruieren Sie zunächst ein {{jsxref("Temporal.Instant")}}-Objekt und wandeln es dann in ein `Temporal.ZonedDateTime`-Objekt um. Sie können jede Zeitzone angeben, auch wenn sie nicht mit dem ursprünglich in der Zeichenkette angegebenen Offset übereinstimmt, und die lokale Zeit wird entsprechend angepasst.

```js
const isoString = "2021-07-01T12:34:56+02:00";
const instant = Temporal.Instant.from(isoString);
const zdt = instant.toZonedDateTimeISO("America/New_York");
console.log(zdt.toString()); // "2021-07-01T06:34:56-04:00[America/New_York]"
```

### Lokale Zeit-Mehrdeutigkeit

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

### Auflösung von Offset-Mehrdeutigkeit

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

Für weitere Beispiele, insbesondere in Bezug auf verschiedene Kalender und Overflow-Einstellungen, siehe {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} und {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
