---
title: Temporal.PlainYearMonth.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`with()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal`-Objekte als unveränderlich konzipiert sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Jahr-Monats.

Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainYearMonth`-Objekt zu erstellen, das denselben Jahr-Monat in einem anderen Kalender darstellt. Um daher die `calendarId`-Eigenschaft zu ersetzen, müssen Sie es zuerst in ein {{jsxref("Temporal.PlainDate")}}-Objekt umwandeln, den Kalender ändern und es dann zurück konvertieren.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} erkannten Eigenschaften (außer `calendar`) enthält: `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte aus dem ursprünglichen Jahr-Monat. Sie müssen nur eine von `month` oder `monthCode` und eine von `era` und `eraYear` oder `year` angeben, die andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und die restlichen Felder vom ursprünglichen Datum kopiert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente angeben, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab dem Unix-Epoch umfasst.

## Beispiele

### Verwendung von with()

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym.with({ year: 2024 });
console.log(newYM.toString()); // "2024-07"
```

Für weitere Beispiele, siehe die Dokumentation der einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
