---
title: Intl.NumberFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`formatRangeToParts()`** von Instanzen von {{jsxref("Intl.NumberFormat")}} gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalespezifischen Tokens enthält, aus denen es möglich ist, benutzerdefinierte Zeichenketten zu erstellen, während die lokalespezifischen Teile erhalten bleiben. Dies ermöglicht es, bereichsspezifische, lokalisierte Formate für Zahlenketten bereitzustellen.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine Zahl ({{jsxref("Number")}}), ein {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst, außer dass `formatRangeToParts()` den genauen Wert verwendet, den der String darstellt, um einen Verlust der Genauigkeit bei der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine Zahl ({{jsxref("Number")}}), ein {{jsxref("BigInt")}} oder ein String, der formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das den formatierten Bereich in Teilen enthält. Jedes Objekt hat drei Eigenschaften: `type`, `value` und `source`, die jeweils eine Zeichenkette enthalten. Die Verkettung der `value`-Zeichenketten in der angegebenen Reihenfolge ergibt dieselbe Zeichenkette wie {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}. Der `type` kann dieselben Werte haben wie {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} oder den zusätzlichen Wert `"approximatelySign"` (siehe unten). Der `source` kann einer der folgenden sein:

- `startRange`
  - : Das Token ist Teil der Startzahl.
- `endRange`
  - : Das Token ist Teil der Endzahl.
- `shared`
  - : Das Token wird zwischen Start und Ende geteilt, wie zum Beispiel das Währungssymbol. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `"–"`-Separator, werden ebenfalls als `shared` markiert.

Wenn die Start- und Endzahlen zur gleichen Zeichenkette formatiert werden, hat die Ausgabe die gleiche Liste von Tokens wie der Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} auf die Startzahl, wobei alle Tokens als `source: "shared"` markiert sind. Zusätzlich kann das erste Token ein "ungefähres Gleichheits"-Symbol (z.B. "~") mit `type: "approximatelySign"` sein. Die Einfügung dieses Symbols hängt nur von den Lokaleinstellungen ab und wird auch eingefügt, wenn `startRange === endRange`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder eine nicht konvertierbare Zeichenkette ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beispiele

### Verwendung von formatRangeToParts()

Die Methode `formatRange()` gibt lokalisierte, undurchsichtige Zeichenketten aus, die nicht direkt manipuliert werden können:

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

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieser Zeichenkette anpassen oder es mit anderen Texten mischen. Die Methode `formatRangeToParts()` liefert die gleichen Informationen in Teilen:

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
