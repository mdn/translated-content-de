---
title: Temporal.PlainDate.prototype.since()
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`since()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist) bis zu diesem Datum darstellt. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn es danach liegt.

Diese Methode führt `this - other` aus. Um `other - this` durchzuführen, verwenden Sie die {{jsxref("Temporal/PlainDate/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}} Instanz, die ein Datum repräsentiert, das von diesem Datum subtrahiert werden soll. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate` Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode`, und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren nur die Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"` oder ihre Singularformen. Für `largestUnit` meint der Standardwert `"auto"` `"days"` oder `smallestUnit`, je nachdem, welche größer ist. Für `smallestUnit` ist der Standardwert `"days"`. Das aktuelle Datum wird als `relativeTo` Option verwendet. Beachten Sie, dass die Verwendung von [Einheiten größer als `"days"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) dazu führen kann, dass die Dauer nicht auf andere Kalender oder Daten übertragbar ist.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` bis zu diesem Datum darstellt. Die Dauer ist positiv, wenn `other` vor diesem Datum liegt, und negativ, wenn es danach liegt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.

## Beispiele

### Verwendung von since()

```js
const date = Temporal.PlainDate.from("2022-12-25");
const now = Temporal.Now.plainDateISO();
const duration = now.since(date);
const formatter = new Intl.DurationFormat("en-US", { style: "long" });
console.log(`It's been ${formatter.format(duration)} since that Christmas...`);
// Expected output: "It's been [number] days since that Christmas..."

const duration2 = now.since(date, { smallestUnit: "months" });
console.log(`It's been ${formatter.format(duration2)} since that Christmas...`);
// Expected output: "It's been [number] months since that Christmas..."

const duration3 = now.since(date, {
  largestUnit: "years",
  smallestUnit: "months",
});
console.log(`It's been ${formatter.format(duration3)} since that Christmas...`);
// Expected output: "It's been [number] years, [number] months since that Christmas..."
```

### Abrunden des Ergebnisses

Standardmäßig wird der Bruchteil der `smallestUnit` abgeschnitten. Sie können ihn mit den Optionen `roundingIncrement` und `roundingMode` aufrunden.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-01-28");
const duration = date2.since(date1, {
  smallestUnit: "days",
  roundingIncrement: 5,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P30D"
```

### Vergleich verschiedener Kalender

Standardmäßig müssen die beiden Daten denselben Kalender haben. Dies dient dazu, Mehrdeutigkeiten bei der Bedeutung von Monaten und Jahren zu vermeiden. Wenn Sie Daten aus verschiedenen Kalendern vergleichen möchten, können Sie sie zuerst in denselben Kalender konvertieren.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-01-28[u-ca=chinese]");
const duration = date2.withCalendar("iso8601").since(date1);
console.log(duration.toString()); // "P27D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
