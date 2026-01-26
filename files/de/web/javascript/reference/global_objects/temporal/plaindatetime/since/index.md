---
title: Temporal.PlainDateTime.prototype.since()
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`since()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum-Zeit-Wert (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist) bis zu diesem Datum-Zeit-Wert darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem Zeitpunkt liegt, und negativ, wenn er danach liegt.

Diese Methode entspricht `this - other`. Um `other - this` durchzuführen, verwenden Sie die {{jsxref("Temporal/PlainDateTime/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die einen Datum-Zeit-Wert darstellt, von dem dieser Datum-Zeit-Wert abgezogen werden soll. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime` Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren alle möglichen Einheiten. Für `largestUnit` bedeutet der Standardwert `"auto"` `"days"` oder `smallestUnit`, je nachdem, welcher größer ist. Für `smallestUnit` ist der Standardwert `"nanoseconds"`. Das aktuelle Datum wird als `relativeTo`-Option verwendet. Beachten Sie, dass die Verwendung von [Einheiten größer als `"days"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) die Dauer möglicherweise nicht portabel für andere Kalender oder Daten machen kann.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` bis zu diesem Datum-Zeit-Wert darstellt. Die Dauer ist positiv, wenn `other` vor diesem Datum-Zeit-Wert liegt, und negativ, wenn danach.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.

## Beispiele

### Verwendung von since()

```js
let lastBilling = Temporal.PlainDateTime.from({
  year: Temporal.Now.plainDateISO().year,
  month: 4,
  day: 1,
});
const now = Temporal.Now.plainDateTimeISO().round("second");
if (Temporal.PlainDateTime.compare(lastBilling, now) > 0) {
  lastBilling = lastBilling.subtract({ years: 1 });
}
const duration = now.since(lastBilling);
console.log(`${duration.toLocaleString("en-US")} since last billing`);
// Expected output: "[number] days, [number] hr, [number] min, [number] sec since last billing"

const duration2 = now.since(lastBilling, { smallestUnit: "days" });
console.log(`${duration2.toLocaleString("en-US")} since last billing`);
// Expected output: "[number] days since last billing"

const duration3 = now.since(lastBilling, {
  largestUnit: "years",
  smallestUnit: "days",
});
console.log(`${duration3.toLocaleString("en-US")} since last billing`);
// Expected output: "[number] months, [number] days since last billing"
```

### Runden des Ergebnisses

Standardmäßig wird der Bruchteil der `smallestUnit` abgeschnitten. Sie können ihn mit den Optionen `roundingIncrement` und `roundingMode` aufrunden.

```js
const dt1 = Temporal.PlainDateTime.from("2022-01-01T00:00:00");
const dt2 = Temporal.PlainDateTime.from("2022-01-28T12:34:56");
const duration = dt2.since(dt1, {
  smallestUnit: "days",
  roundingIncrement: 5,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P30D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
