---
title: Temporal.ZonedDateTime.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Datum und die Zeit im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt.

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
          - : Die Kalenderannotation einschließen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderannotation immer einschließen.
        - `"never"`
          - : Die Kalenderannotation nie einschließen. Dadurch wird die zurückgegebene Zeichenkette nicht auf dieselbe {{jsxref("Temporal.ZonedDateTime")}}-Instanz zurückführbar, obwohl der Datumswert unverändert bleibt.
        - `"critical"`
          - : Die Kalenderannotation immer einschließen und ein kritisches Flag hinzufügen: `[!u-ca=calendar_id]`. Nützlich beim Senden der Zeichenkette an bestimmte Systeme, jedoch nicht für Temporal selbst nützlich.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine Ganzzahl von 0 bis 9 oder die Zeichenkette `"auto"`. Der Standard ist `"auto"`. Wenn `"auto"`, werden die nachgestellten Nullen der Bruchteile von Sekunden entfernt. Andernfalls enthält der Bruchteil der Sekunde so viele Ziffern, die bei Bedarf mit Nullen aufgefüllt oder gerundet werden.
    - `roundingMode` {{optional_inline}}
      - : Ein Zeichenfolgenwert, der angibt, wie Bruchteile von Sekunden über die `fractionalSecondDigits` hinaus gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Der Standardwert ist `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein Zeichenfolgenwert, der die kleinste Einheit angibt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"` oder deren Pluralformen, die (außer `"minute"`) den `fractionalSecondDigits`-Werten `0`, `3`, `6`, `9` entsprechen. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.
    - `timeZoneName` {{optional_inline}}
      - : Gibt an, ob der Zeitzonenname (`[time_zone_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Den Zeitzonennamen immer einbeziehen.
        - `"never"`
          - : Den Zeitzonennamen nie einbeziehen. Dadurch wird die zurückgegebene Zeichenkette nicht auf dieselbe {{jsxref("Temporal.ZonedDateTime")}}-Instanz rückführbar.
        - `"critical"`
          - : Den Zeitzonennamen immer einbeziehen und ein kritisches Flag hinzufügen: `[!time)zone_id]`. Nützlich beim Senden der Zeichenkette an bestimmte Systeme, jedoch nicht für Temporal selbst nützlich.
    - `offset` {{optional_inline}}
      - : Gibt an, ob der Offset (`±HH:mm`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Den Offset immer einbeziehen.
        - `"never"`
          - : Den Offset nie einbeziehen. Dadurch wird die zurückgegebene Zeichenkette nicht auf dieselbe {{jsxref("Temporal.ZonedDateTime")}}-Instanz rückführbar, wenn die Zeitzone enthalten ist, die Zeit jedoch mehrdeutig ist, oder wenn die Zeitzone ebenfalls nicht enthalten ist.

### Rückgabewert

Eine Zeichenkette im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), die dieses Datum und die Zeit darstellt. Der Offset und die Kalender-/Zeitzonen-Annotationen sind wie angegeben enthalten.

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

Auch für die `UTC`-Zeitzone ist der Offset `+00:00`, nicht `Z`:

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56[UTC]");
console.log(zdt.toString()); // '2021-08-01T12:34:56+00:00[UTC]'
```

### Verwendung von Optionen

Für Beispiele zum Runden von Zeiten siehe {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Für Beispiele zur Anzeige von Kalendern siehe {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}. Hier zeigen wir das Steuern der Anzeige von Zeitzone und Offset:

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
