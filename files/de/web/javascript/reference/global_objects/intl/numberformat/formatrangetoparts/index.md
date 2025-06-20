---
title: Intl.NumberFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`formatRangeToParts()`** von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalespezifischen Tokens enthält, mit denen es möglich ist, benutzerdefinierte Zeichenketten zu erstellen, während die lokalespezifischen Teile erhalten bleiben. Dies ermöglicht die Bereitstellung von lokalisierte benutzerdefinierten Formatierungsbereichen von Zahlenzeichenketten.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder Zeichenkette, die formatiert werden soll. Zeichenketten werden auf die gleiche Weise geparst wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), mit dem Unterschied, dass `formatRangeToParts()` den genauen Wert verwendet, den die Zeichenkette darstellt, um einen Präzisionsverlust bei der impliziten Umwandlung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder Zeichenkette, die formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die den formatierten Bereich in Teilen enthalten. Jedes Objekt hat drei Eigenschaften, `type`, `value` und `source`, die jeweils eine Zeichenkette enthalten. Die Zeichenkettenverkettung von `value` in der angegebenen Reihenfolge ergibt die gleiche Zeichenkette wie {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}. Der `type` kann die gleichen Werte wie {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} haben. Die `source` kann einer der folgenden sein:

- `startRange`
  - : Das Token ist ein Teil der Anfangszahl.
- `endRange`
  - : Das Token ist ein Teil der Endzahl.
- `shared`
  - : Das Token wird zwischen Anfang und Ende geteilt, zum Beispiel das Währungssymbol. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `"–"`-Separator, werden ebenfalls als `shared` markiert.

Wenn die Start- und Endzahlen gleichwertig sind, dann hat die Ausgabe dieselbe Liste von Tokens wie bei einem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} auf die Anfangszahl, wobei alle Tokens als `source: "shared"` markiert sind.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder eine unverwertbare Zeichenkette ist.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

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

In vielen Benutzeroberflächen möchten Sie jedoch das Format dieser Zeichenkette anpassen oder sie mit anderen Texten durchsetzen. Die Methode `formatRangeToParts()` liefert dieselben Informationen in Teilen:

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
