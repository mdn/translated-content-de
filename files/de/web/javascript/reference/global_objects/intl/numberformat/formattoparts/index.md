---
title: Intl.NumberFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`formatToParts()`** von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/NumberFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich, um individuelle Strings aus den lokal-spezifischen Tokens zu erstellen.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.formatToParts()")}}

```js interactive-example
const amount = 654321.987;
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

const parts = numberFormat.formatToParts(amount);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Expected output: "["$", "654", ",", "321", ".", "99"]"
```

## Syntax

```js-nolint
formatToParts(number)
```

### Parameter

- `number`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden auf dieselbe Weise analysiert wie bei der [Zahlkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), mit der Ausnahme, dass `formatToParts()` den exakten Wert verwendet, den der String darstellt, um Verlust der Genauigkeit bei der impliziten Konvertierung in eine Zahl zu vermeiden.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Zahl in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die String-Konkatenation von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/NumberFormat/format", "format()")}}. Der `type` kann einer der folgenden sein:

- `literal`
  - : Jeder String, der Teil des Formatmusters ist, zum Beispiel `" "`. Beachten Sie, dass allgemeine Tokens wie das Dezimaltrennzeichen oder die Plus/Minus-Zeichen eigene Token-Typen haben.
- `integer`
  - : Der ganzzahlige Teil der Zahl oder ein Segment davon, wenn Gruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `group`
  - : Der String des Gruppentrennzeichens, wie `","`. Nur vorhanden, wenn Gruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `decimal`
  - : Der String des Dezimaltrennzeichens, wie `"."`. Nur vorhanden, wenn `fraction` vorhanden ist.
- `fraction`
  - : Der Bruchteil der Zahl.
- `compact`
  - : Der kompakte Exponent, wie `"M"` oder `"thousands"`. Nur vorhanden, wenn `options.notation` `"compact"` ist. Die Form (`"short"` oder `"long"`) kann über `options.compactDisplay` gesteuert werden.
- `exponentSeparator`
  - : Der Exponententrennzeichen, wie `"E"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `exponentMinusSign`
  - : Das Exponenten-Minuszeichen, wie `"-"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist und der Exponent negativ ist.
- `exponentInteger`
  - : Der ganzzahlige Wert des Exponenten. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `nan`
  - : Ein String, der {{jsxref("NaN")}}, wie `"NaN"`, darstellt. Dies ist das einzige Token, das die Zahl selbst darstellt, wenn die Zahl `NaN` ist.
- `infinity`
  - : Ein String, der {{jsxref("Infinity")}} oder `-Infinity`, wie `"∞"`, darstellt. Dies ist das einzige Token, das die Zahl selbst darstellt, wenn die Zahl `Infinity` oder `-Infinity` ist.
- `plusSign`
  - : Das Pluszeichen, wie `"+"`.
- `minusSign`
  - : Das Minuszeichen, wie `"-"`.
- `percentSign`
  - : Das Prozentzeichen, wie `"%"`. Nur vorhanden, wenn `options.style` `"percent"` ist.
- `unit`
  - : Der Einheitenstring, wie `"l"` oder `"liters"`. Nur vorhanden, wenn `options.style` `"unit"` ist. Die Form (`"short"`, `"narrow"` oder `"long"`) kann über `options.unitDisplay` gesteuert werden.
- `currency`
  - : Der Währungsstring, wie `"$"`, `"€"`, `"Dollar"` oder `"Euro"`. Nur vorhanden, wenn `options.style` `"currency"` ist. Die Form (`"code"`, `"symbol"`, `"narrowSymbol"` oder `"name"`) kann über `options.currencyDisplay` gesteuert werden.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eine der obigen erkannt wird; sollte selten auftreten.

## Beispiele

### Verwendung von formatToParts()

Die Methode `format()` gibt lokalisierte, opake Strings aus, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieses Strings anpassen oder ihn mit anderen Texten kombinieren. Die Methode `formatToParts()` produziert dieselben Informationen in Teilen:

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

Jetzt sind die Informationen separat verfügbar und können auf angepasste Weise formatiert und wieder zusammengefügt werden. Zum Beispiel durch die Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um zusätzliche Markups für bestimmte Komponenten hinzuzufügen.

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
