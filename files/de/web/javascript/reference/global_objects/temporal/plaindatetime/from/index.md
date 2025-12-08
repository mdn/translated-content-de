---
title: Temporal.PlainDateTime.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die statische Methode **`Temporal.PlainDateTime.from()`** erstellt ein neues `Temporal.PlainDateTime`-Objekt aus einem anderen `Temporal.PlainDateTime`-Objekt, einem Objekt mit Datums- und Zeiteigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.PlainDateTime.from(info)
Temporal.PlainDateTime.from(info, options)
```

### Parameter

- `info`
  - : Eines der folgenden:
    - Eine {{jsxref("Temporal.PlainDateTime")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format)-String, der ein Datum, optional eine Zeit und optional einen Kalender enthält.
    - Ein Objekt mit Eigenschaften, die entweder von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) oder von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`) erkannt werden. Die Informationen sollten explizit ein Jahr (als `year` oder `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag angeben; andere sind optional und werden auf ihre Standardwerte gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das Datum und die Zeit darstellt, die durch `info` im angegebenen `calendar` angegeben sind.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - `options` ist kein Objekt oder `undefined`.
    - Die angegebenen Eigenschaften sind nicht ausreichend, um ein Datum eindeutig zu bestimmen. Sie müssen in der Regel ein `year` (oder `era` und `eraYear`), einen `month` (oder `monthCode`) und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die die gleiche Komponente spezifizieren, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind ungültig; zum Beispiel, wenn `monthCode` kein gültiger Monatscode in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften liegen außerhalb des gültigen Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Informationen liegen nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche umfasst.

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

Für weitere Beispiele, insbesondere bezüglich unterschiedlicher Kalender und Überlaufeinstellungen, siehe {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} und {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
