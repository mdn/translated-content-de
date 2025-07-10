---
title: Temporal.PlainMonthDay.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toString()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen gibt einen String zurück, der diesen Monat-Tag im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) darstellt.

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `calendarName` {{optional_inline}}
      - : Gibt an, ob die Kalender-Anmerkung (`[u-ca=calendar_id]`) im Rückgabewert angezeigt werden soll. Mögliche Werte sind:
        - `"auto"` (Standard)
          - : Schließen Sie die Kalender-Anmerkung ein, wenn der Kalender nicht `"iso8601"` ist. Das Referenzjahr wird einbezogen, wenn der Kalender nicht `"iso8601"` ist.
        - `"always"`
          - : Immer die Kalender-Anmerkung einfügen. Das Referenzjahr wird ebenfalls immer einbezogen.
        - `"never"`
          - : Die Kalender-Anmerkung nie einfügen. Dadurch kann der zurückgegebene String nicht in die gleiche {{jsxref("Temporal.PlainMonthDay")}}-Instanz zurückverwandelt werden, obwohl der Monat-Tag-Wert gleich bleibt. Das Referenzjahr wird einbezogen, wenn der Kalender nicht `"iso8601"` ist.
        - `"critical"`
          - : Immer die Kalender-Anmerkung einfügen und eine kritische Kennzeichnung hinzufügen: `[!u-ca=calendar_id]`. Nützlich beim Senden des Strings an bestimmte Systeme, jedoch nicht für Temporal selbst. Das Referenzjahr wird ebenfalls immer einbezogen.

### Rückgabewert

Ein String im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format), der diesen Monat-Tag darstellt. Die Kalender-Anmerkung ist wie angegeben enthalten. Das Referenzjahr wird einbezogen, wenn eine Kalender-Anmerkung enthalten ist oder wenn der Kalender nicht `"iso8601"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options` kein Objekt oder `undefined` ist.

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
