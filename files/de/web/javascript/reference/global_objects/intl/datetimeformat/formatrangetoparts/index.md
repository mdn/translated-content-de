---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`formatRangeToParts()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/DatetimeFormat/formatRange", "formatRange()")}} zurückgegeben würde. Sie ist nützlich für den Aufbau benutzerdefinierter Strings aus den lokal-spezifischen Tokens.

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
// Object { type: "hour", value: "2", source: "startRange" }
// Object { type: "literal", value: ":", source: "startRange" }
// Object { type: "minute", value: "00", source: "startRange" }
// Object { type: "literal", value: " – ", source: "shared" }
// Object { type: "hour", value: "3", source: "endRange" }
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
  - : Der Beginn des Datumsbereichs. Kann ein {{jsxref("Date")}} oder ein {{jsxref("Temporal.PlainDateTime")}} Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}} Objekt sein, wenn das `DateTimeFormat` Objekt so konfiguriert wurde, dass es mindestens einen relevanten Teil des Datums anzeigt.
    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}} Objekt wird immer einen `TypeError` auslösen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}} Objekt.
- `endDate`
  - : Das Ende des Datumsbereichs. Muss den gleichen Typ wie `startDate` haben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das den formatierten Datumsbereich in Teilen enthält. Jedes Objekt hat drei Eigenschaften, `type`, `value` und `source`, die jeweils einen String enthalten. Die String-Konkatenation von `value`, in der angegebenen Reihenfolge, ergibt den gleichen String wie {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}. Der `type` kann die gleichen Werte haben wie {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}}. Die `source` kann einer der folgenden sein:

- `startRange`
  - : Das Token ist ein Teil des Startdatums.
- `endRange`
  - : Das Token ist ein Teil des Enddatums.
- `shared`
  - : Das Token wird zwischen Start und Ende gemeinsam verwendet; zum Beispiel, wenn das Start- und Enddatum denselben Tageszeitraum teilen, kann dieses Token wiederverwendet werden. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `" – "` Separator, werden auch als `shared` markiert.

Wenn die Start- und Enddaten bei der Präzision der Ausgabe gleichwertig sind, hat die Ausgabe die gleiche Liste von Tokens wie bei einem Aufruf von {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} auf das Startdatum, mit allen Tokens markiert als `source: "shared"`.

## Beispiele

### Verwendung von formatRangeToParts()

Die `formatRange()` Methode gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieses Strings anpassen oder es mit anderen Texten verweben. Die `formatRangeToParts()` Methode liefert die gleichen Informationen in Teilen:

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
