---
title: Temporal.PlainYearMonth.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`since()`** Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} umwandelbar ist) zu diesem Jahr-Monat darstellt. Die Dauer ist positiv, wenn der andere Monat vor diesem Monat liegt, und negativ, wenn er danach liegt.

Diese Methode führt `this - other` aus. Um `other - this` auszuführen, verwenden Sie die {{jsxref("Temporal/PlainYearMonth/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die einen Jahr-Monat darstellt, der von diesem Jahr-Monat subtrahiert werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth` Objekt umgewandelt. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren nur die Einheiten: `"year"`, `"month"` oder deren Pluralformen. Für `largestUnit` bedeutet der Standardwert `"auto"` `"year"`. Für `smallestUnit` ist der Standardwert `"month"`. Das aktuelle Datum wird als `relativeTo` Option verwendet.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` zu diesem Jahr-Monat darstellt. Die Dauer ist positiv, wenn `other` vor diesem Jahr-Monat liegt, und negativ, wenn danach.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.

## Beispiele

### Verwendung von since()

```js
const lastUpdated = Temporal.PlainYearMonth.from("2022-01");
const now = Temporal.Now.plainDateISO().toPlainYearMonth();
const duration = now.since(lastUpdated);
console.log(`Last updated ${duration.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] years, [number] months ago"

const duration2 = now.since(lastUpdated, { largestUnit: "month" });
console.log(`Last updated ${duration2.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] months ago"

const duration3 = now.since(lastUpdated, { smallestUnit: "year" });
console.log(`Last updated ${duration3.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] years ago"
```

### Abrunden des Ergebnisses

Standardmäßig wird der Bruchteil der `smallestUnit` abgeschnitten. Sie können ihn mithilfe der Optionen `roundingIncrement` und `roundingMode` aufrunden.

```js
const ym1 = Temporal.PlainYearMonth.from("2022-01");
const ym2 = Temporal.PlainYearMonth.from("2022-11");
const duration = ym2.since(ym1, {
  smallestUnit: "year",
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P1Y"
```

### Ergebnis in Tagen erhalten

Standardmäßig enthält die resultierende Dauer niemals Tage, da `PlainYearMonth` keine Taggenauigkeit bietet. Sie können das Ergebnis in Tagen erhalten, indem Sie es zuerst mit einem eindeutigen Tag in ein {{jsxref("Temporal.PlainDate")}} umwandeln.

```js
const ym1 = Temporal.PlainYearMonth.from("2022-01");
const ym2 = Temporal.PlainYearMonth.from("2022-11");
const duration = ym2.toPlainDate({ day: 1 }).since(ym1.toPlainDate({ day: 1 }));
console.log(duration.toString()); // "P304D"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
