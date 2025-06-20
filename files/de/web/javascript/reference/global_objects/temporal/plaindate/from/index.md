---
title: Temporal.PlainDate.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/from
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
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

  - : Eine der folgenden Möglichkeiten:

    - Eine {{jsxref("Temporal.PlainDate")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Eine {{jsxref("Temporal.PlainDateTime")}}-Instanz, die das Kalendarium auf dieselbe Weise bereitstellt wie {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}.
    - Eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die das Kalendarium auf dieselbe Weise bereitstellt wie {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format)-String, der ein Datum und optional einen Kalender enthält.
    - Ein Objekt, das die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - `calendar` {{optional_inline}}
        - : Ein String, der der {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}-Eigenschaft entspricht. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste häufig unterstützter Kalendertypen. Standardmäßig `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (anders als der {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}-Konstruktor, der die Werte im ISO-Kalendersystem interpretiert).
      - `day`
        - : Eine ganze Zahl, die der {{jsxref("Temporal/PlainDate/day", "day")}}-Eigenschaft entspricht. Muss positiv sein, unabhängig von der `overflow`-Option.
      - `era` und `eraYear`
        - : Ein String und eine ganze Zahl, die der {{jsxref("Temporal/PlainDate/era", "era")}} und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}-Eigenschaft entsprechen. Werden nur verwendet, wenn das Kalendersystem Epochen umfasst. `era` und `eraYear` müssen gleichzeitig bereitgestellt werden. Mindestens einer von `eraYear` (zusammen mit `era`) oder `year` muss bereitgestellt werden. Wenn alle drei `era`, `eraYear`, und `year` bereitgestellt werden, müssen sie konsistent sein.
      - `month`
        - : Entspricht der {{jsxref("Temporal/PlainDate/month", "month")}}-Eigenschaft. Muss positiv sein, unabhängig von der `overflow`-Option. Es muss mindestens eines von `month` oder `monthCode` bereitgestellt werden. Wenn sowohl `month` als auch `monthCode` bereitgestellt werden, müssen sie konsistent sein.
      - `monthCode`
        - : Entspricht der {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}-Eigenschaft. Es muss mindestens eines von `month` oder `monthCode` bereitgestellt werden. Wenn sowohl `month` als auch `monthCode` bereitgestellt werden, müssen sie konsistent sein.
      - `year`
        - : Entspricht der {{jsxref("Temporal/PlainDate/year", "year")}}-Eigenschaft. Es muss mindestens eines von `eraYear` (zusammen mit `era`) oder `year` bereitgestellt werden. Wenn alle drei `era`, `eraYear`, und `year` bereitgestellt werden, müssen sie konsistent sein.

      Die Informationen sollten explizit ein Jahr (als `year` oder `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag spezifizieren.

- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekt-`info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch `info` im angegebenen `calendar` spezifizierte Datum darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um eindeutig ein Datum zu bestimmen. Normalerweise müssen Sie ein `year` (oder `era` und `eraYear`), einen `month` (oder `monthCode`) und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monatscode in diesem Kalendersystem ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Informationen liegen nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273,972.6 Jahre ab der Unix-Epoche umfasst.

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

### Kontrolle des Überlaufverhaltens

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
