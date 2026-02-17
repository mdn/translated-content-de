---
title: Temporal.PlainYearMonth.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

Die **`toString()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt einen String zurück, der diesen Jahr-Monat im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt.

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
          - : Schließen Sie die Kalenderanmerkung ein, wenn der Kalender nicht `"iso8601"` ist. Der Referenztag wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderanmerkung immer einschließen. Der Referenztag wird ebenfalls immer eingeschlossen.
        - `"never"`
          - : Die Kalenderanmerkung niemals einschließen. Dies führt dazu, dass der zurückgegebene String nicht auf dieselbe {{jsxref("Temporal.PlainYearMonth")}}-Instanz zurückgeführt werden kann, obwohl der Jahr-Monat-Wert gleich bleibt. Der Referenztag wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"critical"`
          - : Die Kalenderanmerkung immer einschließen und ein kritisches Flag hinzufügen: `[!u-ca=calendar_id]`. Nützlich, wenn der String an bestimmte Systeme gesendet wird, aber nicht nützlich für Temporal selbst. Der Referenztag wird ebenfalls immer eingeschlossen.

### Rückgabewert

Ein String im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format), der diesen Jahr-Monat darstellt. Die Kalenderanmerkung wird gemäß den Spezifikationen eingeschlossen. Der Referenztag wird ebenfalls eingeschlossen, wenn eine Kalenderanmerkung enthalten ist oder der Kalender nicht `"iso8601"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` kein Objekt oder `undefined` ist.

## Beispiele

### Verwendung von toString()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym.toString()); // '2021-08'

const ym2 = Temporal.PlainYearMonth.from({
  year: 5781,
  monthCode: "M08",
  calendar: "hebrew",
});
console.log(ym2.toString()); // '2021-04-13[u-ca=hebrew]'
```

### Verwendung von Optionen

```js
const isoYM = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym = Temporal.PlainYearMonth.from({
  year: 5781,
  monthCode: "M08",
  calendar: "hebrew",
});
console.log(isoYM.toString({ calendarName: "auto" })); // '2021-08'
console.log(ym.toString({ calendarName: "auto" })); // '2021-04-13[u-ca=hebrew]'
console.log(isoYM.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(ym.toString({ calendarName: "always" })); // '2021-04-13[u-ca=hebrew]'
console.log(isoYM.toString({ calendarName: "never" })); // '2021-08'
console.log(ym.toString({ calendarName: "never" })); // '2021-04-13'
console.log(isoYM.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(ym.toString({ calendarName: "critical" })); // '2021-04-13[!u-ca=hebrew]'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
