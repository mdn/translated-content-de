---
title: Temporal.PlainYearMonth.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/with
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`with()`** von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt ein neues `Temporal.PlainYearMonth`-Objekt zurück, das diesen Jahr-Monat mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal`-Objekte unveränderlich konzipiert sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Jahr-Monats.

Es gibt keine offensichtliche Möglichkeit, ein neues `Temporal.PlainYearMonth`-Objekt zu erstellen, das denselben Jahr-Monat in einem anderen Kalender darstellt. Um also seine `calendarId`-Eigenschaft zu ersetzen, müssen Sie es zuerst mit {{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}} in ein {{jsxref("Temporal.PlainDate")}}-Objekt umwandeln, den Kalender ändern und dann zurück konvertieren.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} erkannten Eigenschaften (außer `calendar`) enthält: `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Jahr-Monats. Sie müssen nur eines von `month` oder `monthCode` und eines von `era` und `eraYear` oder `year` angeben, und das andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Es wird ein {{jsxref("RangeError")}} ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und die restlichen Felder vom ursprünglichen Datum übernommen werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente angeben, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` kein gültiger Monatscode in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften liegen außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.

## Beispiele

### Verwendung von with()

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym.with({ year: 2024 });
console.log(newYM.toString()); // "2024-07"
```

Für weitere Beispiele siehe die Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
