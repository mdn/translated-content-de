---
title: Temporal.PlainYearMonth.prototype.toPlainDate()
short-title: toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toPlainDate
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toPlainDate()`** Methode von Instanzen von {{jsxref("Temporal.PlainYearMonth")}} gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das dieses Jahr-Monat und einen angegebenen Tag im selben Kalendersystem repräsentiert.

## Syntax

```js-nolint
toPlainDate(dayInfo)
```

### Parameter

- `dayInfo` {{optional_inline}}
  - : Ein Objekt, das die Tageskomponente des resultierenden `PlainDate` darstellt und die folgende Eigenschaft enthält:
    - `day`
      - : Entspricht der {{jsxref("Temporal/PlainDate/day", "day")}} Eigenschaft.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das durch dieses Jahr-Monat und den Tag in `dayInfo` spezifizierte Datum, interpretiert im Kalendersystem dieses Jahr-Monats, repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `dayInfo` kein Objekt ist.

## Beispiele

### Verwendung von toPlainDate()

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const date = ym.toPlainDate({ day: 1 });
console.log(date.toString()); // 2021-07-01

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
const date2 = ym2.toPlainDate({ day: 15 });
console.log(date2.toString()); // 2021-06-24[u-ca=chinese]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
