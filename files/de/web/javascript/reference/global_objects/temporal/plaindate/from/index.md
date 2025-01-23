---
title: Temporal.PlainDate.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/from
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainDate.from()`** erstellt ein neues `Temporal.PlainDate`-Objekt aus einem anderen `Temporal.PlainDate`-Objekt, einem Objekt mit Datumeigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.PlainDate.from(info)
Temporal.PlainDate.from(info, options)
```

### Parameter

- `info`

  - : Einer der folgenden:

    - Eine {{jsxref("Temporal.PlainDate")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Eine {{jsxref("Temporal.PlainDateTime")}}-Instanz, die das Kalendarium in gleicher Weise bereitstellt wie {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}.
    - Eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die das Kalendarium in gleicher Weise bereitstellt wie {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format)-String, der ein Datum und optional einen Kalender enthält.
    - Ein Objekt, das die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und überprüft werden):

      - `calendar` {{optional_inline}}
        - : Ein String, der der Eigenschaft {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} entspricht. Standard ist `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (anders als der {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}-Konstruktor, der die Werte im ISO-Kalendersystem interpretiert).
      - `day`
        - : Ein Ganzzahlwert, der der {{jsxref("Temporal/PlainDate/day", "day")}}-Eigenschaft entspricht. Muss positiv sein, unabhängig von der `overflow`-Option.
      - `era` und `eraYear`
        - : Ein String und ein Ganzzahlwert, die den Eigenschaften {{jsxref("Temporal/PlainDate/era", "era")}} und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} entsprechen. Werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Mindestens eines von `era`+`eraYear` oder `year` muss angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben sind, müssen sie konsistent sein.
      - `month`
        - : Entspricht der {{jsxref("Temporal/PlainDate/month", "month")}}-Eigenschaft. Muss positiv sein, unabhängig von der `overflow`-Option. Mindestens eines von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben sind, müssen sie konsistent sein.
      - `monthCode`
        - : Entspricht der {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}-Eigenschaft. Mindestens eines von `month` oder `monthCode` muss angegeben werden. Wenn sowohl `month` als auch `monthCode` angegeben sind, müssen sie konsistent sein.
      - `year`
        - : Entspricht der {{jsxref("Temporal/PlainDate/year", "year")}}-Eigenschaft. Mindestens eines von `era`+`eraYear` oder `year` muss angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben sind, müssen sie konsistent sein.

      Die Informationen sollten explizit ein Jahr (als `year` oder `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag angeben.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten definiert, wenn eine Datumskomponente außerhalb des zulässigen Bereichs liegt (bei Verwendung von Objekt `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch `info` und im spezifischen Kalender festgelegte Datum darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die angegebenen Eigenschaften reichen nicht aus, um ein Datum eindeutig zu bestimmen. Normalerweise müssen Sie ein `year` (oder `era` und `eraYear`), einen `month` (oder `monthCode`) und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente angeben, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monatscode in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften liegen außerhalb des gültigen Bereichs und `options.overflow` ist auf `"reject"` gesetzt.

## Beispiele

### Erstellen eines PlainDate aus einem Objekt

```js
// Year, month, and day
const d1 = Temporal.PlainDate.from({ year: 2021, month: 7, day: 1 });
console.log(d1.toString()); // "2021-07-01"

// Year, month code, and day
const d2 = Temporal.PlainDate.from({ year: 2021, monthCode: "M07", day: 1 });
console.log(d2.toString()); // "2021-07-01"

// Year, month, day in a different calendar
const d3 = Temporal.PlainDate.from({
  year: 2021,
  month: 7,
  day: 1,
  calendar: "chinese",
});
// Note: when you construct a date with an object, the date components
// are in *that* calendar, not the ISO calendar. However, toString() always
// outputs the date in the ISO calendar. For example, the year "2021" in
// the Chinese calendar is actually 616 BC in the ISO calendar.
console.log(d3.toString()); // "-000616-08-12[u-ca=chinese]"

// Era, eraYear, month, and day
const d4 = Temporal.PlainDate.from({
  era: "meiji",
  eraYear: 4,
  month: 7,
  day: 1,
  calendar: "japanese",
});
console.log(d4.toString()); // "1871-07-01[u-ca=japanese]"
```

### Steuerung des Überlaufverhaltens

Standardmäßig werden Werte außerhalb des Bereichs auf den gültigen Bereich begrenzt:

```js
const d1 = Temporal.PlainDate.from({ year: 2021, month: 13, day: 1 });
console.log(d1.toString()); // "2021-12-01"

const d2 = Temporal.PlainDate.from({ year: 2021, month: 2, day: 29 });
console.log(d2.toString()); // "2021-02-28"

const d3 = Temporal.PlainDate.from("2021-02-29");
console.log(d3.toString()); // "2021-02-28"
```

Sie können dieses Verhalten ändern, um stattdessen einen Fehler auszulösen:

```js
const d3 = Temporal.PlainDate.from(
  { year: 2021, month: 13, day: 1 },
  { overflow: "reject" },
);
// RangeError: date value "month" not in 1..12: 13
```

### Erstellen eines PlainDate aus einem String

```js
const d = Temporal.PlainDate.from("2021-07-01");
console.log(d.toLocaleString("en-US", { dateStyle: "full" }));
// Thursday, July 1, 2021

// Providing a calendar
const d2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(
  d2.toLocaleString("ja-JP", { calendar: "japanese", dateStyle: "full" }),
);
// 令和3年7月1日木曜日

// Providing a time and an offset (ignored)
const d3 = Temporal.PlainDate.from("2021-07-01T00:00+08:00");
console.log(d3.toString()); // "2021-07-01"
```

### Erstellen eines PlainDate aus einer anderen Temporal-Instanz

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:00");
const d = Temporal.PlainDate.from(dt);
console.log(d.toString()); // "2021-07-01"

const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T00:00+08:00[Asia/Shanghai]",
);
const d2 = Temporal.PlainDate.from(zdt);
console.log(d2.toString()); // "2021-07-01"

const d3 = Temporal.PlainDate.from(d);
console.log(d3.toString()); // "2021-07-01"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
