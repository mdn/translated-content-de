---
title: Temporal.PlainDateTime.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt einen String zurück, der dieses Datum-Uhrzeit-Paar im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt.

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
          - : Die Kalenderannotation wird einbezogen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderannotation wird immer einbezogen.
        - `"never"`
          - : Die Kalenderannotation wird nie einbezogen. Dies macht den zurückgegebenen String nicht rekonstruierbar zur gleichen {{jsxref("Temporal.PlainDateTime")}} Instanz, obwohl der Datumwert gleich bleibt.
        - `"critical"`
          - : Die Kalenderannotation wird immer einbezogen und ein kritisches Flag hinzugefügt: `[!u-ca=calendar_id]`. Nützlich, wenn der String an bestimmte Systeme gesendet wird, aber nicht für Temporal selbst.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine ganze Zahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden nachfolgende Nullen von den Bruchteilen der Sekunde entfernt. Andernfalls enthält der Bruchteil der Sekunde so viele Ziffern, wie notwendig mit Nullen aufgefüllt oder gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie Bruchteile von Sekunden jenseits von `fractionalSecondDigits` gerundet werden. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig auf `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in die Ausgabe einbezogen werden soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"`, oder deren Pluralformen, die (außer `"minute"`) äquivalent zu `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` sind. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format), der dieses Datum-Uhrzeit-Paar darstellt. Die Kalenderannotation ist wie angegeben enthalten.

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

Für Beispiele mit abgerundeten Zeiten siehe {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Für Beispiele zur Anzeige von Kalendern siehe {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
