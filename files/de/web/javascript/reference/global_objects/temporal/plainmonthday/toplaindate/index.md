---
title: Temporal.PlainMonthDay.prototype.toPlainDate()
short-title: toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toPlainDate
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toPlainDate()`** Methode von Instanzen des {{jsxref("Temporal.PlainMonthDay")}} gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das diesen Monats-Tag und ein angegebenes Jahr im selben Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainDate(yearInfo)
```

### Parameter

- `yearInfo`
  - : Ein Objekt, das die Jahr-Komponente des resultierenden `PlainDate` darstellt und die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `era` und `eraYear`
      - : Ein String und eine Ganzzahl, die der {{jsxref("Temporal/PlainDate/era", "era")}} und der {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} Eigenschaft entsprechen. Sie werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Wenn sie nicht angegeben werden, muss `year` angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben werden, müssen sie konsistent sein.
    - `year`
      - : Entspricht der {{jsxref("Temporal/PlainDate/year", "year")}} Eigenschaft.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das Datum darstellt, das durch diesen Monats-Tag und das Jahr in `yearInfo` beschrieben wird, interpretiert im Kalendersystem dieses Monats-Tages.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `yearInfo` kein Objekt ist.

## Beispiele

### Verwendung von toPlainDate()

```js
const md = Temporal.PlainMonthDay.from("07-01");
const date = md.toPlainDate({ year: 2021 });
console.log(date.toString()); // 2021-07-01

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=japanese]");
const date2 = md2.toPlainDate({ era: "reiwa", eraYear: 1 });
console.log(date2.toString()); // 2019-07-01[u-ca=japanese]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
