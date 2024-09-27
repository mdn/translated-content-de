---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`format()`** Methode von {{jsxref("Intl.ListFormat")}} Instanzen gibt einen string mit einer
sprachspezifischen Darstellung der Liste zurück.

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

Ein sprachspezifisch formatierter string, der die Elemente der Liste darstellt.

> [!NOTE]
> Meistens ist die Formatierung, die von `format()` zurückgegeben wird, konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb des gleichen Gebietsschemas — Ausgabevariationen sind absichtlich und durch die Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel kann der string geschützte Leerzeichen verwenden oder von bidirektionalen Steuerungszeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beschreibung

Die **`format()`** Methode gibt einen string zurück, der basierend auf den im `Intl.ListFormat` Objekt bereitgestellten Parametern formatiert wurde. Die
`locales`- und `options`-Parameter passen das Verhalten von
`format()` an und lassen Anwendungen die Sprachkonventionen spezifizieren, die
zur Formatierung der Liste verwendet werden sollen.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie man einen List Formatter unter Verwendung der englischen Sprache erstellt.

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
