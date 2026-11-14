---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`formatRangeToParts()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil der formatierten Zeichenfolge darstellen, die {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}} zurückgeben würde. Sie ist nützlich, um aus gebietsschemaspezifischen Bestandteilen eigene Zeichenfolgen zu erstellen.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.formatRangeToParts()", "taller")}}

```js interactive-example
const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0)); // > 'Wed, 10 Jan 2007 10:00:00 GMT'
const endDate = new Date(Date.UTC(2007, 0, 10, 11, 0, 0)); // > 'Wed, 10 Jan 2007 11:00:00 GMT'

const dateTimeFormat = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

const parts = dateTimeFormat.formatRangeToParts(startDate, endDate);
for (const part of parts) {
  console.log(part);
}
// Expected output (in GMT timezone):
// Object { type: "hour", value: "10", source: "startRange" }
// Object { type: "literal", value: ":", source: "startRange" }
// Object { type: "minute", value: "00", source: "startRange" }
// Object { type: "literal", value: " – ", source: "shared" }
// Object { type: "hour", value: "11", source: "endRange" }
// Object { type: "literal", value: ":", source: "endRange" }
// Object { type: "minute", value: "00", source: "endRange" }
// Object { type: "literal", value: " ", source: "shared" }
// Object { type: "dayPeriod", value: "AM", source: "shared" }
```

## Syntax

```js-nolint
formatRangeToParts(startDate, endDate)
```

### Parameter

- `startDate`
  - : Der Beginn des Datumsbereichs. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Wenn das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens einen relevanten Bestandteil des Datums ausgibt, kann es auch ein {{jsxref("Temporal.PlainTime")}}-, {{jsxref("Temporal.PlainDate")}}-, {{jsxref("Temporal.PlainYearMonth")}}- oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein.
    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt löst immer einen `TypeError` aus. Verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.
- `endDate`
  - : Das Ende des Datumsbereichs. Muss denselben Typ wie `startDate` haben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die den formatierten Datumsbereich in Teilen enthalten. Jedes Objekt hat drei Eigenschaften, `type`, `value` und `source`, die jeweils eine Zeichenfolge enthalten. Werden die `value`-Zeichenfolgen in der angegebenen Reihenfolge aneinandergehängt, ergibt sich dieselbe Zeichenfolge wie bei {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}. `type` kann dieselben Werte wie bei {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} haben. `source` kann einen der folgenden Werte haben:

- `startRange`
  - : Der Bestandteil gehört zum Anfangsdatum.
- `endRange`
  - : Der Bestandteil gehört zum Enddatum.
- `shared`
  - : Der Bestandteil wird vom Anfangs- und Enddatum gemeinsam verwendet. Wenn beispielsweise beide Datumsangaben denselben Tageszeitraum haben, kann der entsprechende Bestandteil wiederverwendet werden. Alle Literale, die zum Bereichsmuster selbst gehören, etwa das Trennzeichen `" – "`, werden ebenfalls als `shared` gekennzeichnet.

Wenn Anfangs- und Enddatum bei der Genauigkeit der Ausgabe übereinstimmen, enthält die Ausgabe dieselbe Liste von Bestandteilen wie ein Aufruf von {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} mit dem Anfangsdatum. Dabei sind alle Bestandteile mit `source: "shared"` gekennzeichnet.

## Beispiele

### formatRangeToParts() verwenden

Die Methode `formatRange()` gibt lokalisierte Zeichenfolgen aus, deren Bestandteile sich nicht direkt bearbeiten lassen:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

In vielen Benutzeroberflächen möchten Sie möglicherweise die Formatierung dieser Zeichenfolge anpassen oder sie mit anderen Texten kombinieren. Die Methode `formatRangeToParts()` stellt dieselben Informationen in einzelnen Teilen bereit:

```js
console.log(fmt.formatRangeToParts(date1, date2));

// return value:
[
  { type: "hour", value: "10", source: "startRange" },
  { type: "literal", value: ":", source: "startRange" },
  { type: "minute", value: "00", source: "startRange" },
  { type: "literal", value: " – ", source: "shared" },
  { type: "hour", value: "11", source: "endRange" },
  { type: "literal", value: ":", source: "endRange" },
  { type: "minute", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "dayPeriod", value: "AM", source: "shared" },
];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
