---
title: Intl.NumberFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`formatToParts()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil der formatierten Zeichenfolge darstellen, die {{jsxref("Intl/NumberFormat/format", "format()")}} zurückgeben würde. Sie ist nützlich, um aus den gebietsschemaspezifischen Bestandteilen eigene Zeichenfolgen zusammenzusetzen.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.formatToParts()")}}

```js interactive-example
const amount = 654321.987;
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

const parts = numberFormat.formatToParts(amount);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Expected output: Array ["$", "654", ",", "321", ".", "99"]
```

## Syntax

```js-nolint
formatToParts(number)
```

### Parameter

- `number`
  - : Ein {{jsxref("Number")}}, {{jsxref("BigInt")}} oder eine Zeichenfolge, die formatiert werden soll. Zeichenfolgen werden wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) interpretiert. `formatToParts()` verwendet jedoch den exakten Wert, den die Zeichenfolge darstellt, und vermeidet so einen Präzisionsverlust bei der impliziten Umwandlung in eine Zahl.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die Bestandteile der formatierten Zahl enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils eine Zeichenfolge enthalten. Werden die `value`-Zeichenfolgen in der angegebenen Reihenfolge verkettet, ergibt sich dieselbe Zeichenfolge wie bei {{jsxref("Intl/NumberFormat/format", "format()")}}. `type` kann einen der folgenden Werte haben:

- `literal`
  - : Eine beliebige Zeichenfolge, die Teil des Formatmusters ist, zum Beispiel `" "`. Häufige Bestandteile wie das Dezimaltrennzeichen oder die Plus- und Minuszeichen haben eigene Token-Typen.
- `integer`
  - : Der ganzzahlige Teil der Zahl oder, bei Verwendung einer Zifferngruppierung, ein Abschnitt davon (gesteuert durch `options.useGrouping`).
- `group`
  - : Das Trennzeichen für Zifferngruppen, zum Beispiel `","`. Nur vorhanden, wenn eine Zifferngruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `decimal`
  - : Das Dezimaltrennzeichen, zum Beispiel `"."`. Nur vorhanden, wenn `fraction` vorhanden ist.
- `fraction`
  - : Der Nachkommateil der Zahl.
- `compact`
  - : Der kompakte Exponent, zum Beispiel `"M"` oder `"thousands"`. Nur vorhanden, wenn `options.notation` den Wert `"compact"` hat. Die Darstellungsform (`"short"` oder `"long"`) kann über `options.compactDisplay` gesteuert werden.
- `exponentSeparator`
  - : Das Exponententrennzeichen, zum Beispiel `"E"`. Nur vorhanden, wenn `options.notation` den Wert `"scientific"` oder `"engineering"` hat.
- `exponentMinusSign`
  - : Das Minuszeichen des Exponenten, zum Beispiel `"-"`. Nur vorhanden, wenn `options.notation` den Wert `"scientific"` oder `"engineering"` hat und der Exponent negativ ist.
- `exponentInteger`
  - : Der ganzzahlige Wert des Exponenten. Nur vorhanden, wenn `options.notation` den Wert `"scientific"` oder `"engineering"` hat.
- `nan`
  - : Eine Zeichenfolge, die {{jsxref("NaN")}} darstellt, zum Beispiel `"NaN"`. Wenn die Zahl `NaN` ist, ist dies der einzige Token, der die Zahl selbst darstellt.
- `infinity`
  - : Eine Zeichenfolge, die {{jsxref("Infinity")}} oder `-Infinity` darstellt, zum Beispiel `"∞"`. Wenn die Zahl `Infinity` oder `-Infinity` ist, ist dies der einzige Token, der die Zahl selbst darstellt.
- `plusSign`
  - : Das Pluszeichen, zum Beispiel `"+"`.
- `minusSign`
  - : Das Minuszeichen, zum Beispiel `"-"`.
- `percentSign`
  - : Das Prozentzeichen, zum Beispiel `"%"`. Nur vorhanden, wenn `options.style` den Wert `"percent"` hat.
- `unit`
  - : Die Zeichenfolge für die Einheit, zum Beispiel `"l"` oder `"litres"`. Nur vorhanden, wenn `options.style` den Wert `"unit"` hat. Die Darstellungsform (`"short"`, `"narrow"` oder `"long"`) kann über `options.unitDisplay` gesteuert werden.
- `currency`
  - : Die Zeichenfolge für die Währung, zum Beispiel `"$"`, `"€"`, `"Dollar"` oder `"Euro"`. Nur vorhanden, wenn `options.style` den Wert `"currency"` hat. Die Darstellungsform (`"code"`, `"symbol"`, `"narrowSymbol"` oder `"name"`) kann über `options.currencyDisplay` gesteuert werden.
- `unknown`
  - : Für Tokens reserviert, die keinem der oben genannten Typen entsprechen; sollte nur selten vorkommen.

## Beispiele

### formatToParts() verwenden

Die Methode `format()` gibt lokalisierte Zeichenfolgen zurück, deren Bestandteile nicht direkt bearbeitet werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie die Formatierung dieser Zeichenfolge jedoch anpassen oder sie mit anderen Texten kombinieren. Die Methode `formatToParts()` liefert dieselben Informationen als einzelne Bestandteile:

```js
formatter.formatToParts(number);

// return value:
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

Die Informationen liegen nun getrennt vor und können individuell formatiert und wieder zusammengesetzt werden. Beispielsweise können Sie mit {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}} zusätzliche Markup-Elemente für bestimmte Bestandteile einfügen.

```js
const numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .join("");

console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
