---
title: Temporal.PlainMonthDay.prototype.toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toPlainDate
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`toPlainDate()`** von Instanzen des {{jsxref("Temporal.PlainMonthDay")}} gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das diesen Monat-Tag und ein angegebenes Jahr im selben Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainDate(yearInfo)
```

### Parameter

- `yearInfo`
  - : Ein Objekt, das die Jahrkomponente des resultierenden `PlainDate` darstellt und die folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):
    - `era` und `eraYear`
      - : Ein String und eine Ganzzahl, die den {{jsxref("Temporal/PlainDate/era", "era")}}- und {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}-Eigenschaften entsprechen. Sie werden nur verwendet, wenn das Kalendersystem Epochen hat. `era` und `eraYear` müssen gleichzeitig angegeben werden. Wenn sie nicht angegeben sind, muss `year` angegeben werden. Wenn alle `era`, `eraYear` und `year` angegeben sind, müssen sie konsistent sein.
    - `year`
      - : Entspricht der {{jsxref("Temporal/PlainDate/year", "year")}}-Eigenschaft.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch diesen Monat-Tag und das Jahr in `yearInfo` spezifizierte Datum darstellt, interpretiert im Kalendersystem dieses Monat-Tags.

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
