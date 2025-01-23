---
title: Temporal.PlainDate.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/with
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`with()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum mit einigen Feldern repräsentiert, die durch neue Werte ersetzt wurden. Da alle `Temporal`-Objekte darauf ausgelegt sind, unveränderlich zu sein, funktioniert diese Methode im Wesentlichen als Setter für die Felder des Datums.

Um die {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}-Eigenschaft zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}}-Methode.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} erkannten Eigenschaften enthält (außer `calendar`): `day`, `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Datums. Es muss nur eine von `month` oder `monthCode` angegeben werden und eine von `era` und `eraYear` oder `year`, und die andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, bei dem die in `info` spezifizierten Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und der Rest der Felder vom ursprünglichen Datum übernommen wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente angeben, sind inkonsistent.
    - Die angegebenen nicht numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` in diesem Kalender nie ein gültiger Monatscode ist.
    - Die angegebenen numerischen Eigenschaften sind außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.

## Beispiele

### Verwendung von with()

```js
const date = Temporal.PlainDate.from("2021-07-06");
const newDate = date.with({ day: date.daysInMonth });
console.log(newDate.toString()); // 2021-07-31
const nextDecade = date.with({ year: date.year + 10 });
console.log(nextDecade.toString()); // 2031-07-06
```

Weitere Beispiele finden Sie in der Dokumentation zu den einzelnen Eigenschaften, die mit `with()` festgelegt werden können.

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
