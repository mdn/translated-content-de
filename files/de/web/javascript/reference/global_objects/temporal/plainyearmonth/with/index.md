---
title: Temporal.PlainYearMonth.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/with
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`with()`** Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt ein neues `Temporal.PlainYearMonth` Objekt zurück, das diesen Jahr-Monat mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal` Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Jahr-Monats.

Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainYearMonth` Objekt zu erstellen, das denselben Jahr-Monat in einem anderen Kalender darstellt. Um dessen `calendarId` Eigenschaft zu ersetzen, müssen Sie es zuerst in ein {{jsxref("Temporal.PlainDate")}} Objekt umwandeln, mithilfe von {{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}, den Kalender ändern und es dann zurück umwandeln.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} anerkannten Eigenschaften (außer `calendar`) enthält: `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht spezifizierte Eigenschaften verwenden die Werte aus dem ursprünglichen Jahr-Monat. Sie müssen nur eine von `month` oder `monthCode` bereitstellen, sowie eine von `era` und `eraYear` oder `year`, und die andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth` Objekt, wobei die im `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt und die restlichen Felder vom ursprünglichen Datum übernommen werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind ungültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften sind außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage, oder etwa ±273,972.6 Jahre, ab der Unix-Epoche umfasst.

## Beispiele

### Verwendung von with()

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym.with({ year: 2024 });
console.log(newYM.toString()); // "2024-07"
```

Weitere Beispiele finden Sie in der Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
