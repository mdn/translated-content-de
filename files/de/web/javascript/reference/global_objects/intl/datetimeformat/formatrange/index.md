---
title: Intl.DateTimeFormat.prototype.formatRange()
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
l10n:
  sourceCommit: 5206afe08e91add1b39cdeaa47d95a5da347a065
---

{{JSRef}}

Die **`formatRange()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen formatiert einen Datumsbereich auf die prägnanteste Weise basierend auf den beim Instanziieren dieses `Intl.DateTimeFormat`-Objekts angegebenen Sprachen und Optionen.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.formatRange()", "taller")}}

```js interactive-example
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const options2 = { year: "2-digit", month: "numeric", day: "numeric" };

const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const endDate = new Date(Date.UTC(2008, 0, 10, 11, 0, 0));

const dateTimeFormat = new Intl.DateTimeFormat("en", options1);
console.log(dateTimeFormat.formatRange(startDate, endDate));
// Expected output: "Wednesday, January 10, 2007 – Thursday, January 10, 2008"

const dateTimeFormat2 = new Intl.DateTimeFormat("en", options2);
console.log(dateTimeFormat2.formatRange(startDate, endDate));
// Expected output: "1/10/07 – 1/10/08"
```

## Syntax

```js-nolint
formatRange(startDate, endDate)
```

### Parameter

- `startDate`
  - : Der Beginn des Datumsbereichs. Kann ein {{jsxref("Date")}} oder {{jsxref("Temporal.PlainDateTime")}} Objekt sein. Zusätzlich kann es sich um ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}} Objekt handeln, wenn das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens einen relevanten Teil des Datums ausgibt.
    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}} Objekt wird immer einen `TypeError` auslösen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}} Objekt.
- `endDate`
  - : Das Ende des Datumsbereichs. Muss denselben Typ wie `startDate` haben.

### Rückgabewert

Ein String, der den angegebenen Datumsbereich formatiert entsprechend der Sprache und den Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}} Objekts darstellt. Wenn die Start- und Enddaten auf die Präzision der Ausgabe äquivalent sind, wird die Ausgabe nur ein einzelnes Datum enthalten.

## Beispiele

### Grundlegende Verwendung von formatRange

Diese Methode erhält zwei {{jsxref("Date")}}s und formatiert den Datumsbereich auf die prägnanteste Weise basierend auf der beim Instanziieren von {{jsxref("Intl.DateTimeFormat")}} bereitgestellten `locale` und `options`.

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT
const date3 = new Date(Date.UTC(1906, 0, 20, 10, 0, 0)); // Sat, 20 Jan 1906 10:00:00 GMT

const fmt1 = new Intl.DateTimeFormat("en", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
console.log(fmt1.format(date1)); // '1/10/06, 10:00 AM'
console.log(fmt1.formatRange(date1, date2)); // '1/10/06, 10:00 – 11:00 AM'
console.log(fmt1.formatRange(date1, date3)); // '1/10/06, 10:00 AM – 1/20/07, 10:00 AM'

const fmt2 = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
console.log(fmt2.format(date1)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date2)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date3)); // 'Jan 10 – 20, 1906'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
