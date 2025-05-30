---
title: Temporal.PlainMonthDay.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/from
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainMonthDay.from()`** erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monat- und Tag-Eigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) String.

## Syntax

```js-nolint
Temporal.PlainMonthDay.from(info)
Temporal.PlainMonthDay.from(info, options)
```

### Parameter

- `info`

  - : Eines der folgenden:

    - Eine Instanz von {{jsxref("Temporal.PlainMonthDay")}}, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) String, der ein Datum und optional einen Kalender enthält. Wenn der Kalender nicht `iso8601` ist, wird ein Jahr benötigt.
    - Ein Objekt, das die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - `calendar` {{optional_inline}}
        - : Ein String, der der {{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}-Eigenschaft entspricht. Standardmäßig `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (anders als der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor, der die Werte im ISO-Kalendersystem interpretiert). Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste häufig unterstützter Kalendertypen.
      - `day`
        - : Eine Ganzzahl, die der {{jsxref("Temporal/PlainMonthDay/day", "day")}}-Eigenschaft entspricht. Muss positiv sein, unabhängig von der `overflow`-Option.
      - `era` und `eraYear`
        - : Ein String und eine Ganzzahl, die anstelle von `year` verwendet werden können. Siehe {{jsxref("Temporal/PlainDate/era", "era")}} und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} von `PlainDate`. Werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Wenn `month` angegeben ist, muss mindestens eines von `eraYear` (zusammen mit `era`) oder `year` angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben sind, müssen sie konsistent sein.
      - `month`
        - : Eine positive Ganzzahl, die anstelle von `monthCode` verwendet werden kann. Siehe {{jsxref("Temporal/PlainDate/month", "month")}} von `PlainDate`. Muss positiv sein, unabhängig von der `overflow`-Option. Wenn `month` angegeben ist und der Kalender nicht `iso8601` ist, muss auch `year` (oder `eraYear` zusammen mit `era` als Ersatz) angegeben werden, da derselbe `month` in verschiedenen Jahren zu mehreren möglichen `monthCode`-Werten führen kann. Mindestens eines von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben sind, müssen sie konsistent sein.
      - `monthCode`
        - : Entspricht der {{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}-Eigenschaft. Mindestens eines von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben sind, müssen sie konsistent sein.
      - `year`
        - : Eine Ganzzahl, die dazu verwendet wird, `month` zu entwirren, falls angegeben, da für einige Kalender derselbe `month` in verschiedenen Jahren unterschiedliche `monthCode` bedeuten kann. Siehe {{jsxref("Temporal/PlainDate/year", "year")}} von `PlainDate`. Wenn ein Jahr angegeben wird, validiert die `overflow`-Option den Monat-Tag im angegebenen Jahr, nicht nur in einem beliebigen Jahr. Wenn `month` angegeben ist, muss mindestens eines von `eraYear` (zusammen mit `era`) oder `year` angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben sind, müssen sie konsistent sein.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten bestimmt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den Monat und den Tag darstellt, die von `info` im angegebenen `calendar` festgelegt werden.

Jeder `PlainMonthDay` speichert intern ein vollständiges ISO 8601-Datum, das denselben Monat-Tag im Zielkalender hat, wie er angezeigt wird. Das Referenzjahr ist sichtbar, wenn es mit {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} als ISO-Datum formatiert wird. Das Referenzjahr wird willkürlich, aber konsistent gewählt (das heißt, jedes `(monthCode, day)`-Paar wird immer demselben ISO-Referenzjahr zugeordnet). Es wird nicht das in der Eingabe bereitgestellte Jahr verwendet. Stattdessen wird das Referenzjahr gewählt, indem das neueste Datum vor dem 31. Dezember 1972 gesucht wird, das denselben Monat-Tag im Zielkalender hat, oder das früheste Datum nach dem 31. Dezember 1972, wenn ein solches Datum nicht existiert.

Zum Beispiel beträgt bei gregorianisch abgeleiteten Kalendern das Referenzjahr 1972. Beim Hebräischen Kalender ist das Referenzjahr 1972 im Gregorianischen Kalender, aber wenn der Monat Adar I (`M05L`) ist, welches ein Schaltmonat ist, beträgt das Referenzjahr 1970 (5730 im Hebräischen Kalender), da das nächste Schaltjahr 1973 (5733 im Hebräischen Kalender) ist, welches nach 1972 liegt.

Diese Referenzjahr-Kanonisierung stellt sicher, dass {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} die zugrunde liegenden ISO-Daten direkt vergleichen kann, ohne zusätzliche Berechnungen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um ein Datum eindeutig zu bestimmen. Normalerweise müssen `year` (oder `era` und `eraYear`), `month` und `day` oder `monthCode` und `day` angegeben werden.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` in diesem Kalender niemals ein gültiger Monatscode ist.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Info liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.

## Beispiele

### Erstellen eines PlainMonthDay aus einem Objekt

```js
// Month code + day
const md = Temporal.PlainMonthDay.from({ monthCode: "M05", day: 2 });
console.log(md.toString()); // 05-02

// Month + day (only for ISO calendar)
const md2 = Temporal.PlainMonthDay.from({ month: 7, day: 1 });
console.log(md2.toString()); // 07-01

// Year + month + day
const md3 = Temporal.PlainMonthDay.from({ year: 2021, month: 7, day: 1 });
console.log(md3.toString()); // 07-01

// Year + month + day in a different calendar (where year is required)
const md4 = Temporal.PlainMonthDay.from({
  year: 2021,
  month: 7,
  day: 1,
  calendar: "hebrew",
});
console.log(md4.toString()); // 1972-03-16[u-ca=hebrew]

// Month code + day in a different calendar
const md5 = Temporal.PlainMonthDay.from({
  monthCode: "M05L",
  day: 1,
  calendar: "hebrew",
});
console.log(md5.toString()); // 1970-02-07[u-ca=hebrew]
```

### Steuerung des Überlaufverhaltens

Standardmäßig werden Werte außerhalb des Bereichs auf den gültigen Bereich beschränkt. Ein Monat-Tag ohne explizites Referenzjahr ist gültig, solange es ein Jahr gibt, in dem es gültig ist, auch wenn es nicht jedes Jahr auftritt. Wenn Jahr, Monat und Tag alle angegeben sind, könnten die Regeln zur Zuordnung zu einem gültigen Monat-Tag komplex und spezifisch für jeden Kalender sein, aber hier ist das übliche Verhalten:

- Ist die `year`/`month`-Kombination ungültig, wird der `month` eingeschränkt, um einen gültigen `monthCode` im Jahr zu erhalten.
- Ist die `year`/`monthCode`-Kombination ungültig, wird ein anderes Jahr gewählt, um den `monthCode` unverändert zu lassen.
- Der `day` wird im angegebenen Jahr-Monat eingeschränkt, um einen gültigen Monat-Tag zu erhalten.

Dies unterscheidet sich leicht von der üblichen [Datumseinschränkung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping), die das Jahr über den Monatscode bevorzugt.

```js
// Month always out of range
const md1 = Temporal.PlainMonthDay.from({ month: 13, day: 1 });
console.log(md1.toString()); // 12-01

// Month out of range for the specific year: 5732 is not a Hebrew leap year,
// so month is clamped to 12 to resolve to a valid monthCode
const md2 = Temporal.PlainMonthDay.from({
  year: 5732,
  month: 13,
  day: 1,
  calendar: "hebrew",
});
console.log(md2.toLocaleString("en-US", { calendar: "hebrew" })); // 1 Elul
const underlyingDate = Temporal.PlainDate.from(md2.toString());
console.log(underlyingDate.year, underlyingDate.month); // 5732 12

// Month code exists but not for the specific year: 5731 is not a Hebrew leap year,
// so a different year is chosen to keep the monthCode as M05L
const md3 = Temporal.PlainMonthDay.from({
  year: 5731,
  monthCode: "M05L",
  day: 1,
  calendar: "hebrew",
});
console.log(md3.toLocaleString("en-US", { calendar: "hebrew" })); // 1 Adar I
const underlyingDate2 = Temporal.PlainDate.from(md3.toString());
console.log(underlyingDate2.year, underlyingDate2.monthCode); // 5730 M05L

// Day always out of range
const md4 = Temporal.PlainMonthDay.from({ month: 2, day: 30 });
console.log(md4.toString()); // 02-29

// Day out of range for the specific year-month
const md5 = Temporal.PlainMonthDay.from({ year: 2021, month: 2, day: 29 });
console.log(md5.toString()); // 02-28
```

Sie können dieses Verhalten ändern, um stattdessen einen Fehler auszulösen:

```js
Temporal.PlainMonthDay.from(
  { year: 2021, month: 13, day: 1 },
  { overflow: "reject" },
);
// RangeError: date value "month" not in 1..12: 13
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
