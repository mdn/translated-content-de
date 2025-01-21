---
title: Intl.DateTimeFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`formatRange()`**-Methode von {{jsxref("Intl.DateTimeFormat")}}-Instanzen formatiert einen Datumsbereich auf die prägnanteste Weise basierend auf den beim Erstellen dieses `Intl.DateTimeFormat`-Objekts angegebenen Lokalisierungen und Optionen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrange.html", "taller")}}

## Syntax

```js-nolint
formatRange(startDate, endDate)
```

### Parameter

- `startDate`
  - : Der Beginn des Datumsbereichs. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es sich um ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt handeln, wenn das `DateTimeFormat`-Objekt dafür konfiguriert wurde, mindestens einen relevanten Teil des Datums anzuzeigen.
    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt wird immer einen `TypeError` werfen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.
- `endDate`
  - : Das Ende des Datumsbereichs. Muss denselben Typ wie `startDate` haben.

### Rückgabewert

Ein String, der den gegebenen Datumsbereich formatiert entsprechend der Lokale und Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}}-Objekts darstellt.

## Beispiele

### Grundlegende Verwendung von formatRange

Diese Methode erhält zwei {{jsxref("Date")}}s und formatiert den Datumsbereich auf die prägnanteste Weise basierend auf dem `locale` und den `options`, die beim Erstellen von {{jsxref("Intl.DateTimeFormat")}} angegeben wurden.

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
