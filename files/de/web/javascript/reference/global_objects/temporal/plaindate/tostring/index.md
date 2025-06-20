---
title: Temporal.PlainDate.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Datum im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `calendarName` {{optional_inline}}
      - : Ob die Kalenderannotation (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Schließen Sie die Kalenderannotation ein, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Immer die Kalenderannotation einschließen.
        - `"never"`
          - : Nie die Kalenderannotation einschließen. Dies führt dazu, dass die zurückgegebene Zeichenkette nicht auf dieselbe {{jsxref("Temporal.PlainDate")}}-Instanz zurückführbar ist, obwohl der Datumswert gleich bleibt.
        - `"critical"`
          - : Immer die Kalenderannotation einschließen und ein kritisches Flag hinzufügen: `[!u-ca=calendar_id]`. Nützlich beim Senden der Zeichenkette an bestimmte Systeme, jedoch nicht für Temporal selbst.

### Rückgabewert

Eine Zeichenkette im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format), die dieses Datum darstellt. Die Kalenderannotation ist wie angegeben enthalten.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` kein Objekt ist oder `undefined`.

## Beispiele

### Verwendung von toString()

```js
const date = Temporal.PlainDate.from("2021-08-01");
console.log(date.toString()); // '2021-08-01'
```

### Verwendung von Optionen

```js
const isoDate = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
console.log(isoDate.toString({ calendarName: "auto" })); // '2021-08-01'
console.log(date.toString({ calendarName: "auto" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(isoDate.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(date.toString({ calendarName: "always" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(date.toString({ calendarName: "never" })); // '2582-12-17'
console.log(isoDate.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(date.toString({ calendarName: "critical" })); // '2582-12-17[!u-ca=islamic-umalqura]'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
