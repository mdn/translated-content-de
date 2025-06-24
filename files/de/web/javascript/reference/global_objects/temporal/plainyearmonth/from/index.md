---
title: Temporal.PlainYearMonth.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/from
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainYearMonth.from()`** erstellt ein neues `Temporal.PlainYearMonth`-Objekt aus einem anderen `Temporal.PlainYearMonth`-Objekt, einem Objekt mit Jahr- und Monatseigenschaften, oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.PlainYearMonth.from(info)
Temporal.PlainYearMonth.from(info, options)
```

### Parameter

- `info`

  - : Eines der folgenden:
    - Eine Instanz von {{jsxref("Temporal.PlainYearMonth")}}, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format)-String, der ein Datum und optional einen Kalender enthält. Wenn der Kalender nicht `iso8601` ist, ist ein Tag erforderlich.
    - Ein Objekt, das die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
      - `calendar` {{optional_inline}}
        - : Ein String, der der Eigenschaft {{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}} entspricht. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste von allgemein unterstützten Kalendertypen. Standardmäßig `"iso8601"`. Alle anderen Eigenschaften werden in diesem Kalendersystem interpretiert (im Gegensatz zum {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}-Konstruktor, der die Werte im ISO-Kalendersystem interpretiert).
      - `era` und `eraYear`
        - : Ein String und eine ganze Zahl, die den Eigenschaften {{jsxref("Temporal/PlainYearMonth/era", "era")}} und {{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}} entsprechen. Werden nur verwendet, wenn das Kalendersystem Äras hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Wenn sie nicht angegeben werden, muss `year` bereitgestellt werden. Wenn alle `era`, `eraYear` und `year` angegeben werden, müssen sie konsistent sein.
      - `month`
        - : Entspricht der Eigenschaft {{jsxref("Temporal/PlainYearMonth/month", "month")}}. Muss positiv sein, unabhängig von der `overflow`-Option.
      - `monthCode`
        - : Entspricht der Eigenschaft {{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}. Wenn sie nicht angegeben wird, muss `month` bereitgestellt werden. Wenn sowohl `month` als auch `monthCode` angegeben sind, müssen sie konsistent sein.
      - `year`
        - : Entspricht der Eigenschaft {{jsxref("Temporal/PlainYearMonth/year", "year")}}.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekt-`info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das das Jahr und den Monat repräsentiert, die von `info` im angegebenen `calendar` spezifiziert werden.

Jedes `PlainYearMonth` speichert intern ein vollständiges ISO 8601-Datum, das im Zielkalender dasselbe Jahr-Monat hat wie das angezeigte. Der Referenztag ist sichtbar, wenn er mit {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} serialisiert wird, was ein ISO-Datum ausgibt. Der Referenztag wird willkürlich, aber konsistent gewählt; das heißt, jedes `(year, month)`-Paar wird immer auf denselben ISO-Referenztag abgebildet. Der in der Eingabe bereitgestellte Tag wird nicht verwendet. Stattdessen wird der Referenztag immer als der erste gültige Tag des Monats gewählt.

Diese Referenztag-Kanonisierung stellt sicher, dass {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} die zugrunde liegenden ISO-Daten ohne zusätzliche Berechnung direkt vergleichen kann.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind nicht ausreichend, um ein Datum eindeutig zu bestimmen. Normalerweise müssen Sie ein `year` (oder `era` und `eraYear`) und einen `month` (oder einen `monthCode`) angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Info liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273,972.6 Jahre vom Unix-Epoch umfasst.

## Beispiele

### Erstellen eines PlainYearMonth aus einem Objekt

```js
// Year + month code
const ym = Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M05" });
console.log(ym.toString()); // 2021-05

// Year + month
const ym2 = Temporal.PlainYearMonth.from({ year: 2021, month: 7 });
console.log(ym2.toString()); // 2021-07

// Year + month in a different calendar
const ym3 = Temporal.PlainYearMonth.from({
  year: 5730,
  month: 6,
  calendar: "hebrew",
});
console.log(ym3.toString()); // 1970-02-07[u-ca=hebrew]

// Year + month code in a different calendar
const ym4 = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(ym4.toString()); // 1970-02-07[u-ca=hebrew]
```

### Steuerung des Überlaufverhaltens

Standardmäßig werden Werte außerhalb des Bereichs auf den gültigen Bereich eingeschränkt.

```js
const ym1 = Temporal.PlainYearMonth.from({ year: 2021, month: 13 });
console.log(ym1.toString()); // 2021-12

// 5732 is not a Hebrew leap year, so a different monthCode is chosen
const ym2 = Temporal.PlainYearMonth.from({
  year: 5732,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(ym2.toLocaleString("en-US", { calendar: "hebrew" })); // Adar 5732
const underlyingDate = Temporal.PlainDate.from(ym2.toString());
console.log(underlyingDate.year, underlyingDate.monthCode); // 5732 M06
```

Sie können dieses Verhalten ändern, um stattdessen einen Fehler auszulösen:

```js
Temporal.PlainYearMonth.from({ year: 2021, month: 13 }, { overflow: "reject" });
// RangeError: date value "month" not in 1..12: 13
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
