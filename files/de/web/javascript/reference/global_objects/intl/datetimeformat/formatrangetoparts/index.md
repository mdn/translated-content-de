---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`formatRangeToParts()`** von Instanzen von {{jsxref("Intl.DateTimeFormat")}} gibt ein Array von lokalespezifischen Token zurück, die jeden Teil des formatierten Datumsbereichs darstellen, der von diesem `Intl.DateTimeFormat`-Objekt erzeugt wird.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrangetoparts.html", "taller")}}

## Syntax

```js-nolint
formatRangeToParts(startDate, endDate)
```

## Beispiele

### Grundlegende Verwendung von formatRangeToParts

Diese Methode erhält zwei {{jsxref("Date")}}s und gibt ein {{jsxref("Array")}} von Objekten zurück, die die _lokalespezifischen_ Token enthalten, die jeden Teil des formatierten Datumsbereichs darstellen.

> [!NOTE]
> Die in Ihrer Sprache angezeigten Rückgabewerte können von den unten aufgeführten abweichen.

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'

fmt.formatRangeToParts(date1, date2);
// [
//   { type: 'hour',      value: '10',  source: "startRange" },
//   { type: 'literal',   value: ':',   source: "startRange" },
//   { type: 'minute',    value: '00',  source: "startRange" },
//   { type: 'literal',   value: ' – ', source: "shared"     },
//   { type: 'hour',      value: '11',  source: "endRange"   },
//   { type: 'literal',   value: ':',   source: "endRange"   },
//   { type: 'minute',    value: '00',  source: "endRange"   },
//   { type: 'literal',   value: ' ',   source: "shared"     },
//   { type: 'dayPeriod', value: 'AM',  source: "shared"     }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
- {{jsxref("Intl.DateTimeFormat")}}
