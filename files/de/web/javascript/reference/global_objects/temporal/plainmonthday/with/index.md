---
title: Temporal.PlainMonthDay.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`with()`** Methode von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag darstellt, wobei einige Felder durch neue Werte ersetzt werden. Da alle `Temporal` Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Monat-Tags.

Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainMonthDay` Objekt zu erstellen, das denselben Monat-Tag in einem anderen Kalender darstellt. Um daher seine `calendarId` Eigenschaft zu ersetzen, müssen Sie es in ein {{jsxref("Temporal.PlainDate")}} Objekt mittels {{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}} konvertieren, den Kalender ändern und es dann zurück konvertieren.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der Eigenschaften enthält, die von {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} (außer `calendar`) erkannt werden: `day`, `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht spezifizierte Eigenschaften verwenden die Werte des ursprünglichen Monat-Tags. Sie müssen das Jahr nur dann angeben, wenn Sie `month` angeben und der Kalender nicht `iso8601` ist. Sie müssen entweder `month` oder `monthCode` und entweder `era` und `eraYear` oder `year` angeben, und die andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay` Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt wurden, und die restlichen Felder vom ursprünglichen Datum übernommen wurden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die bereitgestellten Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die bereitgestellten nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monatscode in diesem Kalender ist.
    - Die bereitgestellten numerischen Eigenschaften liegen außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Wenn das Jahr angegeben ist, der Kalender nicht `iso8601` ist und das Jahr nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) von Jahren liegt, der von `-271821` bis `275760` reicht.

## Beispiele

### Verwendung von with()

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMd = md.with({ day: 2 });
console.log(newMd.toString()); // "07-02"
```

Für weitere Beispiele siehe die Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
