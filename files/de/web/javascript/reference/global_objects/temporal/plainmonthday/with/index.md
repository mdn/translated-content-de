---
title: Temporal.PlainMonthDay.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`with()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag mit einigen Feldern repräsentiert, die durch neue Werte ersetzt wurden. Da alle `Temporal`-Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder des Monat-Tags.

Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainMonthDay`-Objekt zu erstellen, das denselben Monat-Tag in einem anderen Kalender darstellt. Um seine `calendarId`-Eigenschaft zu ersetzen, müssen Sie es in ein {{jsxref("Temporal.PlainDate")}}-Objekt mit {{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}} umwandeln, den Kalender ändern und es dann zurück konvertieren.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der vom {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} erkannten Eigenschaften (außer `calendar`) enthält: `day`, `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte aus dem ursprünglichen Monat-Tag. Sie müssen das Jahr angeben, wenn und nur wenn Sie `month` angeben und der Kalender nicht `iso8601` ist. Sie müssen nur eines von `month` oder `monthCode` und eines von `era` und `eraYear` oder `year` angeben, und das andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [beschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, bei dem die in `info` spezifizierten Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und die restlichen Felder aus dem ursprünglichen Datum kopiert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monatscode in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften liegen außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.
    - Wenn das Jahr angegeben ist, der Kalender nicht `iso8601` ist und das Jahr nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der von `-271821` bis `275760` reicht.

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
