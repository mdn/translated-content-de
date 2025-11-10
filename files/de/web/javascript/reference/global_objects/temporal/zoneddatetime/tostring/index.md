---
title: Temporal.ZonedDateTime.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toString()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt einen String zurück, der dieses Datum-Uhrzeit in dem [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `calendarName` {{optional_inline}}
      - : Ob die Kalenderannotation (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Inkludieren Sie die Kalenderannotation, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderannotation immer inkludieren.
        - `"never"`
          - : Die Kalenderannotation nie inkludieren. Dies macht den zurückgegebenen String nicht wiederherstellbar zur gleichen {{jsxref("Temporal.ZonedDateTime")}} Instanz, obwohl der Datumswert gleich bleibt.
        - `"critical"`
          - : Immer die Kalenderannotation inkludieren und ein kritisches Flag hinzufügen: `[!u-ca=calendar_id]`. Nützlich, wenn Sie den String an bestimmte Systeme senden, aber nicht für Temporal selbst.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine ganze Zahl von 0 bis 9 oder der String `"auto"`. Der Standard ist `"auto"`. Wenn `"auto"`, dann werden nachgestellte Nullen von den Bruchteilen der Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekundeneinheit so viele Ziffern, die mit Nullen aufgefüllt oder bei Bedarf gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie die Bruchteile der Sekundenziffern über `fractionalSecondDigits` hinaus gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standard ist `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in der Ausgabe inkludiert werden soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"` oder deren Pluralformen, die (außer `"minute"`) den `fractionalSecondDigits` Werten von `0`, `3`, `6`, `9` entsprechen. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.
    - `timeZoneName` {{optional_inline}}
      - : Ob der Name der Zeitzone (`[time_zone_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Immer den Namen der Zeitzone inkludieren.
        - `"never"`
          - : Den Namen der Zeitzone nie inkludieren. Dies macht den zurückgegebenen String nicht wiederherstellbar zur gleichen {{jsxref("Temporal.ZonedDateTime")}} Instanz.
        - `"critical"`
          - : Immer den Namen der Zeitzone inkludieren und ein kritisches Flag hinzufügen: `[!time)zone_id]`. Nützlich, wenn Sie den String an bestimmte Systeme senden, aber nicht für Temporal selbst.
    - `offset` {{optional_inline}}
      - : Ob der Offset (`±HH:mm`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Immer den Offset inkludieren.
        - `"never"`
          - : Den Offset nie inkludieren. Dies macht den zurückgegebenen String nicht wiederherstellbar zur gleichen {{jsxref("Temporal.ZonedDateTime")}} Instanz, wenn die Zeitzone inkludiert ist, die Uhrzeit jedoch mehrdeutig ist, oder wenn die Zeitzone auch nicht inkludiert ist.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), der diese Datum-Uhrzeit darstellt. Der Offset und die Kalender-/Zeitzonen-Annotationen sind wie angegeben inkludiert.

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

Auch für die `UTC` Zeitzone ist der Offset `+00:00`, nicht `Z`:

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56[UTC]");
console.log(zdt.toString()); // '2021-08-01T12:34:56+00:00[UTC]'
```

### Verwendung von Optionen

Für Beispiele mit gerundeten Zeiten siehe {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Für Beispiele zur Anzeige von Kalendern siehe {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}. Hier zeigen wir, wie die Anzeige von Zeitzone und Offset gesteuert wird:

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
