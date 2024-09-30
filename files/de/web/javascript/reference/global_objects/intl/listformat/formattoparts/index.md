---
title: Intl.ListFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: abad787f40e4f80bfb0a9df78ba21bfac6206db4
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.ListFormat")}}-Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, die die verschiedenen Komponenten repräsentieren, die verwendet werden können, um eine Liste von Werten in einer lokalisierten Weise zu formatieren.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie ein {{jsxref("Array")}}, das gemäß einer Lokale formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Komponenten, das die formatierten Teile der Liste enthält.

## Beschreibung

Während {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}} eine Zeichenkette zurückgibt, die die formatierte Version der Liste darstellt (gemäß der angegebenen Lokalisierungs- und Stiloptionen), gibt `formatToParts()` ein Array der verschiedenen Komponenten der formatierten Zeichenkette zurück.

Jedes Element des resultierenden Arrays hat zwei Eigenschaften: `type` und `value`. Die `type`-Eigenschaft kann entweder `"element"` sein, was sich auf einen Wert aus der Liste bezieht, oder `"literal"`, was sich auf eine sprachliche Konstruktion bezieht. Die `value`-Eigenschaft liefert den Inhalt des Tokens als Zeichenkette.

Die Lokalisierungs- und Stiloptionen, die für die Formatierung verwendet werden, werden beim Erstellen der {{jsxref("Intl.ListFormat")}}-Instanz angegeben.

## Beispiele

### Verwendung von formatToParts

```js
const fruits = ["Apple", "Orange", "Pineapple"];
const myListFormat = new Intl.ListFormat("en-GB", {
  style: "long",
  type: "conjunction",
});

console.table(myListFormat.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": " and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
