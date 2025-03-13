---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`formatToParts()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeden Teil des formatierten Strings darstellen, der von {{jsxref("Intl/NumberFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich, um benutzerdefinierte Strings aus den lokalisierungsspezifischen Token zu erstellen.

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
  - : Eine {{jsxref("Number")}}, ein {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise geparst wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), mit der Ausnahme, dass `formatToParts()` den genauen Wert verwendet, den der String darstellt, um einen Präzisionsverlust bei der impliziten Umwandlung in eine Zahl zu vermeiden.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Zahl in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die String-Konkatenation von `value`, in der bereitgestellten Reihenfolge, ergibt den gleichen String wie {{jsxref("Intl/NumberFormat/format", "format()")}}. Der `type` kann einer der folgenden sein:

- `literal`
  - : Jeder String, der Teil des Formatmusters ist, zum Beispiel `" "`. Beachten Sie, dass häufig verwendete Token wie Dezimaltrennzeichen oder Plus-/Minuszeichen ihre eigenen Token-Typen haben.
- `integer`
  - : Der ganzzahlige Teil der Zahl oder ein Segment davon, wenn Gruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `group`
  - : Der Gruppentrennzeichen-String, wie `","`. Nur vorhanden bei Verwendung der Gruppierung (gesteuert durch `options.useGrouping`).
- `decimal`
  - : Das Dezimaltrennzeichen, wie `"."`. Nur vorhanden, wenn `fraction` vorhanden ist.
- `fraction`
  - : Der bruchhafte Teil der Zahl.
- `compact`
  - : Der kompakte Exponent, wie `"M"` oder `"tausend"`. Nur vorhanden, wenn `options.notation` `"compact"` ist. Die Form (`"short"` oder `"long"`) kann über `options.compactDisplay` gesteuert werden.
- `exponentSeparator`
  - : Das Exponententrennzeichen, wie `"E"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `exponentMinusSign`
  - : Der Exponenten-Minuszeichen-String, wie `"-"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist und der Exponent negativ ist.
- `exponentInteger`
  - : Der ganzzahlige Wert des Exponenten. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `nan`
  - : Ein String, der {{jsxref("NaN")}} darstellt, wie `"NaN"`. Dies ist das einzige Token, das die Zahl selbst repräsentiert, wenn die Zahl `NaN` ist.
- `infinity`
  - : Ein String, der {{jsxref("Infinity")}} oder `-Infinity` darstellt, wie `"∞"`. Dies ist das einzige Token, das die Zahl selbst repräsentiert, wenn die Zahl `Infinity` oder `-Infinity` ist.
- `plusSign`
  - : Das Pluszeichen, wie `"+"`.
- `minusSign`
  - : Das Minuszeichen, wie `"-"`.
- `percentSign`
  - : Das Prozentzeichen, wie `"%"`. Nur vorhanden, wenn `options.style` `"percent"` ist.
- `unit`
  - : Der Einheiten-String, wie `"l"` oder `"Liter"`. Nur vorhanden, wenn `options.style` `"unit"` ist. Die Form (`"short"`, `"narrow"`, oder `"long"`) kann über `options.unitDisplay` gesteuert werden.
- `currency`
  - : Der Währungs-String, wie `"$"`, `"€"`, `"Dollar"`, oder `"Euro"`. Nur vorhanden, wenn `options.style` `"currency"` ist. Die Form (`"code"`, `"symbol"`, `"narrowSymbol"`, oder `"name"`) kann über `options.currencyDisplay` gesteuert werden.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der oben genannten erkannt wird; sollte selten auftreten.

## Beispiele

### Verwendung von formatToParts()

Die `format()` Methode gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieses Strings anpassen oder es mit anderen Texten verknüpfen. Die `formatToParts()` Methode liefert die gleichen Informationen in Teilen:

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

Nun sind die Informationen separat verfügbar und können angepasst und wieder zusammengefügt werden. Zum Beispiel durch die Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um zusätzliche Markup für bestimmte Komponenten einzufügen.

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
