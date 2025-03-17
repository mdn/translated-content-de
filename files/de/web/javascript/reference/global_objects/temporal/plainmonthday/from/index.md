---
title: Temporal.PlainMonthDay.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/from
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainMonthDay.from()`** erstellt ein neues `Temporal.PlainMonthDay`-Objekt auf der Grundlage eines anderen `Temporal.PlainMonthDay`-Objekts, eines Objekts mit den Eigenschaften Monat und Tag oder eines [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) Strings.

## Syntax

```js-nolint
Temporal.PlainMonthDay.from(info)
Temporal.PlainMonthDay.from(info, options)
```

### Parameter

- `info`

  - : Eines der folgenden:

    - Eine Instanz von {{jsxref("Temporal.PlainMonthDay")}}, welche eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) String, der ein Datum und optional einen Kalender enthält. Wenn der Kalender nicht `iso8601` ist, ist ein Jahr erforderlich.
    - Ein Objekt, das die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - `calendar` {{optional_inline}}
        - : Ein String, der der {{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}-Eigenschaft entspricht. Standard ist `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (im Gegensatz zum {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor, der die Werte im ISO-Kalendersystem interpretiert).
      - `day`
        - : Eine ganze Zahl, die der {{jsxref("Temporal/PlainMonthDay/day", "day")}}-Eigenschaft entspricht. Muss positiv sein, unabhängig von der `overflow`-Option.
      - `era` und `eraYear`
        - : Ein String und eine ganze Zahl, die anstelle von `year` verwendet werden können. Siehe {{jsxref("Temporal/PlainDate/era", "era")}} und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} von `PlainDate`. Werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Wenn `month` angegeben ist, muss mindestens eine der Kombinationen `era`+`eraYear` oder `year` bereitgestellt werden. Wenn alle von `era`, `eraYear` und `year` bereitgestellt werden, müssen diese konsistent sein.
      - `month`
        - : Eine positive ganze Zahl, die anstelle von `monthCode` verwendet werden kann. Siehe {{jsxref("Temporal/PlainDate/month", "month")}} von `PlainDate`. Muss positiv sein, unabhängig von der `overflow`-Option. Wenn `month` angegeben wird und der Kalender nicht `iso8601` ist, muss auch `year` (oder `era` + `eraYear` als Ersatz) angegeben werden, da derselbe `month` in verschiedenen Jahren mehreren möglichen `monthCode`-Werten zugeordnet werden kann. Es muss mindestens einer von `month` oder `monthCode` bereitgestellt werden. Wenn sowohl `month` als auch `monthCode` angegeben werden, müssen diese konsistent sein.
      - `monthCode`
        - : Entspricht der {{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}-Eigenschaft. Es muss mindestens einer von `month` oder `monthCode` bereitgestellt werden. Wenn sowohl `month` als auch `monthCode` angegeben werden, müssen diese konsistent sein.
      - `year`
        - : Eine ganze Zahl, die zur Unterscheidung von `month` verwendet wird, falls angegeben, weil für einige Kalender derselbe `month` in verschiedenen Jahren unterschiedliche `monthCode` bedeuten kann. Siehe {{jsxref("Temporal/PlainDate/year", "year")}} von `PlainDate`. Wenn ein Jahr angegeben wird, validiert die `overflow`-Option das Monat-Tag im angegebenen Jahr und nicht nur in irgendeinem Jahr. Wenn `month` angegeben ist, muss mindestens eine der Kombinationen `era`+`eraYear` oder `year` bereitgestellt werden. Wenn alle von `era`, `eraYear` und `year` bereitgestellt werden, müssen diese konsistent sein.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den Monat und Tag darstellt, die durch `info` im angegebenen `calendar` definiert sind.

Jedes `PlainMonthDay` speichert intern ein vollständiges ISO 8601-Datum, das denselben Monat und Tag im Zielkalender aufweist, wie es angezeigt wird. Das Bezugsjahr ist sichtbar, wenn es mit {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} als ISO-Datum serialisiert wird. Das Bezugsjahr wird willkürlich, aber konsequent gewählt (d.h. jedes `(monthCode, day)`-Paar ist immer dem gleichen ISO-Bezugsjahr zugeordnet). Es verwendet nicht das im Input bereitgestellte Jahr. Stattdessen wird das Bezugsjahr bestimmt, indem das neueste Datum vor dem 31. Dezember 1972 gefunden wird, das dasselbe Monat-Tag im Zielkalender hat, oder das früheste Datum nach dem 31. Dezember 1972, wenn ein solches Datum nicht existiert.

Zum Beispiel ist für gregorianisch abgeleitete Kalender das Bezugsjahr 1972. Für den hebräischen Kalender ist das Bezugsjahr 1972 im gregorianischen Kalender, aber wenn der Monat Adar I (`M05L`) ist, der ein Schaltmonat ist, dann ist das Bezugsjahr 1970 (5730 im hebräischen Kalender), da das nächste Schaltjahr 1973 (5733 im hebräischen Kalender) ist, das nach 1972 liegt.

Diese Referenzjahr-Normalisierung stellt sicher, dass {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} die zugrunde liegenden ISO-Daten direkt vergleichen kann, ohne zusätzliche Berechnungen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder ein String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um ein Datum eindeutig zu bestimmen. In der Regel müssen Sie ein `year` (oder `era` und `eraYear`), einen `month` und einen `day`, oder einen `monthCode` und einen `day` bereitstellen.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Information liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage, oder etwa ±273,972.6 Jahre, ab der Unix-Epoche umfasst.

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

Standardmäßig werden Werte außerhalb des Bereichs auf den gültigen Bereich eingeschränkt. Ein Monat-Tag ohne explizites Bezugsjahr ist gültig, solange es ein Jahr gibt, in dem es gültig ist, auch wenn es nicht jedes Jahr vorkommt. Wenn Jahr, Monat und Tag alle angegeben sind, dann könnten die Regeln zur Zuordnung zu einem gültigen Monat-Tag komplex und kalenderspezifisch sein, aber hier ist das übliche Verhalten:

- Wenn die `year`/`month`-Kombination ungültig ist, wird der `month` eingeschränkt, um einen gültigen `monthCode` im Jahr zu erhalten.
- Wenn die `year`/`monthCode`-Kombination ungültig ist, wird ein anderes Jahr gewählt, um den `monthCode` unverändert zu halten.
- Der `day` wird im gegebenen Jahr-Monat eingeschränkt, um ein gültiges Monat-Tag zu erhalten.

Dies unterscheidet sich leicht vom üblichen [Datumseinschränken](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping), das das Jahr dem Monatscode vorzieht.

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
