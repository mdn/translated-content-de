---
title: Temporal.PlainDateTime.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/with
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`with()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das diese Datums-Uhrzeit mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal` Objekte so konzipiert sind, unveränderlich zu sein, funktioniert diese Methode im Wesentlichen als Setter für die Felder der Datums-Uhrzeit.

Um die {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}} Eigenschaft zu ersetzen, verwenden Sie stattdessen die Methode {{jsxref("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} anerkannten Eigenschaften (außer `calendar`) enthält: `day`, `era` und `eraYear`, `hour`, `microsecond`, `millisecond`, `minute`, `month`, `monthCode`, `nanosecond`, `second`, `year`. Nicht spezifizierte Eigenschaften verwenden die Werte der ursprünglichen Datums-Uhrzeit. Sie müssen nur eine von `month` oder `monthCode`, und entweder `era` und `eraYear` oder `year` angeben, der andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [begrenzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und der Rest der Felder von der ursprünglichen Datums-Uhrzeit kopiert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wirft einen der folgenden Fälle aus:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wirft einen der folgenden Fälle aus:
    - Die angegebenen Eigenschaften, die dieselbe Komponente angeben, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` in diesem Kalender niemals ein gültiger Monatscode ist.
    - Die angegebenen numerischen Eigenschaften liegen außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche beträgt.

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

Für weitere Beispiele siehe die Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

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
