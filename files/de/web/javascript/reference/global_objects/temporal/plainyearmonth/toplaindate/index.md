---
title: Temporal.PlainYearMonth.prototype.toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toPlainDate
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toPlainDate()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Jahr-Monat und einen angegebenen Tag im gleichen Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainDate(dayInfo)
```

### Parameter

- `dayInfo` {{optional_inline}}
  - : Ein Objekt, das die Tageskomponente des resultierenden `PlainDate` darstellt und die folgende Eigenschaft enthält:
    - `day`
      - : Entspricht der {{jsxref("Temporal/PlainDate/day", "day")}}-Eigenschaft.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das Datum darstellt, das durch diesen Jahr-Monat und den Tag in `dayInfo` spezifiziert ist, interpretiert im Kalendersystem dieses Jahr-Monats.

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
