---
title: Intl.NumberFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die Methode **`formatRangeToParts()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, die die länderspezifischen Tokens enthalten, aus denen es möglich ist, benutzerdefinierte Zeichenfolgen zu erstellen, die die länderspezifischen Teile bewahren. Dies ermöglicht es, länderspezifische, benutzerdefinierte Formatierungsbereiche von Zahlenzeichenfolgen bereitzustellen.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder Zeichenkette, die formatiert werden soll. Zeichenketten werden auf die gleiche Weise geparst wie in der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `formatRangeToParts()` den genauen Wert verwendet, den die Zeichenkette darstellt, um einen Verlust an Genauigkeit bei der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder Zeichenkette, die formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die den formatierten Bereich in Teilen enthalten. Jedes Objekt hat drei Eigenschaften: `type`, `value` und `source`, die jeweils eine Zeichenkette enthalten. Die Zeichenfolgenkonkatenation von `value` in der angegebenen Reihenfolge führt zu derselben Zeichenkette wie {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}. Der `type` kann dieselben Werte wie {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} haben. Der `source` kann einer der folgenden sein:

- `startRange`
  - : Das Token ist ein Teil der Startzahl.
- `endRange`
  - : Das Token ist ein Teil der Endzahl.
- `shared`
  - : Das Token wird zwischen Start und Ende geteilt; zum Beispiel das Währungszeichen. Alle Literalen, die Teil des Bereichsmusters selbst sind, wie z. B. der `"–"`-Separator, werden ebenfalls als `shared` markiert.

Wenn die Start- und Endzahlen gleich sind, hat die Ausgabe dieselbe Liste von Tokens wie beim Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} auf der Startzahl, wobei alle Tokens als `source: "shared"` markiert sind.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder eine nicht konvertierbare Zeichenkette ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beispiele

### Verwendung von formatRangeToParts()

Die Methode `formatRange()` gibt lokalisierte, opake Zeichenketten aus, die nicht direkt manipuliert werden können:

```js
const startRange = 3500;
const endRange = 9500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(formatter.formatRange(startRange, endRange));
// "3.500,00–9.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie jedoch das Format dieser Zeichenfolge anpassen oder sie mit anderen Texten verflechten. Die Methode `formatRangeToParts()` liefert dieselben Informationen in Teilen:

```js
console.log(formatter.formatRangeToParts(startRange, endRange));

// return value:
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "group", value: ".", source: "startRange" },
  { type: "integer", value: "500", source: "startRange" },
  { type: "decimal", value: ",", source: "startRange" },
  { type: "fraction", value: "00", source: "startRange" },
  { type: "literal", value: "–", source: "shared" },
  { type: "integer", value: "9", source: "endRange" },
  { type: "group", value: ".", source: "endRange" },
  { type: "integer", value: "500", source: "endRange" },
  { type: "decimal", value: ",", source: "endRange" },
  { type: "fraction", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
