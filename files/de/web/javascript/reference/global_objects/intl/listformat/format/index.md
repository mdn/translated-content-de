---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die **`format()`**-Methode von {{jsxref("Intl.ListFormat")}}-Instanzen gibt eine Zeichenkette zurück, die eine sprachspezifische Darstellung der Liste enthält.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Syntax

```js-nolint
format(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie beispielsweise ein Array, das Zeichenketten enthält. Wenn es ausgelassen wird, wird das leere Array formatiert, was etwas verwirrend sein kann, daher wird empfohlen, immer explizit eine Liste zu übergeben.

### Rückgabewert

Eine sprachspezifisch formatierte Zeichenkette, die die Elemente der Liste darstellt.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — Abweichungen in der Ausgabe sind beabsichtigt und gemäß der Spezifikation erlaubt. Es könnte auch nicht dem entsprechen, was Sie erwarten. Beispielsweise könnte die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie man einen Listen-Formatter mit der englischen Sprache erstellt.

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
