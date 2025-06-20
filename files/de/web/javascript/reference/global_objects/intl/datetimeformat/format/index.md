---
title: Intl.DateTimeFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`format()`**-Methode von Instanzen des {{jsxref("Intl.DateTimeFormat")}} formatiert ein Datum gemäß den Lokaleinstellungen und Formatierungsoptionen dieses `Intl.DateTimeFormat`-Objekts.

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

  - : Das zu formatierende Datum. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, wenn das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens ein relevantes Datumelement druckt.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt führt immer zu einem `TypeError`; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.

    Das Weglassen führt zur Formatierung des aktuellen Datums (wie durch {{jsxref("Date.now()")}} zurückgegeben), was leicht verwirrend sein kann, daher ist es ratsam, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein String, der das angegebene `date` gemäß den Lokaleinstellungen und Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}}-Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist das durch `format()` zurückgegebene Format konsistent. Jedoch kann die Ausgabe zwischen Implementierungen, selbst innerhalb derselben Lokalisierung, variieren – Abweichungen der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Es kann auch nicht Ihren Erwartungen entsprechen. Beispielsweise kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von format

Verwenden Sie die `format`-Getter-Funktion für die Formatierung eines einzelnen Datums, hier für Serbien:

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

Verwenden Sie die `format`-Getter-Funktion, um alle Daten in einem Array zu formatieren. Beachten Sie, dass die Funktion an den {{jsxref("Intl.DateTimeFormat")}}, aus dem sie erhalten wurde, gebunden ist, sodass sie direkt an {{jsxref("Array.prototype.map()")}} übergeben werden kann.

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
