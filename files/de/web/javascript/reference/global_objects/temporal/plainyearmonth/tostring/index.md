---
title: Temporal.PlainYearMonth.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`** Methode von Instanzen von {{jsxref("Temporal.PlainYearMonth")}} gibt eine Zeichenkette zurück, die diesen Jahr-Monat im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `calendarName` {{optional_inline}}
      - : Legt fest, ob die Kalenderanmerkung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt wird. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Schließt die Kalenderanmerkung ein, wenn der Kalender nicht `"iso8601"` ist. Der Referenztag wird einbezogen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderanmerkung wird immer einbezogen. Der Referenztag wird ebenfalls immer einbezogen.
        - `"never"`
          - : Die Kalenderanmerkung wird nie einbezogen. Dadurch wird die zurückgegebene Zeichenkette nicht auf dieselbe {{jsxref("Temporal.PlainYearMonth")}} Instanz zurückführbar, obwohl der Jahr-Monat-Wert weiterhin derselbe bleibt. Der Referenztag wird einbezogen, wenn der Kalender nicht `"iso8601"` ist.
        - `"critical"`
          - : Die Kalenderanmerkung wird immer einbezogen und ein kritisches Flag hinzugefügt: `[!u-ca=calendar_id]`. Nützlich beim Senden der Zeichenkette an bestimmte Systeme, aber nicht nützlich für Temporal selbst. Der Referenztag wird ebenfalls immer einbezogen.

### Rückgabewert

Eine Zeichenkette im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format), die diesen Jahr-Monat darstellt. Die Kalenderanmerkung ist wie angegeben enthalten. Der Referenztag ist enthalten, wenn eine Kalenderanmerkung enthalten ist oder wenn der Kalender nicht `"iso8601"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn einer der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` kein Objekt oder `undefined` ist.

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
