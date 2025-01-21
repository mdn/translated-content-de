---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`formatRangeToParts()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/DatetimeFormat/formatRange", "formatRange()")}} zurückgegeben würde. Sie ist nützlich, um benutzerdefinierte Strings aus den lokalespezifischen Tokens zu erstellen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrangetoparts.html", "taller")}}

## Syntax

```js-nolint
formatRangeToParts(startDate, endDate)
```

### Parameter

- `startDate`
  - : Der Beginn des Datumsbereichs. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, wenn das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens einen relevanten Teil des Datums darstellt.
    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt wird immer einen `TypeError` auslösen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.
- `endDate`
  - : Das Ende des Datumsbereichs. Muss denselben Typ wie `startDate` haben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das den formatierten Datumsbereich in Teilen darstellt. Jedes Objekt hat drei Eigenschaften, `type`, `value` und `source`, die jeweils einen String enthalten. Die Stringkonkatenation von `value` in der angegebenen Reihenfolge führt zu demselben String wie {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}. Der `type` kann dieselben Werte haben wie {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}}. Der `source` kann einer der folgenden sein:

- `startRange`
  - : Das Token ist ein Teil des Startdatums.
- `endRange`
  - : Das Token ist ein Teil des Enddatums.
- `shared`
  - : Das Token wird zwischen Anfang und Ende geteilt; beispielsweise kann ein Token wiederverwendet werden, wenn Start- und Enddatum denselben Tagesabschnitt teilen. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `" – "`-Separator, werden ebenfalls als `shared` markiert.

Wenn die Start- und Enddaten bei der Präzision der Ausgabe gleichwertig sind, enthält die Ausgabe dieselbe Liste von Tokens wie beim Aufruf von {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} für das Startdatum, wobei alle Tokens als `source: "shared"` markiert sind.

## Beispiele

### Verwendung von formatRangeToParts()

Die `formatRange()`-Methode gibt lokalisierte, opake Strings aus, die nicht direkt manipuliert werden können:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieses Strings anpassen oder es mit anderen Texten verknüpfen. Die `formatRangeToParts()`-Methode liefert dieselben Informationen in Teilen:

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
