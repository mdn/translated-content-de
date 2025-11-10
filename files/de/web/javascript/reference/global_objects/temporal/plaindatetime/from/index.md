---
title: Temporal.PlainDateTime.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/from
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`Temporal.PlainDateTime.from()`** statische Methode erstellt ein neues `Temporal.PlainDateTime` Objekt aus einem anderen `Temporal.PlainDateTime` Objekt, einem Objekt mit Datums- und Zeiteigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) String.

## Syntax

```js-nolint
Temporal.PlainDateTime.from(info)
Temporal.PlainDateTime.from(info, options)
```

### Parameter

- `info`
  - : Eines der folgenden:
    - Eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) String, der ein Datum, optional eine Zeit und optional einen Kalender enthält.
    - Ein Objekt, das Eigenschaften enthält, die entweder von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) oder {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`) erkannt werden. Die Info sollte explizit ein Jahr (als `year` oder `era` und `eraYear`), einen Monat (als `month` oder `monthCode`) und einen Tag spezifizieren; andere sind optional und werden auf ihre Standardwerte gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt (bei Verwendung des Objekt-`info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das das durch `info` im angegebenen `calendar` spezifizierte Datum und die Zeit darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder ein String.
    - `options` ist kein Objekt oder `undefined`.
    - Die bereitgestellten Eigenschaften sind unzureichend, um ein Datum eindeutig zu bestimmen. Sie müssen normalerweise ein `year` (oder `era` und `eraYear`), einen `month` (oder `monthCode`) und einen `day` angeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Die Info liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der bei ±(10<sup>8</sup> + 1) Tagen oder etwa ±273.972,6 Jahren ab der Unix-Epoche liegt.

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

Für weitere Beispiele, insbesondere hinsichtlich verschiedener Kalender und Überlauf-Einstellungen, siehe {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} und {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
