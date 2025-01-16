---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die **`format()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen formatiert ein Datum gemäß der Lokale und den Formatierungsoptionen dieses `Intl.DateTimeFormat` Objekts.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-format.html", "taller")}}

## Syntax

```js-nolint
format(date)
```

### Parameter

- `date`
  - : Das zu formatierende Datum. Wenn dies weggelassen wird, wird das aktuelle Datum formatiert (wie von {{jsxref("Date.now()")}} zurückgegeben), was etwas verwirrend sein kann, daher ist es ratsam, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein String, der das angegebene `date` formatiert gemäß der Lokale und den Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}} Objekts darstellt.

> [!NOTE]
> In den meisten Fällen ist die Formatierung, die von `format()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokale – Ausgabevariationen sind absichtlich und von der Spezifikation erlaubt. Sie könnte auch nicht das sein, was Sie erwarten. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Format verwenden

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

### Format mit Map verwenden

Verwenden Sie die `format` Getter-Funktion zum Formatieren aller Daten in einem Array. Beachten Sie, dass die Funktion an das {{jsxref("Intl.DateTimeFormat")}} gebunden ist, von dem sie erhalten wurde, sodass sie direkt an {{jsxref("Array.prototype.map()")}} übergeben werden kann.

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
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
