---
title: Temporal.PlainYearMonth.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toString()`** Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt einen String zurück, der diesen Jahr-Monat im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `calendarName` {{optional_inline}}
      - : Ob die Kalenderannotation (`[u-ca=calendar_id]`) im Rückgabewert gezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Die Kalenderannotation wird hinzugefügt, wenn der Kalender nicht `"iso8601"` ist. Der Referenztag ist enthalten, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderannotation wird immer hinzugefügt. Der Referenztag ist ebenfalls immer enthalten.
        - `"never"`
          - : Die Kalenderannotation wird nie hinzugefügt. Dies macht den zurückgegebenen String nicht wiederherstellbar zur gleichen {{jsxref("Temporal.PlainYearMonth")}} Instanz, obwohl der Jahr-Monat-Wert gleich bleibt. Der Referenztag ist enthalten, wenn der Kalender nicht `"iso8601"` ist.
        - `"critical"`
          - : Die Kalenderannotation wird immer hinzugefügt und ein kritisches Flag hinzugefügt: `[!u-ca=calendar_id]`. Nützlich beim Senden des Strings an bestimmte Systeme, aber nicht nützlich für Temporal selbst. Der Referenztag ist ebenfalls immer enthalten.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format), der diesen Jahr-Monat darstellt. Die Kalenderannotation ist wie angegeben enthalten. Der Referenztag ist enthalten, wenn eine Kalenderannotation enthalten ist oder wenn der Kalender nicht `"iso8601"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn `options` kein Objekt oder `undefined` ist.

## Beispiele

### Verwendung von toString()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym.toString()); // '2021-08'

const ym2 = Temporal.PlainYearMonth.from({
  year: 4658,
  monthCode: "M08",
  calendar: "chinese",
});
console.log(ym2.toString()); // '2021-09-07[u-ca=chinese]'
```

### Verwendung von Optionen

```js
const isoYM = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym = Temporal.PlainYearMonth.from({
  year: 4658,
  monthCode: "M08",
  calendar: "chinese",
});
console.log(isoYM.toString({ calendarName: "auto" })); // '2021-08'
console.log(ym.toString({ calendarName: "auto" })); // '2021-09-07[u-ca=chinese]'
console.log(isoYM.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(ym.toString({ calendarName: "always" })); // '2021-09-07[u-ca=chinese]'
console.log(isoYM.toString({ calendarName: "never" })); // '2021-08'
console.log(ym.toString({ calendarName: "never" })); // '2021-09-07'
console.log(isoYM.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(ym.toString({ calendarName: "critical" })); // '2021-09-07[!u-ca=chinese]'
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
