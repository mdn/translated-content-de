---
title: Temporal.ZonedDateTime.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toString()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt einen String zurück, der dieses Datum-Zeit-Wert im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `calendarName` {{optional_inline}}
      - : Ob die Kalender-Anmerkung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Die Kalender-Anmerkung wird einbezogen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalender-Anmerkung wird immer einbezogen.
        - `"never"`
          - : Die Kalender-Anmerkung wird nie einbezogen. Dadurch kann der zurückgegebene String nicht in dieselbe {{jsxref("Temporal.ZonedDateTime")}} Instanz zurückverwandelt werden, obwohl der Datumswert gleich bleibt.
        - `"critical"`
          - : Die Kalender-Anmerkung wird immer einbezogen und ein kritisches Flag wird hinzugefügt: `[!u-ca=calendar_id]`. Nützlich, wenn der String an bestimmte Systeme gesendet wird, jedoch nicht nützlich für Temporal selbst.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine ganze Zahl von 0 bis 9 oder der String `"auto"`. Die Standardeinstellung ist `"auto"`. Wenn `"auto"`, werden führende Nullen von den Bruchteilen der Sekunden entfernt. Ansonsten enthält der Bruchteil der Sekundenkomponente so viele Ziffern, die bei Bedarf mit Nullen aufgefüllt oder gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie die Bruchteile von Sekundenziffern jenseits von `fractionalSecondDigits` gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"` oder deren Pluralformen, die (außer `"minute"`) den `fractionalSecondDigits` Werten `0`, `3`, `6`, `9` entsprechen. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.
    - `timeZoneName` {{optional_inline}}
      - : Ob der Name der Zeitzone (`[time_zone_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Der Zeitzonenname wird immer einbezogen.
        - `"never"`
          - : Der Zeitzonenname wird nie einbezogen. Dies macht den zurückgegebenen String nicht zu derselben {{jsxref("Temporal.ZonedDateTime")}} Instanz rückverwandelt.
        - `"critical"`
          - : Der Zeitzonenname wird immer einbezogen und ein kritisches Flag wird hinzugefügt: `[!time)zone_id]`. Nützlich, wenn der String an bestimmte Systeme gesendet wird, jedoch nicht nützlich für Temporal selbst.
    - `offset` {{optional_inline}}
      - : Ob der Offset (`±HH:mm`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Der Offset wird immer einbezogen.
        - `"never"`
          - : Der Offset wird nie einbezogen. Dies macht den zurückgegebenen String nicht zu derselben {{jsxref("Temporal.ZonedDateTime")}} Instanz rückverwandelt, wenn die Zeitzone enthalten ist, aber die Zeit mehrdeutig ist oder wenn die Zeitzone ebenfalls nicht enthalten ist.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), der dieses Datum-Zeit-Wert darstellt. Der Offset und Kalender/Zeitzonen-Anmerkungen sind wie angegeben enthalten.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` kein Objekt oder `undefined` ist.

## Beispiele

### Verwendung von toString()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56[America/New_York]",
);
console.log(zdt.toString()); // '2021-08-01T12:34:56-04:00[America/New_York]'
```

Selbst für die `UTC` Zeitzone ist der Offset `+00:00`, nicht `Z`:

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56[UTC]");
console.log(zdt.toString()); // '2021-08-01T12:34:56+00:00[UTC]'
```

### Verwendung von Optionen

Für Beispiele mit Rundungszeiten siehe {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Für Beispiele mit der Anzeige von Kalendern siehe {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}. Hier zeigen wir die Steuerung der Anzeige von Zeitzone und Offset:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56[America/New_York]",
);
console.log(zdt.toString({ timeZoneName: "auto", offset: "never" })); // '2021-08-01T12:34:56[America/New_York]'
console.log(zdt.toString({ timeZoneName: "never", offset: "auto" })); // '2021-08-01T12:34:56-04:00'
console.log(zdt.toString({ timeZoneName: "never", offset: "never" })); // '2021-08-01T12:34:56'
console.log(zdt.toString({ timeZoneName: "critical", offset: "never" })); // '2021-08-01T12:34:56[!America/New_York]'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
