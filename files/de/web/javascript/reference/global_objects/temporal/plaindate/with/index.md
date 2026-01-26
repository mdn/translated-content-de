---
title: Temporal.PlainDate.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`with()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal`-Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Datums.

Um die {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}-Eigenschaft zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}}-Methode.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} anerkannten Eigenschaften (außer `calendar`) enthält: `day`, `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Datums. Sie müssen nur eine von `month` oder `monthCode`, und eine von `era` und `eraYear` oder `year` bereitstellen, und die andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [geklammert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden, und die restlichen Felder vom ursprünglichen Datum kopiert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind ungültig; z.B. wenn `monthCode` in diesem Kalender nie ein gültiger Monatscode ist.
    - Die angegebenen numerischen Eigenschaften sind außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage, oder etwa ±273.972,6 Jahre, vom Unix-Epoch umfasst.

## Beispiele

### Verwendung von with()

```js
const date = Temporal.PlainDate.from("2021-07-06");
const newDate = date.with({ day: date.daysInMonth });
console.log(newDate.toString()); // 2021-07-31
const nextDecade = date.with({ year: date.year + 10 });
console.log(nextDecade.toString()); // 2031-07-06
```

Für weitere Beispiele siehe die Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
