---
title: Temporal.PlainDateTime.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/with
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`with()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das diese Datums-Uhrzeit mit einigen Feldern repräsentiert, die durch neue Werte ersetzt wurden. Da alle `Temporal` Objekte unveränderlich (immutable) konzipiert sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Datums-Uhrzeit-Wertes.

Um die Eigenschaft {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}} zu ersetzen, verwenden Sie stattdessen die Methode {{jsxref("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der Eigenschaften enthält, die von {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} erkannt werden (außer `calendar`): `day`, `era` und `eraYear`, `hour`, `microsecond`, `millisecond`, `minute`, `month`, `monthCode`, `nanosecond`, `second`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Datums-Uhrzeit-Wertes. Sie müssen nur eines von `month` oder `monthCode`, und eines von `era` und `eraYear` oder `year` angeben, und das andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, wobei die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden, und die restlichen Felder aus dem ursprünglichen Datums-Uhrzeit-Wert kopiert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente spezifizieren, sind widersprüchlich.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften sind außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage, oder etwa ±273,972.6 Jahre, vom Unix-Epoch umfasst.

## Beispiele

### Verwendung von with()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const newDT = dt.with({ hour: 13 });
console.log(newDT.toString()); // "2021-07-01T13:34:56"
const newDT2 = dt.with({ month: 2, day: 22, millisecond: 222 });
console.log(newDT2.toString()); // "2021-02-22T13:34:56.222"
const nextDecade = dt.with({ year: dt.year + 10 });
console.log(nextDecade.toString()); // "2031-07-01T13:34:56"
```

Für weitere Beispiele siehe die Dokumentation für die einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
