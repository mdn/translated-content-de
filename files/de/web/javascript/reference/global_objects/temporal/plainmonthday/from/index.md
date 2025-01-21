---
title: Temporal.PlainMonthDay.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/from
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`Temporal.PlainMonthDay.from()`** statische Methode erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monat- und Tag-Eigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) String.

## Syntax

```js-nolint
Temporal.PlainMonthDay.from(info)
Temporal.PlainMonthDay.from(info, options)
```

### Parameter

- `info`

  - : Einer der folgenden:

    - Eine {{jsxref("Temporal.PlainMonthDay")}} Instanz, die eine Kopie dieser Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) String, der ein Datum und optional einen Kalender enthält. Wenn der Kalender nicht `iso8601` ist, ist ein Jahr erforderlich.
    - Ein Objekt mit den folgenden Eigenschaften (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - `calendar` {{optional_inline}}
        - : Ein String, der der {{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}} Eigenschaft entspricht. Standard ist `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (anders als der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} Konstruktor, der die Werte im ISO-Kalendariumssystem interpretiert).
      - `day`
        - : Eine ganze Zahl, die der {{jsxref("Temporal/PlainMonthDay/day", "day")}} Eigenschaft entspricht. Muss positiv sein, unabhängig von der `overflow` Option.
      - `era` und `eraYear`
        - : Ein String und eine ganze Zahl, die anstelle von `year` verwendet werden können. Siehe {{jsxref("Temporal/PlainDate/era", "era")}} und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} von `PlainDate`. Sie werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Wenn `month` angegeben ist, muss mindestens eine von `era`+`eraYear` oder `year` angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben werden, müssen sie konsistent sein.
      - `month`
        - : Eine positive ganze Zahl, die anstelle von `monthCode` verwendet werden kann. Siehe {{jsxref("Temporal/PlainDate/month", "month")}} von `PlainDate`. Muss positiv sein, unabhängig von der `overflow` Option. Wenn `month` angegeben wird und der Kalender nicht `iso8601` ist, muss auch `year` (oder `era` + `eraYear` als Ersatz) angegeben werden, da derselbe `month` auf mehrere mögliche `monthCode` Werte in verschiedenen Jahren abbilden kann. Mindestens eine von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben werden, müssen sie konsistent sein.
      - `monthCode`
        - : Entspricht der {{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}} Eigenschaft. Mindestens eine von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben werden, müssen sie konsistent sein.
      - `year`
        - : Eine ganze Zahl, die verwendet wird, um `month` zu klären, wenn angegeben, da für einige Kalender derselbe `month` verschiedene `monthCode` in verschiedenen Jahren bedeuten kann. Siehe {{jsxref("Temporal/PlainDate/year", "year")}} von `PlainDate`. Wenn ein Jahr angegeben wird, validiert die `overflow` Option den Monat-Tag im angegebenen Jahr, nicht nur in einem beliebigen Jahr. Wenn `month` angegeben ist, muss mindestens eine von `era`+`eraYear` oder `year` angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben werden, müssen sie konsistent sein.

- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt (bei Verwendung des Objekt-`info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay` Objekt, das den durch `info` angegebenen Monat und Tag im angegebenen `calendar` darstellt.

Jedes `PlainMonthDay` speichert intern ein vollständiges ISO 8601-Datum, das den gleichen Monat-Tag im Zielkalender hat wie das dargestellte. Das Referenzjahr ist sichtbar, wenn mit {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} formatiert wird, was ein ISO-Datum ausgibt. Das Referenzjahr wird willkürlich, aber konsistent gewählt (das heißt, jedes `(monthCode, day)` Paar wird immer auf dasselbe ISO-Referenzjahr abgebildet). Es verwendet nicht das im Eingabewert angegebene Jahr. Stattdessen wird das Referenzjahr durch Findung des jüngsten Datums vor dem 31. Dezember 1972 gewählt, das den gleichen Monat-Tag im Zielkalender hat, oder das früheste Datum nach dem 31. Dezember 1972, wenn kein solches Datum existiert.

Zum Beispiel ist für gregorianisch-abgeleitete Kalender das Referenzjahr 1972. Für den hebräischen Kalender ist das Referenzjahr 1972 im gregorianischen Kalender, aber wenn der Monat Adar I (`M05L`) ist, welcher ein Schaltmonat ist, ist das Referenzjahr 1970 (5730 im hebräischen Kalender), da das nächste Schaltjahr 1973 (5733 im hebräischen Kalender) ist, welches nach 1972 liegt.

Diese Referenzjahr-Kanonisierung stellt sicher, dass {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} die zugrunde liegenden ISO-Daten direkt ohne zusätzliche Berechnungen vergleichen kann.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die angegebenen Eigenschaften sind unzureichend, um das Datum eindeutig zu bestimmen. Sie müssen normalerweise ein `year` (oder `era` und `eraYear`), einen `month` und einen `day` oder einen `monthCode` und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente angeben, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind ungültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monat Code in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften sind außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.

## Beispiele

### Ein PlainMonthDay aus einem Objekt erstellen

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

### Das Überlaufverhalten steuern

Standardmäßig werden Werte außerhalb des Bereichs auf den gültigen Bereich eingeschränkt. Ein Monat-Tag ohne explizites Referenzjahr ist gültig, solange es ein Jahr gibt, in dem es gültig ist, auch wenn es nicht jedes Jahr erscheint. Wenn Jahr, Monat und Tag alle angegeben sind, können die Regeln für die Abbildung auf ein gültiges Monat-Tag kompliziert und kalenderspezifisch sein, aber hier ist das übliche Verhalten:

- Wenn die `year`/`month` Kombination ungültig ist, wird der `month` eingeschränkt, um einen gültigen `monthCode` im Jahr zu erhalten.
- Wenn die `year`/`monthCode` Kombination ungültig ist, wird ein anderes Jahr gewählt, um den `monthCode` unverändert zu lassen.
- Der `day` wird im angegebenen Jahr-Monat eingeschränkt, um einen gültigen Monat-Tag zu erhalten.

Dies ist etwas anders als das übliche [Datumseinschränken](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping), das das Jahr über den Monat Code bevorzugt.

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
