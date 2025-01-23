---
title: Temporal.PlainYearMonth.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`**-Methode von Instanzen des Objekts {{jsxref("Temporal.PlainYearMonth")}} gibt einen Zeichenfolgenwert zurück, der diesen Jahr-Monat im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt.

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
          - : Einschließen der Kalenderanmerkung, wenn der Kalender nicht `"iso8601"` ist. Der Referenztag ist eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Immer die Kalenderanmerkung einschließen. Der Referenztag ist ebenfalls immer eingeschlossen.
        - `"never"`
          - : Die Kalenderanmerkung niemals einschließen. Dadurch ist die zurückgegebene Zeichenkette nicht auf dieselbe {{jsxref("Temporal.PlainYearMonth")}}-Instanz zurückführbar, obwohl der Jahr-Monat-Wert gleich bleibt. Der Referenztag ist eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"critical"`
          - : Immer die Kalenderanmerkung einschließen und ein kritisches Flag hinzufügen: `[!u-ca=calendar_id]`. Nützlich, wenn die Zeichenfolge an bestimmte Systeme gesendet wird, aber nicht nützlich für Temporal selbst. Der Referenztag ist ebenfalls immer eingeschlossen.

### Rückgabewert

Eine Zeichenfolge im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format), die diesen Jahr-Monat darstellt. Die Kalenderanmerkung wird wie angegeben eingefügt. Der Referenztag ist eingeschlossen, wenn eine Kalenderanmerkung eingeschlossen ist oder wenn der Kalender nicht `"iso8601"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` nicht ein Objekt oder `undefined` ist.

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
