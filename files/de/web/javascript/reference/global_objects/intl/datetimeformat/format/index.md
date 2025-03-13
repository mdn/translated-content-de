---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`format()`** von {{jsxref("Intl.DateTimeFormat")}} Instanzen formatiert ein Datum gemäß den Lokalisierungs- und Formatierungsoptionen dieses `Intl.DateTimeFormat`-Objekts.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.format()", "taller")}}

```js interactive-example
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date1 = new Date(2012, 5);

const dateTimeFormat1 = new Intl.DateTimeFormat("sr-RS", options1);
console.log(dateTimeFormat1.format(date1));
// Expected output: "петак, 1. јун 2012."

const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", options1);
console.log(dateTimeFormat2.format(date1));
// Expected output: "Friday, 1 June 2012"

const dateTimeFormat3 = new Intl.DateTimeFormat("en-US", options1);
console.log(dateTimeFormat3.format(date1));
// Expected output: "Friday, June 1, 2012"
```

## Syntax

```js-nolint
format(date)
```

### Parameter

- `date`

  - : Das zu formatierende Datum. Kann ein {{jsxref("Date")}} oder {{jsxref("Temporal.PlainDateTime")}} Objekt sein. Zusätzlich kann es sich um ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, oder {{jsxref("Temporal.PlainMonthDay")}} Objekt handeln, wenn das `DateTimeFormat` Objekt konfiguriert wurde, um mindestens einen relevanten Teil des Datums auszudrucken.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}} Objekt wird immer einen `TypeError` auslösen; verwenden Sie {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es stattdessen in ein {{jsxref("Temporal.PlainDateTime")}} Objekt.

    Das Weglassen führt dazu, dass das aktuelle Datum formatiert wird (wie von {{jsxref("Date.now()")}} zurückgegeben), was leicht verwirrend sein kann, daher ist es ratsam, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein String, der das angegebene `date` gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}} Objekts formatiert darstellt.

> [!NOTE]
> Die Formatierung, die von `format()` zurückgegeben wird, ist meistens konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — Abweichungen in der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Es kann auch anders sein als erwartet. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Es sollte vermieden werden, die Ergebnisse von `format()` mit fest codierten Konstanten zu vergleichen.

## Beispiele

### Verwendung von format

Verwenden Sie die `format`-Getter-Funktion, um ein einzelnes Datum zu formatieren, hier für
Serbien:

```js
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// "недеља, 7. април 2013."
```

### Verwendung von format mit map

Verwenden Sie die `format`-Getter-Funktion, um alle Daten in einem Array zu formatieren. Beachten Sie, dass die Funktion an das {{jsxref("Intl.DateTimeFormat")}} gebunden ist, von dem sie bezogen wurde, sodass sie direkt an {{jsxref("Array.prototype.map()")}} übergeben werden kann.

```js
const a = [new Date(2012, 8), new Date(2012, 11), new Date(2012, 3)];
const options = { year: "numeric", month: "long" };
const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
const formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// "setembro de 2012; dezembro de 2012; abril de 2012"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
