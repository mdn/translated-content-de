---
title: Intl.NumberFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die Methode **`formatRangeToParts()`** von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, das die sprachspezifischen Token enthält, aus denen sich benutzerdefinierte Zeichenfolgen unter Beibehaltung der sprachspezifischen Teile erstellen lassen. Dies ermöglicht es, bereichsbezogene benutzerdefinierte Formatierungen von Zahlenzeichenfolgen bereitzustellen, die sprachspezifisch sind.

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

Die Struktur des zurückgegebenen Arrays sieht so aus:

```js
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "literal", value: "-", source: "shared" },
  { type: "integer", value: "5", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
];
```

Mögliche Werte für die Eigenschaft `type` beinhalten:

- `currency`
  - : Die Währungszeichenkette, wie die Symbole "$" und "€" oder der Name "Dollar", "Euro", je nachdem, wie `currencyDisplay` festgelegt ist.
- `decimal`
  - : Die Dezimaltrennzeichen-Zeichenkette (".").
- `fraction`
  - : Die Bruchnummer.
- `group`
  - : Die Gruppentrennzeichen-Zeichenkette (",").
- `infinity`
  - : Die {{jsxref("Infinity")}} Zeichenkette ("∞").
- `integer`
  - : Die Ganzzahl.
- `literal`
  - : Beliebige literale Zeichenfolgen oder Leerzeichen in der formatierten Zahl.
- `minusSign`
  - : Die Minuszeichen-Zeichenkette ("-").
- `nan`
  - : Die {{jsxref("NaN")}} Zeichenkette ("NaN").
- `plusSign`
  - : Die Pluszeichen-Zeichenkette ("+").
- `percentSign`
  - : Die Prozentzeichen-Zeichenkette ("%").
- `unit`
  - : Die Einheit-Zeichenkette, wie z.B. "l" oder "Liter", je nachdem, wie `unitDisplay` festgelegt ist.

Mögliche Werte für die Eigenschaft `source` beinhalten:

- `startRange`
  - : Das Objekt ist der Anfangsteil des Bereichs.
- `endRange`
  - : Das Objekt ist der Endteil des Bereichs.
- `shared`
  - : Das Objekt ist ein "geteilter" Teil des Bereichs, wie ein Trennzeichen oder eine Währung.

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

Für viele Benutzeroberflächen besteht jedoch die Notwendigkeit, die Formatierung dieser Zeichenfolge anzupassen. Die `formatRangeToParts` Methode ermöglicht die ortsbezogene Formatierung von Zeichenfolgen, die von `NumberFormat` Formatierern erstellt wurden, indem sie Ihnen die Zeichenfolge in Teilen bereitstellt:

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
