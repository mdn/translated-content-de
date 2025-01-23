---
title: Temporal.PlainMonthDay.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`with()`** von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen gibt ein neues `Temporal.PlainMonthDay`-Objekt zurück, das diesen Monat-Tag mit einigen durch neue Werte ersetzten Feldern darstellt. Da alle `Temporal`-Objekte so gestaltet sind, unveränderlich zu sein, fungiert diese Methode im Wesentlichen als Setter für die Felder des Monat-Tages.

Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainMonthDay`-Objekt zu erstellen, das denselben Monat-Tag in einem anderen Kalender darstellt. Um die `calendarId`-Eigenschaft zu ersetzen, müssen Sie es in ein {{jsxref("Temporal.PlainDate")}}-Objekt konvertieren, den Kalender ändern und es dann zurückkonvertieren.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} erkannten Eigenschaften enthält (außer `calendar`): `day`, `era` und `eraYear`, `month`, `monthCode`, `year`. Nicht angegebene Eigenschaften verwenden die Werte des ursprünglichen Monat-Tages. Sie müssen das Jahr nur angeben, wenn Sie `month` angeben und der Kalender nicht `iso8601` ist. Sie müssen nur eine der Eigenschaften `month` oder `monthCode` sowie `era` und `eraYear` oder `year` angeben, und die andere wird entsprechend aktualisiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumsangabe außerhalb des zulässigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumsangabe wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumsangabe außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden. Die restlichen Felder werden aus dem Originaldatum kopiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die angegebenen Eigenschaften, die dieselbe Komponente spezifizieren, sind inkonsistent.
    - Die angegebenen nicht-numerischen Eigenschaften sind nicht gültig; zum Beispiel, wenn `monthCode` nie ein gültiger Monat-Code in diesem Kalender ist.
    - Die angegebenen numerischen Eigenschaften sind außerhalb des Bereichs, und `options.overflow` ist auf `"reject"` gesetzt.

## Beispiele

### Verwendung von with()

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMd = md.with({ day: 2 });
console.log(newMd.toString()); // "07-02"
```

Für weitere Beispiele siehe die Dokumentation der einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
