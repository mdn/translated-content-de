---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`format()`**-Methode der {{jsxref("Intl.DateTimeFormat")}} Instanzen formatiert ein Datum gemäß den Lokalisierungs- und Formatierungsoptionen dieses `Intl.DateTimeFormat`-Objekts.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-format.html", "taller")}}

## Syntax

```js-nolint
format(date)
```

### Parameter

- `date`
  - : Das zu formatierende Datum.

### Rückgabewert

Ein String, der das angegebene `date` gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.DateTimeFormat")}}-Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist die Formatierung, die von `format()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung – Variationen in der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Sie kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

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

Verwenden Sie die `format`-Getter-Funktion, um alle Daten in einem Array zu formatieren. Beachten Sie, dass die Funktion an die {{jsxref("Intl.DateTimeFormat")}} gebunden ist, von der sie abgerufen wurde, sodass sie direkt an {{jsxref("Array.prototype.map()")}} übergeben werden kann.

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
