---
title: Temporal.PlainMonthDay.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/from
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainMonthDay.from()`** erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit den Eigenschaften Monat und Tag oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.PlainMonthDay.from(info)
Temporal.PlainMonthDay.from(info, options)
```

### Parameter

- `info`

  - : Eine der folgenden Möglichkeiten:

    - Eine Instanz von {{jsxref("Temporal.PlainMonthDay")}}, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format)-String, der ein Datum und optional einen Kalender enthält. Wenn der Kalender nicht `iso8601` ist, ist ein Jahr erforderlich.
    - Ein Objekt, das die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - `calendar` {{optional_inline}}
        - : Ein String, der der {{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}-Eigenschaft entspricht. Standardmäßig `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (im Gegensatz zum {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}-Konstruktor, der die Werte im ISO-Kalendersystem interpretiert). Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen.
      - `day`
        - : Eine Ganzzahl, die der {{jsxref("Temporal/PlainMonthDay/day", "day")}}-Eigenschaft entspricht. Muss unabhängig von der `overflow`-Option positiv sein.
      - `era` und `eraYear`
        - : Ein String und eine Ganzzahl, die anstelle von `year` verwendet werden können. Siehe {{jsxref("Temporal/PlainDate/era", "era")}} und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} von `PlainDate`. Werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig bereitgestellt werden. Wenn `month` angegeben ist, muss mindestens eine von `eraYear` (zusammen mit `era`) oder `year` bereitgestellt werden. Wenn alle `era`, `eraYear` und `year` bereitgestellt werden, müssen sie konsistent sein.
      - `month`
        - : Eine positive Ganzzahl, die anstelle von `monthCode` verwendet werden kann. Siehe {{jsxref("Temporal/PlainDate/month", "month")}} von `PlainDate`. Muss unabhängig von der `overflow`-Option positiv sein. Wenn `month` bereitgestellt wird und der Kalender nicht `iso8601` ist, muss auch `year` (oder `eraYear` zusammen mit `era` als Ersatz) bereitgestellt werden, da derselbe `month` in verschiedenen Jahren auf mehrere mögliche `monthCode`-Werte abbilden kann. Mindestens einer von `month` oder `monthCode` muss bereitgestellt werden. Wenn sowohl `month` als auch `monthCode` bereitgestellt werden, müssen sie konsistent sein.
      - `monthCode`
        - : Entspricht der {{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}-Eigenschaft. Mindestens einer von `month` oder `monthCode` muss bereitgestellt werden. Wenn sowohl `month` als auch `monthCode` bereitgestellt werden, müssen sie konsistent sein.
      - `year`
        - : Eine Ganzzahl, die verwendet wird, um `month` bei Bereitstellung zu unterscheiden, da für einige Kalender derselbe `month` in verschiedenen Jahren unterschiedliche `monthCode` bedeuten kann. Siehe {{jsxref("Temporal/PlainDate/year", "year")}} von `PlainDate`. Wenn ein Jahr bereitgestellt wird, validiert die `overflow`-Option den Monat-Tag im angegebenen Jahr, nicht nur in einem beliebigen Jahr. Wenn `month` angegeben ist, muss mindestens eine von `eraYear` (zusammen mit `era`) oder `year` bereitgestellt werden. Wenn alle `era`, `eraYear` und `year` bereitgestellt werden, müssen sie konsistent sein.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [begrenztt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den in `info` angegebenen Monat und Tag im angegebenen `calendar` darstellt.

Jedes `PlainMonthDay` speichert intern ein ganzes ISO 8601-Datum, das denselben Monatstag im Zielkalender hat wie der angezeigte Monatstag. Das Referenzjahr ist sichtbar, wenn ein String mit {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} erzeugt wird, das ein ISO-Datum ausgibt. Das Referenzjahr wird willkürlich, aber konsistent gewählt (d.h. jedes `(monthCode, day)`-Paar wird immer demselben ISO-Referenzjahr zugeordnet). Es verwendet nicht das in der Eingabe angegebene Jahr. Stattdessen wird das Referenzjahr gewählt, indem das letzte Datum vor dem 31. Dezember 1972 gesucht wird, das denselben Monatstag im Zielkalender hat, oder das früheste Datum nach dem 31. Dezember 1972, wenn kein solches Datum existiert.

Zum Beispiel ist für gregorianisch abgeleitete Kalender das Referenzjahr 1972. Für den hebräischen Kalender ist das Referenzjahr 1972 im gregorianischen Kalender, aber wenn der Monat Adar I (`M05L`) ist, der ein Schaltmonat ist, ist das Referenzjahr stattdessen 1970 (5730 im hebräischen Kalender), da das nächste Schaltjahr 1973 (5733 im hebräischen Kalender) ist, das nach 1972 liegt.

Diese Referenzjahr-Kanonisierung stellt sicher, dass {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} die zugrunde liegenden ISO-Daten direkt vergleichen kann, ohne zusätzliche Berechnungen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften reichen nicht aus, um ein Datum eindeutig zu bestimmen. In der Regel müssen Sie ein `year` (oder `era` und `eraYear`), ein `month` und ein `day` oder ein `monthCode` und ein `day` angeben.
- {{jsxref("RangeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; z. B., wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Informationen liegen nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre seit dem Unix-Epoch umfasst.

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

Standardmäßig werden Werte außerhalb des Bereichs auf den gültigen Bereich begrenzt. Ein Monatstag ohne explizites Referenzjahr ist gültig, solange es ein Jahr gibt, in dem er gültig ist, auch wenn er nicht jedes Jahr auftritt. Wenn Jahr, Monat und Tag alle angegeben sind, könnten die Regeln für die Zuordnung zu einem gültigen Monatstag komplex und spezifisch für jeden Kalender sein, aber hier ist das übliche Verhalten:

- Wenn die `year`/`month`-Kombination ungültig ist, wird der `month` begrenzt, um einen gültigen `monthCode` im Jahr zu erhalten.
- Wenn die `year`/`monthCode`-Kombination ungültig ist, wird ein anderes Jahr gewählt, um den `monthCode` unverändert zu lassen.
- Der `day` wird im gegebenen Jahr-Monat begrenzt, um einen gültigen Monatstag zu erhalten.

Dies unterscheidet sich leicht von der üblichen [Datumseinschränkung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping), die das Jahr gegenüber dem Monatscode bevorzugt.

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
