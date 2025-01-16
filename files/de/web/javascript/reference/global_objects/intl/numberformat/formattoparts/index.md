---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren würden, der von {{jsxref("Intl/NumberFormat/format", "format()")}} zurückgegeben wird. Es ist nützlich, um benutzerdefinierte Strings aus den lokale-spezifischen Token zu erstellen.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(number)
```

### Parameter

- `number`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst, außer dass `formatToParts()` den genauen Wert verwendet, den der String repräsentiert, um einen Präzisionsverlust bei der impliziten Umwandlung in eine Zahl zu vermeiden.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte Zahl in Teilen enthält. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die String-Verkettung von `value` in der angegebenen Reihenfolge führt zum gleichen String wie {{jsxref("Intl/NumberFormat/format", "format()")}}. Der `type` kann einer der folgenden sein:

- `literal`
  - : Jeder String, der Teil des Formatmusters ist; zum Beispiel `" "`. Beachten Sie, dass gängige Token wie der Dezimaltrennzeichen oder die Plus-/Minuszeichen eigene Tokentypen haben.
- `integer`
  - : Der ganzzahlige Teil der Zahl oder ein Segment davon, wenn Gruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `group`
  - : Der Gruppentrennzeichen-String, wie `","`. Nur vorhanden, wenn Gruppierung verwendet wird (gesteuert durch `options.useGrouping`).
- `decimal`
  - : Der Dezimaltrennzeichen-String, wie `"."`. Nur vorhanden, wenn `fraction` vorhanden ist.
- `fraction`
  - : Der bruchartige Teil der Zahl.
- `compact`
  - : Der kompakte Exponent, wie `"M"` oder `"thousands"`. Nur vorhanden, wenn `options.notation` `"compact"` ist. Die Form (`"short"` oder `"long"`) kann über `options.compactDisplay` gesteuert werden.
- `exponentSeparator`
  - : Der Exponententrennzeichen, wie `"E"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `exponentMinusSign`
  - : Das Exponenten-Minuszeichen, wie `"-"`. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist und der Exponent negativ ist.
- `exponentInteger`
  - : Der ganzzahlige Wert des Exponenten. Nur vorhanden, wenn `options.notation` `"scientific"` oder `"engineering"` ist.
- `nan`
  - : Ein String, der {{jsxref("NaN")}} repräsentiert, wie `"NaN"`. Dies ist das einzige Token, das die Zahl selbst repräsentiert, wenn die Zahl `NaN` ist.
- `infinity`
  - : Ein String, der {{jsxref("Infinity")}} oder `-Infinity` repräsentiert, wie `"∞"`. Dies ist das einzige Token, das die Zahl selbst repräsentiert, wenn die Zahl `Infinity` oder `-Infinity` ist.
- `plusSign`
  - : Das Pluszeichen, wie `"+"`.
- `minusSign`
  - : Das Minuszeichen, wie `"-"`.
- `percentSign`
  - : Das Prozentzeichen, wie `"%"`. Nur vorhanden, wenn `options.style` `"percent"` ist.
- `unit`
  - : Der Einheitstring, wie `"l"` oder `"litres"`. Nur vorhanden, wenn `options.style` `"unit"` ist. Die Form (`"short"`, `"narrow"`, oder `"long"`) kann über `options.unitDisplay` gesteuert werden.
- `currency`
  - : Der Währungsstring, wie `"$"`, `"€"`, `"Dollar"`, oder `"Euro"`. Nur vorhanden, wenn `options.style` `"currency"` ist. Die Form (`"code"`, `"symbol"`, `"narrowSymbol"`, oder `"name"`) kann über `options.currencyDisplay` gesteuert werden.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der oben genannten erkannt wird; sollte selten auftreten.

## Beispiele

### Verwendung von formatToParts()

Die Methode `format()` gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise die Formatierung dieses Strings anpassen oder ihn mit anderen Texten durchsetzen. Die Methode `formatToParts()` produziert dieselben Informationen in Teilen:

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

Jetzt sind die Informationen separat verfügbar und können auf eine benutzerdefinierte Weise formatiert und neu verkettet werden. Zum Beispiel durch Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um zusätzliche Markup für bestimmte Komponenten einzufügen.

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
