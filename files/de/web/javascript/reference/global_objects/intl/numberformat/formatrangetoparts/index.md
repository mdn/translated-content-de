---
title: Intl.NumberFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die Methode **`formatRangeToParts()`** von Instanzen des {{jsxref("Intl.NumberFormat")}} gibt ein Array von Objekten zurück, das die lokalespezifischen Tokens enthält, aus denen es möglich ist, benutzerdefinierte Zeichenfolgen zu erstellen und dabei die lokalespezifischen Teile zu erhalten. Dies ermöglicht es, lokal angepasste benutzerdefinierte Formatierungsbereiche von Zahlzeichenfolgen bereitzustellen.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameter

- `startRange`

  - : Eine {{jsxref("Number")}} oder {{jsxref("BigInt")}}.

- `endRange`
  - : Eine {{jsxref("Number")}} oder {{jsxref("BigInt")}}.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das den formatierten Bereich von Zahlen in Teilen enthält.

Die Struktur des zurückgegebenen Werts sieht folgendermaßen aus:

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
  - : Die Währungszeichenfolge, wie die Symbole "$" und "€" oder die Namen "Dollar", "Euro", abhängig davon, wie `currencyDisplay` angegeben ist.
- `decimal`
  - : Die Dezimaltrennzeichenzeichenfolge (".").
- `fraction`
  - : Die Bruchzahl.
- `group`
  - : Die Gruppentrennzeichenzeichenfolge (",").
- `infinity`
  - : Die {{jsxref("Infinity")}}-Zeichenkette ("∞").
- `integer`
  - : Die Ganzzahl.
- `literal`
  - : Jegliche literalen Zeichenfolgen oder Leerzeichen in der formatierten Zahl.
- `minusSign`
  - : Die Minuszeichen-Zeichenfolge ("-").
- `nan`
  - : Die {{jsxref("NaN")}}-Zeichenkette ("NaN").
- `plusSign`
  - : Die Pluszeichen-Zeichenfolge ("+").
- `percentSign`
  - : Das Prozentzeichen ("%").
- `unit`
  - : Die Einheitzeichenfolge, wie "l" oder "Litres", abhängig davon, wie `unitDisplay` angegeben ist.

Mögliche Werte für die `source`-Eigenschaft sind:

- `startRange`
  - : Das Objekt ist der Startteil des Bereichs.
- `endRange`
  - : Das Objekt ist der Endteil des Bereichs.
- `shared`
  - : Das Objekt ist ein "gemeinsamer" Teil des Bereichs, wie ein Trennzeichen oder eine Währung.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `startRange` kleiner als `endRange` ist oder einer der Werte `NaN` ist.
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

Für viele Benutzeroberflächen besteht jedoch die Notwendigkeit, das Format dieser Zeichenfolge anzupassen.
Die `formatRangeToParts`-Methode ermöglicht eine lokalspezifische Formatierung von Zeichenfolgen, die von `NumberFormat`-Formatierern erzeugt werden, indem sie Ihnen die Zeichenfolge in Teilen liefert:

```js
console.log(formatter.formatRangeToParts(startRange, endRange));

// Rückgabewert:
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
