---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`format()`** Methode von Instanzen des {{jsxref("Intl.ListFormat")}} gibt einen String mit einer
sprachspezifischen Darstellung der Liste zurück.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Syntax

```js-nolint
format()
format(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie ein Array.

### Rückgabewert

Ein sprachspezifisch formatierter String, der die Elemente der Liste darstellt.

> [!NOTE]
> Meistens ist das vom `format()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb derselben Sprache — Ausgabevariationen sind beabsichtigt und von der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Beispielsweise kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beschreibung

Die **`format()`** Methode gibt einen String zurück, der basierend auf Parametern im `Intl.ListFormat` Objekt formatiert wurde. Die Parameter `locales` und `options` passen das Verhalten von
`format()` an und ermöglichen es Anwendungen, die zu verwendenden Sprachkonventionen für die Formatierung der Liste anzugeben.

## Beispiele

### Verwenden von format

Das folgende Beispiel zeigt, wie ein Listen-Formatter mit der englischen Sprache erstellt wird.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
