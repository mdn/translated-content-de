---
title: Temporal.PlainDateTime.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/from
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainDateTime.from()`** erstellt ein neues `Temporal.PlainDateTime`-Objekt aus einem anderen `Temporal.PlainDateTime`-Objekt, einem Objekt mit Datums- und Zeiteigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) String.

## Syntax

```js-nolint
Temporal.PlainDateTime.from(info)
Temporal.PlainDateTime.from(info, options)
```

### Parameter

- `info`
  - : Einer der folgenden:
    - Eine Instanz von {{jsxref("Temporal.PlainDateTime")}}, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) String, der ein Datum enthält, optional eine Uhrzeit und optional einen Kalender.
    - Ein Objekt, das Eigenschaften enthält, die entweder von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) oder {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`) erkannt werden. `Info` sollte ausdrücklich ein Jahr (als `year` oder `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag angeben; andere sind optional und werden auf ihre Standardwerte gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [beschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch `info` angegebene Datum und die Uhrzeit im angegebenen `calendar` darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften reichen nicht aus, um ein Datum eindeutig zu bestimmen. In der Regel müssen Sie ein `year` (oder `era` und `eraYear`), `month` (oder `monthCode`) und `day` angeben.
- {{jsxref("RangeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente angeben, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des gültigen Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Information ist nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder ungefähr ±273.972,6 Jahre ab der Unix-Epoche umfasst.

## Beispiele

### Erstellen eines PlainDateTime aus einem Objekt

```js
// Year + month + day + hour + minute + second
const dt = Temporal.PlainDateTime.from({
  year: 2021,
  month: 7,
  day: 1,
  hour: 12,
  minute: 34,
  second: 56,
});
console.log(dt.toString()); // "2021-07-01T12:34:56"
```

### Erstellen eines PlainDateTime aus einem String

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
console.log(dt.toLocaleString()); // "7/1/2021, 12:34:56 PM" (assuming en-US locale)
```

Für weitere Beispiele, insbesondere in Bezug auf verschiedene Kalender und "overflow"-Einstellungen, siehe {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} und {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
