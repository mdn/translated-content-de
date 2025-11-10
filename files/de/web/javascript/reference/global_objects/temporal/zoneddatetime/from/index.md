---
title: Temporal.ZonedDateTime.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/from
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die statische Methode **`Temporal.ZonedDateTime.from()`** erstellt ein neues `Temporal.ZonedDateTime` Objekt aus einem anderen `Temporal.ZonedDateTime` Objekt, einem Objekt mit Datums-, Zeit- und Zeitzoneneigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) String.

## Syntax

```js-nolint
Temporal.ZonedDateTime.from(info)
Temporal.ZonedDateTime.from(info, options)
```

### Parameter

- `info`
  - : Eines der folgenden:
    - Eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) String, der ein Datum enthält, optional eine Uhrzeit, optional einen Versatz, eine Zeitzonenanmerkung und optional einen Kalender.
    - Ein Objekt, das Eigenschaften enthält, die entweder von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) oder von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`) akzeptiert werden. Die Informationen sollten explizit ein Jahr (als `year` oder als `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag angeben; andere sind optional und werden auf ihre Standardwerte gesetzt. Auch folgende Eigenschaften sollten bereitgestellt werden:
      - `timeZone`
        - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die zu verwendende Zeitzone repräsentiert. Wenn eine `Temporal.ZonedDateTime` Instanz, wird ihre Zeitzone verwendet. Wenn ein String, kann es ein benannter Zeitzonen-Identifikator, ein Versatz-Zeitzonen-Identifikator oder ein Datum-Zeit-String sein, der einen Zeitzonen-Identifikator oder einen Versatz enthält (siehe [Zeitzonen und Versätze](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen). Die Zeiteigenschaften werden in dieser Zeitzone interpretiert.
      - `offset` {{optional_inline}}
        - : Ein Versatz-String im selben Format wie der [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) Versatz, aber mit optionalen Sekunden- und Untersekundenkomponenten (`±HH:mm:ss.sssssssss`), der den Versatz von UTC repräsentiert. Wenn weggelassen, wird er aus der Zeitzone und dem Datum-Zeit berechnet. `"Z"` ist nicht erlaubt.
- `options` {{optional_inline}}
  - : Ein Objekt, das einige oder alle der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `disambiguation` {{optional_inline}}
      - : Was zu tun ist, wenn die lokale Datum-Zeit in der gegebenen Zeitzone mehrdeutig ist (es gibt mehr als einen Zeitpunkt mit solch lokaler Zeit, oder die lokale Zeit existiert nicht). Mögliche Werte sind `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Standardwert ist `"compatible"`. Für mehr Informationen über diese Werte siehe [Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).
    - `offset` {{optional_inline}}
      - : Was zu tun ist, wenn der Versatz in `info` explizit angegeben, aber ungültig für die gegebene Zeitzone in der angegebenen lokalen Zeit ist. Mögliche Werte sind `"use"`, `"ignore"`, `"reject"` und `"prefer"`. Standardwert ist `"reject"`. Für mehr Informationen über diese Werte siehe [Versatzmehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity).
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datums-Komponente außerhalb des Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das das durch `info` angegebene Datum und die Zeit im angegebenen `calendar` und `timeZone` darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind nicht ausreichend, um ein Datum eindeutig zu bestimmen. Sie müssen normalerweise ein `year` (oder `era` und `eraYear`), einen `month` (oder `monthCode`) und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatsschlüssel in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Uhrzeit ist in der Zeitzone mehrdeutig und `options.disambiguation` ist auf `"reject"` gesetzt.
    - Die Info befindet sich nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273,972.6 Jahre vom Unix-Epoch umfasst.

## Beispiele

### Erstellen einer ZonedDateTime aus einem Objekt

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

### Erstellen einer ZonedDateTime aus einem String

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

### Erstellen einer ZonedDateTime aus einem ISO 8601 / RFC 3339 String

Beachten Sie, dass `Temporal.ZonedDateTime.from()` ISO 8601 Strings ablehnt, die keinen Zeitzonen-Identifikator enthalten. Dies stellt sicher, dass die Zeitzone immer bekannt ist und verwendet werden kann, um verschiedene Versätze abzuleiten, wenn sich die lokale Zeit ändert.

Wenn Sie einen ISO 8601 String parsen möchten, erstellen Sie zuerst ein {{jsxref("Temporal.Instant")}} Objekt und konvertieren Sie es dann in ein `Temporal.ZonedDateTime` Objekt. Sie können jede Zeitzone angeben, auch wenn sie nicht mit dem ursprünglich im String angegebenen Versatz übereinstimmt, und die lokale Zeit wird entsprechend angepasst.

```js
const isoString = "2021-07-01T12:34:56+02:00";
const instant = Temporal.Instant.from(isoString);
const zdt = instant.toZonedDateTimeISO("America/New_York");
console.log(zdt.toString()); // "2021-07-01T06:34:56-04:00[America/New_York]"
```

### Lokale Zeit Mehrdeutigkeit

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

### Auflösen von Versatzmehrdeutigkeit

Siehe [Versatzmehrdeutigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity) für eine Einführung in diese Situation.

```js
const offsetAmbiguous = "2019-12-23T12:00:00-02:00[America/Sao_Paulo]";

Temporal.ZonedDateTime.from(offsetAmbiguous);
// RangeError: date-time can't be represented in the given time zone
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "use" }).toString();
// "2019-12-23T11:00:00-03:00[America/Sao_Paulo]"
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "ignore" }).toString();
// "2019-12-23T12:00:00-03:00[America/Sao_Paulo]"
```

Für weitere Beispiele, insbesondere in Bezug auf verschiedene Kalender und Überlaufeinstellungen, siehe {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} und {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
