---
title: Intl.NumberFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`formatToParts()`** Methode der {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein Array von Objekten zurück, das jeden Teil des formatierten Strings darstellt, der von {{jsxref("Intl/NumberFormat/format", "format()")}} zurückgegeben werden würde. Sie ist nützlich, um benutzerdefinierte Strings aus den lokalisierungsspezifischen Token zu erstellen.

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
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise geparst wie bei der [Zahlkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `formatToParts()` den genauen Wert des Strings verwendet, um einen Verlust an Präzision bei der impliziten Umwandlung in eine Zahl zu vermeiden.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Zahl in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die Stringverkettung von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/NumberFormat/format", "format()")}}. Der `type` kann einer der folgenden sein:

- `literal`
  - : Jeder String, der Teil des Formatmusters ist; zum Beispiel `" "`. Beachten Sie, dass gängige Zeichen wie das Dezimaltrennzeichen oder Plus-/Minuszeichen ihre eigenen Token-Typen haben.
- `integer`
  - : Der ganzzahlige Teil der Zahl oder ein Segment davon, wenn Gruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `group`
  - : Der Gruppentrennzeichen-String, wie `","`. Nur vorhanden, wenn Gruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `decimal`
  - : Der Dezimaltrennzeichen-String, wie `"."`. Nur vorhanden, wenn `fraction` vorhanden ist.
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
  - : Ein String, der {{jsxref("NaN")}} darstellt, wie `"NaN"`. Dies ist das einzige Token, das die Zahl selbst darstellt, wenn die Zahl `NaN` ist.
- `infinity`
  - : Ein String, der {{jsxref("Infinity")}} oder `-Infinity` darstellt, wie `"∞"`. Dies ist das einzige Token, das die Zahl selbst darstellt, wenn die Zahl `Infinity` oder `-Infinity` ist.
- `plusSign`
  - : Das Pluszeichen, wie `"+"`.
- `minusSign`
  - : Das Minuszeichen, wie `"-"`.
- `percentSign`
  - : Das Prozentzeichen, wie `"%"`. Nur vorhanden, wenn `options.style` `"percent"` ist.
- `unit`
  - : Der Einheiten-String, wie `"l"` oder `"litres"`. Nur vorhanden, wenn `options.style` `"unit"` ist. Die Form (`"short"`, `"narrow"`, oder `"long"`) kann über `options.unitDisplay` gesteuert werden.
- `currency`
  - : Der Währungs-String, wie `"$"`, `"€"`, `"Dollar"` oder `"Euro"`. Nur vorhanden, wenn `options.style` `"currency"` ist. Die Form (`"code"`, `"symbol"`, `"narrowSymbol"` oder `"name"`) kann über `options.currencyDisplay` gesteuert werden.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der oben genannten erkannt wird; sollte selten vorkommen.

## Beispiele

### Verwenden von formatToParts()

Die `format()`-Methode gibt lokalisierte, undurchsichtige Strings zurück, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieses Strings anpassen oder ihn mit anderen Texten verweben. Die `formatToParts()`-Methode liefert die gleichen Informationen in Teilen:

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

Jetzt sind die Informationen separat verfügbar, und sie können wieder in benutzerdefinierter Weise formatiert und verknüpft werden. Beispielsweise durch Verwendung von {{jsxref("Array.prototype.map()")}}, [arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einem [switch statement](/de/docs/Web/JavaScript/Reference/Statements/switch), [template literals](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um zusätzliches Markup für bestimmte Komponenten einzufügen.

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
