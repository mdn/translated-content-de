---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`format()`**-Methode von Instanzen des {{jsxref("Intl.DateTimeFormat")}} formatiert ein Datum entsprechend der Lokalisierung und den Formatierungsoptionen dieses `Intl.DateTimeFormat` Objekts.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.format", "taller")}}

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

  - : Das zu formatierende Datum. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es sich um ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt handeln, wenn das `DateTimeFormat`-Objekt so konfiguriert wurde, dass mindestens ein relevanter Teil des Datums ausgegeben wird.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt löst immer einen `TypeError` aus; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.

    Wenn der Parameter weggelassen wird, wird das aktuelle Datum (wie von {{jsxref("Date.now()")}} zurückgegeben) formatiert. Dies könnte leicht verwirrend sein, daher wird empfohlen, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein String, der das angegebene `date` entsprechend der Lokalisierung und den Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}} Objekts darstellt.

> [!NOTE]
> Meistens ist das Format, das von `format()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe je nach Implementierung variieren, selbst innerhalb derselben Lokalisierung — solche Variationen sind beabsichtigt und durch die Spezifikation erlaubt. Es könnte auch nicht dem entsprechen, was Sie erwarten. Zum Beispiel könnte der String geschützte Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von format

Verwenden Sie die `format`-Getter-Funktion, um ein einzelnes Datum zu formatieren, hier für Serbien:

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

Verwenden Sie die `format`-Getter-Funktion, um alle Daten in einem Array zu formatieren. Beachten Sie, dass die Funktion an den {{jsxref("Intl.DateTimeFormat")}} gebunden ist, aus dem sie gewonnen wurde, sodass sie direkt an {{jsxref("Array.prototype.map()")}} übergeben werden kann.

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
