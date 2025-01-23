---
title: Temporal.PlainMonthDay.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toString()`** Methode von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt einen String zurück, der diesen Monat-Tag im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `calendarName` {{optional_inline}}
      - : Ob die Kalenderkennung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Die Kalenderkennung wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist. Das Referenzjahr wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Die Kalenderkennung wird immer eingeschlossen. Das Referenzjahr wird ebenfalls immer eingeschlossen.
        - `"never"`
          - : Die Kalenderkennung wird niemals eingeschlossen. Dadurch kann der zurückgegebene String nicht wieder in dieselbe {{jsxref("Temporal.PlainMonthDay")}} Instanz umgewandelt werden, obwohl der Monat-Tag-Wert unverändert bleibt. Das Referenzjahr wird eingeschlossen, wenn der Kalender nicht `"iso8601"` ist.
        - `"critical"`
          - : Die Kalenderkennung wird immer eingeschlossen, und ein kritischer Hinweis wird hinzugefügt: `[!u-ca=calendar_id]`. Nützlich beim Versenden des Strings an bestimmte Systeme, aber nicht nützlich für Temporal selbst. Das Referenzjahr wird ebenfalls immer eingeschlossen.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format), der diesen Monat-Tag darstellt. Die Kalenderkennung wird wie angegeben eingeschlossen. Das Referenzjahr wird eingeschlossen, wenn eine Kalenderkennung enthalten ist oder wenn der Kalender nicht `"iso8601"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `options` kein Objekt oder `undefined` ist.

## Beispiele

### Verwendung von toString()

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
console.log(md.toString()); // '08-01'

const md2 = Temporal.PlainMonthDay.from({
  monthCode: "M08",
  day: 1,
  calendar: "chinese",
});
console.log(md2.toString()); // '1972-09-08[u-ca=chinese]'
```

### Verwendung von Optionen

```js
const isoMD = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const md = Temporal.PlainMonthDay.from({
  monthCode: "M08",
  day: 1,
  calendar: "chinese",
});
console.log(isoMD.toString({ calendarName: "auto" })); // '08-01'
console.log(md.toString({ calendarName: "auto" })); // '1972-09-08[u-ca=chinese]'
console.log(isoMD.toString({ calendarName: "always" })); // '1972-08-01[u-ca=iso8601]'
console.log(md.toString({ calendarName: "always" })); // '1972-09-08[u-ca=chinese]'
console.log(isoMD.toString({ calendarName: "never" })); // '08-01'
console.log(md.toString({ calendarName: "never" })); // '1972-09-08'
console.log(isoMD.toString({ calendarName: "critical" })); // '1972-08-01[!u-ca=iso8601]'
console.log(md.toString({ calendarName: "critical" })); // '1972-09-08[!u-ca=chinese]'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
