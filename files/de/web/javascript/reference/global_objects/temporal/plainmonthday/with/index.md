---
title: Temporal.PlainMonthDay.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`with()`**-Methode von Instanzen von {{jsxref("Temporal.PlainMonthDay")}} gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag mit einigen Feldern darstellt, die durch neue Werte ersetzt werden. Da alle `Temporal`-Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Monat-Tags.

Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainMonthDay`-Objekt zu erstellen, das denselben Monat-Tag in einem anderen Kalender darstellt. Um die `calendarId`-Eigenschaft zu ersetzen, müssen Sie es in ein {{jsxref("Temporal.PlainDate")}}-Objekt umwandeln, den Kalender ändern und es dann zurück konvertieren.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} anerkannten Eigenschaften (außer `calendar`) enthält: `day`, `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Monat-Tags. Sie müssen das Jahr nur angeben, wenn Sie `month` angeben und der Kalender nicht `iso8601` ist. Sie müssen nur eines von `month` oder `monthCode` angeben und eines von `era` und `eraYear` oder `year`, wobei das andere entsprechend aktualisiert wird.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [eingeklemmt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und der Rest der Felder aus dem ursprünglichen Datum kopiert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig, zum Beispiel, wenn `monthCode` niemals ein gültiger Monatscode in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften sind außerhalb des Bereichs und `options.overflow` ist auf `"reject"` gesetzt.
    - Wenn das Jahr angegeben ist, der Kalender nicht `iso8601` ist und das Jahr nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) ist oder Jahre, die von `-271821` bis `275760` reichen.

## Beispiele

### Verwendung von with()

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMd = md.with({ day: 2 });
console.log(newMd.toString()); // "07-02"
```

Weitere Beispiele finden Sie in der Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
