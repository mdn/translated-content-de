---
title: Intl.NumberFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 21c2a7fa64659b6d56c3404edac193fd84ebda20
---

{{JSRef}}

Die Methode **`formatRangeToParts()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokal spezifischen Tokens enthält, aus denen es möglich ist, benutzerdefinierte Zeichenfolgen unter Wahrung der lokal spezifischen Teile zu erstellen. Dies ermöglicht es, bereichsbezogene, lokal angepasste Zahlenzeichenfolgen zu formatieren.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder Zeichenkette, die formatiert werden soll. Zeichenketten werden genauso geparst wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `formatRangeToParts()` den genauen Wert der Zeichenkette verwendet, um Präzisionsverluste bei der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder Zeichenkette, die formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das den formatierten Bereich von Zahlen in Teilen enthält.

Die Struktur des zurückgegebenen Werts sieht wie folgt aus:

```js
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "literal", value: "-", source: "shared" },
  { type: "integer", value: "5", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
];
```

Mögliche Werte für die `type`-Eigenschaft sind:

- `currency`
  - : Die Währungszeichenkette, wie die Symbole "$" und "€" oder die Namen "Dollar", "Euro", abhängig davon, wie `currencyDisplay` angegeben ist.
- `decimal`
  - : Die Dezimaltrennzeichen-Zeichenkette (".").
- `fraction`
  - : Die Bruchzahl.
- `group`
  - : Das Gruppentrennzeichen (",").
- `infinity`
  - : Die {{jsxref("Infinity")}} Zeichenkette ("∞").
- `integer`
  - : Die Ganzzahl.
- `literal`
  - : Jede wörtliche Zeichenkette oder Leerzeichen in der formatierten Zahl.
- `minusSign`
  - : Das Minuszeichen ("-").
- `nan`
  - : Die {{jsxref("NaN")}} Zeichenkette ("NaN").
- `plusSign`
  - : Das Pluszeichen ("+").
- `percentSign`
  - : Das Prozentzeichen ("%").
- `unit`
  - : Die Einheit-Zeichenkette, wie "l" oder "litres", abhängig davon, wie `unitDisplay` angegeben ist.

Mögliche Werte für die `source`-Eigenschaft sind:

- `startRange`
  - : Das Objekt ist der Startteil des Bereichs.
- `endRange`
  - : Das Objekt ist der Endteil des Bereichs.
- `shared`
  - : Das Objekt ist ein "geteilter" Teil des Bereichs, wie ein Trennzeichen oder eine Währung.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder eine nicht konvertierbare Zeichenkette ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beispiele

### Vergleich von formatRange und formatRangeToParts

`NumberFormat` gibt lokalisierte, undurchsichtige Zeichenfolgen aus, die nicht direkt manipuliert werden können:

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

Für viele Benutzeroberflächen gibt es jedoch die Notwendigkeit, das Format dieser Zeichenfolge anzupassen. Die Methode `formatRangeToParts` ermöglicht die lokal angepasste Formatierung von Zeichenfolgen, die von `NumberFormat`-Formatierern bereitgestellt werden, indem sie die Zeichenfolge in Teilen liefert:

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
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
