---
title: Intl.NumberFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`formatRangeToParts()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, die die gebietsschemaspezifischen Bestandteile enthalten. Daraus lassen sich benutzerdefinierte Zeichenfolgen zusammensetzen, ohne die gebietsschemaspezifischen Teile zu verlieren. So können Zahlenbereiche gebietsschemagerecht und individuell formatiert werden.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameter

- `startRange`
  - : Ein zu formatierender {{jsxref("Number")}}-, {{jsxref("BigInt")}}- oder Zeichenfolgenwert. Zeichenfolgen werden wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) verarbeitet. `formatRangeToParts()` verwendet jedoch den exakten Wert, den die Zeichenfolge darstellt, und vermeidet so einen Präzisionsverlust durch die implizite Konvertierung in eine Zahl.
- `endRange`
  - : Ein zu formatierender {{jsxref("Number")}}-, {{jsxref("BigInt")}}- oder Zeichenfolgenwert.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die den formatierten Bereich in Teilen enthalten. Jedes Objekt hat drei Eigenschaften, `type`, `value` und `source`, die jeweils eine Zeichenfolge enthalten. Werden die `value`-Zeichenfolgen in der angegebenen Reihenfolge verkettet, ergibt sich dieselbe Zeichenfolge wie bei {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}. `type` kann dieselben Werte wie bei {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} oder zusätzlich den Wert `"approximatelySign"` haben (siehe unten). `source` kann einen der folgenden Werte haben:

- `startRange`
  - : Der Bestandteil gehört zur Anfangszahl.
- `endRange`
  - : Der Bestandteil gehört zur Endzahl.
- `shared`
  - : Der Bestandteil gehört sowohl zur Anfangs- als auch zur Endzahl, beispielsweise ein Währungssymbol. Alle Literale, die zum Bereichsmuster selbst gehören, etwa das Trennzeichen `"–"`, werden ebenfalls als `shared` gekennzeichnet.

Wenn die Anfangs- und die Endzahl als dieselbe Zeichenfolge formatiert werden, enthält die Ausgabe dieselbe Liste von Bestandteilen wie ein Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} für die Anfangszahl. Dabei sind alle Bestandteile mit `source: "shared"` gekennzeichnet. Zusätzlich kann der erste Bestandteil ein „ungefähr gleich“-Symbol (z. B. „~“) mit `type: "approximatelySign"` sein. Ob dieses Symbol eingefügt wird, hängt ausschließlich von den Gebietsschemaeinstellungen ab. Es wird auch dann eingefügt, wenn `startRange === endRange` gilt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `startRange` oder `endRange` `NaN` oder eine nicht konvertierbare Zeichenfolge ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `startRange` oder `endRange` undefined ist.

## Beispiele

### formatRangeToParts() verwenden

Die Methode `formatRange()` gibt lokalisierte Zeichenfolgen zurück, deren Bestandteile sich nicht direkt bearbeiten lassen:

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

In vielen Benutzeroberflächen möchten Sie die Formatierung dieser Zeichenfolge jedoch anpassen oder sie mit anderem Text kombinieren. Die Methode `formatRangeToParts()` liefert dieselben Informationen in einzelnen Bestandteilen:

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
