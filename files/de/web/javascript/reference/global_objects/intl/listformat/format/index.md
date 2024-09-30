---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`format()`**-Methode von Instanzen von {{jsxref("Intl.ListFormat")}} gibt einen String mit einer sprachspezifischen Darstellung der Liste zurück.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Syntax

```js-nolint
format()
format(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie zum Beispiel ein Array.

### Rückgabewert

Ein sprachspezifisch formatierter String, der die Elemente der Liste darstellt.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Spracheinstellung — Variationen der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Zum Beispiel kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit festcodierten Konstanten vergleichen.

## Beschreibung

Die **`format()`**-Methode gibt einen String zurück, der auf Grundlage der im `Intl.ListFormat`-Objekt bereitgestellten Parameter formatiert wurde. Die `locales`- und `options`-Parameter passen das Verhalten von `format()` an und ermöglichen es Anwendungen, die Sprachkonventionen zu spezifizieren, die zum Formatieren der Liste verwendet werden sollen.

## Beispiele

### Verwendung von format

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
