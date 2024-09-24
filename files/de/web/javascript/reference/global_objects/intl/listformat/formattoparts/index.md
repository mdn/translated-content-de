---
title: Intl.ListFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: abad787f40e4f80bfb0a9df78ba21bfac6206db4
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.ListFormat")}}-Instanzen
gibt ein {{jsxref("Array")}} von Objekten zurück, die die verschiedenen Komponenten repräsentieren,
die verwendet werden können, um eine Liste von Werten in einer sprachabhängigen Weise zu formatieren.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie z. B. ein {{jsxref("Array")}}, das gemäß einer Sprachumgebung formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Komponenten, das die formatierten Teile der Liste enthält.

## Beschreibung

Während {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}} einen String zurückgibt, der die formatierte Version der Liste (gemäß den angegebenen Sprach- und Stiloptionen) darstellt, gibt `formatToParts()` ein Array der verschiedenen Komponenten des formatierten Strings zurück.

Jedes Element des resultierenden Arrays hat zwei Eigenschaften: `type` und `value`. Die Eigenschaft `type` kann entweder `"element"` sein, was sich auf einen Wert aus der Liste bezieht, oder `"literal"`, das sich auf ein sprachliches Konstrukt bezieht. Die Eigenschaft `value` gibt den Inhalt, als String, des Tokens an.

Die für das Formatieren verwendeten Sprach- und Stiloptionen werden beim Erstellen der {{jsxref("Intl.ListFormat")}}-Instanz angegeben.

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
