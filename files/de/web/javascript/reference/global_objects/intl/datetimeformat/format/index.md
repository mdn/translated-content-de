---
title: Intl.DateTimeFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`format()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen formatiert ein Datum gemäß den Lokalisierungs- und Formatierungsoptionen dieses `Intl.DateTimeFormat` Objekts.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.format()", "taller")}}

```js interactive-example
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = new Date(2012, 5);

const dateTimeFormat1 = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat1.format(date));
// Expected output: "петак, 1. јун 2012."

const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", options);
console.log(dateTimeFormat2.format(date));
// Expected output: "Friday, 1 June 2012"

const dateTimeFormat3 = new Intl.DateTimeFormat("en-US", options);
console.log(dateTimeFormat3.format(date));
// Expected output: "Friday, June 1, 2012"
```

## Syntax

```js-nolint
format(date)
```

### Parameter

- `date`
  - : Das zu formatierende Datum. Kann ein {{jsxref("Date")}} oder {{jsxref("Temporal.PlainDateTime")}} Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}} Objekt sein, wenn das `DateTimeFormat` Objekt konfiguriert wurde, um mindestens einen relevanten Teil des Datums zu drucken.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}} Objekt wird immer einen `TypeError` auslösen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}} Objekt.

    Wenn es weggelassen wird, wird das aktuelle Datum formatiert (wie von {{jsxref("Date.now()")}} zurückgegeben), was leicht verwirrend sein kann. Daher ist es ratsam, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein String, der das angegebene `date` gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}} Objekts darstellt.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung - Ausgabevariationen sind absichtlich und durch die Spezifikation erlaubt. Es mag auch nicht dem entsprechen, was Sie erwarten. Zum Beispiel könnte der String nicht trennende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit festgelegten Konstanten vergleichen.

## Beispiele

### Verwendung von format

Verwenden Sie die `format` Getter-Funktion zum Formatieren eines einzelnen Datums, hier für Serbien:

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

Verwenden Sie die `format` Getter-Funktion zum Formatieren aller Daten in einem Array. Beachten Sie, dass die Funktion an das {{jsxref("Intl.DateTimeFormat")}}, aus dem sie stammt, gebunden ist, sodass sie direkt an {{jsxref("Array.prototype.map()")}} übergeben werden kann.

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
