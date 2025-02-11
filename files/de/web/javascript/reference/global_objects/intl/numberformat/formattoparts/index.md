---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/NumberFormat/format", "format()")}} zurückgegeben würde. Diese Methode ist nützlich, um benutzerdefinierte Zeichenfolgen aus den lokalspezifischen Token zu erstellen.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.formatToParts")}}

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
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden auf dieselbe Weise analysiert wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), mit der Ausnahme, dass `formatToParts()` den exakten Wert verwendet, den der String darstellt, um Präzisionsverluste zu vermeiden, die bei der impliziten Konvertierung in eine Zahl entstehen könnten.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Zahl in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils eine Zeichenfolge enthalten. Die Verkettung der Zeichenfolge in `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/NumberFormat/format", "format()")}}. Der `type` kann einer der folgenden sein:

- `literal`
  - : Jede Zeichenfolge, die Teil des Formatmusters ist, zum Beispiel `" "`. Beachten Sie, dass gängige Token wie das Dezimaltrennzeichen oder die Plus-/Minuszeichen eigene Typen haben.
- `integer`
  - : Der Ganzzahlteil der Zahl oder ein Abschnitt davon, wenn Gruppierungen verwendet werden (gesteuert durch `options.useGrouping`).
- `group`
  - : Das Gruppentrennzeichen, wie `","`. Nur vorhanden, wenn Gruppierungen verwendet werden (gesteuert durch `options.useGrouping`).
- `decimal`
  - : Das Dezimaltrennzeichen, wie `"."`. Nur vorhanden, wenn ein `fraction`-Teil vorhanden ist.
- `fraction`
  - : Der Bruchteil der Zahl.
- `compact`
  - : Der kompakte Exponent, wie `"M"` oder `"thousands"`. Nur vorhanden, wenn `options.notation` `"compact"` ist. Die Form (`"short"` oder `"long"`) kann über `options.compactDisplay` gesteuert werden.
- `exponentSeparator`
  - : Der Exponententrenner, wie `"E"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `exponentMinusSign`
  - : Das Minuszeichen für Exponenten, wie `"-"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist und der Exponent negativ ist.
- `exponentInteger`
  - : Der ganzzahlige Wert des Exponenten. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `nan`
  - : Eine Zeichenfolge, die {{jsxref("NaN")}} darstellt, wie `"NaN"`. Dies ist das einzige Token, das die Zahl selbst darstellt, wenn die Zahl `NaN` ist.
- `infinity`
  - : Eine Zeichenfolge, die {{jsxref("Infinity")}} oder `-Infinity` darstellt, wie `"∞"`. Dies ist das einzige Token, das die Zahl selbst darstellt, wenn die Zahl `Infinity` oder `-Infinity` ist.
- `plusSign`
  - : Das Pluszeichen, wie `"+"`.
- `minusSign`
  - : Das Minuszeichen, wie `"-"`.
- `percentSign`
  - : Das Prozentzeichen, wie `"%"`. Nur vorhanden, wenn `options.style` `"percent"` ist.
- `unit`
  - : Die Einheit als Zeichenfolge, wie `"l"` oder `"litres"`. Nur vorhanden, wenn `options.style` `"unit"` ist. Die Form (`"short"`, `"narrow"`, oder `"long"`) kann über `options.unitDisplay` gesteuert werden.
- `currency`
  - : Die Währungszeichenfolge, wie `"$"`, `"€"`, `"Dollar"` oder `"Euro"`. Nur vorhanden, wenn `options.style` `"currency"` ist. Die Form (`"code"`, `"symbol"`, `"narrowSymbol"` oder `"name"`) kann über `options.currencyDisplay` gesteuert werden.
- `unknown`
  - : Reserviert für jedes Token, das nicht als einer der oben genannten Typen erkannt wird; sollte selten auftreten.

## Beispiele

### Verwendung von formatToParts()

Die `format()`-Methode gibt lokalisierte und undurchsichtige Zeichenfolgen aus, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie die Formatierung dieser Zeichenfolge jedoch anpassen oder mit anderen Texten kombinieren. Die `formatToParts()`-Methode liefert dieselbe Information in Teilen:

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

Nun sind die Informationen separat verfügbar und können auf eine angepasste Weise formatiert und wieder zusammengefügt werden, zum Beispiel durch die Nutzung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um für bestimmte Komponenten zusätzliches Markup einzufügen.

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
