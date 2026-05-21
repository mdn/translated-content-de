---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Die **`formatRangeToParts()`**-Methode von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}} zurückgegeben werden würde. Sie ist nützlich, um benutzerdefinierte Strings aus den lokalespezifischen Token zu erstellen.

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
  - : Der Beginn des Datumsbereichs. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, wenn das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens einen relevanten Teil des Datums anzeigt.
    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt führt immer zu einem `TypeError`; verwenden Sie {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es stattdessen in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.
- `endDate`
  - : Das Ende des Datumsbereichs. Muss denselben Typ wie `startDate` haben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das den formatierten Datumsbereich in Teilen enthält. Jedes Objekt hat drei Eigenschaften: `type`, `value` und `source`, wobei jede einen String enthält. Die Zeichenkettenverkettung von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}. Der `type` kann dieselben Werte wie {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} haben. Die `source` kann einer der folgenden sein:

- `startRange`
  - : Das Token ist ein Teil des Startdatums.
- `endRange`
  - : Das Token ist ein Teil des Enddatums.
- `shared`
  - : Das Token wird zwischen Start und Ende geteilt; zum Beispiel, wenn die Start- und Enddaten denselben Tageszeitraum teilen, kann dieses Token wiederverwendet werden. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `" – "` Separator, sind ebenfalls als `shared` gekennzeichnet.

Wenn die Start- und Enddaten bei der Genauigkeit der Ausgabe äquivalent sind, hat die Ausgabe dieselbe Liste von Token wie der Aufruf von {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} auf das Startdatum, wobei alle Token als `source: "shared"` markiert sind.

## Beispiele

### Verwendung von formatRangeToParts()

Die `formatRange()`-Methode gibt lokalisierte, opake Zeichenfolgen aus, die nicht direkt manipuliert werden können:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieser Zeichenkette anpassen oder es mit anderen Texten verweben. Die `formatRangeToParts()`-Methode erzeugt dieselbe Information in Teilen:

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
