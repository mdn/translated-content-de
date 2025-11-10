---
title: Temporal.PlainDateTime.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

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
      - : Ob die Kalenderanmerkung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Fügen Sie die Kalenderanmerkung hinzu, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Immer die Kalenderanmerkung hinzufügen.
        - `"never"`
          - : Niemals die Kalenderanmerkung hinzufügen. Dies führt dazu, dass der zurückgegebene String nicht auf die gleiche {{jsxref("Temporal.PlainDateTime")}} Instanz zurückgesetzt werden kann, obwohl der Datumswert derselbe bleibt.
        - `"critical"`
          - : Immer die Kalenderanmerkung hinzufügen und ein kritisches Flag hinzufügen: `[!u-ca=calendar_id]`. Nützlich beim Senden des Strings an bestimmte Systeme, jedoch nicht für Temporal selbst.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine ganze Zahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden nachfolgende Nullen von den Bruchteilen von Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekundenkomponente so viele Stellen, die bei Bedarf mit Nullen aufgefüllt oder gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie Bruchteile von Sekundenstellen über `fractionalSecondDigits` hinaus gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardwert ist `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in die Ausgabe aufgenommen werden soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"` oder deren Pluralformen, die (außer `"minute"`) äquivalent zu `fractionalSecondDigits` Werten von `0`, `3`, `6`, `9` sind. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format), der dieses Datum-Uhrzeit darstellt. Die Kalenderanmerkung wird wie angegeben eingebunden.

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
