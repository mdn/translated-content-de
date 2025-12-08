---
title: Temporal.PlainDateTime.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toString()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt einen String zurück, der dieses Datum-Uhrzeit im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `calendarName` {{optional_inline}}
      - : Gibt an, ob die Kalenderannotation (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Schließt die Kalenderannotation ein, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Schließt immer die Kalenderannotation ein.
        - `"never"`
          - : Schließt die Kalenderannotation niemals ein. Dadurch kann der zurückgegebene String nicht in dieselbe {{jsxref("Temporal.PlainDateTime")}} Instanz zurückverwandelt werden, obwohl der Datumswert gleich bleibt.
        - `"critical"`
          - : Schließt immer die Kalenderannotation ein und fügt ein kritisches Flag hinzu: `[!u-ca=calendar_id]`. Nützlich beim Senden des Strings an bestimmte Systeme, aber nicht nützlich für Temporal selbst.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder ein Integer von 0 bis 9 oder der String `"auto"`. Standard ist `"auto"`. Wenn `"auto"`, werden nachfolgende Nullen aus den Bruchteilen der Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekundenkomponente so viele Ziffern, aufgefüllt oder gerundet, wie erforderlich.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie Bruchteile von Sekundenziffern über `fractionalSecondDigits` hinaus gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standard ist `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"`, oder deren Pluralformen, die (außer `"minute"`) äquivalent zu `fractionalSecondDigits` Werten von `0`, `3`, `6`, `9` sind. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format), der dieses Datum-Uhrzeit darstellt. Die Kalenderannotation ist wie angegeben enthalten.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` kein Objekt oder `undefined` ist.

## Beispiele

### Verwendung von toString()

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
console.log(dt.toString()); // '2021-08-01T12:34:56'
```

Für Beispiele mit Rundungszeiten siehe {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Für Beispiele zur Anzeige von Kalendern siehe {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
