---
title: Temporal.PlainMonthDay.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`with()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag darstellt, wobei einige Felder durch neue Werte ersetzt werden. Da alle `Temporal`-Objekte so gestaltet sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Monats-Tags.

Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainMonthDay`-Objekt zu erstellen, das denselben Monat-Tag in einem anderen Kalender darstellt. Um die `calendarId`-Eigenschaft zu ersetzen, müssen Sie es in ein {{jsxref("Temporal.PlainDate")}}-Objekt umwandeln, den Kalender ändern und es dann zurück konvertieren.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} anerkannten Eigenschaften (außer `calendar`) enthält: `day`, `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Monats-Tags. Sie müssen das Jahr nur dann angeben, wenn Sie `month` angeben und der Kalender nicht `iso8601` ist. Sie müssen nur eines von `month` oder `monthCode` und eines von `era` und `eraYear` oder `year` angeben, und das andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden, und die restlichen Felder vom ursprünglichen Datum kopiert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die die gleiche Komponente spezifizieren, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften liegen außerhalb des gültigen Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Wenn das Jahr angegeben ist, der Kalender nicht `iso8601` ist und das Jahr nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der von `-271821` bis `275760` reicht.

## Beispiele

### Verwenden von with()

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMd = md.with({ day: 2 });
console.log(newMd.toString()); // "07-02"
```

Für weitere Beispiele sehen Sie sich die Dokumentation zu den einzelnen Eigenschaften an, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
