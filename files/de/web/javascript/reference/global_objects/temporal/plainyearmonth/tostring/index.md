---
title: Temporal.PlainYearMonth.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toString()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt einen String zurück, der diesen Jahr-Monat im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) repräsentiert.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit folgender Eigenschaft:
    - `calendarName` {{optional_inline}}
      - : Gibt an, ob die Kalenderanmerkung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Die Kalenderanmerkung wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist. Der Bezugstag wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderanmerkung wird immer eingeschlossen. Der Bezugstag wird ebenfalls immer eingeschlossen.
        - `"never"`
          - : Die Kalenderanmerkung wird nie eingeschlossen. Dies führt dazu, dass der zurückgegebene String nicht auf die gleiche {{jsxref("Temporal.PlainYearMonth")}}-Instanz zurückführbar ist, obwohl der Jahr-Monat-Wert gleich bleibt. Der Bezugstag wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"critical"`
          - : Die Kalenderanmerkung wird immer eingeschlossen und ein kritisches Flag hinzugefügt: `[!u-ca=calendar_id]`. Nützlich beim Senden des Strings an bestimmte Systeme, jedoch nicht nützlich für Temporal selbst. Der Bezugstag wird ebenfalls immer eingeschlossen.

### Rückgabewert

Ein String im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format), der diesen Jahr-Monat repräsentiert. Die Kalenderanmerkung ist wie angegeben enthalten. Der Bezugstag ist enthalten, wenn eine Kalenderanmerkung enthalten ist oder wenn der Kalender nicht `"iso8601"` ist.

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
