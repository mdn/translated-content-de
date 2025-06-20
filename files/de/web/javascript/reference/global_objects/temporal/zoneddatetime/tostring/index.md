---
title: Temporal.ZonedDateTime.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen String zurück, der dieses Datum-Zeit-Objekt im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt.

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
          - : Die Kalenderanmerkung wird hinzugefügt, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderanmerkung wird immer hinzugefügt.
        - `"never"`
          - : Die Kalenderanmerkung wird niemals hinzugefügt. Dies macht den zurückgegebenen String für dieselbe {{jsxref("Temporal.ZonedDateTime")}}-Instanz nicht wiederherstellbar, obwohl der Datumswert gleich bleibt.
        - `"critical"`
          - : Die Kalenderanmerkung wird immer hinzugefügt und ein kritisches Flag wird hinzugefügt: `[!u-ca=calendar_id]`. Nützlich, wenn der String an bestimmte Systeme gesendet wird, aber nicht für Temporal selbst von Nutzen.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine Ganzzahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"` ausgewählt ist, werden die nachfolgenden Nullen aus den Bruchteilen der Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekundenkomponente so viele Ziffern, die nach Bedarf mit Nullen aufgefüllt oder gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie Bruchteile von Sekunden, die über `fractionalSecondDigits` hinausgehen, abgerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Der Standardwert ist `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"`, oder deren Pluralformen, die (außer `"minute"`) äquivalent zu `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` sind. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.
    - `timeZoneName` {{optional_inline}}
      - : Ob der Name der Zeitzone (`[time_zone_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Der Name der Zeitzone wird immer hinzugefügt.
        - `"never"`
          - : Der Name der Zeitzone wird niemals hinzugefügt. Dies macht den zurückgegebenen String für dieselbe {{jsxref("Temporal.ZonedDateTime")}}-Instanz nicht wiederherstellbar.
        - `"critical"`
          - : Der Name der Zeitzone wird immer hinzugefügt und ein kritisches Flag wird hinzugefügt: `[!time)zone_id]`. Nützlich, wenn der String an bestimmte Systeme gesendet wird, aber nicht für Temporal selbst von Nutzen.
    - `offset` {{optional_inline}}
      - : Ob der Offset (`±HH:mm`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Der Offset wird immer hinzugefügt.
        - `"never"`
          - : Der Offset wird niemals hinzugefügt. Dies macht den zurückgegebenen String für dieselbe {{jsxref("Temporal.ZonedDateTime")}}-Instanz nicht wiederherstellbar, wenn die Zeitzone enthalten ist, die Zeit aber mehrdeutig ist, oder wenn die Zeitzone auch nicht enthalten ist.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), der dieses Datum-Zeit-Objekt darstellt. Der Offset und die Kalender-/Zeitzonenanmerkungen sind wie angegeben enthalten.

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

Auch für die Zeitzone `UTC` ist der Offset `+00:00`, nicht `Z`:

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56[UTC]");
console.log(zdt.toString()); // '2021-08-01T12:34:56+00:00[UTC]'
```

### Verwendung von Optionen

Für Beispiele mit Rundungszeiten siehe {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Für Beispiele zur Anzeige von Kalendern siehe {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}. Hier zeigen wir die Kontrolle über die Anzeige von Zeitzone und Offset:

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
