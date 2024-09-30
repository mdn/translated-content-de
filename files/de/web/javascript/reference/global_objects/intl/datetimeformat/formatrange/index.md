---
title: Intl.DateTimeFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`formatRange()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen formatiert einen Datumsbereich auf die knappste Weise, basierend auf den bei der Instanziierung dieses `Intl.DateTimeFormat`-Objekts angegebenen Sprachumgebungen und Optionen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrange.html", "taller")}}

## Syntax

```js-nolint
formatRange(startDate, endDate)
```

### Parameter

- `startDate`
  - : Ein {{jsxref("Date")}}-Objekt, das den Beginn des Datumsbereichs darstellt.
- `endDate`
  - : Ein {{jsxref("Date")}}-Objekt, das das Ende des Datumsbereichs darstellt.

### Rückgabewert

Ein String, der den angegebenen Datumsbereich formatiert gemäß der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}}-Objekts darstellt.

## Beispiele

### Grundlegende Verwendung von formatRange

Diese Methode erhält zwei {{jsxref("Date")}}s und formatiert den Datumsbereich auf die knappste Weise, basierend auf dem bei der Instanziierung von {{jsxref("Intl.DateTimeFormat")}} angegebenen `locale` und den `options`.

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
