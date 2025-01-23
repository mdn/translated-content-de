---
title: Temporal.PlainMonthDay.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/from
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`Temporal.PlainMonthDay.from()`** statische Methode erstellt ein neues `Temporal.PlainMonthDay`-Objekt aus einem anderen `Temporal.PlainMonthDay`-Objekt, einem Objekt mit Monat- und Tag-Eigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) String.

## Syntax

```js-nolint
Temporal.PlainMonthDay.from(info)
Temporal.PlainMonthDay.from(info, options)
```

### Parameter

- `info`

  - : Eines der folgenden:

    - Eine {{jsxref("Temporal.PlainMonthDay")}} Instanz, welche eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format)-String mit einem Datum und optional einem Kalender. Wenn der Kalender nicht `iso8601` ist, wird ein Jahr benötigt.
    - Ein Objekt, das die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - `calendar` {{optional_inline}}
        - : Ein String, der der {{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}-Eigenschaft entspricht. Standardmäßig `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (anders als der {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}-Konstruktor, der die Werte im ISO-Kalendersystem interpretiert).
      - `day`
        - : Ein Integer, der der {{jsxref("Temporal/PlainMonthDay/day", "day")}}-Eigenschaft entspricht. Muss positiv sein, unabhängig von der `overflow`-Option.
      - `era` und `eraYear`
        - : Ein String und ein Integer, die anstelle von `year` verwendet werden können. Siehe {{jsxref("Temporal/PlainDate/era", "era")}} und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} von `PlainDate`. Werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Wenn `month` angegeben ist, muss mindestens eines von `era`+`eraYear` oder `year` angegeben werden. Wenn alle von `era`, `eraYear` und `year` angegeben sind, müssen sie konsistent sein.
      - `month`
        - : Ein positiver Integer, der anstelle von `monthCode` verwendet werden kann. Siehe {{jsxref("Temporal/PlainDate/month", "month")}} von `PlainDate`. Muss positiv sein, unabhängig von der `overflow`-Option. Wenn `month` angegeben ist und der Kalender nicht `iso8601` ist, dann muss `year` (oder `era` + `eraYear` als Ersatz) auch angegeben werden, da derselbe `month` auf verschiedene `monthCode`-Werte in verschiedenen Jahren abgebildet werden kann. Mindestens eines von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben sind, müssen sie konsistent sein.
      - `monthCode`
        - : Entspricht der {{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}-Eigenschaft. Mindestens eines von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben sind, müssen sie konsistent sein.
      - `year`
        - : Ein Integer, der zur Auflösung von `month` verwendet wird, falls angegeben, da für einige Kalender derselbe `month` in verschiedenen Jahren unterschiedliche `monthCode` bedeuten kann. Siehe {{jsxref("Temporal/PlainDate/year", "year")}} von `PlainDate`. Wenn ein Jahr angegeben ist, dann validiert die `overflow`-Option den Monat-Tag im angegebenen Jahr, nicht nur in irgendeinem Jahr. Wenn `month` angegeben ist, muss mindestens eines von `era`+`eraYear` oder `year` angegeben werden. Wenn alle von `era`, `eraYear` und `year` angegeben sind, müssen sie konsistent sein.

- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekt-`info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [begrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Es wird ein {{jsxref("RangeError")}} ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den Monat und Tag repräsentiert, die von `info` im angegebenen `calendar` spezifiziert sind.

Jedes `PlainMonthDay` speichert intern ein vollständiges ISO 8601-Datum, das denselben Monat-Tag im Zielkalender hat wie das, was dargestellt wird. Das Referenzjahr wird sichtbar beim Stringifizieren mit {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}, das ein ISO-Datum ausgibt. Das Referenzjahr wird willkürlich, aber konsistent gewählt (d.h., jedes `(monthCode, day)`-Paar weist immer auf dasselbe ISO-Referenzjahr). Es verwendet nicht das in der Eingabe angegebene Jahr. Stattdessen wird das Referenzjahr durch das neueste Datum vor dem 31. Dezember 1972 gewählt, das denselben Monat-Tag im Zielkalender hat, oder das früheste Datum nach dem 31. Dezember 1972, wenn ein solches Datum nicht existiert.

Zum Beispiel ist für gregorianische Kalendersysteme das Referenzjahr 1972. Für den Hebräischen Kalender ist das Referenzjahr 1972 im Gregorianischen Kalender, aber wenn der Monat Adar I (`M05L`) ist, was ein Schaltmonat ist, ist das Referenzjahr 1970 (5730 im Hebräischen Kalender) stattdessen, weil das nächste Schaltjahr 1973 (5733 im Hebräischen Kalender) ist, was nach 1972 ist.

Diese Referenzjahreskanonisierung stellt sicher, dass {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} die zugrunde liegenden ISO-Daten direkt vergleichen kann, ohne zusätzliche Berechnungen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um ein Datum eindeutig zu bestimmen. Sie müssen normalerweise ein `year` (oder `era` und `eraYear`), einen `month` und einen `day` oder einen `monthCode` und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nichtnumerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatcode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.

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

Standardmäßig werden außerhalb des Bereichs liegende Werte auf den gültigen Bereich begrenzt. Ein Monat-Tag ohne explizites Referenzjahr ist gültig, solange es ein Jahr gibt, in dem es gültig ist, auch wenn es nicht jedes Jahr erscheint. Wenn Jahr, Monat und Tag alle angegeben sind, dann könnten die Regeln für die Zuordnung zu einem gültigen Monat-Tag komplex und spezifisch für jeden Kalender sein, aber hier ist das übliche Verhalten:

- Wenn die `year`/`month`-Kombination ungültig ist, wird der `month` begrenzt, um einen gültigen `monthCode` im Jahr zu erhalten.
- Wenn die `year`/`monthCode`-Kombination ungültig ist, wird ein anderes Jahr gewählt, um den `monthCode` unverändert zu lassen.
- Der `day` wird im gegebenen Jahr-Monat begrenzt, um einen gültigen Monat-Tag zu erhalten.

Dies ist etwas anders als die übliche [Datumsklemmung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping), die das Jahr über den Monatcode bevorzugt.

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
