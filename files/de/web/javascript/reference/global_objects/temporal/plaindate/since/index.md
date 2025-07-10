---
title: Temporal.PlainDate.prototype.since()
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`since()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist) zu diesem Datum darstellt. Die Dauer ist positiv, wenn das andere Datum vor diesem Datum liegt, und negativ, wenn es danach liegt.

Diese Methode führt `this - other` aus. Um `other - this` auszuführen, verwenden Sie die {{jsxref("Temporal/PlainDate/until", "until()")}}-Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}}-Instanz, die ein Datum darstellt, das von diesem Datum subtrahiert wird. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate`-Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren nur die Einheiten: `"years"`, `"months"`, `"weeks"`, `"days"` oder deren Singularformen. Für `largestUnit` bedeutet der Standardwert `"auto"` entweder `"days"` oder `smallestUnit`, je nachdem, welcher größer ist. Für `smallestUnit` ist der Standardwert `"days"`. Das aktuelle Datum wird als die Option `relativeTo` verwendet. Beachten Sie, dass die Verwendung von [Einheiten, die größer als `"days"` sind](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations), die Dauer möglicherweise nicht auf andere Kalender oder Daten übertragbar macht.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}}-Objekt, das die Dauer _seit_ `other` zu diesem Datum darstellt. Die Dauer ist positiv, wenn `other` vor diesem Datum liegt, und negativ, wenn danach.

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

### Rundung des Ergebnisses

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
