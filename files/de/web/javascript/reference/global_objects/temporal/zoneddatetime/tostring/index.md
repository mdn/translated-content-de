---
title: Temporal.ZonedDateTime.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toString
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine Zeichenkette zurück, die dieses Datum und diese Uhrzeit im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `calendarName` {{optional_inline}}
      - : Ob die Kalenderanmerkung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Die Kalenderanmerkung wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderanmerkung wird immer eingeschlossen.
        - `"never"`
          - : Die Kalenderanmerkung wird nie eingeschlossen. Dies führt dazu, dass die zurückgegebene Zeichenkette nicht wiederherstellbar auf dieselbe {{jsxref("Temporal.ZonedDateTime")}} Instanz ist, obwohl der Datumswert gleich bleibt.
        - `"critical"`
          - : Die Kalenderanmerkung wird immer eingeschlossen und mit einem kritischen Flag versehen: `[!u-ca=calendar_id]`. Nützlich beim Senden der Zeichenkette an bestimmte Systeme, für Temporal selbst jedoch nicht nützlich.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Entweder eine Ganzzahl von 0 bis 9 oder der String `"auto"`. Der Standardwert ist `"auto"`. Wenn `"auto"`, werden die nachgestellten Nullen der Bruchteile von Sekunden entfernt. Andernfalls enthält der Bruchteil des Sekundenkomponente so viele Stellen, gefüllt mit Nullen oder gerundet, wie erforderlich.
    - `roundingMode` {{optional_inline}}
      - : Ein String, der angibt, wie die Bruchteile von Sekundenziffern jenseits von `fractionalSecondDigits` gerundet werden sollen. Siehe [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Standardmäßig `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : Ein String, der die kleinste Einheit angibt, die in der Ausgabe enthalten sein soll. Mögliche Werte sind `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` und `"nanosecond"`, oder deren Pluralformen, welche (außer `"minute"`) äquivalent zu `fractionalSecondDigits`-Werten von `0`, `3`, `6`, `9` sind. Wenn angegeben, wird `fractionalSecondDigits` ignoriert.
    - `timeZoneName` {{optional_inline}}
      - : Ob der Name der Zeitzone (`[time_zone_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Der Name der Zeitzone wird immer eingeschlossen.
        - `"never"`
          - : Der Name der Zeitzone wird nie eingeschlossen. Dies führt dazu, dass die zurückgegebene Zeichenkette nicht wiederherstellbar auf dieselbe {{jsxref("Temporal.ZonedDateTime")}} Instanz ist.
        - `"critical"`
          - : Der Name der Zeitzone wird immer eingeschlossen und mit einem kritischen Flag versehen: `[!time)zone_id]`. Nützlich beim Senden der Zeichenkette an bestimmte Systeme, für Temporal selbst jedoch nicht nützlich.
    - `offset` {{optional_inline}}
      - : Ob der Offset (`±HH:mm`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Der Offset wird immer eingeschlossen.
        - `"never"`
          - : Der Offset wird nie eingeschlossen. Dies macht die zurückgegebene Zeichenkette nicht wiederherstellbar auf dieselbe {{jsxref("Temporal.ZonedDateTime")}} Instanz, wenn die Zeitzone enthalten ist, aber die Zeit mehrdeutig ist, oder wenn die Zeitzone ebenfalls nicht angegeben ist.

### Rückgabewert

Eine Zeichenkette im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), die dieses Datum und diese Uhrzeit darstellt. Der Offset und die Kalender-/Zeitzonenanmerkungen sind wie angegeben enthalten.

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
