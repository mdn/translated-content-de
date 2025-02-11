---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`formatRangeToParts()`**-Methode von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/DatetimeFormat/formatRange", "formatRange()")}} zurückgegeben würde. Dies ist nützlich für die Erstellung benutzerdefinierter Strings aus lokalisierten Tokens.

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
  - : Der Beginn des Datumsbereichs. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}- oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, falls das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens einen relevanten Teil des Datums ausgibt.
    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt wirft immer einen `TypeError`. Verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.
- `endDate`
  - : Das Ende des Datumsbereichs. Muss denselben Typ wie `startDate` haben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die den formatierten Datumsbereich in Teilen enthalten. Jedes Objekt hat drei Eigenschaften: `type`, `value` und `source`, die jeweils einen String enthalten. Die Verkettung der `value`-Strings in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}. Der `type` kann dieselben Werte haben wie {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}}. Der `source` kann eine der folgenden sein:

- `startRange`
  - : Der Token ist ein Teil des Startdatums.
- `endRange`
  - : Der Token ist ein Teil des Enddatums.
- `shared`
  - : Der Token wird zwischen Start und Ende geteilt; beispielsweise, wenn die Start- und Enddaten denselben Tageszeitraum teilen, kann dieser Token wiederverwendet werden. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `" – "`-Separator, werden ebenfalls als `shared` markiert.

Wenn das Start- und Enddatum bei der Ausgabepräzision gleich sind, hat die Ausgabe dieselbe Liste von Tokens wie der Aufruf von {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} für das Startdatum, wobei alle Tokens als `source: "shared"` markiert sind.

## Beispiele

### Verwendung von formatRangeToParts()

Die Methode `formatRange()` gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

In vielen Benutzeroberflächen möchten Sie jedoch die Formatierung dieses Strings anpassen oder ihn mit anderen Texten mischen. Die Methode `formatRangeToParts()` liefert dieselben Informationen in Teilen:

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
