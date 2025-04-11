---
title: Temporal.PlainDate.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toString
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt einen String zurück, der dieses Datum im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `calendarName` {{optional_inline}}
      - : Ob die Kalenderanmerkung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt wird. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Schließt die Kalenderanmerkung ein, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Schließt immer die Kalenderanmerkung ein.
        - `"never"`
          - : Schließt die Kalenderanmerkung nie ein. Dadurch wird der zurückgegebene String nicht auf dieselbe {{jsxref("Temporal.PlainDate")}} Instanz zurückführbar, obwohl der Datumswert gleich bleibt.
        - `"critical"`
          - : Schließt immer die Kalenderanmerkung ein und fügt ein kritisches Flag hinzu: `[!u-ca=calendar_id]`. Nützlich, wenn der String an bestimmte Systeme gesendet wird, aber nicht nützlich für Temporal selbst.

### Rückgabewert

Ein String im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format), der dieses Datum darstellt. Die Kalenderanmerkung wird wie angegeben eingeschlossen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` kein Objekt oder `undefined` ist.

## Beispiele

### Nutzung von toString()

```js
const date = Temporal.PlainDate.from("2021-08-01");
console.log(date.toString()); // '2021-08-01'
```

### Nutzung von Optionen

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
