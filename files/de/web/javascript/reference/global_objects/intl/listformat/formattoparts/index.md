---
title: Intl.ListFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die **`formatToParts()`** Methode von {{jsxref("Intl.ListFormat")}} Instanzen gibt ein Array von Objekten zurück, das jeweils einen Teil des formatierten Strings repräsentiert, den {{jsxref("Intl/ListFormat/format", "format()")}} zurückgeben würde. Dies ist nützlich zum Erstellen von benutzerdefinierten Strings aus lokalisierungsspezifischen Token.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(list)
```

### Parameter

- `list`
  - : Ein iterierbares Objekt, wie ein Array, das Zeichenketten enthält. Wenn es weggelassen wird, führt dies zur Formatierung des leeren Arrays, was etwas verwirrend sein könnte. Es ist daher ratsam, immer explizit eine Liste zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte Liste in Teilen enthält. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils eine Zeichenkette enthalten. Die Verkettung der `value`-Zeichenfolgen in der bereitgestellten Reihenfolge ergibt den gleichen String wie {{jsxref("Intl/ListFormat/format", "format()")}}. Der `type` kann einer der folgenden sein:

- `literal`
  - : Jede Zeichenkette, die Teil des Formatmusters ist; zum Beispiel `", "`, `", and"` usw.
- `element`
  - : Ein Element der Liste, genau wie angegeben.

## Beispiele

### Verwendung von formatToParts()

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
